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
                ->waitForText(trans('ingredients_table.name', [], 'en'))
                ->assertPathIs('/ingredients');
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
                ->visit('/ingredients')
                ->type('search', $ingredientSalt->name)
                ->click('#buttonSearch')
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
                ->visit('/ingredients')
                ->type('search', '')
                ->click('#buttonSearch')
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
                ->visit('/ingredients')
                ->type('search', $ingredientButter->name)
                ->click('#buttonSearch')
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
                ->visit('/ingredients')
                ->type('search', $ingredientBacon->name)
                ->click('#buttonSearch')
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
                ->visit('/ingredients')
                ->type('search', $ingredientAnise->name)
                ->click('#buttonSearch')
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
                ->visit('/ingredients')
                ->type('search', '')
                ->click('#buttonSearch')
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
