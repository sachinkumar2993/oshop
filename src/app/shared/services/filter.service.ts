import { Injectable } from '@angular/core';
import { categories } from '../../../assets/categories';
import { priceRange } from '../../../assets/priceRange';


@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  getCategories(){
    return categories;
  }

  getPriceRange(){
    return priceRange;
  }
}
