import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgridComponent } from './sgrid.component';

describe('SgridComponent', () => {
  let component: SgridComponent;
  let fixture: ComponentFixture<SgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
