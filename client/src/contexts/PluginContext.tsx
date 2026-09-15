import { ReactNode, createContext, useState, useContext } from 'react';

export interface PluginContextType {
  // Set from the backend (see update_plugin_params in server.py) once a
  // plugin's diffraview-plugin.json manifest has been loaded; null when no
  // plugin is loaded.
  pluginName: string | null;
  viewerUrl: string | null;
  actionsUrl: string | null;
  logoUrl: string | null;
  // The plugin currently shown in place of DiffraView's own panels, or null
  // to show DiffraView's own panels. Distinct from pluginName so a loaded
  // plugin can be deselected (see App.tsx/MainPanels.tsx) without unloading
  // it from the backend.
  activePlugin: string | null;
  selectPlugin: (name: string | null) => void;
  updateParams: (params: Record<string, any>) => void;
}

const PluginContext = createContext<PluginContextType | undefined>(undefined);

export const PluginProvider = ({ children }: { children: ReactNode }) => {

  const [pluginName, setPluginName] = useState<string | null>(null);
  const [viewerUrl, setViewerUrl] = useState<string | null>(null);
  const [actionsUrl, setActionsUrl] = useState<string | null>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [activePlugin, setActivePlugin] = useState<string | null>(null);

  const selectPlugin = (name: string | null) => {
    setActivePlugin(name);
  };

  const updateName = (name: string | null) => {
    setPluginName(name);
    // A newly-loaded plugin is shown immediately; an unloaded one can no
    // longer be the active selection.
    setActivePlugin(name);
  };

  const actionMap: Record<string, any> = {
    "name": updateName,
    "viewerUrl": setViewerUrl,
    "actionsUrl": setActionsUrl,
    "logoUrl": setLogoUrl,
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
        viewerUrl,
        actionsUrl,
        logoUrl,
        activePlugin,
        selectPlugin,
        updateParams,
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
