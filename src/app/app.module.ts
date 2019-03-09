import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgIdleModule} from '@ng-idle/core';
import { AppComponent } from './app.component';
import { ProgressbarModalComponent } from './progressbar-modal/progressbar-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ProgressbarModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgIdleModule.forRoot()
  ],
  providers: [],
  entryComponents: [ProgressbarModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
