import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';
import { NbSearchService } from '@nebular/theme';

@Component({
  selector: 'app-show-bookings',
  templateUrl: './show-bookings.component.html',
  styleUrls: ['./show-bookings.component.scss']
})
export class ShowBookingsComponent implements OnInit {
  public movieDetails: any;
  public value: any= '-';
  public arrayData = this.fb.array([]);
  constructor(private data: MovieDataService,
    private fb: FormBuilder,
    private searchService: NbSearchService) { 
      this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.value = data.term;
        alert(this.value);
      })

    }

  ngOnInit() {
    this.movieDetails = this.data.getData();
    this.arrayData = this.data.getArrayData();
  }

}
