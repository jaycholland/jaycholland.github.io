var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('intro-video-background', {
    height: '1920',
    width: '1080',
    videoId: 'Rk6_hdRtJOE',
    playerVars: {
        autoplay:1,
        controls:0,
        enablejsapi:1,
        disablekb:1,
        fs:0,
        iv_load_policy:3,
        loop:1,
        modestbranding:1,
        playsinline:1,
        rel:0,
        showinfo:0,
        cc_load_policy:0,
        start:23,
        end:181
    },
    events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
    }
    });
}
function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        document.getElementById("intro-video-background").style.opacity = 1;
    } else if(event.data == YT.PlayerState.ENDED){
        event.target.playVideo();
    }
}
function stopVideo() {
    player.stopVideo();
}