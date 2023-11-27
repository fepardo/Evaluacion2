import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomingoPage } from './domingo.page';

describe('DomingoPage', () => {
  let component: DomingoPage;
  let fixture: ComponentFixture<DomingoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DomingoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
