function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
}
function display_ct() {
    var x = new Date()
    var x1=x.toUTCString();// changing the display to UTC string
    document.getElementById('ct').innerHTML = x1;
    tt=display_c();
}


var i = 0;
var speed = 50;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("ip"), json.ip;
    i++;
    setTimeout(typeWriter, speed);
  }
}
function getIP(json) {
    document.write("Your IP: ", json.ip);
}