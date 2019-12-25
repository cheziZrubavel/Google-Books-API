import { TestBed } from '@angular/core/testing';

import { AddToWishlistService } from './add-to-wishlist.service';

describe('AddToWishlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddToWishlistService = TestBed.get(AddToWishlistService);
    expect(service).toBeTruthy();
  });
});
