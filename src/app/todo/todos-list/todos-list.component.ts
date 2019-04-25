import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit, AfterViewInit {

  public todos: Todo[] = [];

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.store.subscribe(
        ( state ) => {
          this.todos = state.todos;
        }
      );
    });
  }

}
