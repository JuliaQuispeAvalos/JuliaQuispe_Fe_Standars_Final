import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFuncionaryComponent } from './view-funcionary.component';

describe('ViewFuncionaryComponent', () => {
  let component: ViewFuncionaryComponent;
  let fixture: ComponentFixture<ViewFuncionaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFuncionaryComponent]
    });
    fixture = TestBed.createComponent(ViewFuncionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
