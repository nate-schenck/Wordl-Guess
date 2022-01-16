import {AfterViewInit, Component, Input} from "@angular/core";

@Component({
  selector: 'letter-color',
  templateUrl: 'letter-color.component.html',
  styleUrls: ['letter-color.component.css']
})
export class LetterColorComponent implements AfterViewInit{

  @Input() updateBoxColor = () => {};

  selected = 'none';

  ngAfterViewInit() {
    this.selected = 'none';
  }

  selectNone() {
    this.selected = 'none';
    this.updateBoxColor();
  }

  selectYellow() {
    this.selected = 'yellow';
    this.updateBoxColor();
  }

  selectGreen() {
    this.selected = 'green';
    this.updateBoxColor();
  }

}
