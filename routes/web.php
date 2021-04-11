<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'index');
Route::view('/dashboard', 'index');
Route::view('/products/detail', 'index');

Route::post("/auth/login", "Auth\LoginController@login");
Route::post("/auth/register", "Auth\RegisterController@register");

Route::get("/audiens/{id}/verify/{token}", "AudiensController@verify");
