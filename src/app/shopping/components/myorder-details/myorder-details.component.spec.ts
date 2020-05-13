import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyorderDetailsComponent } from './myorder-details.component';

describe('MyorderDetailsComponent', () => {
  let component: MyorderDetailsComponent;
  let fixture: ComponentFixture<MyorderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyorderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyorderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
