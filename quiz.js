function submitAnswers(){
	var total=10;
	var score=0;
    //getting user input
	var q1= document.forms["quizform"]["q1"].value;
	var q2= document.forms["quizform"]["q2"].value;
	var q3= document.forms["quizform"]["q3"].value;
	var q4= document.forms["quizform"]["q4"].value;
	var q5= document.forms["quizform"]["q5"].value;
	var q6= document.forms["quizform"]["q6"].value;
	var q7= document.forms["quizform"]["q7"].value;
	var q8= document.forms["quizform"]["q8"].value;
	var q9= document.forms["quizform"]["q9"].value;
	var q10= document.forms["quizform"]["q10"].value;

	//validation
	
     for(var i=1;i<=10;i++){
     	if(eval('q'+i)==null || eval('q'+i)==""){
		alert("You missed question "+i);
		return false;
	}
     }
     //set correct answers
     var answers=["b","a","c","b","b","c","d","b","d","d"];
     //check answers
    /* for(var i=1;i<=10;i++){
     	if(eval('q'+i==answers[i-1]){
     	score++;
     	 }
     alert("You scored "+score+" out of "+total);
    
     }*/
     if(q1==answers[0]){
     	score++;
     }
     if(q2==answers[1]){
     	score++;
     }
     if(q3==answers[2]){
     	score++;
     }
     if(q4==answers[3]){
     	score++;
     }
     if(q5==answers[4]){
     	score++;
     }
     if(q6==answers[5]){
     	score++;
     }
     if(q7==answers[6]){
     	score++;
     }
     if(q8==answers[7]){
     	score++;
     }
     if(q9==answers[8]){
     	score++;
     }
     if(q10==answers[9]){
     	score++;
     }

     var results=document.getElementById("results");
     results.innerHTML="<h3>You scored <span>"+score+"</span> out of <span>"+total+"</span></h3>";
     alert("You scored "+score+" out of "+total);
     return false;

}
