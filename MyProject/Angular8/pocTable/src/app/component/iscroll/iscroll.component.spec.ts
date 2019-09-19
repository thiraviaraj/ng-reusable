import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IscrollComponent } from './iscroll.component';

describe('IscrollComponent', () => {
  let component: IscrollComponent;
  let fixture: ComponentFixture<IscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IscrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
