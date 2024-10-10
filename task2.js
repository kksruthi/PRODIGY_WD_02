let [hours,minutes,seconds] =[0,0,0];
let running=false;
let timer;

var clock = document.getElementById("clock")
var startbtn = document.getElementById("startbtn")
var laplist = document.getElementById("laplist")

function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++; 
        }
    }

    let h = hours<10? "0"+hours : hours
    let m = minutes<10? "0"+minutes : minutes
    let s = seconds<10? "0"+seconds : seconds

    clock.innerHTML= h+":"+m+":"+s
}

    
function starttimer(){
    if (!running){
        startbtn.textContent="Pause"
        timer= setInterval(stopwatch,1000)
        running=true;
        lapbtn.disabled = false;
    } else {
        startbtn.textContent = "Start"
        clearInterval(timer)
        running=false;
        lapbtn.disabled = true;
    }
}

function resettimer(){
    clearInterval(timer);
    [hours,minutes,seconds] =[0,0,0];
    clock.textContent = "00:00:00"
    startbtn.textContent="start"
    running=false;
    lapbtn.disabled=true;
    laplist.innerHTML=""
}

function laptimer(){
    var lapitem = document.createElement("li")
    lapitem.textContent=clock.innerHTML;
    laplist.appendChild(lapitem);
}



