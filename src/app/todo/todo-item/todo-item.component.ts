import { ToggleTodoAction } from './../todo.actions';
import { AppState } from './../../app.reducers';
import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [`
    .text-center { width: 100%; text-align: center; }
  `]
})
export class TodoItemComponent implements OnInit, AfterViewInit {

  public ready_component: boolean;

  @Input() todo: Todo;
  @ViewChild('textInputReference') textInputReference: ElementRef;
  checkField: FormControl;
  textInput: FormControl;

  public editing: boolean = false;

  constructor( private store: Store<AppState> ) {
    this.ready_component = false;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout( () => {
      this.ready_component = true;

      this.checkField = new FormControl( this.todo.completed );
      this.textInput = new FormControl( this.todo.text, Validators.required );

      this.checkField.valueChanges.subscribe(
        () => {
          const action = new ToggleTodoAction( this.todo.id );
          this.store.dispatch( action );
        }
      );
    });
  }

  edit() {
    this.editing = !this.editing;

    setTimeout(
      () => {
        this.textInputReference.nativeElement.select();
      }, 1
    )
  }

  endEdition() {
    this.editing = false;
  }

}
