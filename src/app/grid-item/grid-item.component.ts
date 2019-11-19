import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent implements OnInit {

  @Output() recordItemDeleted = new EventEmitter<any>();
  @Output() newItemClicked = new EventEmitter<any>();
  @Output() editItemClicked = new EventEmitter<any>();
  @Input() itemData: Array<any>;

  constructor() { }

  ngOnInit() {
  }
public deleteItemRecord(record) {
    this.recordItemDeleted.emit(record);
  }
    
  public editItemRecord(record) {
    const clonedRecord = Object.assign({}, record);
    this.editItemClicked.emit(clonedRecord);

  }

  public newItemRecord() {
    this.newItemClicked.emit();
  }
}

