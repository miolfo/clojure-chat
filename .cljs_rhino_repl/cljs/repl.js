// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__3391){
var map__3392 = p__3391;
var map__3392__$1 = ((((!((map__3392 == null)))?(((((map__3392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3392):map__3392);
var m = map__3392__$1;
var n = cljs.core.get.call(null,map__3392__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__3392__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__3394_3416 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3395_3417 = null;
var count__3396_3418 = (0);
var i__3397_3419 = (0);
while(true){
if((i__3397_3419 < count__3396_3418)){
var f_3420 = cljs.core._nth.call(null,chunk__3395_3417,i__3397_3419);
cljs.core.println.call(null,"  ",f_3420);


var G__3421 = seq__3394_3416;
var G__3422 = chunk__3395_3417;
var G__3423 = count__3396_3418;
var G__3424 = (i__3397_3419 + (1));
seq__3394_3416 = G__3421;
chunk__3395_3417 = G__3422;
count__3396_3418 = G__3423;
i__3397_3419 = G__3424;
continue;
} else {
var temp__4657__auto___3425 = cljs.core.seq.call(null,seq__3394_3416);
if(temp__4657__auto___3425){
var seq__3394_3426__$1 = temp__4657__auto___3425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3394_3426__$1)){
var c__4319__auto___3427 = cljs.core.chunk_first.call(null,seq__3394_3426__$1);
var G__3428 = cljs.core.chunk_rest.call(null,seq__3394_3426__$1);
var G__3429 = c__4319__auto___3427;
var G__3430 = cljs.core.count.call(null,c__4319__auto___3427);
var G__3431 = (0);
seq__3394_3416 = G__3428;
chunk__3395_3417 = G__3429;
count__3396_3418 = G__3430;
i__3397_3419 = G__3431;
continue;
} else {
var f_3432 = cljs.core.first.call(null,seq__3394_3426__$1);
cljs.core.println.call(null,"  ",f_3432);


var G__3433 = cljs.core.next.call(null,seq__3394_3426__$1);
var G__3434 = null;
var G__3435 = (0);
var G__3436 = (0);
seq__3394_3416 = G__3433;
chunk__3395_3417 = G__3434;
count__3396_3418 = G__3435;
i__3397_3419 = G__3436;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_3437 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_3437);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_3437)))?cljs.core.second.call(null,arglists_3437):arglists_3437));
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
var seq__3398_3438 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3399_3439 = null;
var count__3400_3440 = (0);
var i__3401_3441 = (0);
while(true){
if((i__3401_3441 < count__3400_3440)){
var vec__3402_3442 = cljs.core._nth.call(null,chunk__3399_3439,i__3401_3441);
var name_3443 = cljs.core.nth.call(null,vec__3402_3442,(0),null);
var map__3405_3444 = cljs.core.nth.call(null,vec__3402_3442,(1),null);
var map__3405_3445__$1 = ((((!((map__3405_3444 == null)))?(((((map__3405_3444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3405_3444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3405_3444):map__3405_3444);
var doc_3446 = cljs.core.get.call(null,map__3405_3445__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3447 = cljs.core.get.call(null,map__3405_3445__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3443);

cljs.core.println.call(null," ",arglists_3447);

if(cljs.core.truth_(doc_3446)){
cljs.core.println.call(null," ",doc_3446);
} else {
}


var G__3448 = seq__3398_3438;
var G__3449 = chunk__3399_3439;
var G__3450 = count__3400_3440;
var G__3451 = (i__3401_3441 + (1));
seq__3398_3438 = G__3448;
chunk__3399_3439 = G__3449;
count__3400_3440 = G__3450;
i__3401_3441 = G__3451;
continue;
} else {
var temp__4657__auto___3452 = cljs.core.seq.call(null,seq__3398_3438);
if(temp__4657__auto___3452){
var seq__3398_3453__$1 = temp__4657__auto___3452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3398_3453__$1)){
var c__4319__auto___3454 = cljs.core.chunk_first.call(null,seq__3398_3453__$1);
var G__3455 = cljs.core.chunk_rest.call(null,seq__3398_3453__$1);
var G__3456 = c__4319__auto___3454;
var G__3457 = cljs.core.count.call(null,c__4319__auto___3454);
var G__3458 = (0);
seq__3398_3438 = G__3455;
chunk__3399_3439 = G__3456;
count__3400_3440 = G__3457;
i__3401_3441 = G__3458;
continue;
} else {
var vec__3407_3459 = cljs.core.first.call(null,seq__3398_3453__$1);
var name_3460 = cljs.core.nth.call(null,vec__3407_3459,(0),null);
var map__3410_3461 = cljs.core.nth.call(null,vec__3407_3459,(1),null);
var map__3410_3462__$1 = ((((!((map__3410_3461 == null)))?(((((map__3410_3461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3410_3461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3410_3461):map__3410_3461);
var doc_3463 = cljs.core.get.call(null,map__3410_3462__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3464 = cljs.core.get.call(null,map__3410_3462__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3460);

cljs.core.println.call(null," ",arglists_3464);

if(cljs.core.truth_(doc_3463)){
cljs.core.println.call(null," ",doc_3463);
} else {
}


var G__3465 = cljs.core.next.call(null,seq__3398_3453__$1);
var G__3466 = null;
var G__3467 = (0);
var G__3468 = (0);
seq__3398_3438 = G__3465;
chunk__3399_3439 = G__3466;
count__3400_3440 = G__3467;
i__3401_3441 = G__3468;
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

var seq__3412 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__3413 = null;
var count__3414 = (0);
var i__3415 = (0);
while(true){
if((i__3415 < count__3414)){
var role = cljs.core._nth.call(null,chunk__3413,i__3415);
var temp__4657__auto___3469__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___3469__$1)){
var spec_3470 = temp__4657__auto___3469__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_3470));
} else {
}


var G__3471 = seq__3412;
var G__3472 = chunk__3413;
var G__3473 = count__3414;
var G__3474 = (i__3415 + (1));
seq__3412 = G__3471;
chunk__3413 = G__3472;
count__3414 = G__3473;
i__3415 = G__3474;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__3412);
if(temp__4657__auto____$1){
var seq__3412__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3412__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3412__$1);
var G__3475 = cljs.core.chunk_rest.call(null,seq__3412__$1);
var G__3476 = c__4319__auto__;
var G__3477 = cljs.core.count.call(null,c__4319__auto__);
var G__3478 = (0);
seq__3412 = G__3475;
chunk__3413 = G__3476;
count__3414 = G__3477;
i__3415 = G__3478;
continue;
} else {
var role = cljs.core.first.call(null,seq__3412__$1);
var temp__4657__auto___3479__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___3479__$2)){
var spec_3480 = temp__4657__auto___3479__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_3480));
} else {
}


var G__3481 = cljs.core.next.call(null,seq__3412__$1);
var G__3482 = null;
var G__3483 = (0);
var G__3484 = (0);
seq__3412 = G__3481;
chunk__3413 = G__3482;
count__3414 = G__3483;
i__3415 = G__3484;
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
