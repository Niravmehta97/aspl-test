(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1609],{1036:function(e,a,d){"use strict";d.d(a,{Z:function(){return B}});var o=d(8520),c=d.n(o),n=d(5893),i=d(7294),l=d(2283),m=d(9669),r=d.n(m),t=d(6455),s=d.n(t),_=d(7630),u=d.n(_),h=d(918),b=d.n(h),f=d(7105),p=d(4853),S=d(5538),C=(d(993),d(715)),N=d(519),g=d(5951);function M(e,a,d,o,c,n,i){try{var l=e[n](i),m=l.value}catch(r){return void d(r)}l.done?a(m):Promise.resolve(m).then(o,c)}function x(e){return function(){var a=this,d=arguments;return new Promise((function(o,c){var n=e.apply(a,d);function i(e){M(n,o,c,i,l,"next",e)}function l(e){M(n,o,c,i,l,"throw",e)}i(void 0)}))}}function y(e,a,d){return a in e?Object.defineProperty(e,a,{value:d,enumerable:!0,configurable:!0,writable:!0}):e[a]=d,e}function v(e){for(var a=1;a<arguments.length;a++){var d=null!=arguments[a]?arguments[a]:{},o=Object.keys(d);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(d).filter((function(e){return Object.getOwnPropertyDescriptor(d,e).enumerable})))),o.forEach((function(a){y(e,a,d[a])}))}return e}u()(s());var A="",G={name:"",email:"",number:"",subject:"",text:"",countryCode:"US"};function j(e){e}function B(e){var a=e.customMessage,d=(0,i.useState)(G),o=d[0],m=d[1],t=(0,l.cI)({reValidateMode:"onBlur"}),s=t.register,_=t.handleSubmit,u=t.errors,h=(0,i.useState)(!1),M=h[0],B=h[1],T=function(e){var a=e.target,d=a.name,o=a.value;m((function(e){return v({},e,y({},d,o))}))},I=x(c().mark((function e(a){var d,n,i,l,t,s,_;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d=o.name,n=o.email,i=o.number,l=o.countryCode,t=o.text,s=g.find((function(e){return e.code==l})),_={emailAddress:n,salutationName:"Mr.",firstName:d,lastName:"",middleName:"",phoneNumber:"".concat(s&&s.dial_code," ").concat(i),addressCountry:A,description:t},e.next=6,r().post("".concat(f.s,"/api/v1/LeadCapture/9a2349aa768cae26379c39ff0858a53f"),_).then((function(e){"",B(!0),m(G)})).catch((function(e){(0,S.Am)(e.message)}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),(0,S.Am)("Something went wrong, please try after sometime.");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return i.useEffect(x(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,N.W)();case 2:if(!(a=e.sent)){e.next=8;break}return e.next=6,(0,N.p)(a);case 6:A=e.sent,m(v({},o,{countryCode:A}));case 8:case"end":return e.stop()}}),e)}))),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("form",{onSubmit:_(I),children:[(0,n.jsx)("h3",{className:"fw-bold ".concat(b()["contact-title"]," mb-3 mb-xl-4"),children:a?(0,n.jsx)("span",{className:"text-dark",children:a}):(0,n.jsxs)(n.Fragment,{children:["Want to chat about your ",(0,n.jsx)("span",{children:"dream project?"})]})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{className:'"form-control form-control-lg '.concat(b()["form-control"],' mb-xl-4 mb-2"'),type:"text",placeholder:"Full Name","aria-label":"full-name",value:o.name,name:"name",onChange:T,required:!0,ref:s({required:!0})}),(0,n.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:u.name&&"Name is required."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{className:'"form-control form-control-lg '.concat(b()["form-control"],' mb-xl-4 mb-2"'),type:"text",placeholder:"Email","aria-label":"email",name:"email",value:o.email,onChange:T,required:!0,ref:s({required:!0,pattern:/^\S+@\S+$/i})}),(0,n.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:u.email&&"Email is required."})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:b()["contacy-number-componenet"],children:[(0,n.jsx)("select",{className:'"form-control form-control-lg '.concat(b()["form-control"],' mb-3"'),name:"countryCode",id:"",onChange:T,value:o.countryCode,children:g.map((function(e){var a=e.code,d=e.dial_code;return(0,n.jsx)("option",{value:a,children:d},a+d)}))}),(0,n.jsxs)("div",{className:"w-100",children:[(0,n.jsx)("input",{className:'"form-control form-control-lg '.concat(b()["form-control"],' mb-xl-4 mb-2"'),type:"text",placeholder:"Contact Number","aria-label":"phone-number",value:o.number,name:"number",required:!0,onChange:function(e){e.target.value.length<=15&&T(e)},ref:s({required:!0,pattern:/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/})}),(0,n.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:u.number&&"Number is required."})]})]})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{className:'"form-control form-control-lg '.concat(b()["form-control"],' mb-xl-4 mb-2"'),type:"text",placeholder:"Project Details","aria-label":"project",name:"text",value:o.text,onChange:T,required:!0,ref:s({required:!0})}),(0,n.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:u.text&&"Text body is required."})]}),(0,n.jsxs)("div",{className:"d-grid d-md-flex d-lg-grid d-xl-flex justify-content-xl-between justify-content-md-between align-items-center",children:[(0,n.jsx)(p.Z,{sitekey:"6LdvMikeAAAAAOrPn0Qql0qaWigvy2cB65bIoGHx",onChange:j}),(0,n.jsx)("button",{className:"".concat(b()["inquire-btn"]," mt-3 mt-sm-0 ms-xl-3 mb-3"),children:"Inquire Now"})]}),(0,n.jsx)(S.Ix,{})]}),(0,n.jsxs)(C.Z,{centered:!0,className:"cust-cont-pop",show:M,size:"md",onHide:function(){B(!1)},children:[(0,n.jsx)(C.Z.Header,{closeButton:!0,className:"modal-cust-header thank-header"}),(0,n.jsx)(C.Z.Body,{children:(0,n.jsx)("div",{className:"modal-box",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"thanku-cont",children:[(0,n.jsx)("div",{className:"icon",children:(0,n.jsx)("i",{className:"flaticon-check"})}),(0,n.jsx)("h2",{children:"Thank you for contacting us"})]})})})})]})]})}},7105:function(e,a,d){"use strict";d.d(a,{s:function(){return o}});var o="https://crm.ashapurasoftech.com";a.Z="https://ashapurasoftech.com"},918:function(e){e.exports={"contact-title":"ContactFormV1_contact-title__Gjv9R","form-control":"ContactFormV1_form-control__A_STj","inquire-btn":"ContactFormV1_inquire-btn__eqy_C",required:"ContactFormV1_required__lRBHC","contacy-number-componenet":"ContactFormV1_contacy-number-componenet__TXQg9"}},5951:function(e){"use strict";e.exports=JSON.parse('[{"name":"Afghanistan","dial_code":"+93","code":"AF"},{"name":"Aland Islands","dial_code":"+358","code":"AX"},{"name":"Albania","dial_code":"+355","code":"AL"},{"name":"Algeria","dial_code":"+213","code":"DZ"},{"name":"AmericanSamoa","dial_code":"+1684","code":"AS"},{"name":"Andorra","dial_code":"+376","code":"AD"},{"name":"Angola","dial_code":"+244","code":"AO"},{"name":"Anguilla","dial_code":"+1264","code":"AI"},{"name":"Antarctica","dial_code":"+672","code":"AQ"},{"name":"Antigua and Barbuda","dial_code":"+1268","code":"AG"},{"name":"Argentina","dial_code":"+54","code":"AR"},{"name":"Armenia","dial_code":"+374","code":"AM"},{"name":"Aruba","dial_code":"+297","code":"AW"},{"name":"Australia","dial_code":"+61","code":"AU"},{"name":"Austria","dial_code":"+43","code":"AT"},{"name":"Azerbaijan","dial_code":"+994","code":"AZ"},{"name":"Bahamas","dial_code":"+1242","code":"BS"},{"name":"Bahrain","dial_code":"+973","code":"BH"},{"name":"Bangladesh","dial_code":"+880","code":"BD"},{"name":"Barbados","dial_code":"+1246","code":"BB"},{"name":"Belarus","dial_code":"+375","code":"BY"},{"name":"Belgium","dial_code":"+32","code":"BE"},{"name":"Belize","dial_code":"+501","code":"BZ"},{"name":"Benin","dial_code":"+229","code":"BJ"},{"name":"Bermuda","dial_code":"+1441","code":"BM"},{"name":"Bhutan","dial_code":"+975","code":"BT"},{"name":"Bolivia, Plurinational State of","dial_code":"+591","code":"BO"},{"name":"Bosnia and Herzegovina","dial_code":"+387","code":"BA"},{"name":"Botswana","dial_code":"+267","code":"BW"},{"name":"Brazil","dial_code":"+55","code":"BR"},{"name":"British Indian Ocean Territory","dial_code":"+246","code":"IO"},{"name":"Brunei Darussalam","dial_code":"+673","code":"BN"},{"name":"Bulgaria","dial_code":"+359","code":"BG"},{"name":"Burkina Faso","dial_code":"+226","code":"BF"},{"name":"Burundi","dial_code":"+257","code":"BI"},{"name":"Cambodia","dial_code":"+855","code":"KH"},{"name":"Cameroon","dial_code":"+237","code":"CM"},{"name":"Canada","dial_code":"+1","code":"CA"},{"name":"Cape Verde","dial_code":"+238","code":"CV"},{"name":"Cayman Islands","dial_code":"+ 345","code":"KY"},{"name":"Central African Republic","dial_code":"+236","code":"CF"},{"name":"Chad","dial_code":"+235","code":"TD"},{"name":"Chile","dial_code":"+56","code":"CL"},{"name":"China","dial_code":"+86","code":"CN"},{"name":"Christmas Island","dial_code":"+61","code":"CX"},{"name":"Cocos (Keeling) Islands","dial_code":"+61","code":"CC"},{"name":"Colombia","dial_code":"+57","code":"CO"},{"name":"Comoros","dial_code":"+269","code":"KM"},{"name":"Congo","dial_code":"+242","code":"CG"},{"name":"Congo, The Democratic Republic of the Congo","dial_code":"+243","code":"CD"},{"name":"Cook Islands","dial_code":"+682","code":"CK"},{"name":"Costa Rica","dial_code":"+506","code":"CR"},{"name":"Cote d\'Ivoire","dial_code":"+225","code":"CI"},{"name":"Croatia","dial_code":"+385","code":"HR"},{"name":"Cuba","dial_code":"+53","code":"CU"},{"name":"Cyprus","dial_code":"+357","code":"CY"},{"name":"Czech Republic","dial_code":"+420","code":"CZ"},{"name":"Denmark","dial_code":"+45","code":"DK"},{"name":"Djibouti","dial_code":"+253","code":"DJ"},{"name":"Dominica","dial_code":"+1767","code":"DM"},{"name":"Dominican Republic","dial_code":"+1849","code":"DO"},{"name":"Ecuador","dial_code":"+593","code":"EC"},{"name":"Egypt","dial_code":"+20","code":"EG"},{"name":"El Salvador","dial_code":"+503","code":"SV"},{"name":"Equatorial Guinea","dial_code":"+240","code":"GQ"},{"name":"Eritrea","dial_code":"+291","code":"ER"},{"name":"Estonia","dial_code":"+372","code":"EE"},{"name":"Ethiopia","dial_code":"+251","code":"ET"},{"name":"Falkland Islands (Malvinas)","dial_code":"+500","code":"FK"},{"name":"Faroe Islands","dial_code":"+298","code":"FO"},{"name":"Fiji","dial_code":"+679","code":"FJ"},{"name":"Finland","dial_code":"+358","code":"FI"},{"name":"France","dial_code":"+33","code":"FR"},{"name":"French Guiana","dial_code":"+594","code":"GF"},{"name":"French Polynesia","dial_code":"+689","code":"PF"},{"name":"Gabon","dial_code":"+241","code":"GA"},{"name":"Gambia","dial_code":"+220","code":"GM"},{"name":"Georgia","dial_code":"+995","code":"GE"},{"name":"Germany","dial_code":"+49","code":"DE"},{"name":"Ghana","dial_code":"+233","code":"GH"},{"name":"Gibraltar","dial_code":"+350","code":"GI"},{"name":"Greece","dial_code":"+30","code":"GR"},{"name":"Greenland","dial_code":"+299","code":"GL"},{"name":"Grenada","dial_code":"+1473","code":"GD"},{"name":"Guadeloupe","dial_code":"+590","code":"GP"},{"name":"Guam","dial_code":"+1671","code":"GU"},{"name":"Guatemala","dial_code":"+502","code":"GT"},{"name":"Guernsey","dial_code":"+44","code":"GG"},{"name":"Guinea","dial_code":"+224","code":"GN"},{"name":"Guinea-Bissau","dial_code":"+245","code":"GW"},{"name":"Guyana","dial_code":"+595","code":"GY"},{"name":"Haiti","dial_code":"+509","code":"HT"},{"name":"Holy See (Vatican City State)","dial_code":"+379","code":"VA"},{"name":"Honduras","dial_code":"+504","code":"HN"},{"name":"Hong Kong","dial_code":"+852","code":"HK"},{"name":"Hungary","dial_code":"+36","code":"HU"},{"name":"Iceland","dial_code":"+354","code":"IS"},{"name":"India","dial_code":"+91","code":"IN"},{"name":"Indonesia","dial_code":"+62","code":"ID"},{"name":"Iran, Islamic Republic of Persian Gulf","dial_code":"+98","code":"IR"},{"name":"Iraq","dial_code":"+964","code":"IQ"},{"name":"Ireland","dial_code":"+353","code":"IE"},{"name":"Isle of Man","dial_code":"+44","code":"IM"},{"name":"Israel","dial_code":"+972","code":"IL"},{"name":"Italy","dial_code":"+39","code":"IT"},{"name":"Jamaica","dial_code":"+1876","code":"JM"},{"name":"Japan","dial_code":"+81","code":"JP"},{"name":"Jersey","dial_code":"+44","code":"JE"},{"name":"Jordan","dial_code":"+962","code":"JO"},{"name":"Kazakhstan","dial_code":"+77","code":"KZ"},{"name":"Kenya","dial_code":"+254","code":"KE"},{"name":"Kiribati","dial_code":"+686","code":"KI"},{"name":"Korea, Democratic People\'s Republic of Korea","dial_code":"+850","code":"KP"},{"name":"Korea, Republic of South Korea","dial_code":"+82","code":"KR"},{"name":"Kuwait","dial_code":"+965","code":"KW"},{"name":"Kyrgyzstan","dial_code":"+996","code":"KG"},{"name":"Laos","dial_code":"+856","code":"LA"},{"name":"Latvia","dial_code":"+371","code":"LV"},{"name":"Lebanon","dial_code":"+961","code":"LB"},{"name":"Lesotho","dial_code":"+266","code":"LS"},{"name":"Liberia","dial_code":"+231","code":"LR"},{"name":"Libyan Arab Jamahiriya","dial_code":"+218","code":"LY"},{"name":"Liechtenstein","dial_code":"+423","code":"LI"},{"name":"Lithuania","dial_code":"+370","code":"LT"},{"name":"Luxembourg","dial_code":"+352","code":"LU"},{"name":"Macao","dial_code":"+853","code":"MO"},{"name":"Macedonia","dial_code":"+389","code":"MK"},{"name":"Madagascar","dial_code":"+261","code":"MG"},{"name":"Malawi","dial_code":"+265","code":"MW"},{"name":"Malaysia","dial_code":"+60","code":"MY"},{"name":"Maldives","dial_code":"+960","code":"MV"},{"name":"Mali","dial_code":"+223","code":"ML"},{"name":"Malta","dial_code":"+356","code":"MT"},{"name":"Marshall Islands","dial_code":"+692","code":"MH"},{"name":"Martinique","dial_code":"+596","code":"MQ"},{"name":"Mauritania","dial_code":"+222","code":"MR"},{"name":"Mauritius","dial_code":"+230","code":"MU"},{"name":"Mayotte","dial_code":"+262","code":"YT"},{"name":"Mexico","dial_code":"+52","code":"MX"},{"name":"Micronesia, Federated States of Micronesia","dial_code":"+691","code":"FM"},{"name":"Moldova","dial_code":"+373","code":"MD"},{"name":"Monaco","dial_code":"+377","code":"MC"},{"name":"Mongolia","dial_code":"+976","code":"MN"},{"name":"Montenegro","dial_code":"+382","code":"ME"},{"name":"Montserrat","dial_code":"+1664","code":"MS"},{"name":"Morocco","dial_code":"+212","code":"MA"},{"name":"Mozambique","dial_code":"+258","code":"MZ"},{"name":"Myanmar","dial_code":"+95","code":"MM"},{"name":"Namibia","dial_code":"+264","code":"NA"},{"name":"Nauru","dial_code":"+674","code":"NR"},{"name":"Nepal","dial_code":"+977","code":"NP"},{"name":"Netherlands","dial_code":"+31","code":"NL"},{"name":"Netherlands Antilles","dial_code":"+599","code":"AN"},{"name":"New Caledonia","dial_code":"+687","code":"NC"},{"name":"New Zealand","dial_code":"+64","code":"NZ"},{"name":"Nicaragua","dial_code":"+505","code":"NI"},{"name":"Niger","dial_code":"+227","code":"NE"},{"name":"Nigeria","dial_code":"+234","code":"NG"},{"name":"Niue","dial_code":"+683","code":"NU"},{"name":"Norfolk Island","dial_code":"+672","code":"NF"},{"name":"Northern Mariana Islands","dial_code":"+1670","code":"MP"},{"name":"Norway","dial_code":"+47","code":"NO"},{"name":"Oman","dial_code":"+968","code":"OM"},{"name":"Pakistan","dial_code":"+92","code":"PK"},{"name":"Palau","dial_code":"+680","code":"PW"},{"name":"Palestinian Territory, Occupied","dial_code":"+970","code":"PS"},{"name":"Panama","dial_code":"+507","code":"PA"},{"name":"Papua New Guinea","dial_code":"+675","code":"PG"},{"name":"Paraguay","dial_code":"+595","code":"PY"},{"name":"Peru","dial_code":"+51","code":"PE"},{"name":"Philippines","dial_code":"+63","code":"PH"},{"name":"Pitcairn","dial_code":"+872","code":"PN"},{"name":"Poland","dial_code":"+48","code":"PL"},{"name":"Portugal","dial_code":"+351","code":"PT"},{"name":"Puerto Rico","dial_code":"+1939","code":"PR"},{"name":"Qatar","dial_code":"+974","code":"QA"},{"name":"Romania","dial_code":"+40","code":"RO"},{"name":"Russia","dial_code":"+7","code":"RU"},{"name":"Rwanda","dial_code":"+250","code":"RW"},{"name":"Reunion","dial_code":"+262","code":"RE"},{"name":"Saint Barthelemy","dial_code":"+590","code":"BL"},{"name":"Saint Helena, Ascension and Tristan Da Cunha","dial_code":"+290","code":"SH"},{"name":"Saint Kitts and Nevis","dial_code":"+1869","code":"KN"},{"name":"Saint Lucia","dial_code":"+1758","code":"LC"},{"name":"Saint Martin","dial_code":"+590","code":"MF"},{"name":"Saint Pierre and Miquelon","dial_code":"+508","code":"PM"},{"name":"Saint Vincent and the Grenadines","dial_code":"+1784","code":"VC"},{"name":"Samoa","dial_code":"+685","code":"WS"},{"name":"San Marino","dial_code":"+378","code":"SM"},{"name":"Sao Tome and Principe","dial_code":"+239","code":"ST"},{"name":"Saudi Arabia","dial_code":"+966","code":"SA"},{"name":"Senegal","dial_code":"+221","code":"SN"},{"name":"Serbia","dial_code":"+381","code":"RS"},{"name":"Seychelles","dial_code":"+248","code":"SC"},{"name":"Sierra Leone","dial_code":"+232","code":"SL"},{"name":"Singapore","dial_code":"+65","code":"SG"},{"name":"Slovakia","dial_code":"+421","code":"SK"},{"name":"Slovenia","dial_code":"+386","code":"SI"},{"name":"Solomon Islands","dial_code":"+677","code":"SB"},{"name":"Somalia","dial_code":"+252","code":"SO"},{"name":"South Africa","dial_code":"+27","code":"ZA"},{"name":"South Sudan","dial_code":"+211","code":"SS"},{"name":"South Georgia and the South Sandwich Islands","dial_code":"+500","code":"GS"},{"name":"Spain","dial_code":"+34","code":"ES"},{"name":"Sri Lanka","dial_code":"+94","code":"LK"},{"name":"Sudan","dial_code":"+249","code":"SD"},{"name":"Suriname","dial_code":"+597","code":"SR"},{"name":"Svalbard and Jan Mayen","dial_code":"+47","code":"SJ"},{"name":"Swaziland","dial_code":"+268","code":"SZ"},{"name":"Sweden","dial_code":"+46","code":"SE"},{"name":"Switzerland","dial_code":"+41","code":"CH"},{"name":"Syrian Arab Republic","dial_code":"+963","code":"SY"},{"name":"Taiwan","dial_code":"+886","code":"TW"},{"name":"Tajikistan","dial_code":"+992","code":"TJ"},{"name":"Tanzania, United Republic of Tanzania","dial_code":"+255","code":"TZ"},{"name":"Thailand","dial_code":"+66","code":"TH"},{"name":"Timor-Leste","dial_code":"+670","code":"TL"},{"name":"Togo","dial_code":"+228","code":"TG"},{"name":"Tokelau","dial_code":"+690","code":"TK"},{"name":"Tonga","dial_code":"+676","code":"TO"},{"name":"Trinidad and Tobago","dial_code":"+1868","code":"TT"},{"name":"Tunisia","dial_code":"+216","code":"TN"},{"name":"Turkey","dial_code":"+90","code":"TR"},{"name":"Turkmenistan","dial_code":"+993","code":"TM"},{"name":"Turks and Caicos Islands","dial_code":"+1649","code":"TC"},{"name":"Tuvalu","dial_code":"+688","code":"TV"},{"name":"Uganda","dial_code":"+256","code":"UG"},{"name":"Ukraine","dial_code":"+380","code":"UA"},{"name":"United Arab Emirates","dial_code":"+971","code":"AE"},{"name":"United Kingdom","dial_code":"+44","code":"GB"},{"name":"United States","dial_code":"+1","code":"US"},{"name":"Uruguay","dial_code":"+598","code":"UY"},{"name":"Uzbekistan","dial_code":"+998","code":"UZ"},{"name":"Vanuatu","dial_code":"+678","code":"VU"},{"name":"Venezuela, Bolivarian Republic of Venezuela","dial_code":"+58","code":"VE"},{"name":"Vietnam","dial_code":"+84","code":"VN"},{"name":"Virgin Islands, British","dial_code":"+1284","code":"VG"},{"name":"Virgin Islands, U.S.","dial_code":"+1340","code":"VI"},{"name":"Wallis and Futuna","dial_code":"+681","code":"WF"},{"name":"Yemen","dial_code":"+967","code":"YE"},{"name":"Zambia","dial_code":"+260","code":"ZM"},{"name":"Zimbabwe","dial_code":"+263","code":"ZW"}]')}}]);