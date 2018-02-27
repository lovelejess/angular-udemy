import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Mara’s Tofu With Mixed Grains', 'With only a few steps and five main ingredients, this simple dish barely requires a recipe, but the results are simultaneously nourishing and deeply satisfying.', 'https://static01.nyt.com/images/2018/01/14/magazine/14mag-eat/14mag-14eat-t_CA0-articleLarge.jpg'),
        new Recipe('Roasted Chicken Thighs With Winter Squash', 'Roasted chicken thighs can be the juicy, meaty center of many weeknight meals. Add delicata squash, quickly tossed in a maple syrup-butter glaze, along with slices of lemon and sage, and you have a something more unusual, an interplay of flavors that don’t generally meet on the same sheet pan. ', 'https://static01.nyt.com/images/2014/03/12/dining/12squash/12squash-superJumbo.jpg')
      ];
    
    getRecipes() {
        return this.recipes.slice();
    }
}