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

  saveBookmark(userId: string, repository: Repository): Observable<any> {
    const body = { userId, repository };
    return this.http.post(`${this.apiUrl}/save`, body);
  }

  getBookmarks(userId: string): Observable<any[]> {
    const url = `${this.apiUrl}/getBookmarks?userId=${userId}`;
    return this.http.get<any[]>(url);
  }
}
