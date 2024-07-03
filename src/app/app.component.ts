import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SpinnerComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hfnx-test';
}
