import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditTableValidationComponent } from './inline-edit-table-validation.component';

describe('InlineEditTableValidationComponent', () => {
  let component: InlineEditTableValidationComponent;
  let fixture: ComponentFixture<InlineEditTableValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineEditTableValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineEditTableValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
