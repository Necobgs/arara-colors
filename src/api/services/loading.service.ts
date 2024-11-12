// src/app/api/services/loading.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false); // Mantém o estado do loading
  loading$: Observable<boolean> = this.loadingSubject.asObservable(); // Observable para ser usado no componente

  show() {
    this.loadingSubject.next(true); // Atualiza o estado para 'true'
  }

  hide() {
    this.loadingSubject.next(false); // Atualiza o estado para 'false'
  }
}
