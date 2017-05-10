import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fiterByName'
})

export class FilterByNamePipe implements PipeTransform {
  public transform(users , filterValue: string) {
    return users?
      users.filter(user => {
        let pattern = new RegExp(filterValue.trim(), 'i')
        if(user.username){ //add condition because of empty user names
        return !!user.username.match(pattern)
        }
      })
      : users;
  }
}
