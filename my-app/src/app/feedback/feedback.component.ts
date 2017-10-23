import { Component, Input } from '@angular/core';
import { Feedback } from './feedback.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }

        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;

        }
  `]
})
export class FeedbackComponent {
  @Input() feedback: Feedback;
  

  constructor(private feedbackService: FeedbackService) {}

   /*onEdit(){
  	   this.feedbackService.editFeedback(this.feedback);
    }*/

  onDelete(){
  	this.feedbackService.deleteFeedback(this.feedback);
  }
}