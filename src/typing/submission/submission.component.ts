import {Component, ElementRef, HostListener, Input, ViewChild} from "@angular/core";
import {LetterTypingComponent} from "../letter-typing/letter-typing.component";
import {FinalWord} from "../../util/final-word";

@Component({
  selector: 'submission',
  templateUrl: 'submission.component.html',
  styleUrls: ['submission.component.css']
})
export class SubmissionComponent {

  @Input() sendSubmission = (finalWord: FinalWord) => {};

  @ViewChild('letterTyping') letterTypingComp: LetterTypingComponent | undefined;
  @ViewChild('submitButton') submitButton: ElementRef | undefined;

  @HostListener('document:keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    if (event.key == 'Enter') {
      this.submit();
    }
  }

  submit() {
    if (this.letterTypingComp != undefined) {
      this.sendSubmission(this.letterTypingComp.compileLettersAndColors());
    }
  }

}
