import { Component, OnInit } from '@angular/core';
import { MethodsService } from '../methods.service';

@Component({
  selector: 'app-fetching',
  templateUrl: './fetching.component.html',
  styleUrls: ['./fetching.component.css']
})
export class FetchingComponent implements OnInit {
daisy:any
  showData: any;
  constructor(private data:MethodsService) { }


  ngOnInit(): void {


    
  }
  submit(){
    // console.log(this.daisy);
    
  //  this.data.getFetching(this.daisy).subscribe((res)=>{
    this.data.getFetching().subscribe((res)=>{

     
      console.log(res);
      
      let temp = res.data;
      console.log(this.showData);
      temp.forEach((element: any) => {
        if(element.date === this.daisy){
          this.showData = element
        }
      });
      
    })
    
  }
  
} 