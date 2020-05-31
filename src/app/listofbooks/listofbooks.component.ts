import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Book } from '../book';

@Component({
  selector: 'app-listofbooks',
  templateUrl: './listofbooks.component.html',
  styleUrls: ['./listofbooks.component.css']
})
export class ListofbooksComponent implements OnInit {

  constructor(private sharedDataService : SharedDataService) { }

  book : Book = new Book("",[""],"","","","");
  listOfBooks : Book[] = new Array<Book>();
  found : boolean = false;
  loading : boolean = false;
  ngOnInit(): void {
    
    this.sharedDataService.listOfBooks.subscribe(data => {
      this.loading=false;
      this.listOfBooks = new Array<Book>();
      if(data != undefined){
      
      data.forEach(element => {
        if(element!=null){
        this.book.title=element["volumeInfo"]["title"];
        this.book.authors=element["volumeInfo"]["authors"];
        this.book.publisher=element["volumeInfo"]["publisher"];
        this.book.publishedDate=element["volumeInfo"]["publishedDate"];
        if(element["volumeInfo"]["imageLinks"]){
        this.book.imageLink=element["volumeInfo"]["imageLinks"]["smallThumbnail"];
        }
        this.book.link=element["volumeInfo"]["previewLink"];
        this.listOfBooks.push(this.book);
        this.book=new Book("",[""],"","","","");
        }
      }
    
      );
      }
      else{
        this.found=false;
      }
    }
      );
  }

}
