canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_img = "racing.jpg"

function add(){
    background_imgTag = new Image;
    background_imgTag.onload = uploadBackgroundimg;
    background_imgTag.src = background_img;

    car1_imgTag = new Image;
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image;
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}
function uploadBackgroundimg(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_image, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_image, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
        c1up();
        console.log("up arrow key");
    }
    if(keyPressed == '40'){
        c1down();
        console.log("down arrow key");
    }
    if(keyPressed == '37'){
        c1left();
        console.log("left arrow key");
    }
    if(keyPressed == '39'){
        c1right();
        console.log("right arrow key");
    }
    if(keyPressed == '87'){
        c2up();
        console.log("key w")
    }
    if(keyPressed == '83'){
        c2down();
        console.log("key s")
    }
    if(keyPressed == '65'){
        c2left();
        console.log("key a");
    }
    if(keyPressed == '68'){
        c2right();
        console.log("key d");
    }
}
function c1up(){
    if(car1_y >=0){
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y" +car1_y);
        uploadBackgroundimg();
        uploadcar1();
        uploadcar2();
    }
}
function c1down(){
    if(car1_y<=500){
        car1_y = car1_y+ 10;
        console.log("When down arrow is pressed, x = " + car1_x + " | y" +car1_y);
        uploadBackgroundimg();
        uploadcar1();        
        uploadcar2();
    }
}
function c1left(){
    if(car1_y>=0){
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, x = " + car1_x + " | y" +car1_y);
        uploadBackgroundimg();
        uploadcar1();        
        uploadcar2();
    }
}
function c1right(){
    if(car1_y<=500){
        car1_x = car1_x+ 10;
        console.log("When right arrow is pressed, x = " + car1_x + " | y" +car1_y);
        uploadBackgroundimg();
        uploadcar1();        
        uploadcar2();
    }
}

function c2up(){
    if(car2_y>=0){
        car2_y = car2_y - 10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y" +car2_y);
        uploadBackgroundimg();
        uploadcar1();        
        uploadcar2();
    }
}
function c2down(){
    if(car2_y<=500){
        car2_y = car2_y + 10;
        console.log("When down arrow is pressed, x = " + car2_x + " | y" +car2_y);
        uploadBackgroundimg();
        uploadcar1();        
        uploadcar2();
    }
}
function c2left(){
    if(car2_x<=500){
        car2_x = car2_x - 10;
        console.log("When left arrow is pressed, x = " + car2_x + " | y" +car2_y);
        uploadBackgroundimg();
        uploadcar1();        
        uploadcar2();
    }
}
function c2right(){
    if(car2_x>=0){
        car2_x = car2_x + 10;
        console.log("When left arrow is pressed, x = " + car2_x + " | y" +car2_y);
        uploadBackgroundimg();
        uploadcar1();        
        uploadcar2();
    }
}
if(car1_x > 700){
    console.log("Car 1 won");
    document.getElementById('game_status').innerHTML = "Car 1 Won!!!"
}