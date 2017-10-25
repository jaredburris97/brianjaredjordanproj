import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',

  templateUrl: './display.component.html',

  styleUrls: ['./display.component.css'],

})

export class DisplayComponent implements OnInit {

	private newLink;
	private site;

	addLink(newLink: string) {
		this.site = newLink;
		if (newLink) {
			document.getElementById("theframe").setAttribute('src', this.site);
		}
	}

  constructor() {

  }

  ngOnInit() {
	
  }
}

// window.onload = function() {
// 	var chatlink = "http://localhost:4200/chat"
// 	var chatiframe = document.createElement('iframe');
// 	chatiframe.frameBorder="0px";
// 	chatiframe.width="50%";
// 	chatiframe.height="100px";
// 	chatiframe.id="randomid";
// 	chatiframe.setAttribute("src", chatlink);
// 	document.getElementById("chatFrame").appendChild(chatiframe);
// }
