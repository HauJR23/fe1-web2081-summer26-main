import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
 addForm: FormGroup;

 constructor(private fb: FormBuilder) {
  this.addForm = this.fb.group({
    name: ["", [Validators.required]],
      category: "",
   
    price: ["", Validators.min(0)],
   
  });
 }
 submitForm(){
  console.log(this.addForm.value);
 }
 get name() {
  return this.addForm.get("name");
 }
}

