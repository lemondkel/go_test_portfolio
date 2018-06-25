/*
 * Created by dkel on 2018-06-25.
 */

var itemIdx = 0;
var ONGOING_TXT = 'ONGOING';

var itemList = [
	{
		title: 'SKTechX VOLO',
		textArr: [
			"Travel Post Web Service", "Initial server modularization tasks", "Based on Node.js.",
			"Using Jade as a View Template Engine",
			"<a class='site' href='https://withvolo.com/' target='_blank'>Link</a>"
		],
		fromDate: '2017-01-11',
		toDate: '2017-01-30'
	},
	{
		title: 'LG Graphy',
		textArr: [
			"Web Services for Mobile International Market Marketing Promotion", "Using Google Analytics.", "Using the Spring Framework",
			"Distributed Processing with AWS Load Balancer",
			"<a class='site' href='http://m.lg-graphy.com/' target='_blank'>Link</a>"
		],
		fromDate: '2017-01-31',
		toDate: '2017-05-12'
	},
	{
		title: 'Creccer',
		textArr: [
			"Support for multiple languages", "Renew homepage", "Using the Spring Framework",
			"Introduction of new features and UI enhancements", "Reduced user inconvenience by changing from legacy form to Ajax",
			"Lower server costs by separating sources by domain and build type",
			"<a class='site' href='http://www.creccer.com/' target='_blank'>Link</a>"
		],
		fromDate: '2017-05-22',
		toDate: '2018-02-28'
	},
	{
		title: 'Gramoph',
		textArr: [
			"Music Magazine Web Service", "Implement file upload", "Responsive publishing",
			"Responding to client requirements", "Based on PHP.",
			"<a class='site' href='http://heavensky.cafe24.com/' target='_blank'>Link</a>"
		],
		fromDate: '2017-07-22',
		toDate: '2018-04-18'
	},
	{
		title: 'Mobile Self Guide',
		textArr: [
			"Revenue generation by providing a web / app containing AR in museums and memorials",
			"Lower server costs by separating sources by domain and build type",
			"Based on Java / Spring", "Implement content creation tools",
			"Construction of PG-Interconnect (Payment Module Interlink) and Refund System",
			"<a class='site' href='http://www.wmcreccer.com/' target='_blank'>Link</a>"
		],
		fromDate: '2017-08-22',
		toDate: '2018-02-28'
	},
	{
		title: 'Jeju Univ Construction of Point Business Group\'s homepage',
		textArr: [
			"Based on Java / Spring", "<a class='site' href='http://point.jejunu.ac.kr' target='_blank'>Link</a>"
		],
		fromDate: '2017-09-02',
		toDate: '2017-10-12'
	},
	{
		title: 'Student Consulting Web Service Legend Study',
		textArr: [
			"Based on Java / Spring",
			"PG-interconnect (payment module link)",
			"Interlink authentication system",
			"Google Analytics (GA), using Naver Analytics (NA)", "<a class='site' href='https://www.legenduniv.com' target='_blank'>Link</a>"
		],
		fromDate: '2017-12-02',
		toDate: '2018-01-29'
	},
	{
		title: 'MAMU',
		textArr: [
			"Based on Node.js", "Responsive publishing", "Implement file upload", "Implement matching system",
			"Honeycomb publishing", "<a class='site' href='https://www.mamu.or.kr' target='_blank'>Link</a>"
		],
		fromDate: '2018-01-23',
		toDate: ONGOING_TXT
	}
];
itemList = itemList.sort(function (a, b) {
	return new Date(b.fromDate).getTime() - new Date(a.fromDate).getTime()
});

setHTML();
for (var i = 0; i < itemList.length; i++) {
	setTypedAnimation(itemList[i].title, itemList[i].textArr, itemList[i].fromDate, itemList[i].toDate);
}

function getLine(className, textArr, idx) {
	new Typed(className + ' div .typed' + idx, {
		strings: ["＃ " + textArr[idx]],
		typeSpeed: 50,
		onComplete: function (self) {
			self.el.nextElementSibling.remove();
			if (textArr[idx + 1] !== undefined) {
				idx++;
				self.el.parentNode.innerHTML += '<br/><span class="typed' + idx + '"></span>';
				getLine(className, textArr, idx);
			}
		}
	});
}

function setHTML() {
	for (var i = 0; i < itemList.length; i++) {
		document.getElementsByClassName('itemList')[0].innerHTML += '<div class="item' + itemIdx + '">'
			+ '<div>'
			+ '<span class="typed"></span>'
			+ '</div>'
			+ '<div>'
			+ '<b class="date"></b>'
			+ '</div>'
			+ '<div>'
			+ '<span class="typed0"></span>'
			+ '</div>'
			+ '</div>';
		itemIdx++;
	}
	itemIdx = 0;
}

function setTypedAnimation(title, textArr, fromDate, toDate) {
	new Typed('.item' + itemIdx + ' div .typed', {
		strings: [title],
		typeSpeed: 70,
		loop: false,
		onComplete: function (self) {
			self.el.nextElementSibling.remove();
			new Typed(self.el.parentNode.parentNode.querySelector('b.date'), {
				strings: [fromDate + " ^500~ " + toDate],
				typeSpeed: 50,
				onComplete: function (self) {
					self.el.nextElementSibling.remove();
					var idx = 0;
					getLine('.' + self.el.parentNode.parentNode.className, textArr, idx);
				}
			});
		}
	});
	itemIdx++;
}