"use strict";
var Counter = /** @class */ (function () {
    function Counter() {
        this.count = 100;
    }
    Counter.prototype.up = function () {
        return ++this.count;
    };
    return Counter;
}());
$(document).ready(function () {
    var counter = new Counter();
    var count = $("<div class=\"count\">" + counter.count + "</div>");
    count.click(function () {
        count.text(counter.up());
    });
    count.appendTo('body');
});
