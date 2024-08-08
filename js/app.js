
 const landwetter = document.querySelector('.wettertext');

function DeutschlandetterZeigen(){
    landwetter.innerHTML ="<p>Heute wird es Regnen.&#9748</P>";
}


function BrasilWetteranzeigen(){
    landwetter.innerHTML ="<p>Heute wird es sonnig sein.&#127774</P>";
    
}


function usaWetterAnzeigen(){
    landwetter.innerHTML ="<p>Heute wird es schneien.&#9924</P>";
}


function franceWetterAnzeigen(){
    landwetter.innerHTML ="<p>Heute wird es bewölkt sein.&#9925</P>";
}



document.querySelector('.germany').addEventListener('click' , DeutschlandetterZeigen);
document.querySelector('.brasil').addEventListener('click' , BrasilWetteranzeigen);
document.querySelector('.usa').addEventListener('click' , usaWetterAnzeigen);
document.querySelector('.france').addEventListener('click' , franceWetterAnzeigen);

//##################

const farbe= document.querySelector('.textfarbe');
function headerRot(){
   
   farbe.className = 'rot';
   
}


function headerBlau(){
    farbe.className = 'blau';
  
}


document.querySelector('.myblauclass').addEventListener('click',headerBlau);
document.querySelector('.myrotclass').addEventListener('click',headerRot);
