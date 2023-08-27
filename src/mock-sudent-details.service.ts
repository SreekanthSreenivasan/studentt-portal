import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class StudentDetailsService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const MOCK_STUDENTS_DETAILS_DB = [
      { id: 1, username: 'student1', section: 'primary' },
      { id: 2, username: 'student2', section: 'secondary' },
    ];
    return { details: MOCK_STUDENTS_DETAILS_DB };
  }
}
