import {NgModule} from "@angular/core";
import {SubmissionComponent} from "./submission.component";
import {LetterTypingModule} from "../letter-typing/letter-typing.module";

@NgModule({
  declarations: [
    SubmissionComponent
  ],
  imports: [
    LetterTypingModule
  ],
  providers: [],
  exports: [
    SubmissionComponent
  ],
  bootstrap: [SubmissionComponent]
})
export class SubmissionModule { }
