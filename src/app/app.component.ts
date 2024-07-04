import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SpinnerComponent ,MatToolbarModule ,MatButtonModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hfnx-test';
}
