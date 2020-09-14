window.onload = function() {

    var toggleMenu = document.querySelector(".toggle-menu");
    var hello = document.querySelector(".hello");
    var article = document.querySelector("article");
    var arrow = document.querySelector(".arrow");

    toggleMenu.addEventListener("click", function() {
        article.classList.add("foreground");
    });

    arrow.addEventListener("click", function() {
        article.classList.remove("foreground");
    })


    var wordToChange = document.getElementById("word-to-change");
    
    
    function changeWord() {

        if (wordToChange.innerHTML === "LEGACY") {
            wordToChange .innerHTML= "RECOGNITION";
            console.log(wordToChange)
        } else {
            wordToChange.innerHTML = "LEGACY";
            console.log(wordToChange);
        }
    }

    setInterval(changeWord, 2000)

    var checkboxes = document.querySelectorAll(".checkbox");

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("click", function(e) {
            e.target.style.background = "#F4A460";
        })
    }); 

    /*function changeColour() {
        for(var i=0; i<checkboxes.length; i++) {
            checkboxes[i].style.background = "#F4A460";
        }
    }

    for(var i=0; i<checkboxes.length; i++) {
        checkboxes[i].onclick = changeColour;
    }*/

    var formFirstPage =  document.querySelector("#form-first-page");
    var formSecondPage =  document.querySelector("#form-second-page");
    var formThirdPage =  document.querySelector("#form-third-page");
    var backArrow = document.querySelector("#back-arrow");
    var nextArrow = document.querySelector("#next-arrow");
    var backArrowContainer = document.querySelector("#previous-arrow");
    var nextArrowContainer = document.querySelector("#next-arrow");

    console.log(formFirstPage, formSecondPage, formThirdPage, backArrow, nextArrow);

    backArrowContainer.classList.add("no-show");
    
    nextArrow.addEventListener("click", function() {
        formFirstPage.style.display = "none";
        formSecondPage.style.display = "flex";
        backArrowContainer.classList.remove("no-show");
        nextArrow.addEventListener("click", function() {
            formSecondPage.style.display = "none";
            formThirdPage.style.display = "flex";
            nextArrowContainer.classList.add("no-show");
            backArrow.addEventListener("click", function() {
                formThirdPage.style.display = "none";
                formSecondPage.style.display = "flex";
                nextArrowContainer.classList.remove("no-show");
                backArrow.addEventListener("click", function() {
                    formSecondPage.style.display = "none"; 
                    formFirstPage.style.display = "flex"; 
                    backArrowContainer.classList.add("no-show");
                    nextArrowContainer.classList.remove("no-show");
                })
            })
        })
    })

    /*backArrow.addEventListener("click", function() {
        var pages = [formFirstPage, formSecondPage, formThirdPage]; 
        formSecondPage.style.display = "none";
        formSecondPage.previousElementSibling.display = "flex";
        backArrowContainer.classList.add("no-show");
    })*/

}