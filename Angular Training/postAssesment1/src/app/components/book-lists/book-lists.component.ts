import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { BooksService } from 'src/app/services/books.service';
import { EditBooksComponent } from '../edit-books/edit-books.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-book-lists',
  templateUrl: './book-lists.component.html',
  styleUrls: ['./book-lists.component.css'],
})
export class BookListsComponent implements OnInit {
  data: any;
  id: number;
  bookInfo = new Users();
  books:[];
  constructor(
    private route: Router,
    private booksServiesc: BooksService,
    private dialog: MatDialog,
    public service: AuthenticationService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.booksServiesc.getBooks().subscribe((res) => {
      this.data = res;
      console.log('Books:-', this.data);
    });
  }
  public openDialog(id: any) {
    this.booksServiesc.bookID = id;
    this.dialog.open(EditBooksComponent, {
      width: '50%',
    });
  }
  public deleteItem(id: any) {
    console.log(id);
    this.booksServiesc.deleteBook(id).subscribe((res) => {
      console.log('Deleted Data:', res);
    });
  }
  public bookCart(id: any) {
    const book=this.data.find((res:any)=>res.id==id);
    console.log("Requested book:", book)
    this.id = this.service.id;
    this.userService.getUserByID(this.id).subscribe(res=>{

    },error=>{
      console.log(error)
    });
  }
}
