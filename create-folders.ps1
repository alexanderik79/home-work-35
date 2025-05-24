# create-folders.ps1

# Список папок
$folders = @(
  "src",
  "src/assets",
  "src/assets/fonts",
  "src/assets/images",
  "src/styles"
)

# Создание папок
foreach ($folder in $folders) {
  New-Item -ItemType Directory -Path $folder -Force | Out-Null
}

# src/index.js
$jsPath = "src/index.js"
if (-Not (Test-Path $jsPath)) {
  Set-Content -Path $jsPath -Value "// Entry point"
  Write-Host "📄 Created: $jsPath"
}

# src/index.html
$htmlPath = "src/index.html"
if (-Not (Test-Path $htmlPath)) {
  $htmlContent = @"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Project</title>
  <link rel="stylesheet" href="./styles/style.css" />
</head>
<body>
  <h1>Hello World</h1>
  <script src="./index.js"></script>
</body>
</html>
"@
  Set-Content -Path $htmlPath -Value $htmlContent
  Write-Host "📄 Created: $htmlPath"
}

# src/styles/style.css
$cssPath = "src/styles/style.css"
if (-Not (Test-Path $cssPath)) {
  $cssContent = @"
body {
  font-family: Arial, sans-serif;
  margin: 40px;
  background: #f8f8f8;
}
"@
  Set-Content -Path $cssPath -Value $cssContent
  Write-Host "📄 Created: $cssPath"
}

Write-Host "`n✅ Project structure is ready."
