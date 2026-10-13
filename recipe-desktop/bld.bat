@echo on

:: Build the unpacked Electron app (client\release\win-unpacked\).
pushd client
:: npm is a .cmd script, so it needs `call` to return here.
call npm ci
if errorlevel 1 exit 1
call npm run dist:dir
if errorlevel 1 exit 1
popd

:: Install it where diffraview.launcher.find_desktop_app() looks.
if not exist "%PREFIX%\libexec\diffraview" mkdir "%PREFIX%\libexec\diffraview"
:: robocopy exits with 0-7 on success and 8 or more on failure.
robocopy client\release\win-unpacked "%PREFIX%\libexec\diffraview" /E /NFL /NDL /NJH /NJS
if %errorlevel% geq 8 exit 1
exit 0
