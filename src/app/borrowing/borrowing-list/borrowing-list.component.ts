import { Component } from '@angular/core';
import { Borrowing } from '../../models/borrowing.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-borrowing-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './borrowing-list.component.html',
  styleUrl: './borrowing-list.component.css'
})
export class BorrowingListComponent {
  borrowings: Borrowing[] = [
    { bookTitle: 'The Great Gatsby', borrowerName: 'John Doe', borrowDate: new Date('2023-01-01'), dueDate: new Date('2023-01-15'), returned: false },
    { bookTitle: 'To Kill a Mockingbird', borrowerName: 'Jane Smith', borrowDate: new Date('2023-01-05'), dueDate: new Date('2023-01-20'), returned: true },
    { bookTitle: '1984', borrowerName: 'Alice Johnson', borrowDate: new Date('2023-01-10'), dueDate: new Date('2023-01-25'), returned: false },
    // Add more borrowing records as needed
  ];

  returnBook(borrowing: Borrowing) {
    borrowing.returned = true;
    alert(`${borrowing.bookTitle} has been marked as returned.`);
  }
}


