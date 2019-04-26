import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo, TodoInitializer } from '../model/todo.model';
import { EditTodoAction, ToggleTodoAction } from './../todo.actions';
import { AppState } from './../../app.reducers';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [`
    .text-center { width: 100%; text-align: center; }
  `]
})
export class TodoItemComponent implements OnInit {

  public ready_component: boolean;

  @Input() todo: Todo = TodoInitializer;
  @ViewChild('textInputReference') textInputReference: ElementRef;
  checkField: FormControl;
  textInput: FormControl;

  public editing: boolean = false;

  constructor( private store: Store<AppState> ) {
    this.ready_component = true;

    this.checkField = new FormControl( this.todo.completed );
    this.textInput = new FormControl( this.todo.text, Validators.required );

    this.checkField.valueChanges.subscribe(
      () => {
        const action = new ToggleTodoAction( this.todo.id );
        this.store.dispatch( action );
      }
    );
  }

  ngOnInit() {
  }

  edit() {
    this.editing = !this.editing;

    setTimeout(
      () => {
        this.textInputReference.nativeElement.select();
      }, 1
    );
  }

  endEdition() {
    this.editing = false;

    if ( this.textInput.invalid || this.textInput.value === this.todo.text ) {
      return;
    }

    const action = new EditTodoAction( this.todo.id, this.textInput.value );
    this.store.dispatch( action );
  }

}
