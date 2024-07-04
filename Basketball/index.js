let home = document.getElementById('h-no');
let guest = document.getElementById('g-no');
let counth = 0;
let countg = 0;

function oneh(){
    counth += 1;
    home.innerText = counth;
}
function twoh(){
    counth += 2;
    home.innerText = counth;
}
function threeh(){
    counth += 3;
    home.innerText = counth;
}

function oneg(){
    countg += 1;
    guest.innerText = countg;
}
function twog(){
    countg += 2;
    guest.innerText = countg;
}
function threeg(){
    countg += 3;
    guest.innerText = countg;
}
function reseth(){
    counth = 0;
    home.innerText = counth;
}
function resetg(){
    countg = 0;
    guest.innerText = countg;
}