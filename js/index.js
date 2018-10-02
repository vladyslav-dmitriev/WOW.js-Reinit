$(document).ready(function() {

	(function() {

		/* функция wowReinitCallback при проигрывании анимации в первый раз при загрузке страницы удаляет у всех этих элементов с классом .wow этот класс */
		function wowReinitCallback(currentElem) {
			var $this = $(currentElem);
			$this.removeClass('wow');
		}

		new WOW({
			callback: function(currentElem) {
				wowReinitCallback(currentElem);
			}
		}).init();;

		/* функция wowReinit добавляет выбранному элементу класс .wow и переинициализирует WOW.js */
		function wowReinit(_self) {
			var $this = _self;
			$this.addClass('wow');
	       	$this.removeClass('animated');
	        $this.removeAttr('style');
	        new WOW({
	        	callback: function(currentElem) {
					wowReinitCallback(currentElem);
				}
	        }).init();
		}

		/* вешаем обработчики на элементы с многоразовой анимацией */
		var reusable = $('.wow-reusable');
		reusable.on('click', function() {
			wowReinit($(this));
		});
		
	})();

});