const gameState = Object.freeze({ IDLE: 0, PLAYING: 1 })
const guessOutcome = Object.freeze({ GOOD_GUESS: 0, BAD_GUESS: 1, ALREADY_GUESSED: 2, })

module.exports = {
    gameState,
    guessOutcome
}