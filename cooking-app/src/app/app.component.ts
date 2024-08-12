import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UserComponent} from "./components/user/user.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {CommonModule} from "@angular/common";
import {User} from "./models/user.model";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, UserComponent, UserDetailsComponent, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title: string = 'cooking-app';

    users: User[] = [
        {
            id: 1,
            name: "John",
            avatar: "1"
        },
        {
            id: 2,
            name: "Doe",
            avatar: "2"
        },
        {
            id: 3,
            name: "Jane",
            avatar: "3"
        },
    ]
    selectedUser?: User;

    onSelectUser(id: number) {
        this.selectedUser = this.users.find(user => user.id === id);
    }
}
