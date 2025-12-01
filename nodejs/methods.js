let p=require('path');
let pa="C:\Users\aryas\Documents\kgisl\nodejs\destination.txt"
console.log(p.basename(pa)) //Displays last portion of the path
console.log(p.dirname(pa)) //Displays the folders
console.log(p.extname(pa)) //Displays the extension
console.log(p.join(pa)) //Combines and form a path
console.log(p.parse(pa)) //returns the object, which displays all the details