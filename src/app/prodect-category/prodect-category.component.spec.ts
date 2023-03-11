import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectCategoryComponent } from './prodect-category.component';

describe('ProdectCategoryComponent', () => {
  let component: ProdectCategoryComponent;
  let fixture: ComponentFixture<ProdectCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdectCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
