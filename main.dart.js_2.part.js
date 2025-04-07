((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_2",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d52(){return new B.Bb(null)},
Bb:function Bb(d){this.a=d},
ajT:function ajT(d){var _=this
_.d=$
_.e=d
_.c=_.a=null},
b5q:function b5q(){},
b5o:function b5o(){},
b5p:function b5p(){},
WT:function WT(d,e,f){this.c=d
this.d=e
this.a=f},
ajS:function ajS(d){this.d=d
this.c=this.a=null},
b5l:function b5l(d){this.a=d},
b5h:function b5h(){},
b5g:function b5g(){},
b5i:function b5i(){},
b5j:function b5j(){},
b5k:function b5k(d,e){this.a=d
this.b=e},
b5f:function b5f(){},
b5m:function b5m(){},
b5n:function b5n(){},
b5e:function b5e(d,e){this.a=d
this.b=e}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[4],B)
B.Bb.prototype={
P(){return new B.ajT(A.jk())}}
B.ajT.prototype={
a5(){this.ag()
if($.V==null)A.eO()
$.V.toString
this.d=A.d6(null,null,null,!1,y.k)
this.nY()},
nY(){var x=0,w=A.o(y.v),v=this,u,t,s
var $async$nY=A.j(function(d,e){if(d===1)return A.l(e,w)
while(true)switch(x){case 0:s=v.c
s.toString
s=A.bc(s,!1,y.F).a
s.toString
u=v.d
u===$&&A.a()
if((u.b&4)===0){u=v.c
u.toString
t=v.e.l2(u,!0,"",s.a)
v.d.fe(0,t)}return A.m(null,w)}})
return A.n($async$nY,w)},
p(){var x=this.d
x===$&&A.a()
if((x.b&1)!==0)x.aC(0)
this.aA()},
B(d){var x=this.d
x===$&&A.a()
return A.eM(new B.b5q(),new A.bw(x,A.t(x).i("bw<1>")),y.k)}}
B.WT.prototype={
P(){return new B.ajS(A.ag())}}
B.ajS.prototype={
B(d){var x=null,w=this.a,v=w.c
w=w.d
return A.Z(x,A.kl(x,x,C.bN,A.a2(A.b([A.v("verde - terminado",x,x,x,x,x,x,x,x,x),A.v("Narjanja - hay que cobrar",x,x,x,x,x,x,x,x,x),A.v("Amarrillo - estamos trabajando",x,x,x,x,x,x,x,x,x),A.v("Rojo, hay problemas",x,x,x,x,x,x,x,x,x),A.fn(new B.b5l(this),y.b)],y.u),C.f,x,C.i,C.h,C.l),x,C.co),C.j,x,x,x,x,w,x,x,x,x,x,v)},
a6M(d){return this.c1D(d)},
c1D(a0){var x=0,w=A.o(y.l),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a6M=A.j(function(a1,a2){if(a1===1)return A.l(a2,w)
while(true)switch(x){case 0:h=A.cm(new A.Cm().Lf(a0),y.y)
d=J
x=3
return A.h(h,$async$a6M)
case 3:g=d.T(a2,"sumaPagosClientesNetos")
f=a0.r
e=g/f*100
h=a0.dx
t=A.K(h).i("aj<1>")
s=new A.aj(h,new B.b5m(),t).gt(0)+1
r=new A.aj(h,new B.b5n(),t).gt(0)
q=r/s*100
t=u.c1E(e,q,s)
h=u.d
p=y.u
h=A.b([new A.dp(A.bx()).ml("Codigo",a0.c,h),new A.dp(A.bx()).ml("Cliente",a0.f,h),A.v("Fecha de entrega : "+a0.w.l(0),null,null,null,null,null,null,null,null,null),new A.dp(A.bx()).ml("Tutor",a0.x,h),A.v("Notas : "+a0.cy,null,null,null,null,null,null,null,null,null),A.v("Nombre Empresa : "+a0.go,null,null,null,null,null,null,null,null,null)],p)
if(s!==1){o=A.v("Tenemos "+s+" teniendo en cuenta la final",null,null,null,null,null,null,null,null,null)
n=A.v("Avances entregados "+r,null,null,null,null,null,null,null,null,null)
m=A.v("---Zona de pagos---",null,null,null,null,null,null,null,null,null)
l=A.v("Pagos clientes "+A.k(g)+" - cobrado "+f,null,null,null,null,null,null,null,null,null)
k=e===100
if(k)j=q===100?"\u2705 Todo pagado y entregado.":"\u2705 Todo pagado, falta completar la entrega."
else if(q>=e-5&&q<=e+5)j="\ud83d\udcb0 Hay que cobrar."
else j=q<e?"\ud83d\udee0\ufe0f Trabajando, a\xfan falta entregar avances.":"\u26a0\ufe0f Verificar pagos y avances."
i=A.b([A.v("% Avance Precio: "+C.d.by(e,2)+"%",null,null,null,null,null,null,null,null,null),A.v("% Avances Realizados: "+C.d.by(q,2)+"%",null,null,null,null,null,null,null,null,null),A.v(j,null,null,null,null,null,A.a3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,C.t,null,null,!0,null,null,null,null,null,null,null,null),null,null,null)],p)
if(k&&q===100)i.push(u.aKu(a0))
h.push(A.a2(A.b([o,n,new A.am(null,30,null,null),m,l,A.a2(i,C.f,null,C.i,C.h,C.l)],p),C.f,null,C.i,C.h,C.l))}else h.push(A.a2(A.b([A.v("Debe registrar avances en esta tesis para poder verla aca",null,null,null,null,null,null,null,null,null),u.aKu(a0)],p),C.f,null,C.i,C.h,C.l))
v=A.Z(null,A.kl(null,null,C.bN,A.a2(h,C.f,null,C.i,C.h,C.l),null,C.co),C.j,t,null,null,null,null,null,null,null,null,null,null)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$a6M,w)},
aKu(d){return A.a2(A.b([A.c_(this.d.a,!1,new B.b5e(this,d),!0,15,C.K,"Todo bien",-1)],y.u),C.f,null,C.i,C.h,C.l)},
c1E(d,e,f){if(f===1)return $.iN()
else if(d===100)return $.nj()
else if(e>=d-5&&e<=d+5)return $.cBc()
else if(e<d)return $.cIG()
else return $.iN()}}
var z=a.updateTypes([])
B.b5q.prototype={
$2(d,e){var x,w=null
if(e.a===C.aJ)return C.e5
else{x=e.c
if(x!=null)return A.v("Error servicio: "+A.k(x),w,w,w,w,w,w,w,w,w)
else return A.me(new B.b5o(),!1,!1,new B.b5p(),w)}},
$S:1521}
B.b5o.prototype={
$2(d,e){return A.a8(A.b([new B.WT(d/2,e,null)],y.u),C.f,C.i,C.h,null)},
$S:74}
B.b5p.prototype={
$2(d,e){var x=null
return A.v("La prueba tutores aun no esta programado para celular",x,x,x,x,x,x,x,x,x)},
$S:124}
B.b5l.prototype={
$3(d,e,f){var x,w,v=null,u=J.j4(e.b,new B.b5h()),t=A.z(u,!0,u.$ti.i("B.E"))
u=A.K(t).i("aj<1>")
x=A.z(new A.aj(t,new B.b5i(),u),!0,u.i("B.E"))
C.b.e2(x,new B.b5j())
u=x.length
w=this.a
return A.a2(A.b([A.v("Tenemos "+u+" proyectos en curso",v,v,v,v,v,v,v,v,v),new A.am(v,w.a.d*0.8,A.fE(v,new B.b5k(w,x),u,v,v,v,v,v,v,!1,!1),v)],y.u),C.f,v,C.i,C.h,C.l)},
$C:"$3",
$R:3,
$S:302}
B.b5h.prototype={
$1(d){return(d.d==="TESIS"||C.b.ei(d.dx,new B.b5g()))&&d.e.bC(A.W(2024,1,1,0,0,0,0,0))},
$S:52}
B.b5g.prototype={
$1(d){return d.z==="AVANCE"},
$S:92}
B.b5i.prototype={
$1(d){return!d.fy},
$S:52}
B.b5j.prototype={
$2(d,e){return e.w.bN(0,d.w)},
$S:177}
B.b5k.prototype={
$2(d,e){return A.ZO(new B.b5f(),this.a.a6M(this.b[e]),y.l)},
$S:1522}
B.b5f.prototype={
$2(d,e){var x,w=null
if(e.a===C.aJ)return new A.xe(w)
else if(e.c!=null)return A.v("Error al cargar los pagos",w,w,w,w,w,w,w,w,w)
else{x=e.b
return x==null?new A.am(0,0,w,w):x}},
$S:1523}
B.b5m.prototype={
$1(d){return d.z==="AVANCE"},
$S:92}
B.b5n.prototype={
$1(d){return d.z==="AVANCE"&&d.y!==""},
$S:92}
B.b5e.prototype={
$0(){var x=this.a.c
x.toString
new A.rN().qi("ok",this.b,x)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.Bb,B.WT])
x(A.R,[B.ajT,B.ajS])
x(A.o8,[B.b5q,B.b5o,B.b5p,B.b5j,B.b5k,B.b5f])
x(A.lf,[B.b5l,B.b5h,B.b5g,B.b5i,B.b5m,B.b5n])
w(B.b5e,A.o7)})()
A.tK(b.typeUniverse,JSON.parse('{"WT":{"N":[],"c":[]},"Bb":{"N":[],"c":[]},"ajT":{"R":["Bb"]},"ajS":{"R":["WT"]}}'))
var y={F:A.an("fm"),b:A.an("fo"),u:A.an("y<c>"),k:A.an("w<f6>"),y:A.an("U<d,@>"),l:A.an("c"),v:A.an("~")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_2",e:"endPart",h:b})})($__dart_deferred_initializers__,"EwB/AYUCZNp5ctByhBVINtE4xvQ=");