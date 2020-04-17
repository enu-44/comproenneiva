import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCompradorFormComponent } from './registro-comprador-form.component';

describe('RegistroCompradorFormComponent', () => {
  let component: RegistroCompradorFormComponent;
  let fixture: ComponentFixture<RegistroCompradorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroCompradorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCompradorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
