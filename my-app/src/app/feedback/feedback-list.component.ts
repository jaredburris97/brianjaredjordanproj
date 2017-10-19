import { Component, OnInit } from "@angular/core";

import { Feedback } from "./feedback.model";
import { FeedbackService } from "../services/feedback.service";

@Component({
	selector: 'app-feedback-list',
	template: `
			<div class="col-md-8 col-md-offset-2">
				<app-feedback 
					[feedback]="feedback"
					//(editClicked)="feedback.content = $event"
					*ngFor="let feedback of feedbacks"></app-feedback>
			</div>`
})
export class FeedbackListComponent implements OnInit{
	feedbacks: Feedback[] = [];

	constructor(private feedbackService: FeedbackService) {}

	ngOnInit(){
		this.feedbacks = this.feedbackService.getFeedbacks();
	}
}