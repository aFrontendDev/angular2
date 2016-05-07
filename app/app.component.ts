import {Component} from '@angular/core';

export class Item {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <ul>
            <li *ngFor="#item of items">
                {{item.id}} | {{item.name}}
            </li>
        </ul>
    `
})
export class AppComponent {
    title = 'Things';
    items = ITEMS;
}

var ITEMS: Item[] = [
    { "id": 1, "name": "One" },
    { "id": 2, "name": "Two" },
    { "id": 3, "name": "Three" },
    { "id": 4, "name": "Four" },
    { "id": 5, "name": "Five" },
    { "id": 6, "name": "Six" },
    { "id": 7, "name": "Seven" },
    { "id": 8, "name": "Eight" },
    { "id": 9, "name": "Nine" },
    { "id": 10, "name": "Ten" }
];
