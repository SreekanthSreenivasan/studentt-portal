import { Component } from '@angular/core';
import { SCHOOL_LOGO } from './main/student-details/assets/image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  school_logo: string = SCHOOL_LOGO;
  title = 'student-portal';
}
