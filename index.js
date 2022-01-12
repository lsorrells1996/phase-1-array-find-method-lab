function superbowlWin (record) {
    const game = record.find(item => item.result === 'W');
    if (game === undefined) {
        return undefined;
    }
    return game.year;
}
