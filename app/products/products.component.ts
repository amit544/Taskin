import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 products$
 categories$;
  constructor( private product:ProductService,
    CategoryService:CategoryService) { 
  this.products$=product.getCategories()

   


  }

  ngOnInit() {
  }

}
