import { Component, OnInit } from '@angular/core';

import { BooksService } from 'src/app/services/books.service';
import { EditBooksComponent } from '../edit-books/edit-books.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-lists',
  templateUrl: './book-lists.component.html',
  styleUrls: ['./book-lists.component.css'],
})
export class BookListsComponent implements OnInit {
  data: any;
  constructor(
    private route: Router,
    private booksServiesc: BooksService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.booksServiesc.getBooks().subscribe((res) => {
      this.data = res;
      console.log('Books:-', this.data);
    });
  }
  public openDialog(id: any) {
    this.booksServiesc.bookID = id;
    this.dialog.open(EditBooksComponent,{
      width:'50%',
     
    });
  }
  public deleteItem(id: any) {
    console.log(id);
  }
}
