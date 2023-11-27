import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MartesPage } from './martes.page';

describe('MartesPage', () => {
  let component: MartesPage;
  let fixture: ComponentFixture<MartesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MartesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
