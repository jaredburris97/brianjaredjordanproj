/*import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';*/
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../services/auth.service';

import { Feedback } from "../feedback/feedback.model";

@Injectable()
export class FeedbackService {
	
	feedbackMessages: FirebaseListObservable<Feedback[]>;

	constructor(private db: AngularFireDatabase){}

	addFeedback(fdbk: string) {
      	this.feedbackMessages = this.getFeedbacks();
    		this.feedbackMessages.push({
      			feedback: fdbk
      	});
	}

	getFeedbacks(): FirebaseListObservable<Feedback[]> {
    // query to create our message feed binding
    	return this.db.list('feedback', {
    		 query: {
        		limitToLast: 15,
        		orderByKey: true
      		}
    	});
    }

	deleteFeedback(feedback: Feedback) {
		this.feedbackMessages.remove(feedback.$key);
	}
}