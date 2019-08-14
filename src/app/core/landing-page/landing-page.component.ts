import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  landingMessage =
    'Fast-Food-Fast is a food delivery service app for a restaurant';
  constructor() {}

  ngOnInit() {}
}
