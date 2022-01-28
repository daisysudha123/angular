import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TablesService } from '../tables.service';



@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  // users: any;
  // @Input() customer: any;

  constructor(private data:TablesService) { }

  ngOnInit(): void {
  }

}
