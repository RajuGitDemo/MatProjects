import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingInMattableComponent } from './paging-in-mattable.component';

describe('PagingInMattableComponent', () => {
  let component: PagingInMattableComponent;
  let fixture: ComponentFixture<PagingInMattableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingInMattableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingInMattableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
