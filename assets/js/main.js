//
/*
var t=false;
function contar(){
if(t)clearTimeout(t);
s=arguments[0] || 0;
if(s>10)location.reload();
s++;
t=setTimeout("contar("+s+")",1000);
*/
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
var currSeconds = 0;
$(document).ready(function () {
  // incrementar el tiempo inactivo dek contador cada segundo
  let idleInterval = setInterval(timerIncrement, 1000);
  // Volver a 0 en el contador por movimiento del mouse
  $(this).mosemove(resetTimer);
  $(this).keypress(resetTimer);
});

function resetTimer() {
  // ocultar el tiempo del temporizador
  document.querySelector(".timetext").style.display = "none";

  currSeconds = 0;
}

function timerIncrement() {
  currSeconds = currSeconds + 1;
  // setea el texto del timer por un nuevo valor
  document.querySelector(".secs").textContent = currSeconds;
  document.querySelector(".timetext").style.display = "block";
}
