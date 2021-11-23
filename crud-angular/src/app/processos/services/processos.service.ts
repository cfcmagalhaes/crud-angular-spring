import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Processo } from './../model/processo';

@Injectable({
  providedIn: 'root',
})
export class ProcessosService {

  private readonly API = '/assets/processos.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Processo[]>(this.API)
    .pipe(
      first(),
      tap(processos => console.log(processos))
    );
  }
}
