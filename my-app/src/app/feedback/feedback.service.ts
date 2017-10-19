import { Feedback } from "./feedback.model";

export class FeedbackService {
	feedbacks: Feedback[] = [];

	addFeedback(feedback: Feedback) {
		this.feedbacks.push(feedback);
		console.log(this.feedbacks);
	}

	getFeedbacks() {
		return this.feedbacks;
	}

	deleteFeedback(feedback: Feedback) {
		this.feedbacks.splice(this.feedbacks.indexOf(feedback), 1);
	}
}