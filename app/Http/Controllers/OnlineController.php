<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use DOMDocument;

use App\Http\Requests;
use App\Fork;
use App\Live;
use App\CodeVisiter;
use Cookie;
use Illuminate\Cookie\CookieJar;

class OnlineController extends Controller
{

    public function Index(Request $request)
    {
        $Random =  str_random(60).(rand()) ;
        $request->session()->forget('Uid');
        $request->session()->put('Uid', $Random);
        $result["show"]=false;

       // return     $request->session()->get('Uid');

        return view('OnlineCoding',$result);



    }

    public function Index1(Request $request)
    {
        $Random =  str_random(60).(rand()) ;
        $request->session()->forget('Uid');
        $request->session()->put('Uid', $Random);
        $result["show"]=false;

       // return     $request->session()->get('Uid');

        return view('Test',$result);



    }

    public function Result($id)
    {

$Result['HTML'] =   Fork::find($id)->Html;
$Result['id'] =   $id;

        return view('ForkResult',$Result);

    }


    public function ReturnResult()
    {

        $c = explode("/", \URL::previous());
        $id = substr(end($c), 2);


            $a = Fork::find($id);
            $Result['HTML'] = $a->Html  ;
            $Result['Css'] = $a->Css  ;
            $Result['Js'] = $a->JavaScript  ;
            $Result['id'] =   $id;

        return   $Result ;

    }

       public function ResultCode(Request $request , $id)
    {

           
           
     if ((!Fork::where('StringId', '=', $id)->exists())) {
       
          die();
   }

           $this->newVisiter($request,$id);
           

        $Result['All'] =Fork::find($id);
        $Result['id'] =   $id;
        $Result['show'] =   true;

        return view('OnlineCoding',$Result);

    }



    public function CookieResult($id)
    {

$Result['HTML'] =   Live::find($id)->Html;
$Result['id'] =   $id;

        return view('Live',$Result);

    }

    public function Js($id)
    {

         $response = \Response::make(Fork::find($id)->JavaScript);
        $response->header('Content-Type', 'application/javascript; charset=utf-8');
        return $response;

    }
    public function CookieJs($id)
    {

         $response = \Response::make(Live::find($id)->JavaScript);
        $response->header('Content-Type', 'application/javascript; charset=utf-8');
        return $response;

    }

    public function Css($id)
    {
        $response = \Response::make(Fork::find($id)->Css);
        $response->header('Content-Type', 'text/css; charset=utf-8');
        return $response;



    }
    public function CookieCss($id)
    {
        $response = \Response::make(Live::find($id)->Css);
        $response->header('Content-Type', 'text/css; charset=utf-8');
        return $response;



    }


    public function SetLive(Request $request)
    {
//$JavaScript,$Css,$Html,


        $id= $request->session()->get('Uid');
        $Live = Live::find($id);
        if($Live!=null)
            $Live->delete();

        $Random =  str_random(60).(rand()) ;
        $request->session()->forget('Uid');
        $request->session()->put('Uid', $Random);
            $id=$Random;
        $Live = new Live();
        $Live->Html = Input::get("Html");
        $Live->Css =Input::get("Css");
        $Live->JavaScript =Input::get("JavaScript");
        $Live->Ip = $request->ip();
        $Live->StringId = $id;

        if($Live->save()) {
            return "http://www.upload-website.com/LiveHtml/$id.html";

        }
    else{
    return"false";
    }


    }

    public function SetCode(Request $request)
    {

        $id =  str_random(5).'-'.(rand(1,10)) ;
        $Live = new Fork();
        $Live->Html = Input::get("Html");
        $Live->Css =Input::get("Css");
        $Live->JavaScript =Input::get("JavaScript");
        $Live->Ip = $request->ip();
        $Live->StringId = $id;
        $Live->Title = Input::get("Title");;

        if($Live->save()) {
            return "http://www.upload-website.com/R-$id";

        }
    else{
    return"false";
    }


    }

    public  function newVisiter(Request $request ,$id){

        if ((!CodeVisiter::where('Fork_id', '=', $id)->where('ip', '=',$request->ip())->exists())) {

            $CodeVisiter = new CodeVisiter();
            $CodeVisiter->ip = $request->ip();
            $CodeVisiter->Fork_id = $id;
            $CodeVisiter->save();
         }



    }





}




/*

create view CountCode as (SELECT StringId, SUM(Comment),SUM(CodeVisiter),SUM(LikeCode) from (

select StringId   , count(StringId) as Comment, 0 as CodeVisiter, 0 as LikeCode
from Fork left join Comment  on  StringId = Fork_id
group by StringId

UNION ALL

select StringId, 0 as Comment, count(StringId) as CodeVisiter , 0 as LikeCode
from Fork left join CodeVisiter  on StringId = Fork_id
group by StringId

UNION ALL

select StringId, 0 as Comment, 0 as CodeVisiter, count(StringId) as LikeCode
from Fork left join LikeCode  on StringId = Fork_id
group by StringId

) CountsTable
GROUP BY CountsTable.StringId)


*/


/*
 *
 *
 *  CREATE VIEW CountInfo AS



(SELECT StringId,
        Comment,
        CodeVisiter,
        LikeCode
FROM   Fork p
        LEFT JOIN (SELECT Count(Fork_id) Comment, Fork_id
                    FROM   Comment
                    GROUP  BY Fork_id) c
                ON p.StringId = c.Fork_id
        LEFT JOIN (SELECT Count(Fork_id) CodeVisiter, Fork_id
                    FROM   CodeVisiter
                    GROUP  BY Fork_id) v
                ON p.StringId = v.Fork_id
        LEFT JOIN (SELECT Count(Fork_id) LikeCode, Fork_id
                    FROM   LikeCode
                    GROUP  BY Fork_id) l
                ON p.StringId = l.Fork_id )
 *
 */