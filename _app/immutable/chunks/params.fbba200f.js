import{w as ft}from"./index.07372803.js";const ut="@riadh-adrani-theme",mt=t=>{localStorage.setItem(ut,JSON.stringify(t))},lt=ft(!1),at=t=>lt.update($=>{var p;const b=typeof t=="boolean"?t:!$;return mt(b),(p=document.querySelector(":root"))==null||p.setAttribute("data-theme",b?"dark":"light"),b}),bt=()=>{const t=localStorage.getItem(ut);t?at(JSON.parse(t)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&at(!0)},rt=t=>`https://raw.githubusercontent.com/kgibbsdev/slick-portfolio-svelte/assets/assets/logos/${t}`,r=(t,$)=>$?{dark:rt($),light:rt(t)}:rt(t),L={AWS:r("aws.svg"),Bootstrap:r("bootstrap.svg"),C:r("c.svg"),Cpp:r("cpp.svg"),Celery:r("celery.svg"),Django:r("djanog.svg"),FastApi:r("fastapi"),Flask:r("flask.svg"),Go:r("go.svg"),Kafka:r("kafka.svg"),Neo4j:r("neo4j.svg"),Nginx:r("nginx.svg"),Numpy:r("numpy.svg"),Pandas:r("pandas.svg"),RabbitMQ:r("rabbitmq.svg"),Rust:r("rust.svg","rust-dark.png"),Scrapy:r("scrapy.png"),Selenium:r("selenium.svg"),Docker:r("docker.svg"),Kubernetes:r("kubernetees.svg"),Csharp:r("csharp.svg"),Xamarin:r("xamarin.svg"),TypeScript:r("ts.png"),VueJs:r("vue.png"),ReactJs:r("react.svg"),Dart:r("dart.png"),Kotlin:r("kotlin.png"),Python:r("python.png"),NodeJs:r("node.png"),Deno:r("deno.png","deno-dark.png"),Svelte:r("svelte.png"),ExpressJs:r("express.png"),JavaScript:r("js.png"),Fastify:r("fastify.svg","fastify-dark.png"),NestJs:r("nest.svg"),Quasar:r("quasar.svg"),SolidJs:r("solid.svg"),Electron:r("electron.png"),Flutter:r("flutter.svg"),Java:r("java.png"),AdonisJs:r("adonis.png"),Android:r("android.png"),Angular:r("angular.png"),PostgreSQL:r("postgres.png"),Firebase:r("firebase.png"),Sass:r("sass.png"),Unknown:r("no-img.svg"),MongoDB:r("mongodb.svg"),Redis:r("redis.svg"),Tailwind:r("tailwind.svg"),HTML:r("html.svg"),Premiere:r("premiere.svg"),Photoshop:r("photoshop.svg"),CSS:r("css.svg"),AfterEffects:r("after-effects.svg"),Illustrator:r("illustrator.svg"),Nuxt:r("nuxt.png"),Vite:r("vite.png"),Vitest:r("vitest.svg"),Jest:r("jest.png"),Unocss:r("unocss.svg"),Ruvy:r("ruvy.svg"),Postcss:r("postcss.svg"),Unity:r("unity.png"),GameMaker:r("gamemaker.png"),DotNet:r("dotnet.png"),Blazor:r("blazor.svg"),SQL:r("sql.svg")};let ct;lt.subscribe(t=>ct=t);const wt=t=>typeof t=="string"?t:ct?t.dark:t.light,W=t=>t,ht=[W({slug:"cpp",color:"blue",description:"C++",logo:L.Cpp,name:"C++"}),W({slug:"csharp",color:"blue",description:"C#",logo:L.Csharp,name:"C#"}),W({slug:"docker",color:"blue",description:"Docker",logo:L.Docker,name:"Docker"}),W({slug:"firebase",color:"orange",description:"Firebase",logo:L.Firebase,name:"Firebase"}),W({slug:"gamemaker",color:"blue",description:"GameMaker",logo:L.GameMaker,name:"GameMaker"}),W({slug:"unity",color:"white",description:"Unity",logo:L.Unity,name:"Unity"}),W({slug:"dotnet",color:"blue",description:".NET",logo:L.DotNet,name:".NET"}),W({slug:"sql",color:"blue",description:"SQL",logo:L.SQL,name:"SQL"}),W({slug:"blazor",color:"blue",description:"Blazor",logo:L.Blazor,name:"Blazor"})],Q=(...t)=>ht.filter($=>t.includes($.slug));var H=(t=>(t.GitHub="github",t.StackOverflow="stackoverflow",t.Twitter="twitter",t.Linkedin="linkedin",t.Email="email",t.Facebook="facebook",t.Youtube="youtube",t))(H||{}),et=(t=>(t.FullTime="Full-time",t.PartTime="Part-time",t.SelfEmployed="Self-employed",t.Freelance="Freelance",t.Contract="Contract",t.Internship="Internship",t))(et||{});const pt=[{slug:"open-sourcer",company:"Self-employed",description:"Creating awesome tools for developers.",contract:et.SelfEmployed,type:"Software Development",location:"Home",period:{from:new Date},skills:Q("ts","js"),name:"Open Source Developer",color:"#ffffff",links:[],logo:L.Unknown,shortDescription:""},{slug:"software-freelance",company:"Self-employed",description:"Creating awesome applications for customers.",contract:et.Freelance,type:"Software Development",location:"Home",period:{from:new Date},skills:Q("svelte","ts","sass","css","html","js"),name:"Freelancer",color:"#ffffff",links:[],logo:L.Unknown,shortDescription:""},{slug:"software-freelance-junior",company:"Self-employed",description:"Creating awesome applications for customers.",contract:et.Freelance,type:"Software Development",location:"Home",period:{from:new Date(2022,0,1),to:new Date},skills:Q("css","html","js"),name:"Junior Freelancer",color:"#ffffff",links:[],logo:L.Unknown,shortDescription:""}],gt=[{slug:"slick-portfolio-angular",color:"#5e95e3",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",shortDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:L.Unknown,name:"Slick Portfolio",period:{from:new Date},skills:Q("firebase","gamemaker","docker"),type:"Website Template"},{slug:"slick-portfolio-svelte",color:"#ff3e00",description:"A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",shortDescription:"A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:L.Svelte,name:"Slick Portfolio",period:{from:new Date},skills:Q("cpp","csharp","dotnet","sql"),type:"Website Template",screenshots:[{label:"screen 1",src:"https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"2",src:"https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"3",src:"https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"4",src:"https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"5",src:"https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"6",src:"https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}]}];var dt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},it={},vt={get exports(){return it},set exports(t){it=t}};(function(t,$){(function(b,p){t.exports=p()})(dt,function(){var b=1e3,p=6e4,w=36e5,k="millisecond",S="second",F="minute",N="hour",A="day",V="week",x="month",J="quarter",Y="year",T="date",B="Invalid Date",I=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,E=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,nt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(o){var n=["th","st","nd","rd"],e=o%100;return"["+o+(n[(e-20)%10]||n[e]||n[0])+"]"}},j=function(o,n,e){var a=String(o);return!a||a.length>=n?o:""+Array(n+1-a.length).join(e)+o},X={s:j,z:function(o){var n=-o.utcOffset(),e=Math.abs(n),a=Math.floor(e/60),s=e%60;return(n<=0?"+":"-")+j(a,2,"0")+":"+j(s,2,"0")},m:function o(n,e){if(n.date()<e.date())return-o(e,n);var a=12*(e.year()-n.year())+(e.month()-n.month()),s=n.clone().add(a,x),c=e-s<0,h=n.clone().add(a+(c?-1:1),x);return+(-(a+(e-s)/(c?s-h:h-s))||0)},a:function(o){return o<0?Math.ceil(o)||0:Math.floor(o)},p:function(o){return{M:x,y:Y,w:V,d:A,D:T,h:N,m:F,s:S,ms:k,Q:J}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(o){return o===void 0}},_="en",f={};f[_]=nt;var u="$isDayjsObject",i=function(o){return o instanceof M||!(!o||!o[u])},m=function o(n,e,a){var s;if(!n)return _;if(typeof n=="string"){var c=n.toLowerCase();f[c]&&(s=c),e&&(f[c]=e,s=c);var h=n.split("-");if(!s&&h.length>1)return o(h[0])}else{var g=n.name;f[g]=n,s=g}return!a&&s&&(_=s),s||!a&&_},d=function(o,n){if(i(o))return o.clone();var e=typeof n=="object"?n:{};return e.date=o,e.args=arguments,new M(e)},l=X;l.l=m,l.i=i,l.w=function(o,n){return d(o,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var M=function(){function o(e){this.$L=m(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[u]=!0}var n=o.prototype;return n.parse=function(e){this.$d=function(a){var s=a.date,c=a.utc;if(s===null)return new Date(NaN);if(l.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var h=s.match(I);if(h){var g=h[2]-1||0,v=(h[7]||"0").substring(0,3);return c?new Date(Date.UTC(h[1],g,h[3]||1,h[4]||0,h[5]||0,h[6]||0,v)):new Date(h[1],g,h[3]||1,h[4]||0,h[5]||0,h[6]||0,v)}}return new Date(s)}(e),this.init()},n.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},n.$utils=function(){return l},n.isValid=function(){return this.$d.toString()!==B},n.isSame=function(e,a){var s=d(e);return this.startOf(a)<=s&&s<=this.endOf(a)},n.isAfter=function(e,a){return d(e)<this.startOf(a)},n.isBefore=function(e,a){return this.endOf(a)<d(e)},n.$g=function(e,a,s){return l.u(e)?this[a]:this.set(s,e)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(e,a){var s=this,c=!!l.u(a)||a,h=l.p(e),g=function(G,C){var q=l.w(s.$u?Date.UTC(s.$y,C,G):new Date(s.$y,C,G),s);return c?q:q.endOf(A)},v=function(G,C){return l.w(s.toDate()[G].apply(s.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(C)),s)},y=this.$W,z=this.$M,O=this.$D,U="set"+(this.$u?"UTC":"");switch(h){case Y:return c?g(1,0):g(31,11);case x:return c?g(1,z):g(0,z+1);case V:var R=this.$locale().weekStart||0,Z=(y<R?y+7:y)-R;return g(c?O-Z:O+(6-Z),z);case A:case T:return v(U+"Hours",0);case N:return v(U+"Minutes",1);case F:return v(U+"Seconds",2);case S:return v(U+"Milliseconds",3);default:return this.clone()}},n.endOf=function(e){return this.startOf(e,!1)},n.$set=function(e,a){var s,c=l.p(e),h="set"+(this.$u?"UTC":""),g=(s={},s[A]=h+"Date",s[T]=h+"Date",s[x]=h+"Month",s[Y]=h+"FullYear",s[N]=h+"Hours",s[F]=h+"Minutes",s[S]=h+"Seconds",s[k]=h+"Milliseconds",s)[c],v=c===A?this.$D+(a-this.$W):a;if(c===x||c===Y){var y=this.clone().set(T,1);y.$d[g](v),y.init(),this.$d=y.set(T,Math.min(this.$D,y.daysInMonth())).$d}else g&&this.$d[g](v);return this.init(),this},n.set=function(e,a){return this.clone().$set(e,a)},n.get=function(e){return this[l.p(e)]()},n.add=function(e,a){var s,c=this;e=Number(e);var h=l.p(a),g=function(z){var O=d(c);return l.w(O.date(O.date()+Math.round(z*e)),c)};if(h===x)return this.set(x,this.$M+e);if(h===Y)return this.set(Y,this.$y+e);if(h===A)return g(1);if(h===V)return g(7);var v=(s={},s[F]=p,s[N]=w,s[S]=b,s)[h]||1,y=this.$d.getTime()+e*v;return l.w(y,this)},n.subtract=function(e,a){return this.add(-1*e,a)},n.format=function(e){var a=this,s=this.$locale();if(!this.isValid())return s.invalidDate||B;var c=e||"YYYY-MM-DDTHH:mm:ssZ",h=l.z(this),g=this.$H,v=this.$m,y=this.$M,z=s.weekdays,O=s.months,U=s.meridiem,R=function(C,q,K,tt){return C&&(C[q]||C(a,c))||K[q].slice(0,tt)},Z=function(C){return l.s(g%12||12,C,"0")},G=U||function(C,q,K){var tt=C<12?"AM":"PM";return K?tt.toLowerCase():tt};return c.replace(E,function(C,q){return q||function(K){switch(K){case"YY":return String(a.$y).slice(-2);case"YYYY":return l.s(a.$y,4,"0");case"M":return y+1;case"MM":return l.s(y+1,2,"0");case"MMM":return R(s.monthsShort,y,O,3);case"MMMM":return R(O,y);case"D":return a.$D;case"DD":return l.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return R(s.weekdaysMin,a.$W,z,2);case"ddd":return R(s.weekdaysShort,a.$W,z,3);case"dddd":return z[a.$W];case"H":return String(g);case"HH":return l.s(g,2,"0");case"h":return Z(1);case"hh":return Z(2);case"a":return G(g,v,!0);case"A":return G(g,v,!1);case"m":return String(v);case"mm":return l.s(v,2,"0");case"s":return String(a.$s);case"ss":return l.s(a.$s,2,"0");case"SSS":return l.s(a.$ms,3,"0");case"Z":return h}return null}(C)||h.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(e,a,s){var c,h=this,g=l.p(a),v=d(e),y=(v.utcOffset()-this.utcOffset())*p,z=this-v,O=function(){return l.m(h,v)};switch(g){case Y:c=O()/12;break;case x:c=O();break;case J:c=O()/3;break;case V:c=(z-y)/6048e5;break;case A:c=(z-y)/864e5;break;case N:c=z/w;break;case F:c=z/p;break;case S:c=z/b;break;default:c=z}return s?c:l.a(c)},n.daysInMonth=function(){return this.endOf(x).$D},n.$locale=function(){return f[this.$L]},n.locale=function(e,a){if(!e)return this.$L;var s=this.clone(),c=m(e,a,!0);return c&&(s.$L=c),s},n.clone=function(){return l.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},o}(),D=M.prototype;return d.prototype=D,[["$ms",k],["$s",S],["$m",F],["$H",N],["$W",A],["$M",x],["$y",Y],["$D",T]].forEach(function(o){D[o[1]]=function(n){return this.$g(n,o[0],o[1])}}),d.extend=function(o,n){return o.$i||(o(n,M,d),o.$i=!0),d},d.locale=m,d.isDayjs=i,d.unix=function(o){return d(1e3*o)},d.en=f[_],d.Ls=f,d.p={},d})})(vt);const st=it;var ot={},Mt={get exports(){return ot},set exports(t){ot=t}};(function(t,$){(function(b,p){t.exports=p()})(dt,function(){var b,p,w=1e3,k=6e4,S=36e5,F=864e5,N=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A=31536e6,V=2628e6,x=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,J={years:A,months:V,days:F,hours:S,minutes:k,seconds:w,milliseconds:1,weeks:6048e5},Y=function(f){return f instanceof X},T=function(f,u,i){return new X(f,i,u.$l)},B=function(f){return p.p(f)+"s"},I=function(f){return f<0},E=function(f){return I(f)?Math.ceil(f):Math.floor(f)},nt=function(f){return Math.abs(f)},j=function(f,u){return f?I(f)?{negative:!0,format:""+nt(f)+u}:{negative:!1,format:""+f+u}:{negative:!1,format:""}},X=function(){function f(i,m,d){var l=this;if(this.$d={},this.$l=d,i===void 0&&(this.$ms=0,this.parseFromMilliseconds()),m)return T(i*J[B(m)],this);if(typeof i=="number")return this.$ms=i,this.parseFromMilliseconds(),this;if(typeof i=="object")return Object.keys(i).forEach(function(o){l.$d[B(o)]=i[o]}),this.calMilliseconds(),this;if(typeof i=="string"){var M=i.match(x);if(M){var D=M.slice(2).map(function(o){return o!=null?Number(o):0});return this.$d.years=D[0],this.$d.months=D[1],this.$d.weeks=D[2],this.$d.days=D[3],this.$d.hours=D[4],this.$d.minutes=D[5],this.$d.seconds=D[6],this.calMilliseconds(),this}}return this}var u=f.prototype;return u.calMilliseconds=function(){var i=this;this.$ms=Object.keys(this.$d).reduce(function(m,d){return m+(i.$d[d]||0)*J[d]},0)},u.parseFromMilliseconds=function(){var i=this.$ms;this.$d.years=E(i/A),i%=A,this.$d.months=E(i/V),i%=V,this.$d.days=E(i/F),i%=F,this.$d.hours=E(i/S),i%=S,this.$d.minutes=E(i/k),i%=k,this.$d.seconds=E(i/w),i%=w,this.$d.milliseconds=i},u.toISOString=function(){var i=j(this.$d.years,"Y"),m=j(this.$d.months,"M"),d=+this.$d.days||0;this.$d.weeks&&(d+=7*this.$d.weeks);var l=j(d,"D"),M=j(this.$d.hours,"H"),D=j(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var n=j(o,"S"),e=i.negative||m.negative||l.negative||M.negative||D.negative||n.negative,a=M.format||D.format||n.format?"T":"",s=(e?"-":"")+"P"+i.format+m.format+l.format+a+M.format+D.format+n.format;return s==="P"||s==="-P"?"P0D":s},u.toJSON=function(){return this.toISOString()},u.format=function(i){var m=i||"YYYY-MM-DDTHH:mm:ss",d={Y:this.$d.years,YY:p.s(this.$d.years,2,"0"),YYYY:p.s(this.$d.years,4,"0"),M:this.$d.months,MM:p.s(this.$d.months,2,"0"),D:this.$d.days,DD:p.s(this.$d.days,2,"0"),H:this.$d.hours,HH:p.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:p.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:p.s(this.$d.seconds,2,"0"),SSS:p.s(this.$d.milliseconds,3,"0")};return m.replace(N,function(l,M){return M||String(d[l])})},u.as=function(i){return this.$ms/J[B(i)]},u.get=function(i){var m=this.$ms,d=B(i);return d==="milliseconds"?m%=1e3:m=d==="weeks"?E(m/J[d]):this.$d[d],m||0},u.add=function(i,m,d){var l;return l=m?i*J[B(m)]:Y(i)?i.$ms:T(i,this).$ms,T(this.$ms+l*(d?-1:1),this)},u.subtract=function(i,m){return this.add(i,m,!0)},u.locale=function(i){var m=this.clone();return m.$l=i,m},u.clone=function(){return T(this.$ms,this)},u.humanize=function(i){return b().add(this.$ms,"ms").locale(this.$l).fromNow(!i)},u.valueOf=function(){return this.asMilliseconds()},u.milliseconds=function(){return this.get("milliseconds")},u.asMilliseconds=function(){return this.as("milliseconds")},u.seconds=function(){return this.get("seconds")},u.asSeconds=function(){return this.as("seconds")},u.minutes=function(){return this.get("minutes")},u.asMinutes=function(){return this.as("minutes")},u.hours=function(){return this.get("hours")},u.asHours=function(){return this.as("hours")},u.days=function(){return this.get("days")},u.asDays=function(){return this.as("days")},u.weeks=function(){return this.get("weeks")},u.asWeeks=function(){return this.as("weeks")},u.months=function(){return this.get("months")},u.asMonths=function(){return this.as("months")},u.years=function(){return this.get("years")},u.asYears=function(){return this.as("years")},f}(),_=function(f,u,i){return f.add(u.years()*i,"y").add(u.months()*i,"M").add(u.days()*i,"d").add(u.hours()*i,"h").add(u.minutes()*i,"m").add(u.seconds()*i,"s").add(u.milliseconds()*i,"ms")};return function(f,u,i){b=i,p=i().$utils(),i.duration=function(l,M){var D=i.locale();return T(l,{$l:D},M)},i.isDuration=Y;var m=u.prototype.add,d=u.prototype.subtract;u.prototype.add=function(l,M){return Y(l)?_(this,l,1):m.bind(this)(l,M)},u.prototype.subtract=function(l,M){return Y(l)?_(this,l,-1):d.bind(this)(l,M)}}})})(Mt);const $t=ot;st.extend($t);const kt=(t,$=new Date)=>{let b=0,p=0,w=0;return $.getFullYear()!==t.getFullYear()?(w=$.getMonth(),p=($.getFullYear()-t.getFullYear()-1)*12,b=12-t.getMonth()):b=$.getMonth()-t.getMonth(),b+p+w+1},St=t=>["January","February","March","April","May","June","July","August","September","October","November","December"][t],Dt=(t,$)=>`${t} | ${$}`;function zt(t,$=new Date(Date.now()+1e3*60*60*24)){const b=st(t),p=st($),w=st.duration(p.diff(b));let k=0,S="day";return w.as("days")<=7?(S="day",k=w.as("days")):w.as("months")<=1?(S="week",k=w.as("weeks")):w.as("years")<=1?(S="month",k=w.as("months")):(S="year",k=w.as("years")),k=Math.trunc(k),`${Math.trunc(k)} ${S}${k>1?"s":""}`}var P=(t=>(t.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",t.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",t.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",t.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",t.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",t.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",t.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",t.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",t.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",t.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",t.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",t.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",t.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",t.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",t.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",t.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",t.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",t.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",t.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",t.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",t))(P||{});const Ht="Slick template with Svelte",Ct={home:"Home",personal:"Projects",career:"Experiences",resume:"Resume",skills:"Skills"},Lt=t=>{switch(t){case H.GitHub:return P.GitHub;case H.Linkedin:return P.LinkedIn;case H.StackOverflow:return P.StackOverflow;case H.Facebook:return P.Facebook;case H.Email:return P.Email;case H.Twitter:return P.Twitter;case H.Youtube:return P.Youtube}},xt={title:"Home",name:"Kyle",lastName:"Gibbs",description:"Hey there! Thanks for checking out my portfolio. I am a game developer and software engineer with a passion for learning and creating. I am currently working as a software engineer at Wolfjaw Studios. ",links:[{platform:H.GitHub,link:"https://github.com/"},{platform:H.Linkedin,link:"https://www.linkedin.com/"},{platform:H.Twitter,link:"https://twitter.com/"},{platform:H.StackOverflow,link:"https://stackoverflow.com/"},{platform:H.Email,link:"riadh-adrani@hotmail.fr"},{platform:H.Youtube,link:"https://www.youtube.com"},{platform:H.Facebook,link:"https://www.facebook.com"}]},Yt={title:"Projects",items:gt},At={title:"Experiences",items:pt},Tt={title:"Skills",items:ht},Ot={title:"Resumé",item:""},Ft={title:"Search"};export{At as E,xt as H,P as I,ht as M,Ct as N,Yt as P,Ot as R,Ft as S,Ht as T,at as a,Lt as b,zt as c,St as d,pt as e,dt as f,wt as g,kt as h,gt as i,Tt as j,bt as o,lt as t,Dt as u};
