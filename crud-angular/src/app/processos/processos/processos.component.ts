import { ProcessosService } from './../services/processos.service';
import { Component, OnInit } from '@angular/core';

import { Processo } from '../model/processo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss']
})
export class ProcessosComponent implements OnInit
{
  processos$: Observable<Processo[]>;
  displayedColumns = ['numero', 'titulo']

  constructor(private processosService: ProcessosService) {
    this.processos$ = this.processosService.list();
  }

  ngOnInit(): void {

  }

}
