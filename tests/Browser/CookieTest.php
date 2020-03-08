<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
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
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->click('a[href="/cookies"]')
                ->waitForText(trans('cookies_table.name'))
                ->assertPathIs('/cookies')
                ->type('search', 'Spritz')
                ->click('#buttonSearch')
                ->waitForText('Spritz')
                ->assertSee('Spritz')
                ->assertMissing('#pagination');
        });
    }

    public function testCookiesSearchBarMultipleResults()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->click('a[href="/cookies"]')
                ->waitForText(trans('cookies_table.name'))
                ->assertPathIs('/cookies')
                ->type('search', '')
                ->click('#buttonSearch')
                ->waitForText('Biscotti')
                ->assertSee('Biscotti')
                ->assertPresent('#pagination');
        });
    }

    public function testCookieIngredients()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->click('a[href="/cookies"]')
                ->waitForText(trans('cookies_table.name'))
                ->assertPathIs('/cookies')
                ->type('search', '')
                ->waitForText('Benne Wafers')
                ->assertSee('Benne Wafers')
                ->click('#cookie-row-151')
                ->assertPresent('#modal-title')
                ->waitForText('Benne Wafers')
                ->assertSee('Benne Wafers')
                ->assertSee('sesame seeds')
                ->assertSee('butter')
                ->assertSee('egg')
                ->assertSee('vanilla')
                ->assertSee('flour')
                ->assertSee('salt')
                ->assertSee('GOT IT')
                ->click('#modal-got-it');
        });
    }

    public function testCookieWithoutIngredients()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->click('a[href="/cookies"]')
                ->waitForText(trans('cookies_table.name', [], 'en'))
                ->assertPathIs('/cookies')
                ->type('search', '')
                ->waitForText('Biscotti')
                ->assertSee('Biscotti')
                ->click('#cookie-row-81')
                ->assertPresent('#modal-title')
                ->waitForText('Biscotti')
                ->assertSee('Biscotti')
                ->assertSee(trans('cookies_table.name'))
                ->click('#modal-got-it');
        });
    }

}
