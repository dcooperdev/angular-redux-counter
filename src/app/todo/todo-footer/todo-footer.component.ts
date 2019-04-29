import { Component, OnInit } from '@angular/core';
import * as filters from 'src/app/filter/filter.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  public validFilters: filters.ValidTypes[] = ['All', 'Active', 'Completed'];
  public selectedFilter: filters.ValidTypes;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {

    this.store.subscribe(
      (state: any) => {
        this.selectedFilter = state.filter;
      }
    )
  }

  changeFilter( filter: filters.ValidTypes ) {
    const action = new filters.SetFilterAction( filter );
    this.store.dispatch( action );
  }

}
