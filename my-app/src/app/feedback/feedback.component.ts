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

       .pointer {
           cursor: pointer;
       }
     `]
})
export class FeedbackComponent {
 @Input() feedback: Feedback;  

 constructor(private feedbackService: FeedbackService) {}

 onDelete() {
   this.feedbackService.deleteFeedback(this.feedback);
 }
}