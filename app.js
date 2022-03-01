const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jsColor");

const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.strokStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onMousedown(event){
    painting = true;
}

function handleColorClick(event){
    //console.log(event.target.style); 개발자도구에서 target에 대한 설정을 볼수있음(그래서 찾은값(backgroundColor))
    const color = event.target.style.backgroundColor;
    console.log(typeof color);
    ctx.strokStyle = color;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));
//HTML Collection으로 받아오는걸 Array로 받아주는 구문(Array.from)