window.onload = function popUp(){
    window.setTimeout(slowAlert,10000);  
}
function slowAlert() {
    var yes = confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
    if(yes === true){
        window.location.replace("https://www.youtube.com/watch?v=kxopViU98Xo");
    }
  };

function psy(){
    console.log('salut')
document.body.style.background = 'magenta';
var p = document.getElementsByTagName('p');
for (var i = 0; i < p.length; i++){
p[i].style.color= 'blue';
p[i].style.fontFamily= "Papyrus,fantasy";
}
var header = document.querySelectorAll(".psy").forEach(function(header){
    header.style.color = 'green'
    header.style.fontFamily = 'FreeMono, monospace'
})
}