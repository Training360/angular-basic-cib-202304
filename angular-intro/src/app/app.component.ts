import { Component } from '@angular/core';

export interface IUser {
  id: number;
  name: string;
  active?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'CIB angular-intro';

  mainTitle: string = 'title-element';

  phrase: string = 'add your name';

  constructor() {
    setInterval( () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();
      const hour = currentDate.getHours();
      const minute = currentDate.getMinutes();
      const second = currentDate.getSeconds();

      this.title = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }, 1000);
  }

  checkPhrase(): void {
    console.log(this.phrase);
  }

  onTitleClick(ev: MouseEvent): void {
    console.log(ev);
  }

  nameChanged(inputEvent: Event): void {
    this.phrase = (inputEvent.target as HTMLInputElement).value;
  }
}
