import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from-operator',
  templateUrl: './from-operator.component.html',
  styleUrls: ['./from-operator.component.scss']
})
export class FromOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observable = from([1, 'Angular', 3, 'C#', 5]);

    observable.subscribe(
      value => console.log(value),
      error => console.log(error),
      () => console.log('Done')
    );

  }

}
