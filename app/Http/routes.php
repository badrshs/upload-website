<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/



Route::get('/Online', 'OnlineController@Index');
Route::get('/Online1', 'OnlineController@Index1');
Route::get('/{id}.js', 'OnlineController@Js');
Route::get('/{id}.css', 'OnlineController@Css');
Route::get('Live/{id}', 'OnlineController@Result');
Route::get('/R-{id}', 'OnlineController@ResultCode');
Route::get('/LiveHtml/{id}.js', 'OnlineController@CookieJs');
Route::get('/LiveHtml/{id}.css', 'OnlineController@CookieCss');
Route::get('/LiveHtml/{id}.html', 'OnlineController@CookieResult');
Route::post('/RunCode', 'OnlineController@SetLive');
Route::post('/SaveCode', 'OnlineController@SetCode');
Route::get('/GetPin', 'OnlineController@ReturnResult');


 Route::get('/AdminGetAllProj', function () {

       return view('AdminGet');

  
});


 Route::get('/bader', function () {
     $show["show"] = false;
       return view('Test',$show);


});








Route::get('/', 'UploadController@Index');

 

 
 Route::get('getProject ', function () {

        
       
        $Project = DB::table('files')->where("State","=","1")->orderBy('Visiter', 'desc')->paginate(7);

 
    $append="";
     
     
     foreach($Project as $one){
         $Title = "";
         if($one->Title!="")
             
              $Title = $one->Title;
         
         $append.='  <article class="col-sm-3 video_post postType3">
                    <div class="inner row m0">
                        <a href="http://www.upload-website.com/'.$one->name.'"><div class="row screencast m0">
                            <img style="width:283px;height:209px" src="screenshot/'.$one->name.'.jpg" alt="" class="cast img-responsive">
                            <div class="play_btn"></div>
                             
                        </div></a>
                        <div class="row m0 post_data">
                            <div class="row m0" style="    white-space: nowrap;
    overflow: hidden;"><a href="single-video.html" class="post_title">'.$Title.'</a></div>
                            
                        </div>
                        
                    </div>
                </article> ';
         
         
     }
     if($Project->nextPageUrl()!=null)
        $append.='<div class="row m0">
                    <div class="clearfix"></div>
                    <a href="'.$Project->nextPageUrl().'" class="load_more_videos">Load more Project</a>
                </div>';
     
     return $append;
     
     
    });



 Route::get('/ImageGen', function () {
/*
    
 $v = \App\FilesDB::where("State","=","1")->get();
     
     
     
     foreach($v as $key=>$c){
          $url = $c->name;           

         
         
         if(!file_exists ("screenshot/$url.jpg")){
        
     
   shell_exec ('xvfb-run --server-args="-screen 0, 1351x768x24" cutycapt --url=http://www.upload-website.com/'.$url.' --out=screenshot/'.$url.'.png --min-width=1351 --delay=2000');
  shell_exec ('convert -crop 1351x615+5+3 screenshot/'.$url.'.png -quality 50 screenshot/'.$url.'.jpg ');
  unlink("/var/www/laravel/public/screenshot/$url.png");  
         
         
   \App\FilesDB::where('name', $url)->update(['Image' =>'screenshot/'.$url ] );
      
              echo $c->id." is done";
         
         
         
         }else{
                           echo $c->id." is exist<br>";

         }
         
         
         
         

         
     }
     
     
 
     
     
 
     */
     
     
     
    });






Route::get('/ImageSource{url}', function ($url) {
    
    if(App\FilesDB::where('name', $url)->exists ()){
        
        App\FilesDB::where('name', $url)->increment('Visiter');
    }
  

  
    //return Redirect::to()
    
    });


 

Route::get('screan', 'UploadTestController@test');

 
  



Route::get('preg', 'UploadTestController@Index');
Route::get('test', 'UploadTestController@Index');




Route::get('ListAll', 'GeneralController@Index');




Route::get('AdminGetAll/GetALLData', 'GeneralController@GetALLData');
Route::post('AdminGetAll/deleteProject', 'GeneralController@deleteProject');
Route::post('AdminGetAll/statusProject', 'GeneralController@state');
 


 
    Route::post('apply/upload', 'UploadController@upload');
  Route::post('apply/uploadTest', 'UploadTestController@upload');
Route::post('apply/upload/All', 'UploadController@uploadFiles');
 