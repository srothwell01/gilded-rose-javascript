'use strict'

const Item = require('../src/gilded_rose')

describe('Items in Gilded Rose system', () => {
    describe('Item', () => {
        it('testing items', () => {
            const item = new Item('+5 Dexterity Vest', 10, 20)
            expect(item.name).toEqual('+5 Dexterity Vest')
        })
    })
})
