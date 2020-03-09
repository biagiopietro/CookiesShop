<?php

namespace Tests\Browser;

use App\Http\Middleware\SetLocale;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class LanguageTest extends DuskTestCase
{
    public function testItalianLanguage()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                ->click('#it')
                ->assertSee(trans('navbar.ingredients',[],'it'))
                ->assertDontSee(trans('navbar.ingredients',[],'en'));
        });
    }

    public function testEnglishLanguage()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                ->click('#en')
                ->assertSee(trans('navbar.cookies',[],'en'))
                ->assertDontSee(trans('navbar.cookies',[],'it'));
        });
    }
}
