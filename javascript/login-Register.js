


// start loading page




$(window).on("load",function(){
    $(".load").hide()
    $(".contentPage").show()
    
  })
  
  // end loading page








// start navbar all width device



$(".collapseBtn").click(function() {
    $(".navWidthSmall").animate({"right":"0"},500)
 })
 
 $(".closeNavMobile").click(function() {
     $(".navWidthSmall").animate({"right":"-600"},500)
 })
 
 
 
 
 $(".toggle-icon").click(function() {
 
     if($(this).attr("toggleIcon") === "0") {
     $(".sub-menu:eq("+ $(".toggle-icon").index(this) +")").slideDown()
     $(this).children().attr("class","las la-minus")
         $(this).attr("toggleIcon","1")
     } else {
         $(".sub-menu:eq("+ $(".toggle-icon").index(this) +")").slideUp()
         $(this).children().attr("class","las la-plus")
             $(this).attr("toggleIcon","0")
     }
 
 })
 
 
 
 
 
 $(".toggle-inside-icon").click(function() {
 
     if($(this).attr("toggleInsideIcon") === "0") {
        $(".sub-menu-shopGrid:eq("+ $(".toggle-inside-icon").index(this) +")").slideDown()
        $(this).children().attr("class","las la-minus")
        $(this).attr("toggleInsideIcon","1")
     } else {
        $(".sub-menu-shopGrid:eq("+ $(".toggle-inside-icon").index(this) +")").slideUp()
        $(this).children().attr("class","las la-plus")
        $(this).attr("toggleInsideIcon","0")
     }
 
    
 })
 
 
 
 $(".item-nav-home").hover(function() {
     $(".iTemsDropdownHome").fadeToggle(500)
 })
 
 
 
 $(".item-nav-pages").hover(function() {
     $(".iTemsDropdownPages").fadeToggle()
 })
 
 $(".item-nav-blog").hover(function() {
     $(".iTemsDropdownBlog").fadeToggle()
 })
 
 
 $(".searchAreaBtn").click(function() {
     $(this).siblings().focus();
 })
 // end navbar all width device
 














//   start input password


$("#password").on("keyup", function() {
    
    if($(this).val() === "") {
    $(this).siblings().hide();
    } else {
        $(this).siblings().show()
    }
})



$("#rpassword").on("keyup",function() {
    if($(this).val() === "") {
        $(this).siblings().hide();
        } else {
            $(this).siblings().show()
        }
})


$("#form-password").on("keyup",function() {
    if($(this).val() === "") {
        $(this).siblings().hide();
        } else {
            $(this).siblings().show()
        }
})




$(".show-pass-0 i").click(function() {
    if($(this).parent().attr("toggle") === "0") {
   $("#password").attr("type","text");
   $(this).parent().attr("toggle","1")
    } else {
        $("#password").attr("type","password");
        $(this).parent().attr("toggle","0")
    }
})







$(".show-pass-1 i").click(function() {

    if($(this).parent().attr("toggle") === "0") {

        $("#form-password").attr("type","text");
        $(this).parent().attr("toggle","1")
    }
       
    else {
             $("#form-password").attr("type","password");
             $(this).parent().attr("toggle","0")
         }
         
})




$(".show-pass-2 i").click(function() {

    if($(this).parent().attr("toggle") === "0") {

        $("#rpassword").attr("type","text");
        $(this).parent().attr("toggle","1")
    }
       
    else {
             $("#rpassword").attr("type","password");
             $(this).parent().attr("toggle","0")
         }
         
})






