import { Component, OnInit } from '@angular/core';
import { apiService } from '../../services/api.service'
import { Comments } from '../../classess/comments';

@Component({
  selector: 'app-headercontent',
  templateUrl: './headercontent.component.html',
  styleUrls: ['./headercontent.component.css']
})

export class HeadercontentComponent implements OnInit {

  students : Comments[];
  filteredStudents:any[];
  
  constructor(private _apiService:apiService) {}


  ngOnInit(): void {
    this._apiService.getComments().subscribe(
      data=>{
        this.students = data;
      }
    );
  }

  
  isShowDiv = true;
  isShowTotalStudents= true;
   
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
  setValue(value:string){

 this.filteredStudents =  this.students
      .filter(item => Object.keys(item)
        .some(key => value.split(',').some(arg => item[key].toString().toLowerCase().includes(arg.toLowerCase())))
      );
   this.students = this.filteredStudents;  
    if(value=='')
   {
    this._apiService.getComments().subscribe(
      data=>{
        this.students = data;
      }
    );
   }
  }
}
