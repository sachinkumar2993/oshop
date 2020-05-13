import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from 'shared/services/filter.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories;
  priceRange;
  @Input('category') category;
  selectedCategories: Array<String> = [];
  panelOpenState = false;
  priceRanges: Array<number> = [];
  selectedPriceRanges: Array<number> = [];

  constructor(filterService: FilterService, private router: Router) {
    this.categories = filterService.getCategories();
    this.priceRange = filterService.getPriceRange();
    for (let i = this.priceRange.min; i < this.priceRange.max; i = i + this.priceRange.step) {
      this.priceRanges.push(i);
    }
  }

  onCategSelection(e, v) {
    if (!this.selectedCategories.includes(e.option.value))
      this.selectedCategories.push(e.option.value);
    else
      this.selectedCategories = this.selectedCategories.filter(cat => {
        return cat != e.option.value
      });
    this.router.navigate(['/'], { queryParams: { 'selectedCategories': this.selectedCategories } })

  }

  onPriceSelection(e, v) {
    var res = e.option.value;
    if (!this.selectedPriceRanges.includes(res))
      this.selectedPriceRanges.push(res);
    else
      this.selectedPriceRanges = this.selectedPriceRanges.filter(pr => {
        return pr != parseInt(res, 10)
      });
    this.router.navigate(['/'], {
      queryParams: {
        'selectedCategories': this.selectedCategories,
        'selectedPriceRanges': this.selectedPriceRanges
      }
    })

  }

  ngOnInit(): void {
  }

}
