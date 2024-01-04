import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { taskReducer } from '@state/task/task.reducer';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [CommonModule, RouterOutlet,
//     StoreModule.forRoot({ todos: taskReducer }),
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppModule { }