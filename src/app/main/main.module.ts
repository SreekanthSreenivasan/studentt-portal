import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { StudentDetailsService } from 'src/mock-sudent-details.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { MatOptionModule } from '@angular/material/core';
import { FilterComponent } from './home/filter/filter.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'details/:id',
    component: StudentDetailsComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, StudentDetailsComponent, FilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,

    RouterModule.forChild(routes),
  ],
})
export class MainModule {}
