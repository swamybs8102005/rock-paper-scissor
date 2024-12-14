let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const gencmpchoice=()=>
{
    //rock,paper,scissors;
    const options=["rock","paper","scissors"];
    const ranindex=Math.floor(Math.random()*3);
    return options[ranindex];

}

const userscorep=document.querySelector("#user-score")
const computerp=document.querySelector("#computer-score")
const showwinner = (userwin,userchoice,compchoice)=>
{
    if(userwin)
    {
        userscore++;
        userscorep.innerText=userscore;
        msg.innerText=`You Win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        computerscore++;
        computerp.innerText=computerscore
        msg.innerText=`You lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        }

}
const drawgame= ()=>
{
    console.log("game draw");
    msg.innerText="You draw.play again.";
    msg.style.backgroundColor="#081b31";
}
const playgame= (userchoice)=>
{
    console.log("user chioce",userchoice);
    //generate computer choice;
  const compchoice=gencmpchoice()
    console.log("computer chioice",compchoice);
    
    if(userchoice===compchoice)
    {
        drawgame();
    }
    else
    {
        let userwin=true;
        if(userchoice==="rock")
        {
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper")
        {
            userwin=compchoice==="scissors"?false:true;

        }
        else 
        {
            userwin=compchoice==="rock"?false:true;

        }
        showwinner(userwin,userchoice,compchoice);
    }

}
choices.forEach((choice)=>
{
    console.log(choice);
    choice.addEventListener("click",()=>
    {
        
        const userchoice=choice.getAttribute("id");
        // console.log("choice clicked",userchoice);
        playgame(userchoice);
    })
})