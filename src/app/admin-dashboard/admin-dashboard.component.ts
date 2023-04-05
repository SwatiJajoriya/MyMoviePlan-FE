import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { MovieClass } from '../movie-class';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  movies:MovieClass[];

 
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    let response=this.service.getAllMovies();
    response.subscribe((data:any)=>this.movies=data);
  }

  deleteMovie(id:any){

    //refresh the list once movie is deleted
  this.movies=this.movies.filter(c=>c.id!=id);

     //delete user
    let response=this.service.deleteMovie(id);
    response.subscribe((data:any)=>this.movies=data);
    }

}
