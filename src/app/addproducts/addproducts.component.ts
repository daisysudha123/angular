import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  products: any;
  id: any;
  name: any;
  price: any;
  brand: any;

  

  constructor(private sudha:BrandsService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this.sudha.getProducts().subscribe((res)=>{
      this.products=res;
    })
  }

  addTheProduct(){
    let newObj ={
      id:this.id,
      productName:this.name,
      productBrand:this.brand,
      productPrice:this.price
    }
    console.log(newObj);
    
    this.sudha.getAllProducts(newObj).subscribe((res)=>{
      console.log(res);
      
    })
  }

  updateTheProduct(){
    let newObj ={
      id:this.id,
      productName:this.name,
      productBrand:this.brand,
      productPrice:this.price
    }
    console.log(newObj);
    
    this.sudha.putProducts(this.id,newObj).subscribe((res)=>{
      console.log(res);
      
    })
  }
  deleteTheProduct(){
    this.sudha.deleteProducts(this.id).subscribe((res)=>{
      console.log(res);
      

    })
  }
}


