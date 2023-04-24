import { Component } from '@angular/core';
import cloneDeep from 'lodash-es/cloneDeep';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deploy';

  constructor() {
  }
}
