(this.webpackJsonppersonalwebsite=this.webpackJsonppersonalwebsite||[]).push([[0],[,,,,,,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){},,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){"use strict";t.r(e);var s=t(1),n=t.n(s),a=t(4),i=t.n(a),r=(t(9),t(10),t(11),t.p+"static/media/smaller.f59ba0a3.jpg"),c=t(0),o=function(A){return Object(c.jsx)("div",{className:"welcometext",children:Object(c.jsx)("h1",{children:A.text})})},g=function(){return Object(c.jsx)("div",{className:"welcome",style:{backgroundImage:"url(".concat(r,")")},children:Object(c.jsx)(o,{text:"\u2014 Hi I'm Nicholas! \u2014"})})},l=(t(13),function(A){return Object(c.jsx)("div",{className:"journeytitle",children:Object(c.jsx)("h1",{children:A.title})})}),C=function(A){return Object(c.jsxs)("div",{className:"entrytext invert",children:[Object(c.jsx)("div",{className:"maintext",children:Object(c.jsx)("h1",{children:A.text})}),Object(c.jsx)("div",{className:"subtitle",children:Object(c.jsx)("h2",{children:A.subtitle})})]})},Q=function(A){return Object(c.jsx)("div",{className:"entrytext uninvert ".concat(A.dir),children:Object(c.jsx)("h1",{children:A.date})})},h=function(A){var e=A.entry?A.entry:{},t=A.on_left?"left":"right",s=[Object(c.jsx)(C,{text:e.text,subtitle:e.subtitle}),Object(c.jsx)("div",{className:"journeyicon",children:Object(c.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{className:"iconimg",src:e.img,alt:e.text})})}),Object(c.jsx)(Q,{dir:t,date:e.date})];return Object(c.jsx)("div",{className:"journeyentry",children:A.on_left?s.map((function(A){return A})):s.reverse().map((function(A){return A}))})},m=function(){var A=function(A,e,t,s,n){return{text:A,subtitle:e,date:t,img:s,url:n}},e=[A("As a Sophomore at NYUAD, I not only take technical courses in CS, but also in a wide range of fields such as political science and philosophy with global peers.","B.Sc. in Computer Science, Minors in Interactive Media and Economics","Aug 2020 - Present","https://pbs.twimg.com/profile_images/884727495911669765/UDLL0AhQ.jpg","https://nyuad.nyu.edu/"),A("At Hokan I was able to develop technical skills in Cloud Computing and API Programming, but also collaboration and teamwork skills in a professional startup environment.","Data Engineer Intern - Hokan Inc.","Oct 2020 - Mar 2021","https://pbs.twimg.com/profile_images/1375268699809017857/mu64gZiX_400x400.jpg","https://www.corp.hkn.jp/"),A("In the VEX Robotics program, I worked with and lead a team to build, program, and compete with a robot in numerous tournaments, winning numerous awards.","VEX Robotics Club Leader, Co-Captain, Lead Programmer","Aug 2018 - Jun 2020","https://pbs.twimg.com/profile_images/759142234562277376/e9hjUIwQ.jpg","https://www.vexrobotics.com/v5/competition/vrc-current-game"),A("I not only received my high school diploma at ASIJ but I also was able to explore my interests in Computer Science through coursework and extracurriculars.","High School Diploma, AP Scholar with Distinction","Aug 2016 - Jun 2021","https://pbs.twimg.com/profile_images/1053133976527765504/VOaJEN5D.jpg","https://www.asij.ac.jp")];return Object(c.jsxs)("div",{className:"journey",children:[Object(c.jsx)(l,{title:"\u2014 My Journey \u2014"}),e.map((function(A,e){return Object(c.jsx)(h,{entry:A,on_left:e%2===0})}))]})},I=(t(14),t.p+"static/media/robo.188c3697.JPEG"),d=function(A){return Object(c.jsx)("div",{className:"aboutmeimg",style:{backgroundImage:"url(".concat(A.src,")")}})},B=function(A){return Object(c.jsxs)("div",{className:"textentry",children:[Object(c.jsx)("h1",{className:"question",children:A.question}),Object(c.jsx)("h2",{className:"answer",children:A.answer})]})},u=function(){var A=function(A,e){return{q:A,a:e}},e=[A('"Who Am I?"',"My name is Nicholas Raffone, and I'm a Italian Japanese undergrad sophomore with a passion for computing!"),A('"What Motivates Me?"',"I like to stay motivated by being present in my activities everyday. By being attentive to small details when I pen spin, listen to indie music, or go on urban hikes, I'm able to find topics I want to explore and learn about the world around me."),A('"What\'s My Biggest Dream?"',"At some point I want to open a caf\xe8 to host a variety of events and interact with the local community.")];return Object(c.jsx)("div",{className:"aboutmetext",children:e.map((function(A){return Object(c.jsx)(B,{question:A.q,answer:A.a})}))})},w=function(){return Object(c.jsxs)("div",{className:"aboutme",children:[Object(c.jsx)(u,{}),Object(c.jsx)(d,{src:I})]})},E=t(3),S=(t(15),t.p+"static/media/album.a6d52ad8.png"),p=t.p+"static/media/robo2.142f22e7.JPEG",k=t.p+"static/media/dis.378a92c5.png",f=t.p+"static/media/site.f224bcd5.png",y=t.p+"static/media/paper.d73a59ff.png",b=function(A){var e=A.color?A.color:A.def;return Object(c.jsx)("h1",{className:"itemname ".concat(A.hide?"hide":""),onClick:function(){A.setID(A.id)},onMouseOver:function(A){A.target.style.color=e},onMouseLeave:function(e){e.target.style.color=A.def},children:A.title})},j=function(A){return Object(c.jsxs)("div",{className:"achievementcontent",style:{"background-color":A.entry.color},children:[Object(c.jsx)("div",{className:"achievementimg",children:Object(c.jsx)("img",{src:A.entry.img,alt:A.entry.title})}),Object(c.jsxs)("div",{className:"achievementtext",children:[Object(c.jsx)("h2",{children:A.entry.title}),Object(c.jsxs)("h3",{children:[A.entry.desc," ",""!==A.entry.link?Object(c.jsx)("a",{href:A.entry.link,rel:"noreferrer",target:"_blank",children:"Click here for more information."}):""]}),Object(c.jsxs)("h3",{children:["Skills: ",A.entry.skills]})]})]})},J=function(){var A=Object(s.useState)(0),e=Object(E.a)(A,2),t=e[0],n=e[1],a=Object(s.useState)(!1),i=Object(E.a)(a,2),r=i[0],o=i[1],g=function(A,e,t,s,n,a,i){return{item:A,title:e,desc:t,skills:s,color:n,img:a,link:i}},l=g("ML Research","Speculating Success: An Experimental Study","I wrote a peer-reviewed piece on improving the accuracy of neural networks compared to others in the current literature. Implementing dropout and adaptive optimisation resulted in a 10% increase in accuracy when predicting student performance.","Machine Learning, Research, Python","rgb(215, 230, 240)",y,"https://drive.google.com/file/d/1nu4-eKFU-h_owx6v6MK5llFAxMP7oKYO/view?usp=sharing"),C=g("Earthquake Notifier","Earthquake Notifier","The Earthquake Notifier is an AWS Serverless app I built at Hokan to relay real time natural disaster information that may have affected clients for the Customer Success team to follow up if deemed necessary. Information is received from government sources and set through Slack.","AWS SAM, API Programming, Python","rgb(240, 219, 255)",k,""),Q=g("Daily Site Diff Checker","Daily Site Diff Checker","The Daily Site Diff Checker is an AWS Serverless app designed to easily understand the difference between a site at two different periods of time. A user is able to check diffs on a daily basis or retrieve an HTML page containing page differences via a modal in Slack.","AWS SAM, Web Scraping, Python","rgb(220, 255, 225)",f,""),h=[l,g("Album Art Quiz","Album Art Quiz","For music enjoyers: The Album Art Quiz is a game made in React where upon picking a genre, the page will have you guess 10 album names based on pixelated art and a color palette. Users log in using their Spotify credentials which is then used to access the Spotify API.","React JS, HTML, CSS, API Programming","rgb(212, 223, 252)",S,"https://nicholasraffone.github.io/album-game/"),Q,g("Robotics Events","Robotics Events","As a co-captain and lead programmer of VEX Robotics team 901J, I lead my team of 7 students to qualify for the VEX World Championships two years in a row. Earning 6 trophies, we surpassed the ASIJ record for number of awards attained in a season and won 2 international events.","Leadership, C++, Teamwork","rgb(220, 219, 255)",p,""),C];return Object(c.jsxs)("div",{className:"achievements",children:[Object(c.jsxs)("div",{className:"items",children:[Object(c.jsxs)("div",{className:"achievementtitlewrapper",children:[Object(c.jsx)("h1",{className:"achievementtitle",children:"Achievements and Projects"}),Object(c.jsx)("div",{children:Object(c.jsx)("img",{className:"expandbutton",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAAGACAYAAACkx7W/AAAABmJLR0QA/wD/AP+gvaeTAAADPElEQVR4nO3VwQ0CAQzEwBz993wUwWORPNNA9hXfAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8p2c94O7e9QCAkekP/iyPA7AjAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD941gPu7l0PABiZ/uDP8jgAOwIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwg2c94O7e9QCAkekP/iyPA7AjAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECABAlAABRAgAQJQAAUQIAECUAAFECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwF/5AhJhA74ILGHPAAAAAElFTkSuQmCC",onClick:function(){return o(!r)},alt:"expand"})})]}),h.map((function(A,e){return Object(c.jsx)(b,{id:e,setID:function(A){return n(A)},title:A.item,def:"rgb(51, 51, 51)",color:A.color,hide:r})}))]}),Object(c.jsx)("div",{className:"display",children:Object(c.jsx)(j,{entry:h[t]})})]})},F=function(A){return Object(c.jsx)("div",{className:"socialicons",children:A.icons.map((function(A){return Object(c.jsx)("a",{href:A.url,target:"blank_",children:Object(c.jsx)("img",{className:"socialicon",src:A.img_url,alt:A.url})})}))})},O=t.p+"static/media/resume.9c510f6e.png",U=t.p+"static/media/facebook.efdbb2ff.png",v=t.p+"static/media/insta.1c2f1db5.webp",D=t.p+"static/media/spotify.7b7d414e.png",W=(t(16),function(){var A=function(A,e){return{img_url:A,url:e}},e=[A("data:image/png;base64,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","https://www.linkedin.com/in/nicholasraffone/"),A(U,"https://facebook.com/nicholas.raffone.1"),A(v,"https://www.instagram.com/iamchechalaga/"),A(D,"https://open.spotify.com/user/nicholas.raffone"),A(O,"https://drive.google.com/file/d/1BzGKvZPqqN46cMitbSF4QZpeNXsvfGxE/view?usp=sharing"),A("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB8cSURBVHhe7d1BqGZneQfw7Fy6dOnSpcuukju74NyEWUqg1E2L3QXcKLSQFiEIhRQCBgRJoWAQSkUQU6FUaymhBsyipUlRmBujGXVqglETY7Wdfu835zp37jz3nvPd7/nOe877/v7wYzRz587Mneee8z/fOd/7PiQiIiJy8JzceOSDJ8dHR1uPHX1y8+NTANCdx44+vfnx7vnwxtGHh9NkOzm5fvTR14+vPb3x6uuPXbsDAFzo1uZ8+dzm3PnocBpdV0qbKX+BzV/k5rm/GAAwxfG1tzc/Pr85p3785OGHPzCcYpeZk8eObrjSB4B0tzZF4MnhdLucDFf8LwV/YAAgz81ysT2cfutluL//leAPCAAczivl4ns4Hc+bck9i8wd479wfCACYyeZc/NRwWp4n5TeM/iAAwOxeOPhDguU3KL/Rud8YAKjp+NpLJx87+tBwus5NWcDHg34AsFg3y7N5w2k7J9srfyd/AFi6W6mrCnrSHwBWotwOyHgmYPOJng5/AwBgqV4YTuNXy/BWv+gTAwALVjYbGk7nu2W7yI/3+QPAal1pUyH3/QFg9V4ZTuvTst3UJ/5EAMCKnOyyidDmF7xy/hMAAKt0a9K7Alz9A0BbRl8FGJb6vXn+FwIAK3Z87e1LlwouTwuGvxAAWLWTx44+OZzuH8zmA54//wsAgCZ8czjdP5jyEkHwCwCABpSN/YZT/r2cHB8dRR8MALTh5PGjTwyn/XvZ/MQz5z8QAGjI8bWvDKf9e9n8hKf/AaBt7923JkC5JxB8EADQmLLXz3D63y7+85HogwCAtty3QZAHAAGgD/c9CFj+T/RBAEBbNhf9Tw2n/+0rAE9GHwQANOeZ4fS/XQDo6eADAID2vDCc/i0BDAAdubck8Ob/KAAA0AcFAAA6pAAAQIcUAADokAIAAB1SAACgQwoAAHRIAQCADikAANAhBQAAOqQAAECHFAAA6JACAAAdUgAAoEMKAAB0SAEAgA4pAADQIQUAADqkAABAhxQAAOiQAgAAHVIAAKBDCgAAdEgBAIAOKQAA0CEFAAA6pAAAQIcUAADokAIAAB1SAACgQwoAAHRIAQCADikAANAhBQAAOqQAAECHFAAA6JACAAAdUgAAoEMKAAB0SAEAgA4pAADQIQUAADqkAABAhxQAAOiQAgAAHVIAAKBDCgAAdEgBAIAOKQAA0CEFAAA6pAAAQIcUAADokAIAAB1SAACgQwoAAHRIAQCADikAANAhBQAAOqQAAECHFAAA6JACAAAdUgAAoEMKAAB0SAEAgA4pAADQIQUAADqkAABAhxQAAOiQAgAAHVIAAKBDCgAAdEgBAIAOKQAA0CEFAAA6pAAAQIcUAADokAIAAB1SAACgQwoAAHRIAQCADikAANAhBQAAOqQAAECHFAAA6JACAAAdUgAAoEMKAAB0SAEAgA4pAADQIQUAADqkAABAhxQAAOiQAgAAHVIAAKBDCgAAdEgBAIAOKQCLdHztzs3jR7bK/y7/7Y0/+aM7P3nu2a23/+Hrd37+L/98552X/+3Or9/4AUBVv3r1P7fHpOKnX/zC9jj15l/++e+PaSfHR9vjWfnx98c5alMAFmM46ZdvkPN+9rWv3vm/3/3ujojImvKr/3rtzut//IcPHNNuXr93cUM1CkB1l5z4z/rRX/zZnf95+63h20pEZLkpFyzlwiU6lp119lVOZqcA1BR9Q1zqiRt33nnpX4dvMRGR5eX9W7e2FyzhMewCikAVCkAt5SWw6Bthip988Qt3fvfuu8O3m4jIMlIuUMqFSnTcGqMEzE4BmF0w+FdR7qu99/3vDd92IiL1Ui5Ibv31X4XHqqsIj51kUwDmFA36vv777//uzv++//7wbSgiMm9+9R//Hj7otw8PCc5CAZhLNORZyv22ct9NRGSulAuPcgESHZMybG8JBMdS0igAc4iG+xA8ICgic6RccPzgyT8Nj0OZlICDUgAOLRrqQyr34X77zjvDt6mISF7K2/ve/qd/DI89hxQdW9mbAnBo0TAfWrkfV+7LiYhkpaxDkvmg366i4yt7UQAOqbx8FQ3yXG5/+UseEBSRvfPLV7575bf3ZfFQYDoF4FCiAa6h3Kf79Q/fGL6NRUSmp7y9r6w7Eh1b5rZ9Z0BwrOXKFICD2DTVaIBrKvft7CcgIlPz65Obszzot6vwmMtVKACHUPul/4u8+bnP2k9ARC7N1HX8a/CugFQKQLoFXv3f54kbd37x8neGb3URkXu5yjr+NYTHXnalAGSLhnWJ7CcgImezzzr+c/IqQBoFIFs0sEtV3i5Y7vOJSL8pFwI//vyz4TFiqbwjIIUCkCka1DUo9/s8ICjSX9597dX0dfzn4FWAFApApqU+/DeF/QRE+smh1/E/NAUghQKQKRrUVXnihv0ERBpPKfpvfOZT8TFgRaJjMDtRANIs/en/HZTlPj0gKNJeaqzjf0jhsZipFIAs0XCumf0ERNpJ7XX8DyU6FjOZApAlGs4WlPuE9hMQWW9KkV/D2/t25TmAvSkAWdb8AOCYshyoBwRF1pVS3Jeyjv8h2BtgbwpAljKM0ZC2xH4CIuvIUtfxzxYdi5lMAcjSQwEoyn1E+wmILDOloL/1jRfD790WWRBoLwpAlmg4m/XEje3+4CKynPzm9u1VrOOfSQHYiwKQJRrO1pX7ix4QFKmftazjn00B2IsCkCUazh6U+4z2ExCpkzWu459JAdiLApAlGs6elPuOHhAUmS9rXcc/kwKwFwUgSzScvSn3H8t9SBE5XNa+jn8mBWAvCkCWaDi7ZD8BkYOllXX8sygAe1EAskTD2bNyX9J+AiJ5aW0d/wwKwF4UgCzRcPau3J8s9ylF5OppdR3/DArAXhSALNFwcpf9BESullbX8c+iAOxFAcgSDSf3lPuW9hMQmZbW1/HPogDsRQHIEg0nDyr3MUXk4vSyjv++trsBXo+Px0yiAGSJBpSY/QREHkxv6/jv43TvFQVgLwpAlvMDyuXKA4Ll/qaI9LmO/1Wc33ZdAdiLApDl7FAy3U//9m88IChdp9d1/Hdy/cGTf6EA7EUByHJ+MJnOfgLSY8o6GR70G3cz+G+nFIC9KABZouFkN+UBQfsJSA957/vf634d/ymiq/6zFIC9KABZouFkd+U+qAcEpdVYx3+iC17yP08B2IsCkCUaTq7IfgLSYMo6GB70GzflxH9KAdiLApAlGk72U+6P2k9AWsjPv/2tcMa53y4n/0IB2IsCkCUaTvZX7pOW+6Uia4x1/KfZ9cR/SgHYiwKQJRpO8thPQNaWss6FB/3GnS7qcxUKwF4UgCzRcJKr3D+1n4AsPaWolvUtohnmjIkP+l1GAdiLApAlGk4OwwOCstRYx3+afa76z1IA9qIAZImGk8Mp91V/+847w2FXpG7K+hVlHYtoVrlf1sm/UAD2ogBkiYaTw7KfgCwh5UE/b+8bt+/L/REFYC8KQJZoOJnH7S9/yQOCUiXW8Z8g4V7/RRSAvSgAWaLhZD7b/QR++MZwWBY5bKzjP81l6/hnUAD2ogBkiYaT+dlPQA4d6/hPc6ir/rMUgL0oAFmi4aSONz/3WfsJSHqs4z/dHCf/QgHYiwKQJRpOKnrixp1fvPyd4dAtsl+s4z/NXCf+UwrAXhSALNFwUp/9BGTfWMd/mrlP/oUCsBcFIEs0nCzD9gHBk5vD4VxkWqzjP03m+/p3pQDsRQHIEg0ny/Kzr33VA4IyKdbxn6bmyb9QAPaiAGSJhpPlsZ+AXBbr+E90wPf270IB2IsCkCUaThbqiRv2E5AHYh3/aWpf9Z+lAOxFAcgSDSfLVu7vekBQrOM/3ZJO/oUCsBcFIEs0nLWVq1xXNJezn0DfKQ/6lXUjotngrvI98vY/fD38udoUgL0oAFmi4aytLI1r8ZJpytfIfgJ9pawTYR3/y53uuvn+j34U/nxtCsBeFIAs0XDWdnZtfE81jyuvlnhAsP1Yx3+as8/JKABNUgCyRMNZ2/nNccqBz/uax9lPoN2UB/0U4ctF75RRAJqkAGSJhrO2i3bHs4XpuFKU7CfQTkqhcytsXPkaReVXAWiSApAlGs7aLtse19rmE2xKkgcE1x+zPq68KnLZapkKQJMUgCzRcNZ2WQEoKU2/rI4X/VruKfeLPSC4zmxf7Qr+Tblnyn4ZCkCTFIAs0XDWNlYATmMBlHH2E1hXypPrnncZscOOmQpAkxSALNFw1ja1AJR4Mnqat77xogcEFx7veBlX1j7Y5RkXBaBJCkCWaDhr26UAnOaXr3zXA4Ijyv3k39y+PXzFZCkpt2luf/lL4b8Z91zlXS4KQJMUgCzRcNZ2lQJQYhvUCTYlyX4Cy0mZdbexLre9jXXFY4IC0CQFIEs0nLVd9Zu9pFwhWB993I8//6z9BCrGnE5Tdjjc50FWBaBJCkCWaDhr26cAnKa8hcqV1eXK/eZ3X3t1+IrJXLGO/7gymxlvZVUAmqQAZImGs7aMAlBiP4Fp7CcwX6zjPy5zMSsFoEkKQJZoOGvLKgCn8XT1uDc+8yn7CRww3q0yzc+//a3hK5YTBaBJCkCWaDhryy4AJfYTmCb7ACzW8Z8iWsc/IwpAkxSALNFw1naIAnAa+wmMs59ATsqDfm5BjTvkLSgFoEkKQJZoOGs7ZAEoscb6uKyHsHqNGRtXZuy9739v+IodJgpAkxSALNFw1nboAlBSrs7sJzBu37dh9Rjr+I+bso5/RhSAJikAWaLhrG2OAnAa+wmMs5/AtFjHf4KZF6JSAJqkAGSJhrO2OQtAiSe0p7nKUqy9xDtNxpVbInM/W6IANEkByBINZ21zF4DT2E9gXI2D+JJTbo9Yx39crfKoADRJAcgSDWdttQpASTm5eRl3hP0Etilz6vbR5WrfPlIAmqQAZImGs7aaBaDEOu3TzPUg19JiPqZZwgOkCkCTFIAs0XDWVrsAnMZ+AuPmeCvXkuIVonFLegupAtAkBSBLNJy1LaUAlJQrGIu5jCtfo9YfEPSMyLilLSKlADRJAcgSDWdtSyoAp/GU97hDLedaO94lMs0Sl5FWAJqkAGSJhrO2JRaAEvsJTNPSA4LWiRi35OKnADRJAcgSDWdtSy0Ap7GfwLhSlMrCOGtNuZ1hpchxS99KWgFokgKQJRrO2pZeAEqs9T5uSQ+D7RL/tuPW8vCnAtAkBSBLNJy1raEAlLhKnKYslLOW/QS8ujNuTW//VACapABkiYaztrUUgNO4TzxuuyDMgv9dPd8xwQoXgFIAmqQAZImGs7a1FYAST4pPs8T9BLzDY9xal4BWAJqkAGSJhrO2NRaA03iv+Lg3P/fZRZxMrPEwzZo3gVIAmqQAZImGs7Y1F4ASq8VNsClJv3j5O8NXbP5Y5XHc9rbNyreBVgCapABkiYaztrUXgJJyxWS9+HFzP1Dm32WaJazjnxEFoEkKQJZoOGtroQCcxpXmuLmuNL0yM26tb928KApAkxSALNFw1tZSAShxr3ma8pbKQ91r9mzGuFKO1vig32VRAJqkAGSJhrO21grAaTxtPi57WVnvzphmiev4Z0QBaJICkCUaztpaLQAl3m8+QdL7za3PMG7J6/hnRAFokgKQJRrO2louAKex4ty4UpSu8oBguY1ghcZxS1/HPyMKQJMUgCzRcNbWQwEoseb8uF0fSvM1HbeWdfwzogA0SQHIEg1nbb0UgBJXq9NMuVr1qsq4Na3jnxEFoEkKQJZoOGvrqQCcxv3qceXrE92v9lzFBEnPVawtCkCTFIAs0XDW1mMBKPHE+jRnl6b1zopxa13HPyMKQJMUgCzRcNbWawE4jfesjytX/GWb4ejnuGfN6/hnRAFokgKQJRrO2novACVWrWMfc62uuPQoAE1SALJEw1mbAnA35crNuvXsqpV1/DOiADRJAcgSDWdtCsD9KQ++eUCQMa2t458RBaBJCkCWaDhrUwAejP0EuEy5XdTrg36XRQFokgKQJRrO2hSAi+Opd85rdR3/jCgATVIAskTDWZsCcHm8752i9XX8M6IANEkByBINZ20KwLRY+a5fPazjnxEFoEkKQJZoOGtTAKbH2vd96Wkd/4woAE1SALJEw1mbArBb7CfQhx9//tmu1vHPiALQJAUgSzSctSkAV4v9BBrV6Tr+GVEAmqQAZImGszYF4Oqxn0Bbyu2d39y+Pfzryq5RAJqkAGSJhrM2BWD/2E9g/d76xotdr+OfEQWgSQpAlmg4a1MAcmI/gXWyjn9eFIAmKQBZouGsTQHIi/0E1qXcvvH2vrwoAE1SALJEw1mbApAf+wks3BM3rON/gCgATVIAskTDWZsCcJjYT2CZrON/uCgATVIAskTDWZsCcNjYT2A5yu0ZOVwUgCYpAFmi4axNATh87CdQ1xuf+ZR1/GeIAtAkBSBLNJy1KQDzxX4C87OO/3xRAJqkAGSJhrM2BWDe2E9gHuW2y7uvvTp81WWOKABNUgCyRMNZmwIwf+wncFjW8a8TBaBJCkCWaDhrUwDqxX4CyazjXzUKQJMUgCzRcNamANSN/QRyWMe/fhSAJikAWaLhrE0BWEbsJ3B11vFfRhSAJikAWaLhrE0BWE7sJ7Ab6/gvKwpAkxSALNFw1qYALCv2E5jGOv7LiwLQJAUgSzSctSkAy4z9BC5gHf/FRgFokgKQJRrO2hSA5cZ+Avezjv+yowA0SQHIEg1nbQrA8mM/Aev4ryEKQJMUgCzRcNamAKwjve4nYB3/9UQBaJICkCUaztoUgHWlp/0ErOO/rigATVIAskTDWZsCsL60vp+AdfzXGQWgSQpAlmg4a1MA1plW9xOwjv96owA0SQHIEg1nbQrAutPMfgLW8V99FIAmKQBZouGsTQFYf9a+n4B1/NuIAtAkBSBLNJy1KQDtZI37CVjHv50oAE1SALJEw1mbAtBW1rKfgHX824sC0CQFIEs0nLUpAO1l6fsJWMe/zSgATVIAskTDWZsC0G4Wt5+AdfybjgLQJAUgSzSctSkAbWcp+wlYx7/9KABNUgCyRMNZmwLQR2ruJ2Ad/z6iADRJAcgSDWdtCkA/mXs/Aev49xUFoEkKQJZoOGtTAPrLHPsJWMe/vygATVIAskTDWZsC0GcOtZ+Adfz7jQLQJAUgSzSctSkA/SZ7PwHr+PcdBaBJCkCWaDhrUwBk7/0ErOMvmygATVIAskTDWZsCICVX3U/AOv5yGgWgSQpAlmg4a1MA5Gx22U/AOv5yNgpAkxSALNFw1qYAyPmM7SdgHX+JogA0SQHIEg1nbQqARLloPwHr+MtFUQCapABkiYazNgVALsvv9xOwjr+MRAFokgKQJRrO2hQAGUu54v/tO+8M/08kjgLQJAUgSzSctSkAIpIRBaBJCkCWaDhrUwBEJCMKQJMUgCzRcNamAIhIRhSAJikAWaLhrE0BEJGMKABNUgCyRMNZmwIgIhlRAJqkAGSJhrM2BUBEMqIANEkByBINZ20KgIhkRAFokgKQJRrO2hQAEcmIAtAkBSBLNJy1KQAikhEFoEkKQJZoOGtTAEQkIwpAkxSALNFw1qYAiEhGFIAmKQBZouGsTQEQkYwoAE1SALJEw1mbAiAiGVEAmqQAZImGszYFQEQyogA0SQHIEg1nbQqAiGREAWiSApAlGs7aFAARyYgC0CQFIEs0nLUpACKSEQWgSQpAlmg4a1MARCQjCkCTFIAs0XDWpgCISEYUgCYpAFmi4axNARCRjCgATVIAskTDWZsCICIZUQCapABkiYazNgVARDKiADRJAcgSDWdtCoCIZEQBaJICkCUaztoUABHJiALQJAUgSzSctSkAIpIRBaBJCkCWaDhrUwBEJCMKQJMUgCzRcNamAIhIRhSAJikAWaLhrE0BEJGMKABNUgCyRMNZmwIgIhlRAJqkAGSJhrM2BUBEMqIANEkByBINZ20KgIhkRAFokgKQJRrO2hQAEcmIAtAkBSBLNJy1KQAikhEFoEkKQJZoOGtTAEQkIwpAkxSALNFw1qYAiEhGFIAmKQBZouGsTQEQkYwoAE1SALJEw1mbAiAiGVEAmqQAZImGszYFQEQyogA0SQHIEg1nbQqAiGREAWiSApAlGs7aFAARyYgC0CQFIEs0nLUpACKSEQWgSQpAlmg4a1MARCQjCkCTFIAs0XDWpgCISEYUgCYpAFmi4axNARCRjCgATVIAskTDWZsCICIZUQCapABkiYazNgVARDKiADRJAcgSDWdtCoCIZEQBaJICkCUaztoUABHJiALQJAUgSzSctSkAIpIRBaBJCkCWaDhrUwBEJCMKQJMUgCzRcNamAIhIRhSAJikAWaLhrE0BEJGMKABNUgCyRMNZmwIgIhlRAJqkAGSJhrM2BUBEMqIANEkByBINZ20KgIhkRAFokgKQJRrO2hQAEcmIAtAkBSBLNJy1KQAikhEFoEkKQJZoOGtTAEQkIwpAkxSALNFw1qYAiEhGFIAmKQBZouGsTQEQkYwoAE1SALJEw1mbAiAiGVEAmqQAZImGszYFQEQyogA0SQHIEg1nbQqAiGREAWiSApAlGs7aFAARyYgC0CQFIMvN40fCAa1JARCRjCgATVIAsigAItJqFlsAgmMxkykAWRQAEWk1SywAN68/Eh6LmUwByBINaG0KgIhkRAFokgKQJRrQ2hQAEcmIAtAkBSBNMKC1KQAikpFFFoBjBWBPCkCa4+W9CqAAiEhGllgAyjE3PBYzlQKQaWkPAioAIpKRRRaA4BjMThSATNGQ1qQAiEhGllYA3P9PoQCkWthtAAVARDKytALw+nWvACRQALKVZhoNbA0KgIhkZHEFIDj2sjMFIFs0rLUoACKSkSUVAE//p1EADmEpDwMqACKSkSUVgOiYy5UoAAexkGcBFAARychSCoCH/1IpAIeyhFcBFAARycgSCoCX/tMpAIcUDfGcFAARycgiCoCr/2wKwCFFQzwnBUBEMlK7ALj6PwgF4NBq3gpQAEQkIzULgJP/wSgAc6hVAhQAEclIrQLg5H9QCsBcaiwQpACISEZqFYDXr8fHU1IoAHOa+5UABUBEMjJ3Adg+8Ofkf2gKwNzmLAEKgIhkZM4C4GX/2SgANURDfwgKgIhkZK4C4K1+s1IAqjk+/KsBCoCIZOTQBeD0WBgeKzkUBaC2s8OfTQEQkYwcsgB4yb8aBWApom+MfSkAIpKRQxQAJ/7qFIDFGTYSynhVQAEQkYxkFYDtSX9zjAuPfcxNAVi0M2Xg1PlvqMuEnxNgV9d3f5Vye8y6fve45aS/SAoAAHRIAQCADikAANAhBQAAOqQAAECHFAAA6JACAAAdUgAAoEMKAAB0SAEAgA4pAADQIQUAADqkAABAhxQAAOiQAgAAHVIAAKBDCgAAdEgBAIAOKQAA0CEFAAA6pAAAQIcUAADokAIAAB1SAACgQwoAAHRIAQCADikAANAhBQAAOqQAAECHFAAA6JACAAAdUgAAoEMKAAB0SAEAgA4pAADQIQUAADqkAABAhxQAAOiQAgAAHVIAAKBDCgAAdEgBAIAOKQAA0CEFAAA6pAAAQIcUAADokAIAAB1SAACgQwoAAHRIAQCADikAANAhBQAAOqQAAECHFAAA6JACAAAdUgAAoEMKAAB0SAEAgA4pAADQIQUAADqkAABAhxQAAOiQAgAAHVIAAKBDCgAAdEgBAIAOKQAA0CEFAAA6pAAAQIcUAADokAIAAB1SAACgQwoAAHRIAQCADikAANAhBQAAOqQAAECHFAAA6JACAAAdUgAAoEMKAAB0SAEAgA4pAADQIQUAADqkAABAhxQAAOiQAgAAHVIAAKBDCgAAdEgBAIAOKQAA0CEFAAA6pAAAQIcUAADokAIAAB1SAACgQ2cKwPG154IPAADa8+Jw+n/ooZPjo6eCDwAA2vP8cPrfFIDHjz4RfAAA0Jhy0T+c/jcF4PrRo9EHAQBtOXns6JPD6X9bAD4afRAA0JZNAbgxnP43BeBjRx+KPggAaMvJ40d/MJz+72bzH987/0EAQFvKRf9w6r+bzX984fwHAQANOb720nDav5eT46OPhx8MADTh5LGjTw+n/Xs5ufHIBzc/6TYAADRqUwA+Mpz278/mJ188/8EAQAOOr706nO4fTHlvYPiLAIB1O7729HC6fzDD2wHdBgCAxpQ1f4bTfZzNBz1z/hcBACt2fO0rw2n+4pw8/PAHNh9864FfDACs0XsPvPf/opwcHz0ZfAIAYH2eGU7v4/EqAAA0YfrV/2nKZgHBJwIAVqK8oj+c1nfL68fXnos+IQCweC8Op/PdM9wK+Oa5TwgALNvNssLvcDq/WoYlgm+e+8QAwBIdX3v7wiV/d035ROUThr8RALAYJ9ePHh1O3zkpn1AJAIDlOnn86BPDaTs3ZRnBzW/gdgAALMndl/1vDKfrw2S7X8DxtZfCPwAAMLebo+v8Z2V4d8AL5/4AAMCcNhfkez/tf5Vslwz2XAAA1PBMuSAfTsnzZ3ibYNlB0DbCAHB4L5zcOPrwcBqun/KH2fyhnj/3hwQAcnxztnv9V8n2nQJ3lxD2bgEA2Mfd2+zPnxwfHQ2n2XVkKANPb7z6wF8KAIjcLBfSqzvpX5SymmD5y2x+/PTmx6eGVwnKPgMA0Ktydf/U1vWjRxf9Er+IiIisPQ899P8wKc1XfIrT2wAAAABJRU5ErkJggg==","mailto:nr2302@nyu.edu")];return Object(c.jsxs)("div",{className:"socials",children:[Object(c.jsx)("h1",{children:"\u2014 Connect with me! \u2014"}),Object(c.jsx)("h2",{children:"Add me on LinkedIn, follow me on Instagram, or even check out my Spotify profile!"}),Object(c.jsx)(F,{icons:e})]})}),x=function(){return Object(c.jsxs)("div",{className:"maincomponent",children:[Object(c.jsx)(g,{}),Object(c.jsx)(m,{}),Object(c.jsx)(w,{}),Object(c.jsx)(J,{}),Object(c.jsx)(W,{})]})};var R=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(x,{})})},L=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(e){var t=e.getCLS,s=e.getFID,n=e.getFCP,a=e.getLCP,i=e.getTTFB;t(A),s(A),n(A),a(A),i(A)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(R,{})}),document.getElementById("root")),L()}],[[17,1,2]]]);
//# sourceMappingURL=main.86fbd8a0.chunk.js.map