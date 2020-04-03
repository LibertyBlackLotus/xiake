const dateFormat = function(date = '', format = 'yyyy/MM/dd hh:mm') {
	let oDate = new Date(date)
	let hours = oDate.getHours()
	let ttime = 'AM'
	if (format.indexOf('t') > -1 && hours > 12) {
		hours = hours - 12
		ttime = 'PM'
	}

	let o = {
		'M+': oDate.getMonth() + 1,
		'd+': oDate.getDate(),
		'h+': hours,
		'm+': oDate.getMinutes(),
		's+': oDate.getSeconds(),
		'q+': Math.floor((oDate.getMonth() + 3) / 3),
		'S': oDate.getMilliseconds(),
		't+': ttime
	}

	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (oDate.getFullYear() + '').substr(4 - RegExp.$1.length))
	}
	for (var k in o) {
		if (new RegExp('(' + k + ')').test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
		}
	}
	return format;
};

export {
	dateFormat
}