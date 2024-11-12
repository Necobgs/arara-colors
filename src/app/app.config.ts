// src/app/app.config.ts

import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { LoadingService } from '../api/services/loading.service';
import { loadingInterceptor } from '../api/interceptors/load.interceptor'; // Importa o interceptor

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([loadingInterceptor])), // Registra o interceptor como função
    LoadingService, // Provedor do serviço de loading
  ],
};
