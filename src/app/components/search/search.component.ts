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

  constructor(private http: HttpClient,
              private bookmarkService: BookmarkService) {}

  // onSearch() {
  //   if (this.searchQuery.trim()) {
  //     this.http.get(`https://api.github.com/search/repositories?q=${this.searchQuery}`)
  //       .subscribe((response: any) => {
  //         this.repositories = response.items;
  //       });
  //   }
  // }

 
  
  onSearch() {
    if (this.searchQuery.trim()) {
      this.http.get<Repository[]>(`http://localhost:5000/api/repositories/search?query=${this.searchQuery}`)
        .subscribe((response: Repository[]) => {
          console.log('Response from API:', response); // הוספת לוגים כדי לבדוק את התשובה
          this.repositories = response;
        }, error => {
          console.error('Error fetching data from API:', error); // הוספת לוגים כדי לבדוק שגיאות
        });
    }
  }  

  bookmarkRepo(repository: Repository) {
    // לוגיקה לסימון מאגר כסימניה ושמירתו בסשן
    //console.log('Bookmarking repository:', repo);
    this.bookmarkService.saveBookmark("1", repository).subscribe();
  }
}
