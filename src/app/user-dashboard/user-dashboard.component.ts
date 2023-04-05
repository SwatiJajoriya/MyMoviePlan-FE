import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{

  movies:any;
  message:any;
  genrez:any;
  genreKeyword:any;
  search:any;
  languages:any;
  languagekeyword:any;

  constructor(private service:ServiceService, private router: Router) { }


  ngOnInit(): void {
     let response=this.service.getAllMovies();
    response.subscribe((data:any)=>this.movies=data);
    let response2=this.service.getAllGenre();
    response2.subscribe((data:any)=>this.genrez=data);
    let response3=this.service.getAllLanguage();
    response3.subscribe((data:any)=>this.languages=data);


  }
  getMovies(){
    let response=this.service.getAllMovies();
    response.subscribe((data:any)=>this.movies=data);
  }
  
 public getMovieByKeyword(){
  let response=this.service.goToMovieSearch(this.search);
  response.subscribe((data:any)=>this.movies=data);
  }
goToMovieSearchByGenre(){
  let response=this.service.goToMovieSearchByGenre(this.genreKeyword);
    response.subscribe((data:any)=>this.movies=data);
}

goToMovieSearchByLanguage(){
  let response=this.service.goToMovieSearchByLanguage(this.languagekeyword);
    response.subscribe((data:any)=>this.movies=data);
}
addMovieToCart(){
  this.router.navigate(['/payment']);
}

goToCart(){
  this.router.navigate(['/user-cart']);
}

}{

}
