let changeview=document.querySelector("#bg1")
let i=0;
changeview.addEventListener("click",function(){
    if(i==0){
        document.querySelector(".background_image img").src="./assets/image/bg2.jpg"
        i++
    }
    else if (i==1){
        document.querySelector(".background_image img").src="./assets/image/bg1.jpg"
        i++
    }
    else {
        document.querySelector(".background_image img").src="./assets/image/bg3.jpeg"
        i=0
    }
})
let changesound=document.querySelector("#bg2")
let j=0;
changesound.addEventListener("click",function(){
    if(j==0){
        document.querySelector(".audios audio").src="./assets/audio/whale1.mp3"
        j++
    }
    else if(j==1){
        document.querySelector(".audios audio").src="./assets/audio/whale2.mp3"
        j++
    }
    else{
        document.querySelector(".audios audio").src="./assets/audio/audio1.mp3"
        j=0
    }
})
