import { Component, Input } from '@angular/core';
import { Feedback } from './feedback.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent {
  @Input() feedback: Feedback;
  

  constructor(private feedbackService: FeedbackService) {}

   onEdit(){
  	   this.feedbackService.editFeedback(this.feedback);
    }

  onDelete(){
  	this.feedbackService.deleteFeedback(this.feedback);
  }
}