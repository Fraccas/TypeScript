
displayPosition("James Ward", "Full Stack Developer", "AT Thru Hiker/Student")

let interests: Array<string> = ["Technology", "Backpacking", "Skateboarding", "Kayaking", "Video Games"];

console.log("My Interests:");
for (let interest of interests) {
    console.log("* " + interest);
}

let prevExp: Array<string> = ["Built an online multiplayer 3D Pokemon fan game in Unity.",
                "Two years towards a Computer Science degree at JSCC.",
                "Started web development company called DevFraccas."];
console.log("My Previous Experience");
for (let exp of prevExp) {
    console.log("* " + exp);
}

let skills: Array<string> = ["Java", "C#", "PHP", "MySQL", "HTML", "Long Distance Hiking"];
console.log("My Skills:");
for (let skill of skills) {
    var isCool: boolean = false;
    if (skill.indexOf('Hiking') > -1) isCool = true;
    displaySkill(skill, isCool);
}


function displayPosition(cName: string, jobTitle: string, description: string) {
    console.log("Name: " + cName.toUpperCase());
    console.log("Career: " + jobTitle);
    console.log("Description: " + description);
}

function displaySkill(skillName: string, isCool: boolean) {
    if (isCool) {
        console.log("* BAM: " + skillName);
    } else {
        console.log("* " + skillName);
    }
}