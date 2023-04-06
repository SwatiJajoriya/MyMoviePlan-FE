import { Component, OnInit } from '@angular/core';
import { MovieClass } from '../movie-class';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  data:any;
 movie:any;
 id:any;
 genrez:any;
 languages:any;
 submitted:boolean=false;

 constructor(private service:ServiceService,private router:Router,private route:ActivatedRoute) { }

 ngOnInit(): void {

   this.id=this.route.snapshot.params['id'];
   this.service.getMovieById(Number(this.id)).subscribe(data=>this.movie=data);

   let response=this.service.getAllGenre();
     response.subscribe((data:any)=>this.genrez=data);
   let response2=this.service.getAllLanguage();
     response2.subscribe((data:any)=>this.languages=data);

  
 
   }
 

   onSubmit(){
     this.submitted=true;
     let response=this.service.updateMovie(this.id,this.movie)
     response.subscribe((data:any)=>this.movie=data);
      alert("Data Updated Successfully");
      this.router.navigate(['./admin-dashboard'])
     
     }
 }
