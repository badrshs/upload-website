@echo off
title Pokemon Batch alpha
echo.
echo. \---------------------------------------------------\
echo.  \ Pokemon Batch - The Pokemon adventure on Windows  \
echo.   \---------------------------------------------------\
echo.
pause
                              
cls
echo. Prof. Oak approaches
pause
echo. Prof. Oak: Hi. My name is Prof. Oak.
pause
echo. Prof. Oak: Welcome to the wonderful world of Pokemon!
pause
 
:choosename
cls
echo. Prof. Oak: It seems I don't remember your name. What is it?
set /p name=
pause
if '%name%' == '' goto choosename
 
cls
echo. Hi %name%! It's nice seeing you again
pause
 


 
cls
echo. Prof. Oak: So %name% what are you waiting for? Choose your pokemon.
pause
 
set starter='Schiggi'
 
cls
echo. \---------------------------------------------------\
echo.  \                  Schiggi (Lvl 4)                  \
echo.   \---------------------------------------------------\
echo. Prof. Oak: Do you want to pick Schiggi?
echo. Enter y to choose Schiggi
pause
set /p yno=
 
if '%yno%' == 'y' (
    set starter=Schiggi
    goto chosen
)
 
cls
echo. \---------------------------------------------------\
echo.  \                  Glumanda (Lvl 4)                 \
echo.   \---------------------------------------------------\
 
echo. Prof. Oak: Do you want to pick Glumanda?
echo. Enter y to choose Glumanda
pause
set /p yno=
 
if '%yno%' == 'y' (
    set starter=Glumanda
    goto chosen
)
 
cls
echo. \---------------------------------------------------\
echo.  \               Bisasam (Lvl 4)                     \
echo.   \---------------------------------------------------\
 
echo. Prof. Oak: Do you want to pick Pilzi?
echo. Enter y to choose Bisasam
pause
set /p yno=
 
if '%yno%' == 'y' (
    set starter=Bisasam
    goto chosen
)
 
cls
echo. Prof. Oak: Or.. wait.. there is one more.
pause
 
cls
echo. \---------------------------------------------------\
echo.  \                   Pikachu (Lvl 4)                 \
echo.   \---------------------------------------------------\
pause
echo. Prof. Oak: Do you want to pick Pikachu?
echo. Be careful this pokemon is very energetic.
echo. Enter y to choose Pikachu
pause
set /p yno=
 
if '%yno%' == 'y' (
    set starter=Pikachu
    goto chosen
)
 
:chosen
cls
echo. Prof. Oak: Congrats! From here on you are now a pokemon trainer!
echo. Here, take this with you.
echo. (Pokegear received)
echo. Prof. Oak: This will help you along the way.
pause
 
cls
echo. Prof. Oak: Now your journey begins with %starter%
echo. Prof. Oak: Collect gym badges and compete in the Pokemon League.
echo. Prof. Oak: Good luck!
pause
 
:start
set starter-lvl=4
set starter-hp=20
set starter-att=2
set starter-def=2
set starter-spd=2
set starter-spatt=2
set starter-spdef=2
set mom=0
set fstone=0
set rwing=0
set leaguecup=0
 
::Maribou town
::Rienna city
::Vicarian city
::Aminos city
 
:city1
title Pokemon Batch alpha
cls
echo. You are in Maribou town
echo. Enter option number to pick an option (1,2,3,4)
echo. 1) Go to your home
echo. 2) Go to Pokemon Center
echo. 3) Go to Pokemon Lab
echo. 4) Go to tall grass to exit Maribou town
pause
set /p city1option=
 
if '%city1option%' == '1' goto city1-1
if '%city1option%' == '2' goto city1-2
if '%city1option%' == '3' goto city1-3
if '%city1option%' == '4' goto city1-4
 
:city1-1
cls
echo. \---------------------------------------------------\
echo.  \                         Home                      \
echo.   \---------------------------------------------------\
echo.      __!!_______________
echo.     /  !!             /\\
echo.    /  /__\           /  \\
echo.   /_________________/    \\
echo.   !                !  /\  !
echo.   !                ! /  \ !
echo.   !________________! !  ! !
echo.
pause
echo. You are inside your home
echo. Enter option number to pick an option (1,2,3)
echo. 1) Talk to your Mom
echo. 2) Eat food and take rest
echo. 3) Go back to town
pause
 
set /p city1-1option=
 
if '%city1-1option%' == '1' goto city1-1-1
if '%city1-1option%' == '2' goto city1-1-2
if '%city1-1option%' == '3' goto city1
 
:city1-1-1
cls
if '%mom%' == '0' (
    echo. Mom: %name%! I hate you and your unknown father.
	pause
    echo. Mom: Go wander around the world on foot for years and never come back!
	pause
    echo. Mom: But first take these running shoes.
	pause
    echo. Mom: These won't have any effect in PokeBatch but I'm just giving it so you don't complain.
    set mom=1
    pause
    goto city1-1
)
if '%mom%' == '1' (
    echo. Mom: What's the matter? Did you bring something for me?
	pause
    echo. Mom: No? Get the hell out of my house then! :D
    pause
    goto city1-1
)
if '%mom%' == '2' (
    echo. Mom: What's the matter? Did you bring something for me?
	pause
    echo. Mom: Ooooh! That's a HUGE diamond! I almost love you! :)
	pause
    echo. (Handed over the diamond)
	pause
    echo. Mom: Here, take this fire stone from your father's collection.
	pause
    echo. (Received Fire stone)
    set fstone=1
    set mom=3
    pause
    goto city1-1
)
if '%mom%' == '3' (
    echo. Mom: Yay! Did you bring something else for me?
	pause
    echo. Mom: No? Oh well, guess I still hate you. :)
    pause
    goto city1-1
)
if '%mom%' == '4' (
    echo. Mom: Well? What is it? A surprise you say?
	pause
    echo. (Hands over the Jade necklace)
	pause
    echo. Mom: OMG! O_O I love it!!
	pause
    echo. Mom: You deserve this Rainbow Wing
	pause
    echo. (Received Rainbow Wing)
    set rwing=1
    set mom=5
    echo. Mom: Let me quote your father.
	pause
    echo. "Only a true Pokemon Champion can make use of this Rainbow Wing."
	pause
    echo. "The legendary Ho-Oh will appear before only him who is pure of heart and has a strong will."
	pause
    echo. "He must go to the Bell Tower in Vicarian city at once."
	pause
    echo. "But there is one thing you should kno... "
	pause
    echo. Mom: And the rest is unreadable. Your crazy father and his ramblings about some legendary pokemon.
    pause
    goto city1-1
)
if '%mom%' == '5' (
    echo. Mom: You know what? You aren't that bad :)
    pause
    goto city1-1
)
if '%mom%' == '6' (
    echo. Mom: What the.. Is that a Ho-Oh? :O
	pause
    echo. Mom: That means your father wasn't a loser!
    pause
    goto city1-1
)
 
:city1-1-2
cls
echo. You ate lots of delicious food.. OM NOM NOM NOM
pause
echo. You are feeling sleepy. What was in the food?!
pause
echo. You wake up 12 hours later. Your %starter% has recovered his HP.
set /a starter-hp=10*%starter-lvl%
pause
goto :city1-1
 
:city1-2
cls
echo \---------------------------------------------------\
echo  \                   Pokemon Center                  \
echo   \---------------------------------------------------\
echo.
echo     ___________________
echo    /___________________\
echo    !       //_\\       !
echo    !_______\\_//_______!
echo    !     !  ___  !     !
echo    !     ! !   ! !     !
echo    !_____! !___! !_____!
echo.
echo You are inside the Pokemon Center
echo Enter option number to pick an option (1,2,3)
echo 1) Get your pokemon healed by Nurse Joy
echo 2) Get other services from Nurse Joy ;)
echo 3) Go back to town
pause
 
set /p city1-2option=
 
if '%city1-2option%' == '1' goto city1-2-1
if '%city1-2option%' == '2' goto city1-2-2
if '%city1-2option%' == '3' goto city1
 
:city1-2-1
cls
echo Nurse Joy: My my, your %starter% doesn't look very good
echo Nurse Joy: Here let me fix him with my love!
echo Your %starter% is blushed red
echo Nurse Joy: Here you go better than ever.
echo %starter%: %STARTER%!
echo Your %starter% has recovered his HP.
set /a starter-hp=10*%starter-lvl%
pause
goto city1-2
 
:city1-2-2
cls
echo %name%: Hey Joy, how about you show me your "Pokemons" ;)
if '%leaguecup%' == '0' (
echo Nurse Joy: I don't think you are trained enough to handle them kid.
echo Nurse Joy: Buzz off like a Beedrill before I doublekick you!
echo You run away to town hiding your face.
)
if '%leaguecup%' == '1' (
:: ;)
)
pause
goto city1
 
:city1-3
cls
echo \---------------------------------------------------\
echo  \                     Pokemon Lab                   \
echo   \---------------------------------------------------\
echo.
echo           _______
echo        .           .
echo     /      //_\\      \
echo    !_______\\ //_______!
echo    /___________________\
echo    !     !  ___  !     !
echo    !     ! /   \ !     !
echo    !_____! !___! !_____!
echo.
echo You are inside the Pokemon Lab
echo Enter option number to pick an option (1,2)
echo 1) Talk to Professor Oak
echo 2) Go back to town
pause
 
set /p city1-2option=
 
if '%city1-2option%' == '1' goto city1-3-1
if '%city1-2option%' == '2' goto city1
 
:city1-3-1
cls
echo Prof Oak: Oh hi %name% I am a little busy right now.
echo Prof Oak: Come back after the new version is out.
pause
goto city1
 
:city1-4
cls
echo. \---------------------------------------------------\
echo.  \                     Tall grass                    \
echo.   \---------------------------------------------------\
echo.
echo.    )\  )\ )\ )\ /(  (\ )\  )\  )\  /( /( )\  (\ (\ /)  )\
echo.    /( /( )\  (\ (\ /)  )\  )\  )\ )\ )\ /(  (\ )\  )\  )\
echo.    )\  (\ (\ /)  )\ (\ )\  )\  )\  /( /( )\ )\ )\ )\ /(  (\
echo.
echo. You stepped out of Maribou town.
echo. Since your town is very small you can already see Rienna city.
echo. Rienna city is famous for their berries and grass pokemon.
pause
cls
echo.
echo You are walking on tall grass
echo Something is inside the grass
pause>NUL
goto battle

:battle
cls
echo.\---------------------------------------------------\
echo. \           Ratzfatz (Lvl.3) Hp:100                \
echo.  \---------------------------------------------------\
echo.
echo. \---------------------------------------------------\
echo.  \          %starter% (Lvl.3) Hp:100                 \
echo.   \---------------------------------------------------\
echo.
echo.(1)Tackle
echo.(2)Silberview
echo.(3)Run away
choice /c 123 /n >nul
if %ERRORLEVEL%==1 goto battle1
if %ERRORLEVEL%==2 title Ratzfatz ist verwirrt!
if %ERRORLEVEL%==3 goto city1
pause>NUL


:battle1
cls
echo.\---------------------------------------------------\
echo. \           Ratzfatz (Lvl.3) Hp: 75                 \
echo.  \---------------------------------------------------\
echo.
echo. \---------------------------------------------------\
echo.  \          %starter% (Lvl.3) Hp:100                 \
echo.   \---------------------------------------------------\
echo.
echo.Ratzfatz HP ist gesunken!
pause>NUL
echo. Tatzfatz setzt Tackle ein
pause>NUL
goto battle2

:battle2
cls
echo.\---------------------------------------------------\
echo. \           Ratzfatz (Lvl.3) Hp: 75                 \
echo.  \---------------------------------------------------\
echo.
echo. \---------------------------------------------------\
echo.  \          %starter% (Lvl.3) Hp: 75                 \
echo.   \---------------------------------------------------\
echo.
echo.(1)Tackle
echo.(2)Silberview
echo.(3)Run away
choice /c 123 /n >nul
if %ERRORLEVEL%==1 goto battle3
if %ERRORLEVEL%==2 title Ratzfatz ist verwirrt!
if %ERRORLEVEL%==3 goto city1
pause>NUL

:battle3
cls
echo.\---------------------------------------------------\
echo. \           Ratzfatz (Lvl.3) Hp: 50                 \
echo.  \---------------------------------------------------\
echo.
echo. \---------------------------------------------------\
echo.  \          %starter% (Lvl.3) Hp: 75                 \
echo.   \---------------------------------------------------\
echo.
echo.Criticals hit!
pause>NUL
echo. Tatzfatz setzt Tackle ein!
pause>NUL
goto battle4

:battle4
cls
echo.\---------------------------------------------------\
echo. \           Ratzfatz (Lvl.3) Hp: 50                 \
echo.  \---------------------------------------------------\
echo.
echo. \---------------------------------------------------\
echo.  \          %starter% (Lvl.3) Hp: 50                 \
echo.   \---------------------------------------------------\
echo.
echo.(1)Tackle
echo.(2)Silberview
echo.(3)Run away
choice /c 123 /n >nul
if %ERRORLEVEL%==1 goto battle5
if %ERRORLEVEL%==2 title Ratzfatz ist verwirrt!
if %ERRORLEVEL%==3 goto city1

:battle5
cls
echo.\---------------------------------------------------\
echo. \           Ratzfatz (Lvl.3) Hp: 25                 \
echo.  \---------------------------------------------------\
echo.
echo. \---------------------------------------------------\
echo.  \          %starter% (Lvl.3) Hp: 50                 \
echo.   \---------------------------------------------------\
echo.
echo.Tatzfatz Lebensenergie ist gesunken!
pause>NUL
echo. Tatzfatz setzt Tackle ein!
pause>NUL
goto battle6

:battle6
cls
echo.\---------------------------------------------------\
echo. \           Ratzfatz (Lvl.3) Hp: 25                 \
echo.  \---------------------------------------------------\
echo.
echo. \---------------------------------------------------\
echo.  \          %starter% (Lvl.3) Hp: 25                 \
echo.   \---------------------------------------------------\
echo.
echo.(1)Tackle
echo.(2)Silberview
echo.(3)Run away
choice /c 123 /n >nul
if %ERRORLEVEL%==1 goto kampf7
if %ERRORLEVEL%==2 title Ratzfatz ist verwirrt!
if %ERRORLEVEL%==3 goto city1

:kampf7
cls
echo.\---------------------------------------------------\
echo. \           Ratzfatz (Lvl.3) Hp: 0                  \
echo.  \---------------------------------------------------\
echo.
echo. \---------------------------------------------------\
echo.  \          %starter% (Lvl.3) Hp: 25                 \
echo.   \---------------------------------------------------\
echo.
echo.Tatzfatz hat keine Lebensenergie mehr!
pause>NUL
echo.%name% hat den Kampf mit %starter% gewonnen,
echo.und damit Riena City fregeschalten
pause>NUL
goto citya1

:citya1
title Pokemon Batch alpha
cls
echo. You are in Maribou town
echo. Enter option number to pick an option (1,2,3,4,5)
echo. 1) Go to your home
echo. 2) Go to Pokemon Center
echo. 3) Go to Pokemon Lab
echo. 4) Go to tall grass to exit Maribou town
echo. 5) Go to Rienna City!
pause
set /p city1option=
 
if '%city1option%' == '1' goto city1-1
if '%city1option%' == '2' goto city1-2
if '%city1option%' == '3' goto city1-3
if '%city1option%' == '4' goto city1-4
if '%city1option%' == '5' goto Riennacity

:Riennacity
title Pokemon Batch alpha
cls
echo. You are in Riennacity
echo. Enter option number to pick an option (1,2,3)
echo. 1) Swap your Pokemon
echo. 2) Stone Arena
echo. 3) Go to Maribou town
pause
set /p city1option=
 
if '%city1option%' == '1' goto swapPokemon
if '%city1option%' == '2' goto stonearena
if '%city1option%' == '3' goto city1

:swapPokemon
cls
echo.Oh I would like to have 
pause
echo.%starter%, %name% you can 
pause
echo.can have my Abra then
pause
echo.would you like to swap?
echo.To Swap press yes
pause
set /p yno=
 
if '%yno%' == 'yes' (
    set starter=Abra
    goto Riennacity
)


:stonearena
cls
echo. \---------------------------------------------------\
echo. \                    Stone Arena                    \
echo. \---------------------------------------------------\
echo.
echo.     ___________________
echo.    /___________________\
echo.    !       //_\\       !
echo.    !_______\\_//_______!
echo.    !     !  ___  !     !
echo.    !     ! !   ! !     !
echo.    !_____! !___! !_____!
echo.You are inside the first arena...
pause
echo.Defeat all People, to get the Arena-Boss!
pause
goto chattel

:chattel
cls
echo.Arena-Boss: I will defeat your
pause
echo. very bad Pokemon!
pause
echo.Taubsi I choose you!
goto chattel0

:chattel0
cls
echo.\---------------------------------------------------\
echo. \           Taubsi (Lvl.3) Hp:100                   \
echo.  \---------------------------------------------------\
echo.
echo. \---------------------------------------------------\
echo.  \          %starter% (Lvl.3) Hp:100                 \
echo.   \---------------------------------------------------\
echo.
echo.(1)Tackle
echo.(2)Silberview
echo.(3)Run away
choice /c 123 /n >nul
if %ERRORLEVEL%==1 goto chattle1
if %ERRORLEVEL%==2 title Taubsi ist verwirrt!
if %ERRORLEVEL%==3 goto Riennacity
pause>NUL

:chattle1
cls
echo.\---------------------------------------------------\
echo. \           Taubsi (Lvl.3) Hp: 75                   \
echo.  \---------------------------------------------------\
echo.
echo. \---------------------------------------------------\
echo.  \          %starter% (Lvl.3) Hp:100                 \
echo.   \---------------------------------------------------\
echo.
echo.Taubsis HP ist gesunken!
pause>NUL
echo.Taubsi setzt Tackle ein
pause>NUL
goto chattle2

:chattle2
cls
echo.\---------------------------------------------------\
echo. \           Taubsi (Lvl.3) Hp: 75                   \
echo.  \---------------------------------------------------\
echo.
echo. \---------------------------------------------------\
echo.  \          %starter% (Lvl.3) Hp: 75                 \
echo.   \---------------------------------------------------\
echo.
echo.(1)Tackle
echo.(2)Silberview
echo.(3)Run away
choice /c 123 /n >nul
if %ERRORLEVEL%==1 goto chattle3
if %ERRORLEVEL%==2 title Taubsi ist verwirrt!
if %ERRORLEVEL%==3 goto Riennacity
pause>NUL

:chattle3
cls
echo.\---------------------------------------------------\
echo. \           Taubsi (Lvl.3) Hp: 50                   \
echo.  \---------------------------------------------------\
echo.
echo. \---------------------------------------------------\
echo.  \          %starter% (Lvl.3) Hp: 75                 \
echo.   \---------------------------------------------------\
echo.
echo.Criticals hit!
pause>NUL
echo. Taubsi setzt Tackle ein!
pause>NUL
goto chattle4

:chattle4
cls
echo.\---------------------------------------------------\
echo. \           Taubsi (Lvl.3) Hp: 50                   \
echo.  \---------------------------------------------------\
echo.
echo. \---------------------------------------------------\
echo.  \          %starter% (Lvl.3) Hp: 50                 \
echo.   \---------------------------------------------------\
echo.
echo.(1)Tackle
echo.(2)Silberview
echo.(3)Run away
choice /c 123 /n >nul
if %ERRORLEVEL%==1 goto chattle5
if %ERRORLEVEL%==2 title Taubsi ist verwirrt!
if %ERRORLEVEL%==3 goto Riennacity

:chattle5
cls
echo.\---------------------------------------------------\
echo. \           Taubsi (Lvl.3) Hp: 25                   \
echo.  \---------------------------------------------------\
echo.
echo. \---------------------------------------------------\
echo.  \          %starter% (Lvl.3) Hp: 50                 \
echo.   \---------------------------------------------------\
echo.
echo.Taubsis Lebensenergie ist gesunken!
pause>NUL
echo. Taubsi setzt Tackle ein!
pause>NUL
goto chattle6

:chattle6
cls
echo.\---------------------------------------------------\
echo. \           Taubsi (Lvl.3) Hp: 25                   \
echo.  \---------------------------------------------------\
echo.
echo. \---------------------------------------------------\
echo.  \          %starter% (Lvl.3) Hp: 25                 \
echo.   \---------------------------------------------------\
echo.
echo.(1)Tackle
echo.(2)Silberview
echo.(3)Run away
choice /c 123 /n >nul
if %ERRORLEVEL%==1 goto bampf7
if %ERRORLEVEL%==2 title Taubsi ist verwirrt!
if %ERRORLEVEL%==3 goto Riennacity

:bampf7
cls
echo.\---------------------------------------------------\
echo. \           Taubsi (Lvl.3) Hp: 0                    \
echo.  \---------------------------------------------------\
echo.
echo. \---------------------------------------------------\
echo.  \          %starter% (Lvl.3) Hp: 25                 \
echo.   \---------------------------------------------------\
echo.
echo.Taubsi hat keine Lebensenergie mehr!
pause>NUL
echo.%name% hat den Kampf mit %starter% gewonnen!
echo.und ist damit Arena-Boss
pause
echo.Arenaboss: Argh you defeat me!
pause
echo.Ihate you and your %starter%
pause>NUL
goto Riennacity2

:Riennacity2
title Pokemon Batch alpha
cls
echo. You are in Riennacity
echo. Enter option number to pick an option (1,2,3,4)
echo. 1) Swap your Pokemon
echo. 2) Stone Arena
echo. 3) Go to Maribou town
echo  4) Reset Game
pause
set /p city1option=
 
if '%city1option%' == '1' goto swapPokemon
if '%city1option%' == '2' goto stonearena1
if '%city1option%' == '3' goto cityb1
if '%city1option%' == '4' exit

:stonearena1
cls
echo. \---------------------------------------------------\
echo. \                    Stone Arena                    \
echo. \---------------------------------------------------\
echo.
echo.     ___________________
echo.    /___________________\
echo.    !       //_\\       !
echo.    !_______\\_//_______!
echo.    !     !  ___  !     !
echo.    !     ! !   ! !     !
echo.    !_____! !___! !_____!
echo.You are the Arena-Boss
pause
goto Riennacity2

:cityb1
title Pokemon Batch alpha
cls
echo. You are in Maribou town
echo. Enter option number to pick an option (1,2,3,4,5)
echo. 1) Go to your home
echo. 2) Go to Pokemon Center
echo. 3) Go to Pokemon Lab
echo. 4) Go to tall grass to exit Maribou town
echo. 5) Go to Rienna City!
pause
set /p city1option=
 
if '%city1option%' == '1' goto city1-1
if '%city1option%' == '2' goto city1-2
if '%city1option%' == '3' goto city1-3
if '%city1option%' == '4' goto city1-4
if '%city1option%' == '5' goto Riennacity2


 








