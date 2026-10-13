@echo on

mkdir _build
cd _build

:: Configure
cmake ../dials "-DCMAKE_INSTALL_PREFIX=%PREFIX%" "-DPython_EXECUTABLE=%PYTHON%"
if %errorlevel% neq 0 exit /b %errorlevel%

:: Build
cmake --build . --config Release
if %errorlevel% neq 0 exit /b %errorlevel%

:: Install Binary libraries
cmake --install . --config Release
if %errorlevel% neq 0 exit /b %errorlevel%

:: Install python package
"%PYTHON%" -mpip install -v ../dials
if %errorlevel% neq 0 exit /b %errorlevel%