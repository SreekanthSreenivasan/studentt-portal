import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../main/main-service/main.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.scss'],
})
export class AddEditStudentComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mainService: MainService,
    private dialog: MatDialog,
    private aRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddEditStudentComponent>
  ) {
    this.formGroup = this.formBuilder.group({
      id: this.data.id,
      name: ['', Validators.required],
      description: [''],
      section: ['', Validators.required],
      class: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('data', this.data);
    if (this.data.mode == 'edit') {
      debugger;
      this.formGroup.patchValue(this.data.item);
    }
  }

  submitForm() {
    if (this.formGroup.valid) {
      // Handle form submission here
      if (this.data.mode == 'add') {
        console.log(this.formGroup.value);
        this.mainService
          .addNewRow(this.formGroup.value)
          .subscribe((data: any) => {
            this.dialogRef.close();
          });
      }
      if (this.data.mode == 'edit') {
        this.mainService
          .updateRow(this.formGroup.value)
          .subscribe((data: any) => {
            debugger;
            this.dialogRef.close();
          });
      }
    } else {
      // Form is invalid, display error or handle it accordingly
    }
  }
}
