describe("Gilded Rose", function() {

    it("should create item", () => {
        const item = new Item('+5 Dexterity Vest', 10, 20)
        expect(item.name).toEqual('+5 Dexterity Vest')
        expect(item.sell_in).toEqual(10)
        expect(item.quality).toEqual(20)
    })

    it("+5 Dexterity Vest update correctly when update_quality called", () => {

        items = []
        items.push(new Item('+5 Dexterity Vest', 10, 20));

        update_quality()
        expect(items[0].name).toEqual('+5 Dexterity Vest')
        expect(items[0].sell_in).toEqual(9)
        expect(items[0].quality).toEqual(19)
    })

    it("Aged Brie and Sulfuras update correctly when update_quality called", () => {
        items = []
        items.push(new Item('Aged Brie', 3, 0));
        items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));

        update_quality()

        expect(items[0].sell_in).toEqual(2)
        expect(items[0].quality).toEqual(1)

        expect(items[1].sell_in).toEqual(0)
        expect(items[1].quality).toEqual(80)
    })

    it("quality is never less than 0", () => {
        items = []
        items.push(new Item('+5 Dexterity Vest', 10, 0));
        update_quality()
        expect(items[0].quality).toEqual(0)
    })

    it("quality is never more than 50", () => {
        items = []
        items.push(new Item('Aged Brie', 10, 50));
        update_quality()
        expect(items[0].quality).toEqual(50)
    })

    it("quality of Aged Brie increases twice as fast when sell_in is less than 0 ", () => {
        items = []
        items.push(new Item('Aged Brie', -5, 20))
        update_quality()
        expect(items[0].quality).toEqual(22)
    })

    it("quality of Dexterity Vest degrades twice as fast when sell_in is less than 0", () => {
        items = []
        items.push(new Item('+5 Dexterity Vest', -2, 20));
        update_quality()
        expect(items[0].quality).toEqual(18)
    })
    it("quality of BSP increases as sell_in decreases", () => {
        items = []
        items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
        update_quality()
        expect(items[0].sell_in).toEqual(14)
        expect(items[0].quality).toEqual(21)
    })
    it("quality of BSP increases by 2 when sell_in is between 10 and 5", () => {
        items = []
        items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 7, 15));
        update_quality()
        expect(items[0].sell_in).toEqual(6)
        expect(items[0].quality).toEqual(17)
    })

    it("quality of BSP increases by 3 when sell_in is between 5 and 0", () => {
        items = []
        items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 3, 15));
        update_quality()
        expect(items[0].sell_in).toEqual(2)
        expect(items[0].quality).toEqual(18)
    })

    it("quality of BSP is 0 when sell_in is below 0", () => {
        items = []
        items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 0, 15));
        update_quality()
        expect(items[0].sell_in).toEqual(-1)
        expect(items[0].quality).toEqual(0)
    })

    xdescribe('Conjuring implementation:', () => {

        it("conjured items decrease in quality twice as fast as normal items", () => {
            items = []
            items.push(new Item('Conjured', 10, 6));
            update_quality()
            expect(items[0].sell_in).toEqual(9)
            expect(items[0].quality).toEqual(4)
        })

        xit("quality of conjured items can not be below 0", () => {
            items = []
            items.push(new Item('Conjured', 10, 1));
            update_quality()
            expect(items[0].sell_in).toEqual(9)
            expect(items[0].quality).toEqual(0)
        })

        xit("when sell_in of conjured item is less than 0, quality decreases twice as fast", () => {
            items = []

        })

        xit("quality of conjured items can not be greater than 50", () => {
            items = []

        })

        xit("when sell_in of conjured item is less than 0, quality decreases twice as fast", () => {
            items = []

        })
    })
});
