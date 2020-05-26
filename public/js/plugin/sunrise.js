/*
 * Eclipse for jQuery
 * Version: 1.0.1
 * Author: shinyongjun
 * Website: http://www.simplizm.com/
 */

 // issue connected event error

;(function($){
    'use strict';

    var Sunrise = (function(){
        var fnidx = 0;

        function Sunrise(settings){
            var _ = this;

            _.defaults = {
                target: null,
                ajax: true,
				data: null,
                dataType: 'html',
				closeConfirm: false,
				closeConfirmText: '닫으시겠습니까?',
				window: parent,
				position: {
					top: false,
					left: false
				},
                openCallback: function() {},
                closeCallback: function() {}
            }

            _.options = $.extend({}, _.defaults, settings);
			_.options.positionType = !_.options.position.top && !_.options.position.left ? 'fixed' : 'absolute';

            _.initial = {
                fnidx: ++fnidx,
				startTop: $(_.options.window).scrollTop(),
				startLeft: $(_.options.window).scrollLeft(),
				scrollTop: $(_.options.window).scrollTop(),
				scrollLeft: $(_.options.window).scrollLeft()
            }

            _.markups = {
                outer: '<div class="sunrise-outer">',
                scrll: '<div class="sunrise-scrll">',
                inner: '<div class="sunrise-inner">',
                scene: '<div class="sunrise-scene">',
                frame: '<div class="sunrise-frame">',
				stand: '<div class="sunrise-stand">'
            }

            _.element = {
				html: $('html', _.options.window.document),
                body: $('body', _.options.window.document),
                target: !_.options.ajax ? $(_.options.target) : null
            }

            _.events = {
                click: 'click.sunrise'+_.initial.fnidx
            }

            _.init(true);
        }

        return Sunrise;
    }());

    Sunrise.prototype.layoutMarkup = function() {
        var _ = this;

        _.initial.scrollTop = $(window).scrollTop();
        _.element.outer = _.element.body.append(_.markups.outer).children('.sunrise-outer:last-child');

		_.element.scrll = _.element.outer.append(_.markups.scrll).children('.sunrise-scrll');
		_.element.inner = _.element.scrll.append(_.markups.inner).children('.sunrise-inner');
		_.element.scene = _.element.inner.append(_.markups.scene).children('.sunrise-scene');
		_.element.frame = _.element.scene.append(_.markups.frame).children('.sunrise-frame');

		if (_.options.positionType === 'absolute') {
			_.element.frame
				.css({
					'top': _.options.position.top - $(_.options.window).scrollTop(),
					'left': _.options.position.left
				});
		}
    }

	Sunrise.prototype.setScrollLeft = function() {
		var _ = this;

		_.element.scrll.scrollLeft(_.initial.startLeft);
		$(_.options.window.document).find('#wrap').css({
			'top': -_.initial.startTop,
			'left': -_.initial.startLeft
		});

		_.element.scrll.on('scroll', function() {
			_.initial.scrollLeft = $(this).scrollLeft();
			$(_.options.window.document).find('#wrap').css('left', -_.initial.scrollLeft);
			if (_.options.positionType !== 'fixed') {
				_.initial.scrollTop = $(this).scrollTop() + _.initial.startTop;
				$(_.options.window.document).find('#wrap').css('top', -_.initial.scrollTop);
			}
		});
	}

	Sunrise.prototype.commonDrawPopup = function() {
		var _ = this;

		_.options.openCallback(_.element.target);
		_.element.popup = _.element.target.appendTo(_.element.frame).show();
		_.element.outer.addClass('sunrise-visible');
		_.eventsRegister.close2(_);
		if (_.options.positionType === 'fixed') {
			_.element.html.addClass('sunrise-fixed');
		} else {
			_.element.html.addClass('sunrise-absolute');
		}
		_.setScrollLeft();
	}

    Sunrise.prototype.drawPopup = function() {
        var _ = this;

        if (_.options.ajax) {
            $.ajax({
                url: _.options.target,
                timeout: 10000,
				data: _.options.data,
                dataType: _.options.dataType,
                success: function(popup) {
                    _.element.target = $(popup);
					_.commonDrawPopup();
                }
            });
        } else {
			_.commonDrawPopup();
        }
    }

    Sunrise.prototype.closePopup = function() {
        var _ = this;

        if (!_.options.ajax) {
            _.element.popup.appendTo(_.element.body).hide();
        }
        _.options.closeCallback(_.element.target);
        _.element.outer.remove();
        _.element.html.removeClass('sunrise-fixed sunrise-absolute');
		$(_.options.window.document).find('#wrap').css({'top': 0, 'left': 0});
		$(_.options.window).scrollLeft(_.initial.scrollLeft);
		$(_.options.window).scrollTop(_.initial.startTop);
    }

	Sunrise.prototype.closeConfirm = function() {
		var _ = this;

		if (_.options.closeConfirm) {
			var closeFlag = confirm(_.options.closeConfirmText);
			if (closeFlag) {
				_.closePopup();
			}
		} else {
			_.closePopup();
		}
	}

    Sunrise.prototype.eventsRegister = (function() {
        return {
            close: function(_) {
                $(_.options.window.document).on(_.events.click, function(e) {
					if (e.target === _.element.inner[0] || e.target === _.element.scene[0]) {
						_.closeConfirm();
					}
                });
            },
			close2: function(_) {
				_.element.outer.find('[sunrise="close"]').on(_.events.click, function(e) {
					_.closeConfirm();
				});
			}
        }
    })();

    Sunrise.prototype.sunrise = function(method) {
        var _ = this;

        if (_[method]) {
            _[method](arguments[1]);
        } else {
            console.log('This is not the method of Sunrise.');
        }
    }

    Sunrise.prototype.init = function() {
        var _ = this;

        _.layoutMarkup();
        _.drawPopup();

        _.eventsRegister.close(_);
    }

    window.sunrise = function() {
        return new Sunrise(arguments[0]);
    }
}(jQuery));