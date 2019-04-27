// ==UserScript==
// @name         anime couch mode activator-pard deux-fullscreen
// @namespace    http://tampermonkey.net/
// @version      1.7
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

document.getElementsByTagName("video")[0].setAttribute("controls","controls");

document.getElementsByTagName("video")[0].click(("video")[0]);

