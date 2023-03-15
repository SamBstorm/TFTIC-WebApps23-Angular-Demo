import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit, OnDestroy {
  
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
  
  ngOnInit(): void {
    console.log('OnInit');
  }

}
