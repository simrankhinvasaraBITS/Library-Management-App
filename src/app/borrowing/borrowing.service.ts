import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Borrowing } from '../models/borrowing.model';

@Injectable({
  providedIn: 'root'
})
export class BorrowingService {
  private apiUrl = 'http://localhost:3003/borrowings';

  constructor(private http: HttpClient) {}

  getBorrowings(): Observable<Borrowing[]> {
    return this.http.get<Borrowing[]>(this.apiUrl);
  }

  getBorrowingById(id: string): Observable<Borrowing> {
    return this.http.get<Borrowing>(`${this.apiUrl}/${id}`);
  }

  createBorrowing(borrowing: Borrowing): Observable<Borrowing> {
    return this.http.post<Borrowing>(this.apiUrl, borrowing);
  }

  updateBorrowing(id: string, borrowing: Borrowing): Observable<Borrowing> {
    return this.http.put<Borrowing>(`${this.apiUrl}/${id}`, borrowing);
  }

  deleteBorrowing(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
