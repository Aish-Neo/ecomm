import {Component, Input, OnInit} from '@angular/core';
import {ProductColor} from '../../../_interface/productinfo';

@Component({
  selector: 'aig-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  @Input() colors: ProductColor[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
