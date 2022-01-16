import {NgModule} from "@angular/core";
import {ResultsListComponent} from "./results-list.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ResultsListComponent
  ],
  imports: [CommonModule],
  providers: [],
  exports: [
    ResultsListComponent
  ],
  bootstrap: [ResultsListComponent]
})
export class ResultsListModule { }
