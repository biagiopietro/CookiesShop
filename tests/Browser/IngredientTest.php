<?php

namespace Tests\Browser;

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
}
