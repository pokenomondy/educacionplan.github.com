((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_2",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d3Q(){return new B.B9(null)},
B9:function B9(d){this.a=d},
ajM:function ajM(d){var _=this
_.d=$
_.e=d
_.c=_.a=null},
b55:function b55(){},
b53:function b53(){},
b54:function b54(){},
WS:function WS(d,e,f){this.c=d
this.d=e
this.a=f},
ajL:function ajL(d){this.d=d
this.c=this.a=null},
b50:function b50(d){this.a=d},
b4X:function b4X(){},
b4W:function b4W(){},
b4Y:function b4Y(){},
b4Z:function b4Z(){},
b5_:function b5_(d,e){this.a=d
this.b=e},
b4V:function b4V(){},
b51:function b51(){},
b52:function b52(){},
b4U:function b4U(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[4],B)
D=c[20]
B.B9.prototype={
R(){return new B.ajM(A.jC())}}
B.ajM.prototype={
a7(){this.ah()
if($.W==null)A.eK()
$.W.toString
this.d=A.d7(null,null,null,!1,y.k)
this.o_()},
o_(){var x=0,w=A.o(y.v),v=this,u,t,s
var $async$o_=A.k(function(d,e){if(d===1)return A.l(e,w)
while(true)switch(x){case 0:s=v.c
s.toString
s=A.b6(s,!1,y.F).a
s.toString
u=v.d
u===$&&A.a()
if((u.b&4)===0){u=v.c
u.toString
t=v.e.l1(u,!0,"",s.a)
v.d.fg(0,t)}return A.m(null,w)}})
return A.n($async$o_,w)},
p(){var x=this.d
x===$&&A.a()
if((x.b&1)!==0)x.aC(0)
this.aB()},
B(d){var x=this.d
x===$&&A.a()
return A.eI(new B.b55(),new A.bv(x,A.t(x).i("bv<1>")),y.k)}}
B.WS.prototype={
R(){return new B.ajL(A.ah())}}
B.ajL.prototype={
B(d){var x=null,w=this.a,v=w.c
w=w.d
return A.a3(x,A.kK(x,x,C.bQ,A.a1(A.b([A.v("verde - terminado",x,x,x,x,x,x,x,x,x),A.v("Narjanja - hay que cobrar",x,x,x,x,x,x,x,x,x),A.v("Amarrillo - estamos trabajando",x,x,x,x,x,x,x,x,x),A.v("Rojo, hay problemas",x,x,x,x,x,x,x,x,x),A.fd(new B.b50(this),y.b)],y.u),C.f,x,C.i,C.h,C.l),x,C.cu),C.k,x,x,x,x,w,x,x,x,x,x,v)},
a6G(d){return this.c11(d)},
c11(a0){var x=0,w=A.o(y.l),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a6G=A.k(function(a1,a2){if(a1===1)return A.l(a2,w)
while(true)switch(x){case 0:h=A.ck(new A.Ch().Le(a0),y.y)
d=J
x=3
return A.h(h,$async$a6G)
case 3:g=d.T(a2,"sumaPagosClientesNetos")
f=a0.r
e=g/f*100
h=a0.dx
t=A.K(h).i("ak<1>")
s=new A.ak(h,new B.b51(),t).gt(0)+1
r=new A.ak(h,new B.b52(),t).gt(0)
q=r/s*100
t=u.c12(e,q,s)
h=u.d
p=y.u
h=A.b([new A.dp(A.bM()).ml("Codigo",a0.c,h),new A.dp(A.bM()).ml("Cliente",a0.f,h),A.v("Fecha de entrega : "+a0.w.l(0),null,null,null,null,null,null,null,null,null),new A.dp(A.bM()).ml("Tutor",a0.x,h),A.v("Notas : "+a0.cy,null,null,null,null,null,null,null,null,null),A.v("Nombre Empresa : "+a0.go,null,null,null,null,null,null,null,null,null)],p)
if(s!==1){o=A.v("Tenemos "+s+" teniendo en cuenta la final",null,null,null,null,null,null,null,null,null)
n=A.v("Avances entregados "+r,null,null,null,null,null,null,null,null,null)
m=A.v("---Zona de pagos---",null,null,null,null,null,null,null,null,null)
l=A.v("Pagos clientes "+A.j(g)+" - cobrado "+f,null,null,null,null,null,null,null,null,null)
k=e===100
if(k)j=q===100?"\u2705 Todo pagado y entregado.":"\u2705 Todo pagado, falta completar la entrega."
else if(q>=e-5&&q<=e+5)j="\ud83d\udcb0 Hay que cobrar."
else j=q<e?"\ud83d\udee0\ufe0f Trabajando, a\xfan falta entregar avances.":"\u26a0\ufe0f Verificar pagos y avances."
i=A.b([A.v("% Avance Precio: "+C.d.by(e,2)+"%",null,null,null,null,null,null,null,null,null),A.v("% Avances Realizados: "+C.d.by(q,2)+"%",null,null,null,null,null,null,null,null,null),A.v(j,null,null,null,null,null,A.a2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,C.v,null,null,!0,null,null,null,null,null,null,null,null),null,null,null)],p)
if(k&&q===100)i.push(u.aKe(a0))
h.push(A.a1(A.b([o,n,new A.al(null,30,null,null),m,l,A.a1(i,C.f,null,C.i,C.h,C.l)],p),C.f,null,C.i,C.h,C.l))}else h.push(A.a1(A.b([A.v("Debe registrar avances en esta tesis para poder verla aca",null,null,null,null,null,null,null,null,null),u.aKe(a0)],p),C.f,null,C.i,C.h,C.l))
v=A.a3(null,A.kK(null,null,C.bQ,A.a1(h,C.f,null,C.i,C.h,C.l),null,C.cu),C.k,t,null,null,null,null,null,null,null,null,null,null)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$a6G,w)},
aKe(d){return A.a1(A.b([A.c1(this.d.a,!1,new B.b4U(this,d),!0,15,C.K,"Todo bien",-1)],y.u),C.f,null,C.i,C.h,C.l)},
c12(d,e,f){if(f===1)return $.jm()
else if(d===100)return $.p8()
else if(e>=d-5&&e<=d+5)return $.cHs()
else if(e<d)return $.cXu()
else return $.jm()}}
var z=a.updateTypes([])
B.b55.prototype={
$2(d,e){var x,w=null
if(e.a===C.aF)return C.e4
else{x=e.c
if(x!=null)return A.v("Error servicio: "+A.j(x),w,w,w,w,w,w,w,w,w)
else return A.mS(new B.b53(),!1,!1,new B.b54(),w)}},
$S:1529}
B.b53.prototype={
$2(d,e){return A.a8(A.b([new B.WS(d/2,e,null)],y.u),C.f,C.i,C.h,null)},
$S:79}
B.b54.prototype={
$2(d,e){var x=null
return A.v("La prueba tutores aun no esta programado para celular",x,x,x,x,x,x,x,x,x)},
$S:125}
B.b50.prototype={
$3(d,e,f){var x,w,v=null,u=J.jo(e.b,new B.b4X()),t=A.z(u,!0,u.$ti.i("B.E"))
u=A.K(t).i("ak<1>")
x=A.z(new A.ak(t,new B.b4Y(),u),!0,u.i("B.E"))
C.b.e8(x,new B.b4Z())
u=x.length
w=this.a
return A.a1(A.b([A.v("Tenemos "+u+" proyectos en curso",v,v,v,v,v,v,v,v,v),new A.al(v,w.a.d*0.8,A.fT(v,new B.b5_(w,x),u,v,v,v,v,v,v,!1,!1),v)],y.u),C.f,v,C.i,C.h,C.l)},
$C:"$3",
$R:3,
$S:293}
B.b4X.prototype={
$1(d){return(d.d==="TESIS"||C.b.ej(d.dx,new B.b4W()))&&d.e.bC(A.U(2024,1,1,0,0,0,0,0))},
$S:51}
B.b4W.prototype={
$1(d){return d.z==="AVANCE"},
$S:115}
B.b4Y.prototype={
$1(d){return!d.fy},
$S:51}
B.b4Z.prototype={
$2(d,e){return e.w.bO(0,d.w)},
$S:180}
B.b5_.prototype={
$2(d,e){return A.ZL(new B.b4V(),this.a.a6G(this.b[e]),y.l)},
$S:1530}
B.b4V.prototype={
$2(d,e){var x,w=null
if(e.a===C.aF)return new A.xc(w)
else if(e.c!=null)return A.v("Error al cargar los pagos",w,w,w,w,w,w,w,w,w)
else{x=e.b
return x==null?new A.al(0,0,w,w):x}},
$S:1531}
B.b51.prototype={
$1(d){return d.z==="AVANCE"},
$S:115}
B.b52.prototype={
$1(d){return d.z==="AVANCE"&&d.y!==""},
$S:115}
B.b4U.prototype={
$0(){var x=this.a.c
x.toString
new A.rK().qh("ok",this.b,x)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.B9,B.WS])
x(A.R,[B.ajM,B.ajL])
x(A.o5,[B.b55,B.b53,B.b54,B.b4Z,B.b5_,B.b4V])
x(A.lh,[B.b50,B.b4X,B.b4W,B.b4Y,B.b51,B.b52])
w(B.b4U,A.o4)})()
A.tL(b.typeUniverse,JSON.parse('{"WS":{"N":[],"c":[]},"B9":{"N":[],"c":[]},"ajM":{"R":["B9"]},"ajL":{"R":["WS"]}}'))
var y={F:A.an("fn"),b:A.an("fB"),u:A.an("y<c>"),k:A.an("w<f5>"),y:A.an("V<d,@>"),l:A.an("c"),v:A.an("~")};(function constants(){D.aFe=new A.a5(C.md,[C.Ho,C.Hq,C.Hr,C.Hs,C.Ht,C.Hu,C.Hv],A.an("a5<d,q>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"doC","cXu",()=>A.L5(D.aFe))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_2",e:"endPart",h:b})})($__dart_deferred_initializers__,"zLowxyX2TZ5PlHQX2WyrbZpUYw8=");