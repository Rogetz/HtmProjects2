/*use this js to optimize the toggling of the visibility of the two bars 
when one is active the other should be invisible and ofcourse I have the visibility hidden class
that can be addded, toggled or removed altogether*/

/*The code in jquery*/
/*$(document).ready(function(){
    alert("Jquery functioning");
    /*test this functionality later seems like jquery has some issues. */
    /*$(".menu-titles").click(function(){
        alert("clicked the list-container");
        $(this).children(".drop-down-group").addClass("active-drop-down-group");
        $(this).siblings(".menu-titles").children(".drop-down-group").removeClass("active-drop-down-group");
    });
    $(".search-div").click(function(){
        alert("clicked the search div");
    });
    $(".right").click(function(){
        alert("the drop-down button was clicked");
    })
});*/
/*----End----*/

/*Code in vanilla javascript*/
/*I dont know where the problem is. the code seems just fine.
I'll probably run it somewhere else and see if it works*/
var listContainer = document.querySelectorAll("list-container");
var searchForm = document.querySelector(".search-form");
var rightBar = document.querySelector(".right");
var menuTitles = document.querySelectorAll(".menu-titles");

window.addEventListener("load",function(){
    /*listContainer.forEach(function(listItem,index){
        listItem.addEventListener("click",function(){
            window.alert("menu-Item clicked, index "+index+" clicked");
        });
    });*/
    searchForm.addEventListener("click",function(e){
        window.alert("you clicked on the menu");
    });
    /*This javascript function works well except for selecting the childNodes
    so I am trying it with jquery but the foreach loop and
    event listener work really well.*/
    /*menuTitles.forEach(function(menuTitle,index){
        menuTitle.addEventListener("click",function(){
            menuTitle.childNodes[0].classList.add("active");
        });
    });*/
    /*And well JQuery just worked perfectly.*/
    $(".menu-titles").click(function(){
        $(".menu-titles").children(".drop-down-group").removeClass("active");
        $(this).children(".drop-down-group").addClass("active");
        /*not tested the rotate feature, taste it later though.*/
        $(this).next(".fa-circle-chevron-down").css("rotate : -90deg");
    });
});