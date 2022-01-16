import {NgModule} from "@angular/core";
import {ResultsComponent} from "./results.component";
import {SubmissionModule} from "../../typing/submission/submission.module";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {ResultsListModule} from "../results-list/results-list.module";

@NgModule({
  declarations: [
    ResultsComponent
  ],
  imports: [
    SubmissionModule,
    CommonModule,
    BrowserModule,
    ResultsListModule
  ],
  providers: [],
  exports: [
    ResultsComponent
  ],
  bootstrap: [ResultsComponent]
})
export class ResultsModule { }
