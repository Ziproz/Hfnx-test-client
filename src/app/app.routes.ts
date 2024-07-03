import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard'
import { BookmarkedRepositoriesComponent } from './components/bookmarked-repositories/bookmarked-repositories.component';
import {SpinnerComponent} from './components/spinner/spinner.component'

const routes: Routes = [
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'bookmarks', component: BookmarkedRepositoriesComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
