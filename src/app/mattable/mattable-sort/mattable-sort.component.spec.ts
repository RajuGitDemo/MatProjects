import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattableSortComponent } from './mattable-sort.component';

describe('MattableSortComponent', () => {
  let component: MattableSortComponent;
  let fixture: ComponentFixture<MattableSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattableSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattableSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
