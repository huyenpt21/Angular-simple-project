import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product; //khai báo biến nhận data pass từ parent component

  @Output() notify = new EventEmitter(); //khai báo biến phát ra event lên parent component khi có sự thay đổi của biến notify

  constructor() {}

  ngOnInit() {}
}
