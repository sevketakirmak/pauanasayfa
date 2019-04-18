var corporateOpen = true;
var academicOpen = true;
var researchOpen = true;
var socialOpen = true;
var studentOpen = true;
//Mmenu code
jQuery(document).ready(function() {
    $("#menu").mmenu({
        "navbars": [{
            "position": "bottom",
            "content": [
                "<a style='background-color:#004081; color: #fff;' href='//www.pau.edu.tr/pau/en'>English</a>"
            ]
        }],
        "extensions": [
            "position-back",
            "fx-menu-fade",
            "fx-panels-slide-0",
            "fx-listitems-slide",
            "pagedim-black",
            "shadow-page"
        ]
    });
});
var search=true;
var searchopen=false;
$("#searchBtn").click(function(){
    if(search){
        $("#search").css("display", "block");
        $("#serarchInput").show('slide', {direction: 'right'}, 500);
        search=false;
    }
    else{
        $("#searchPreview").css("display", "none");
        $("#serarchInput").hide('slide', {direction: 'right'}, 500, function(){
            $("#search").css("display", "none");
        });
        search=true;
    }
    searchopen=false;
});
$("#serarchInput").click(function(){
    $("#searchPreview").css("display", "block");
});
$("#msearchText").click(function(){
    $("#msearchPreview").css("display", "block");
});


msearch=true;
var msearchopen=false;
$("#msearchBtn").click(function(){
    if(msearch){
        $("#msearchText").show('slide', {direction: 'right'}, 500);
        msearch=false;
    }
    else{
        $("#msearchPreview").css("display", "none");
        $("#msearchText").hide('slide', {direction: 'right'}, 500);
        msearch=true;
    }
    msearchopen=false;
});
function alltrue(){
    corporateOpen = true;
    academicOpen = true;
    researchOpen = true;
    socialOpen = true;
    studentOpen = true;
}
/*
$( "#buttons div:nth-last-child(2) .btn").css({background:"#014784", color:"white"});*/
$( "#buttons div:nth-last-child(1) .btn").css({background:"#014784", color:"white"})
$(function(){
	$('#aboutUs').slimScroll({
        alwaysVisible: true,
        railVisible: true,
        size:'7.5px'
    });
});
//Hizli Erisim kodları.
var clickDfast = false;
var dfast=true;
$("#dropFast").click(function(){
    if(dfast){
        $("#mainHead .dropdown-menu ").slideDown("fast");
        $(this).addClass("bgBlue");
        dfast=false;
    }
    else{
        $("#mainHead .dropdown-menu ").slideUp("fast");
        $(this).removeClass("bgBlue");
        dfast=true;
    }
    clickDfast = false;
});
/***********************************/
//Mainnav kodları
$("#corporateBtn").click(function(){
    if(corporateOpen){
        close();
        $("#corporate").addClass("open");
        $(this).addClass("spMenu");
        alltrue();
        corporateOpen=false;
    }
    else{
        $("#corporate").removeClass("open");
        $(this).removeClass("spMenu");
        corporateOpen=true;
    }
});
$("#academicBtn").click(function(){
    if(academicOpen){
        close();
        $("#academic").addClass("open");
        $(this).addClass("spMenu");
        alltrue();
        academicOpen=false;
    }
    else{
        $("#academic").removeClass("open");
        $(this).removeClass("spMenu");
        academicOpen=true;
    }
});
$("#researchBtn").click(function(){
    if(researchOpen){
        close();
        $("#research").addClass("open");
        $(this).addClass("spMenu");
        alltrue();
        researchOpen = false;
    }
    else{
        $("#research").removeClass("open");
        $(this).removeClass("spMenu");
        researchOpen=true;
    }
});
$("#socialBtn").click(function(){
    if(socialOpen){
        close();
        $(".social").addClass("open");
        $(this).addClass("spMenu");
        alltrue();
        socialOpen = false;
    }
    else{
        $(".social").removeClass("open");
        $(this).removeClass("spMenu");
        socialOpen=true;
    }
});
$("#studentBtn").click(function(){
    if(studentOpen){
        close();
        $(".student").addClass("open");
        $(this).addClass("spMenu");
        alltrue();
        studentOpen = false;
    }
    else{
        $(".student").removeClass("open");
        $(this).removeClass("spMenu");
        studentOpen=true;
    }
});
function close(){
    $(".drpdownMenu").removeClass("open");
    $(".special").removeClass("spMenu");
}
/************************ */
//Footer Kurumsal baglanti kodları.
var dropOpen = true;
$("#dropBtn").click(function(){
    if(dropOpen){
        $("#myFooter .dropdown-menu").fadeIn( "fast");
        $(this).addClass("bgBlue");
        dropOpen=false;
    }
    else{
        $("#myFooter .dropdown-menu").fadeOut("fast");
        $(this).removeClass("bgBlue");
        dropOpen=true;
    }
});
$(document).scroll(function(){
    $(".fixed").toggleClass("dopen", $(this).scrollTop() > 150);
});

/************************** */
//Body tiklaninca kapatma kodları.
var footerOpen=false;
var menuOpen=false;

$("body").click(function(){
    $("#myFooter").on("click", ".dropdown-menu", function () {
        footerOpen=false;
    });
    $("#myFooter").on("click", "button", function () {
        footerOpen=false;
    });
    $("#mainNav").on("click", "div", function () {
        menuOpen=false;
    });
    $("#mainHead").on("click", ".dropdown-menu", function(){
        clickDfast=false;
    });
    if(footerOpen && !(dropOpen)){
        $("#myFooter .dropdown-menu").fadeOut( "fast");
        $("#dropBtn").removeClass("bgBlue");
        dropOpen=true;
    }
    if(menuOpen){
        close();
        alltrue();
    }
    if(clickDfast){
        $("#mainHead .dropdown-menu ").slideUp("fast");
        $("#dropFast").removeClass("bgBlue");
        dfast=true;
    }
    footerOpen=true;
    menuOpen=true;
    clickDfast=true;
    /******************************************* */
    $("#searchArea").click(function(){
        searchopen=false;
    });

    if(searchopen){
        $("#searchPreview").css("display", "none");
        $("#serarchInput").hide('slide', {direction: 'right'}, 500, function(){
            $("#search").css("display", "none");
        });
        search=true;
    }
    searchopen=true;
    /****************************************** */
    $("#msearchText").click(function(){
        msearchopen=false;
    });

    if(msearchopen){
        $("#msearchPreview").css("display", "none");
        $("#msearchText").hide('slide', {direction: 'right'}, 500);
        msearch=true;
    }
    msearchopen=true;
});
/************************************ */
var notice = true;
$("#btnAnnounce").click(function(){
    if(notice){
        $("#iconUpDown").removeClass("fa-chevron-up");
        $("#iconUpDown").addClass("fa-chevron-down");
        notice=false;
    }
    else{
        $("#iconUpDown").removeClass("fa-chevron-down");
        $("#iconUpDown").addClass("fa-chevron-up");
        notice=true;
    }
});
//Hover
/*//Kurumsal Bilgiler Dropdown
$("#kurumsalBtn").hover(function(){
    $("#kurumsal").addClass("ac");
    $(this).addClass("ozel-hover");
}, function(){
    $("#kurumsal").removeClass("ac");
    $(this).removeClass("ozel-hover");
});
$("#kurumsal").hover(function(){
    $(this).addClass("ac");
    $("#kurumsalBtn").addClass("ozel-hover");
}, function(){
    $(this).removeClass("ac");
    $("#kurumsalBtn").removeClass("ozel-hover");
});

//Akademik Yaşam Dropdown
$("#akademikBtn").hover(function(){
    $("#akademik").addClass("ac");
    $(this).addClass("ozel-hover");
}, function(){
    $("#akademik").removeClass("ac");
    $(this).removeClass("ozel-hover");
});
$("#akademik").hover(function(){
    $(this).addClass("ac");
    $("#akademikBtn").addClass("ozel-hover");
}, function(){
    $(this).removeClass("ac");
    $("#akademikBtn").removeClass("ozel-hover");
});

//Araştırma Geliştirme Dropdown
$("#arastirmaBtn").hover(function(){
    $("#arastirma").addClass("ac");
    $(this).addClass("ozel-hover");
}, function(){
    $("#arastirma").removeClass("ac");
    $(this).removeClass("ozel-hover");
});
$("#arastirma").hover(function(){
    $(this).addClass("ac");
    $("#arastirmaBtn").addClass("ozel-hover");
}, function(){
    $(this).removeClass("ac");
    $("#arastirmaBtn").removeClass("ozel-hover");
});

//Sosyal Hizmeler Dropdown
$("#sosyalBtn").hover(function(){
    $("#sosyal").addClass("ac");
    $(this).addClass("ozel-hover");
}, function(){
    $("#sosyal").removeClass("ac");
    $(this).removeClass("ozel-hover");
});
$("#sosyal").hover(function(){
    $(this).addClass("ac");
    $("#sosyalBtn").addClass("ozel-hover");
}, function(){
    $(this).removeClass("ac");
    $("#sosyalBtn").removeClass("ozel-hover");
});
*/




/*$(".nav").hover(function(){
    $(this).toggleClass("nav-hover");
    $(".nav-link").css("color", "black");
}, function(){
    $(this).toggleClass("nav-hover");
    $(".nav-link").css("color", "white");
});*/