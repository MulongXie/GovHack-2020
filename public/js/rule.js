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

    // **** Gov ****
    let empms = ["332000", "247000", "204000", "438000", "214000", "257000"];
    let growth = ["-1.2", "6.2", "-0.2", "4.6", "5.7", "7.7", "10.4"];
    let easel = ["7", "6", "9", "9", "3", "7", "4"];

    $("#select-industry").on('change', function () {
        let index = $(this).find("option:selected").val()
        $(".growth-numb").text(growth[index])
        if(growth[index] > 0){
            $(".growth-img").attr('src', "../img/inc.jpg")
        }
        else {
            $(".growth-img").attr('src', "../img/dec.jpg")
        }

        $(".industry-title").text($(this).find("option:selected").text())
        $(".current-employment").text(empms[index])
        $(".living-ease").text(easel[index])
    })
})
