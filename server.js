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
		name: "Council",
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
		name: "Swing 171 Teacher Notes",
		href: "https://docs.google.com/document/d/1EmT_Fa0Z25ROEvyTIv0URLpmlORiqmS_XF3byt3NLA4/edit?usp=sharing"
	},{
		name: "Swing 178 Outline",
		href: "https://docs.google.com/document/d/1NhgGzBZFWNN51x-tJwE7Vgi2xoUxqO3iGmJRuqIZ3po/edit?usp=sharing"
	}])
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
	render(res, "Council", [{
		name: "Charter",
		href: "https://docs.google.com/document/d/1Sak21Gp8yvNsqTpSU-u6uVXvz4rK8kJO3nh7xRfW37Q/edit"
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


app.listen(3000);