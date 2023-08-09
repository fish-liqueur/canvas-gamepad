import 

export function renderGamepad(state: GameCurrentState) {
    const { board, gameSizeInBlocks, pause, started, lost } = state;
    const showOverlay = pause || !started || lost;

    this.opacityFull = showOverlay ? 0.5 : 1;

    this.clearView();
    this.renderGameBoard(board, gameSizeInBlocks);
    this.renderInfoBoard(state);

    if (showOverlay) this.renderOverlay(state);
}