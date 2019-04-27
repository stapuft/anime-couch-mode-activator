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