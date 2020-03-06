<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateIngredientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ingredients', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name',200)->nullable(false)->unique();
            $table->boolean('is_veggie')->default(false);
            $table->boolean('is_vegan')->default(false);
            $table->boolean('is_deleted')->default(false);

            $table->timestamps();
        });
        // Force auto increment to start at 1
        DB::statement('ALTER TABLE ingredients AUTO_INCREMENT = 1;');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ingredients');
    }
}
