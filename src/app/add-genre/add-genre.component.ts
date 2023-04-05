import { Component, OnInit } from '@angular/core';
import { GenreClass } from '../genre-class';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  genrez:GenreClass=new GenreClass();
  genre:any;
  
  genres:any;
  
  constructor(private service:ServiceService) { }
  ngOnInit(): void {
    let response=this.service.getAllGenre();
    response.subscribe((data:any)=>this.genres=data);
    
  }

  public addGenre(){
   
    let response=this.service.addGenre(this.genrez)
    response.subscribe((data:any)=>this.genrez=data);
  }



}
