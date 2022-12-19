import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public recipes: any;
  public search: string;
  constructor(private apiService: ApiService) {}

  getRandomRecipe() {
    this.apiService.getRandomRecipe().subscribe((recipes) => {
      this.recipes = recipes['meals'];
      this.apiService.recipes = this.recipes;
    });
  }

  getRecipeBySearch(search: string) {
    this.apiService.getRecipeBySearch(search).subscribe((recipes) => {
      this.recipes = recipes['meals'];
      this.apiService.recipes = this.recipes;
    });
    this.search = '';
  }

  getRecipeByIngredient(ingredient: string) {
    this.apiService.getRecipeByIngredient(ingredient).subscribe((recipes) => {
      let tempRecipes = recipes['meals'];
      let pendingRecipes = [];
      for (let i = 0; i < tempRecipes.length; i++) {
        this.apiService
          .getRecipeByApiId(tempRecipes[i].idMeal)
          .subscribe((recipe) => {
            pendingRecipes.push(recipe['meals'][0]);
          });
      }
      this.recipes = pendingRecipes;
      this.apiService.recipes = this.recipes;
    });
    this.search = '';
  }
}
