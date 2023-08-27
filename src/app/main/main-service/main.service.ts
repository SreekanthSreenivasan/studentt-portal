import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(`api/details`);
  }

  deleteData(item: any) {
    debugger;
    const url = `/api/details/${item.id}`; // Assuming your API endpoint is '/api/details'

    return this.http.delete(url);

    // return this.http.delete(`api/details/MOCK_STUDENTS_DETAILS/${item.id}`);
  }
  addNewRow(item: any) {
    // debugger;
    // const data = { name: 'new name ', description: 'Description 6' };
    const url = `/api/details/${item.id}`;
    return this.http.post(`${url}`, item);
  }
  updateRow(item: any) {
    const url = `/api/details/${item.id}`;
    return this.http.put(`${url}`, item);
  }

  getStudentDataById(id: number) {
    // `/api/details/${item.id}`
    const url = `/api/details/${id}`;
    return this.http.get<any>(url);
  }

  // getFilteredData(filterBy: any) {
  //   return this.getAll().pipe((data))
  // }
}

// deleteHero(id: number): Observable<Hero> {
//   const url = `${this.heroesUrl}/${id}`;

//   return this.http.delete<Hero>(url, this.httpOptions).pipe(
//     tap(_ => this.log(`deleted hero id=${id}`)),
//     catchError(this.handleError<Hero>('deleteHero'))
//   );
// }
