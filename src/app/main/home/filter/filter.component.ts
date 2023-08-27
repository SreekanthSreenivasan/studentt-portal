import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SCHOOL_LOGO } from '../../student-details/assets/image';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() filterBySection = new EventEmitter<string>();
  @Output() filterByClass = new EventEmitter<string>();
  // @Input() clearFilter: boolean = false;
  enableClassFilter: boolean = false;
  selectedSection!: null;
  selectedClass!: null;
  constructor() {}
  classes = ['LKG', 'UKG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  KG = ['LKG', 'UKG'];
  PRIMARY = ['1', '2', '3', '4', '5'];
  SECONDARY = ['6', '7', '8', '9', '10'];
  school_logo: string = SCHOOL_LOGO;
  ngOnInit(): void {}

  sectionFilteredBy(section: string) {
    this.filterBySection.emit(section);
    // console.log('section', section);
    this.enableClassFilter = true;
    if (section === 'KG') {
      this.classes = this.KG;
    }
    if (section === 'Primary') {
      this.classes = this.PRIMARY;
    }
    if (section === 'Secondary') {
      this.classes = this.SECONDARY;
    }
  }

  classFilteredBy(divition: string) {
    this.filterByClass.emit(divition);
    console.log('section', divition);
  }

  // if(clearFilter) {
  //   this.selectedSection = null;
  //   this.selectedClass = null;
  // }
}
