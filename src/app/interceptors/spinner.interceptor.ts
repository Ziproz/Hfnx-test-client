import { Injectable, inject } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';

export const SpinnerInterceptor: HttpInterceptorFn = (req, next) => {
    const spinnerService = inject(SpinnerService);

    spinnerService.show();
  
    return next(req).pipe(
        finalize(() => spinnerService.hide())
      );
}

//   constructor(private spinnerService: SpinnerService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     this.spinnerService.show();

//     return next.handle(req).pipe(
//       finalize(() => this.spinnerService.hide())
//     );
//   }
// }