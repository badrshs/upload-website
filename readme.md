# instalation  

### 1- sites-available and sites-enable  
اعطاء صلاحيات كاملة لهالمجلدين .



### 2 - composit install 

 
  
### 3- inside  ubunto etc  there is sudoers.d folder 

inside this file we have 90-cloud-init-users file 

inside this filder just add

##  www-data ALL=(ALL:ALL) NOPASSWD: /etc/init.d/apache2 reload

to give permission for the normal user 
