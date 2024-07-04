import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Repository } from '../../models/repository.model';
import { BookmarkService } from '../../services/bookmark.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchQuery: string = '';
  repositories: Repository[] = [];
  private apiUrl = `${environment.apiUrl}/repositories`;

  constructor(private http: HttpClient,
              private bookmarkService: BookmarkService) {}

  onSearch() {
    if (this.searchQuery.trim()) {
      this.http.get<Repository[]>(`${this.apiUrl}/search?query=${this.searchQuery}`)
        .subscribe((response: Repository[]) => {
          console.log('Response from API:', response); 
          this.repositories = response;
        }, error => {
          console.error('Error fetching data from API:', error); 
        });
    }
  }  

  bookmarkRepo(repository: Repository) {
    console.log('Bookmarking repository:', repository);
    //in reality send User.userId
    this.bookmarkService.saveBookmark("1", repository).subscribe();
  }

  toggleBookmark(repository: Repository) {
    repository.isBookmarked = !repository.isBookmarked;
  }
}
