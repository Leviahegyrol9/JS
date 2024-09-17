@echo off
title Git push
color f
setlocal
for /F "tokens=2 delims==." %%i in ('"wmic os get localdatetime /value"') do set datetime=%%i
set year=%datetime:~0,4%
set month=%datetime:~4,2%
set day=%datetime:~6,2%
cd ..
git status
git add *
git status
git commit -m %year%.%month%.%day%
git push
endlocal
timeout /t 3 /nobreak > nul