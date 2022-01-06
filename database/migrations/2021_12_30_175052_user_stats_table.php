<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UserStatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_stats', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->unique();
            $table->bigInteger('strength');
            $table->bigInteger('defense');
            $table->bigInteger('agility');
            $table->bigInteger('endurance');
            $table->integer('hp');       
            $table->integer('max_hp');       
            $table->integer('energy');       
            $table->integer('max_energy');       
            $table->integer('max_nerve');       
            $table->integer('will');       
            $table->integer('max_will');       
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_stats');
    }
}
