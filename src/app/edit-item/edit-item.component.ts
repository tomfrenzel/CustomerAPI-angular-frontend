import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  @Output() itemCreated = new EventEmitter<any>();
  @Input() itemInfo: any;

  public buttonText = 'Save';

  constructor() {
    this.clearItemInfo();
    console.log(this.itemInfo.name);
  }

  ngOnInit() {

  }

  private clearItemInfo = function() {
    // Create an empty item object
    this.itemInfo = {
      id: undefined,
      name: '',
      price: 0
        };
  };

  public editItemRecord = function(event) {
    this.itemCreated.emit(this.itemInfo);
    this.clearItemInfo();
  };

}
