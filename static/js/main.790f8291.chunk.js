(this.webpackJsonppersonalwebsite=this.webpackJsonppersonalwebsite||[]).push([[0],[,,,,,,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){},,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){"use strict";t.r(e);var n=t(1),i=t.n(n),a=t(4),s=t.n(a),c=(t(9),t(10),t(11),t.p+"static/media/smaller.2e6bf1c0.jpg"),r=t(0),o=function(A){return Object(r.jsx)("div",{className:"welcometext",children:Object(r.jsx)("h1",{children:A.text})})},l=function(){return Object(r.jsx)("div",{className:"welcome",style:{backgroundImage:"url(".concat(c,")")},children:Object(r.jsx)(o,{text:"\u2014 Hi I'm Nicholas! \u2014"})})},m=(t(13),function(A){return Object(r.jsx)("div",{className:"journeytitle",children:Object(r.jsx)("h1",{children:A.title})})}),u=function(A){return Object(r.jsxs)("div",{className:"entrytext invert",children:[Object(r.jsx)("div",{className:"maintext",children:Object(r.jsx)("h1",{children:A.text})}),Object(r.jsx)("div",{className:"subtitle",children:Object(r.jsx)("h2",{children:A.subtitle})})]})},d=function(A){return Object(r.jsx)("div",{className:"entrytext uninvert ".concat(A.dir),children:Object(r.jsx)("h1",{children:A.date})})},h=function(A){var e=A.entry?A.entry:{},t=A.on_left?"left":"right",n=[Object(r.jsx)(u,{text:e.text,subtitle:e.subtitle}),Object(r.jsx)("div",{className:"journeyicon",children:Object(r.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:"iconimg",src:e.img,alt:e.text})})}),Object(r.jsx)(d,{dir:t,date:e.date})];return Object(r.jsx)("div",{className:"journeyentry",children:A.on_left?n.map((function(A){return A})):n.reverse().map((function(A){return A}))})},p=function(){var A=function(A,e,t,n,i){return{text:A,subtitle:e,date:t,img:n,url:i}},e=[A("As a Sophomore at NYUAD, I not only take technical courses in CS, but also in a wide range of fields such as political science and philosophy with global peers.","B.Sc. in Computer Science, Minors in Interactive Media and Economics","Aug 2020 - Present","https://pbs.twimg.com/profile_images/884727495911669765/UDLL0AhQ.jpg","https://nyuad.nyu.edu/"),A("At Hokan I was able to develop technical skills in Cloud Computing and API Programming, but also collaboration and teamwork skills in a professional startup environment.","Data Engineer Intern - Hokan Inc.","Oct 2020 - Mar 2021","https://pbs.twimg.com/profile_images/1375268699809017857/mu64gZiX_400x400.jpg","https://www.corp.hkn.jp/"),A("In the VEX Robotics program, I worked with and lead a team to build, program, and compete with a robot in numerous tournaments, winning numerous awards.","VEX Robotics Club Leader, Co-Captain, Lead Programmer","Aug 2018 - Jun 2020","https://pbs.twimg.com/profile_images/759142234562277376/e9hjUIwQ.jpg","https://www.vexrobotics.com/v5/competition/vrc-current-game"),A("I not only received my high school diploma at ASIJ but I also was able to explore my interests in Computer Science through coursework and extracurriculars.","High School Diploma, AP Scholar with Distinction","Aug 2016 - Jun 2021","https://pbs.twimg.com/profile_images/1053133976527765504/VOaJEN5D.jpg","https://www.asij.ac.jp")];return Object(r.jsxs)("div",{className:"journey",children:[Object(r.jsx)(m,{title:"\u2014 My Journey \u2014"}),e.map((function(A,e){return Object(r.jsx)(h,{entry:A,on_left:e%2===0})}))]})},g=(t(14),t.p+"static/media/robo.188c3697.JPEG"),j=function(A){return Object(r.jsx)("div",{className:"aboutmeimg",style:{backgroundImage:"url(".concat(A.src,")")}})},b=function(A){return Object(r.jsxs)("div",{className:"textentry",children:[Object(r.jsx)("h1",{className:"question",children:A.question}),Object(r.jsx)("h2",{className:"answer",children:A.answer})]})},f=function(){var A=function(A,e){return{q:A,a:e}},e=[A('"Who Am I?"',"My name is Nicholas Raffone, and I'm a Italian Japanese undergrad sophomore with a passion for computing!"),A('"What Motivates Me?"',"I like to stay motivated by being present in my activities everyday. By being attentive to small details when I pen spin, listen to indie music, or go on urban hikes, I'm able to find topics I want to explore and learn about the world around me."),A('"What\'s My Biggest Dream?"',"At some point I want to open a caf\xe8 to host a variety of events and interact with the local community.")];return Object(r.jsx)("div",{className:"aboutmetext",children:e.map((function(A){return Object(r.jsx)(b,{question:A.q,answer:A.a})}))})},x=function(){return Object(r.jsxs)("div",{className:"aboutme",children:[Object(r.jsx)(f,{}),Object(r.jsx)(j,{src:g})]})},w=t(3),v=(t(15),t.p+"static/media/album.a6d52ad8.png"),O=t.p+"static/media/robo2.142f22e7.JPEG",y=t.p+"static/media/dis.378a92c5.png",k=t.p+"static/media/site.f224bcd5.png",C=t.p+"static/media/paper.d73a59ff.png",I=function(A){var e=A.color?A.color:A.def;return Object(r.jsx)("h1",{className:"itemname ".concat(A.hide?"hide":""),onClick:function(){A.setID(A.id)},onMouseOver:function(A){A.target.style.color=e},onMouseLeave:function(e){e.target.style.color=A.def},children:A.title})},Q=function(A){return Object(r.jsxs)("div",{className:"achievementcontent",style:{"background-color":A.entry.color},children:[Object(r.jsx)("div",{className:"achievementimg",children:Object(r.jsx)("img",{src:A.entry.img,alt:A.entry.title})}),Object(r.jsxs)("div",{className:"achievementtext",children:[Object(r.jsx)("h2",{children:A.entry.title}),Object(r.jsxs)("h3",{children:[A.entry.desc," ",""!==A.entry.link?Object(r.jsx)("a",{href:A.entry.link,rel:"noreferrer",target:"_blank",children:"Click here for more information."}):""]}),Object(r.jsxs)("h3",{children:["Skills: ",A.entry.skills]})]})]})},E=function(){var A=Object(n.useState)(0),e=Object(w.a)(A,2),t=e[0],i=e[1],a=Object(n.useState)(!1),s=Object(w.a)(a,2),c=s[0],o=s[1],l=function(A,e,t,n,i,a,s){return{item:A,title:e,desc:t,skills:n,color:i,img:a,link:s}},m=l("ML Research","Speculating Success: An Experimental Study","I wrote a peer-reviewed piece on improving the accuracy of neural networks compared to others in the current literature. Implementing dropout and adaptive optimisation resulted in a 10% increase in accuracy when predicting student performance.","Machine Learning, Research, Python","rgb(215, 230, 240)",C,"https://drive.google.com/file/d/1nu4-eKFU-h_owx6v6MK5llFAxMP7oKYO/view?usp=sharing"),u=l("Earthquake Notifier","Earthquake Notifier","The Earthquake Notifier is an AWS Serverless app I built at Hokan to relay real time natural disaster information that may have affected clients for the Customer Success team to follow up if deemed necessary. Information is received from government sources and set through Slack.","AWS SAM, API Programming, Python","rgb(240, 219, 255)",y,""),d=l("Daily Site Diff Checker","Daily Site Diff Checker","The Daily Site Diff Checker is an AWS Serverless app designed to easily understand the difference between a site at two different periods of time. A user is able to check diffs on a daily basis or retrieve an HTML page containing page differences via a modal in Slack.","AWS SAM, Web Scraping, Python","rgb(220, 255, 225)",k,""),h=[m,l("Album Art Quiz","Album Art Quiz","For music enjoyers: The Album Art Quiz is a game made in React where upon picking a genre, the page will have you guess 10 album names based on pixelated art and a color palette. Users log in using their Spotify credentials which is then used to access the Spotify API.","React JS, HTML, CSS, API Programming","rgb(212, 223, 252)",v,"https://nicholasraffone.github.io/album-game/"),d,l("Robotics Events","Robotics Events","As a co-captain and lead programmer of VEX Robotics team 901J, I lead my team of 7 students to qualify for the VEX World Championships two years in a row. Earning 6 trophies, we surpassed the ASIJ record for number of awards attained in a season and won 2 international events.","Leadership, C++, Teamwork","rgb(220, 219, 255)",O,""),u];return Object(r.jsxs)("div",{className:"achievements",children:[Object(r.jsxs)("div",{className:"items",children:[Object(r.jsxs)("div",{className:"achievementtitlewrapper",children:[Object(r.jsx)("h1",{className:"achievementtitle",children:"Achievements and Projects"}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{className:"expandbutton",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAAGACAYAAACkx7W/AAAABmJLR0QA/wD/AP+gvaeTAAADPElEQVR4nO3VwQ0CAQzEwBz993wUwWORPNNA9hXfAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8p2c94O7e9QCAkekP/iyPA7AjAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD941gPu7l0PABiZ/uDP8jgAOwIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwg2c94O7e9QCAkekP/iyPA7AjAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwF/5AhJhA74ILGHPAAAAAElFTkSuQmCC",onClick:function(){return o(!c)},alt:"expand"})})]}),h.map((function(A,e){return Object(r.jsx)(I,{id:e,setID:function(A){return i(A)},title:A.item,def:"rgb(51, 51, 51)",color:A.color,hide:c})}))]}),Object(r.jsx)("div",{className:"display",children:Object(r.jsx)(Q,{entry:h[t]})})]})},N=function(A){return Object(r.jsx)("div",{className:"socialicons",children:A.icons.map((function(A){return Object(r.jsx)("a",{href:A.url,target:"blank_",children:Object(r.jsx)("img",{className:"socialicon",src:A.img_url,alt:A.url})})}))})},S=t.p+"static/media/resume.9c510f6e.png",B=(t(16),function(){var A=function(A,e){return{img_url:A,url:e}},e=[A("https://www.vectorico.com/download/social_media/LinkedIn-Icon-Square.jpg","https://www.linkedin.com/in/nicholasraffone/"),A("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png","https://facebook.com/nicholas.raffone.1"),A("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png","https://www.instagram.com/iamchechalaga/"),A("https://www.freeiconspng.com/uploads/spotify-icon-2.png","https://open.spotify.com/user/nicholas.raffone"),A(S,"https://drive.google.com/file/d/1BzGKvZPqqN46cMitbSF4QZpeNXsvfGxE/view?usp=sharing"),A("https://icons-for-free.com/iconfiles/png/512/book+contact+contacts+email+gmail+square+icon-1320073244791218167.png","mailto:nr2302@nyu.edu")];return Object(r.jsxs)("div",{className:"socials",children:[Object(r.jsx)("h1",{children:"\u2014 Connect with me! \u2014"}),Object(r.jsx)("h2",{children:"Add me on LinkedIn, follow me on Instagram, or even check out my Spotify profile!"}),Object(r.jsx)(N,{icons:e})]})}),U=function(){return Object(r.jsxs)("div",{className:"maincomponent",children:[Object(r.jsx)(l,{}),Object(r.jsx)(p,{}),Object(r.jsx)(x,{}),Object(r.jsx)(E,{}),Object(r.jsx)(B,{})]})};var P=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(U,{})})},J=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(e){var t=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;t(A),n(A),i(A),a(A),s(A)}))};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(P,{})}),document.getElementById("root")),J()}],[[17,1,2]]]);
//# sourceMappingURL=main.790f8291.chunk.js.map