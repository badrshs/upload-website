<?php

namespace App\Http\Controllers;
 use Illuminate\Http\Request;

use Illuminate\Support\Facades\Input;
use Validator;
use Redirect;
 use Session;
 use File;
use DOMDocument;
 use DB;
 use SimpleXMLElement;
 use Response;
use App\Http\Requests;
use App\ErrorDb;
use App\FilesDB;
class GeneralController extends Controller
{


   public function GetALLData(){
       
         $Post = DB::table('files')->orderBy('Date', 'desc')->get();
       
         //return Response::json($Post, 200, [], JSON_NUMERIC_CHECK);
         return Response::json($Post);

       
        
       
       
   } 
    
    
    public function deleteProject(){
       
 File::deleteDirectory(public_path( Input::get('path')));
       if(sizeof(strlen(Input::get('path'))>3)){
                   FilesDB::where('name', Input::get('path'))->delete();
           \Storage::disk('subdomain')->delete(Input::get('path'));

       }else{
           
       }
     
       
       
   }
      
    public function ii(){

        
        
$test_array = array (
  'bla' => 'blub',
  'foo' => 'bar',
  'another_array' => array (
    'stack' => 'overflow',
  ),
);
$xml = new SimpleXMLElement('<root/>');
array_walk_recursive($test_array, array ($xml, 'addChild'));
print $xml->asXML();
   }
    
 
    
    
   public function Index(){
     $list =    array_map('basename', File::directories("/var/www/laravel/public"));
         
    foreach ($list as $one) 
        echo "<a href='$one'  target='_blank' >$one<a><br>";
        
         
        
        
        
        
        
    }
    
    
    
    
    
    public function state(){
        
         
        $status = FilesDB::where('name', input::get('url'))->first();
    //>State
        
        if(is_null($status->title)&&$status->State==0){
           
  $url = input::get('url');           
  $link = "http://www.upload-website.com/$url";
  $this->GenerateImage($url);
  $title =   $this->get_title($url);     
  FilesDB::where('name', $url)->update(['Title' =>$title ,'Image' =>'screenshot/'.$url ] );
        
            
        }
        
           FilesDB::where('name', input::get('url'))->update(['State' =>!$status->State ] );
    
        
    }
    
    
    
    
    
 
    
    
    
  public  function get_title($url){
  $str = file_get_contents($url);
  if(strlen($str)>0){
    $str = trim(preg_replace('/\s+/', ' ', $str)); // supports line breaks inside <title>
    preg_match("/\<title\>(.*)\<\/title\>/i",$str,$title); // ignore case
      if(!is_null($title[1]))
    return "00";
      else
      {
          return "No Title";
      }
  }
}
    
    public function GenerateImage($url){
           shell_exec ('xvfb-run --server-args="-screen 0, 1351x768x24" cutycapt --url=http://upload-website.com/'.$url.' --out=screenshot/'.$url.'.png --min-width=1351 --delay=3700');
  shell_exec ('convert -crop 1351x615+5+3 screenshot/'.$url.'.png -quality 50 screenshot/'.$url.'.jpg ');
 
     
     
      unlink("/var/www/laravel/public/screenshot/$url.png");  
       
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
}