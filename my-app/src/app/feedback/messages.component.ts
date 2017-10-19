import { Component } from "@angular/core";

@Component({
	selector: 'app-feedbacks',
	template: `
			<div class="row">
					<app-feedback-input></app-feedback-input>
			</div>
			<hr>
			<div class="row">
					<app-message-list></app-message-list>
			</div>
	`
})
export class MessagesComponent{
}