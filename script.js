let timer = document.querySelector('.timer');
let stoper = document.querySelector('.stop');
let play = document.querySelector('.play');
let reset = document.querySelector('.reset');
let startt = true;

let [hours,minutes,seconds] = [0,0,0];
let h = hours < 10 ? '0' + hours: hours;
let m = minutes < 10 ? '0' + minutes: minutes;
let s = seconds < 10 ? '0' + seconds: seconds;


function generateTime(){
    seconds++
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let hr = hours < 10 ? '0' + hours: hours;
    let mn = minutes < 10 ? '0' + minutes: minutes;
    let sd = seconds < 10 ? '0' + seconds: seconds;

    timer.innerHTML = hr +':'+ mn +':'+ sd ;
}

function watchStart(){

    if(startt !== null){
        clearInterval(startt);

    }
    startt = setInterval(generateTime,1000);  

}
play.addEventListener('click',function(){
    watchStart();
})
stoper.addEventListener('click',function(){
   clearInterval(startt);
})
reset.addEventListener('click',function(){
    clearInterval(startt);
    [hours,minutes,seconds] = [0,0,0];
    
    //this h,m,s is globalScope variable(outside Function)
    timer.innerHTML = h + ':' + m + ':' + s;


})
