# miniquiz.github.io
This is a mini quiz application with timer. it uses questions from javascript array.

//this application only uses html,css,javascript.it doesn't use any backend database.

//How to use
1.add all the 4 files in the same folder.
2.open that folder in vscode.
3.then right click on `index.html` file in left bar of vs code.
4.open with live server.
5. congrats you are done.Enjoy the mini quiz application.

// to add questions
1. You can add questions in `questions.js` file according to the format bellow.
    {
        numb: 1, //quetion number
        que: "What does HTML stands for ?",  //write your question here
        ans:"Hyper Text Preprocessor",      //write your answer here
        options:[
            "Hyper Text Preprocessor",     //option-1
            "Hyper Text markup",           //option-2
            "Hyper Text multi",            //option-3
            "Hyper Text tool"              //option-4
        ]
    }
