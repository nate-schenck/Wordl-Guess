import {Component} from "@angular/core";

@Component({
  selector: 'results-list',
  templateUrl: 'results-list.component.html',
  styleUrls: ['results-list.component.css']
})
export class ResultsListComponent {

  resultsList: string[] = [];

  constructor() { }

}
