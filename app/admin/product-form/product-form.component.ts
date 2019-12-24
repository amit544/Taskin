import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
    categories:any;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
     private category:CategoryService,
     private ProductService:ProductService) {
       let id= this.route.snapshot.paramMap.get('id');
        if (id) this.ProductService.get(id).valueChanges()
        console.log(id);
        console.log("Amit")
   }
     save(product){
       this.ProductService.create(product);
       this.router.navigate(['/admin/product']);
     }
  ngOnInit() {
  
  }

}
