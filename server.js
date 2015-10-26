var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static('public'));

var render = function (res, title, sections) {
	res.render('index', { 
		sections: sections,
		title: title 
	});
};

app.get('/', function (req, res) {
	render(res, "Big Binder of Corvallis Swing", [{
		name: "Schedule",
		img: "/img/schedule.png",
		href: "https://docs.google.com/spreadsheets/d/1q_eODNoImPaeYxOhtKMsN8_D2SHKhNLClVL36sZ1JWY/edit?usp=sharing&authkey=COm9tNII"
	},{
		name: "DJs",
		img: "/img/DJs.jpg",
		href: "/djs"
	},{
		name: "Teachers",
		img: "/img/teachers.jpg",
		href: "/teachers"
	},{
		name: "PR",
		img: "/img/pr.png",
		href: "/pr"
	},{
		name: "Graphics",
		img: "/img/cards.jpg",
		href: "https://drive.google.com/open?id=0B_9J_VBOwnbYcnVaR0EzZDM1RXM"
	},{
		name: "Central Council",
		img: "/img/council.jpg",
		href: "/council"
	}, {
		name: "Vault",
		href: "https://drive.google.com/drive/folders/0B_9J_VBOwnbYdEFmRDhhSlZDWnM"
	}]);
});

app.get('/djs', function (req, res) {
	render(res, "DJs", [{
		name: "Standards List",
		href: "https://docs.google.com/spreadsheets/d/1fDivUcFO0EP-fFQoX8odSoIm_IkKtD01kz1TMTyEUu0/edit?usp=sharing"
	}]);
});

app.get('/teachers', function (req, res) {
	render(res, "Teachers", [{
		name: "Path outline",
		href: "https://docs.google.com/document/d/1WD-VIfcUYFzyMnDguA2rL9aqb0tWHQ946cfVdauW0iU/edit?usp=sharing"
	},{
		name: "Swing 171",
		href: "/teachers/171"
	},{
		name: "Swing 178 Outline",
		href: "https://docs.google.com/document/d/1NhgGzBZFWNN51x-tJwE7Vgi2xoUxqO3iGmJRuqIZ3po/edit?usp=sharing"
	},{
		name: "Balboa",
		href: "/teachers/balboa"
	}])
});

app.get('/teachers/171', function (req, res) {
	render(res, "Swing 171", [{
		name: "Teacher Notes",
		href: "https://docs.google.com/document/d/1EmT_Fa0Z25ROEvyTIv0URLpmlORiqmS_XF3byt3NLA4/edit?usp=sharing"
	},{
		name: "Week 1 v1",
		type: "video",
		img: "http://img.youtube.com/vi/-vJdrRMUL-E/0.jpg",
		href: "https://www.youtube.com/watch?v=-vJdrRMUL-E"
	},{
		name: "Week 1 v3",
		type: "video",
		img: "http://img.youtube.com/vi/AqGhscQk3C8/0.jpg",
		href: "https://www.youtube.com/watch?v=AqGhscQk3C8"
	},{
		name: "Week 1 v4",
		type: "video",
		img: "http://img.youtube.com/vi/upvH6SE_2SM/0.jpg",
		href: "https://www.youtube.com/watch?v=upvH6SE_2SM"
	},{
		name: "Week 1 v5",
		type: "video",
		img: "http://img.youtube.com/vi/faZ_LHYljSg/0.jpg",
		href: "https://www.youtube.com/watch?v=faZ_LHYljSg"
	}]);
});

app.get('/teachers/balboa', function (req, res) {
	render(res, "Balboa", [{
		name: "Balboa fundamentals",
		type: "video",
		img: "http://img.youtube.com/vi/u_DVCxnST0Y/1.jpg",
		href: "https://www.youtube.com/watch?v=u_DVCxnST0Y"
	},{
		name: "Bal-swing fundamentals",
		type: "video",
		img: "http://img.youtube.com/vi/heDJHociUa4/1.jpg",
		href: "https://www.youtube.com/watch?v=heDJHociUa4"
	},{
		name: "Bal-swing part 2",
		type: "video",
		img: "http://img.youtube.com/vi/xgZGTOiyTRk/1.jpg",
		href: "https://www.youtube.com/watch?v=xgZGTOiyTRk"
	}]);
});

app.get('/pr', function (req, res) {
	render(res, "PR", [{
		name: "Outline",
		href: "https://docs.google.com/document/d/1t5g7XBsZQuSFugkQ5HYHKvWfEXounlI8BkT3-_B_8co/edit?usp=sharing"
	},{
		name: "How to: Facebook event",
		href: "http://corvallisswing.wikispaces.com/Promos+-+Facebook"
	},{
		name: "How to: Newsletter",
		href: "http://corvallisswing.wikispaces.com/Promos+-+Newsletter"
	},{
		name: "How to: OSU Announcements",
		href: "http://corvallisswing.wikispaces.com/Promos+-+Announcements"
	},{
		name: "Training: Seth Godin Videos",
		img: "/img/godin.png",
		href: "https://www.youtube.com/watch?v=6kGFyrVgUPk"
	}]);
})

app.get('/council', function (req, res) {
	render(res, "Central Council", [{
		name: "Charter",
		href: "https://docs.google.com/document/d/1Sak21Gp8yvNsqTpSU-u6uVXvz4rK8kJO3nh7xRfW37Q/edit"
	},{
		name: "How to: Council",
		href: "http://corvallisswing.wikispaces.com/Organizing+-+Central+Council"
	},{
		name: "How to: Swing society",
		href: "http://corvallisswing.wikispaces.com/Basics"
	},{
		name: "Training: Books and things",
		href: "/council/training"
	}]);
	// render(res, [{
	// 	name: "Policies",
	// 	href: "/policies"
	// },{
	// 	name: "Inventory"
	// },{
	// 	name: "Finances"
	// },{
	// 	name: "Venues, Contacts"
	// }])
});

app.get('/council/training', function (req, res) {
	render(res, "Council: Books and things", [{
		name: "Ken Burns Jazz [Video]",
		img: "http://img.youtube.com/vi/PucsQYGc51w/0.jpg",
		type: "video",
		href: "https://www.youtube.com/watch?v=PucsQYGc51w&list=PLy2LcqUi5nFj0X_7SGlaILgmW_oK_QfZo"
	},{
		name: "Frankie Manning Biography",
		href: "http://www.amazon.com/Frankie-Manning-Ambassador-Lindy-Hop/dp/1592135641/"
	},{
		name: "Growing a Business",
		href: "http://www.amazon.com/Growing-Business-Paul-Hawken/dp/0671671642/"
	},{
		name: "How to Win Friends and Influence People",
		href: "http://www.amazon.com/How-Win-Friends-Influence-People/dp/1439167346/"
	},{
		name: "Getting Things Done",
		href: "http://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/"
	}]);
});

var port = process.env.PORT || 3000;
app.listen(port);