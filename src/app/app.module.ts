import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LetterBoxModule} from "../typing/letter-box/letter-box.module";
import {LetterTypingModule} from "../typing/letter-typing/letter-typing.module";
import {SubmissionModule} from "../typing/submission/submission.module";
import {ResultsModule} from "../searching/results/results.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        LetterBoxModule,
        LetterTypingModule,
        SubmissionModule,
        ResultsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
