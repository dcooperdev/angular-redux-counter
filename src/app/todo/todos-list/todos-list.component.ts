import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  public todos: Todo[] = [];
  public filter: string;

  constructor( private store: Store<AppState>) {
    this.store.subscribe(
      ( state ) => {
        this.todos = state.todos;
        this.filter = state.filter;
      }
    );
  }

  ngOnInit() {
  }

}
