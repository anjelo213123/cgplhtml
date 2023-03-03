const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//rectangle
ctx.fillRect(400, 100, 400, 300);

ctx.fillStyle = "#fcfffd";
ctx.fillRect(420, 120, 360, 260);

ctx.fillStyle = "#000000";
ctx.fillRect(460, 140, 150, 220);

//dot
ctx.strokeStyle = "#000000";
ctx.lineWidth = 50;
ctx.lineCap = 'round';
ctx.beginPath();
ctx.moveTo(150, 220);
ctx.lineTo(150, 220);
ctx.stroke();
ctx.closePath();

//7
ctx.strokeStyle = "#ffffff";
ctx.lineWidth = 40;
ctx.lineCap = 'butt';
ctx.beginPath();
ctx.moveTo(480, 170);
ctx.lineTo(591, 170);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(575, 177);
ctx.lineTo(530, 240);
ctx.lineTo(530, 350);
ctx.stroke();
ctx.closePath();

//z
ctx.strokeStyle = "#000000";
ctx.lineWidth = 30;
ctx.lineCap = 'butt';
ctx.beginPath();
ctx.moveTo(650, 270);
ctx.lineTo(750, 270);
ctx.stroke();
ctx.closePath();

ctx.strokeStyle = "#000000";
ctx.lineWidth = 30;
ctx.lineCap = 'butt';
ctx.moveTo(738, 274);
ctx.lineTo(660, 342);
ctx.stroke();
ctx.closePath();

ctx.strokeStyle = "#000000";
ctx.lineWidth = 30;
ctx.lineCap = 'butt';
ctx.beginPath();
ctx.moveTo(650, 345);
ctx.lineTo(750, 345);
ctx.stroke();
ctx.closePath();

//arrow
ctx.beginPath();
ctx.lineWidth = 20;
ctx.lineCap = "round";
ctx.arc(150, 220, 100, 1 * Math.PI, 1.8 * Math.PI);
ctx.lineTo(200, 170);
ctx.moveTo(240,160);
ctx.lineTo(230, 120);
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 220, 100, 0 * Math.PI, 0.8 * Math.PI);
ctx.lineTo(100,270);
ctx.moveTo(60,280);
ctx.lineTo(70,320);
ctx.stroke();

