import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViernesPage } from './viernes.page';

describe('ViernesPage', () => {
  let component: ViernesPage;
  let fixture: ComponentFixture<ViernesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViernesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
