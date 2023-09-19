import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

registerForm:FormGroup ;

constructor(){
  this.registerForm= new FormGroup({
    name: new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required , Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    userName: new FormControl('', [Validators.required, Validators.pattern(/^\s+$/)]),
    password : new FormControl ('', [Validators.required ,Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z]) (?=.*\d) (?=.*[@$!%*?&]) [A-Za-z] {8,}$')]),
    confirmPassword : new FormControl('', Validators.required)
  })
}

submitRegisterForm(){
  console.log(this.registerForm);
}
}
