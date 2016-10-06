function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

var items = []

// items.push(new Item('+5 Dexterity Vest', 10, 20));
// items.push(new Item('Aged Brie', 2, 0));
// items.push(new Item('Elixir of the Mongoose', 5, 7));
// items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
// items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
// items.push(new Item('Conjured Mana Cake', 3, 6));




function update_quality() {
    switch (items[0].name) {
        case 'Aged Brie':
            update_agedBrie()
            break;
        case 'Backstage passes to a TAFKAL80ETC concert':
            update_BSP()
            break;
        case 'Sulfuras, Hand of Ragnaros':
            update_sulfuras()
            break;
        default:
            update_normal()

    }


}

function update_sulfuras() {

}

function update_BSP() {

    if (items[0].quality < 50) {
        if (items[0].sell_in > 0) {
            items[0].quality++
                if (items[0].sell_in < 10) items[0].quality++
                    if (items[0].sell_in < 5 && items[0].sell_in > 0) items[0].quality++
        } else {
            items[0].quality = 0
        }
    }
    items[0].sell_in--
}

function update_agedBrie() {

    if (items[0].quality < 50) {
        items[0].quality++
            if (items[0].sell_in < 0) items[0].quality++
    }
    items[0].sell_in--
}

// function conjured() {}
//
function update_normal() {
    items[0].sell_in--
        if (items[0].quality > 0) items[0].quality--
            if (items[0].sell_in < 0) items[0].quality--
}



module.exports = Item
m
