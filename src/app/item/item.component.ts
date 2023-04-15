import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent {

   id :any;
   public prodoctList:any=[];
   constructor(private api: ApiService, private activatedRoute: ActivatedRoute,private http:HttpClient){}

   ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    fetch("https://fakestoreapi.com/products/" + this.id, {
      "method": "GET"})
    .then(response => response.json())
    .then(res => this.prodoctList = res)

    console.log(this.prodoctList);
   }
}
