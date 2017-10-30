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
	feedback: string;

	constructor(private feedbackService: FeedbackService) {}

	onSubmit() {
    	this.feedbackService.addFeedback(this.feedback);
    	this.feedback = '';
  	}

  	clear() {
  		this.feedback = '';
  	}

	ngOnInit(){
		//this.feedbackService.feedbackIsEdit.subscribe(
		//	(feedback: Feedback) => this.feedback = feedback
		//);
	}
}