import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MOCK_STUDENTS_DB, MOCK_STUDENTS_DETAILS } from 'src/mock_db';

@Injectable({
  providedIn: 'root',
})
export class MockApiServiceService implements InMemoryDbService {
  constructor() {}
  createDb() {
    return { students: MOCK_STUDENTS_DB, details: MOCK_STUDENTS_DETAILS };
  }
}
