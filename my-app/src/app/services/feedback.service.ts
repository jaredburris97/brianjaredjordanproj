/*import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';*/
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../services/auth.service';

import { Feedback } from "../feedback/feedback.model";

@Injectable()
export class FeedbackService {
	private feedbacks: Feedback[] = [];

	
	feedbackMessages: FirebaseListObservable<Feedback[]>;
	feedbackDB: any;

	/*feedbackIsEdit = new EventEmitter<Feedback>();*/

	//constructor(private http: Http) {}
	constructor(private db: AngularFireDatabase) {
		this.feedbackDB = this.db.list("feedbacks");
		console.log("constructor");
	}

	addFeedback(fdbk: Feedback) {
		/*this.feedbacks.push(fdbk);
	
		const feedbackObject = {
      		feedback: fdbk
      	}*/

      	this.feedbackMessages = this.getFeedbacks();
    		this.feedbackMessages.push({
      			feedback: fdbk
      	});

      	//Allows for the addition of messages to the firebase database
      	/*let feedbacks = firebase.database().ref().child("feedbacks").push().key;

      	let newFeedback = firebase.database().ref("feedbacks/" + feedbacks).set(feedbackObject);*/
		

		/*this.feedbacks.push(feedback);
		const body = JSON.stringify(feedback);
		const headers = new Headers({'Content-Type': 'application/json'});
		return this.http.post('http://localhost:3000/feedback', body, {headers: headers}).map((response: Response) => response.json())
		.catch((error: Response) => Observable.throw(error.json()));*/
	}

	getFeedbacks(): FirebaseListObservable<Feedback[]> {
    // query to create our message feed binding
    	return this.db.list('feedbacks');
    }
  

	/*getFeedbacks() {
		return this.feedbacks;
		/*return this.http.get('http://localhost:3000/feedback')
			.map((response: Response) => {
				const feedbacks = response.json().obj;
				let transformedFeedbacks: Feedback[] = [];
				for(let feedback of feedbacks){
					transformedFeedbacks.push(new Feedback(feedback.content, 'Dummy', feedback.id, null));
				}
				this.feedbacks = transformedFeedbacks;
				return transformedFeedbacks;
			})
			.catch((error: Response) => Observable.throw(error.json()));
	}*/

	deleteFeedback(feedback: Feedback) {
		this.feedbacks.splice(this.feedbacks.indexOf(feedback), 1);
	}
}