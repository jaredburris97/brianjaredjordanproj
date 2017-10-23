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
var link = "http://localhost:4200/chat"
var iframe = document.createElement('iframe');
iframe.frameBorder="0px";
iframe.width="100%";
iframe.height="50%";
iframe.id="randomid";
iframe.setAttribute("src", link);
document.getElementById("daFrame").appendChild(iframe);

}