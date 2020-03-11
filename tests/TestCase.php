<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    public function getHostAndPort()
    {
        return "http://localhost:8000";
    }

    public function getIngredientsUrl()
    {
        return '/ingredients';
    }

    public function getIngredientsFullUrl()
    {
        return $this->getHostAndPort().$this->getIngredientsUrl();
    }

    public function getCookiesUrl()
    {
        return '/cookies';
    }

    public function getCookiesFullUrl()
    {
        return $this->getHostAndPort().$this->getCookiesUrl();
    }
}
