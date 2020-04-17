import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SedesFormComponent } from './sedes-form.component';

describe('SedesFormComponent', () => {
  let component: SedesFormComponent;
  let fixture: ComponentFixture<SedesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SedesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SedesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
