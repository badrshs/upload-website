var ary=[];
ary[0]={
    name:"q1",
    question:"What does HTML stand for?",
    choice1:"Hyper Text Markup Language",
    choice2:"Hyper Text Language Markup",
    choice3:"Hyper Language",
    answer:"1"
};
ary[1]={
    name:"q2",
    question:"What does CSS stand for?",
    choice1:"Style Sheets",
    choice2:"Cascading Style Sheets",
    choice3:"Cascading Sheets",
    answer:"2"
};
ary[2]={
    name:"q3",
    question:"Which HTML attribute is used to define inline styles?",
    choice1:"styles",
    choice2:"font",
    choice3:"style",
    answer:"3"
};
ary[3]={
    name:"q4",
    question:"How do you insert a comment in a CSS file?",
    choice1:"// this is a comment //",
    choice2:"/* this is a comment */",
    choice3:" ' this is a comment",
    answer:"2"
};
printQuiz();

function calc(){
    var sum = 0;
    var flag = true;

    for(i =0 ; i< ary.length;i++){
        if(document.querySelector("input[name='"+ary[i].name+"']:checked") == null){
            flag = false;
        }else if(document.querySelector("input[name='"+ary[i].name+"']:checked").value == ary[i].answer){
            sum++;
        }
    }
    if(flag){
        alert("Your Grade = "+sum+"/"+ary.length);
    }else{
        alert("Solve All question First !!!!");
    }
}    

function printQuiz(){
    var text= "<h1 style = \"margin-left: 200px ; margin-bottom: 40px;\">Answeer The Quiz</h1>";
    for(i =0 ; i< ary.length;i++){
        text+="<lable style = \"margin-left: -25px;\">"+ary[i].question+"</lable><br>";
        text+="<input type='radio' id='a"+i+"' name='"+ary[i].name+"' value='1'>"+ary[i].choice1+"<br>";
        text+="<input type='radio' name='"+ary[i].name+"' value='2'>"+ary[i].choice2+"<br>";
        text+="<input type='radio' name='"+ary[i].name+"' value='3'>"+ary[i].choice3+"<br><hr>";
    }
    text+="<button class='btn login' onclick='calc()' style=\"margin-left: 250px; margin-bottom: 50px;\">Calculate</button>";
    document.write(text);
}