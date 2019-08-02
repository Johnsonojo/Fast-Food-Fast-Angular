import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageComponent],
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
    expect(app.siteTitle).toEqual('Fast-Food-Fast');
  });

  it('should have correct page content', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.landingMessage).toEqual(
      'Fast-Food-Fast is a food delivery service app for a restaurant',
    );
  });
});
