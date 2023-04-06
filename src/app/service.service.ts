import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { MovieClass } from './movie-class';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 
  AdminUrl:string="http://localhost:8088/api/v1/admin/";
  MovieUrl:string="http://localhost:8088/api/v1/movie/";
  UserUrl:string="http://localhost:8088/api/v1/user/";
  GenreUrl:string="http://localhost:8088/api/v1/genre/";
  LanguageUrl:string="http://localhost:8088/api/v1/language/";


  constructor(private http:HttpClient) { }

  public adminLogin(username:any){

    return this.http.get(this.AdminUrl+"getAdmin/"+username);
  }

  public userLogin(username:any){

    return this.http.get(this.UserUrl+"getUser/"+username);

  }

  addMovie(movie:any){
    return this.http.post(this.MovieUrl+"add",movie);
  }
  addGenre(genre:any){
    return this.http.post(this.GenreUrl+"addGenre",genre);
  }
  public getAllGenre(){
    return this.http.get(this.GenreUrl+"getallGenre");
    }
   addUser(user:any){
    return this.http.post(this.UserUrl+"addUser",user)
   } 
   addLanguage(language:any){
    return this.http.post(this.LanguageUrl+"addlanguage",language);
  }
  public getAllLanguage(){
    return this.http.get(this.LanguageUrl+"getallLanguage");
    }

    public getAllMovies(){
      return this.http.get(this.MovieUrl+"getallmovie");
      }
  
    public goToMovieSearch(keyword:any){
        return this.http.get(this.MovieUrl+"getByMovieName/"+keyword);
       }

       public goToMovieSearchByGenre(keyword:any){
        return this.http.get(this.MovieUrl+"getAllByGenre/"+keyword);
        }
    public goToMovieSearchByLanguage(keyword:any){
          return this.http.get(this.MovieUrl+"getAllByLanguage/"+keyword);
          }

  public deleteMovie(id:any):Observable<MovieClass>{

      return this.http.delete<MovieClass>(this.MovieUrl+"delete/"+id);
    }

  public updateMovie(id:any,movie:any)
    {
      return this.http.put("http://localhost:8088/api/v1/movie/movieUpdate/"+id,movie);
    }
   
  public getMovieById(id:number):Observable<MovieClass>{
      return this.http.get<MovieClass>(this.MovieUrl+"getMovieById/"+id);

    }

}
