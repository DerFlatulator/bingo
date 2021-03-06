
export function clickCell(x, y) {
    return {
        type: 'board.clickCell',
        payload: { x, y }
    }
}

export function clickBingo() {
    return {
        type: 'game.bingo',
        payload: null,
        socket: true
    }
}

export function setBoard(board) {
    return {
        type: 'board.set',
        payload: board
    }
}

export function callBall(ball) {
    return {
        type: 'ball.call',
        payload: ball
    }
}

export function joinGame(gameId) {
    return (dispatch, getState) => {
        dispatch({
            type: 'game.join',
            payload: gameId,
            socket: true
        });
        
        dispatch({
            waitFor: 'board.set',
            timeout: 2000,
            onTimeout: {
                type: 'game.joinTimeout',
                payload: gameId
            },
            onCancel: null
        })
    }
}