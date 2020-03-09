<?php

namespace Tests\Browser;

use App\Cookie;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

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

    public function testCookiesSearchBarSingleResult()
    {
        $cookieSpritz = Cookie::where("name",'Spritz')->first();

        $this->browse(function (Browser $browser) use ($cookieSpritz) {
            $browser
                ->visit('/')
                ->click('a[href="/cookies"]')
                ->waitForText(trans('cookies_table.name'))
                ->assertPathIs('/cookies')
                ->type('search', $cookieSpritz->name)
                ->click('#buttonSearch')
                ->waitForText($cookieSpritz->name)
                ->assertSee($cookieSpritz->name)
                ->assertMissing('#pagination');
        });
    }

    public function testCookiesSearchBarMultipleResults()
    {
        $cookieBiscotti = Cookie::where("name",'Biscotti')->first();

        $this->browse(function (Browser $browser) use ($cookieBiscotti) {
            $browser
                ->visit('/')
                ->click('a[href="/cookies"]')
                ->waitForText(trans('cookies_table.name'))
                ->assertPathIs('/cookies')
                ->type('search', '')
                ->click('#buttonSearch')
                ->waitForText($cookieBiscotti->name)
                ->assertSee($cookieBiscotti->name)
                ->assertPresent('#pagination');
        });
    }

    public function testCookieIngredients()
    {
        $cookieBenneWafers = Cookie::where("name",'Benne Wafers')->first();

        $this->browse(function (Browser $browser) use ($cookieBenneWafers){
            $browser
                ->visit('/')
                ->click('a[href="/cookies"]')
                ->waitForText(trans('cookies_table.name'))
                ->assertPathIs('/cookies')
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

    public function testCookieWithoutIngredients()
    {
        $cookieBiscotti = Cookie::where("name",'Biscotti')->first();

        $this->browse(function (Browser $browser) use ($cookieBiscotti){
            $browser
                ->visit('/')
                ->click('a[href="/cookies"]')
                ->waitForText(trans('cookies_table.name'))
                ->assertPathIs('/cookies')
                ->type('search', '')
                ->click('#buttonSearch')
                ->waitForText($cookieBiscotti->name)
                ->assertSee($cookieBiscotti->name)
                ->click('#cookie-row-'.$cookieBiscotti->id)
                ->assertPresent('#modal-title')
                ->waitForText($cookieBiscotti->name)
                ->assertSee($cookieBiscotti->name)
                ->assertSee(trans('cookies_table.name'))
                ->click('#modal-got-it');
        });
    }

    public function testCookieOnlyVeggieBadge()
    {
        $cookieCandyCaneSnowball = Cookie::where("name",'Candy Cane Snowball')->first();

        $this->browse(function (Browser $browser) use ($cookieCandyCaneSnowball){
            $browser
                ->visit('/')
                ->click('a[href="/cookies"]')
                ->waitForText(trans('cookies_table.name'))
                ->assertPathIs('/cookies')
                ->type('search', $cookieCandyCaneSnowball->name)
                ->click('#buttonSearch')
                ->waitForText($cookieCandyCaneSnowball->name)
                ->assertSee($cookieCandyCaneSnowball->name)
                ->assertPresent('#cookie-veggie-'.$cookieCandyCaneSnowball->id)
                ->assertMissing('#cookie-vegan-'.$cookieCandyCaneSnowball->id);
        });
    }

    public function testCookieVeggieVeganBadge()
    {
        $cookieCandyCaneSnowball = Cookie::where("name",'Vegan Unicorn')->first();

        $this->browse(function (Browser $browser) use ($cookieCandyCaneSnowball){
            $browser
                ->visit('/')
                ->click('a[href="/cookies"]')
                ->waitForText(trans('cookies_table.name'))
                ->assertPathIs('/cookies')
                ->type('search', $cookieCandyCaneSnowball->name)
                ->click('#buttonSearch')
                ->waitForText($cookieCandyCaneSnowball->name)
                ->assertSee($cookieCandyCaneSnowball->name)
                ->assertPresent('#cookie-veggie-'.$cookieCandyCaneSnowball->id)
                ->assertPresent('#cookie-vegan-'.$cookieCandyCaneSnowball->id);
        });
    }

}
