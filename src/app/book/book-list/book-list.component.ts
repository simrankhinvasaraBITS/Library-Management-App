import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';
import  { Modal } from 'bootstrap';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent {
  books: Book[] = [];

  constructor(private bookService: BookService) {
    // Fetch users from the UserService
    this.bookService.getBooks().subscribe(
      data => this.books = data,
      error => console.error('Error fetching users:', error)
    );
  }
  
  // books: Book[] = [
  //   { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', available: true, description: 'A classic novel set in the Jazz Age.' },
  //   { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', available: false, description: 'A story about racial injustice in the Deep South.' },
  //   { id: 3, title: '1984', author: 'George Orwell', genre: 'Dystopian', available: true, description: 'A dystopian novel about totalitarianism.' },
  //   // Add more books
  // ];

  selectedBook: any;

  openBookModal(book: Book) {
    this.selectedBook = book;
    const modalElement = document.getElementById('bookDetailsModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    }
  }
  
  borrowBook(book: Book) {
    if (book && book.available) {

      // Toggle the current availability status
    const updatedAvailability = !book.available;

    // Call the service method to update availability


      book.available = false;
      alert(`${book.title} has been borrowed!`);
    } else {
      alert(`${book.title} is already borrowed.`);
    }
  }
}
