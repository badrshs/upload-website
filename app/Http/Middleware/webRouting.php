<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Redirect;

class webRouting
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        $response = $next($request);
        $value = Cookie::get("language");

        $prefix =  $request->route()->getPrefix();

        if($prefix!="/ar"){

            if($value=="Ar")
            {
                return   Redirect::to("/ar".$_SERVER['REQUEST_URI']);
            }

        }




        return $response;
    }











}
