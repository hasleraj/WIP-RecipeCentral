import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RecipeDetailsPage } from '../recipe-details/recipe-details';
import {RecipeService} from '../../app/services/recipe.service'


@Component({
  selector: 'recipes',
  templateUrl: 'recipes.html',
  providers: [RecipeService]
})
export class RecipesPage {
  recipes:any;

  constructor(public navCtrl: NavController, private recipeService:RecipeService) {

  }

  ngOnInit(){
    this.getAllRecipes();
  }

  ionViewWillEnter(){
    this.getAllRecipes();
  }

  getAllRecipes(){
    this.recipeService.getRecipes().subscribe(recipes => {
      //now have access to recipes in the template
      this.recipes = recipes;
    });
  }

  selectMe(event, recipe){
    this.navCtrl.push(RecipeDetailsPage, {
        recipe: recipe
    });
  }

}