import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Subscription} from "rxjs";
import {UiService} from "../../services/ui-service/ui.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public title: string = "To-Do Tracker";
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe(
      (bool) => this.showAddTask = bool
    )
  }

  toggleAddTask(): void {
    this.uiService.toggleAddTaskService();
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
