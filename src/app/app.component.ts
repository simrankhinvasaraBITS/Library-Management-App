import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // This is for a standalone component setup
  imports: [RouterOutlet, RouterLink, RouterLinkActive], // Importing RouterOutlet for routing
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to styleUrls
})
export class AppComponent {
  title = 'library-management-app';
}
