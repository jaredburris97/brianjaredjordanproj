import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Feedback } from './feedback.model';

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
}