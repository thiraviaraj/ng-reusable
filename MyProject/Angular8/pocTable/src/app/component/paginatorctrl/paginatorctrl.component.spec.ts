import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorCtrlComponent } from './paginatorctrl.component';

describe('PaginatorComponent', () => {
  let component: PaginatorCtrlComponent;
  let fixture: ComponentFixture<PaginatorCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
