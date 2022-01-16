import {NgModule} from "@angular/core";
import {LetterBoxComponent} from "./letter-box.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
     LetterBoxComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    LetterBoxComponent
  ],
  bootstrap: [LetterBoxComponent]
})
export class LetterBoxModule { }
