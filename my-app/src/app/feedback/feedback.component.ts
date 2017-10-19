import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Feedback } from './feedback.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent {
  @Input() feedback: Feedback;
  @Output() editClicked = new EventEmitter<string>();

   onEdit(){
  	this.editClicked.emit('A new value');
  }

  onDelete(){
  	this.feedbackService.deleteFeedback(this.feedback);
  }
}