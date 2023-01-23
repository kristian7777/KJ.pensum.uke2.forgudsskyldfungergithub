/*
var src = ["bird.jpg", "cat.jpg", "dog.jpg"];
var boxId = ["iamge1", "iamge2", "iamge3"];
var textId = ["btn1", "btn2", "btn3"];
*/
var mynumber = ""
var bildeinfo1 = ""
var bildeinfo2 = ""
var bildeinfo3 = ""
var buttonselected = "secret animal button selected :"
var mynumber2 = ""
var navnrandomimgid =""


function btn1onclick() {
    onClick = mynumber = 1;
    document.getElementById("buttonselected").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspsecret animal image button curently activated : number 1";
}
function btn2onclick() {
    onClick = mynumber = 2;
    document.getElementById("buttonselected").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspsecret animal image button curently activated : number 2";
}
function btn3onclick() {
    onClick = mynumber = 3;
    document.getElementById("buttonselected").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspsecret animal image button curently activated : number 3";
}

function getPicIfElse() {

    console.log(mynumber)
    if (mynumber === 1) {
        return 'bird.jpg';
    }
    else if (mynumber === 2) {
        return 'cat.jpg';
    }
    else if (mynumber === 3) {
        return 'dog.jpg';
    }

}
function addTerjePic(pictureid, height) // sender med id (string) 
{
    let picResult = getPicIfElse();
    document.getElementById(pictureid).src = picResult;
    document.getElementById(pictureid).style.height = height;
}

function bildeNavn() {
    var image_1 = document.getElementById("mypicture1")
    var image_2 = document.getElementById("mypicture2")
    var image_3 = document.getElementById("mypicture3")

    var bildeinfo1 = document.getElementById("navn")

    bildeinfo1.innerHTML = ""

    if (image_1) {
        bildeinfo1.innerHTML = mypicture1.getAttribute("src") + "<br>"
        
    }
    else if (image_2) {
        bildeinfo1.innerHTML = mypicture1.getAttribute("src") + "<br>"
        
    }
    else if (image_3) {
        bildeinfo1.innerHTML = mypicture1.getAttribute("src") + "<br>"
        
    }
}
function bildeNavn2() {
    var image_12 = document.getElementById("mypicture1")
    var image_22 = document.getElementById("mypicture2")
    var image_32 = document.getElementById("mypicture3")
    var bildeinfo2 = document.getElementById("navn2")

     bildeinfo2.innerHTML = ""

    if (image_12) {
        bildeinfo2.innerHTML= mypicture2.getAttribute("src") + "<br>"
    }
    if (image_22) {
        bildeinfo2.innerHTML= mypicture2.getAttribute("src") + "<br>"
    }
    if (image_32) {
        bildeinfo2.innerHTML= mypicture2.getAttribute("src") + "<br>"
    }
}
function bildeNavn3() {
    var image_13 = document.getElementById("mypicture1")
    var image_23 = document.getElementById("mypicture2")
    var image_33 = document.getElementById("mypicture3")
    var bildeinfo3 = document.getElementById("navn3")

     bildeinfo3.innerHTML = ""

    if (image_13) {
        bildeinfo3.innerHTML = mypicture3.getAttribute("src") + "<br>"
    }
    if (image_23) {
        bildeinfo3.innerHTML = mypicture3.getAttribute("src") + "<br>"
    }
    if (image_33) {
        bildeinfo3.innerHTML = mypicture3.getAttribute("src") + "<br>"
    }
}
/*
function selectedbutton() {
    document.getElementById("buttonselected")
    console.log(mynumber)
    if(mynumber ===1){
    buttonselected.innerHTML = 1
    }
    else if (mynumber ===2){
    buttonselected.innerHTML = 2
    }
    else if (mynumber ===3){
    buttonselected.innerHTML = 3
    }
}
*/


/*function public class Main {
    public static void main(String[] args) {
              int myNum = 15;
        System.out.println(myNum);
    }

let image_1 = document.getElementById("image_1")
    let image_2 = document.getElementById("image_2")
    let image_3 = document.getElementById("image_3")
    let navn = document.getElementById("navn")


}
*/
/*let mynumber = Math.ceil(Math.random() * 3);*/

function trerandomimg(pictureid, height){
    let picResulte = getPicIfElses();
    document.getElementById(pictureid).src = picResulte;
            document.getElementById(pictureid).style.height = height;

}

function getPicIfElses(){
    let mynumber2 = Math.ceil(Math.random()* 4);
    console.log(mynumber2)
    if(mynumber2 === 1){
        return 'elf.jpg';
    }
    else if(mynumber2 === 2){
        return 'gnome.jpg';
    }
    else if(mynumber2 === 3){
        return 'nisse.jpeg';
    }
    else if(mynumber2 === 4){
        return 'Goldengnome.jpg';
    }
}

function navnrandomimg() {    
    var image_1 = document.getElementById("random1")
    var image_2 = document.getElementById("random2")
    var image_3 = document.getElementById("random3")
    
    var navnrandomimgid = document.getElementById("navnrandomimgid")
    
    
    
    if (image_1) {
        navnrandomimgid.innerHTML = random1.getAttribute("src") + "<br>"
    }
    if (image_2) {
        navnrandomimgid.innerHTML += random2.getAttribute("src") + "<br>"
    }
    if (image_3) {
        navnrandomimgid.innerHTML += random3.getAttribute("src") + "<br>"
    }
    
}

