import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiercolesPage } from './miercoles.page';

describe('MiercolesPage', () => {
  let component: MiercolesPage;
  let fixture: ComponentFixture<MiercolesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MiercolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
