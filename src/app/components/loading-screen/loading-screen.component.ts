// src/app/loading-screen/loading-screen.component.ts

import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../api/services/loading.service'; // Importe o serviço de loading

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit {
  isVisible = false;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    // Atualiza 'isVisible' sempre que o estado de loading mudar
    this.loadingService.loading$.subscribe(isLoading => {
      this.isVisible = isLoading;
    });
  }
}
