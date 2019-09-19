import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditablegridComponent } from './editablegrid.component';

describe('EditablegridComponent', () => {
  let component: EditablegridComponent;
  let fixture: ComponentFixture<EditablegridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditablegridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditablegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
