import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromOperatorComponent } from './from-operator.component';

describe('FromOperatorComponent', () => {
  let component: FromOperatorComponent;
  let fixture: ComponentFixture<FromOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
