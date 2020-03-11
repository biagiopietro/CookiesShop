<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Http\Response;

class IngredientTest extends TestCase
{

    public function testCookiesReachable()
    {
        $response = $this->get($this->getIngredientsUrl());
        $response->assertStatus(200);
    }

    public function testCookiesSearchSpritzCookie()
    {
        $response = $this->withHeaders([
            'Accept' => '*/json',
        ])->json('GET', $this->getIngredientsUrl(), ['search' => 'butter']);
        $response
            ->assertStatus(200)
            ->assertJson([
                "current_page" => 1,
                "data" =>[
                    [
                            "id" => 1,
                            "name" => "butter",
                            "is_veggie" => true,
                            "is_vegan" => false,
                            "is_deleted" => 0,
                            "created_at" => null,
                            "updated_at" => null
                    ]
                ],
                "first_page_url" => $this->getIngredientsFullUrl()."?page=1",
                "from" => 1,
                "last_page" => 1,
                "last_page_url" => $this->getIngredientsFullUrl()."?page=1",
                "next_page_url" => null,
                "path" => $this->getIngredientsFullUrl(),
                "per_page" => 10,
                "prev_page_url" => null,
                "to" => 3,
                "total" => 3
            ]);

    }

    public function testCookiesPageNumber2()
    {
        $response = $this->withHeaders([
            'Accept' => '*/json',
        ])->json('GET', $this->getIngredientsUrl(), ['search' => '', 'page' => '2']);
        $response
            ->assertStatus(200)
            ->assertJsonFragment([
                "current_page" => 2,
                "first_page_url" => $this->getIngredientsFullUrl()."?page=1",
                "from" => 11,
                "last_page" => 5,
                "last_page_url" => $this->getIngredientsFullUrl()."?page=5",
                "next_page_url" => $this->getIngredientsFullUrl()."?page=3",
                "path" => $this->getIngredientsFullUrl(),
                "per_page" => 10,
                "prev_page_url" => $this->getIngredientsFullUrl()."?page=1",
                "to" => 20,
                "total" => 41
            ]);

    }
}

