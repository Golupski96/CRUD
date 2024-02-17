import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { StaticComponentComponent } from './static-component/static-component.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';



const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "form", component: FormComponent},
  { path: "users", component: UsersComponent},
  { path: "users/:userId", component: EditComponent},
  { path: "about", component: AboutComponent},
  { path: "", redirectTo:"/home", pathMatch: "prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
