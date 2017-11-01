import { Component } from "@angular/core";
import { FeedbackService } from "../services/feedback.service";

@Component({
	selector: 'app-feedbacks',
	template: `
			<div class="row">
					<app-feedback-input></app-feedback-input>
			</div>
			<hr>
			<div class="row">
					<app-feedback-list></app-feedback-list>
			</div>
			`,
	styles: [`
			* {
            height: auto;
          	}
          	`],
	providers: [FeedbackService]
})
export class FeedbacksComponent{
}