<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            "email_address" => "required|string|email",
            "password" => "required|string"
        ]);

        $user = DB::table("audiens")
            ->where([
                "email_address" => $request->email_address
            ])
            ->get();
        if (!count($user)) {
            return response()->json([
                "success" => false,
                "message" => "Account not found. Please check your email and password again."
            ]);
        }

        $user_id = $user[0]->id;
        $user_password = $user[0]->password;
        if (!Hash::check($request->password, $user_password)) {
            return response()->json([
                "success" => false,
                "message" => "Email and password does not match."
            ]);
        }

        // System generates Token
        // Token is stored in grant_client tables
        // grant_client tables => id, user_id, token, created_at, updated_at
        $token = "_ey" . Str::random(13);
        
        DB::table("grant_clients")
            ->insert([
                "user_id" => $user_id,
                "token" => $token
            ]);
        
        return response()->json([
            "success" => true,
            "token" => $token,
            "user" => $user_id
        ]);
    }
}
