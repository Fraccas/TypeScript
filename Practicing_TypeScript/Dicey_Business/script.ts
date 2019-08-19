let diceContainer: JQuery<Element> = $('.dice-container');
let diceCount: number = 0;
let diceHolder: Array<Dice> = [];
let diceUni: Array<string> = ['', '\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];


// Button Clicks
$('#genB').click(() => {
    let d: Dice = new Dice(diceCount);
    diceHolder.push(d);
    diceCount++;
});

$('#rollB').click(() => {
    for (let d of diceHolder) {
        d.Roll();
    }
});

$('#sumB').click(() => {
    let sum: number = diceHolder.reduce((total, die) => {
        return total + die.num;
    }, 0);
    alert(`The total sum is ${sum}`);
    for(let d of diceHolder)
        console.log(d);
});

// Dice Object
class Dice {
    num: number;
    id: number;
    dDiv: JQuery<Element>;
    constructor(dCount: number) {
        this.id = dCount;
        this.num = Math.floor(Math.random() * 6) + 1;
        this.dDiv = $(`<div class="diceDiv" id="d${this.id}"></div>`);
        diceContainer.append(this.dDiv);
        this.Roll();
   
        // Single click to roll individual dice
        this.dDiv.click(() => this.Roll());


        // Double click to remove individual dice 
        this.dDiv.dblclick(() => {
            let i = diceHolder.indexOf(this);
            diceHolder.splice(i, 1);
            this.dDiv.remove();
        });
    }

    // Set number value to dice 1-6
    Roll() {
        this.num = Math.floor(Math.random() * 6) + 1;
        this.dDiv.text(diceUni[this.num]);
    }
}