import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-my-form-component',
  templateUrl: './my-form-component.component.html',
  styleUrls: ['./my-form-component.component.css'],
})
export class MyFormComponentComponent {
  simpleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.simpleForm = this.fb.group({
      name: '',
      class: '',
      roll: '',
      email: '',

      subjects: this.fb.array([]),
    });
  }

  subjects(): FormArray {
    return this.simpleForm.get('subjects') as FormArray;
  }

  newSubjects(): FormGroup {
    return this.fb.group({
      subName: '',

      subMarks: '',
    });
  }

  addSubjects() {
    this.subjects().push(this.newSubjects());
  }

  removeSubject(i: number) {
    this.subjects().removeAt(i);
  }

  onSubmit() {
    console.log(this.simpleForm.value);
  }
}
