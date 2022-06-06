import { setInGrid, grid, resizeInGrid, moveInGrid } from './manager'

const shortcutPrefix = 'Window Grid: '

/* ------------ Maximize/Minimize and Edges ------------ */
// Won't set keys as default because 'Quick Tile Window to ...'
// and 'Maximize/Minimize Window' have them as defaults
// registerShortcut(
//     shortcutPrefix + 'Minimize Window',
//     shortcutPrefix + 'Minimize Window',
//     'Meta+Down',
//     () => workspace.activeClient.minimized = true,
// )
registerShortcut(
    shortcutPrefix + 'Top Left',
    shortcutPrefix + 'Top Left',
    'Meta+Ctrl+1',
    () => setInGrid(0, 0, 2, 0),
)
registerShortcut(
    shortcutPrefix + 'Top Right',
    shortcutPrefix + 'Top Right',
    'Meta+Ctrl+2',
    () => setInGrid(3, 0, 5, 0),
)
registerShortcut(
    shortcutPrefix + 'Bottom Left',
    shortcutPrefix + 'Bottom Left',
    'Meta+Ctrl+3',
    () => setInGrid(0, 1, 2, 1),
)
registerShortcut(
    shortcutPrefix + 'Bottom Right',
    shortcutPrefix + 'Bottom Right',
    'Meta+Ctrl+4',
    () => setInGrid(3, 1, 5, 1),
)
registerShortcut(
    shortcutPrefix + 'Center',
    shortcutPrefix + 'Center',
    'Meta+Ctrl+5',
    () => setInGrid(1, 0, 4, -1),
)
registerShortcut(
    shortcutPrefix + 'Maximize Window',
    shortcutPrefix + 'Maximize Window',
    'Meta+Ctrl+6',
    () => setInGrid(0, 0, -1, -1),
)
registerShortcut(
    shortcutPrefix + 'Left',
    shortcutPrefix + 'Left',
    'Meta+Ctrl+7',
    () => setInGrid(0, 0, 2, -1),
)
registerShortcut(
    shortcutPrefix + 'Right',
    shortcutPrefix + 'Right',
    'Meta+Ctrl+8',
    () => setInGrid(3, 0, -1, -1),
)
registerShortcut(
    shortcutPrefix + 'Left 1/3',
    shortcutPrefix + 'Left 1/3',
    'Meta+Ctrl+9',
    () => setInGrid(0, 0, 1, -1),
)
registerShortcut(
    shortcutPrefix + 'Middle 2/3',
    shortcutPrefix + 'Middle 2/3',
    'Meta+Ctrl+0',
    () => setInGrid(2, 0, 3, -1),
)
registerShortcut(
    shortcutPrefix + 'Right 3/3',
    shortcutPrefix + 'Right 3/3',
    'Meta+Ctrl+-',
    () => setInGrid(4, 0, 5, -1),
)
registerShortcut(
    shortcutPrefix + 'Left 2/3',
    shortcutPrefix + 'Left 3/3',
    'Meta+Ctrl+[',
    () => setInGrid(0, 0, 3, -1),
)
registerShortcut(
    shortcutPrefix + 'Right 2/3',
    shortcutPrefix + 'Right 3/3',
    'Meta+Ctrl+]',
    () => setInGrid(2, 0, -1, -1),
)
