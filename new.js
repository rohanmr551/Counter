let count=0;
function increase(){
    count++;
    document.getElementById('counter').innerHTML=count;
}
function decrease(){
    count--;
    document.getElementById('counter').innerHTML=count;
}
function reset(){
    count=0;
    document.getElementById('counter').innerHTML=count;
}
