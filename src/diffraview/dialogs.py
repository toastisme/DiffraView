"""Native file dialogs for browser mode (Electron sends its own paths)."""

PHIL_WILDCARD = "Phil files (*.phil)|*.phil|All files (*.*)|*.*"


def select_paths(msg, title, directory=False, multiple=False, wildcard="*.*"):
    """
    Paths the user picked for a browse_* or load_* command (empty if cancelled).

    The Electron client shows its own native dialog and sends the result as
    msg["paths"]. Otherwise (browser mode) fall back to a wx dialog on the
    server, which is the same machine as the browser. wx is imported lazily so
    the server runs in DIALS environments without wxPython when used from
    Electron.
    """
    if "paths" in msg:
        return list(msg["paths"] or [])

    import wx

    app = wx.App(False)
    if directory:
        dialog = wx.DirDialog(
            None, title, style=wx.DD_DEFAULT_STYLE | wx.DD_DIR_MUST_EXIST
        )
    else:
        style = wx.FD_OPEN | (wx.FD_MULTIPLE if multiple else 0)
        dialog = wx.FileDialog(None, title, wildcard=wildcard, style=style)

    paths = []
    if dialog.ShowModal() == wx.ID_OK:
        paths = [dialog.GetPath()] if directory else list(dialog.GetPaths())
    dialog.Destroy()
    app.Destroy()
    return paths


def select_save_path(msg, title, default_name, wildcard="All files (*.*)|*.*"):
    """
    Path the user chose to save to for a save_* or export command (None if
    cancelled). As select_paths, but with a save dialog.
    """
    if "paths" in msg:
        paths = msg["paths"] or []
        return paths[0] if paths else None

    import wx

    app = wx.App(False)
    dialog = wx.FileDialog(
        None,
        message=title,
        wildcard=wildcard,
        style=wx.FD_SAVE | wx.FD_OVERWRITE_PROMPT,
    )
    dialog.SetFilename(default_name)
    path = dialog.GetPath() if dialog.ShowModal() == wx.ID_OK else None
    dialog.Destroy()
    app.Destroy()
    return path
