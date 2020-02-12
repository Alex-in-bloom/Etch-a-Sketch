const Userinput = prompt(">>>");
const box = document.querySelector("#box");
const pixle_size = 480/Userinput;
const NumOfPixles = Userinput * Userinput;

for (i=0; i<NumOfPixles; i++){
    const pixle = document.createElement("div");
    pixle.setAttribute("class", "pixle");
    pixle.style.width = pixle_size + "px";
    pixle.style.height = pixle_size + "px";
    box.appendChild(pixle);
}

const pixles = document.querySelectorAll(".pixle");
pixles.forEach((pixle) => 
    { pixle.addEventListener('mouseover', (e) => {
        if (pixle.className == "hovered"){
            console.log(pixle.style.background * 1.1);
        }
        else {
            pixle.style.background = getRandomColor();
            pixle.setAttribute("class", "hovered");
        }
    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
// for (i=0; i<Userinput; i++){
//     const row = document.createElement("div");
//     row.setAttribute("class", "row");
//     row.style.height = pixle_size + "px";
//     box.appendChild(row);
//     for (j=0; j<=Userinput; j++){
//         const pixle = document.createElement("div");
//         pixle.setAttribute("class", "pixle");
//         pixle.style.width = pixle_size;
//         pixle.style.height = pixle_size;
//         row.appendChild(pixle);
//     }
// }
