import { Component, OnInit } from '@angular/core';
import { TablesService } from '../tables.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // customers: any;
  // users: any;

  constructor(private data:TablesService) { }

  ngOnInit(): void {
    // this.users = this.data.getCustomers();

  }
  
  // toggleDetails(customer: any){
  //   this.customers = customer;
  // }


}
