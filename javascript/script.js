// to get all bars individually

const mondayBar = document.getElementById("mondayBar");
const tuesdayBar = document.getElementById("tuesdayBar");
const wednesdayBar = document.getElementById("wednesdayBar");
const thursdayBar = document.getElementById("thursdayBar");
const fridayBar = document.getElementById("fridayBar");
const saturdayBar = document.getElementById("saturdayBar");
const sundayBar = document.getElementById("sundayBar");

// to have different background colour for today's bar

switch (new Date().getDay()) {
    case 0:
        sundayBar.classList.add("changed-bg-color");
        break
    case 1:
        mondayBar.classList.add("changed-bg-color");
        break
    case 2:
        tuesdayBar.classList.add("changed-bg-color");
        break
    case 3:
        wednesdayBar.classList.add("changed-bg-color");
        break
    case 4:
        thursdayBar.classList.add("changed-bg-color");
        break
    case 5:
        fridayBar.classList.add("changed-bg-color");
        break
    case 6:
        saturdayBar.classList.add("changed-bg-color");
        break
}

// to get the divs having the amount of money spent each day individually

const expenseMonday = document.getElementById("expenseMonday");
const expenseTuesday = document.getElementById("expenseTuesday");
const expenseWednesday = document.getElementById("expenseWednesday");
const expenseThursday = document.getElementById("expenseThursday");
const expenseFriday = document.getElementById("expenseFriday");
const expenseSaturday = document.getElementById("expenseSaturday");
const expenseSunday = document.getElementById("expenseSunday");

// to show the amount of money spent on each day when hovered over each bar individually

mondayBar.addEventListener("mouseenter",()=>{
    expenseMonday.classList.remove("hidden");
});
tuesdayBar.addEventListener("mouseenter",()=>{
    expenseTuesday.classList.remove("hidden");
});
wednesdayBar.addEventListener("mouseenter",()=>{
    expenseWednesday.classList.remove("hidden");
});
thursdayBar.addEventListener("mouseenter",()=>{
    expenseThursday.classList.remove("hidden");
});
fridayBar.addEventListener("mouseenter",()=>{
    expenseFriday.classList.remove("hidden");
});
saturdayBar.addEventListener("mouseenter",()=>{
    expenseSaturday.classList.remove("hidden");
});
sundayBar.addEventListener("mouseenter",()=>{
    expenseSunday.classList.remove("hidden");
});

// to hide the amount of money spent each day on mouse hovered outside of each bar individually

mondayBar.addEventListener("mouseleave",()=>{
    expenseMonday.classList.add("hidden");
});
tuesdayBar.addEventListener("mouseleave",()=>{
    expenseTuesday.classList.add("hidden");
});
wednesdayBar.addEventListener("mouseleave",()=>{
    expenseWednesday.classList.add("hidden");
});
thursdayBar.addEventListener("mouseleave",()=>{
    expenseThursday.classList.add("hidden");
});
fridayBar.addEventListener("mouseleave",()=>{
    expenseFriday.classList.add("hidden");
});
saturdayBar.addEventListener("mouseleave",()=>{
    expenseSaturday.classList.add("hidden");
});
sundayBar.addEventListener("mouseleave",()=>{
    expenseSunday.classList.add("hidden");
});
