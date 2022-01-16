import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild
} from "@angular/core";

@Component({
  selector: 'letter-box',
  templateUrl: './letter-box.component.html',
  styleUrls: ['./letter-box.component.css']
})
export class LetterBoxComponent implements AfterViewInit{

  @Input() letterInput = '';
  letterDisplay: any = '';

  isFocused: boolean = false;
  isHovering: boolean = false;

  @Input() moveNextFocus = () => {};
  @Input() color = '#a6a6a6';
  @Input() letterBoxName: string = 'letter_box';

  @ViewChild('letter_box') letterBox: ElementRef | undefined;

  letter_box: string = this.letterBoxName;

  @HostListener('document:click') onClick() {
    this.isFocused = this.isHovering;
  }

  @HostListener('document:keyup', ['$event']) onKeyPress(event: KeyboardEvent) {
    if (this.isFocused) {
      event.stopImmediatePropagation();
      const keyCode: String = event.code;
      if (keyCode.startsWith('Key')) {
        const key: String = event.key;
        this.letterDisplay = key.toUpperCase();
        this.moveNextFocus();
      } else if (keyCode == 'Backspace') {
        this.letterDisplay = '';
      }
    }
  }

  ngAfterViewInit() {
    this.loadComponent();
  }

  loadComponent() {
    this.letterDisplay = '';
  }

  updateColor() {
    const elem = document.getElementById(this.letterBoxName);
    if (elem != undefined) {
      elem.style.backgroundColor = this.color;
    }
  }

}
