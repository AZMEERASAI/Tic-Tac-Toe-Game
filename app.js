let btns=document.querySelectorAll(".btn");
let reset=document.querySelector("#reset");
let newgamebtn=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".massage-container");
let p=document.querySelector("p");
let turno=true;
let turnx=false;
const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const resetgame=()=>{
    let turno=true;
     anebleallbtn();
     msgcontainer.classList.add("hide")
}
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>
    {
   // console.log("buttons are clicked");
    if(turno&&!turnx)
    {
        btn.innerText="o";
        turno=false;
        turnx=true;
    }
    else if(turnx&&!turno)
    {
       btn.innerText="x";
        turno=true;
        turnx=false;
    }
    btn.disabled=true;
    winner();
    
    });
});
const disableallbtn=()=>
{
    for(let btn of btns)
    {
        btn.disabled=true;
    }
}
const anebleallbtn=()=>{
    for(let btn of btns)
        {
            btn.disabled=false;
            btn.innerText="";
        }
}
const showwinner=(winner)=>
{
   p.innerText=`Player ${winner.toUpperCase()} Won The Match`;
   msgcontainer.classList.remove("hide");
   disableallbtn();
}
let winner=()=>
{
    for(let patterns of win)
    {
       //console.log(patterns[0],patterns[1],patterns[2]);
       let pos1val=btns[patterns[0]].innerText;
       let pos2val=btns[patterns[1]].innerText;
       let pos3val=btns[patterns[2]].innerText;
       if(pos1val!=""&&pos2val!=""&&pos3val!="")
       {
        if(pos1val===pos2val&&pos2val===pos3val)
        {
            //console.log(`player ${pos1val.toUpperCase()} won the match`);
            showwinner(pos1val);
        }
       }
    }
};
newgamebtn.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame)