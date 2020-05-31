import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from './shared-data.service';
import { ListofbooksComponent } from './listofbooks/listofbooks.component';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookFinder';
  @ViewChild("child") childComponent : ListofbooksComponent;
  constructor(private http : HttpClient, private sharedDataService : SharedDataService){

  }

  query : string = "";

  search(){
    this.childComponent.loading=true;
    this.childComponent.found=true;
    this.childComponent.listOfBooks= new Array<Book>();
    this.http.get("https://www.googleapis.com/books/v1/volumes?q="+this.query).
    subscribe(data => {this.sharedDataService.setListOfBooks(data["items"])});
  }

  clear(){
    this.query="";
  }

}
