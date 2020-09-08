import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedMaTableComponent } from './mixed-ma-table.component';

describe('MixedMaTableComponent', () => {
  let component: MixedMaTableComponent;
  let fixture: ComponentFixture<MixedMaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixedMaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedMaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
