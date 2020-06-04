// JavaScript Document
$(document).ready(function() {

    "use strict";
    $(".request-form").submit(function(e) {
        e.preventDefault();        
        var name = $(".name");
        var email = $(".email");
        var phone = $(".phone");
        var visa = $(".visa");
        var country = $(".country");
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
        } if (phone.val() == "") {
            phone.closest(".form-control").addClass("error");
            phone.focus();
            flag = false;
            return false;
        } else {
            phone.closest(".form-control").removeClass("error").addClass("success");
        } if (visa.val() == "") {
            visa.closest(".form-control").addClass("error");
            visa.focus();
            flag = false;
            return false;
        } else {
            visa.closest(".form-control").removeClass("error").addClass("success");
        } if (country.val() == "") {
            country.closest(".form-control").addClass("error");
            country.focus();
            flag = false;
            return false;
        } else {
            country.closest(".form-control").removeClass("error").addClass("success");
            flag = true;
        }
        // var dataString = "name=" + name.val() + "&email=" + email.val() + "&phone=" + phone.val() + "&visa=" + visa.val() + "&country=" + country.val();
        var name=name.val();
        var email=email.val();
        var phone=phone.val();
        var visa=visa.val()
        var country=country.val()
        $(".loading").fadeIn("slow").html("LoadinG...");
        //     $("#send_email").click(function(){     

        //         //$("#message").text("Sending E-mail...Please wait");
        //         $.get("http://localhost:8000/send",{name:name,email:email,phone:phone,visa:visa,country:country},function(data){
        //         if(data=="sent")
        //         {
        //             $("#message").empty().html("Email is been sent. Thank you!");
        //         }
        
        // });
        //     });
        $.ajax({
            type: "POST",
            data: {name: name, email: email, phone: phone, visa: visa, country: country},
            url: "/send",
            cache: false,
            dataType: 'json',
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



