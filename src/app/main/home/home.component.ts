import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../main-service/main.service';
import { Observable, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddEditStudentComponent } from 'src/app/add-edit-student/add-edit-student.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SCHOOL_LOGO } from '../student-details/assets/image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  school_logo = SCHOOL_LOGO;
  // filteredData: any[] = [];
  // showPrimary = true;
  // showSecondary = true;
  filterSection!: string;
  filterClass!: string;
  details$!: Observable<any>;
  backup: any;
  // clearFilter: boolean = false;
  constructor(
    private mainService: MainService,
    private dialog: MatDialog,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllStudentDetails();
  }

  getAllStudentDetails() {
    this.backup = this.mainService.getAll().subscribe();
    this.details$ = this.mainService.getAll();
  }

  // filterData() {
  //   this.filteredData = this.data.filter((item) => {
  //     const isPrimary = this.showPrimary && item.type === 'primary';
  //     const isSecondary = this.showSecondary && item.type === 'secondary';
  //     return isPrimary || isSecondary;
  //   });
  // }
  check(item: any) {
    console.log('selected item', item);
  }

  deleteStudent(item: any) {
    this.mainService.deleteData(item).subscribe((data: any) => {
      console.log(data);
      this.getAllStudentDetails();
    });
  }

  // addNew() {
  //   this.mainService.addNewRow().subscribe((data: any) => {
  //     this.getAllStudentDetails();
  //   });
  // }

  addEditStudent(mode: any, item?: any): void {
    const dialogRef = this.dialog.open(AddEditStudentComponent, {
      data: { mode, item },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllStudentDetails();
      console.log('The dialog was closed');
    });
  }

  navigateToDetail(id: number) {
    this.router.navigate(['details', id], {
      relativeTo: this.aRoute,
    });
  }

  // filter need to be simplified
  filterByClass(value: string) {
    this.filterClass = value;
    this.details$ = this.details$.pipe(
      map((data) => data.filter((item: any) => item.class === this.filterClass))
    );
    // this.filterSection = value;
  }
  filterBySection(value: string) {
    this.getAllStudentDetails();
    this.filterSection = value;
    this.details$ = this.details$.pipe(
      map((data) =>
        data.filter((item: any) => item.section === this.filterSection)
      )
    );
  }
}
