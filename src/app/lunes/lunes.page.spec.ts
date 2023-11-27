import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LunesPage } from './lunes.page';

describe('LunesPage', () => {
  let component: LunesPage;
  let fixture: ComponentFixture<LunesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LunesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
