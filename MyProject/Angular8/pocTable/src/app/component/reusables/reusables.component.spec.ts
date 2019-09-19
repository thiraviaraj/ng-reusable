import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusablesComponent } from './reusables.component';

describe('ReusablesComponent', () => {
  let component: ReusablesComponent;
  let fixture: ComponentFixture<ReusablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
