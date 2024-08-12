import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {User} from "../../models/user.model";

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [
        NgOptimizedImage
    ],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
    @Input() user?: User;

    @Output() selected = new EventEmitter<number>();

    get imageUrl(): string {
        return `assets/${this.user?.avatar}.jpeg`;
    }

    onSelectUser(): void {
        this.selected.emit(this.user?.id ?? -1)
    }
}
