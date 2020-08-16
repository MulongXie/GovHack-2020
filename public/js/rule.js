$(document).ready(function () {

    let query = window.location.search.substring(1)
    let rule = query.split('=')[1]
    let li = $("#li-" + rule)
    li.siblings().removeClass('active')
    li.addClass('active')

    $("#toggle-sidebar").click(function () {
        $("#sidebar").animate({
            width: "toggle"
        });
    });

    $(".rule-list").click(function () {
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
        rule = $(this).attr('id').split('-')[1]
        console.log(rule)
    })
})
