import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattablepagingnationComponent } from './mattablepagingnation.component';

describe('MattablepagingnationComponent', () => {
  let component: MattablepagingnationComponent;
  let fixture: ComponentFixture<MattablepagingnationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattablepagingnationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattablepagingnationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
