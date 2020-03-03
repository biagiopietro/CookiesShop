<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Log;

class RequestLogger
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
        Log::debug( 'REQUEST', [ $request->fullUrl(), $request->getLocale() ] );

        $response = $next( $request );

        Log::debug( 'RESPONSE', [ $request->fullUrl(), $request->getLocale() ]  );
        return $response;
    }
}
