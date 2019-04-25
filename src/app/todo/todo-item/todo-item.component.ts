import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit, AfterViewInit {

  @Input() todo: Todo;
  @ViewChild('textInputReference') textInputReference: ElementRef;
  checkField: FormControl;
  textInput: FormControl;

  public editing: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log(this.todo)
  }

  ngAfterViewInit() {
    setTimeout( () => {
      this.checkField = new FormControl( this.todo.completed );
      this.textInput = new FormControl( this.todo.text, Validators.required );
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
