
/*$(document).on('keypress keydown keyup', function(e) {
	if (window.event.keyCode == 116) {
		e.preventDefault();
	}
});*/


rivets.configure({
    prefix: 'rv',
    preloadData: true,
    rootInterface: '.',
    templateDelimiters: ['{', '}'],
    iterationAlias : function(modelName) {
        return '%' + modelName + '%';
    },
    handler: function(target, event, binding) {
        this.call(target, event, binding.view.models);
    },
    executeFunctions: false
});

rivets.formatters.empty = function(value, comparison) {
	return value ? value : '-';
};

rivets.formatters.cd = function(value, comparison, return1, return2) {
	return value == comparison ? return1 : return2;
}

rivets.formatters.neq = function(value, comparison) {
	return value != comparison;
}

rivets.formatters.eq = function(value, comparison) {
	return value == comparison;
}

rivets.formatters.eq2 = function(value, comparison, value2) {
	return value == comparison ? value2 : false;
}

rivets.formatters.gender = function(value) {
	return value === '1' ? '남' : value === '2' ? '여' : '-';
}

rivets.formatters.lt = function (value, comparison) {
    var _return = false;

    switch (typeof value) {
		case 'string':
			_return = parseInt(value) < comparison;
			break;
        case 'number':
            _return = value < comparison;
            break;
        case 'object':
            _return = value.length < comparison;
            break;
        default: _return = false;
    }
    return _return;
}

rivets.formatters.gt = function (value, comparison) {
    var _return = false;

    switch (typeof value) {
		case 'string':
			_return = parseInt(value) > comparison;
			break;
        case 'number':
            _return = value > comparison;
            break;
        case 'object':
            _return = value.length > comparison;
            break;
        default: _return = false;
    }
    return _return;
}

rivets.formatters.less = function (value, comparison) {
    var _return = false;

    switch (typeof value) {
		case 'string':
			_return = parseInt(value) <= comparison;
			break;
        case 'number':
            _return = value <= comparison;
            break;
        case 'object':
            _return = value.length <= comparison;
            break;
        default: _return = false;
    }
    return _return;
}

rivets.formatters.more = function (value, comparison) {
    var _return = false;

    switch (typeof value) {
		case 'string':
			_return = parseInt(value) >= comparison;
			break;
        case 'number':
            _return = value >= comparison;
            break;
        case 'object':
            _return = value.length >= comparison;
            break;
        default: _return = false;
    }
    return _return;
}

rivets.formatters.isExist = function(value) {
	// 배열의 개수가 1이상일때 true 반환
	return value.length !== 0;
}

rivets.formatters.isEmpty = function(value) {
	// 배열의 개수가 0일때 true 반환
	return value.length === 0;
}

rivets.formatters.prepend = function(value, prepend) {
	// value 앞에 string추가
	return prepend + value;
}

rivets.formatters.date = function(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

rivets.formatters.hp = function(value) {
    var formatNum = '';

	if (value) {
		if (value.length == 11) {
			formatNum = value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
		} else if (value.length == 10) {
			formatNum = value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
		} else {
			formatNum = value;
		}
	} else {
		formatNum = '-';
	}

	return !formatNum ? '-' : formatNum;
}

rivets.formatters.tel = function(value) {
    var formatNum = '';

	if (value) {
		if (value.length == 8) {
			formatNum = value.replace(/(\d{4})(\d{4})/, '$1-$2');
		} else if (value.length == 9) {
			formatNum = value.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3');
		} else if (value.length == 10) {
			if (value.indexOf('02') == 0) {
				formatNum = value.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
			} else {
				formatNum = value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
			}
		} else if (value.length == 11) {
			formatNum = value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
		} else {
			formatNum = value;
		}
	} else {
		formatNum = '-';
	}

	return !formatNum ? '-' : formatNum;
}

rivets.formatters.number = function(value) {
	// 숫자 포맷
	// 513513513 => 513,513,513
  if(value==null || value==undefined){
    return '';
  }
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

rivets.formatters.reverse = function(value) {
	return !value;
}

rivets.formatters.company_license = function(value) {
	var formatNum = '';

	if (value) {
		if (value.length == 10) {
			formatNum = value.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
		} else {
			formatNum = value;
		}
	} else {
		formatNum = '-';
	}

	return !formatNum ? '-' : formatNum;
}

rivets.formatters.company_license2 = function(value) {
	var formatNum = '';

	if (value) {
		if (value.length == 13) {
			formatNum = value.replace(/(\d{6})(\d{7})/, '$1-$2');
		} else {
			formatNum = value;
		}
	} else {
		formatNum = '-';
	}

	return !formatNum ? '-' : formatNum;
}
