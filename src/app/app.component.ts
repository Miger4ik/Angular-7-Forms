import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(null)
    });
  }

  ngOnInit(): void {

  }

  submit() {
    console.log('Form: ', this.form);
    const formData = {...this.form.value}

    console.log('Form data: ', formData);
  }
}
