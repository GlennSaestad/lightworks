// THIS IS A COMMENT
// start scripting - GOGOGO

document.addEventListener('DOMContentLoaded', init);

function init() {
  let p1 = document.querySelector('div[data-file]');
  let p2 = document.querySelector('#what-do-you-call');
  let p3 = document.querySelector('#riser');
  let p4 = document.querySelector('#siren');
  let p5 = document.querySelector('#game-girls-play');
  let p6 = document.querySelector('#lightworks');
  let p7 = document.querySelector('#the-name-of');
  let p8 = document.querySelector('#sweeps');
  let p9 = document.querySelector('#listen-up');
  let p10 = document.querySelector('#bells');
  p1.addEventListener('click', play);
  p1.addEventListener('click', start);
  p1.addEventListener('click', rotate);

  p2.addEventListener('click', play);
  p3.addEventListener('click', play);
  p4.addEventListener('click', play);
  p5.addEventListener('click', play);
  p6.addEventListener('click', play);
  p7.addEventListener('click', play);
  p8.addEventListener('click', play);
  p9.addEventListener('click', play);
  p10.addEventListener('click', play);
}


function play(ev){
           let p = ev.currentTarget;
           ev.preventDefault();

           let fn = p.getAttribute('data-file');
           let src = './media/' + fn + '.mp3';
           // if( SOUNDS[fn] ){
           //     SOUNDS[fn].pause();
           //     SOUNDS[fn] = null;
           // }

           console.log(src);

           let audio = document.createElement('audio');
           audio.src = src;
           audio.volume = 0.4;
           audio.play();
}

function start() {
  var steps = document.getElementsByClassName("metronomeStep"),
        len = steps !== null ? steps.length : 0,
        i = 0;
    for(i; i < len; i++) {
        steps [i].className += " animateStep";
        console.log("added");
    }
}
    function rotate() {
      var steps = document.getElementsByClassName("startDiv"),
            len = steps !== null ? steps.length : 0,
            i = 0;
        for(i; i < len; i++) {
            steps [i].className += " startAnimate";
            console.log("added rotation");
        }
}
