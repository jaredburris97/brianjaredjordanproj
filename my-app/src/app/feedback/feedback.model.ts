export class Feedback { 
	content: string;
	username: string;
	feedbackId?: string;
	userId?: string;

	constructor(content: string, username: string, feedbackId?: string, userId?: string) {
		this.content = content;
		this.username = username;
		this.feedbackId = feedbackId;
		this.userId = userId;
	}
}