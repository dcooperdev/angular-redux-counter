import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

import * as actions from "../todo.actions";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: [`
    h1 {
      color: #4682b44d;
    }
    h1 small {
      font-size: 30px;
    }
  `]
})
export class TodoAddComponent implements OnInit {

  textInput: FormControl

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.textInput = new FormControl('', Validators.required);
  }

  addTodo() {
    if ( !this.textInput.valid ) {
      return;
    }

    const action = new actions.AddTodoAction( this.textInput.value );
    this.store.dispatch( action );
    this.textInput.setValue('');
  }

}
