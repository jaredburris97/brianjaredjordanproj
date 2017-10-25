import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

window.onload = function(){
var link = "https://jordanburton.github.io/"
var iframe = document.createElement('iframe');
iframe.frameBorder="10px";
iframe.width="100%";
iframe.height="50%";
iframe.id="randomid";
iframe.setAttribute("src", link);
document.getElementById("daFrame").appendChild(iframe);

var chatlink = "http://localhost:4200/chat"
var chatiframe = document.createElement('iframe');
var showHide = false;
chatiframe.frameBorder="0px";
chatiframe.width="50%";
chatiframe.height="100px";
chatiframe.id="randomid";
chatiframe.setAttribute("src", chatlink);
document.getElementById("chatFrame").appendChild(chatiframe);

}