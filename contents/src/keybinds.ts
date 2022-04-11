import { setInGrid, grid, resizeInGrid, moveInGrid } from './manager'

const shortcutPrefix = 'Window Grid: '

/* ------------ Maximize/Minimize and Edges ------------ */
// Won't set keys as default because 'Quick Tile Window to ...'
// and 'Maximize/Minimize Window' have them as defaults
registerShortcut(
    shortcutPrefix + 'Maximize Window',
    shortcutPrefix + 'Maximize Window',
    'Meta+Up',
    () => setInGrid(0, 0, -1, -1),
)
registerShortcut(
    shortcutPrefix + 'Minimize Window',
    shortcutPrefix + 'Minimize Window',
    'Meta+Down',
    () => workspace.activeClient.minimized = true,
)
registerShortcut(
    shortcutPrefix + 'Tile Window to left Edge',
    shortcutPrefix + 'Tile Window to left Edge',
    'Meta+Left',
    () => setInGrid(0, 0, 0, -1),
)
registerShortcut(
    shortcutPrefix + 'Tile Window to right Edge',
    shortcutPrefix + 'Tile Window to right Edge',
    'Meta+Right',
    () => setInGrid(-1, 0, -1, -1),
)
registerShortcut(
    shortcutPrefix + 'Tile Window to top Edge',
    shortcutPrefix + 'Tile Window to top Edge',
    'Meta+PgUp',
    () => setInGrid(0, 0, -1, 0),
)
registerShortcut(
    shortcutPrefix + 'Tile Window to bottom Edge',
    shortcutPrefix + 'Tile Window to bottom Edge',
    'Meta+PgDown',
    () => setInGrid(0, -1, -1, -1),
)

/* ------------ Grid Size ------------ */
registerShortcut(
    shortcutPrefix + 'Increase Grid Width',
    shortcutPrefix + 'Increase Grid Width',
    'Meta+Alt+L',
    () => grid.width < 10 ? grid.width++ : {},
)
registerShortcut(
    shortcutPrefix + 'Decrease Grid Width',
    shortcutPrefix + 'Decrease Grid Width',
    'Meta+Alt+J',
    () => grid.width > 2 ? grid.width-- : {},
)
registerShortcut(
    shortcutPrefix + 'Increase Grid Height',
    shortcutPrefix + 'Increase Grid Height',
    'Meta+Alt+I',
    () => grid.height < 10 ? grid.height++ : {},
)
registerShortcut(
    shortcutPrefix + 'Decrease Grid Height',
    shortcutPrefix + 'Decrease Grid Height',
    'Meta+Alt+K',
    () => grid.height > 2 ? grid.height-- : {},
)

/* ------------ Resize bottom/right edges ------------ */
registerShortcut(
    shortcutPrefix + 'Move right edge right',
    shortcutPrefix + 'Move right edge right',
    'Meta+Shift+L',
    () => resizeInGrid('right', 'right+bottom'),
)
registerShortcut(
    shortcutPrefix + 'Move right edge left',
    shortcutPrefix + 'Move right edge left',
    'Meta+Shift+J',
    () => resizeInGrid('left', 'right+bottom'),
)
registerShortcut(
    shortcutPrefix + 'Move bottom edge down',
    shortcutPrefix + 'Move bottom edge down',
    'Meta+Shift+K',
    () => resizeInGrid('down', 'right+bottom'),
)
registerShortcut(
    shortcutPrefix + 'Move bottom edge up',
    shortcutPrefix + 'Move bottom edge up',
    'Meta+Shift+I',
    () => resizeInGrid('up', 'right+bottom'),
)

/* ------------ Resize top/left edges ------------ */
registerShortcut(
    shortcutPrefix + 'Move left edge right',
    shortcutPrefix + 'Move left edge right',
    'Meta+Ctrl+L',
    () => resizeInGrid('right', 'left+top'),
)
registerShortcut(
    shortcutPrefix + 'Move left edge left',
    shortcutPrefix + 'Move left edge left',
    'Meta+Ctrl+J',
    () => resizeInGrid('left', 'left+top'),
)
registerShortcut(
    shortcutPrefix + 'Move top edge down',
    shortcutPrefix + 'Move top edge down',
    'Meta+Ctrl+K',
    () => resizeInGrid('down', 'left+top'),
)
registerShortcut(
    shortcutPrefix + 'Move top edge up',
    shortcutPrefix + 'Move top edge up',
    'Meta+Ctrl+I',
    () => resizeInGrid('up', 'left+top'),
)

/* ------------ Move in grid ------------ */
registerShortcut(
    shortcutPrefix + 'Move window right',
    shortcutPrefix + 'Move window right',
    'Meta+Ctrl+Shift+L',
    () => moveInGrid('right')
)
registerShortcut(
    shortcutPrefix + 'Move window left',
    shortcutPrefix + 'Move window left',
    'Meta+Ctrl+Shift+J',
    () => moveInGrid('left')
)
registerShortcut(
    shortcutPrefix + 'Move window down',
    shortcutPrefix + 'Move window down',
    'Meta+Ctrl+Shift+K',
    () => moveInGrid('down')
)
registerShortcut(
    shortcutPrefix + 'Move window up',
    shortcutPrefix + 'Move window up',
    'Meta+Ctrl+Shift+I',
    () => moveInGrid('up')
)
