import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectionComponent } from './product-selection.component';

describe('ProductSelctionComponent', () => {
  let component: ProductSelectionComponent;
  let fixture: ComponentFixture<ProductSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSelectionComponent]
    });
    fixture = TestBed.createComponent(ProductSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
