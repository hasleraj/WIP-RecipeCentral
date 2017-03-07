import { Component } from '@angular/core';

import { RecipesPage } from '../recipes/recipes';
import { AddRecipePage } from '../add-recipe/add-recipe';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RecipesPage;
  tab2Root: any = AddRecipePage;
  tab3Root: any = AboutPage;

  constructor() {

  }
}
