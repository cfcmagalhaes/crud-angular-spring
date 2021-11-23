import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Processo } from '../model/processo';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { ProcessosService } from './../services/processos.service';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss']
})
export class ProcessosComponent implements OnInit
{
  processos$: Observable<Processo[]>;
  displayedColumns = ['numero', 'titulo']

  constructor(
    private processosService: ProcessosService,
    public dialog: MatDialog) {
    this.processos$ = this.processosService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar os processos.');
        return of ([])
      })
    );
  }

  onError( errorMsg: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
