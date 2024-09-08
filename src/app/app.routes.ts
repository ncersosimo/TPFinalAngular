import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TransformersListComponent } from './transformers-list/transformers-list.component';
import { TransformerDetailComponent } from './transformer-detail/transformer-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent, title: 'Welcome'},   
    {path: 'transformers-list', component: TransformersListComponent, title: 'Transformers'},   
    {path: 'transformer/:id', component: TransformerDetailComponent, title: 'Transformer Info'},   
    {path: '**', component: NotFoundComponent, title: 'We found a problem'},   
];
