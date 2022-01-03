<?php
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
$router->get('/topplayerlist', 'LandingPageController@listTopPlayer');
$router->post('/auth/login', 'LoginController@login');
$router->post('/register', 'RegistrationController@signup');


$router->group(['middleware' => ['auth:sanctum', 'verified']], function($router){
    $router->get('/loginBySession', 'LoginController@getUserBySession');
    $router->get('/home', 'HomeController@index');
});


