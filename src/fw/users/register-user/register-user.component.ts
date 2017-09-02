import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  formError: string;
  submitting = false;

  constructor() { }

  ngOnInit() {
  }

}
