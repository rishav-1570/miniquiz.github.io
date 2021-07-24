console.log("This is a very simple Quiz application");
let startbtn = document.querySelector(".startbtn");
let infobox = document.querySelector(".info_box");
let info_quit = infobox.querySelector(".buttons .quit");
let info_start = infobox.querySelector(".buttons .restart");
let quizbox = document.querySelector(".quiz_box");
let resbox = document.querySelector(".result_box");
let timeleft = quizbox.querySelector(".quiz_head .time_text .time_left");
let timeline = quizbox.querySelector(".quiz_head .time_line");


startbtn.addEventListener("click",()=>{
    //console.log("fired");
    startbtn.style="display:none;"
    infobox.style="";
});

info_quit.addEventListener("click",()=>{
    startbtn.style=""
    infobox.style="display:none;";
});


let mymarks=0;
let que_count=0;
let intervalID;
const timedur=15;
let timelineID;

const optionss = quizbox.querySelectorAll(".option_list .option span");

info_start.addEventListener("click",()=>{
    infobox.style="display:none;";
    quizbox.style="";

    for(let i=0;i<4;i++)
    {
        optionss[i].parentElement.addEventListener("click",()=>{
            optclicked(i,optionss,que_count);
        });
    }

    showque();
    starttimer(timedur);
    
});

let nextque = quizbox.querySelector(".quiz_foot .next_que");
nextque.addEventListener("click",()=>{
    que_count++;

    if(que_count>=questions.length)
    {
        clearInterval(intervalID);
        clearInterval(timelineID);
        restime();
    }
    else
    {
        clearInterval(timelineID);
        clearInterval(intervalID);

        showque();
        
        starttimer(timedur);
    }
});

function restime(){
    //console.log("restime "+ mymarks);
    quizbox.style="display:none;";
    resbox.style="";

    const resttext = resbox.querySelector(".result_text").lastElementChild;
    const excitmentspan = resttext.previousElementSibling;
    if(mymarks<(questions.length)/3)
        excitmentspan.textContent = "Sorry";
    const markstext = resttext.firstElementChild;
    const tmarkstext = resttext.lastElementChild;
    markstext.textContent = mymarks;
    tmarkstext.textContent = questions.length;

}

    
const exitbtn = resbox.querySelector(".result_btn .quitbtn");
exitbtn.addEventListener("click",()=>{
    location.reload();
});


function showque(){
    const que_text=quizbox.querySelector(".que_text span");
    que_text.textContent=questions[que_count].numb + ". " + questions[que_count].que;
    
    for(let i=0;i<4;i++)
    {
        optionss[i].parentElement.className = "option";

        optionss[i].textContent=questions[que_count].options[i];
        optionss[i].nextElementSibling.className = "icon";
        optionss[i].nextElementSibling.firstElementChild.className = "fas";
        optionss[i].nextElementSibling.style="display:none;";
    }
    const quiz_foot = quizbox.querySelector(".quiz_box .quiz_foot .foot_text");
    quiz_foot.firstElementChild.textContent=questions[que_count].numb;
    quiz_foot.lastElementChild.textContent=questions.length;
}

function optclicked(optnum,optionss,qnum){
    clearInterval(intervalID);
    clearInterval(timelineID);
    //console.log(optnum);
    //console.log("run");
    let anss = questions[qnum].ans;

    if(optionss[optnum].textContent == anss)
    {
        mymarks+=1;
    }

    for(let i=0;i<4;i++)
    {
        if(optionss[i].textContent == anss)//correct
        {
            if(i!=optnum)
            {
                optionss[optnum].parentElement.classList.add("incorrect");
                optionss[optnum].nextElementSibling.style="";
                optionss[optnum].nextElementSibling.classList.add("cross");
                optionss[optnum].nextElementSibling.firstElementChild.classList.add("fa-times");
            }
            
            optionss[i].parentElement.classList.add("correct");
            optionss[i].nextElementSibling.style="";
            optionss[i].nextElementSibling.classList.add("tick");
            optionss[i].nextElementSibling.firstElementChild.classList.add("fa-check");
            
        }
        else if(i!=optnum)
        {
            optionss[i].parentElement.classList.add("notchoosen");
        }
    }
}

function nooptclicked(optionss,qnum){

    clearInterval(intervalID);
    clearInterval(timelineID);
    let anss = questions[qnum].ans;

    for(let i=0;i<4;i++)
    {
        if(optionss[i].textContent == anss)//correct
        {

            optionss[i].parentElement.classList.add("correct");
            optionss[i].nextElementSibling.style="";
            optionss[i].nextElementSibling.classList.add("tick");
            optionss[i].nextElementSibling.firstElementChild.classList.add("fa-check");
            
        }
        else
        {
            optionss[i].parentElement.classList.add("notchoosen");
        }
    }
}

function starttimer(time){
    intervalID = setInterval(()=>{
        timeleft.textContent=time;
        time--;
        if(time<0)
        {
            nooptclicked(optionss,que_count);
        }
    },1000);
    starttimeline(0);
}

function starttimeline(wdth){
    timelineID = setInterval(()=>{
        wdth+=1;
        timeline.style.width = wdth + "px";
        if(wdth>549)
        {
            clearInterval(timelineID);
        }
    },29);
}


