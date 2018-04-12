// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__3394){
var map__3395 = p__3394;
var map__3395__$1 = ((((!((map__3395 == null)))?(((((map__3395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3395):map__3395);
var m = map__3395__$1;
var n = cljs.core.get.call(null,map__3395__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__3395__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__3397_3419 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3398_3420 = null;
var count__3399_3421 = (0);
var i__3400_3422 = (0);
while(true){
if((i__3400_3422 < count__3399_3421)){
var f_3423 = cljs.core._nth.call(null,chunk__3398_3420,i__3400_3422);
cljs.core.println.call(null,"  ",f_3423);


var G__3424 = seq__3397_3419;
var G__3425 = chunk__3398_3420;
var G__3426 = count__3399_3421;
var G__3427 = (i__3400_3422 + (1));
seq__3397_3419 = G__3424;
chunk__3398_3420 = G__3425;
count__3399_3421 = G__3426;
i__3400_3422 = G__3427;
continue;
} else {
var temp__4657__auto___3428 = cljs.core.seq.call(null,seq__3397_3419);
if(temp__4657__auto___3428){
var seq__3397_3429__$1 = temp__4657__auto___3428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3397_3429__$1)){
var c__4319__auto___3430 = cljs.core.chunk_first.call(null,seq__3397_3429__$1);
var G__3431 = cljs.core.chunk_rest.call(null,seq__3397_3429__$1);
var G__3432 = c__4319__auto___3430;
var G__3433 = cljs.core.count.call(null,c__4319__auto___3430);
var G__3434 = (0);
seq__3397_3419 = G__3431;
chunk__3398_3420 = G__3432;
count__3399_3421 = G__3433;
i__3400_3422 = G__3434;
continue;
} else {
var f_3435 = cljs.core.first.call(null,seq__3397_3429__$1);
cljs.core.println.call(null,"  ",f_3435);


var G__3436 = cljs.core.next.call(null,seq__3397_3429__$1);
var G__3437 = null;
var G__3438 = (0);
var G__3439 = (0);
seq__3397_3419 = G__3436;
chunk__3398_3420 = G__3437;
count__3399_3421 = G__3438;
i__3400_3422 = G__3439;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_3440 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_3440);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_3440)))?cljs.core.second.call(null,arglists_3440):arglists_3440));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__3401_3441 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3402_3442 = null;
var count__3403_3443 = (0);
var i__3404_3444 = (0);
while(true){
if((i__3404_3444 < count__3403_3443)){
var vec__3405_3445 = cljs.core._nth.call(null,chunk__3402_3442,i__3404_3444);
var name_3446 = cljs.core.nth.call(null,vec__3405_3445,(0),null);
var map__3408_3447 = cljs.core.nth.call(null,vec__3405_3445,(1),null);
var map__3408_3448__$1 = ((((!((map__3408_3447 == null)))?(((((map__3408_3447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3408_3447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3408_3447):map__3408_3447);
var doc_3449 = cljs.core.get.call(null,map__3408_3448__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3450 = cljs.core.get.call(null,map__3408_3448__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3446);

cljs.core.println.call(null," ",arglists_3450);

if(cljs.core.truth_(doc_3449)){
cljs.core.println.call(null," ",doc_3449);
} else {
}


var G__3451 = seq__3401_3441;
var G__3452 = chunk__3402_3442;
var G__3453 = count__3403_3443;
var G__3454 = (i__3404_3444 + (1));
seq__3401_3441 = G__3451;
chunk__3402_3442 = G__3452;
count__3403_3443 = G__3453;
i__3404_3444 = G__3454;
continue;
} else {
var temp__4657__auto___3455 = cljs.core.seq.call(null,seq__3401_3441);
if(temp__4657__auto___3455){
var seq__3401_3456__$1 = temp__4657__auto___3455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3401_3456__$1)){
var c__4319__auto___3457 = cljs.core.chunk_first.call(null,seq__3401_3456__$1);
var G__3458 = cljs.core.chunk_rest.call(null,seq__3401_3456__$1);
var G__3459 = c__4319__auto___3457;
var G__3460 = cljs.core.count.call(null,c__4319__auto___3457);
var G__3461 = (0);
seq__3401_3441 = G__3458;
chunk__3402_3442 = G__3459;
count__3403_3443 = G__3460;
i__3404_3444 = G__3461;
continue;
} else {
var vec__3410_3462 = cljs.core.first.call(null,seq__3401_3456__$1);
var name_3463 = cljs.core.nth.call(null,vec__3410_3462,(0),null);
var map__3413_3464 = cljs.core.nth.call(null,vec__3410_3462,(1),null);
var map__3413_3465__$1 = ((((!((map__3413_3464 == null)))?(((((map__3413_3464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3413_3464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3413_3464):map__3413_3464);
var doc_3466 = cljs.core.get.call(null,map__3413_3465__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3467 = cljs.core.get.call(null,map__3413_3465__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3463);

cljs.core.println.call(null," ",arglists_3467);

if(cljs.core.truth_(doc_3466)){
cljs.core.println.call(null," ",doc_3466);
} else {
}


var G__3468 = cljs.core.next.call(null,seq__3401_3456__$1);
var G__3469 = null;
var G__3470 = (0);
var G__3471 = (0);
seq__3401_3441 = G__3468;
chunk__3402_3442 = G__3469;
count__3403_3443 = G__3470;
i__3404_3444 = G__3471;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__3415 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__3416 = null;
var count__3417 = (0);
var i__3418 = (0);
while(true){
if((i__3418 < count__3417)){
var role = cljs.core._nth.call(null,chunk__3416,i__3418);
var temp__4657__auto___3472__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___3472__$1)){
var spec_3473 = temp__4657__auto___3472__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_3473));
} else {
}


var G__3474 = seq__3415;
var G__3475 = chunk__3416;
var G__3476 = count__3417;
var G__3477 = (i__3418 + (1));
seq__3415 = G__3474;
chunk__3416 = G__3475;
count__3417 = G__3476;
i__3418 = G__3477;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__3415);
if(temp__4657__auto____$1){
var seq__3415__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3415__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3415__$1);
var G__3478 = cljs.core.chunk_rest.call(null,seq__3415__$1);
var G__3479 = c__4319__auto__;
var G__3480 = cljs.core.count.call(null,c__4319__auto__);
var G__3481 = (0);
seq__3415 = G__3478;
chunk__3416 = G__3479;
count__3417 = G__3480;
i__3418 = G__3481;
continue;
} else {
var role = cljs.core.first.call(null,seq__3415__$1);
var temp__4657__auto___3482__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___3482__$2)){
var spec_3483 = temp__4657__auto___3482__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_3483));
} else {
}


var G__3484 = cljs.core.next.call(null,seq__3415__$1);
var G__3485 = null;
var G__3486 = (0);
var G__3487 = (0);
seq__3415 = G__3484;
chunk__3416 = G__3485;
count__3417 = G__3486;
i__3418 = G__3487;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
