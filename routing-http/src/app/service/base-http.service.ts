import { HttpBackend, HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export abstract class BaseHttpService<T> {

  apiUrl: string = environment.apiUrl;

  http: HttpClient = inject(HttpClient);

  constructor(
    private entityName: string,
  ) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}${this.entityName}`);
  }

}
