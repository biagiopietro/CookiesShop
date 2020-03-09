<?php

namespace Tests\Browser;

use App\Cookie;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Symfony\Component\DomCrawler\Crawler;

class CookieTest extends DuskTestCase
{

    public function testCookiesSection()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->click('a[href="/cookies"]')
                ->waitForText(trans('cookies_table.name'))
                ->assertPathIs('/cookies');
        });
    }

    /**
     * @group search
     */
    public function testCookiesSearchBarSingleResult()
    {
        $cookieSpritz = Cookie::where("name", 'Spritz')->first();

        $this->browse(function (Browser $browser) use ($cookieSpritz) {
            $browser
                ->visit('/cookies')
                ->type('search', $cookieSpritz->name)
                ->click('#buttonSearch')
                ->waitForText($cookieSpritz->name)
                ->assertSee($cookieSpritz->name)
                ->assertMissing('#pagination');
        });
    }

    /**
     * @group search
     */
    public function testCookiesSearchBarMultipleResults()
    {
        $cookieBiscotti = Cookie::where("name", 'Biscotti')->first();

        $this->browse(function (Browser $browser) use ($cookieBiscotti) {
            $browser
                ->visit('/cookies')
                ->type('search', '')
                ->click('#buttonSearch')
                ->waitForText($cookieBiscotti->name)
                ->assertSee($cookieBiscotti->name)
                ->assertPresent('#pagination');
        });
    }

    /**
     * @group cookie_ingredients
     */
    public function testCookieIngredients()
    {
        $cookieBenneWafers = Cookie::where("name", 'Benne Wafers')->first();

        $this->browse(function (Browser $browser) use ($cookieBenneWafers) {
            $browser
                ->visit('/cookies')
                ->type('search', '')
                ->click('#buttonSearch')
                ->waitForText($cookieBenneWafers->name)
                ->assertSee($cookieBenneWafers->name)
                ->click('#cookie-row-151')
                ->assertPresent('#modal-title')
                ->waitForText($cookieBenneWafers->name)
                ->assertSee($cookieBenneWafers->name)
                ->assertSee('sesame seeds')
                ->assertSee('butter')
                ->assertSee('egg')
                ->assertSee('vanilla')
                ->assertSee('flour')
                ->assertSee('salt')
                ->assertSee(trans('cookies_table.got_it'))
                ->click('#modal-got-it');
        });
    }

    /**
     * @group cookie_ingredients
     */
    public function testCookieWithoutIngredients()
    {
        $cookieBiscotti = Cookie::where("name", 'Biscotti')->first();

        $this->browse(function (Browser $browser) use ($cookieBiscotti) {
            $browser
                ->visit('/cookies')
                ->type('search', '')
                ->click('#buttonSearch')
                ->waitForText($cookieBiscotti->name)
                ->assertSee($cookieBiscotti->name)
                ->click('#cookie-row-' . $cookieBiscotti->id)
                ->assertPresent('#modal-title')
                ->waitForText($cookieBiscotti->name)
                ->assertSee($cookieBiscotti->name)
                ->assertSee(trans('cookies_table.name'))
                ->click('#modal-got-it');
        });
    }

    /**
     * @group badge
     */
    public function testCookieOnlyVeggieBadge()
    {
        $cookieCandyCaneSnowball = Cookie::where("name", 'Candy Cane Snowball')->first();

        $this->browse(function (Browser $browser) use ($cookieCandyCaneSnowball) {
            $browser
                ->visit('/cookies')
                ->type('search', $cookieCandyCaneSnowball->name)
                ->click('#buttonSearch')
                ->waitForText($cookieCandyCaneSnowball->name)
                ->assertSee($cookieCandyCaneSnowball->name)
                ->assertPresent('#cookie-veggie-' . $cookieCandyCaneSnowball->id)
                ->assertMissing('#cookie-vegan-' . $cookieCandyCaneSnowball->id);
        });
    }

    /**
     * @group badge
     */
    public function testCookieVeggieVeganBadge()
    {
        $cookieCandyCaneSnowball = Cookie::where("name", 'Vegan Unicorn')->first();

        $this->browse(function (Browser $browser) use ($cookieCandyCaneSnowball) {
            $browser
                ->visit('/cookies')
                ->type('search', $cookieCandyCaneSnowball->name)
                ->click('#buttonSearch')
                ->waitForText($cookieCandyCaneSnowball->name)
                ->assertSee($cookieCandyCaneSnowball->name)
                ->assertPresent('#cookie-veggie-' . $cookieCandyCaneSnowball->id)
                ->assertPresent('#cookie-vegan-' . $cookieCandyCaneSnowball->id);
        });
    }

    /**
     * @group sort
     */
    public function testCookiesColumnNameSort()
    {
        $cookieBenneWafers = Cookie::where("name", 'Benne Wafers')->first();
        $cookieChocolateDippedCoconutMacaroons = Cookie::where("name", 'Chocolate-Dipped Coconut Macaroons')->first();
        // CustomDuskBrowser is typehidden
        $this->browse(function (Browser $browser) use ($cookieBenneWafers, $cookieChocolateDippedCoconutMacaroons) {
            $browser
                ->visit('/cookies')
                ->type('search', '')
                ->click('#buttonSearch')
                ->waitForText($cookieBenneWafers->name)
                ->waitForText($cookieChocolateDippedCoconutMacaroons->name)
                ->assertOrderingColumnSort(
                    '.table-auto',
                    '.cookie-name',
                    '#th-name',
                    $cookieBenneWafers->name,
                    $cookieChocolateDippedCoconutMacaroons->name);

        });
    }

    /**
     * @group sort
     */
    public function testCookiesColumnWeightSort()
    {
        $cookieChocolateLebkuchen = Cookie::where("name", 'Chocolate Lebkuchen')->first();
        $cookieChewyStrawberrySugar = Cookie::where("name", 'Chewy Strawberry Sugar')->first();
        // CustomDuskBrowser is typehidden
        $this->browse(function (Browser $browser) use ($cookieChocolateLebkuchen, $cookieChewyStrawberrySugar) {
            $browser
                ->visit('/cookies')
                ->type('search', '')
                ->click('#buttonSearch')
                ->click('#th-weight')
                ->waitForText($cookieChewyStrawberrySugar->weight)
                ->waitForText($cookieChocolateLebkuchen->weight)
                ->assertOrderingColumnSort(
                    '.table-auto',
                    '.cookie-weight',
                    '#th-weight',
                    $cookieChewyStrawberrySugar->weight,
                    $cookieChocolateLebkuchen->weight);

        });
    }

    /**
     * @group sort
     */
    public function testCookiesColumnCaloriesSort()
    {
        $cookieChocolateChip = Cookie::where("name", 'Chocolate Chip')->first();
        $cookieChewyStrawberrySugar = Cookie::where("name", 'Chewy Strawberry Sugar')->first();
        // CustomDuskBrowser is typehidden
        $this->browse(function (Browser $browser) use ($cookieChocolateChip, $cookieChewyStrawberrySugar) {
            $browser
                ->visit('/cookies')
                ->type('search', '')
                ->click('#buttonSearch')
                ->click('#th-calories')
                ->waitForText($cookieChewyStrawberrySugar->calories)
                ->waitForText($cookieChocolateChip->calories)
                ->assertOrderingColumnSort(
                    '.table-auto',
                    '.cookie-calories',
                    '#th-calories',
                    $cookieChocolateChip->calories,
                    $cookieChewyStrawberrySugar->calories);

        });
    }

}
