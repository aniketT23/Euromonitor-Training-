import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css'],
})
export class EditBooksComponent implements OnInit {
  bookData: any;
  bookForm: FormGroup;
  constructor(
    private route: Router,
    private bookServices: BooksService,
    private active: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getBook(this.bookServices.bookID);

    // this.bookForm=this.fb.group({

    // })

    console.log('ID:-', this.bookServices.bookID);
  }
  public getBook(id: any) {
    this.bookServices.getBooksById(id).subscribe((res) => {
      this.bookData = res;
    });
  }

  public onSubmit(form:NgForm){
    
  }
}
