import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AnimeFormComponent } from './anime/anime-form/anime-form.component';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';

import {
  ForbiddenValidatorDirective
} from './shared/utils/forbidden-name/forbidden-name.directive';
import { ExponentPipe } from './shared/pipes/exponent.pipe';
import { AgePipe } from './shared/pipes/age.pipe';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentNotfoundComponent } from './shared/components/component-notfound/component-notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    AnimeFormComponent,
    AnimeListComponent,
    ForbiddenValidatorDirective,
    ExponentPipe,
    AgePipe,
    TodoListComponent,
    ComponentBComponent,
    ComponentNotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
