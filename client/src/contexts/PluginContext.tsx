import { ReactNode, createContext, useState, useContext } from 'react';

export interface PluginContextType {
  // Set from the backend (see update_plugin_params in server.py) once a
  // plugin's diffraview-plugin.json manifest has been loaded; null when no
  // plugin is loaded.
  pluginName: string | null;
  pluginViewerUrl: string | null;
  pluginActionsUrl: string | null;
  pluginLogoUrl: string | null;
  // The plugin currently shown in place of DiffraView's own panels, or null
  // to show DiffraView's own panels. Distinct from pluginName so a loaded
  // plugin can be deselected (see App.tsx/MainPanels.tsx) without unloading
  // it from the backend.
  activePlugin: string | null;
  selectPlugin: (name: string | null) => void;
  updateParams: (params: Record<string, any>) => void;
  reset: () => void;
}

const PluginContext = createContext<PluginContextType | undefined>(undefined);

export const PluginProvider = ({ children }: { children: ReactNode }) => {

  const [pluginName, setPluginName] = useState<string | null>(null);
  const [pluginViewerUrl, setPluginViewerUrl] = useState<string | null>(null);
  const [pluginActionsUrl, setPluginActionsUrl] = useState<string | null>(null);
  const [pluginLogoUrl, setPluginLogoUrl] = useState<string | null>(null);
  // Which loaded plugin (if any) is currently shown in place of the normal
  // DiffraView view. Distinct from pluginName: switching to "None" here
  // just returns to the normal view without unloading the plugin, so the
  // user can switch straight back to it from the dropdown.
  const [activePlugin, setActivePlugin] = useState<string | null>(null);

  const setPluginNameAndActivate = (name: string | null) => {
    setPluginName(name);
    // A fresh load (or unload) should also update which view is shown.
    setActivePlugin(name);
  };

  const actionMap: Record<string, any> = {
    "name": setPluginNameAndActivate,
    "viewerUrl": setPluginViewerUrl,
    "actionsUrl": setPluginActionsUrl,
    "logoUrl": setPluginLogoUrl,
  };

  const selectPlugin = (name: string | null) => {
    setActivePlugin(name);
  };

  const reset = () => {
    setPluginName(null);
    setPluginViewerUrl(null);
    setPluginActionsUrl(null);
    setPluginLogoUrl(null);
    setActivePlugin(null);
  };

  const updateParams = (params: Record<string, any>) => {
    Object.entries(params).forEach(([key, value]) => {
      if (actionMap.hasOwnProperty(key)) {
        actionMap[key](value);
      } else {
        console.warn("Tried to update", key, "but not found in PluginContext");
      }
    });
  };

  return (
    <PluginContext.Provider
      value={{
        pluginName,
        pluginViewerUrl,
        pluginActionsUrl,
        pluginLogoUrl,
        activePlugin,
        selectPlugin,
        updateParams,
        reset,
      }}
    >
      {children}
    </PluginContext.Provider>
  );

};

export const usePluginContext = () => {
  const context = useContext(PluginContext);
  if (!context) {
    throw new Error('usePluginContext must be used within a PluginProvider');
  }
  return context;
};
