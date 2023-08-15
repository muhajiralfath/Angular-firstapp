import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentAComponent} from "./pages/component-a/component-a.component";
import {ComponentBComponent} from "./component-b/component-b.component";
import {ComponentNotfoundComponent} from "./shared/components/component-notfound/component-notfound.component";
import {ChildAComponent} from "./pages/component-a/child-a/child-a.component";
import {ChildBComponent} from "./pages/component-a/child-b/child-b.component";


const routes: Routes = [
  {
    path: "component-a", component: ComponentAComponent, children: [
      {path: "child-a", component: ChildAComponent},
      {path: "child-b", component: ChildBComponent},
      {path: "child-b/:id", component: ChildBComponent}
    ]
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
