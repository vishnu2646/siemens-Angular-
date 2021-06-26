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
  
  constructor(private _apiService:apiService) {}


  ngOnInit(): void {
    this._apiService.getComments().subscribe(
      data=>{
        this.students = data;
      }
    );
  }

  
  isShowDiv = true;
   
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
}
