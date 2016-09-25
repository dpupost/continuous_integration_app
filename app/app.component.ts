import {Component} from '@angular/core'

@Component({
    selector: 'cont-integr-app',
    template: `
        <h2>test</h2>
        
        <router-outlet></router-outlet>
        `
})

export class AppComponent {
    constructor() {
    }
}