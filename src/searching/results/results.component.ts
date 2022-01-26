import {ChangeDetectorRef, Component, ViewChild} from "@angular/core";
import {FinalWord} from "../../util/final-word";
import {ResultsListComponent} from "../results-list/results-list.component";
import {ResultsService} from "../results-service/results-service";
import {SubmissionComponent} from "../../typing/submission/submission.component";

@Component({
  selector: 'results',
  templateUrl: 'results.component.html',
  styleUrls: ['results.component.css'],
  providers: [ResultsService]
})
export class ResultsComponent {

  resultsService: ResultsService;

  @ViewChild('resultsList') resultsList: ResultsListComponent | undefined;
  @ViewChild('submission') submissionComp: SubmissionComponent | undefined;

  finalWordString: string | undefined = '';
  finalWord: FinalWord | undefined;
  prevFinalWord: FinalWord | undefined;

  retrieveFinalWordWrapper = (finalWord: FinalWord) => {
    this.retrieveFinalWord(finalWord);
  }

  constructor(resultsService: ResultsService) {
    this.resultsService = resultsService;
  }

  retrieveFinalWord(finalWord: FinalWord) {
    this.finalWordString =
      finalWord.letter1.letter +
      finalWord.letter2.letter +
      finalWord.letter3.letter +
      finalWord.letter4.letter +
      finalWord.letter5.letter;
    this.finalWord = finalWord;
    //some search function
  }

  setWordList(finalWord: FinalWord | undefined) {
    if (!finalWord) {
      console.error("Word error.");
      return;
    }
    if  (!this.resultsList) {
      console.error('Error with the Results List.');
      return;
    }
    if  (!this.submissionComp) {
      console.error('Error with the Submission.');
      return;
    }
    if (this.prevFinalWord == finalWord) {
      return;
    }
    this.resultsList.resultsList = [];
    this.resultsService.compileWordList();
    if (this.resultsService.wordList.length === 0) {
      return;
    }
    let wordsList = this.resultsService.wordList;
    if (finalWord.letter1.color == 'green') {
      wordsList = wordsList.filter(w => w.startsWith(finalWord.letter1.letter));
    }
    if (finalWord.letter2.color == 'green') {
      wordsList = wordsList.filter(w => w[1] == finalWord.letter2.letter);
    }
    if (finalWord.letter3.color == 'green') {
      wordsList = wordsList.filter(w => w[2] == finalWord.letter3.letter);
    }
    if (finalWord.letter4.color == 'green') {
      wordsList = wordsList.filter(w => w[3] == finalWord.letter4.letter);
    }
    if (finalWord.letter5.color == 'green') {
      wordsList = wordsList.filter(w => w[4] == finalWord.letter5.letter);
    }
    if (finalWord.letter1.color == 'yellow') {
      wordsList = wordsList.filter(w => w.includes(finalWord.letter1.letter));
      wordsList = wordsList.filter(w => w[0] != finalWord.letter1.letter);
    }
    if (finalWord.letter2.color == 'yellow') {
      wordsList = wordsList.filter(w => w.includes(finalWord.letter2.letter));
      wordsList = wordsList.filter(w => w[1] != finalWord.letter2.letter);
    }
    if (finalWord.letter3.color == 'yellow') {
      wordsList = wordsList.filter(w => w.includes(finalWord.letter3.letter));
      wordsList = wordsList.filter(w => w[2] != finalWord.letter3.letter);
    }
    if (finalWord.letter4.color == 'yellow') {
      wordsList = wordsList.filter(w => w.includes(finalWord.letter4.letter));
      wordsList = wordsList.filter(w => w[3] != finalWord.letter4.letter);
    }
    if (finalWord.letter5.color == 'yellow') {
      wordsList = wordsList.filter(w => w.includes(finalWord.letter5.letter));
      wordsList = wordsList.filter(w => w[4] != finalWord.letter5.letter);
    }
    if (finalWord.letter1.color == 'none') {
      wordsList = wordsList.filter(w => !w.includes(finalWord.letter1.letter));
    }
    if (finalWord.letter2.color == 'none') {
      wordsList = wordsList.filter(w => !w.includes(finalWord.letter2.letter));
    }
    if (finalWord.letter3.color == 'none') {
      wordsList = wordsList.filter(w => !w.includes(finalWord.letter3.letter));
    }
    if (finalWord.letter4.color == 'none') {
      wordsList = wordsList.filter(w => !w.includes(finalWord.letter4.letter));
    }
    if (finalWord.letter5.color == 'none') {
      wordsList = wordsList.filter(w => !w.includes(finalWord.letter5.letter));
    }
    this.resultsList.resultsList = wordsList;
    this.prevFinalWord = finalWord;
  }

}
