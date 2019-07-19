import { Component, OnInit} from '@angular/core';
import { Routes } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'collegues-front';

  constructor() {
  }

  ngOnInit(): void {
  }

}
