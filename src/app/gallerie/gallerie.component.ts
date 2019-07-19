import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  constructor(private dataService: DataService) { }

  pictures:any[];

  ngOnInit() {
    this.dataService.recupererPhotos().subscribe(photos=>this.pictures = photos);
  }

}
