import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../../services/bookmark.service';
import { Repository } from '../../models/repository.model';

@Component({
  selector: 'app-bookmarked-repositories',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule],
  templateUrl: './bookmarked-repositories.component.html',
  styleUrl: './bookmarked-repositories.component.scss'
})
export class BookmarkedRepositoriesComponent implements OnInit {
    bookmarks: Repository[] = [];
  
    constructor(private bookmarkService: BookmarkService) {}
  
    ngOnInit(): void {
      this.loadBookmarks();
    }
  
    loadBookmarks(): void {
      this.bookmarkService.getBookmarks("1").subscribe((data: Repository[]) => {
        this.bookmarks = data;
      });
    }

}
