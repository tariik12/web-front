@echo off
setlocal EnableDelayedExpansion

set "counter=1"

for %%f in (*.*) do (
    if /I not "%%f"=="rename_files.bat" (
        set "ext=%%~xf"
        ren "%%f" "airbnbservice!counter!!ext!"
        set /a counter+=1
    )
)

echo Done! All files renamed successfully.
pause
