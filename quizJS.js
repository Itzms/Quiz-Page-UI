document.addEventListener('DOMContentLoaded', ()=>{
       document.getElementById("gkQuiz").style.display="none";

       
});
function quizPage(from, to){
        document.getElementById(from).style.display="none";
        document.getElementById(to).style.display="block";
}
function act(from, to, token){
   const alertBox = document.querySelector('.alert-overlay');
    if(token===1){
        quizPage(from,to);
        alertBox.style.display = "none";
    }
    else if(token===0){
        alertBox.style.display = "none";
    }
    else{
        alertBox.style.display = "block";
    }
}
