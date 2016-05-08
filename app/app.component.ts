import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

export class Item {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <ul>
            <li *ngFor="let item of items">
                {{item.id}} | {{item.name}}
            </li>
        </ul>
    `
})
export class AppComponent {
    public items: Item;
    
    constructor(private http: Http) {}
    
    ngOnInit() {
        this.getItems();
    }

    getItems() {
        this.http.get('/app/items.json')
            .map((res:Response) => res.json())
            .subscribe(
                data => {this.items = data},
                err => console.log(err),
                () => console.log(this.items)
            );
    }
}
