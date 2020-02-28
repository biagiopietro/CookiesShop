<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCookieRecipesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cookie_recipes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('cookie_id')->unsigned()->nullable(false);
            $table->integer('ingredient_id')->unsigned()->nullable(false);
            $table->boolean('is_deleted')->default(false);

            $table->foreign('cookie_id')
                ->references('id')
                ->on('cookies')
                ->onDelete('CASCADE');

            $table->foreign('ingredient_id')
                ->references('id')
                ->on('ingredients')
                ->onDelete('CASCADE');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cookie_recipes');
    }
}
