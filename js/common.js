$(document).ready(function() {

	$.stellar({
		responsive: true,
		horizontalOffset: 0
	});

	$('.popup').magnificPopup();

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
        navigation : true,
        singleItem : true,
        autoPlay: 5000,
        transitionStyle : "fade"
      });

     	$(".up-icon").mPageScroll2id({
		scrollSpeed : 1000
	});

 	$('#form').submit(function(e) {
        e.preventDefault();
        
        var $form = $(this);

        $.ajax({
            url: $form.attr('action'), 
            type: $form.attr('method'),
            data: $form.serialize(),

            success: function(data) {

                $.magnificPopup.open({
                    items: {
                        type: 'inline',
                        src: '#thank',
                    }
                });

                $form.find("input[type=text], textarea").val(""); // очищаем форму
            },

            error: function(data) {
                alert('Извините, данные не были переданы');
            }
        });
    });

});