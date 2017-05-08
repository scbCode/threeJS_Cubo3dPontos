

var txt= [ 'P', 'r', 'a', ' ', 'v', 'o' , 'c','ê',' ','q','u','e',' ','a','c','r','e','d','i','t','a', ' ', ' ', ' '];

var textoautoArea=0;
var contxt=0;
var contmove=0;
var ctrlborder=false;
document.getElementById("textoauto").innerHTML =' ';
var updatemove = setInterval(writetext, 150);

function writetext(){
   
if (contxt <= (txt.length-1)){
  
  textoautoArea = txt[contxt];

if (document.body.clientWidth>=414)
  contmove += 6 * ((document.body.clientWidth/document.body.clientHeight)/1.77083);


if (document.body.clientWidth<414)
  contmove += 9 * ((document.body.clientWidth/document.body.clientHeight)/1.77083);

  console.log(contmove);
  document.getElementById("textoauto").innerHTML +=textoautoArea; 
  if (txt[contxt] != ' ' ) document.getElementById("textoauto").style.transform = "translate("+ (contmove)+"px,0%) ";
  // if (txt[contxt] != ' ' ) document.getElementById("textoauto").style.width = ((contmove/10 )+document.getElementById("textoauto").clientWidth ) +"px";
  
  contxt++;  


  }

  
if (contxt > (txt.length-1)){
  textoautoArea=' '; 
  contxt=0;    
  contmove=0;
  document.getElementById("textoauto").style.transform = "translate(0px,0%)";
  document.getElementById("textoauto").innerHTML = textoautoArea;

  }
  

    
}
