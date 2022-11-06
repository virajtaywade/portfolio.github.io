$(document).ready(function(){


$('.name1').hover(function(){
    $('.name1').load("demo.txt");
    
});
$('.name1').mouseleave(function(){
    $('.name1').load("original.txt");
    
});

$('.imageloader').hover(function(){
    $('.description').show("description.txt");
});
    









});