import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  @Output() customerCreated = new EventEmitter<any>();
  @Input() customerInfo: any;

  public buttonText = 'Save';

  constructor() {
    this.clearCustomerInfo();
    console.log(this.customerInfo.firstName);
  }

  ngOnInit() {

  }

  private clearCustomerInfo = function() {
    // Create an empty customer object
    this.customerInfo = {
      id: undefined,
      firstName: '',
      lastName: '',
      eMail: ''
    };
  };

  public editCustomerRecord = function(event) {
    this.customerCreated.emit(this.customerInfo);
    this.clearCustomerInfo();
  };

}
