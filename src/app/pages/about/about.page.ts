import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  public env = environment;
  constructor() { }

  ngOnInit() {
  }

}
