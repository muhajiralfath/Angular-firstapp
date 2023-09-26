import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentBComponent} from "./component-b/component-b.component";
import {ComponentNotfoundComponent} from "./shared/components/component-notfound/component-notfound.component";


const routes: Routes = [
  {
    path: "component-a",
    loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule)
  },
  {
    path: "component-b", component: ComponentBComponent
  },
  // default router
  {
    path: "", redirectTo: "component-a", pathMatch: "full"
  },
    // default eror ketika path route tidak ada
  {
    path: "**", component: ComponentNotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
