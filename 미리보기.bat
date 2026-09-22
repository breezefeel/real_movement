@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 브라우저에서 http://127.0.0.1:8765/ 를 엽니다.
echo 이 창은 닫지 마세요.
start "" "http://127.0.0.1:8765/"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0미리보기.ps1"
pause
