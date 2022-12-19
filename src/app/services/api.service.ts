import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private randomUrl: string =
    'http://www.themealdb.com/api/json/v1/1/random.php';
  private searchUrl: string =
    'http://www.themealdb.com/api/json/v1/1/search.php?s=';
  private ingredientUrl: string =
    'http://www.themealdb.com/api/json/v1/1/filter.php?i=';
  private idUrl: string =
    'http://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  public recipes: any;
  constructor(private http: HttpClient) {}

  getRandomRecipe(): Observable<any> {
    return this.http.get(this.randomUrl);
  }

  getRecipeBySearch(search: string): Observable<any> {
    return this.http.get(this.searchUrl + search);
  }

  getRecipeByIngredient(ingredient: string): Observable<any> {
    return this.http.get(this.ingredientUrl + ingredient);
  }

  getRecipeByApiId(recipeId: string): Observable<any> {
    return this.http.get(this.idUrl + recipeId);
  }

  getRecipeById(recipeId: string) {
    return this.recipes[recipeId];
  }
}
