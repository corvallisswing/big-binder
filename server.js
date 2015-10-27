var express = require('express');
var path = require('path');
var url = require('url');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static('public'));

var render = function (res, title, sections) {
	
	for (index in sections) {
		var section = sections[index];
		
		var sectionUrl = {};
		if (section.href) {
			sectionUrl = url.parse(section.href, true);
		}

		// Set section type based on the hostname
		if (sectionUrl.host) {

			// YouTube videos
			if (sectionUrl.host === "www.youtube.com") {
				sections[index].type = "video";

				// Rely on YouTube's thumbnail image format
				sections[index].img = "http://img.youtube.com/vi/" + 
						sectionUrl.query.v + "/" + (section.img || "0.jpg");
			}

			// Google Drive
			if (sectionUrl.host === "docs.google.com"
				|| sectionUrl.host === "drive.google.com") {
				sections[index].type = "google-drive";
			}
		}
	}

	// Set up our viewmodel to have three items per row
	var viewModel = [];
	var rowSize = 3;
	var columnIndex = 0;

	sections.forEach(function (section, index) {
		if (columnIndex % rowSize === 0) {
			section.isFirstInRow = true;
		}
		viewModel.push(section);
		columnIndex++;

		if (section.type === "break") {
			columnIndex = 0;
		}
	});

	res.render('index', { 
		sections: viewModel,
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
		img: "/img/vault.jpg",
		href: "https://drive.google.com/drive/folders/0B_9J_VBOwnbYdEFmRDhhSlZDWnM"
	}]);
});

app.get('/djs', function (req, res) {
	render(res, "DJs", [{
		name: "Standards List",
		img: "/img/ellington.jpg",
		href: "https://docs.google.com/spreadsheets/d/1fDivUcFO0EP-fFQoX8odSoIm_IkKtD01kz1TMTyEUu0/edit?usp=sharing"
	},{
		type: "break"
	},{
		name: "Levels 1 and 2",
		img: "/img/ella.jpg",
		href: "http://corvallisswing.wikispaces.com/DJ+-+New+recruit"
	},{
		name: "Levels 3 and 4",
		img: "/img/cab.jpg",
		href: "http://corvallisswing.wikispaces.com/DJ+-+Novice"
	},{
		name: "How to: Find music",
		img: "/img/webster.jpg",
		href: "http://corvallisswing.wikispaces.com/Music+-+Finding"
	},{
		name: "Resource: Ken Burns Jazz",
		img: "/img/fats.jpg",
		href: "http://www.imdb.com/title/tt0221300/"
	}]);
});

app.get('/teachers', function (req, res) {
	render(res, "Teachers", [{
		name: "Path outline",
		src: "https://www.flickr.com/photos/eric00000007/",
		img: "/img/mikey.jpg",
		href: "https://docs.google.com/document/d/1WD-VIfcUYFzyMnDguA2rL9aqb0tWHQ946cfVdauW0iU/edit?usp=sharing"
	},{
		name: "Evaluation form",
		href: "https://docs.google.com/document/d/1gB_7iTMHPZp9Z27_SYw1iq3JecIVJnuKjAiEjEm6sIE/edit?usp=sharing"
	},{
		name: "Lessons folder",
		href: "https://drive.google.com/drive/folders/0B_AgZreuqRLcfmpJQjF3R3UxSG11STVqYzdPQTV2MmtVOGoySHJWS2lodWp1eWp3S2pmcUU"
	},{
		name: "Swing 171",
		src: "http://rabscuttle.com",
		img: "/img/171.jpg",
		href: "/teachers/171"
	},{
		name: "Swing 178 outline",
		src: "http://rabscuttle.com",
		img: "/img/178.jpg",
		href: "https://docs.google.com/document/d/1NhgGzBZFWNN51x-tJwE7Vgi2xoUxqO3iGmJRuqIZ3po/edit?usp=sharing"
	},{
		name: "Balboa",
		src: "https://www.flickr.com/photos/mobilhomme/",
		img: "/img/balboa.jpg",
		href: "/teachers/balboa"
	}])
});

app.get('/teachers/171', function (req, res) {
	render(res, "Swing 171", [{
		name: "Teacher Notes",
		href: "https://docs.google.com/document/d/1EmT_Fa0Z25ROEvyTIv0URLpmlORiqmS_XF3byt3NLA4/edit?usp=sharing"
	},{
		name: "Week 1 v2",
		href: "https://www.youtube.com/watch?v=-vJdrRMUL-E"
	},{
		name: "Week 1 v3",
		href: "https://www.youtube.com/watch?v=AqGhscQk3C8"
	},{
		name: "Week 1 v4",
		href: "https://www.youtube.com/watch?v=upvH6SE_2SM"
	},{
		name: "Week 1 v5",
		href: "https://www.youtube.com/watch?v=faZ_LHYljSg"
	},{
		type: "break"
	},{
		name: "Week 2 v2",
		href: "https://www.youtube.com/watch?v=Fvw2Gr2ZIvk"
	},{
		name: "Week 2 v3",
		href: "https://www.youtube.com/watch?v=miU2cf9QeTc"
	},{
		name: "Week 2 v4",
		href: "https://www.youtube.com/watch?v=TbkfUTkY35k"
	},{
		name: "Week 2 v5",
		href: "https://www.youtube.com/watch?v=P3xIrn9zB34"
	},{
		name: "Week 3 v2",
		href: "https://www.youtube.com/watch?v=WHCrN_EL0rk"
	},{
		name: "Week 3 v3",
		href: "https://www.youtube.com/watch?v=MN-UdN5sINM"
	},{
		name: "Week 3 v4",
		href: "https://www.youtube.com/watch?v=FJqH31sz28g"
	},{
		name: "Week 3 v5",
		href: "https://www.youtube.com/watch?v=UvH4Pcxg0cU"
	},{
		name: "Week 4 v2",
		href: "https://www.youtube.com/watch?v=9-W1Y8eprCs"
	},{
		name: "Week 4 v3",
		href: "https://www.youtube.com/watch?v=L3Dj3iVuDYA"
	},{
		name: "Week 4 v4",
		href: "https://www.youtube.com/watch?v=UE7YUAeF_mU"
	},{
		name: "Week 4 v5",
		href: "https://www.youtube.com/watch?v=VoWnbiJ00l4"
	},{
		name: "Week 5 v3",
		href: "https://www.youtube.com/watch?v=xxdB0Ma_XTI"
	},{
		name: "Week 5 v4",
		href: "https://www.youtube.com/watch?v=5fIDZxYMCtw"
	},{
		name: "Week 5 v5",
		href: "https://www.youtube.com/watch?v=0jfybeervs0"
	},{
		name: "Week 6 v3",
		href: "https://www.youtube.com/watch?v=uaJQS9sdmGI"
	},{
		name: "Week 6 v4",
		href: "https://www.youtube.com/watch?v=tw9fsvdZjcI"
	},{
		name: "Week 6 v5",
		href: "https://www.youtube.com/watch?v=BC10vrNbAtY"
	},{
		name: "Week 7 v3",
		href: "https://www.youtube.com/watch?v=JbB5m09btOk"
	},{
		name: "Week 7 v4",
		href: "https://www.youtube.com/watch?v=hmK8VTZqzMI"
	},{
		name: "Week 7 v5",
		href: "https://www.youtube.com/watch?v=hjmGGDteTTo"
	},{
		name: "Week 7 v5 Isolations",
		href: "https://www.youtube.com/watch?v=seWbQkbsp4Q"
	},{
		name: "Week 8 v2",
		href: "https://www.youtube.com/watch?v=Ybx53-BzEtg"
	},{
		name: "Week 8 v3",
		href: "https://www.youtube.com/watch?v=kBXEtFZwVSY"
	},{
		name: "Week 8 v4",
		href: "https://www.youtube.com/watch?v=t6DDXL3fdok"
	},{
		name: "Week 8 v5 Redirection",
		href: "https://www.youtube.com/watch?v=v4XVrrTkVsY"
	},{
		name: "Week 8 v5 Rotational momentum",
		href: "https://www.youtube.com/watch?v=-sY_0qljwI4"
	},{
		name: "Week 9 v3",
		href: "https://www.youtube.com/watch?v=ts4m3iwPAiw"
	},{
		name: "Week 9 v4",
		href: "https://www.youtube.com/watch?v=CkGvmmgugQM"
	},{
		name: "Week 9 v5",
		href: "https://www.youtube.com/watch?v=s8kyEw2L3yA"
	},{
		type: "break"
	},{
		name: "Week 10 v3",
		href: "https://www.youtube.com/watch?v=hG0GwkheZOE"
	},{
		name: "Week 10 v5 Small spaces",
		href: "https://www.youtube.com/watch?v=hUgpHRPKaiY"
	},{
		name: "Week 10 v5 Musicality",
		href: "https://www.youtube.com/watch?v=GJ7JYWzRTjU"
	}]);
});

app.get('/teachers/balboa', function (req, res) {
	render(res, "Balboa", [{
		name: "Balboa fundamentals",
		img: "1.jpg",
		href: "https://www.youtube.com/watch?v=u_DVCxnST0Y"
	},{
		name: "Bal-swing fundamentals",
		img: "1.jpg",
		href: "https://www.youtube.com/watch?v=heDJHociUa4"
	},{
		name: "Bal-swing part 2",
		img: "1.jpg",
		href: "https://www.youtube.com/watch?v=xgZGTOiyTRk"
	}]);
});

app.get('/pr', function (req, res) {
	render(res, "PR", [{
		name: "Outline",
		href: "https://docs.google.com/document/d/1t5g7XBsZQuSFugkQ5HYHKvWfEXounlI8BkT3-_B_8co/edit?usp=sharing"
	},{
		name: "Poster spots",
		href: "https://docs.google.com/spreadsheets/d/1c5kfFreTG3Fabfm_HAW30XV0bB74K8f_Vi5_2pSSt-k/"
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
		name: "How to: Grants",
		href: "http://corvallisswing.wikispaces.com/Organizing+-+Grants"
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
		img: "0.jpg",
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