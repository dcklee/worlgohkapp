// JavaScript Document
$(document).ready(function() {

    "use strict";
    $("form[name='chatgpt-form']").submit(function(e) {
        e.preventDefault();        
        var age = $(".age");
        var education = $(".education");
        var children = $(".children");
        var maritalStatus = $(".maritalStatus");
        var country = $(".country");
        var flag = false;
        //console.log(age.val(), education.val(), children.val(), maritalStatus.val(), country.val());
        if (age.val() == "") {
            age.closest(".form-control").addClass("error");
            age.focus();
            flag = false;
            return false;
        } else {
            age.closest(".form-control").removeClass("error").addClass("success");
        } if (education.val() == "") {
            education.closest(".form-control").addClass("error");
            education.focus();
            flag = false;
            return false;
        } else {
            education.closest(".form-control").removeClass("error").addClass("success");
        } if (children.val() == "") {
            children.closest(".form-control").addClass("error");
            children.focus();
            flag = false;
            return false;
        } else {
            children.closest(".form-control").removeClass("error").addClass("success");
        } if (maritalStatus.val() == "") {
            maritalStatus.closest(".form-control").addClass("error");
            maritalStatus.focus();
            flag = false;
            return false;
        } else {
            maritalStatus.closest(".form-control").removeClass("error").addClass("success");
        } if (country.val() == "") {
            country.closest(".form-control").addClass("error");
            country.focus();
            flag = false;
            return false;
        } else {
            country.closest(".form-control").removeClass("error").addClass("success");
            flag = true;
        }
        var age=age.val();
        var education=education.val();
        var children=children.val();
        var maritalStatus=maritalStatus.val()
        var country=country.val()
        $(".loading").fadeIn("slow").html("Loading...");
        $.ajax({
            type: "POST",
            data: {age: age, education: education, children: children, maritalStatus: maritalStatus, country: country},
            url: "/chat-gpt",
            cache: false,
            dataType: 'json',
            success: function (data, status, xhr) {
                $(".form-control").removeClass("success");
                    // if(response.val == 'success') // Send the Openai Response.
                        $.each(data, function(key, value) {
                            $("#output").append(value.replace(/\n/g, '<br>') + '<br>');
                        }); 
                         //else
                        },
            error: function (jqXhr, textStatus, errorMessage) {            
                         $('.loading').fadeIn('slow').html('<font color="#ff5607">Mail not sent.</font>').delay(3000).fadeOut('slow');
                                }         
        });
        return false;
    });
    $("#reset").on('click', function() {
        $(".form-control").removeClass("success").removeClass("error");
    });
    
})



