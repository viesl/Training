import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exponential',
  templateUrl: './exponential.component.html',
  styleUrls: ['./exponential.component.scss']
})
export class ExponentialComponent implements OnInit {

  number = 0;
  power: number;
  constructor() { }

  ngOnInit(): void {
  }

}
