import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'To-do List';
  showAddTask!: boolean;
  subscription!: Subscription;
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
}
