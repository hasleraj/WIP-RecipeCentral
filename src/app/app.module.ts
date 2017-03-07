import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AddRecipePage } from '../pages/add-recipe/add-recipe';
import { AboutPage } from '../pages/about/about';
import { RecipesPage } from '../pages/recipes/recipes';
import { RecipeDetailsPage } from '../pages/recipe-details/recipe-details';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AddRecipePage,
    AboutPage,
    RecipesPage,
    RecipeDetailsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddRecipePage,
    AboutPage,
    RecipesPage,
    RecipeDetailsPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
