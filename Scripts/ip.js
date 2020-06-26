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
