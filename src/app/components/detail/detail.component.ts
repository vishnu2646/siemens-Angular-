import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comments } from '../../classess/comments';
import { apiService } from '../../services/api.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  router: any;
  id:number;
  private sub: any;
  student : Comments;

  constructor(private activatedRoute: ActivatedRoute,private _apiService:apiService) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
   });
   this._apiService.getCommentsbyParams(this.id).subscribe(
    data=>{
      this.student = data;
    }
  );
  }

  goToProductDetails(id) {
    this.router.navigate(['/product-details', id]);
  }

  printPage() {
    window.print();
  }
  
}
