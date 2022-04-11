# kwin-window-grid
Quick shortcuts for arranging windows in a specified grid with optional gaps

## Installation
### Using the prepackaged release
Download the latest release from the [releases page](https://github.com/RubixDev/kwin-window-grid/releases) or with:
```bash
wget https://github.com/RubixDev/kwin-window-grid/releases/latest/download/window-grid.kwinscript
```

To install the file:
```bash
kpackagetool5 --type=KWin/Script -i window-grid.kwinscript
```
> Note: Use `-u` instead of `-i` when updating

To get the config menu also run these two commands:
```bash
mkdir -p ~/.local/share/kservices5
ln -s ~/.local/share/kwin/scripts/window-grid/metadata.desktop ~/.local/share/kservices5/window-grid.desktop
```

### Building from source
First make sure you have NodeJS and NPM installed. Then follow these steps:

Clone this repo:
```bash
git clone https://github.com/RubixDev/kwin-window-grid
```

Install dependencies:
```bash
npm i
```

Build and install script:
```bash
npm start
```

## Usage
### Configuration
The gap and grid size can be configured in `System Settings` -> `Window Management` -> `KWin Scripts` with the gear icon next to the script.

> Note: After changing the settings you must reload the script. (Uncheck, `Apply`, Check, `Apply`)

### Shortcuts
The script registers a bunch of new shortcuts, all prefixed with 'Window Grid: '

| Name                       | Default Keybinding  |
| -------------------------- | ------------------- |
| Maximize Window            | `Meta+Up`           |
| Minimize Window            | `Meta+Down`         |
| Tile Window to left Edge   | `Meta+Left`         |
| Tile Window to right Edge  | `Meta+Right`        |
| Tile Window to top Edge    | `Meta+PgUp`         |
| Tile Window to bottom Edge | `Meta+PgDown`       |
| Increase Grid Width        | `Meta+Alt+L`        |
| Decrease Grid Width        | `Meta+Alt+J`        |
| Increase Grid Height       | `Meta+Alt+I`        |
| Decrease Grid Height       | `Meta+Alt+K`        |
| Move right edge right      | `Meta+Shift+L`      |
| Move right edge left       | `Meta+Shift+J`      |
| Move bottom edge down      | `Meta+Shift+K`      |
| Move bottom edge up        | `Meta+Shift+I`      |
| Move left edge right       | `Meta+Ctrl+L`       |
| Move left edge left        | `Meta+Ctrl+J`       |
| Move top edge down         | `Meta+Ctrl+K`       |
| Move top edge up           | `Meta+Ctrl+I`       |
| Move window right          | `Meta+Ctrl+Shift+L` |
| Move window left           | `Meta+Ctrl+Shift+J` |
| Move window down           | `Meta+Ctrl+Shift+K` |
| Move window up             | `Meta+Ctrl+Shift+I` |

> Note: Some of the default keybindings may not be set when other shortcuts already use them. You can set them manually in `System Settings` -> `Shortcuts` -> `KWin`
