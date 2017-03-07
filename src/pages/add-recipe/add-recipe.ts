import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RecipeService} from '../../app/services/recipe.service'
import { RecipesPage } from '../recipes/recipes';

@Component({
  selector: 'add-recipe',
  templateUrl: 'add-recipe.html',
  providers: [RecipeService]

})
export class AddRecipePage {
    public title: String;
    public shortDescription: String;
    public longDescription: String;
    public type: String;
    public result: any;

  constructor(public navCtrl: NavController, private recipeService:RecipeService) {

  }


  onClick(){
    var recipe = {
        title: this.title,
        shortDescription: this.shortDescription,
        longDescription: this.longDescription,
        type: this.type
    }

    this.recipeService.addRecipe(recipe).subscribe(data => {
      this.result = data;
    });

    this.clearInputs();
    
    this.navCtrl.push(RecipesPage);
  }

  clearInputs(){
    this.title = "";
    this.shortDescription = "";
    this.longDescription = "";
  }

}