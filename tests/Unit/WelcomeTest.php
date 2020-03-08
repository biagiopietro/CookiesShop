<?php

namespace Tests\Unit;

use Tests\TestCase;
class WelcomeTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testWelcomeReachable()
    {
        $response = $this->call('GET','/');
        $response->assertStatus(200);
    }
}
