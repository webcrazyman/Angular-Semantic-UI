import { Component, View } from "angular2/core";
import { MessageService } from "../../../services/message";

@Component({
  properties: [],
  selector: "ui-message"
})

@View({
  template: `<div *ngIf="messages.length" class="ui message info">
  <div class="header">
    Message list
  </div>
  <ul class="list">
    <li *ngFor="#message of messages">Message emitted at: {{message}} ( message expire after 5 seconds )</li>
  </ul>
</div>`
})

export class SemanticMessage {
  messages: Array<string> = new Array<string>();
  private LENGTH: number = 5000;

  constructor(public ms: MessageService) {
    this.ms._rx.subscribe((data: any) => {
        
      // display message
      this.messages.push(data);
      
      // remove message
      setTimeout(() => {
        this.messages.shift();
      }, this.LENGTH);
    });
  }
}
