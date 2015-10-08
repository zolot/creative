$(document).ready(function() {

    $.stellar({
        responsive: false,
        horizontalOffset: 50,
        verticalOffset: -200
    });

    var component_height = $('#result .component img').height();
    $('#result .container .descr').css('height', component_height);

    $('.ephone').mask('+7 (999) 999-99-99');

    $('.element-wrap').appear();

    function check_appear(els) {
        if (els.is(':appeared')) {
            els.each(function(index) {
                setTimeout(function(el) {
                    $(el).animate({opacity: 1}, 700);
                }, 500*index, this);
            });
        }
    }

    $(document).scroll(function() {
        check_appear($('#myths .element-wrap'));
        check_appear($('#true .element-wrap'));

    })

    // $('.work-img-box').stellar({
    //  responsive: false,
    //  horizontalOffset: 0
    // });

    // $('#for-whom, #program, #brends').stellar({
    //  responsive: true,
    //  horizontalOffset: 0
    // });

    $('.popup').magnificPopup();

    $('.main-popup').magnificPopup();
    $('.main-popup').magnificPopup('open');

    $(".slide-toggle").click(function () {

        var comment = $(this).parent().find(".comment");

         var curHeight = comment.height(),
            autoHeight = comment.css('height', 'auto').height();
        

        if (comment.hasClass('open')) {
            comment.animate({"height": "80px"},200);
            $(this).text('Развернуть')


        } else {
            comment.height(curHeight).animate({height: autoHeight}, 200);
            $(this).text('Свернуть')


        }

        comment.toggleClass("open");
      });

    var owl = $("#slider");
     
      owl.owlCarousel({
        loop:true,
        navigation : true,
        singleItem : true,
        autoPlay: 5000,
        transitionStyle : "fade"
      });

      var owl = $("#for-whom-slider");
     
      owl.owlCarousel({
        loop:true,
        navigation : true,
        singleItem : true,
        autoPlay: 5000,
        transitionStyle : "fade"
      });

    var owl = $("#teachers-slider");
     
      owl.owlCarousel({
        loop:true,
        navText : "",
        items: 4,
        navigation : true,
        responsive: false,
        slideSpeed: 1000
      });

      var owl = $("#master-classes-slider");
     
      owl.owlCarousel({
        loop:true,
        navigation : true,
        singleItem : true,
        transitionStyle : "fade"
      });

       var owl = $("#program-slider");
     
      owl.owlCarousel({
        loop:true,
        navigation : true,
        singleItem : true,
        transitionStyle : "fade"
      });

        $(".up-icon").mPageScroll2id({
        scrollSpeed : 1000
    });
        $(".down-icon").mPageScroll2id({
        scrollSpeed : 1300
    });

    // function validate_email(email) {
    //     var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //     return emailReg.test(email);
    // }   

    $('form').submit(function(e) {
        e.preventDefault();
        var $form = $(this);
        if (check_form($form)) {
            console.log('eroor')
            return false;
        }
        console.log('ss')

        $.ajax({
            url: $form.attr('action'), 
            type: $form.attr('method'),
            data: $form.serialize(),

            success: function(data) {
                var url = 'thank.html';
                if ($form.hasClass('thank-2')) {
                    url = 'thank-2.html';
                } 
                window.location = url;
                // var modal = '#thank'
                // if ($form.hasClass('thank-2')) {
                    // modal = '#thank-2'
                // } 
                // $.magnificPopup.open({
                //     items: {
                //         type: 'inline',
                //         src: modal,
                //     }
                // });
                

                $form.find("input[type=text], input[type=email], textarea").val(""); // очищаем форму
            },

            error: function(data) {
                alert('Извините, данные не были переданы');
            }
        });
    });

    function check_form(form){
        var error = false;
        $(form).find('input, textarea').each(function(){
            if ($(this).val().length <= 1) {
                $(this).addClass('error');
                error = true;
            } else {
                $(this).removeClass('error');
            }
        });

        var name = $(form).find('[name=name]');
        var phone = $(form).find("[name=phone]");
        var email = $(form).find("[name=email]");
        var question = $(form).find("[name=question]");

        if (name.val().length < 3) {
            console.log(name)
            name.addClass('error');
            error = true;
        }
        if (phone.val().length < 11) {
            phone.addClass('error');
            error = true;
        }
        return error;
    }

});