import { Component, OnInit } from '@angular/core';
import { DEFAULT_PROFILE_PIC } from './assets/image';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main-service/main.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
  profilePic: string = DEFAULT_PROFILE_PIC;
  StudId!: any;
  studentData: any;

  constructor(
    private route: ActivatedRoute,
    private mainService: MainService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      debugger;
      this.StudId = params.get('id');

      this.mainService
        .getStudentDataById(+this.StudId)
        .subscribe((data: any) => {
          console.log('student data', data);
          this.studentData = data;
        });
    });
  }
}
