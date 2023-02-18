let count=0;
let counter =  document.getElementById("counter");
let enter = document.getElementById("enetries");
function increment() {
    count=count+1;
    counter.innerText=count;

}
function save(){
    let x=count + " - ";
    enter.textContent+= x;
}
function reset(){
    count=0;
    counter.innerText=count;
    enter.textContent="previous:";
}