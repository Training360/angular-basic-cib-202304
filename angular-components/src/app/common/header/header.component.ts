import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() search: EventEmitter<string> = new EventEmitter();

  phrase: string =  '';

  onSearch(): void {
    this.search.emit(this.phrase);
  }
}
