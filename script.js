

const mainDiv = document.querySelector(".container");

mainDiv.style.backgroundColor = "black";
mainDiv.style.width=  "100vw";
mainDiv.style.height = "100vh";
      mainDiv.style.margin = "0"; // removes unwanted spacing


  const  randomRGB=()=> {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

for(let i = 1;i<=800;i++){
	const div = document.createElement("div");
	div.classList.add("square");
	div.style.width = "14px";
	div.style.height = "14px";
    div.style.margin ="4px"
	div.style.backgroundColor = "rgb(29, 29, 29)";
	document.querySelector(".container").appendChild(div);
}



const sq = document.querySelectorAll('.square');
sq.forEach(s=>
s.addEventListener('mouseover',()=>{
    let color= randomRGB()
   
    s.style.backgroundColor=color;
})


)

sq.forEach(s=>
s.addEventListener('mouseout',(e)=>{
 
    
    s.style.backgroundColor="rgb(29, 29, 29)";
})


)

