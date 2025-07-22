
function Circle(x,y,radius, dx, dy,color){
    this.x =x;
    this.y=y;
    this.radius=radius;
    this.dx=dx;
    this.dy=dy;
    this.color=color;

    this.draw = function (ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fill();
    };
    this.update = function (canvas){
        if(this.x + this.radius > canvas.width || this.x - this.radius<=0){
            this.dx*=-1
        }
        if(this.y + this.radius > canvas.height || this.y - this.radius<=0){
            this.dy*=-1;
        }//cập nhật vị trí
        this.x += this.dx;
        this.y += this.dy;
    };

}
 function getRandomHex(){
    return Math.floor(Math.random()*255);
 }
 function getRandomColor(){
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
        return `rgba(${red},${green},${blue}, 0.7)`;
 }
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let circles = [];
function createCircle(){
    for(let i = 0; i < 100; i++) {
        var x = Math.random() * (canvas.width - 2*radius) + radius;
        var y = Math.random() * (canvas.height - 2*radius) + radius;
        var radius = Math.floor(Math.random() * 30 + 10);
        let dx = (Math.random() - 0.5) * 4;//tốc độ ngẫu nhieen
        let dy = (Math.random() - 0.5) * 4;
        var color = getRandomColor();
        circles.push(new Circle(x, y, radius, dx, dy, color));
    }
}
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let circle of circles){
        circle.update(canvas);
        circle.draw(ctx);
    }
    requestAnimationFrame(animate);
}
createCircle();
animate();