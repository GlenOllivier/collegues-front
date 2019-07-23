import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  constructor(private dataService: DataService, private authService:AuthService) { }

  pictures:any[];
  public codeErreur:number = 200;

  ngOnInit() {
    this.dataService.recupererPhotos()
    .subscribe(photos=>{
      this.pictures = photos;
      this.codeErreur = 200;
    }, 
      (error:HttpErrorResponse) => this.codeErreur = error.status
    );
  }

}
