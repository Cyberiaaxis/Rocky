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
$router->get('listRight', 'LandingPageController@listTopPlayer');
$router->get('listLeft', 'LandingPageController@listTopPlayer');
$router->post('/auth/login', 'LoginController@login');
$router->post('/register', 'RegistrationController@signup');
// $router->get('/loginBySession', 'LoginController@getUserBySession');

$router->group(['middleware' => ['auth:sanctum', 'verified', 'throttle:60,1']], function($router){

    $router->get('/home', 'HomeController@index');
});


