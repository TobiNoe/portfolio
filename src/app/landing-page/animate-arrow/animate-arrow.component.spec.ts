import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateArrowComponent } from './animate-arrow.component';

describe('AnimateArrowComponent', () => {
  let component: AnimateArrowComponent;
  let fixture: ComponentFixture<AnimateArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimateArrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimateArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
