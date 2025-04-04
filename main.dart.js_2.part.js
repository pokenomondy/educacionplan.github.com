((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_2",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d60(){return new B.Bb(null)},
Bb:function Bb(d){this.a=d},
ak0:function ak0(d){var _=this
_.d=$
_.e=d
_.c=_.a=null},
b5F:function b5F(){},
b5D:function b5D(){},
b5E:function b5E(){},
WW:function WW(d,e,f){this.c=d
this.d=e
this.a=f},
ak_:function ak_(d){this.d=d
this.c=this.a=null},
b5A:function b5A(d){this.a=d},
b5w:function b5w(){},
b5v:function b5v(){},
b5x:function b5x(){},
b5y:function b5y(){},
b5z:function b5z(d,e){this.a=d
this.b=e},
b5u:function b5u(){},
b5B:function b5B(){},
b5C:function b5C(){},
b5t:function b5t(d,e){this.a=d
this.b=e}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[4],B)
B.Bb.prototype={
M(){return new B.ak0(A.j3())}}
B.ak0.prototype={
a5(){this.ae()
if($.W==null)A.eH()
$.W.toString
this.d=A.cZ(null,null,null,!1,y.k)
this.nZ()},
nZ(){var x=0,w=A.o(y.v),v=this,u,t,s
var $async$nZ=A.j(function(d,e){if(d===1)return A.l(e,w)
while(true)switch(x){case 0:s=v.c
s.toString
s=A.bc(s,!1,y.F).a
s.toString
u=v.d
u===$&&A.a()
if((u.b&4)===0){u=v.c
u.toString
t=v.e.l3(u,!0,"",s.a)
v.d.eW(0,t)}return A.m(null,w)}})
return A.n($async$nZ,w)},
n(){var x=this.d
x===$&&A.a()
if((x.b&1)!==0)x.aB(0)
this.az()},
B(d){var x=this.d
x===$&&A.a()
return A.eu(new B.b5F(),new A.bq(x,A.t(x).i("bq<1>")),y.k)}}
B.WW.prototype={
M(){return new B.ak_(A.ag())}}
B.ak_.prototype={
B(d){var x=null,w=this.a,v=w.c
w=w.d
return A.Z(x,A.jP(x,x,C.bO,A.a0(A.b([A.v("verde - terminado",x,x,x,x,x,x,x,x,x),A.v("Narjanja - hay que cobrar",x,x,x,x,x,x,x,x,x),A.v("Amarrillo - estamos trabajando",x,x,x,x,x,x,x,x,x),A.v("Rojo, hay problemas",x,x,x,x,x,x,x,x,x),A.fp(new B.b5A(this),y.b)],y.u),C.f,x,C.i,C.h,C.l),x,C.ch),C.j,x,x,x,x,w,x,x,x,x,x,v)},
a6U(d){return this.c1U(d)},
c1U(a0){var x=0,w=A.o(y.l),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a6U=A.j(function(a1,a2){if(a1===1)return A.l(a2,w)
while(true)switch(x){case 0:h=A.cl(new A.Cm().Lk(a0),y.y)
d=J
x=3
return A.f(h,$async$a6U)
case 3:g=d.T(a2,"sumaPagosClientesNetos")
f=a0.r
e=g/f*100
h=a0.dx
t=A.K(h).i("ah<1>")
s=new A.ah(h,new B.b5B(),t).gt(0)+1
r=new A.ah(h,new B.b5C(),t).gt(0)
q=r/s*100
t=u.c1V(e,q,s)
h=u.d
p=y.u
h=A.b([new A.di(A.bt()).lX("Codigo",a0.c,h),new A.di(A.bt()).lX("Cliente",a0.f,h),A.v("Fecha de entrega : "+a0.w.l(0),null,null,null,null,null,null,null,null,null),new A.di(A.bt()).lX("Tutor",a0.x,h),A.v("Notas : "+a0.cy,null,null,null,null,null,null,null,null,null),A.v("Nombre Empresa : "+a0.go,null,null,null,null,null,null,null,null,null)],p)
if(s!==1){o=A.v("Tenemos "+s+" teniendo en cuenta la final",null,null,null,null,null,null,null,null,null)
n=A.v("Avances entregados "+r,null,null,null,null,null,null,null,null,null)
m=A.v("---Zona de pagos---",null,null,null,null,null,null,null,null,null)
l=A.v("Pagos clientes "+A.k(g)+" - cobrado "+f,null,null,null,null,null,null,null,null,null)
k=e===100
if(k)j=q===100?"\u2705 Todo pagado y entregado.":"\u2705 Todo pagado, falta completar la entrega."
else if(q>=e-5&&q<=e+5)j="\ud83d\udcb0 Hay que cobrar."
else j=q<e?"\ud83d\udee0\ufe0f Trabajando, a\xfan falta entregar avances.":"\u26a0\ufe0f Verificar pagos y avances."
i=A.b([A.v("% Avance Precio: "+C.d.bw(e,2)+"%",null,null,null,null,null,null,null,null,null),A.v("% Avances Realizados: "+C.d.bw(q,2)+"%",null,null,null,null,null,null,null,null,null),A.v(j,null,null,null,null,null,A.a3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,C.t,null,null,!0,null,null,null,null,null,null,null,null),null,null,null)],p)
if(k&&q===100)i.push(u.aKF(a0))
h.push(A.a0(A.b([o,n,new A.am(null,30,null,null),m,l,A.a0(i,C.f,null,C.i,C.h,C.l)],p),C.f,null,C.i,C.h,C.l))}else h.push(A.a0(A.b([A.v("Debe registrar avances en esta tesis para poder verla aca",null,null,null,null,null,null,null,null,null),u.aKF(a0)],p),C.f,null,C.i,C.h,C.l))
v=A.Z(null,A.jP(null,null,C.bO,A.a0(h,C.f,null,C.i,C.h,C.l),null,C.ch),C.j,t,null,null,null,null,null,null,null,null,null,null)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$a6U,w)},
aKF(d){return A.a0(A.b([A.bW(this.d.a,!1,new B.b5t(this,d),!0,15,C.E,"Todo bien",-1)],y.u),C.f,null,C.i,C.h,C.l)},
c1V(d,e,f){if(f===1)return $.iO()
else if(d===100)return $.nm()
else if(e>=d-5&&e<=d+5)return $.cC9()
else if(e<d)return $.cJF()
else return $.iO()}}
var z=a.updateTypes([])
B.b5F.prototype={
$2(d,e){var x,w=null
if(e.a===C.aB)return C.e6
else{x=e.c
if(x!=null)return A.v("Error servicio: "+A.k(x),w,w,w,w,w,w,w,w,w)
else return A.lx(new B.b5D(),!1,!1,new B.b5E(),w)}},
$S:1528}
B.b5D.prototype={
$2(d,e){return A.a8(A.b([new B.WW(d/2,e,null)],y.u),C.f,C.i,C.h,null)},
$S:70}
B.b5E.prototype={
$2(d,e){var x=null
return A.v("La prueba tutores aun no esta programado para celular",x,x,x,x,x,x,x,x,x)},
$S:127}
B.b5A.prototype={
$3(d,e,f){var x,w,v=null,u=J.j7(e.b,new B.b5w()),t=A.y(u,!0,u.$ti.i("A.E"))
u=A.K(t).i("ah<1>")
x=A.y(new A.ah(t,new B.b5x(),u),!0,u.i("A.E"))
C.b.dZ(x,new B.b5y())
u=x.length
w=this.a
return A.a0(A.b([A.v("Tenemos "+u+" proyectos en curso",v,v,v,v,v,v,v,v,v),new A.am(v,w.a.d*0.8,A.ft(v,new B.b5z(w,x),u,v,v,v,v,v,v,!1,!1),v)],y.u),C.f,v,C.i,C.h,C.l)},
$C:"$3",
$R:3,
$S:293}
B.b5w.prototype={
$1(d){return(d.d==="TESIS"||C.b.eg(d.dx,new B.b5v()))&&d.e.bC(A.V(2024,1,1,0,0,0,0,0))},
$S:51}
B.b5v.prototype={
$1(d){return d.z==="AVANCE"},
$S:96}
B.b5x.prototype={
$1(d){return!d.fy},
$S:51}
B.b5y.prototype={
$2(d,e){return e.w.bN(0,d.w)},
$S:161}
B.b5z.prototype={
$2(d,e){return A.ZQ(new B.b5u(),this.a.a6U(this.b[e]),y.l)},
$S:1529}
B.b5u.prototype={
$2(d,e){var x,w=null
if(e.a===C.aB)return new A.xg(w)
else if(e.c!=null)return A.v("Error al cargar los pagos",w,w,w,w,w,w,w,w,w)
else{x=e.b
return x==null?new A.am(0,0,w,w):x}},
$S:1530}
B.b5B.prototype={
$1(d){return d.z==="AVANCE"},
$S:96}
B.b5C.prototype={
$1(d){return d.z==="AVANCE"&&d.y!==""},
$S:96}
B.b5t.prototype={
$0(){var x=this.a.c
x.toString
new A.rO().qj("ok",this.b,x)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.Bb,B.WW])
x(A.Q,[B.ak0,B.ak_])
x(A.oa,[B.b5F,B.b5D,B.b5E,B.b5y,B.b5z,B.b5u])
x(A.lh,[B.b5A,B.b5w,B.b5v,B.b5x,B.b5B,B.b5C])
w(B.b5t,A.o9)})()
A.tL(b.typeUniverse,JSON.parse('{"WW":{"N":[],"c":[]},"Bb":{"N":[],"c":[]},"ak0":{"Q":["Bb"]},"ak_":{"Q":["WW"]}}'))
var y={F:A.ao("fo"),b:A.ao("fq"),u:A.ao("z<c>"),k:A.ao("w<f6>"),y:A.ao("U<d,@>"),l:A.ao("c"),v:A.ao("~")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_2",e:"endPart",h:b})})($__dart_deferred_initializers__,"nIRxV7egu3d8S3f4zTwZDq6ajQw=");