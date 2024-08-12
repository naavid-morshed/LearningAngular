import {Component, Input} from '@angular/core';
import {User} from "../../models/user.model";

@Component({
    selector: 'app-user-details',
    standalone: true,
    imports: [],
    templateUrl: './user-details.component.html',
    styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
    @Input() user?: User;

    get imageUrl(): string {
        return `assets/${this.user?.avatar}.jpeg`;
    }
}
