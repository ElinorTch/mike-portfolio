import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  links: any[] = [
    {
      name: 'Home',
      target: '#header',
    },
    {
      name: 'Features',
      target: '#features',
    },
    {
      name: 'About',
      target: '#about',
    },
    {
      name: 'Avis',
      target: '#avis',
    },
  ];
}
