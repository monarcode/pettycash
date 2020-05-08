$(document).ready(function(){
    $("#logo-green").hide();
    
    $(window).scroll(function(){
        let srcl = $(window).scrollTop();

        if(srcl<20){
            $("#logo-white").show();
            $("#logo-green").hide();
        } else {
            $("#logo-white").hide();
            $("#logo-green").show();
        }

        $("#navbar").toggleClass("scroll-mode",srcl>20);
        $("#navbar").toggleClass("shadow-lg",srcl>20);
        
    });
        // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });

});