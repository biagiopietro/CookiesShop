<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateCookiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cookies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 150)->nullable(false)->unique();
            $table->double('weight')->default(0);
            $table->double('calories')->default(0);
            $table->boolean('is_deleted')->default(false);

            $table->timestamps();
        });
        // Force auto increment to start at 1
        DB::statement('ALTER TABLE cookies AUTO_INCREMENT = 1;');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cookies');
    }
}
