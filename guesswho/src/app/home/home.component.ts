import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gameModes: string[] = ['Easy', 'Medium', 'Expert'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onModeSelect(mode) {
    this.router.navigate(['/question', mode]);
  }

}
