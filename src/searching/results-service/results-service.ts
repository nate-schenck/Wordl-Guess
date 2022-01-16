import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  wordList: string[] = [];

  constructor(private http: HttpClient) { }

  compileWordList() {
    const wordListFile = this.http.get('/assets/wordlist.txt', {responseType: 'text'}).subscribe(data => {
      this.wordList = data.split('\n');
    });
    for (let i = 0; i < this.wordList.length; i++) {
      this.wordList[i] = this.wordList[i].toUpperCase();
    }
    //const wordFile: string = fs.readFileSync('../../assets/wordlist.txt').toString('utf-8');
    //this.wordList = wordFile.split('\n');
  }

}
