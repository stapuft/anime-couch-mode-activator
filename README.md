# anime-couch-mode-activator
anime couch mode activator userscript
just copy the contents of the .js file and install it like any other userscript
this is the latest evolution to my keyboard shortcuts userscript,( [beta](https://www.reddit.com/r/KissAnime/comments/b8d3mj/another_useful_userscript/), [0.5](https://www.reddit.com/r/KissAnime/comments/b8qv0b/kissanime_keyboard_shortcuts_userscript/)) i call the 1.0 version, "couch mode" ***\*EDIT now ver. 1.5\**** *^(multiple bugs squashed, and all the officiaal official 9anime url's URL's have been added at the)* r/9anime *^(mods request.)*

when the video is played, (ideal if autoplay is enabled), the video will automatically enter fullscreen, and give you access to 2 customizable rewind buttons and 2 customizable FF buttons.

to change the key that activates the shortcuts change the keys inside the quotes in lines like this (`(event.key == "j")`)

to change the time that each button skips change the numbers in lines like this (`element.currentTime -= 91;`)

if you have firefox to enable the auto fullscreen feature you have to go to about:config and change the value of "full-screen-api.allow-trusted-requests-only" from "true" to "false" and then install this like any other userscript

    // ==UserScript==
// @name         anime couch mode activator
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  Adds extra keyboard shortcuts to html5 videos and automatically enters fullscreen
// @author       Daehock
// @Thanks       Skillrax  & v4lt5u
// @include      *://www.rapidvideo.*
// @include      *://mcloud.to/
// @include      *://openload.*
// @include      *://streamango.*
// @include      *://prettyfast.to/*
// @include      *://www.mp4upload.com/*
// @include      *://9anime.ru/watch/*
// @include      *://9anime.nl/watch/*
// @include      *://9anime.to/watch/*
// @include      *://9anime.live/watch/*
// @include      *://kissanime.ru/Anime/*
// @include      *://kimcartoon.to/Cartoon/*
// @include      *://streamp1ay.me/*
// @grant        none
// ==/UserScript==

document.getElementsByTagName("video")[0].focus();

var elem = document.getElementsByTagName("video")[0];
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
}

var myVideo = document.getElementsByTagName("video")[0];
document.getElementsByTagName("video")[0].setAttribute("controls","controls");
document.getElementsByTagName("video")[0].hover(function(){	myVideo.controls = !myVideo.controls; },5000);


function rewind(element) {
    element.currentTime -= 91;
}

function rewind2(element) {
    element.currentTime -= 30;
}

function skip(element) {
    element.currentTime += 89;
}

function skip2(element) {
    element.currentTime += 30;
}

function mute(element) {
    element.volume = 0;
}

function unmute(element) {
    element.volume = 1.0;
}

function play(element) {
    element.play();
}

function pause(element) {
    element.pause();
}

window.addEventListener('keypress', (event)=>{
    if (event.key == "h") {
        rewind(document.getElementsByTagName("video")[0]);
    }else if (event.key == "l") {
        skip(document.getElementsByTagName("video")[0]);
    }else if (event.key == "k") {
        skip2(document.getElementsByTagName("video")[0]);
    }else if (event.key == "j") {
        rewind2(document.getElementsByTagName("video")[0]);
    }


document.getElementsByTagName("video")[0].focus("video")[0];


});

&#x200B;

thanks to those who contributed time into this and helping me simplify it. if anyone needs help or has suggestions just let me know hope you enjoy this as much as i I will

&#x200B;

*~~note- there is a small bug where upon the first time you enter fullscreen the video controls controls will not appear, but keyboard shortcuts still work, simply press "esc" then "f" to leave and reenter fullscreen to see video controlls again.~~* ***BUG SQUASHED***

***full keyboard shortcuts list is as follows.***

* Exit fullscreen- ESC
* play/pause-SPACE
* increase volume-↑
* decrease volume-↓
* seek forwards small-3 seconds-→
* seek backwards small-3 seconds-←
* toggle captions-if available-c
* toggle fullscreen-f
* mute/unmute-m
* seek to %-0-9

***then the ones added by this userscript are***

* rewind large ammount amount of time (default 91 seconds)-h
* rewind medium ammount amount of time (default 30 seconds)-j
* FF medium ammount amount of time (default 30 seconds)-k
* FF large ammount amount of time (default 89 seconds)-L
