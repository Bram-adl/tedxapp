<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Facades\DB;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            "first_name" => "required|string|max:10",
            "last_name" => "nullable|string|max:20",
            "email_address" => "required|string|email|unique:audiens",
            "password" => "required|string|min:4"
        ]);
        
        $username = strtolower($request->first_name) . strtolower($request->last_name);

        DB::table("audiens")
            ->insert([
                "first_name" => $request->first_name,
                "last_name" => $request->last_name,
                "username" => $username,
                "email_address" => $request->email_address,
                "password" => Hash::make($request->password),
                "created_at" => now(),
                "updated_at" => now()
            ]);

        return response()->json([
            "success" => true,
            "message" => "Account created successfully! Please login."
        ]);
    }
}
