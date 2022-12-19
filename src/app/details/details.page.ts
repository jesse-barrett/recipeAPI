import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public currentRecipe: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.currentRecipe = this.apiService.getRecipeById(id);
  }
}
