import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticComponent } from './practic.component';

describe('PracticComponent', () => {
  let component: PracticComponent;
  let fixture: ComponentFixture<PracticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
