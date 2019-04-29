import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';

import * as filters from './filter.action';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( todos: Todo[], filter: filters.ValidTypes ): Todo[] {

    if ( filter === 'Completed' ) {
      return todos.filter( todo => todo.completed );
    } else if ( filter === 'Active' ) {
      return todos.filter( todo => !todo.completed );
    } else {
      return todos;
    }
  }

}
