##### I have start devloping this website before two years and then I lost the domain upload-website.com :D 
##### I decide to make this project public 
##### this project have two section 
#### first section 

I have devleped the same idea as codepen  with real time  result with all the functiolaliry 

#### second part 
(upload your project part)

you have to zip your folder then upload the zip to main page  
now your files will go to public folder as new website and if you are working on ubunto we have develped a way to create demo website 
or you can use it like yourdomain.com/yourproject/.... 

#### I will return back to fix everything I made before because my laravel level was 0 :D ( I will come back when i have time ) 



# instalation on ubuntu 

### 1- sites-available and sites-enable  
give full permission to those two file 


### 2 - composit install 

 
  
### 3- inside  ubunto etc  there is sudoers.d folder 

inside this file we have 90-cloud-init-users file 

inside this filder just add

##  www-data ALL=(ALL:ALL) NOPASSWD: /etc/init.d/apache2 reload

to give permission for the normal user 



# ubunto laravel instulaion 

sudo apt-get install php-mbstring

https://askubuntu.com/questions/764782/install-laravel-5-on-ubuntu-16-04


php artisan cache:clear 



inside the main conf we have to add 


 <Directory /var/www/html/public>
       AllowOverride All
     </Directory>
     
     
     
    ###### when i have time I will rewrite the documentation again 
     
     
