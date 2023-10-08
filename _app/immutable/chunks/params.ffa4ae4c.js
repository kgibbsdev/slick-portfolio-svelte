import{w as ft}from"./index.07372803.js";const ut="@riadh-adrani-theme",mt=t=>{localStorage.setItem(ut,JSON.stringify(t))},lt=ft(!1),at=t=>lt.update(y=>{var p;const w=typeof t=="boolean"?t:!y;return mt(w),(p=document.querySelector(":root"))==null||p.setAttribute("data-theme",w?"dark":"light"),w}),$t=()=>{const t=localStorage.getItem(ut);t?at(JSON.parse(t)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&at(!0)},rt=t=>`https://raw.githubusercontent.com/kgibbsdev/slick-portfolio-svelte/assets/assets/logos/${t}`,s=(t,y)=>y?{dark:rt(y),light:rt(t)}:rt(t),M={AWS:s("aws.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("djanog.svg"),FastApi:s("fastapi"),Flask:s("flask.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetees.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg"),Unity:s("unity.png"),GameMaker:s("gamemaker.png"),DotNet:s("dotnet.png"),Blazor:s("blazor.svg"),SQL:s("sql.svg"),Wolf:s("wolf.svg"),Clipboard:s("clipboard.svg"),Potato:s("potato.svg"),Gears:s("gears.svg")};let ct;lt.subscribe(t=>ct=t);const wt=t=>typeof t=="string"?t:ct?t.dark:t.light,H=t=>t,ht=[H({slug:"cpp",color:"blue",description:"C++",logo:M.Cpp,name:"C++"}),H({slug:"csharp",color:"blue",description:"C#",logo:M.Csharp,name:"C#"}),H({slug:"dotnet",color:"blue",description:".NET",logo:M.DotNet,name:".NET"}),H({slug:"go",color:"blue",description:"Go",logo:M.Go,name:"Go"}),H({slug:"javascript",color:"blue",description:"Javascript",logo:M.JavaScript,name:"Javascript"}),H({slug:"typescript",color:"blue",description:"Typescript",logo:M.TypeScript,name:"Typescript"}),H({slug:"angular",color:"red",description:"Angular",logo:M.Angular,name:"Angular"}),H({slug:"react",color:"blue",description:"React",logo:M.ReactJs,name:"React"}),H({slug:"sql",color:"blue",description:"SQL",logo:M.SQL,name:"SQL"}),H({slug:"gamemaker",color:"blue",description:"GameMaker",logo:M.GameMaker,name:"GameMaker"}),H({slug:"unity",color:"white",description:"Unity",logo:M.Unity,name:"Unity"}),H({slug:"blazor",color:"blue",description:"Blazor",logo:M.Blazor,name:"Blazor"}),H({slug:"docker",color:"blue",description:"Docker",logo:M.Docker,name:"Docker"}),H({slug:"firebase",color:"orange",description:"Firebase",logo:M.Firebase,name:"Firebase"}),H({slug:"css",color:"blue",description:"CSS",logo:M.CSS,name:"CSS"})],U=(...t)=>ht.filter(y=>t.includes(y.slug));var L=(t=>(t.GitHub="github",t.StackOverflow="stackoverflow",t.Twitter="twitter",t.Linkedin="linkedin",t.Email="email",t.Facebook="facebook",t.Youtube="youtube",t))(L||{}),Q=(t=>(t.FullTime="Full-time",t.PartTime="Part-time",t.SelfEmployed="Self-employed",t.Freelance="Freelance",t.Contract="Contract",t.Internship="Internship",t))(Q||{});const pt=[{slug:"wolfjaw-studios",company:"Wolfjaw Studios",description:"Developing online services for games.",contract:Q.FullTime,type:"Software Development",location:"Home",period:{from:new Date("12-05-2022")},skills:U("cpp","go"),name:"Associate Software Engineer",color:"#ffffff",links:[],logo:M.Wolf,shortDescription:""},{slug:"continental-engineering-services",company:"Continental Engineering Services",description:"Creating and maintaining legacy tools for project managers and engineers using C#, .NET, and Visual Studio Tools for Office.",contract:Q.FullTime,type:"Software Development",location:"Auburn Hills, MI",period:{from:new Date("April 2021"),to:new Date("November 2022")},skills:U("csharp","dotnet","sql"),name:"Associate Software Engineer",color:"#ffffff",links:[],logo:M.Gears,shortDescription:""},{slug:"finys",company:"Finys",description:"Maintaining and developing new features for a property and casualty insurance software tools sweet.",contract:Q.FullTime,type:"Software Development",location:"Troy, MI",period:{from:new Date("11/5/2020"),to:new Date("3/5/2021")},skills:U("angular","csharp","css","typescript"),name:"Software Engineer",color:"#ffffff",links:[],logo:M.Clipboard,shortDescription:""},{slug:"spud-software",company:"Spud Software",description:"Creating front-ends for web applications and a mobile application for medium-sized businesses.",contract:Q.FullTime,type:"Software Development",location:"Grand Blanc, MI",period:{from:new Date("April 2019"),to:new Date("September 2020")},skills:U("react","csharp","css","typescript"),name:"Software Developer",color:"#ffffff",links:[],logo:M.Potato,shortDescription:""}],gt=[{slug:"slick-portfolio-angular",color:"#5e95e3",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",shortDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:M.Unknown,name:"Slick Portfolio",period:{from:new Date},skills:U("firebase","gamemaker","docker"),type:"Website Template"},{slug:"slick-portfolio-svelte",color:"#ff3e00",description:"A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",shortDescription:"A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:M.Svelte,name:"Slick Portfolio",period:{from:new Date},skills:U("cpp","csharp","dotnet","sql"),type:"Website Template",screenshots:[{label:"screen 1",src:"https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"2",src:"https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"3",src:"https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"4",src:"https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"5",src:"https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"6",src:"https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}]}];var dt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},it={},vt={get exports(){return it},set exports(t){it=t}};(function(t,y){(function(w,p){t.exports=p()})(dt,function(){var w=1e3,p=6e4,S=36e5,k="millisecond",D="second",E="minute",J="hour",Y="day",N="week",A="month",V="quarter",T="year",F="date",B="Invalid Date",X=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,j=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,nt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(o){var r=["th","st","nd","rd"],e=o%100;return"["+o+(r[(e-20)%10]||r[e]||r[0])+"]"}},W=function(o,r,e){var a=String(o);return!a||a.length>=r?o:""+Array(r+1-a.length).join(e)+o},tt={s:W,z:function(o){var r=-o.utcOffset(),e=Math.abs(r),a=Math.floor(e/60),n=e%60;return(r<=0?"+":"-")+W(a,2,"0")+":"+W(n,2,"0")},m:function o(r,e){if(r.date()<e.date())return-o(e,r);var a=12*(e.year()-r.year())+(e.month()-r.month()),n=r.clone().add(a,A),c=e-n<0,h=r.clone().add(a+(c?-1:1),A);return+(-(a+(e-n)/(c?n-h:h-n))||0)},a:function(o){return o<0?Math.ceil(o)||0:Math.floor(o)},p:function(o){return{M:A,y:T,w:N,d:Y,D:F,h:J,m:E,s:D,ms:k,Q:V}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(o){return o===void 0}},_="en",f={};f[_]=nt;var u="$isDayjsObject",i=function(o){return o instanceof b||!(!o||!o[u])},m=function o(r,e,a){var n;if(!r)return _;if(typeof r=="string"){var c=r.toLowerCase();f[c]&&(n=c),e&&(f[c]=e,n=c);var h=r.split("-");if(!n&&h.length>1)return o(h[0])}else{var g=r.name;f[g]=r,n=g}return!a&&n&&(_=n),n||!a&&_},d=function(o,r){if(i(o))return o.clone();var e=typeof r=="object"?r:{};return e.date=o,e.args=arguments,new b(e)},l=tt;l.l=m,l.i=i,l.w=function(o,r){return d(o,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var b=function(){function o(e){this.$L=m(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[u]=!0}var r=o.prototype;return r.parse=function(e){this.$d=function(a){var n=a.date,c=a.utc;if(n===null)return new Date(NaN);if(l.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var h=n.match(X);if(h){var g=h[2]-1||0,v=(h[7]||"0").substring(0,3);return c?new Date(Date.UTC(h[1],g,h[3]||1,h[4]||0,h[5]||0,h[6]||0,v)):new Date(h[1],g,h[3]||1,h[4]||0,h[5]||0,h[6]||0,v)}}return new Date(n)}(e),this.init()},r.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},r.$utils=function(){return l},r.isValid=function(){return this.$d.toString()!==B},r.isSame=function(e,a){var n=d(e);return this.startOf(a)<=n&&n<=this.endOf(a)},r.isAfter=function(e,a){return d(e)<this.startOf(a)},r.isBefore=function(e,a){return this.endOf(a)<d(e)},r.$g=function(e,a,n){return l.u(e)?this[a]:this.set(n,e)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(e,a){var n=this,c=!!l.u(a)||a,h=l.p(e),g=function(q,x){var G=l.w(n.$u?Date.UTC(n.$y,x,q):new Date(n.$y,x,q),n);return c?G:G.endOf(Y)},v=function(q,x){return l.w(n.toDate()[q].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(x)),n)},$=this.$W,C=this.$M,O=this.$D,Z="set"+(this.$u?"UTC":"");switch(h){case T:return c?g(1,0):g(31,11);case A:return c?g(1,C):g(0,C+1);case N:var P=this.$locale().weekStart||0,I=($<P?$+7:$)-P;return g(c?O-I:O+(6-I),C);case Y:case F:return v(Z+"Hours",0);case J:return v(Z+"Minutes",1);case E:return v(Z+"Seconds",2);case D:return v(Z+"Milliseconds",3);default:return this.clone()}},r.endOf=function(e){return this.startOf(e,!1)},r.$set=function(e,a){var n,c=l.p(e),h="set"+(this.$u?"UTC":""),g=(n={},n[Y]=h+"Date",n[F]=h+"Date",n[A]=h+"Month",n[T]=h+"FullYear",n[J]=h+"Hours",n[E]=h+"Minutes",n[D]=h+"Seconds",n[k]=h+"Milliseconds",n)[c],v=c===Y?this.$D+(a-this.$W):a;if(c===A||c===T){var $=this.clone().set(F,1);$.$d[g](v),$.init(),this.$d=$.set(F,Math.min(this.$D,$.daysInMonth())).$d}else g&&this.$d[g](v);return this.init(),this},r.set=function(e,a){return this.clone().$set(e,a)},r.get=function(e){return this[l.p(e)]()},r.add=function(e,a){var n,c=this;e=Number(e);var h=l.p(a),g=function(C){var O=d(c);return l.w(O.date(O.date()+Math.round(C*e)),c)};if(h===A)return this.set(A,this.$M+e);if(h===T)return this.set(T,this.$y+e);if(h===Y)return g(1);if(h===N)return g(7);var v=(n={},n[E]=p,n[J]=S,n[D]=w,n)[h]||1,$=this.$d.getTime()+e*v;return l.w($,this)},r.subtract=function(e,a){return this.add(-1*e,a)},r.format=function(e){var a=this,n=this.$locale();if(!this.isValid())return n.invalidDate||B;var c=e||"YYYY-MM-DDTHH:mm:ssZ",h=l.z(this),g=this.$H,v=this.$m,$=this.$M,C=n.weekdays,O=n.months,Z=n.meridiem,P=function(x,G,K,et){return x&&(x[G]||x(a,c))||K[G].slice(0,et)},I=function(x){return l.s(g%12||12,x,"0")},q=Z||function(x,G,K){var et=x<12?"AM":"PM";return K?et.toLowerCase():et};return c.replace(j,function(x,G){return G||function(K){switch(K){case"YY":return String(a.$y).slice(-2);case"YYYY":return l.s(a.$y,4,"0");case"M":return $+1;case"MM":return l.s($+1,2,"0");case"MMM":return P(n.monthsShort,$,O,3);case"MMMM":return P(O,$);case"D":return a.$D;case"DD":return l.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return P(n.weekdaysMin,a.$W,C,2);case"ddd":return P(n.weekdaysShort,a.$W,C,3);case"dddd":return C[a.$W];case"H":return String(g);case"HH":return l.s(g,2,"0");case"h":return I(1);case"hh":return I(2);case"a":return q(g,v,!0);case"A":return q(g,v,!1);case"m":return String(v);case"mm":return l.s(v,2,"0");case"s":return String(a.$s);case"ss":return l.s(a.$s,2,"0");case"SSS":return l.s(a.$ms,3,"0");case"Z":return h}return null}(x)||h.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(e,a,n){var c,h=this,g=l.p(a),v=d(e),$=(v.utcOffset()-this.utcOffset())*p,C=this-v,O=function(){return l.m(h,v)};switch(g){case T:c=O()/12;break;case A:c=O();break;case V:c=O()/3;break;case N:c=(C-$)/6048e5;break;case Y:c=(C-$)/864e5;break;case J:c=C/S;break;case E:c=C/p;break;case D:c=C/w;break;default:c=C}return n?c:l.a(c)},r.daysInMonth=function(){return this.endOf(A).$D},r.$locale=function(){return f[this.$L]},r.locale=function(e,a){if(!e)return this.$L;var n=this.clone(),c=m(e,a,!0);return c&&(n.$L=c),n},r.clone=function(){return l.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},o}(),z=b.prototype;return d.prototype=z,[["$ms",k],["$s",D],["$m",E],["$H",J],["$W",Y],["$M",A],["$y",T],["$D",F]].forEach(function(o){z[o[1]]=function(r){return this.$g(r,o[0],o[1])}}),d.extend=function(o,r){return o.$i||(o(r,b,d),o.$i=!0),d},d.locale=m,d.isDayjs=i,d.unix=function(o){return d(1e3*o)},d.en=f[_],d.Ls=f,d.p={},d})})(vt);const st=it;var ot={},Mt={get exports(){return ot},set exports(t){ot=t}};(function(t,y){(function(w,p){t.exports=p()})(dt,function(){var w,p,S=1e3,k=6e4,D=36e5,E=864e5,J=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Y=31536e6,N=2628e6,A=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,V={years:Y,months:N,days:E,hours:D,minutes:k,seconds:S,milliseconds:1,weeks:6048e5},T=function(f){return f instanceof tt},F=function(f,u,i){return new tt(f,i,u.$l)},B=function(f){return p.p(f)+"s"},X=function(f){return f<0},j=function(f){return X(f)?Math.ceil(f):Math.floor(f)},nt=function(f){return Math.abs(f)},W=function(f,u){return f?X(f)?{negative:!0,format:""+nt(f)+u}:{negative:!1,format:""+f+u}:{negative:!1,format:""}},tt=function(){function f(i,m,d){var l=this;if(this.$d={},this.$l=d,i===void 0&&(this.$ms=0,this.parseFromMilliseconds()),m)return F(i*V[B(m)],this);if(typeof i=="number")return this.$ms=i,this.parseFromMilliseconds(),this;if(typeof i=="object")return Object.keys(i).forEach(function(o){l.$d[B(o)]=i[o]}),this.calMilliseconds(),this;if(typeof i=="string"){var b=i.match(A);if(b){var z=b.slice(2).map(function(o){return o!=null?Number(o):0});return this.$d.years=z[0],this.$d.months=z[1],this.$d.weeks=z[2],this.$d.days=z[3],this.$d.hours=z[4],this.$d.minutes=z[5],this.$d.seconds=z[6],this.calMilliseconds(),this}}return this}var u=f.prototype;return u.calMilliseconds=function(){var i=this;this.$ms=Object.keys(this.$d).reduce(function(m,d){return m+(i.$d[d]||0)*V[d]},0)},u.parseFromMilliseconds=function(){var i=this.$ms;this.$d.years=j(i/Y),i%=Y,this.$d.months=j(i/N),i%=N,this.$d.days=j(i/E),i%=E,this.$d.hours=j(i/D),i%=D,this.$d.minutes=j(i/k),i%=k,this.$d.seconds=j(i/S),i%=S,this.$d.milliseconds=i},u.toISOString=function(){var i=W(this.$d.years,"Y"),m=W(this.$d.months,"M"),d=+this.$d.days||0;this.$d.weeks&&(d+=7*this.$d.weeks);var l=W(d,"D"),b=W(this.$d.hours,"H"),z=W(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var r=W(o,"S"),e=i.negative||m.negative||l.negative||b.negative||z.negative||r.negative,a=b.format||z.format||r.format?"T":"",n=(e?"-":"")+"P"+i.format+m.format+l.format+a+b.format+z.format+r.format;return n==="P"||n==="-P"?"P0D":n},u.toJSON=function(){return this.toISOString()},u.format=function(i){var m=i||"YYYY-MM-DDTHH:mm:ss",d={Y:this.$d.years,YY:p.s(this.$d.years,2,"0"),YYYY:p.s(this.$d.years,4,"0"),M:this.$d.months,MM:p.s(this.$d.months,2,"0"),D:this.$d.days,DD:p.s(this.$d.days,2,"0"),H:this.$d.hours,HH:p.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:p.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:p.s(this.$d.seconds,2,"0"),SSS:p.s(this.$d.milliseconds,3,"0")};return m.replace(J,function(l,b){return b||String(d[l])})},u.as=function(i){return this.$ms/V[B(i)]},u.get=function(i){var m=this.$ms,d=B(i);return d==="milliseconds"?m%=1e3:m=d==="weeks"?j(m/V[d]):this.$d[d],m||0},u.add=function(i,m,d){var l;return l=m?i*V[B(m)]:T(i)?i.$ms:F(i,this).$ms,F(this.$ms+l*(d?-1:1),this)},u.subtract=function(i,m){return this.add(i,m,!0)},u.locale=function(i){var m=this.clone();return m.$l=i,m},u.clone=function(){return F(this.$ms,this)},u.humanize=function(i){return w().add(this.$ms,"ms").locale(this.$l).fromNow(!i)},u.valueOf=function(){return this.asMilliseconds()},u.milliseconds=function(){return this.get("milliseconds")},u.asMilliseconds=function(){return this.as("milliseconds")},u.seconds=function(){return this.get("seconds")},u.asSeconds=function(){return this.as("seconds")},u.minutes=function(){return this.get("minutes")},u.asMinutes=function(){return this.as("minutes")},u.hours=function(){return this.get("hours")},u.asHours=function(){return this.as("hours")},u.days=function(){return this.get("days")},u.asDays=function(){return this.as("days")},u.weeks=function(){return this.get("weeks")},u.asWeeks=function(){return this.as("weeks")},u.months=function(){return this.get("months")},u.asMonths=function(){return this.as("months")},u.years=function(){return this.get("years")},u.asYears=function(){return this.as("years")},f}(),_=function(f,u,i){return f.add(u.years()*i,"y").add(u.months()*i,"M").add(u.days()*i,"d").add(u.hours()*i,"h").add(u.minutes()*i,"m").add(u.seconds()*i,"s").add(u.milliseconds()*i,"ms")};return function(f,u,i){w=i,p=i().$utils(),i.duration=function(l,b){var z=i.locale();return F(l,{$l:z},b)},i.isDuration=T;var m=u.prototype.add,d=u.prototype.subtract;u.prototype.add=function(l,b){return T(l)?_(this,l,1):m.bind(this)(l,b)},u.prototype.subtract=function(l,b){return T(l)?_(this,l,-1):d.bind(this)(l,b)}}})})(Mt);const bt=ot;st.extend(bt);const St=(t,y=new Date)=>{let w=0,p=0,S=0;return y.getFullYear()!==t.getFullYear()?(S=y.getMonth(),p=(y.getFullYear()-t.getFullYear()-1)*12,w=12-t.getMonth()):w=y.getMonth()-t.getMonth(),w+p+S+1},kt=t=>["January","February","March","April","May","June","July","August","September","October","November","December"][t],Dt=(t,y)=>`${t} | ${y}`;function zt(t,y=new Date(Date.now()+1e3*60*60*24)){const w=st(t),p=st(y),S=st.duration(p.diff(w));let k=0,D="day";return S.as("days")<=7?(D="day",k=S.as("days")):S.as("months")<=1?(D="week",k=S.as("weeks")):S.as("years")<=1?(D="month",k=S.as("months")):(D="year",k=S.as("years")),k=Math.trunc(k),`${Math.trunc(k)} ${D}${k>1?"s":""}`}var R=(t=>(t.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",t.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",t.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",t.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",t.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",t.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",t.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",t.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",t.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",t.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",t.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",t.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",t.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",t.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",t.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",t.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",t.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",t.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",t.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",t.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",t))(R||{});const Ct="Kyle Gibbs",Ht={home:"Home",personal:"Projects",career:"Experiences",resume:"Resume",skills:"Skills"},Lt=t=>{switch(t){case L.GitHub:return R.GitHub;case L.Linkedin:return R.LinkedIn;case L.StackOverflow:return R.StackOverflow;case L.Facebook:return R.Facebook;case L.Email:return R.Email;case L.Twitter:return R.Twitter;case L.Youtube:return R.Youtube}},xt={title:"Home",name:"Kyle",lastName:"Gibbs",description:"Hey there! Thanks for checking out my portfolio. I am a game developer and software engineer with a passion for learning and creating. I am currently working as a software engineer at Wolfjaw Studios. ",links:[{platform:L.GitHub,link:"https://github.com/"},{platform:L.Linkedin,link:"https://www.linkedin.com/"},{platform:L.Twitter,link:"https://twitter.com/"},{platform:L.StackOverflow,link:"https://stackoverflow.com/"},{platform:L.Email,link:"riadh-adrani@hotmail.fr"},{platform:L.Youtube,link:"https://www.youtube.com"},{platform:L.Facebook,link:"https://www.facebook.com"}]},At={title:"Projects",items:gt},Tt={title:"Experiences",items:pt},Yt={title:"Skills",items:ht},Ft={title:"Resumé",item:""},Ot={title:"Search"};export{Tt as E,xt as H,R as I,ht as M,Ht as N,At as P,Ft as R,Ot as S,Ct as T,at as a,Lt as b,zt as c,kt as d,pt as e,dt as f,wt as g,St as h,gt as i,Yt as j,$t as o,lt as t,Dt as u};
