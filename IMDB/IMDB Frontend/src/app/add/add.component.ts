import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import {HttpClient}  from  '@angular/common/http';
import { UpdteService } from '../updte.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 movieform:any
 
  array
  constructor(private formBuilder: FormBuilder,public http: HttpClient,public up:UpdteService ,) {
    
    this.movieform = this.formBuilder.group({
      moviename:['',Validators.required],
      yor:['',Validators.required],
      plot:[''],
      actorname:['',Validators.required],
      adob:['',Validators.required],
      agender:['',Validators.required],
      abio:[''],
      producername:['',Validators.required],
      pdob:['' ,Validators.required],
      pgender:['',Validators.required],
      pbio:[''],
    });
    
    
  }
  url='http://localhost:3000/add'
  flag:true
 done(){
  
   this.http.post(this.url,this.movieform.value).subscribe((res)=>{
     console.log(res)
     alert("sucessfully registered")
     this.movieform.reset()
   })
 }
  ngOnInit(): void {
  }
 update(){
   
 }
}
