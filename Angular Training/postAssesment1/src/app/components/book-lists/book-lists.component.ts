import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { BooksService } from 'src/app/services/books.service';
import { EditBooksComponent } from '../edit-books/edit-books.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  books: any[]=[];
  constructor(
    private route: Router,
    private booksServiesc: BooksService,
    private dialog: MatDialog,
    public service: AuthenticationService,
    private userService: UsersService,
    private toastr: ToastrService,
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
      this.toastr.warning('Book Deleted','')
    });
  }
  public bookCart(id: any) {
    let book = this.data.find((res: any) => res.id == id);
    this.books.push(book);
    console.log('Requested book:', this.books);
    this.id = this.service.id;
    this.userService.getUserByID(this.id).subscribe(
      (res) => {
        this.bookInfo = res;
        this.bookInfo.books=this.books;
      },
      (error) => {
        console.log(error);
      }
    );

    this.updateUserInventory(this.id,this.bookInfo)
    this.toastr.success('Book requested',`return date`)
  }
  public updateUserInventory(id: any, data: any) {
    this.userService.updateUser(id, data).subscribe(
      (res) => {},
      (error) => {
        console.log(error);
      }
    );
  }
}
