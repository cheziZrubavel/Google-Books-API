import { Book, Item } from './../../models/book.model';
import { GetBooksService } from './../../services/get-books.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GetBooksService]
})

@Injectable({
  providedIn: 'root',
})

export class SearchComponent {

  public name: string;
  public booksObj: Item[] = [];
  public ngUnsubscribe: Subject<void> = new Subject<void>();
  public addToWishList: Item[] = [];
  public isCollapsed = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private GetBooksService: GetBooksService,
    private sanitizer: DomSanitizer) {
    this.name = this.router.getCurrentNavigation().extras.state.example;
  }
  // secure the url
  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  // get the query of books and insert them into Array
  public keyUpFunction(searchValue: string): void {
    let url = 'https://www.googleapis.com/books/v1/volumes?q=' + searchValue + '&maxResults=20&key=AIzaSyDwf019vV--PxHpR7drFlzQ6--cQISLGCI';
    this.GetBooksService.getBooks(url)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.booksObj = data;
        return this.booksObj;
      },
        err => console.log(err.message));
  }
  // add the choosen books for wishlist to Array
  toggleEditable(event, i: number) {
    if (event.target.checked) {
      this.addToWishList.push(this.booksObj["items"][i]);
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}





