import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routes';
import { provideHttpClient, withInterceptors} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './app/interceptors/auth.interceptor';
import { SpinnerInterceptor } from '../src/app/interceptors/spinner.interceptor';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule,BrowserAnimationsModule),
    provideHttpClient(withInterceptors([AuthInterceptor,SpinnerInterceptor])), 
  ]
}).catch(err => console.error(err));
