import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/Form/form.component';
import { CardComponent } from './components/Card/card.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'card', component: CardComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
