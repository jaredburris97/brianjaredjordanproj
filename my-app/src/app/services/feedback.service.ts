import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Feedback } from "../feedback/feedback.model";

@Injectable()
export class FeedbackService {
	feedbacks: Feedback[] = [];
	feedbackIsEdit = new EventEmitter<Feedback>();

	constructor(private http: Http) {}

	addFeedback(feedback: Feedback) {
		this.feedbacks.push(feedback);
		const body = JSON.stringify(feedback);
		const headers = new Headers({'Content-Type': 'application/json'});
		return this.http.post('http://localhost:3000/feedback', body, {headers: headers}).map((response: Response) => response.json())
		.catch((error: Response) => Observable.throw(error.json()));
	}

	getFeedbacks() {
		return this.http.get('http://localhost:3000/feedback')
			.map((response: Response) => {
				const feedbacks = response.json().obj;
				let transformedFeedbacks: Feedback[] = [];
				for(let feedback of feedbacks){
					transformedFeedbacks.push(new Feedback(feedback.content, 'Dummy', feedback.id, null));
				}
				this.feedbacks = transformedFeedbacks;
				return transformedFeedbacks;
			})
			.catch((error: Response) => Observable.throw(error.json()));;
	}

	editFeedback(feedback: Feedback) {
		this.feedbackIsEdit.emit(feedback);
	}

	updateFeedback(feedback: Feedback){
		
	}

	deleteFeedback(feedback: Feedback) {
		this.feedbacks.splice(this.feedbacks.indexOf(feedback), 1);
	}
}