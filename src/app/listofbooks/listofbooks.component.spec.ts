import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofbooksComponent } from './listofbooks.component';

describe('ListofbooksComponent', () => {
  let component: ListofbooksComponent;
  let fixture: ComponentFixture<ListofbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
