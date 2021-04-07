(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{59:function(n,e,t){},60:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t(1),c=t.n(a),i=t(21),o=t.n(i),s=t(5),d=t(2),u=t(3);function x(){var n=Object(d.a)(["\nwidth: 400px;\ncolor: rgba(0, 0, 0, 0.62);\nfont-size: 64px;\nline-height: 75px;\nmargin: 10px;\nmargin-bottom: 0px;\n\n@media screen and (max-width: 480px) {\n    margin: 0px;\n    font-size: 36px;\n    line-height: 42px;\n}\n"]);return x=function(){return n},n}function j(){var n=Object(d.a)(["\ncolor: rgba(0, 0, 0, 0.62);\nfont-size: 64px;\nline-height: 75px;\nmargin: 10px;\n\n@media screen and (max-width: 480px) {\n    margin: 0px;\n    font-size: 36px;\n    line-height: 42px;\n\n}\n"]);return j=function(){return n},n}var p=u.a.h2(j()),b=u.a.h2(x()),l=function(n){var e=n.city,t=(n.country,n.errorMessage);return t?Object(r.jsx)("h2",{children:t}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p,{className:"location-details",children:"WEATHER IN ".concat(e.toUpperCase())}),Object(r.jsx)(b,{className:"location-details-two",children:"THIS WEEK "})]})};l.defaultProps={errorMessage:""};var m=l,h=t(7),f=t.n(h),g=t(8),O=t.n(g);function v(){var n=Object(d.a)(["\n   border-color: rgba(206, 121, 107, 1);\n   background: rgba(206, 121, 107, 1);\n   margin-top: 10px;\n   font-size: 15px;\n   border-radius: 10px;\n   height: 30px;\n   width: 100px;\n"]);return v=function(){return n},n}function y(){var n=Object(d.a)(["\n    margin: 15px;\n    font-size: 1.5em;\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 30px 30px;\n    background-color: grey;\n    border-radius: 20px;\n    text-align: center;\n    "]);return y=function(){return n},n}function w(){var n=Object(d.a)([" \n    margin: 40px 100px;\n    border-radius: 20px;\n    display: flex;\n    justify-content: space-between;\n    color: rgba(0, 0, 0, 0.62);\n    background: rgba(250, 237, 235, 0.6);\n\n   @media screen and (max-width: 480px) {\n    margin: 20px 10px;\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n   }\n    "]);return w=function(){return n},n}var S=u.a.div(w()),N=u.a.h2(y()),M=u.a.button(v()),k=function(n){n.date;var e=n.temperature,t=n.description;return Object(r.jsxs)(N,{children:[Object(r.jsx)("div",{className:"date","data-testid":"date-id",children:Object(r.jsx)("span",{children:O()(n.date).format("ddd Do MMM")})}),Object(r.jsx)("div",{className:"temperature","data-testid":"temperature-id",children:Object(r.jsxs)("span",{children:[e,"\xb0c"]})}),Object(r.jsx)("div",{className:"description","data-testid":"description-id",children:Object(r.jsx)("span",{children:t})}),Object(r.jsx)("div",{className:"icon","data-testid":"icon-id",children:Object(r.jsxs)("span",{children:["  ",Object(r.jsx)(f.a,{name:"owm",iconId:n.icon})," "]})}),Object(r.jsx)(M,{onClick:function(){return n.onSelect(n.date)},children:"More details"})]})},T=function(n){return Object(r.jsx)(S,{children:n.forecasts.map((function(e){return Object(r.jsx)(k,{onSelect:n.onForecastSelect,date:e.date,description:e.description,icon:e.icon.toString(),temperature:e.temperature.max},e.date)}))})};function z(){var n=Object(d.a)(["\npadding: 10px;\npadding-bottom: 30px;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n"]);return z=function(){return n},n}function E(){var n=Object(d.a)(["\ndisplay: block;\nmargin-left: auto;\nmargin-right: auto;\nbackground: grey;\nwidth: 400px;\nborder-radius: 20px;\ncolor: rgba(0, 0, 0, 0.62);\n\n@media screen and (max-width: 480px) {\n    width: 340px;\n}\n\n"]);return E=function(){return n},n}var I=u.a.div(E()),C=u.a.div(z()),F=function(n){var e=n.forecast,t=e.date,a=e.icon,c=e.temperature,i=e.wind,o=e.humidity;return Object(r.jsx)(I,{children:Object(r.jsxs)(C,{children:[Object(r.jsx)("h3",{children:"Details:"}),Object(r.jsx)("div",{className:"main-date",children:O()(t).format("ddd Do MMM")}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"main-icon","data-testid":"test-icon",children:Object(r.jsx)(f.a,{name:"owm",iconId:a})}),Object(r.jsxs)("div",{className:"max-temperature",children:["Maximum Temperature: ",c.max,"\xb0c"]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"min-temperature",children:["Minimum Temperature: ",c.min,"\xb0c"]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"big-humidity",children:["Humidity: ",o,"%"]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"wind-speed",children:["Wind: ",i.speed,"mph ",Object(r.jsx)("i",{className:"windy"})]})]})})},D=t(25),H=t.n(D),W=function(n,e,t,r,a){a("");var c="https://mcr-codes-weather-app.herokuapp.com/forecast";return n&&(c+="?city=".concat(n)),H.a.get(c).then((function(n){e(n.data.forecasts[0].date),t(n.data.forecasts),r(n.data.location)})).catch((function(n){var e=n.response.status;404===e&&(a("That place doesn't exist! Please try again."),console.error("Location is not valid",n)),500===e&&(a("Server error, try again later."),console.error("Server error",n))}))};function J(){var n=Object(d.a)(["\nborder-color: rgba(206, 121, 107, 1);\nbackground: rgba(206, 121, 107, 1);\nfont-size: 1em;\nborder-radius: 10px;\nheight: 30px;\nwidth: 100px;\n\n"]);return J=function(){return n},n}function P(){var n=Object(d.a)(["\nmargin-top: 0px;\nmargin-bottom: 30px;\nborder-color: rgba(0, 0, 0, 0.62);\nbackground: rgba(0, 0, 0, 0.1);\nfont-size: 1em;\nheight: 30px;\nwidth: 300px;\nborder-radius: 10px;\n\n@media screen and (max-width: 480px) {\n    margin-bottom: 15px;\n   }\n"]);return P=function(){return n},n}function A(){var n=Object(d.a)(["\nmargin-left: 800px;\nmargin-bottom: 50px;\ndisplay: flex;\nflex-direction: column;\ntext-align: center;\n\n@media screen and (max-width: 480px) {\n    margin: 0px;\n    padding-top: 15px;\n   }\n"]);return A=function(){return n},n}var B=u.a.div(A()),K=u.a.input(P()),L=u.a.button(J()),R=function(n){var e=n.searchText,t=n.setSearchText,a=n.onSubmit;return Object(r.jsxs)(B,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(K,{type:"text",value:e,onChange:function(n){return t(n.target.value)},placeholder:"   Type in city.."})}),Object(r.jsx)("div",{children:Object(r.jsx)(L,{type:"submit",onClick:a,children:"Search"})})]})},U=(t(59),function(){var n=Object(a.useState)({city:"",country:""}),e=Object(s.a)(n,2),t=e[0],c=e[1],i=Object(a.useState)(0),o=Object(s.a)(i,2),d=o[0],u=o[1],x=Object(a.useState)([]),j=Object(s.a)(x,2),p=j[0],b=j[1],l=Object(a.useState)(""),h=Object(s.a)(l,2),f=h[0],g=h[1],O=Object(a.useState)(""),v=Object(s.a)(O,2),y=v[0],w=v[1];Object(a.useEffect)((function(){W(f,u,b,c,w)}),[]);var S=p.find((function(n){return n.date===d}));return Object(r.jsxs)("div",{className:"forecast",children:[Object(r.jsx)(m,{city:t.city,country:t.country,errorMessage:y}),Object(r.jsx)(R,{searchText:f,setSearchText:g,onSubmit:function(){W(f,u,b,c,w),g("")}}),!y&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(T,{forecasts:p,onForecastSelect:function(n){u(n)}}),S&&Object(r.jsx)(F,{forecast:S})]})]})});o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(U,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.c32b734a.chunk.js.map