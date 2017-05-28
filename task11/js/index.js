(function(){
    const player=document.querySelector('.player');
    const video=player.querySelector('.viewer');
    const progress=player.querySelector('.progress');
    const progressBar=player.querySelector('.progress-filled');
    const toggleP=player.querySelector('.toggle-play');
    const toggleF=player.querySelector('.toggle-full');
    const skipButtons=player.querySelectorAll('[data-skip]');
    const ranges=player.querySelectorAll('.player-slider');


    function togglePlay(){
        const method=video.paused? 'play' :'pause';
        video[method]();
    }
    // function toggleFullScreen(){
    //     const method=video.requestFullscreen? 'exitFullScreen' :'requestFullscreen';
    //     console.log(method)
    //     video[method]();
    // }
function toggleFullScreen() {
  if (video.requestFullscreen) {
  video.requestFullscreen();
} else if (video.msRequestFullscreen) {
  video.msRequestFullscreen();
} else if (video.mozRequestFullScreen) {
  video.mozRequestFullScreen();
} else if (video.webkitRequestFullscreen) {
  video.webkitRequestFullscreen();
}
}


    function updateButtonP(){
       const icon=this.paused ? '▶' : '▎▎' ;
       toggleP.textContent=icon;
    }
    function updateButtonF(){
       const icon=this.requestFullscreen ? '□' : '■' ;
       toggleF.textContent=icon;
    }

    function skip(){
      video.currentTime += parseFloat(this.dataset.skip);
    }

    function handleRangeUpdate(){
      video[this.name]=this.value;
    }

    function handleProgress(){
        const percent=(video.currentTime / video.duration)*100;
        progressBar.style.flexBasis=`${percent}%`;
    }

    function scrub(e){
     const scrubTime=(e.offsetX / progress.offsetWidth)*video.duration;
     video.currentTime=scrubTime;
    }


    video.addEventListener('click',togglePlay);
    video.addEventListener('play',updateButtonP);
    video.addEventListener('pause',updateButtonP);
    // video.addEventListener('click',toggleFullScreen);
    // video.addEventListener('click',(e)=>video.requestFullscreen());
    video.addEventListener('timeupdate',handleProgress);
    toggleP.addEventListener('click',togglePlay);
    toggleF.addEventListener('click',toggleFullScreen);
    skipButtons.forEach(button => button.addEventListener('click',skip));
    ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
    ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));

    let mousedown=false;
    progress.addEventListener('click',scrub);
    progress.addEventListener('mousemove',(e)=> mousedown && scrub(e));
    progress.addEventListener('mousedown',()=>mousedown=true);
    progress.addEventListener('mouseup',()=>mousedown=false);
})()