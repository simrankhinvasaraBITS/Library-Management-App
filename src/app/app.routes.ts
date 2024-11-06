import { Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BorrowingListComponent } from './borrowing/borrowing-list/borrowing-list.component';
import { ReviewListComponent } from './review/review-list/review-list.component';
import { HomeComponent } from './home/home.component';

// Define the routes for the application
export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserListComponent },
  { path: 'books', component: BookListComponent },
  { path: 'borrowings', component: BorrowingListComponent },
  { path: 'reviews', component: ReviewListComponent },
  { path: '', redirectTo: '', pathMatch: 'full' } // Default route
];
