import { Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home';
import { PlistBlogComponent } from './components/feature/blog/plist/plist';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'blog', component: PlistBlogComponent}
];
