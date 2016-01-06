import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core';

import {PostListComponent} from './posts/post-list.component';

@Component({
    selector: 'postal-app',
    directives: [],
    templateUrl: 'app/app.html'
})

export class App { }

bootstrap(App, []);
