import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user',
  imports: [ ReactiveFormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  addForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.addForm = this.fb.group({
      username: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required, Validators.minLength(6)],
    });
  }
  submitForm(){
    console.log(this.addForm.value);
  }
  get password(){
    return this.addForm.get("password");
  }

}
