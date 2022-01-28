import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor() { }
  getCustomers(){
    const customers =[
      { CompanyName:'customer 1', CompanyDescription:'company1 description ',CompanyStartYear:'2012',CompanyGstNo:'GSTIN1',Branch:'Hyderabad',Technologies:'Html,Css,Bootstrap',State:'Karnataka'}, 
      { CompanyName:'customer 2', CompanyDescription:'company2 description ',CompanyStartYear:'2010',CompanyGstNo:'GSTIN1',Branch:'Hyderabad',Technologies:'Html,Css,Bootstrap',State:'Karnataka'}, 
      { CompanyName:'customer 3', CompanyDescription:'company3 description ',CompanyStartYear:'2014',CompanyGstNo:'GSTIN1',Branch:'Hyderabad',Technologies:'Html,Css,Bootstrap',State:'Karnataka'}, 
      { CompanyName:'customer 4', CompanyDescription:'company4 description ',CompanyStartYear:'2006',CompanyGstNo:'GSTIN1',Branch:'Hyderabad',Technologies:'Html,Css,Bootstrap',State:'Karnataka'}, 
      { CompanyName:'customer 5', CompanyDescription:'company5 description ',CompanyStartYear:'2016',CompanyGstNo:'GSTIN1',Branch:'Hyderabad',Technologies:'Html,Css,Bootstrap',State:'Karnataka'}, 
      { CompanyName:'customer 6', CompanyDescription:'company6 description ',CompanyStartYear:'2013',CompanyGstNo:'GSTIN1',Branch:'Hyderabad',Technologies:'Html,Css,Bootstrap',State:'Karnataka'}, 
      { CompanyName:'customer 7', CompanyDescription:'company7 description ',CompanyStartYear:'2019',CompanyGstNo:'GSTIN1',Branch:'Hyderabad',Technologies:'Html,Css,Bootstrap',State:'Karnataka'}
    ]
    return customers;
  }
  
}
