import { Component, OnInit } from '@angular/core';
import * as filters from 'src/app/filter/filter.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  public validFilters: filters.ValidTypes[] = ['All', 'Active', 'Completed'];
  public selectedFilter: filters.ValidTypes;
  public itemsLeft: number;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {

    this.store.subscribe(
      (state: any) => {
        this.countItemsLeft( state.todos );
        this.selectedFilter = state.filter;
      }
    )
  }

  changeFilter( filter: filters.ValidTypes ) {
    const action = new filters.SetFilterAction( filter );
    this.store.dispatch( action );
  }

  countItemsLeft( todos: Todo[] ) {
    this.itemsLeft = todos.filter( todo => !todo.completed ).length;
  }

}
