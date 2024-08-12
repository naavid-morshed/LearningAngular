import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

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
    @Input({required: true}) id!: number;
    @Input({required: true}) name!: string;
    @Input({required: true}) avatar!: string;
    @Output() selected = new EventEmitter<number>();

    get imageUrl(): string {
        return `assets/${this.avatar}.jpeg`;
    }

    onSelectUser(): void {
        this.selected.emit(this.id)
    }
}
