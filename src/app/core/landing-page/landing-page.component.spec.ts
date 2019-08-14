import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { HeaderComponent } from '../header/header.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageComponent, HeaderComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(LandingPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct page content', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.landingMessage).toEqual(
      'Fast-Food-Fast is a food delivery service app for a restaurant',
    );
  });
});
