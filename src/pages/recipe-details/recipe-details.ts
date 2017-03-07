import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RecipeService} from '../../app/services/recipe.service';
import { RecipesPage } from '../recipes/recipes';


@Component({
  selector: 'recipe-details',
  templateUrl: 'recipe-details.html',
  providers: [RecipeService]

})
export class RecipeDetailsPage {
  public recipe: any;
  public result: any;

  constructor(public navCtrl: NavController, public params:NavParams, private recipeService:RecipeService) {
    this.recipe = params.get('recipe');
  }

  deleteRecipe(id){
    this.recipeService.deleteRecipe(id).subscribe(data => {
      this.result = data;
    });

    this.navCtrl.push(RecipesPage);
  }

  editRecipe(event, recipe){
    this.recipeService.editRecipe(recipe).subscribe(data => {
      this.result = data;
      console.log(this.result);
    });

    this.navCtrl.push(RecipesPage);
  }
}