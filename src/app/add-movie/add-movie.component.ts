import { Component, OnInit } from '@angular/core';
import { MovieClass } from '../movie-class';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movie:MovieClass=new MovieClass();
  genrez:any;
  languages:any;
  constructor(private service:ServiceService,public router:Router) { }
  
    ngOnInit(): void {
      let response=this.service.getAllGenre();
      response.subscribe((data:any)=>this.genrez=data);

      let response2=this.service.getAllLanguage();
      response2.subscribe((data:any)=>this.languages=data);
    }
    
    addMovie() {
     let response= this.service.addMovie(this.movie);
      response.subscribe((data:any)=>this.movie=data);
      this.router.navigate(['/admin-dashboard']);
    }
  
  } {

}
