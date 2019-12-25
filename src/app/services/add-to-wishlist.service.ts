import { Book, Item } from './../models/book.model';
import { SearchComponent } from './../components/search/search.component';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AddToWishlistService {

  public wishListArr: Item[] = [];

  constructor(SearchComponent: SearchComponent) {
    this.wishListArr = SearchComponent.addToWishList;
  }

  // get the Array books 
  public sendWishListArr(): Observable<Item[]> {
    return of(this.wishListArr);
  }

}
