
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoading$(): Observable<boolean> {
    return this.isLoadingSubject.asObservable();
  }

  show(): void {
    this.isLoadingSubject.next(true);
  }

  hide(): void {
    this.isLoadingSubject.next(false);
  }
}
