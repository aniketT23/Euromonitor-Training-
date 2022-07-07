import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/services/books.service';

// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css'],
})
export class EditBooksComponent implements OnInit {
  bookData = new Books();
  bookForm: FormGroup;
  id: any;
  constructor(
    private route: Router,
    private bookServices: BooksService,
    private active: ActivatedRoute,
    private fb: FormBuilder,
    // private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getBook(this.bookServices.bookID);

    this.id = this.bookServices.bookID;
    this.bookForm = this.fb.group({
      bookname: ['', Validators.required],
      discription: ['', Validators.required],
      author: ['', Validators.required],
      cost: ['', Validators.required],
      quantity: ['', Validators.required],
    });
    this.bookForm.get('bookname').disable();
    this.bookForm.get('author').disable();

    console.log('ID:-', this.bookServices.bookID);
  }
  public getBook(id: any) {
    this.bookServices.getBooksById(id).subscribe((res) => {
      this.bookData = res;
      console.log('Book data:-', this.bookData);
    });
  }

  public onSubmit(form: NgForm) {
    this.bookServices.editBooks(this.id, this.bookForm.value).subscribe(
      (res) => {
        // this.toastr.success('Edit', 'Sucessfull');
        // this.route.navigate(['/view'])
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
