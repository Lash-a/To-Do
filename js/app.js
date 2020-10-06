$("ul").on("click", "li", function () {  
    $(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function (event){
    // მიწვდება span-ის მშობელ ელემენტს და fadeout-მეთოდის ფუნქციით
    // წაშლის ამ li-ს
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    // this method stops event from firing on parent elements
    event.stopPropagation();
});

$("input[type='text']").keypress(function (e) { 
    if(e.which === 13){
       let todoText =  $(this).val();
        $(this).val("");
        if(todoText !== ""){
            $("ul").append("<li> <span><i class='fa fa-trash'> </i></span> " + todoText + "</li>")
        }
      
    }
 });

 $(".fa-plus").click(function () { 
    $("input[type='text']").fadeToggle();
  });
