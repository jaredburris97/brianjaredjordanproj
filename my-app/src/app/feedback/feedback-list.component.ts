import { Component, OnInit, OnChanges } from "@angular/core";

import { Feedback } from "./feedback.model";
import { FeedbackService } from "../services/feedback.service";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
	selector: 'app-feedback-list',
	template: `
			<div class="col-md-8 col-md-offset-2">
				<app-feedback 
					[feedback]="feedback"
					*ngFor="let feedback of feedbacks | async"></app-feedback>
			</div>`
})
export class FeedbackListComponent implements OnInit {
	feedbacks: FirebaseListObservable<Feedback[]>;

	constructor(private feedbackService: FeedbackService) {}

	ngOnInit(){
		this.feedbacks = this.feedbackService.getFeedbacks();
			/*.subscribe(
				(feedbacks: Feedback[]) => {
					this.feedbacks = feedbacks;
				}
			);*/
	}
}