import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UserComponent} from "./user/user.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, UserComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'cooking-app';

    users: { name: string; id: number; avatar: string }[] = [
        {
            id: 1,
            name: "John",
            avatar: "1"
        }, {
            id: 2,
            name: "Doe",
            avatar: "2"
        }, {
            id: 3,
            name: "Jane",
            avatar: "3"
        },
    ]

    onSelectUser(id: number) {
        console.log(id)
    }
}
