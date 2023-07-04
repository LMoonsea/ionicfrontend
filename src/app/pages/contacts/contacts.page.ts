import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  public env = environment;
  constructor() { }

  ngOnInit() {
  }

}
