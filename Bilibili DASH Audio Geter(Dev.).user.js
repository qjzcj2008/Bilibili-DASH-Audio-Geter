// ==UserScript==
// @name         Bilibili DASH Audio Geter(Dev.)
// @namespace https://greasyfork.org/zh-CN/scripts/375420-bilibili-dash-audio-geter
// @version      0.2
// @description  get dash audio on Bilibili!
// @author       qjzcj2008
// @include      *://www.bilibili.com/video/av*
// @include      *://www.bilibili.com/video/bv*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    // Your code here...
    setTimeout(function() {
    var info = window.playerInfo
    var aid = info.aid
    var Scheme = "biilibili://video/" + aid
    var page = document.getElementsByTagName('html')[0].innerHTML;
    var info_rule = "<script>window\.__playinfo__=.*}</script>";
    var playinfo = page.match(info_rule)[0];
    //var playinfo = document.getElementsByTagName("script")[3].text;
    var json_rule = "(?=\{).*(?<=\})";
    var playurl = playinfo.match(json_rule)["0"];
    var jsondata = JSON.parse(playurl);
    var dashaudio = jsondata.data.dash.audio[0].baseUrl;
    //var audio_rule = "http[\\S]*m4s";
    //var audio_url = dashaudio.match(audio_rule)["0"];
    //console.log(dashaudio);
    //alert(Scheme);
    //doc = win.document;
    var url = window.location.href;
    var loc;
    var URI="";
    var element,element2,para,childpara,node;
   element = document.getElementsByClassName("video-data")[0];
			para = document.createElement("a");
            para.innerText = " · 获取音频";
			para.setAttribute("class","charge-appeal-init");
			para.href = dashaudio;
            element.appendChild(para);
            para = document.createElement("a");
            para.innerText = " · 打开客户端";
			para.setAttribute("target","_blank");
			para.href = Scheme;
            element.appendChild(para);
    }, 5000);
    //(?<=\{).*(?=\})
    //<script>window\.__playinfo__=.*}</script>
    //window\.__playinfo__.*<script>
    //test1.data.dash.audio[0].baseUrl
    //van-icon-videodetails_play
    //van-icon-floatwindow_custome
	//sign_url need Referer:play_page
})();
