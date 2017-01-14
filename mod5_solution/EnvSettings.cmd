@echo off
@rem

cls
echo:
echo Set path ...
@rem
pause

set PYTHONPATH=C:\Apps\Python34

set PYTHONPATH=%PYTHONPATH%;%PYTHONPATH%\Scripts;%PYTHONPATH%\Lib;%PYTHONPATH%\Lib\site-packages

set PATH=%PATH%;%PYTHONPATH%
set %PATH%;C:\Program Files\Heroku\bin

dir

@echo Done.
