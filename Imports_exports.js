//  alternative way of doing imports and exports of object modules
// METHOD 2 Export side
const Human = {
    name: 'james',
}

module.exports = Human 
module.exports.items = [ 'item1', 'item2'] // another way to export, works exactly like 
