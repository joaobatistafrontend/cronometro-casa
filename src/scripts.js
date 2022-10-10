var min = 03
var sec = 60
var interval

function towDigits(digit){
     if(digit<10){
          return('0'+digit)
     }else{
          return(digit)
     }
}

function start(){
     interval =setInterval(watch,10)

}

function pause(){
     clearInterval(interval)
}

function stop(){
     clearInterval(interval)
     min = 3
     sec = 0
     document.getElementById('stopwatch').innerHTML = '00:00'
}

function watch(){
     sec --
     if (sec == 59){
          min --
          sec = 59
     }
     if (sec == -1){
          sec = 60
     }
     if (min == -1){ 
          min = 00
          sec = 00
     }

     if (min == 0 && sec == 0){
          stop()
     }
     

     console.log(min)
     console.log(sec)
     document.getElementById('stopwatch').innerHTML =towDigits(min) + ':' + towDigits(sec)
}
