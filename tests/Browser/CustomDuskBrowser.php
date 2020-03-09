<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use PHPUnit\Framework\Assert as PHPUnit;
use Symfony\Component\DomCrawler\Crawler;

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

    public function assertOrderingColumnSort($tableSelector,
                                             $rowSelector,
                                             $columnSelector,
                                             $textFirstRow,
                                             $textLastRow) {
        $html = $this->element($tableSelector)->getAttribute('innerHTML');
        $crawler = new Crawler($html);

        $this->seeInFirstElement($rowSelector, $textFirstRow, $crawler);
        $this->seeInLastElement($rowSelector, $textLastRow, $crawler);

        $this->click($columnSelector);

        $html = $this->element($tableSelector)->getAttribute('innerHTML');
        $crawler = new Crawler($html);

        $this->seeInFirstElement($rowSelector, $textLastRow, $crawler);
        $this->seeInLastElement($rowSelector, $textFirstRow, $crawler);
        return $this;
    }
}
