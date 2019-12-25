import { Item } from './../../models/book.model';
import { AddToWishlistService } from './../../services/add-to-wishlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  public wishListArr: Item[];
  
  // display the books
  constructor(AddToWishlistService: AddToWishlistService) {
    AddToWishlistService.sendWishListArr().subscribe(
      (getWishListArr) => {
        this.wishListArr = getWishListArr;
      });
  }

}
