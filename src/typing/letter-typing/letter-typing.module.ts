import {NgModule} from "@angular/core";
import {LetterTypingComponent} from "./letter-typing.component";
import {LetterBoxModule} from "../letter-box/letter-box.module";
import {LetterColorModule} from "../letter-color/letter-color.module";

@NgModule({
  declarations: [
    LetterTypingComponent
  ],
  imports: [
    LetterBoxModule,
    LetterColorModule
  ],
  providers: [],
  exports: [
    LetterTypingComponent
  ],
  bootstrap: [LetterTypingComponent]
})
export class LetterTypingModule { }
