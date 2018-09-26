import { Component } from '@angular/core';
import { marketsListInterface } from './redux/store.js'
import { select } from '@angular-redux/store'; //redux

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @select() title;

}
