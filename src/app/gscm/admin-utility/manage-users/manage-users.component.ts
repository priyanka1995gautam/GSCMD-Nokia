import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid-community";

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  private gridOptions: GridOptions;

  columnDefs = [
    {headerName:'FirstName',field:'firstname'},
    {headerName:'LastName',field:'lastname'},
    {headerName:'Email Id',field:'email'},
    {headerName:'Organization',field:'org'},
  ]

  rowData = [
    {firstname:'Anand',lastname:'Kumar',email:'anand_k@gmail.com',org:'HCL Technologies'},
    {firstname:'Anand',lastname:'Kumar',email:'anand_k@gmail.com',org:'HCL Technologies'},
    {firstname:'Anand',lastname:'Kumar',email:'anand_k@gmail.com',org:'HCL Technologies'},
    {firstname:'Anand',lastname:'Kumar',email:'anand_k@gmail.com',org:'HCL Technologies'},
    {firstname:'Anand',lastname:'Kumar',email:'anand_k@gmail.com',org:'HCL Technologies'},
    {firstname:'Anand',lastname:'Kumar',email:'anand_k@gmail.com',org:'HCL Technologies'},
    {firstname:'Anand',lastname:'Kumar',email:'anand_k@gmail.com',org:'HCL Technologies'},
    {firstname:'Anand',lastname:'Kumar',email:'anand_k@gmail.com',org:'HCL Technologies'},
  ]
  constructor() {
    
   }

  ngOnInit() {
  }

}
