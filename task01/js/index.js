(function () {
    function playsound(audio,key) {
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }

    function removeTransition(e) {
        if (e.propertyName !== "transform") return;
        this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));//'transitionend' Browser compatibility is IE10+
    
    keys.forEach(key => key.addEventListener('click', function(){
        const dataKeyNum=this.getAttribute('data-key');//or  const dataKeyNum = this.dataset.key;
        const audio = document.querySelector(`audio[data-key='${dataKeyNum}']`);
        const key = document.querySelector(`.key[data-key='${dataKeyNum}']`);
        playsound(audio,key);
    }));
   
    window.addEventListener('keydown', function(e){
        const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
        const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
        playsound(audio,key);
    });
    
})()