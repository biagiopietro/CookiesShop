<?php

namespace Tests\Browser;

use App\Ingredient;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class IngredientTest extends DuskTestCase
{
    public function testIngredientsSection()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->click('a[href="/ingredients"]')
                ->waitForText(trans('ingredients_table.name'))
                ->assertPathIs($browser->getIngredientsUrl());
        });
    }

    /**
     * @group search
     */
    public function testIngredientsSearchBarSingleResult()
    {
        $ingredientSalt = Ingredient::where("name", 'Salt')->first();

        $this->browse(function (Browser $browser) use ($ingredientSalt) {
            $browser
                ->visitIngredients()
                ->type('search', $ingredientSalt->name)
                ->clickSearch()
                ->waitForText($ingredientSalt->name)
                ->assertSee($ingredientSalt->name)
                ->assertMissing('#pagination');
        });
    }

    /**
     * @group search
     */
    public function testIngredientsSearchBarMultipleResults()
    {
        $ingredientAnise = Ingredient::where("name", 'anise')->first();

        $this->browse(function (Browser $browser) use ($ingredientAnise) {
            $browser
                ->visitIngredients()
                ->type('search', '')
                ->clickSearch()
                ->waitForText($ingredientAnise->name)
                ->assertSee($ingredientAnise->name)
                ->assertPresent('#pagination');
        });
    }


    /**
     * @group tick_cross
     */
    public function testIngredientOnlyVeggieTick()
    {
        $ingredientButter = Ingredient::where("name", 'butter')->first();

        $this->browse(function (Browser $browser) use ($ingredientButter) {
            $browser
                ->visitIngredients()
                ->type('search', $ingredientButter->name)
                ->clickSearch()
                ->waitForText($ingredientButter->name)
                ->assertSee($ingredientButter->name)
                ->assertPresent('#ingredient-tick-veggie-' . $ingredientButter->id)
                ->assertMissing('#ingredient-tick-vegan-' . $ingredientButter->id)
                ->assertPresent('#ingredient-cross-vegan-' . $ingredientButter->id);
        });
    }

    /**
     * @group tick_cross
     */
    public function testIngredientVeggieVeganCross()
    {
        $ingredientBacon = Ingredient::where("name", 'bacon')->first();

        $this->browse(function (Browser $browser) use ($ingredientBacon) {
            $browser
                ->visitIngredients()
                ->type('search', $ingredientBacon->name)
                ->clickSearch()
                ->waitForText($ingredientBacon->name)
                ->assertSee($ingredientBacon->name)
                ->assertPresent('#ingredient-cross-veggie-' . $ingredientBacon->id)
                ->assertPresent('#ingredient-cross-vegan-' . $ingredientBacon->id);
        });
    }

    /**
     * @group tick_cross
     */
    public function testIngredientVeggieVeganTick()
    {
        $ingredientAnise = Ingredient::where("name", 'anise')->first();

        $this->browse(function (Browser $browser) use ($ingredientAnise) {
            $browser
                ->visitIngredients()
                ->type('search', $ingredientAnise->name)
                ->clickSearch()
                ->waitForText($ingredientAnise->name)
                ->assertSee($ingredientAnise->name)
                ->assertPresent('#ingredient-tick-veggie-' . $ingredientAnise->id)
                ->assertPresent('#ingredient-tick-vegan-' . $ingredientAnise->id);
        });
    }


    /**
     * @group sort
     */
    public function testIngredientsColumnNameSort()
    {
        $ingredientAnise = Ingredient::where("name", 'anise')->first();
        $ingredientChocolate = Ingredient::where("name", 'chocolate')->first();
        // CustomDuskBrowser is typehidden
        $this->browse(function (Browser $browser) use ($ingredientAnise, $ingredientChocolate) {
            $browser
                ->visitIngredients()
                ->type('search', '')
                ->clickSearch()
                ->waitForText($ingredientAnise->name)
                ->waitForText($ingredientChocolate->name)
                ->assertOrderingColumnSort(
                    '.table-auto',
                    '.ingredient-name',
                    '#th-name',
                    $ingredientAnise->name,
                    $ingredientChocolate->name);

        });
    }
}
