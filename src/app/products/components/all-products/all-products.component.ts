import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
products:any[]=[];
categories:any[]=[];
loading:boolean = false;

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  getProducts(){
    this.loading=true//condition pour spinner
    this.service.getAllProducts().subscribe((res:any)=>{
      this.loading=false
      this.products=res
    },error=>{
      this.loading=false
     alert(error)
    })
  }

  getCategories(){
    this.loading=true
    this.service.getAllCategories().subscribe((res:any)=>{
      this.loading=false
      console.log(res)
      this.categories=res
    }, error=>{
      this.loading=false
      alert(error)
    })
  }

  filterCategory(event:any){
    let value=event.target.value;
    if(value=="All"){
      this.getProducts()
    }else{
      this.getProductsCategory(value)
    }
    
  }

  getProductsCategory(keyword:String){
    this.loading=true
    this.service.getProductsByCategory(keyword).subscribe((res:any)=>{
      this.loading=false
      this.products=res
    })
    
  }

}
