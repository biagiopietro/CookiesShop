<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use PHPUnit\Framework\Assert as PHPUnit;

class CustomDuskBrowser extends Browser
{
    public function seeInFirstElement($selector, $text, $crawler)
    {
       PHPUnit::assertStringContainsString($text, trim($crawler->filter($selector)->first()->text()));
        return $this;
    }

    public function seeInLastElement($selector, $text, $crawler)
    {
        PHPUnit::assertStringContainsString($text, trim($crawler->filter($selector)->last()->text()));
        return $this;
    }
}
