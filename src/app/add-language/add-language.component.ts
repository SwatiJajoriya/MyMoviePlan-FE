import { Component, OnInit } from '@angular/core';
import { LanguageClass } from '../language-class';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  lang:LanguageClass=new LanguageClass();
  languages:any;
  
  genres:any;
  
  constructor(private service:ServiceService) { }
  ngOnInit(): void {
    let response=this.service.getAllLanguage();
    response.subscribe((data:any)=>this.languages=data);
    
  }

  public addLanguage(){
   
    let response=this.service.addLanguage(this.lang)
    response.subscribe((data:any)=>this.lang=data);
  }
 

}
