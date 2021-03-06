// JavaScript Document
$(document).ready(function() {

    "use strict";

    $(".contact-form").submit(function(e) {
        e.preventDefault();
        var name = $(".name");
        var email = $(".email");
        var subject = $(".subject");
        var msg = $(".message");
        var flag = false;
        if (name.val() == "") {
            name.closest(".form-control").addClass("error");
            name.focus();
            flag = false;
            return false;
        } else {
            name.closest(".form-control").removeClass("error").addClass("success");
        } if (email.val() == "") {
            email.closest(".form-control").addClass("error");
            email.focus();
            flag = false;
            return false;
        } else {
            email.closest(".form-control").removeClass("error").addClass("success");
        } if (subject.val() == "") {
            subject.closest(".form-control").addClass("error");
            subject.focus();
            flag = false;
            return false;
        } else {
            subject.closest(".form-control").removeClass("error").addClass("success");
        } if (msg.val() == "") {
            msg.closest(".form-control").addClass("error");
            msg.focus();
            flag = false;
            return false;
        } else {
            msg.closest(".form-control").removeClass("error").addClass("success");
            flag = true;
        }
        //var dataString = "name=" + name.val() + "&email=" + email.val() + "&subject=" + subject.val() + "&msg=" + msg.val();
        var name_1 = name.val();
        var email_1 = email.val();
        var subject_1 = subject.val();
        var msg_1 = msg.val()
        $(".loading").fadeIn("slow").html("Loading...");
        $.ajax({
            type: "POST",
            data: {name: name_1, email: email_1, subject: subject_1, msg: msg_1},
            url: "/contact",
            cache: false,
            success: function (data, status, xhr) {
                $(".form-control").removeClass("success");
                    // if(response.val == 'success') // Message Sent? Show the 'Thank You' message and hide the form
                        $('.loading').fadeIn('slow').html('<font color="#00596e">Mail sent Successfully.</font>').delay(3000).fadeOut('slow');
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



