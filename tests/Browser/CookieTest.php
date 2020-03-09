<?php

namespace Tests\Browser;

use App\Cookie;
use http\Client;
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
     * @group test
     */
    public function testCookiesColumnNameSort()
    {

        $cookieBenneWafers = Cookie::where("name", 'Benne Wafers')->first();
        $cookieChocolateDippedCoconutMacaroons = Cookie::where("name", 'Chocolate-Dipped Coconut Macaroons')->first();

        $this->browse(function (Browser $browser) use ($cookieBenneWafers, $cookieChocolateDippedCoconutMacaroons) {
            $browser
                ->visit('/cookies')
                ->type('search', '')
                ->click('#buttonSearch')
                ->waitForText($cookieBenneWafers->name)
                ->waitForText($cookieChocolateDippedCoconutMacaroons->name);

            $html = $browser->element('.table-auto')->getAttribute('innerHTML');
            $crawler = new Crawler($html);

            $this->seeInFirstElement('.cookie-row', $cookieBenneWafers->name, $crawler);
            $this->seeInLastElement('.cookie-row', $cookieChocolateDippedCoconutMacaroons->name, $crawler);

            $browser->click('#th-name');

            $html = $browser->element('.table-auto')->getAttribute('innerHTML');
            $crawler = new Crawler($html);

            $this->seeInFirstElement('.cookie-row', $cookieChocolateDippedCoconutMacaroons->name, $crawler);
            $this->seeInLastElement('.cookie-row', $cookieBenneWafers->name, $crawler);

        });
    }

    public function seeInFirstElement($selector, $text, $crawler)
    {
        $this->assertStringContainsString($text, trim($crawler->filter($selector)->first()->text()));
        return $this;
    }

    public function seeInLastElement($selector, $text, $crawler)
    {
        $this->assertStringContainsString($text, trim($crawler->filter($selector)->last()->text()));
        return $this;
    }
}
