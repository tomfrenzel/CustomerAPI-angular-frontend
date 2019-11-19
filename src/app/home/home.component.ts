import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service'
import { ItemService } from '../item.service'

import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public customerData: Array<any>;
  public currentCustomer: any;
  public itemData: Array<any>;
  public currentItem: any;

  constructor (private customerService: CustomerService, private itemService: ItemService) {
    customerService.get().subscribe((data: any) => this.customerData = data);
    this.currentCustomer = this.setInitialValuesForCustomerData();
    itemService.get().subscribe((data: any) => this.itemData = data);
    this.currentItem = this.setInitialValuesForCustomerData();
  }
  private setInitialValuesForCustomerData () {
    return {
      id: undefined,
      firstName: '',
      lastName: '',
      eMail: ''
    }
  }

public createOrUpdateCustomer = function(customer: any) {
    // if customer is present in customerData, we can assume this is an update
    // otherwise it is adding a new element
    let customerWithId;
    customerWithId = _.find(this.customerData, (el => el.id === customer.id));

    if (customerWithId) {
      const updateIndex = _.findIndex(this.customerData, {id: customerWithId.id});
      this.customerService.update(customer).subscribe(
        customerRecord =>  this.customerData.splice(updateIndex, 1, customer)
      );
    } else {
      this.customerService.add(customer).subscribe(
        customerRecord => this.customerData.push(customer)
      );
    }

    this.currentCustomer = this.setInitialValuesForCustomerData();
  };
  public editClicked = function(record) {
    this.currentCustomer = record;
  };

  public newClicked = function() {
    this.currentCustomer = this.setInitialValuesForCustomerData(); 
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.customerData, {id: record.id});
    this.customerService.remove(record).subscribe(
      result => this.customerData.splice(deleteIndex, 1)
    );
  }

  ngOnInit() {
  }
  private setInitialValuesForItemData () {
    return {
      id: undefined,
      name: '',
      price: 0
    }
  }

public createOrUpdateItem = function(item: any) {
    // if item is present in itemData, we can assume this is an update
    // otherwise it is adding a new element
    let itemWithId;
    itemWithId = _.find(this.itemData, (el => el.id === item.id));

    if (itemWithId) {
      const updateIndex = _.findIndex(this.itemData, {id: itemWithId.id});
      this.itemService.update(item).subscribe(
        itemRecord =>  this.itemData.splice(updateIndex, 1, item)
      );
    } else {
      this.itemService.add(item).subscribe(
        itemRecord => this.itemData.push(item)
      );
    }

    this.currentItem = this.setInitialValuesForItemData();
  };
    public editItemClicked = function(record) {
    this.currentItem = record;
  };

  public newItemClicked = function() {
    this.currentItem = this.setInitialValuesForItemData(); 
  };

  public deleteItemClicked(record) {
    const deleteIndex = _.findIndex(this.itemData, {id: record.id});
    this.itemService.remove(record).subscribe(
      result => this.itemData.splice(deleteIndex, 1)
    );
  }}
