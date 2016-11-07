$('#slides').superslides({
    play: 0
});

$("#logo").fitText(0.4, { minFontSize: '20px'});

$("#sublogo").fitText(1.35);

$(".overlay").find("button").click(function(){
    $( ".first-child" ).animate({
        left: '100%'
    }, 750);
    $( ".second-child" ).animate({
        left: '0'
    }, 750);
});

function pasuser(form) { 
if (form.id.value=="Emanuele") { 
if (form.pass.value=="halloberlin") { window.location.href = "mycourses"; } 
else { alert("Wrong Password") } 
} 
else { alert("Wrong Username") } 
}