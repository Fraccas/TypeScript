"use strict";
var diceContainer = $('.dice-container');
var diceCount = 0;
var diceHolder = [];
var diceUni = ['', '\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];
// Button Clicks
$('#genB').click(function () {
    var d = new Dice(diceCount);
    diceHolder.push(d);
    diceCount++;
});
$('#rollB').click(function () {
    for (var _i = 0, diceHolder_1 = diceHolder; _i < diceHolder_1.length; _i++) {
        var d = diceHolder_1[_i];
        d.Roll();
    }
});
$('#sumB').click(function () {
    var sum = diceHolder.reduce(function (total, die) {
        return total + die.num;
    }, 0);
    alert("The total sum is " + sum);
    for (var _i = 0, diceHolder_2 = diceHolder; _i < diceHolder_2.length; _i++) {
        var d = diceHolder_2[_i];
        console.log(d);
    }
});
// Dice Object
var Dice = /** @class */ (function () {
    function Dice(dCount) {
        var _this = this;
        this.id = dCount;
        this.num = Math.floor(Math.random() * 6) + 1;
        this.dDiv = $("<div class=\"diceDiv\" id=\"d" + this.id + "\"></div>");
        diceContainer.append(this.dDiv);
        this.Roll();
        // Single click to roll individual dice
        this.dDiv.click(function () { return _this.Roll(); });
        // Double click to remove individual dice 
        this.dDiv.dblclick(function () {
            var i = diceHolder.indexOf(_this);
            diceHolder.splice(i, 1);
            _this.dDiv.remove();
        });
    }
    // Set number value to dice 1-6
    Dice.prototype.Roll = function () {
        this.num = Math.floor(Math.random() * 6) + 1;
        this.dDiv.text(diceUni[this.num]);
    };
    return Dice;
}());
