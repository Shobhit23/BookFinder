import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  listOfBooks : BehaviorSubject<Object[]> = new BehaviorSubject<Object[]>([]);

  setListOfBooks(listOfBooks : Object[]){
    this.listOfBooks.next(listOfBooks);
  }

}
