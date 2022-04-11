const GAP_SIZE = 14
export let grid = { width: 3, height: 2 }

/**
 * Resize a window to the given grid cells. 0|0 is the top left cell
 * @param startX Starting cell in X direction
 * @param startY Starting cell in Y direction
 * @param endX Ending cell in X direction
 * @param endY Ending cell in Y direction
 * @param client The client to resize. Defaults to the active client
 * @param gap The gap size to use
 */
export function setInGrid(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    client = workspace.activeClient,
    gap = GAP_SIZE,
) {
    while (startX < 0) startX = grid.width  + startX
    while (startY < 0) startY = grid.height + startY
    while (endX   < 0) endX   = grid.width  + endX
    while (endY   < 0) endY   = grid.height + endY

    startX = startX % grid.width
    startY = startY % grid.height
    endX   = endX   % grid.width
    endY   = endY   % grid.height

    if (endX < startX || endY < startY) return

    const diffX = endX - startX
    const diffY = endY - startY

    const screen     = workspace.clientArea(KWin.ScreenArea, client)
    const cellWidth  = (screen.width  - (grid.width  + 1) * gap) / grid.width
    const cellHeight = (screen.height - (grid.height + 1) * gap) / grid.height

    client.setMaximize(false, false)
    client.frameGeometry = {
        x:      screen.x + startX * cellWidth  + (startX + 1) * gap,
        y:      screen.y + startY * cellHeight + (startY + 1) * gap,
        width:  (diffX + 1) * cellWidth  + diffX * gap,
        height: (diffY + 1) * cellHeight + diffY * gap,
    }
}

/**
 * Gets the position of a client in the current grid, or the nearest if not properly aligned
 * @param client The client to get the position of. Defaults to the active client
 * @returns The position in the grid with `startX`, `startY`, `endX` and `endY`
 */
function getInGrid(client = workspace.activeClient): {
    startX: number,
    startY: number,
    endX: number,
    endY: number
} {
    const screen     = workspace.clientArea(KWin.ScreenArea, client)
    const clientSize = client.frameGeometry
    const cellWidth  = screen.width  / grid.width
    const cellHeight = screen.height / grid.height
    const gridLinesX = [...new Array(grid.width  + 1)].map((_, i) => screen.x + i * cellWidth )
    const gridLinesY = [...new Array(grid.height + 1)].map((_, i) => screen.y + i * cellHeight)

    const startPixelX = gridLinesX.map(line => [Math.abs(clientSize.x                     - line), line]).reduce((a, b) => a[0] < b[0] ? a : b)[1]
    const startPixelY = gridLinesY.map(line => [Math.abs(clientSize.y                     - line), line]).reduce((a, b) => a[0] < b[0] ? a : b)[1]
    const endPixelX   = gridLinesX.map(line => [Math.abs(clientSize.x + clientSize.width  - line), line]).reduce((a, b) => a[0] < b[0] ? a : b)[1]
    const endPixelY   = gridLinesY.map(line => [Math.abs(clientSize.y + clientSize.height - line), line]).reduce((a, b) => a[0] < b[0] ? a : b)[1]

    const startX = gridLinesX.indexOf(startPixelX)
    const startY = gridLinesY.indexOf(startPixelY)
    const endX   = gridLinesX.indexOf(endPixelX  ) - 1
    const endY   = gridLinesY.indexOf(endPixelY  ) - 1

    return { startX, startY, endX, endY }
}

/**
 * Resize a client in the grid
 * @param direction The direction to move the edge to
 * @param edgePair The pair of edges to be affected
 * @param client The client to resize. Defaults to the active client
 * @param gap The gap size to use
 */
export function resizeInGrid(
    direction: 'up' | 'down' | 'left' | 'right',
    edgePair: 'left+top' | 'right+bottom',
    client = workspace.activeClient,
    gap = GAP_SIZE,
) {
    const pos = getInGrid(client)

    if (direction === 'up') {
        if (edgePair === 'left+top') pos.startY--
        else pos.endY--
    } else if (direction === 'down') {
        if (edgePair === 'left+top') pos.startY++
        else pos.endY++
    } else if (direction === 'left') {
        if (edgePair === 'left+top') pos.startX--
        else pos.endX--
    } else {
        if (edgePair === 'left+top') pos.startX++
        else pos.endX++
    }

    setInGrid(pos.startX, pos.startY, pos.endX, pos.endY, client, gap)
}

/**
 * Move a client in the grid
 * @param direction The direction to move the client in
 * @param client The client to move. Defaults to the active client
 * @param gap The gap size to use
 */
export function moveInGrid(
    direction: 'up' | 'down' | 'left' | 'right',
    client = workspace.activeClient,
    gap = GAP_SIZE,
) {
    const pos = getInGrid(client)

    let diffX = 0
    let diffY = 0

    if (direction === 'up'   ) diffY = -1
    if (direction === 'down' ) diffY = +1
    if (direction === 'left' ) diffX = -1
    if (direction === 'right') diffX = +1

    pos.startX += diffX
    pos.endX   += diffX
    pos.startY += diffY
    pos.endY   += diffY

    setInGrid(pos.startX, pos.startY, pos.endX, pos.endY, client, gap)
}
