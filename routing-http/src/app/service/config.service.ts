import { Injectable } from '@angular/core';

export interface ITableColumn {
  key: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  readonly userColumns: ITableColumn[] = [
    { key: 'id', title: '#' },
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    { key: 'category', title: 'Category' },
  ];

  constructor() { }

}
