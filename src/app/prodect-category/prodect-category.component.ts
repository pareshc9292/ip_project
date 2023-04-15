import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-prodect-category',
  templateUrl: './prodect-category.component.html',
  styleUrls: ['./prodect-category.component.scss']
})
export class ProdectCategoryComponent {
  prod:any;
  public prodoctList:any;
  constructor(private api: ApiService, private activatedRoute: ActivatedRoute){ }


  ngOnInit():void{
    this.prod = this.activatedRoute.snapshot.paramMap.get('id');
    fetch('https://fakestoreapi.com/products', {
      "method": "GET",
  })
    .then(response => response.json())
    .then(res => this.prodoctList = res)
  }

  ratingcount = 0;
  totalrating = 0;

  Finalrating:any;

  raingcontrol = new FormControl(0);

  getRating(){
    this.ratingcount++;
    this.totalrating += this.raingcontrol?.value || 0;
    this.Finalrating = (this.totalrating/this.ratingcount).toFixed(2)
  }
 

  public itemPage = [
    { id: '{{item.id}}', url: '/item/' },
  ];

}
