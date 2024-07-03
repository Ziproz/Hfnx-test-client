import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repository } from '../models/repository.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  private apiUrl = `${environment.apiUrl}/bookmark`;

  constructor(private http: HttpClient) {}

  bookmarkRepository(repository: any) {
    return this.http.post(`${this.apiUrl}/bookmark`, repository);
  }

  getBookmarks()  :Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.apiUrl}/bookmarks`);
  }
}
