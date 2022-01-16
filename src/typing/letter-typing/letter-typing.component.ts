import {AfterViewInit, Component, HostListener, ViewChild} from "@angular/core";
import {LetterBoxComponent} from "../letter-box/letter-box.component";
import {LetterColorComponent} from "../letter-color/letter-color.component";
import {FinalWord, Letter} from "../../util/final-word";

@Component({
  selector: 'letter-typing',
  templateUrl: './letter-typing.component.html',
  styleUrls: ['letter-typing.component.css']
})
export class LetterTypingComponent implements AfterViewInit{

  boxColors = [
    {name: 'none', color: '#a6a6a6'},
    {name: 'yellow', color: '#e8b52a'},
    {name: 'green', color: '#209e0d'}
  ]

  @ViewChild('letter1') letterBox1: LetterBoxComponent | undefined;
  @ViewChild('letter2') letterBox2: LetterBoxComponent | undefined;
  @ViewChild('letter3') letterBox3: LetterBoxComponent | undefined;
  @ViewChild('letter4') letterBox4: LetterBoxComponent | undefined;
  @ViewChild('letter5') letterBox5: LetterBoxComponent | undefined;

  @ViewChild('letterColor1') letterColor1: LetterColorComponent | undefined;
  @ViewChild('letterColor2') letterColor2: LetterColorComponent | undefined;
  @ViewChild('letterColor3') letterColor3: LetterColorComponent | undefined;
  @ViewChild('letterColor4') letterColor4: LetterColorComponent | undefined;
  @ViewChild('letterColor5') letterColor5: LetterColorComponent | undefined;

  letterBoxArray = ['letter1', 'letter2', 'letter3', 'letter4', 'letter5'];
  letterBoxNameArray = ['l1', 'l2', 'l3', 'l4', 'l5'];

  currFocus = '';
  currFocusIndex = -1;

  focusNextWrapper = () => {
    this.focusNext();
  }

  updateColorWrapperLB1 = () => {
    this.updateLetterBoxColor('letter1')
  }
  updateColorWrapperLB2 = () => {
    this.updateLetterBoxColor('letter2')
  }
  updateColorWrapperLB3 = () => {
    this.updateLetterBoxColor('letter3')
  }
  updateColorWrapperLB4 = () => {
    this.updateLetterBoxColor('letter4')
  }
  updateColorWrapperLB5 = () => {
    this.updateLetterBoxColor('letter5')
  }

  @HostListener('document:click') onClick() {

  }

  ngAfterViewInit(): void {

  }

  getLetterBoxComponent(letter: String): LetterBoxComponent | undefined{
    let letterBoxComp: LetterBoxComponent | undefined = undefined;
    if (letter == 'letter1') letterBoxComp = this.letterBox1;
    if (letter == 'letter2') letterBoxComp = this.letterBox2;
    if (letter == 'letter3') letterBoxComp = this.letterBox3;
    if (letter == 'letter4') letterBoxComp = this.letterBox4;
    if (letter == 'letter5') letterBoxComp = this.letterBox5;
    return letterBoxComp;
  }

  getLetterBoxColorComponent(letter: String): LetterColorComponent | undefined{
    let letterColorComp: LetterColorComponent | undefined = undefined;
    if (letter == 'letter1') letterColorComp = this.letterColor1;
    if (letter == 'letter2') letterColorComp = this.letterColor2;
    if (letter == 'letter3') letterColorComp = this.letterColor3;
    if (letter == 'letter4') letterColorComp = this.letterColor4;
    if (letter == 'letter5') letterColorComp = this.letterColor5;
    return letterColorComp;
  }

  focusNext() {
    let letterBoxComp: LetterBoxComponent | undefined = this.getLetterBoxComponent(this.currFocus);
    if (letterBoxComp == undefined) return;
    else {
      letterBoxComp.isFocused = false;
      this.currFocusIndex++;
      if (this.currFocusIndex < this.letterBoxArray.length) {
        this.currFocus = this.letterBoxArray[this.currFocusIndex];
        let nextLetterBoxComp: LetterBoxComponent | undefined = this.getLetterBoxComponent(this.currFocus);
        if (nextLetterBoxComp == undefined) return;
        else {
          nextLetterBoxComp.isFocused = true;
        }
      }
    }
    return;
  }

  updateLetterBoxColor(letterBoxName: string) {
    let letterBoxComp: LetterBoxComponent | undefined = this.getLetterBoxComponent(letterBoxName);
    if (letterBoxComp != undefined) {
      let letterColorComp: LetterColorComponent | undefined = this.getLetterBoxColorComponent(letterBoxName);
      if (letterColorComp != undefined) {
        letterBoxComp.color = this.boxColors.filter(boxColor => {
          return boxColor.name == letterColorComp?.selected
        })[0].color;
      }
      letterBoxComp.updateColor();
    }
  }

  compileLettersAndColors(): FinalWord {
    const letter1: Letter = {
      letter: this.letterBox1?.letterDisplay,
      color: this.letterColor1?.selected
    }
    const letter2: Letter = {
      letter: this.letterBox2?.letterDisplay,
      color: this.letterColor2?.selected
    }
    const letter3: Letter = {
      letter: this.letterBox3?.letterDisplay,
      color: this.letterColor3?.selected
    }
    const letter4: Letter = {
      letter: this.letterBox4?.letterDisplay,
      color: this.letterColor4?.selected
    }
    const letter5: Letter = {
      letter: this.letterBox5?.letterDisplay,
      color: this.letterColor5?.selected
    }
    const finalWord: FinalWord = {
      letter1: letter1,
      letter2: letter2,
      letter3: letter3,
      letter4: letter4,
      letter5: letter5
    }
    return finalWord;
  }

}
