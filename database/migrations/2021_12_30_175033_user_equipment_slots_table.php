<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UserEquipmentSlotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_equipment_slots', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->unique();
            $table->integer('primary');
            $table->integer('secondary');
            $table->integer('armor');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_real_estates');
    }
}
