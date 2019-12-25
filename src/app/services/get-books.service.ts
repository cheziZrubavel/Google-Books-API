import { SearchComponent } from './../components/search/search.component';
import { Book, Item } from './../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBooksService {

  constructor(private http: HttpClient) {}

  public getBooks(url: string): Observable<Item[]> {
    return this.http.get<Item[]>(url);
  }

}
