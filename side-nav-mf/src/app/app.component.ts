import { AfterViewInit, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
declare var DDS: any;

@Component({
  selector: 'side-nav-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'side-nav-mf';
  router = inject(Router);
  navigate() {
    this.router.navigate(['/app1']);
  }

  ngAfterViewInit() {
    const element = document.getElementById('sidenav-980692471');
    const api = DDS.SideNav(element);
  }
}
