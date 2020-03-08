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
                ->waitForText(trans('cookies_table.name', [], 'en'))
                ->assertPathIs('/cookies');
        });
    }

    public function testCookiesSearchBarSingleResult()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->click('a[href="/cookies"]')
                ->waitForText(trans('cookies_table.name', [], 'en'))
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
                ->waitForText(trans('cookies_table.name', [], 'en'))
                ->assertPathIs('/cookies')
                ->type('search', '')
                ->click('#buttonSearch')
                ->waitForText('Biscotti')
                ->assertSee('Biscotti')
                ->assertPresent('#pagination');
        });
    }

    public function testCookiesPagination()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->click('a[href="/cookies"]')
                ->waitForText(trans('cookies_table.name', [], 'en'))
                ->assertPathIs('/cookies')
                ->type('search', '')
                ->click('#buttonSearch')
                ->waitForText('Biscotti')
                ->assertSee('Biscotti')
                ->assertPresent('#pagination')
                ->clickLink(2)
                ->waitForText('Coconut Icebox')
                ->assertSee('Coconut Icebox')
                ->assertDontSee('Biscotti');
        });
    }

}
