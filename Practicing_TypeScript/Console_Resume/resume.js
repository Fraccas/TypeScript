displayPosition("James Ward", "Full Stack Developer", "AT Thru Hiker/Student");
var interests = ["Technology", "Backpacking", "Skateboarding", "Kayaking", "Video Games"];
console.log("My Interests:");
for (var _i = 0, interests_1 = interests; _i < interests_1.length; _i++) {
    var interest = interests_1[_i];
    console.log("* " + interest);
}
var prevExp = ["Built an online multiplayer 3D Pokemon fan game in Unity.",
    "Two years towards a Computer Science degree at JSCC.",
    "Started web development company called DevFraccas."];
console.log("My Previous Experience");
for (var _a = 0, prevExp_1 = prevExp; _a < prevExp_1.length; _a++) {
    var exp = prevExp_1[_a];
    console.log("* " + exp);
}
var skills = ["Java", "C#", "PHP", "MySQL", "HTML", "Long Distance Hiking"];
console.log("My Skills:");
for (var _b = 0, skills_1 = skills; _b < skills_1.length; _b++) {
    var skill = skills_1[_b];
    var isCool = false;
    if (skill.indexOf('Hiking') > -1)
        isCool = true;
    displaySkill(skill, isCool);
}
function displayPosition(cName, jobTitle, description) {
    console.log("Name: " + cName.toUpperCase());
    console.log("Career: " + jobTitle);
    console.log("Description: " + description);
}
function displaySkill(skillName, isCool) {
    if (isCool) {
        console.log("* BAM: " + skillName);
    }
    else {
        console.log("* " + skillName);
    }
}
