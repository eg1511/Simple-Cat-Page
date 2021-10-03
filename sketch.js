let day ="Tuesday";
console.log(day);


let counter = 0;

// STEP 5 Select a button 

let counterButton = document.getElementById("counterB");
let counterColor = document.getElementById("counterC");

// STEP 6 Listen for the click event
counterButton.addEventListener('click', function(){
    // console.log("I just clicked!");
    counter++; 
    // counsole.log(counter);

// STEP 7 
let counterP = document.getElementById("counter");
counterP.innerHTML = counter;
 



})

window.addEventListener('scroll', function(){
    console.log("I'm scrolling!");
})
