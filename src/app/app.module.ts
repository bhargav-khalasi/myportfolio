import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ContentComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
