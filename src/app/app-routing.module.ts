import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContactosComponent } from './pages/list-contactos/list-contactos.component';
import { List2Component } from './pages/list2/list2.component';
import { List3Component } from './pages/list3/list3.component';
import { List4Component } from './pages/list4/list4.component';
import { ContactComponent } from './template/contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'paginas/listaContactos', pathMatch: 'full' },
    {path: "paginas/listaContactos", component: ListContactosComponent },
    {path: "paginas/lista2", component: List2Component},
    {path: "paginas/lista3", component: List3Component},
    {path: "paginas/lista4", component: List4Component},
    {path: "template/contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

