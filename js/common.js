$(document).ready(function() {

	$.stellar({
		responsive: false,
		horizontalOffset: 0,
  		verticalOffset: -200
	});

	
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
	// 	responsive: false,
	// 	horizontalOffset: 0
	// });

	// $('#for-whom, #program, #brends').stellar({
	// 	responsive: true,
	// 	horizontalOffset: 0
	// });

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
      	items: 2,
        navigation : true,
		responsive: false,
		slideSpeed: 1000
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