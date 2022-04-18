import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { NewTodoComponent } from './components/todo-item/new-todo.component';

// 数据双向绑定
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        NewTodoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule, FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
