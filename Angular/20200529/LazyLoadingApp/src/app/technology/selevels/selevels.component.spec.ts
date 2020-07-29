import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SELevelsComponent } from './selevels.component';

describe('SELevelsComponent', () => {
  let component: SELevelsComponent;
  let fixture: ComponentFixture<SELevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SELevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SELevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
