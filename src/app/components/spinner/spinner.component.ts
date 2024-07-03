import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SpinnerService } from '../../services/spinner.service';
@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="isLoading$ | async" class="spinner-overlay">
      <div class="spinner"></div>
    </div>
  `,
  styleUrls: ['spinner.component.scss']
})
export class SpinnerComponent {
  isLoading$: Observable<boolean> = this.spinnerService.isLoading$;

  constructor(private spinnerService: SpinnerService) {}
}
