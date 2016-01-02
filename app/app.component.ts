import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser'
import {PostListComponent} from './posts/post-list.component';

@Component({
    selector: 'postal-app',
    templateUrl: 'app/app.html'
})
@RouteConfig([
  { path: '/posts', component: PostListComponent, as: 'PostList' }
])

export class AppComponent { }

bootstrap(AppComponent);
