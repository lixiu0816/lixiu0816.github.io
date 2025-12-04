document.addEventListener("DOMContentLoaded", () => {
    const emailButton = document.getElementById("email-button");
    emailButton.addEventListener("click",()=>{
        navigator.clipboard.writeText("newthread-geek@outlook.com")
        .then(()=>{
            alert("Geek的邮箱已将已经复制到剪切板了！")；
        })
            .catch(err=>{
                alert("复制失败，请手动复制邮箱~");
            });
        });
    });

    /*问题回答*/
    document.addEventListener("DOMContentLoaded",function ()  {
    const questions=    
    document.querySelectorAll('.faq-question');
    questions.forEach(question=>{
        question.addEventListener('click',()=>{
            const answer=question.nextElementSibling;
            const isHidden=getComputedStyle(answer).display==='none';
        if(isHidden){
            answer.style.display='block';
        }    
        else{
            answer.style.display='none'
        } 
        });
        });
    });    






































































