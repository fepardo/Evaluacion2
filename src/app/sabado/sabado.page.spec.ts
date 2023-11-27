import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SabadoPage } from './sabado.page';

describe('SabadoPage', () => {
  let component: SabadoPage;
  let fixture: ComponentFixture<SabadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SabadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
