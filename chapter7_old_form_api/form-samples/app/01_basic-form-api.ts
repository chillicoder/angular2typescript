import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

@Component({
  selector: 'app',
  directives: [FORM_DIRECTIVES],
  template: `
    <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
      <div>Username:         <input type="text" ngControl="username"></div>
      <div>SSN:              <input type="text" ngControl="ssn"></div>
      <div>Password:         <input type="password" ngControl="password"></div>
      <div>Confirm password: <input type="password" ngControl="pconfirm"></div>
      <button type="submit">Register</button>
    </form>
  `
})
class AppComponent {
  onSubmit(formData) {
    console.log(formData);
  }
}

bootstrap(AppComponent);
