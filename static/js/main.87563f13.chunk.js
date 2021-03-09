(this["webpackJsonpcterm-for-react"]=this["webpackJsonpcterm-for-react"]||[]).push([[0],{25:function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(11),o=i.n(r),a=i(7),h=i(0),c=i(4),s=i(12),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return i&&t[i]&&(e[i]=t[i]),e[i]},d=i(9),u=i(10),f=function(e){return e<10?"0"+String(e):String(e)},p=function(e){var t=e.getMonth()+1,i=e.getDate(),n=e.getHours(),r=e.getMinutes();return" ".concat(t," ").concat(i," ").concat(f(n),":").concat(f(r))},v=function(){function e(t){var i=t.permission,n=t.owner,r=t.ownerGroup,o=t.fileSize,a=t.updatedDate,h=t.key,c=t.path;Object(d.a)(this,e),this.name="",this.contents="",this.permission=i||"-rwxrwxrwx",h.length>0&&(this.name=h),this.path=c||[],this.link=[],this.owner=n||"",this.ownerGroup=r||"staff",this.fileSize=o||this.contents.length,this.updatedDate=a||p(new Date),this.isFile=!0,this.addContents=this.addContents.bind(this)}return Object(u.a)(e,[{key:"addContents",value:function(e){this.contents=e}}]),e}(),m=function(){function e(t){var i=t.permission,n=t.owner,r=t.ownerGroup,o=t.fileSize,a=t.updatedDate,h=t.key,c=t.path;Object(d.a)(this,e),this.name="",this.child=[],this.childLength=0,this.link=[],this.permission=i||"drwxrwxrwx",h&&(this.name=h),this.path=c||[],this.link=[],this.owner=n||"",this.ownerGroup=r||"staff",this.fileSize=o||2048,this.updatedDate=a||p(new Date),this.isFile=!1,this.appendChild=this.appendChild.bind(this),this.deleteChild=this.deleteChild.bind(this),this.hasChild=this.hasChild.bind(this)}return Object(u.a)(e,[{key:"hasChild",value:function(e){var t,i=Object(h.a)(this.child);try{for(i.s();!(t=i.n()).done;){if(t.value.name===e)return!0}}catch(n){i.e(n)}finally{i.f()}return!1}},{key:"appendChild",value:function(t,i,n,r,o,a){if(!(this.childLength<6))return a("\r\n"),void a("cannot create new file or folder. this directory limited 5 child which is sum of all files and folders");if(this.hasChild(i))return a("\r\n"),void a("The name is already exist. try another name.");var h,c={};void 0===(c=n?{permission:"rwxrwxrwx",owner:"root",ownerGroup:"admin"}:{permission:"rwxr-xr-x",owner:this.owner,ownerGroup:"staff"}).key&&(c.key=i),void 0===c.updatedDate&&(c.updatedDate=p(new Date)),r?(void 0===c.fileSize&&(c.fileSize=0),h=new v(c)):(void 0===c.fileSize&&(c.fileSize=64),h=new e(c)),this.child.push(h),this.childLength++,this.fileSize+=c.fileSize,t.path[t.path.length-1]=this,t.nowDir=this,o&&o(t)}},{key:"deleteChild",value:function(e,t,i,n){var r,o,a=[],c=Object(h.a)(this.child);try{for(c.s();!(o=c.n()).done;){var s=o.value;s.name!==e?a.push(s):r=s}}catch(m){c.e(m)}finally{c.f()}if(!r)return n("\r\n"),void n('cannot find the file named "'.concat(e,'"'));if(r.isFile)return this.child=a,this.childLength--,r;if(t&&i)return this.child=a,this.childLength--,r;if(t&&!i){var l,d=[],u=Object(h.a)(r.child);try{for(u.s();!(l=u.n()).done;){var f=l.value;if(!f.isFile)return n("\r\n"),void n("cannot delete this folder. it's not empty. please try -rf option.");d.push(f)}}catch(m){u.e(m)}finally{u.f()}return this.child=a,this.childLength--,r}if(i&&!t){var p,v=Object(h.a)(r.child);try{for(v.s();!(p=v.n()).done;){if("-rwx"!==p.value.permission.slice(0,4))return n("\r\n"),void n("cannot delete this folder. found folder. check permission or please try -rf option.")}}catch(m){v.e(m)}finally{v.f()}return this.child=a,this.childLength--,r}}}]),e}(),w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"codestates",i={};return e.isSudo?(void 0===i.owner&&(i.owner="root"),void 0===i.permission&&(i.permission="drwxrwxrwx"),void 0===i.ownerGroup&&(i.ownerGroup="admin")):(void 0===i.owner&&(i.owner=e.githubUserName),void 0===i.permission&&(i.permission="drwxr-xr-x"),void 0===i.ownerGroup&&(i.ownerGroup="staff")),void 0===i.fileSize&&(i.fileSize=64),void 0===i.updatedDate&&(i.updatedDate=p(new Date)),void 0===i.key&&(i.key=t),new m(i)},g=function(e,t,i,n,r,o,a){if(0!==a.length){var h=!1;switch(o){case"mkdir":if(0===a.length)return r("\r\n"),void r("Enter the folder name you want to create");if(!(i.path[i.path.length-1].childLength<6)){h=!0;break}return i.path[i.path.length-1].appendChild(i,a,e,t,n,r),void(h&&(r("\r\n"),r("cannot create new file or folder. this directory limited 5 child which is sum of all files and folders")));case"touch":if(0===a.length)return r("\r\n"),void r("Enter the file name you want to create");if(t=!0,!(i.path[i.path.length-1].childLength<6)){h=!0;break}return i.path[i.path.length-1].appendChild(i,a,e,t,n,r),void(h&&(r("\r\n"),r("cannot create new file or folder. this directory limited 5 child which is sum of all files and folders")));case"cd":if(i.nowDir.child.some((function(e){return!e.isFile&&e.name===a}))){var c=i.nowDir.child.filter((function(e){return!e.isFile&&e.name===a}));i.nowDir=c,i.path.push(i.nowDir),i.dirPath.push(i.nowDir.name),n(i)}else r("\r\n"),r("cannot create new file or folder. this directory limited 5 child which is sum of all files and folders");return;case"whoami":return void r(i.githubUserName);default:return r("\r\n"),void r("command not found: "+o)}}else r("".concat(o,": no such file or directory: ").concat(a))},y=function(e,t,i,n){var r=e.split(" "),o=!1;"sudo"===r[0]&&(o=!0,r.shift());var h=Object(a.a)(r),s=h[0],l=h.slice(1);l.length>0?l.forEach((function(e){return g(o,false,t,i,n,s,e)})):g.apply(void 0,[s].concat(Object(c.a)(l)))},b=(i(17),i(6));var D=function(e){var t=e.setCmdLine,i=e.setUser,r=e.userInfo,o=e.welcomeText,d=Object(n.useRef)(null),u=function(e){d.current.terminal.writeln(e)},f=function(e){d.current.terminal.write(e)},p=function(e,t){var i=w(e,"home");return i.appendChild(e,e.githubUserName,!0,!1,null,t),void 0===e.path&&(e.path=[i,i.child[0]]),0===e.dirPath.length&&(e.dirPath=["home",e.githubUserName]),void 0===e.nowDir&&(e.nowDir=e.path[1]),e}(function(e){var t={name:"",userId:"",email:"",githubId:"",githubUserName:""};for(var i in t)t[i]=l(t,e,i);return""===t.name&&(t.name="codestates"),""===t.githubUserName&&(t.githubUserName="codestates"),void 0===t.dirPath&&(t.dirPath=[]),t}(r),u),v=Object(n.useState)(p),m=v[0];i||(i=v[1]);var g=Object(n.useState)(""),D=g[0];t||(t=g[1]);var j=function(e){w(e,"/").child=e.path}("mkdir root"),x={PWD:function(){return j.name+m.dirPath.join("/")},pwd:function(e){e("\r\n"),e(j.name+m.dirPath.join("/"))},userPath:function(){if(t=m.githubUserName,i=m.dirPath,Array.isArray(i)&&i.length>1&&"/"+i[0]+"/"+i[1]==="/home/".concat(t)){var e=Object(c.a)(m.dirPath);return e.shift(),e.shift(),"~"+e.join("/")}var t,i;return x.PWD()},console:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return console.log(m)})),consoleRoot:function(){return console.log(j)},l:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";x.ls(e,t)},ls:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t&&"string"===typeof t){var i=t.split(""),n=[i.includes("a"),i.includes("l")],r=n[0],o=n[1];if(r&&o){e("Total "+m.nowDir.childLength);var a,c=Object(h.a)(m.nowDir.child);try{for(c.s();!(a=c.n()).done;){var s=a.value,l=s.permission,d=s.link,u=s.owner,f=s.ownerGroup,p=s.updatedDate,v=s.name;e("".concat(l," ").concat(d," ").concat(u," ").concat(f," ").concat(p," ").concat(v))}}catch(U){c.e(U)}finally{c.f()}}else if(r){var w,g=Object(h.a)(m.nowDir.child);try{for(g.s();!(w=g.n()).done;){var y=w.value;e(y.name+"    ")}}catch(U){g.e(U)}finally{g.f()}}else if(o){e("Total "+m.nowDir.childLength);var b,D=Object(h.a)(m.nowDir.child);try{for(D.s();!(b=D.n()).done;){var j=b.value;if("."!==j.name[0]){var x=j.permission,O=j.link,k=j.owner,C=j.ownerGroup,S=j.updatedDate,L=j.name;e("".concat(x," ").concat(O," ").concat(k," ").concat(C," ").concat(S," ").concat(L))}}}catch(U){D.e(U)}finally{D.f()}}}else{m.nowDir.childLength>0&&e("\r\n");var P,z=Object(h.a)(m.nowDir.child);try{for(z.s();!(P=z.n()).done;){var G=P.value;"."!==G.name[0]&&e(G.name+"    ")}}catch(U){z.e(U)}finally{z.f()}}}},O=function(){f("\r\n"+x.userPath()+"$ ")};return Object(n.useEffect)((function(){u(o||function(){return["".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"codestates","\ub2d8 \ubc18\uac11\uc2b5\ub2c8\ub2e4."),"Linux & CLI \uc2e4\uc2b5\uc744 \uc704\ud55c Interactive web tutorial\uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4.","\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc740 \uc624\ub85c\uc9c0 \ucf54\ub4dc\uc2a4\ud14c\uc774\uce20 \uc218\uac15\uc0dd\uc744 \uc704\ud574 \ub9cc\ub4e4\uc5b4\uc84c\uc2b5\ub2c8\ub2e4.","\uc9c0\uae08\ubd80\ud130 Linux & CLI \uc2e4\uc2b5\uc744 \uc2dc\uc791\ud569\ub2c8\ub2e4."].join("\r\n")}(m.githubUserName)),O()}),[]),Object(b.jsx)(s.a,{ref:d,onKey:function(e){var n=e.domEvent.key;if("Enter"===n)D&&function(e,t){var n,r=function(e){var t=[];return-1===(e=e.trim()).indexOf(";")?t.push(e):t=e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})),t}(e),o=Object(h.a)(r);try{for(o.s();!(n=o.n()).done;){var s=n.value,l=s.split(" "),d=Object(a.a)(l),u=d[0],f=d.slice(1);x[u]?x[u].apply(x,[t].concat(Object(c.a)(f))):y(s,m,i,t)}}catch(p){o.e(p)}finally{o.f()}}(D,u),t(""),O();else if("Backspace"===n){if(D.length>0){var r=D.split("");r.pop(),r=r.join(""),t(r),f("\b \b")}}else t(D+n),f(n)}})};o.a.render(Object(b.jsx)(D,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.87563f13.chunk.js.map