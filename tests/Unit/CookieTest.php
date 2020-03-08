<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Http\Response;

class CookieTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testCookiesReachable()
    {
        $response = $this->get('/cookies');
        $response->assertStatus(200);
    }

    public function testCookiesSearchSprizCookie()
    {
        $response = $this->withHeaders([
            'Accept' => '*/json',
        ])->json('GET', '/cookies', ['search' => 'Spritz']);
        $response
            ->assertStatus(200)
            ->assertJson([
                "current_page" => 1,
                "data" =>[
                    [
                            "id" => 101,
                            "name" => "Spritz",
                            "weight" => 8.4,
                            "calories" => 144,
                            "is_deleted" => 0,
                            "created_at" => null,
                            "updated_at" => null,
                            "is_veggie" => false,
                            "is_vegan" => false
                    ]
                ],
                "first_page_url" => "http://localhost/cookies?page=1",
                "from" => 1,
                "last_page" => 1,
                "last_page_url" => "http://localhost/cookies?page=1",
                "next_page_url" => null,
                "path" => "http://localhost/cookies",
                "per_page" => 10,
                "prev_page_url" => null,
                "to" => 1,
                "total" => 1
            ]);

    }

    public function testCookiesPageNumber2()
    {
        $response = $this->withHeaders([
            'Accept' => '*/json',
        ])->json('GET', '/cookies', ['search' => '', 'page' => '2']);
        $response
            ->assertStatus(200)
            ->assertJsonFragment([
                "current_page" => 2,
                "first_page_url" => "http://localhost/cookies?page=1",
                "from" => 11,
                "last_page" => 3,
                "last_page_url" => "http://localhost/cookies?page=3",
                "next_page_url" => "http://localhost/cookies?page=3",
                "path" => "http://localhost/cookies",
                "per_page" => 10,
                "prev_page_url" => "http://localhost/cookies?page=1",
                "to" => 20,
                "total" => 25
            ]);

    }
}

