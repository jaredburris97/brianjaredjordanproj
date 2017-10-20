import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { FeedbackService } from "../services/feedback.service";
import { Feedback } from "./feedback.model";

@Component({
	selector: 'app-feedback-input',
	templateUrl: './feedback-input.component.html',
	styleUrls: ['./feedback-input.component.css']
})
export class FeedbackInputComponent implements OnInit {
	feedback: Feedback;

	constructor(private feedbackService: FeedbackService) {}

	onSubmit(form: NgForm){
		const feedback = new Feedback(form.value.content, 'Max');
		this.feedbackService.addFeedback(feedback)
			.subscribe(
				data => console.log(data),
				error => console.error(error)
			);
		form.resetForm();
	}

	ngOnInit(){
		this.feedbackService.feedbackIsEdit.subscribe(
			(feedback: Feedback) => this.feedback = feedback
		);
	}
}