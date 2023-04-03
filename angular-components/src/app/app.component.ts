import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-components';

  searchPhrase: string = '';

  onSearchPhraseChange(phrase: string): void {
    this.searchPhrase = phrase;
    console.log(this.searchPhrase);
  }
}
