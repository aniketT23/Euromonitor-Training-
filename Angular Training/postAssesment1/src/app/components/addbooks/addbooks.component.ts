import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css'],
})
export class AddbooksComponent implements OnInit {
  bookData: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private bookServices: BooksService
  ) {}

  ngOnInit(): void {
    this.bookData = this.fb.group({
      bookname: ['', Validators.required],
      discription: ['', Validators.required],
      author: ['', Validators.required],
      cost: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  public onSubmit(form: NgForm) {
    this.bookServices.addBooks(form).subscribe(res=>{
      console.log('Book Added:-',form)
    },error=>{
      console.log(error)
    })
  }
  public Onreset() {
    this.bookData.reset();
  }
}
