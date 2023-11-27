import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuevesPage } from './jueves.page';

describe('JuevesPage', () => {
  let component: JuevesPage;
  let fixture: ComponentFixture<JuevesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JuevesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
