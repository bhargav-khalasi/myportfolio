import { Component, AfterViewInit } from '@angular/core';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements AfterViewInit {
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  caretToggle = true;
  clicked = false;
  onYes = false;
  onNo = false;
  showChat = false;
  onClick(info: String){
    this.clicked = true;

    if(info=="yes")
    {
      this.onYes=true;
    }
    else{
      this.onNo = true;
    }
  }
  onClickCaret()
  {
    this.caretToggle = !this.caretToggle;
  }
  timeout()
  {
    setTimeout(() =>{
      this.showChat = true;
    }, 10);
  }
  
  constructor() { }

  ngAfterViewInit(): void {
    this.timeout()
  }
  
}
