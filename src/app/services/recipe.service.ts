import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
    http:any;
    apiKey: String;
    recipesUrl: String;

    constructor(http:Http){
        this.http = http;
        this.apiKey = '1oVXyMytCEDMeLwEwWfY7Peyv3nWFMM7';
        this.recipesUrl = 'https://api.mlab.com/api/1/databases/recipecentral_ashley/collections/recipes';
    }

    //retrieves all recipes from mongodb
    getRecipes(){
        return this.http.get(this.recipesUrl + '?apiKey=' + this.apiKey)
            .map(res => res.json());
    }

    //add a new recipe to the mongodb
    addRecipe(recipe){
        //need to set headers because were making a post request
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(this.recipesUrl+'?apiKey='+this.apiKey, JSON.stringify(recipe),  {headers: headers})
            .map(res => res.json());
    }

    //delete recipe
    deleteRecipe(id){
        return this.http.delete(this.recipesUrl+'/'+id+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }

    //edit the recipe
    editRecipe(recipe){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.put(this.recipesUrl+'?apiKey='+this.apiKey, JSON.stringify(recipe), {headers: headers})
            .map(res => res.json());
    }

}