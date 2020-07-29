import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-optional-param',
  templateUrl: './optional-param.component.html',
  styleUrls: ['./optional-param.component.scss']
})
export class OptionalParamComponent implements OnInit {
  name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
