import {NgModule} from "@angular/core";
import {LetterColorComponent} from "./letter-color.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    LetterColorComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    LetterColorComponent
  ],
  bootstrap: [LetterColorComponent]
})
export class LetterColorModule { }
