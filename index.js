let lightBtn = document.getElementById("dark-button");
let heroText = document.getElementsByTagName("hero-text");


// lightBtn.addEventListener("click", function (){
//     document.body.style.backgroundColor = "black";
// });

lightBtn.addEventListener("click", function (){
    document.body.classList.toggle("dark-mode");  
    alert("Dark mode coming soon! ☺️✨")
});
