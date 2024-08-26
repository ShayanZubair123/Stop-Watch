var seconds = 0
var mins = 0
var play = false
var hour= 0
var Root = document.getElementById("Root")
var JavaRoot = document.createElement("div")
var StopWatchHeading = document.createElement("p")

var StopWatchHeading2 = document.createTextNode("Stop Watch")
StopWatchHeading.classList.add("StopWatchHeading")
StopWatchHeading.appendChild(StopWatchHeading2)
Root.appendChild(StopWatchHeading)
Root.appendChild(JavaRoot)
JavaRoot.classList.add("JavaRoot")
var Data = document.createElement("h1")
var Data2 = document.createTextNode( hour+":"+ mins+":"+seconds)
Data.appendChild(Data2)
JavaRoot.appendChild(Data)
Data.classList.add("Data")



var Start = document.createElement("button")
var Start2 = document.createTextNode("Start")
Start.appendChild(Start2)
Root.appendChild(Start)
var Start3 = document.createElement("img")
Start3.setAttribute("src", "./Start.png")
Start.appendChild(Start3)
Start.classList.add("Start")
Start.setAttribute("onclick","playPause()")










var Reset = document.createElement("button")
var Reset2 = document.createTextNode("Reset")
Reset.appendChild(Reset2)
Root.appendChild(Reset)
var Reset3 = document.createElement("img")
Reset3.setAttribute("src", "./Reset.png")
Reset.appendChild(Reset3)
Reset.classList.add("Reset")
Reset.setAttribute("onclick","AllDelete()")














var interval;

function playPause(){
    if(!play){
        Start.innerHTML = "Pause"
       interval = setInterval(function(){
            seconds+= 1
            if(seconds === 60){
                mins+=1
                seconds = 0
            }
            else if(mins ===60){
                hour+=1
                mins=0
            }
            Data.innerHTML = hour +":" + mins +":"+seconds

        },1000)       
        play = true
    }else{
        clearInterval(interval)
        Start2.innerHTML = "Play"
        play = false
    }
}
function AllDelete() {

    play = true
    seconds = 0
    mins = 0
    hour = 0 
    Data.innerHTML= "0:0:0"
    clearInterval(interval)
        Start2.innerHTML = "Play"
        play = false
    }
 