import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService); // Injeção do serviço de loading
  loadingService.show(); // Mostra o loader ao iniciar a requisição

  return next(req).pipe(
    finalize(() => loadingService.hide()) // Esconde o loader ao finalizar a requisição
  );
};
