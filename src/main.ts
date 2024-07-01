import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routes';
import { provideHttpClient, withInterceptors} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './app/interceptors/auth.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule,BrowserAnimationsModule),
    provideHttpClient(withInterceptors([AuthInterceptor])), 
  ]
}).catch(err => console.error(err));
