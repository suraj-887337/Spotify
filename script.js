console.log("suraj");
 let stindex=0;
let audioelement=new Audio('songs/5.mp3');
// audioelement.play();
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gifsl=document.getElementById('gif');
let masterSongName2= document.getElementById('masterSongName1');
let songItem1=Array.from(document.getElementsByClassName('songItem'));
 

let songs=[
    {songName:"Warriyo - mortals", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"cielo - Hum Hum", filePath:"song/2.mp3", coverPath:"covers/2.jpg"},
    {songName:" DEAF KEV - Invincible", filePath:"song/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"different Heaven & Eh!de my hart", filePath:"song/4.mp3", coverPath:"covers/4.jpg"},
    {songName:" DEAF KEV - Invincible", filePath:"song/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"different Heaven & Eh!de my hart", filePath:"song/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Warriyo - mortals", filePath:"song/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"DEAF KEV - Invincible", filePath:"song/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"junji - Heroes Tonight", filePath:"song/9.mp3", coverPath:"covers/9.jpg"}
    // {sonName:"rub ko yad karu", filePath:"song/1.mp3", coverPath:"cover/1.jpg"}
];
songItem1.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName('songList')[0].innerText=songs[i].songName;
});
masterPlay.addEventListener('click', ()=>{
       if(audioelement.paused || audioelement.currentTime<=0){
          audioelement.play();
          masterPlay.classList.remove('fa-play-circle');
          masterPlay.classList.add('fa-pause-circle');
          gifsl.style.opacity=1;
       }else{
        audioelement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gifsl.style.opacity=0;
       }
});
audioelement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    progress= parseInt((audioelement.currentTime/audioelement.duration)*100);
    myProgressBar.value=progress;
});
myProgressBar.addEventListener('change', ()=>{
     audioelement.currentTime=(myProgressBar.value*audioelement.duration)/100;
});

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle'); 
    })
} 


Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log("suraj");
        stindex=parseInt(e.target.id);
         makeallplays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src=`songs/${stindex+1}.mp3`;
        masterSongName2.innerText=songs[stindex].songName;
        audioelement.currentTime=0;
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(stindex<=0){
        stindex=0;
    }else{
        stindex-=1;
    }
    audioelement.src=`songs/${stindex+1}.mp3`;
    masterSongName2.innerText=songs[stindex].songName;
    audioelement.currentTime=0;
    audioelement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('next').addEventListener('click', ()=>{
    if(stindex<=0){
        stindex=0;
    }else{
        stindex-=1;
    }
    audioelement.src=`songs/${stindex+1}.mp3`;
    masterSongName2.innerText=songs[stindex].songName;
    audioelement.currentTime=0;
    audioelement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})



