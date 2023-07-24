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
  subjectsArray: any;

  constructor(private fb: FormBuilder) {
    this.simpleForm = this.fb.group({
      name: ['', Validators.required],
      class: ['', Validators.required],
      roll: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

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

  onReset() {
    this.simpleForm.reset({
      subName: '',
      subMarks: '',
    });
  }
  onDeleteAll() {
    this.subjects().clear();
  }
}
