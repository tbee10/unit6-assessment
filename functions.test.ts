const {shuffleArray} = require('./utils')

describe('shuffleArray should contain an array', () => {
   expect(shuffleArray).toContain([])
});

describe('shuffleArray should be the same length', () => {
    expect(shuffleArray).toHaveLength(shuffleArray.length)
});