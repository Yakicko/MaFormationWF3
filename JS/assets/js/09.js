// LES BOUCLES

// la boucle for

for(var i=1; i<=10;i++){
    document.write("<p>Instruction executée : <strong>" + i + "</strong><p>");
}

document.write("<hr>");

// while

var j = 1;
while(j <= 10){
    document.write("<p>Instruction executée : <strong>" + j + "</strong><p>");
    j++;
}

document.write("<hr>");

// EXO

var prenoms = ['Hugo','Jean','Matthieu','Luc','Pierre','Marc'];

for(var e = 0; e <= prenoms.length-1; e++)
{
    document.write("<p>" + prenoms[e] + "</p>");
}