((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_2",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d4F(){return new B.B9(null)},
B9:function B9(d){this.a=d},
ajU:function ajU(d){var _=this
_.d=$
_.e=d
_.c=_.a=null},
b5j:function b5j(){},
b5h:function b5h(){},
b5i:function b5i(){},
WW:function WW(d,e,f){this.c=d
this.d=e
this.a=f},
ajT:function ajT(d){this.d=d
this.c=this.a=null},
b5e:function b5e(d){this.a=d},
b5a:function b5a(){},
b59:function b59(){},
b5b:function b5b(){},
b5c:function b5c(){},
b5d:function b5d(d,e){this.a=d
this.b=e},
b58:function b58(){},
b5f:function b5f(){},
b5g:function b5g(){},
b57:function b57(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[4],B)
D=c[20]
B.B9.prototype={
P(){return new B.ajU(A.jj())}}
B.ajU.prototype={
a6(){this.ah()
if($.W==null)A.eD()
$.W.toString
this.d=A.d_(null,null,null,!1,y.k)
this.o0()},
o0(){var x=0,w=A.o(y.v),v=this,u,t,s
var $async$o0=A.k(function(d,e){if(d===1)return A.l(e,w)
while(true)switch(x){case 0:s=v.c
s.toString
s=A.b5(s,!1,y.F).a
s.toString
u=v.d
u===$&&A.a()
if((u.b&4)===0){u=v.c
u.toString
t=v.e.l3(u,!0,"",s.a)
v.d.eZ(0,t)}return A.m(null,w)}})
return A.n($async$o0,w)},
n(){var x=this.d
x===$&&A.a()
if((x.b&1)!==0)x.aB(0)
this.aA()},
B(d){var x=this.d
x===$&&A.a()
return A.eq(new B.b5j(),new A.bn(x,A.t(x).i("bn<1>")),y.k)}}
B.WW.prototype={
P(){return new B.ajT(A.ah())}}
B.ajT.prototype={
B(d){var x=null,w=this.a,v=w.c
w=w.d
return A.a3(x,A.kl(x,x,C.bN,A.a0(A.b([A.v("verde - terminado",x,x,x,x,x,x,x,x,x),A.v("Narjanja - hay que cobrar",x,x,x,x,x,x,x,x,x),A.v("Amarrillo - estamos trabajando",x,x,x,x,x,x,x,x,x),A.v("Rojo, hay problemas",x,x,x,x,x,x,x,x,x),A.fi(new B.b5e(this),y.b)],y.u),C.f,x,C.i,C.h,C.l),x,C.cn),C.k,x,x,x,x,w,x,x,x,x,x,v)},
a6S(d){return this.c1p(d)},
c1p(a0){var x=0,w=A.o(y.l),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a6S=A.k(function(a1,a2){if(a1===1)return A.l(a2,w)
while(true)switch(x){case 0:h=A.cj(new A.Ch().Lh(a0),y.y)
d=J
x=3
return A.f(h,$async$a6S)
case 3:g=d.T(a2,"sumaPagosClientesNetos")
f=a0.r
e=g/f*100
h=a0.dx
t=A.K(h).i("ai<1>")
s=new A.ai(h,new B.b5f(),t).gt(0)+1
r=new A.ai(h,new B.b5g(),t).gt(0)
q=r/s*100
t=u.c1q(e,q,s)
h=u.d
p=y.u
h=A.b([new A.da(A.bF()).lX("Codigo",a0.c,h),new A.da(A.bF()).lX("Cliente",a0.f,h),A.v("Fecha de entrega : "+a0.w.l(0),null,null,null,null,null,null,null,null,null),new A.da(A.bF()).lX("Tutor",a0.x,h),A.v("Notas : "+a0.cy,null,null,null,null,null,null,null,null,null),A.v("Nombre Empresa : "+a0.go,null,null,null,null,null,null,null,null,null)],p)
if(s!==1){o=A.v("Tenemos "+s+" teniendo en cuenta la final",null,null,null,null,null,null,null,null,null)
n=A.v("Avances entregados "+r,null,null,null,null,null,null,null,null,null)
m=A.v("---Zona de pagos---",null,null,null,null,null,null,null,null,null)
l=A.v("Pagos clientes "+A.j(g)+" - cobrado "+f,null,null,null,null,null,null,null,null,null)
k=e===100
if(k)j=q===100?"\u2705 Todo pagado y entregado.":"\u2705 Todo pagado, falta completar la entrega."
else if(q>=e-5&&q<=e+5)j="\ud83d\udcb0 Hay que cobrar."
else j=q<e?"\ud83d\udee0\ufe0f Trabajando, a\xfan falta entregar avances.":"\u26a0\ufe0f Verificar pagos y avances."
i=A.b([A.v("% Avance Precio: "+C.d.bw(e,2)+"%",null,null,null,null,null,null,null,null,null),A.v("% Avances Realizados: "+C.d.bw(q,2)+"%",null,null,null,null,null,null,null,null,null),A.v(j,null,null,null,null,null,A.a2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,C.u,null,null,!0,null,null,null,null,null,null,null,null),null,null,null)],p)
if(k&&q===100)i.push(u.aKw(a0))
h.push(A.a0(A.b([o,n,new A.am(null,30,null,null),m,l,A.a0(i,C.f,null,C.i,C.h,C.l)],p),C.f,null,C.i,C.h,C.l))}else h.push(A.a0(A.b([A.v("Debe registrar avances en esta tesis para poder verla aca",null,null,null,null,null,null,null,null,null),u.aKw(a0)],p),C.f,null,C.i,C.h,C.l))
v=A.a3(null,A.kl(null,null,C.bN,A.a0(h,C.f,null,C.i,C.h,C.l),null,C.cn),C.k,t,null,null,null,null,null,null,null,null,null,null)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$a6S,w)},
aKw(d){return A.a0(A.b([A.bY(this.d.a,!1,new B.b57(this,d),!0,15,C.F,"Todo bien",-1)],y.u),C.f,null,C.i,C.h,C.l)},
c1q(d,e,f){if(f===1)return $.jp()
else if(d===100)return $.p9()
else if(e>=d-5&&e<=d+5)return $.cIj()
else if(e<d)return $.cYj()
else return $.jp()}}
var z=a.updateTypes([])
B.b5j.prototype={
$2(d,e){var x,w=null
if(e.a===C.ay)return C.e5
else{x=e.c
if(x!=null)return A.v("Error servicio: "+A.j(x),w,w,w,w,w,w,w,w,w)
else return A.mc(new B.b5h(),!1,!1,new B.b5i(),w)}},
$S:1536}
B.b5h.prototype={
$2(d,e){return A.a8(A.b([new B.WW(d/2,e,null)],y.u),C.f,C.i,C.h,null)},
$S:75}
B.b5i.prototype={
$2(d,e){var x=null
return A.v("La prueba tutores aun no esta programado para celular",x,x,x,x,x,x,x,x,x)},
$S:125}
B.b5e.prototype={
$3(d,e,f){var x,w,v=null,u=J.jr(e.b,new B.b5a()),t=A.z(u,!0,u.$ti.i("B.E"))
u=A.K(t).i("ai<1>")
x=A.z(new A.ai(t,new B.b5b(),u),!0,u.i("B.E"))
C.b.e7(x,new B.b5c())
u=x.length
w=this.a
return A.a0(A.b([A.v("Tenemos "+u+" proyectos en curso",v,v,v,v,v,v,v,v,v),new A.am(v,w.a.d*0.8,A.fE(v,new B.b5d(w,x),u,v,v,v,v,v,v,!1,!1),v)],y.u),C.f,v,C.i,C.h,C.l)},
$C:"$3",
$R:3,
$S:325}
B.b5a.prototype={
$1(d){return(d.d==="TESIS"||C.b.eg(d.dx,new B.b59()))&&d.e.bC(A.U(2024,1,1,0,0,0,0,0))},
$S:53}
B.b59.prototype={
$1(d){return d.z==="AVANCE"},
$S:106}
B.b5b.prototype={
$1(d){return!d.fy},
$S:53}
B.b5c.prototype={
$2(d,e){return e.w.bN(0,d.w)},
$S:186}
B.b5d.prototype={
$2(d,e){return A.ZP(new B.b58(),this.a.a6S(this.b[e]),y.l)},
$S:1537}
B.b58.prototype={
$2(d,e){var x,w=null
if(e.a===C.ay)return new A.xd(w)
else if(e.c!=null)return A.v("Error al cargar los pagos",w,w,w,w,w,w,w,w,w)
else{x=e.b
return x==null?new A.am(0,0,w,w):x}},
$S:1538}
B.b5f.prototype={
$1(d){return d.z==="AVANCE"},
$S:106}
B.b5g.prototype={
$1(d){return d.z==="AVANCE"&&d.y!==""},
$S:106}
B.b57.prototype={
$0(){var x=this.a.c
x.toString
new A.rK().qi("ok",this.b,x)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.B9,B.WW])
x(A.Q,[B.ajU,B.ajT])
x(A.o7,[B.b5j,B.b5h,B.b5i,B.b5c,B.b5d,B.b58])
x(A.li,[B.b5e,B.b5a,B.b59,B.b5b,B.b5f,B.b5g])
w(B.b57,A.o6)})()
A.tK(b.typeUniverse,JSON.parse('{"WW":{"N":[],"c":[]},"B9":{"N":[],"c":[]},"ajU":{"Q":["B9"]},"ajT":{"Q":["WW"]}}'))
var y={F:A.an("fp"),b:A.an("fq"),u:A.an("y<c>"),k:A.an("w<f7>"),y:A.an("V<d,@>"),l:A.an("c"),v:A.an("~")};(function constants(){D.aFm=new A.a5(C.me,[C.Hq,C.Hs,C.Ht,C.Hu,C.Hv,C.Hw,C.Hx],A.an("a5<d,r>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dps","cYj",()=>A.Lb(D.aFm))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_2",e:"endPart",h:b})})($__dart_deferred_initializers__,"yW3Eu0DBR06PgNyy2HWavADhtuk=");