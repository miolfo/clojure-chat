// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14169 = arguments.length;
switch (G__14169) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async14170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14170 = (function (f,blockable,meta14171){
this.f = f;
this.blockable = blockable;
this.meta14171 = meta14171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14172,meta14171__$1){
var self__ = this;
var _14172__$1 = this;
return (new cljs.core.async.t_cljs$core$async14170(self__.f,self__.blockable,meta14171__$1));
});

cljs.core.async.t_cljs$core$async14170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14172){
var self__ = this;
var _14172__$1 = this;
return self__.meta14171;
});

cljs.core.async.t_cljs$core$async14170.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14170.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14171","meta14171",767100140,null)], null);
});

cljs.core.async.t_cljs$core$async14170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14170";

cljs.core.async.t_cljs$core$async14170.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async14170");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14170.
 */
cljs.core.async.__GT_t_cljs$core$async14170 = (function cljs$core$async$__GT_t_cljs$core$async14170(f__$1,blockable__$1,meta14171){
return (new cljs.core.async.t_cljs$core$async14170(f__$1,blockable__$1,meta14171));
});

}

return (new cljs.core.async.t_cljs$core$async14170(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14176 = arguments.length;
switch (G__14176) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14179 = arguments.length;
switch (G__14179) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14182 = arguments.length;
switch (G__14182) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_14184 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14184);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14184,ret){
return (function (){
return fn1.call(null,val_14184);
});})(val_14184,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14186 = arguments.length;
switch (G__14186) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___14188 = n;
var x_14189 = (0);
while(true){
if((x_14189 < n__4376__auto___14188)){
(a[x_14189] = (0));

var G__14190 = (x_14189 + (1));
x_14189 = G__14190;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__14191 = (i + (1));
i = G__14191;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async14192 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14192 = (function (flag,meta14193){
this.flag = flag;
this.meta14193 = meta14193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14194,meta14193__$1){
var self__ = this;
var _14194__$1 = this;
return (new cljs.core.async.t_cljs$core$async14192(self__.flag,meta14193__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14192.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14194){
var self__ = this;
var _14194__$1 = this;
return self__.meta14193;
});})(flag))
;

cljs.core.async.t_cljs$core$async14192.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14192.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async14192.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14192.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14192.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14193","meta14193",982724774,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14192.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14192";

cljs.core.async.t_cljs$core$async14192.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async14192");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14192.
 */
cljs.core.async.__GT_t_cljs$core$async14192 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14192(flag__$1,meta14193){
return (new cljs.core.async.t_cljs$core$async14192(flag__$1,meta14193));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14192(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14195 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14195 = (function (flag,cb,meta14196){
this.flag = flag;
this.cb = cb;
this.meta14196 = meta14196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14197,meta14196__$1){
var self__ = this;
var _14197__$1 = this;
return (new cljs.core.async.t_cljs$core$async14195(self__.flag,self__.cb,meta14196__$1));
});

cljs.core.async.t_cljs$core$async14195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14197){
var self__ = this;
var _14197__$1 = this;
return self__.meta14196;
});

cljs.core.async.t_cljs$core$async14195.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async14195.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14196","meta14196",-1300711372,null)], null);
});

cljs.core.async.t_cljs$core$async14195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14195";

cljs.core.async.t_cljs$core$async14195.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async14195");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14195.
 */
cljs.core.async.__GT_t_cljs$core$async14195 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14195(flag__$1,cb__$1,meta14196){
return (new cljs.core.async.t_cljs$core$async14195(flag__$1,cb__$1,meta14196));
});

}

return (new cljs.core.async.t_cljs$core$async14195(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14198_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14198_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14199_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14199_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14200 = (i + (1));
i = G__14200;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14206 = arguments.length;
var i__4500__auto___14207 = (0);
while(true){
if((i__4500__auto___14207 < len__4499__auto___14206)){
args__4502__auto__.push((arguments[i__4500__auto___14207]));

var G__14208 = (i__4500__auto___14207 + (1));
i__4500__auto___14207 = G__14208;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14203){
var map__14204 = p__14203;
var map__14204__$1 = ((((!((map__14204 == null)))?(((((map__14204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14204):map__14204);
var opts = map__14204__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14201){
var G__14202 = cljs.core.first.call(null,seq14201);
var seq14201__$1 = cljs.core.next.call(null,seq14201);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14202,seq14201__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14210 = arguments.length;
switch (G__14210) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11897__auto___14256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto___14256){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto___14256){
return (function (state_14234){
var state_val_14235 = (state_14234[(1)]);
if((state_val_14235 === (7))){
var inst_14230 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14236_14257 = state_14234__$1;
(statearr_14236_14257[(2)] = inst_14230);

(statearr_14236_14257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (1))){
var state_14234__$1 = state_14234;
var statearr_14237_14258 = state_14234__$1;
(statearr_14237_14258[(2)] = null);

(statearr_14237_14258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (4))){
var inst_14213 = (state_14234[(7)]);
var inst_14213__$1 = (state_14234[(2)]);
var inst_14214 = (inst_14213__$1 == null);
var state_14234__$1 = (function (){var statearr_14238 = state_14234;
(statearr_14238[(7)] = inst_14213__$1);

return statearr_14238;
})();
if(cljs.core.truth_(inst_14214)){
var statearr_14239_14259 = state_14234__$1;
(statearr_14239_14259[(1)] = (5));

} else {
var statearr_14240_14260 = state_14234__$1;
(statearr_14240_14260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (13))){
var state_14234__$1 = state_14234;
var statearr_14241_14261 = state_14234__$1;
(statearr_14241_14261[(2)] = null);

(statearr_14241_14261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (6))){
var inst_14213 = (state_14234[(7)]);
var state_14234__$1 = state_14234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14234__$1,(11),to,inst_14213);
} else {
if((state_val_14235 === (3))){
var inst_14232 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14234__$1,inst_14232);
} else {
if((state_val_14235 === (12))){
var state_14234__$1 = state_14234;
var statearr_14242_14262 = state_14234__$1;
(statearr_14242_14262[(2)] = null);

(statearr_14242_14262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (2))){
var state_14234__$1 = state_14234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14234__$1,(4),from);
} else {
if((state_val_14235 === (11))){
var inst_14223 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
if(cljs.core.truth_(inst_14223)){
var statearr_14243_14263 = state_14234__$1;
(statearr_14243_14263[(1)] = (12));

} else {
var statearr_14244_14264 = state_14234__$1;
(statearr_14244_14264[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (9))){
var state_14234__$1 = state_14234;
var statearr_14245_14265 = state_14234__$1;
(statearr_14245_14265[(2)] = null);

(statearr_14245_14265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (5))){
var state_14234__$1 = state_14234;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14246_14266 = state_14234__$1;
(statearr_14246_14266[(1)] = (8));

} else {
var statearr_14247_14267 = state_14234__$1;
(statearr_14247_14267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (14))){
var inst_14228 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14248_14268 = state_14234__$1;
(statearr_14248_14268[(2)] = inst_14228);

(statearr_14248_14268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (10))){
var inst_14220 = (state_14234[(2)]);
var state_14234__$1 = state_14234;
var statearr_14249_14269 = state_14234__$1;
(statearr_14249_14269[(2)] = inst_14220);

(statearr_14249_14269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14235 === (8))){
var inst_14217 = cljs.core.async.close_BANG_.call(null,to);
var state_14234__$1 = state_14234;
var statearr_14250_14270 = state_14234__$1;
(statearr_14250_14270[(2)] = inst_14217);

(statearr_14250_14270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11897__auto___14256))
;
return ((function (switch__11882__auto__,c__11897__auto___14256){
return (function() {
var cljs$core$async$state_machine__11883__auto__ = null;
var cljs$core$async$state_machine__11883__auto____0 = (function (){
var statearr_14251 = [null,null,null,null,null,null,null,null];
(statearr_14251[(0)] = cljs$core$async$state_machine__11883__auto__);

(statearr_14251[(1)] = (1));

return statearr_14251;
});
var cljs$core$async$state_machine__11883__auto____1 = (function (state_14234){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_14234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e14252){if((e14252 instanceof Object)){
var ex__11886__auto__ = e14252;
var statearr_14253_14271 = state_14234;
(statearr_14253_14271[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14272 = state_14234;
state_14234 = G__14272;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$state_machine__11883__auto__ = function(state_14234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11883__auto____1.call(this,state_14234);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11883__auto____0;
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11883__auto____1;
return cljs$core$async$state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto___14256))
})();
var state__11899__auto__ = (function (){var statearr_14254 = f__11898__auto__.call(null);
(statearr_14254[(6)] = c__11897__auto___14256);

return statearr_14254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto___14256))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__14273){
var vec__14274 = p__14273;
var v = cljs.core.nth.call(null,vec__14274,(0),null);
var p = cljs.core.nth.call(null,vec__14274,(1),null);
var job = vec__14274;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11897__auto___14445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto___14445,res,vec__14274,v,p,job,jobs,results){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto___14445,res,vec__14274,v,p,job,jobs,results){
return (function (state_14281){
var state_val_14282 = (state_14281[(1)]);
if((state_val_14282 === (1))){
var state_14281__$1 = state_14281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14281__$1,(2),res,v);
} else {
if((state_val_14282 === (2))){
var inst_14278 = (state_14281[(2)]);
var inst_14279 = cljs.core.async.close_BANG_.call(null,res);
var state_14281__$1 = (function (){var statearr_14283 = state_14281;
(statearr_14283[(7)] = inst_14278);

return statearr_14283;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14281__$1,inst_14279);
} else {
return null;
}
}
});})(c__11897__auto___14445,res,vec__14274,v,p,job,jobs,results))
;
return ((function (switch__11882__auto__,c__11897__auto___14445,res,vec__14274,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____0 = (function (){
var statearr_14284 = [null,null,null,null,null,null,null,null];
(statearr_14284[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__);

(statearr_14284[(1)] = (1));

return statearr_14284;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____1 = (function (state_14281){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_14281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e14285){if((e14285 instanceof Object)){
var ex__11886__auto__ = e14285;
var statearr_14286_14446 = state_14281;
(statearr_14286_14446[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14447 = state_14281;
state_14281 = G__14447;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__ = function(state_14281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____1.call(this,state_14281);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto___14445,res,vec__14274,v,p,job,jobs,results))
})();
var state__11899__auto__ = (function (){var statearr_14287 = f__11898__auto__.call(null);
(statearr_14287[(6)] = c__11897__auto___14445);

return statearr_14287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto___14445,res,vec__14274,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14288){
var vec__14289 = p__14288;
var v = cljs.core.nth.call(null,vec__14289,(0),null);
var p = cljs.core.nth.call(null,vec__14289,(1),null);
var job = vec__14289;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___14448 = n;
var __14449 = (0);
while(true){
if((__14449 < n__4376__auto___14448)){
var G__14292_14450 = type;
var G__14292_14451__$1 = (((G__14292_14450 instanceof cljs.core.Keyword))?G__14292_14450.fqn:null);
switch (G__14292_14451__$1) {
case "compute":
var c__11897__auto___14453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14449,c__11897__auto___14453,G__14292_14450,G__14292_14451__$1,n__4376__auto___14448,jobs,results,process,async){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (__14449,c__11897__auto___14453,G__14292_14450,G__14292_14451__$1,n__4376__auto___14448,jobs,results,process,async){
return (function (state_14305){
var state_val_14306 = (state_14305[(1)]);
if((state_val_14306 === (1))){
var state_14305__$1 = state_14305;
var statearr_14307_14454 = state_14305__$1;
(statearr_14307_14454[(2)] = null);

(statearr_14307_14454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (2))){
var state_14305__$1 = state_14305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14305__$1,(4),jobs);
} else {
if((state_val_14306 === (3))){
var inst_14303 = (state_14305[(2)]);
var state_14305__$1 = state_14305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14305__$1,inst_14303);
} else {
if((state_val_14306 === (4))){
var inst_14295 = (state_14305[(2)]);
var inst_14296 = process.call(null,inst_14295);
var state_14305__$1 = state_14305;
if(cljs.core.truth_(inst_14296)){
var statearr_14308_14455 = state_14305__$1;
(statearr_14308_14455[(1)] = (5));

} else {
var statearr_14309_14456 = state_14305__$1;
(statearr_14309_14456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (5))){
var state_14305__$1 = state_14305;
var statearr_14310_14457 = state_14305__$1;
(statearr_14310_14457[(2)] = null);

(statearr_14310_14457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (6))){
var state_14305__$1 = state_14305;
var statearr_14311_14458 = state_14305__$1;
(statearr_14311_14458[(2)] = null);

(statearr_14311_14458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (7))){
var inst_14301 = (state_14305[(2)]);
var state_14305__$1 = state_14305;
var statearr_14312_14459 = state_14305__$1;
(statearr_14312_14459[(2)] = inst_14301);

(statearr_14312_14459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14449,c__11897__auto___14453,G__14292_14450,G__14292_14451__$1,n__4376__auto___14448,jobs,results,process,async))
;
return ((function (__14449,switch__11882__auto__,c__11897__auto___14453,G__14292_14450,G__14292_14451__$1,n__4376__auto___14448,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____0 = (function (){
var statearr_14313 = [null,null,null,null,null,null,null];
(statearr_14313[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__);

(statearr_14313[(1)] = (1));

return statearr_14313;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____1 = (function (state_14305){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_14305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e14314){if((e14314 instanceof Object)){
var ex__11886__auto__ = e14314;
var statearr_14315_14460 = state_14305;
(statearr_14315_14460[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14461 = state_14305;
state_14305 = G__14461;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__ = function(state_14305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____1.call(this,state_14305);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__;
})()
;})(__14449,switch__11882__auto__,c__11897__auto___14453,G__14292_14450,G__14292_14451__$1,n__4376__auto___14448,jobs,results,process,async))
})();
var state__11899__auto__ = (function (){var statearr_14316 = f__11898__auto__.call(null);
(statearr_14316[(6)] = c__11897__auto___14453);

return statearr_14316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(__14449,c__11897__auto___14453,G__14292_14450,G__14292_14451__$1,n__4376__auto___14448,jobs,results,process,async))
);


break;
case "async":
var c__11897__auto___14462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14449,c__11897__auto___14462,G__14292_14450,G__14292_14451__$1,n__4376__auto___14448,jobs,results,process,async){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (__14449,c__11897__auto___14462,G__14292_14450,G__14292_14451__$1,n__4376__auto___14448,jobs,results,process,async){
return (function (state_14329){
var state_val_14330 = (state_14329[(1)]);
if((state_val_14330 === (1))){
var state_14329__$1 = state_14329;
var statearr_14331_14463 = state_14329__$1;
(statearr_14331_14463[(2)] = null);

(statearr_14331_14463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14330 === (2))){
var state_14329__$1 = state_14329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14329__$1,(4),jobs);
} else {
if((state_val_14330 === (3))){
var inst_14327 = (state_14329[(2)]);
var state_14329__$1 = state_14329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14329__$1,inst_14327);
} else {
if((state_val_14330 === (4))){
var inst_14319 = (state_14329[(2)]);
var inst_14320 = async.call(null,inst_14319);
var state_14329__$1 = state_14329;
if(cljs.core.truth_(inst_14320)){
var statearr_14332_14464 = state_14329__$1;
(statearr_14332_14464[(1)] = (5));

} else {
var statearr_14333_14465 = state_14329__$1;
(statearr_14333_14465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14330 === (5))){
var state_14329__$1 = state_14329;
var statearr_14334_14466 = state_14329__$1;
(statearr_14334_14466[(2)] = null);

(statearr_14334_14466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14330 === (6))){
var state_14329__$1 = state_14329;
var statearr_14335_14467 = state_14329__$1;
(statearr_14335_14467[(2)] = null);

(statearr_14335_14467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14330 === (7))){
var inst_14325 = (state_14329[(2)]);
var state_14329__$1 = state_14329;
var statearr_14336_14468 = state_14329__$1;
(statearr_14336_14468[(2)] = inst_14325);

(statearr_14336_14468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14449,c__11897__auto___14462,G__14292_14450,G__14292_14451__$1,n__4376__auto___14448,jobs,results,process,async))
;
return ((function (__14449,switch__11882__auto__,c__11897__auto___14462,G__14292_14450,G__14292_14451__$1,n__4376__auto___14448,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____0 = (function (){
var statearr_14337 = [null,null,null,null,null,null,null];
(statearr_14337[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__);

(statearr_14337[(1)] = (1));

return statearr_14337;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____1 = (function (state_14329){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_14329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e14338){if((e14338 instanceof Object)){
var ex__11886__auto__ = e14338;
var statearr_14339_14469 = state_14329;
(statearr_14339_14469[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14470 = state_14329;
state_14329 = G__14470;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__ = function(state_14329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____1.call(this,state_14329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__;
})()
;})(__14449,switch__11882__auto__,c__11897__auto___14462,G__14292_14450,G__14292_14451__$1,n__4376__auto___14448,jobs,results,process,async))
})();
var state__11899__auto__ = (function (){var statearr_14340 = f__11898__auto__.call(null);
(statearr_14340[(6)] = c__11897__auto___14462);

return statearr_14340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(__14449,c__11897__auto___14462,G__14292_14450,G__14292_14451__$1,n__4376__auto___14448,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14292_14451__$1)].join('')));

}

var G__14471 = (__14449 + (1));
__14449 = G__14471;
continue;
} else {
}
break;
}

var c__11897__auto___14472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto___14472,jobs,results,process,async){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto___14472,jobs,results,process,async){
return (function (state_14362){
var state_val_14363 = (state_14362[(1)]);
if((state_val_14363 === (1))){
var state_14362__$1 = state_14362;
var statearr_14364_14473 = state_14362__$1;
(statearr_14364_14473[(2)] = null);

(statearr_14364_14473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (2))){
var state_14362__$1 = state_14362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14362__$1,(4),from);
} else {
if((state_val_14363 === (3))){
var inst_14360 = (state_14362[(2)]);
var state_14362__$1 = state_14362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14362__$1,inst_14360);
} else {
if((state_val_14363 === (4))){
var inst_14343 = (state_14362[(7)]);
var inst_14343__$1 = (state_14362[(2)]);
var inst_14344 = (inst_14343__$1 == null);
var state_14362__$1 = (function (){var statearr_14365 = state_14362;
(statearr_14365[(7)] = inst_14343__$1);

return statearr_14365;
})();
if(cljs.core.truth_(inst_14344)){
var statearr_14366_14474 = state_14362__$1;
(statearr_14366_14474[(1)] = (5));

} else {
var statearr_14367_14475 = state_14362__$1;
(statearr_14367_14475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (5))){
var inst_14346 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14362__$1 = state_14362;
var statearr_14368_14476 = state_14362__$1;
(statearr_14368_14476[(2)] = inst_14346);

(statearr_14368_14476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (6))){
var inst_14343 = (state_14362[(7)]);
var inst_14348 = (state_14362[(8)]);
var inst_14348__$1 = cljs.core.async.chan.call(null,(1));
var inst_14349 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14350 = [inst_14343,inst_14348__$1];
var inst_14351 = (new cljs.core.PersistentVector(null,2,(5),inst_14349,inst_14350,null));
var state_14362__$1 = (function (){var statearr_14369 = state_14362;
(statearr_14369[(8)] = inst_14348__$1);

return statearr_14369;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14362__$1,(8),jobs,inst_14351);
} else {
if((state_val_14363 === (7))){
var inst_14358 = (state_14362[(2)]);
var state_14362__$1 = state_14362;
var statearr_14370_14477 = state_14362__$1;
(statearr_14370_14477[(2)] = inst_14358);

(statearr_14370_14477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (8))){
var inst_14348 = (state_14362[(8)]);
var inst_14353 = (state_14362[(2)]);
var state_14362__$1 = (function (){var statearr_14371 = state_14362;
(statearr_14371[(9)] = inst_14353);

return statearr_14371;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14362__$1,(9),results,inst_14348);
} else {
if((state_val_14363 === (9))){
var inst_14355 = (state_14362[(2)]);
var state_14362__$1 = (function (){var statearr_14372 = state_14362;
(statearr_14372[(10)] = inst_14355);

return statearr_14372;
})();
var statearr_14373_14478 = state_14362__$1;
(statearr_14373_14478[(2)] = null);

(statearr_14373_14478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__11897__auto___14472,jobs,results,process,async))
;
return ((function (switch__11882__auto__,c__11897__auto___14472,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____0 = (function (){
var statearr_14374 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14374[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__);

(statearr_14374[(1)] = (1));

return statearr_14374;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____1 = (function (state_14362){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_14362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e14375){if((e14375 instanceof Object)){
var ex__11886__auto__ = e14375;
var statearr_14376_14479 = state_14362;
(statearr_14376_14479[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14480 = state_14362;
state_14362 = G__14480;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__ = function(state_14362){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____1.call(this,state_14362);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto___14472,jobs,results,process,async))
})();
var state__11899__auto__ = (function (){var statearr_14377 = f__11898__auto__.call(null);
(statearr_14377[(6)] = c__11897__auto___14472);

return statearr_14377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto___14472,jobs,results,process,async))
);


var c__11897__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto__,jobs,results,process,async){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto__,jobs,results,process,async){
return (function (state_14415){
var state_val_14416 = (state_14415[(1)]);
if((state_val_14416 === (7))){
var inst_14411 = (state_14415[(2)]);
var state_14415__$1 = state_14415;
var statearr_14417_14481 = state_14415__$1;
(statearr_14417_14481[(2)] = inst_14411);

(statearr_14417_14481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14416 === (20))){
var state_14415__$1 = state_14415;
var statearr_14418_14482 = state_14415__$1;
(statearr_14418_14482[(2)] = null);

(statearr_14418_14482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14416 === (1))){
var state_14415__$1 = state_14415;
var statearr_14419_14483 = state_14415__$1;
(statearr_14419_14483[(2)] = null);

(statearr_14419_14483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14416 === (4))){
var inst_14380 = (state_14415[(7)]);
var inst_14380__$1 = (state_14415[(2)]);
var inst_14381 = (inst_14380__$1 == null);
var state_14415__$1 = (function (){var statearr_14420 = state_14415;
(statearr_14420[(7)] = inst_14380__$1);

return statearr_14420;
})();
if(cljs.core.truth_(inst_14381)){
var statearr_14421_14484 = state_14415__$1;
(statearr_14421_14484[(1)] = (5));

} else {
var statearr_14422_14485 = state_14415__$1;
(statearr_14422_14485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14416 === (15))){
var inst_14393 = (state_14415[(8)]);
var state_14415__$1 = state_14415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14415__$1,(18),to,inst_14393);
} else {
if((state_val_14416 === (21))){
var inst_14406 = (state_14415[(2)]);
var state_14415__$1 = state_14415;
var statearr_14423_14486 = state_14415__$1;
(statearr_14423_14486[(2)] = inst_14406);

(statearr_14423_14486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14416 === (13))){
var inst_14408 = (state_14415[(2)]);
var state_14415__$1 = (function (){var statearr_14424 = state_14415;
(statearr_14424[(9)] = inst_14408);

return statearr_14424;
})();
var statearr_14425_14487 = state_14415__$1;
(statearr_14425_14487[(2)] = null);

(statearr_14425_14487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14416 === (6))){
var inst_14380 = (state_14415[(7)]);
var state_14415__$1 = state_14415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14415__$1,(11),inst_14380);
} else {
if((state_val_14416 === (17))){
var inst_14401 = (state_14415[(2)]);
var state_14415__$1 = state_14415;
if(cljs.core.truth_(inst_14401)){
var statearr_14426_14488 = state_14415__$1;
(statearr_14426_14488[(1)] = (19));

} else {
var statearr_14427_14489 = state_14415__$1;
(statearr_14427_14489[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14416 === (3))){
var inst_14413 = (state_14415[(2)]);
var state_14415__$1 = state_14415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14415__$1,inst_14413);
} else {
if((state_val_14416 === (12))){
var inst_14390 = (state_14415[(10)]);
var state_14415__$1 = state_14415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14415__$1,(14),inst_14390);
} else {
if((state_val_14416 === (2))){
var state_14415__$1 = state_14415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14415__$1,(4),results);
} else {
if((state_val_14416 === (19))){
var state_14415__$1 = state_14415;
var statearr_14428_14490 = state_14415__$1;
(statearr_14428_14490[(2)] = null);

(statearr_14428_14490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14416 === (11))){
var inst_14390 = (state_14415[(2)]);
var state_14415__$1 = (function (){var statearr_14429 = state_14415;
(statearr_14429[(10)] = inst_14390);

return statearr_14429;
})();
var statearr_14430_14491 = state_14415__$1;
(statearr_14430_14491[(2)] = null);

(statearr_14430_14491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14416 === (9))){
var state_14415__$1 = state_14415;
var statearr_14431_14492 = state_14415__$1;
(statearr_14431_14492[(2)] = null);

(statearr_14431_14492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14416 === (5))){
var state_14415__$1 = state_14415;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14432_14493 = state_14415__$1;
(statearr_14432_14493[(1)] = (8));

} else {
var statearr_14433_14494 = state_14415__$1;
(statearr_14433_14494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14416 === (14))){
var inst_14393 = (state_14415[(8)]);
var inst_14395 = (state_14415[(11)]);
var inst_14393__$1 = (state_14415[(2)]);
var inst_14394 = (inst_14393__$1 == null);
var inst_14395__$1 = cljs.core.not.call(null,inst_14394);
var state_14415__$1 = (function (){var statearr_14434 = state_14415;
(statearr_14434[(8)] = inst_14393__$1);

(statearr_14434[(11)] = inst_14395__$1);

return statearr_14434;
})();
if(inst_14395__$1){
var statearr_14435_14495 = state_14415__$1;
(statearr_14435_14495[(1)] = (15));

} else {
var statearr_14436_14496 = state_14415__$1;
(statearr_14436_14496[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14416 === (16))){
var inst_14395 = (state_14415[(11)]);
var state_14415__$1 = state_14415;
var statearr_14437_14497 = state_14415__$1;
(statearr_14437_14497[(2)] = inst_14395);

(statearr_14437_14497[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14416 === (10))){
var inst_14387 = (state_14415[(2)]);
var state_14415__$1 = state_14415;
var statearr_14438_14498 = state_14415__$1;
(statearr_14438_14498[(2)] = inst_14387);

(statearr_14438_14498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14416 === (18))){
var inst_14398 = (state_14415[(2)]);
var state_14415__$1 = state_14415;
var statearr_14439_14499 = state_14415__$1;
(statearr_14439_14499[(2)] = inst_14398);

(statearr_14439_14499[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14416 === (8))){
var inst_14384 = cljs.core.async.close_BANG_.call(null,to);
var state_14415__$1 = state_14415;
var statearr_14440_14500 = state_14415__$1;
(statearr_14440_14500[(2)] = inst_14384);

(statearr_14440_14500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11897__auto__,jobs,results,process,async))
;
return ((function (switch__11882__auto__,c__11897__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____0 = (function (){
var statearr_14441 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14441[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__);

(statearr_14441[(1)] = (1));

return statearr_14441;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____1 = (function (state_14415){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_14415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e14442){if((e14442 instanceof Object)){
var ex__11886__auto__ = e14442;
var statearr_14443_14501 = state_14415;
(statearr_14443_14501[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14502 = state_14415;
state_14415 = G__14502;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__ = function(state_14415){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____1.call(this,state_14415);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto__,jobs,results,process,async))
})();
var state__11899__auto__ = (function (){var statearr_14444 = f__11898__auto__.call(null);
(statearr_14444[(6)] = c__11897__auto__);

return statearr_14444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto__,jobs,results,process,async))
);

return c__11897__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14504 = arguments.length;
switch (G__14504) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14507 = arguments.length;
switch (G__14507) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14510 = arguments.length;
switch (G__14510) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11897__auto___14559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto___14559,tc,fc){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto___14559,tc,fc){
return (function (state_14536){
var state_val_14537 = (state_14536[(1)]);
if((state_val_14537 === (7))){
var inst_14532 = (state_14536[(2)]);
var state_14536__$1 = state_14536;
var statearr_14538_14560 = state_14536__$1;
(statearr_14538_14560[(2)] = inst_14532);

(statearr_14538_14560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (1))){
var state_14536__$1 = state_14536;
var statearr_14539_14561 = state_14536__$1;
(statearr_14539_14561[(2)] = null);

(statearr_14539_14561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (4))){
var inst_14513 = (state_14536[(7)]);
var inst_14513__$1 = (state_14536[(2)]);
var inst_14514 = (inst_14513__$1 == null);
var state_14536__$1 = (function (){var statearr_14540 = state_14536;
(statearr_14540[(7)] = inst_14513__$1);

return statearr_14540;
})();
if(cljs.core.truth_(inst_14514)){
var statearr_14541_14562 = state_14536__$1;
(statearr_14541_14562[(1)] = (5));

} else {
var statearr_14542_14563 = state_14536__$1;
(statearr_14542_14563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (13))){
var state_14536__$1 = state_14536;
var statearr_14543_14564 = state_14536__$1;
(statearr_14543_14564[(2)] = null);

(statearr_14543_14564[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (6))){
var inst_14513 = (state_14536[(7)]);
var inst_14519 = p.call(null,inst_14513);
var state_14536__$1 = state_14536;
if(cljs.core.truth_(inst_14519)){
var statearr_14544_14565 = state_14536__$1;
(statearr_14544_14565[(1)] = (9));

} else {
var statearr_14545_14566 = state_14536__$1;
(statearr_14545_14566[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (3))){
var inst_14534 = (state_14536[(2)]);
var state_14536__$1 = state_14536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14536__$1,inst_14534);
} else {
if((state_val_14537 === (12))){
var state_14536__$1 = state_14536;
var statearr_14546_14567 = state_14536__$1;
(statearr_14546_14567[(2)] = null);

(statearr_14546_14567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (2))){
var state_14536__$1 = state_14536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14536__$1,(4),ch);
} else {
if((state_val_14537 === (11))){
var inst_14513 = (state_14536[(7)]);
var inst_14523 = (state_14536[(2)]);
var state_14536__$1 = state_14536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14536__$1,(8),inst_14523,inst_14513);
} else {
if((state_val_14537 === (9))){
var state_14536__$1 = state_14536;
var statearr_14547_14568 = state_14536__$1;
(statearr_14547_14568[(2)] = tc);

(statearr_14547_14568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (5))){
var inst_14516 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14517 = cljs.core.async.close_BANG_.call(null,fc);
var state_14536__$1 = (function (){var statearr_14548 = state_14536;
(statearr_14548[(8)] = inst_14516);

return statearr_14548;
})();
var statearr_14549_14569 = state_14536__$1;
(statearr_14549_14569[(2)] = inst_14517);

(statearr_14549_14569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (14))){
var inst_14530 = (state_14536[(2)]);
var state_14536__$1 = state_14536;
var statearr_14550_14570 = state_14536__$1;
(statearr_14550_14570[(2)] = inst_14530);

(statearr_14550_14570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (10))){
var state_14536__$1 = state_14536;
var statearr_14551_14571 = state_14536__$1;
(statearr_14551_14571[(2)] = fc);

(statearr_14551_14571[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14537 === (8))){
var inst_14525 = (state_14536[(2)]);
var state_14536__$1 = state_14536;
if(cljs.core.truth_(inst_14525)){
var statearr_14552_14572 = state_14536__$1;
(statearr_14552_14572[(1)] = (12));

} else {
var statearr_14553_14573 = state_14536__$1;
(statearr_14553_14573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11897__auto___14559,tc,fc))
;
return ((function (switch__11882__auto__,c__11897__auto___14559,tc,fc){
return (function() {
var cljs$core$async$state_machine__11883__auto__ = null;
var cljs$core$async$state_machine__11883__auto____0 = (function (){
var statearr_14554 = [null,null,null,null,null,null,null,null,null];
(statearr_14554[(0)] = cljs$core$async$state_machine__11883__auto__);

(statearr_14554[(1)] = (1));

return statearr_14554;
});
var cljs$core$async$state_machine__11883__auto____1 = (function (state_14536){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_14536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e14555){if((e14555 instanceof Object)){
var ex__11886__auto__ = e14555;
var statearr_14556_14574 = state_14536;
(statearr_14556_14574[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14575 = state_14536;
state_14536 = G__14575;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$state_machine__11883__auto__ = function(state_14536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11883__auto____1.call(this,state_14536);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11883__auto____0;
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11883__auto____1;
return cljs$core$async$state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto___14559,tc,fc))
})();
var state__11899__auto__ = (function (){var statearr_14557 = f__11898__auto__.call(null);
(statearr_14557[(6)] = c__11897__auto___14559);

return statearr_14557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto___14559,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11897__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto__){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto__){
return (function (state_14596){
var state_val_14597 = (state_14596[(1)]);
if((state_val_14597 === (7))){
var inst_14592 = (state_14596[(2)]);
var state_14596__$1 = state_14596;
var statearr_14598_14616 = state_14596__$1;
(statearr_14598_14616[(2)] = inst_14592);

(statearr_14598_14616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14597 === (1))){
var inst_14576 = init;
var state_14596__$1 = (function (){var statearr_14599 = state_14596;
(statearr_14599[(7)] = inst_14576);

return statearr_14599;
})();
var statearr_14600_14617 = state_14596__$1;
(statearr_14600_14617[(2)] = null);

(statearr_14600_14617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14597 === (4))){
var inst_14579 = (state_14596[(8)]);
var inst_14579__$1 = (state_14596[(2)]);
var inst_14580 = (inst_14579__$1 == null);
var state_14596__$1 = (function (){var statearr_14601 = state_14596;
(statearr_14601[(8)] = inst_14579__$1);

return statearr_14601;
})();
if(cljs.core.truth_(inst_14580)){
var statearr_14602_14618 = state_14596__$1;
(statearr_14602_14618[(1)] = (5));

} else {
var statearr_14603_14619 = state_14596__$1;
(statearr_14603_14619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14597 === (6))){
var inst_14583 = (state_14596[(9)]);
var inst_14579 = (state_14596[(8)]);
var inst_14576 = (state_14596[(7)]);
var inst_14583__$1 = f.call(null,inst_14576,inst_14579);
var inst_14584 = cljs.core.reduced_QMARK_.call(null,inst_14583__$1);
var state_14596__$1 = (function (){var statearr_14604 = state_14596;
(statearr_14604[(9)] = inst_14583__$1);

return statearr_14604;
})();
if(inst_14584){
var statearr_14605_14620 = state_14596__$1;
(statearr_14605_14620[(1)] = (8));

} else {
var statearr_14606_14621 = state_14596__$1;
(statearr_14606_14621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14597 === (3))){
var inst_14594 = (state_14596[(2)]);
var state_14596__$1 = state_14596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14596__$1,inst_14594);
} else {
if((state_val_14597 === (2))){
var state_14596__$1 = state_14596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14596__$1,(4),ch);
} else {
if((state_val_14597 === (9))){
var inst_14583 = (state_14596[(9)]);
var inst_14576 = inst_14583;
var state_14596__$1 = (function (){var statearr_14607 = state_14596;
(statearr_14607[(7)] = inst_14576);

return statearr_14607;
})();
var statearr_14608_14622 = state_14596__$1;
(statearr_14608_14622[(2)] = null);

(statearr_14608_14622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14597 === (5))){
var inst_14576 = (state_14596[(7)]);
var state_14596__$1 = state_14596;
var statearr_14609_14623 = state_14596__$1;
(statearr_14609_14623[(2)] = inst_14576);

(statearr_14609_14623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14597 === (10))){
var inst_14590 = (state_14596[(2)]);
var state_14596__$1 = state_14596;
var statearr_14610_14624 = state_14596__$1;
(statearr_14610_14624[(2)] = inst_14590);

(statearr_14610_14624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14597 === (8))){
var inst_14583 = (state_14596[(9)]);
var inst_14586 = cljs.core.deref.call(null,inst_14583);
var state_14596__$1 = state_14596;
var statearr_14611_14625 = state_14596__$1;
(statearr_14611_14625[(2)] = inst_14586);

(statearr_14611_14625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__11897__auto__))
;
return ((function (switch__11882__auto__,c__11897__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11883__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11883__auto____0 = (function (){
var statearr_14612 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14612[(0)] = cljs$core$async$reduce_$_state_machine__11883__auto__);

(statearr_14612[(1)] = (1));

return statearr_14612;
});
var cljs$core$async$reduce_$_state_machine__11883__auto____1 = (function (state_14596){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_14596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e14613){if((e14613 instanceof Object)){
var ex__11886__auto__ = e14613;
var statearr_14614_14626 = state_14596;
(statearr_14614_14626[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14627 = state_14596;
state_14596 = G__14627;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11883__auto__ = function(state_14596){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11883__auto____1.call(this,state_14596);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11883__auto____0;
cljs$core$async$reduce_$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11883__auto____1;
return cljs$core$async$reduce_$_state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto__))
})();
var state__11899__auto__ = (function (){var statearr_14615 = f__11898__auto__.call(null);
(statearr_14615[(6)] = c__11897__auto__);

return statearr_14615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto__))
);

return c__11897__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__11897__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto__,f__$1){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto__,f__$1){
return (function (state_14633){
var state_val_14634 = (state_14633[(1)]);
if((state_val_14634 === (1))){
var inst_14628 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14633__$1,(2),inst_14628);
} else {
if((state_val_14634 === (2))){
var inst_14630 = (state_14633[(2)]);
var inst_14631 = f__$1.call(null,inst_14630);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14633__$1,inst_14631);
} else {
return null;
}
}
});})(c__11897__auto__,f__$1))
;
return ((function (switch__11882__auto__,c__11897__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__11883__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11883__auto____0 = (function (){
var statearr_14635 = [null,null,null,null,null,null,null];
(statearr_14635[(0)] = cljs$core$async$transduce_$_state_machine__11883__auto__);

(statearr_14635[(1)] = (1));

return statearr_14635;
});
var cljs$core$async$transduce_$_state_machine__11883__auto____1 = (function (state_14633){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_14633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e14636){if((e14636 instanceof Object)){
var ex__11886__auto__ = e14636;
var statearr_14637_14639 = state_14633;
(statearr_14637_14639[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14640 = state_14633;
state_14633 = G__14640;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11883__auto__ = function(state_14633){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11883__auto____1.call(this,state_14633);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11883__auto____0;
cljs$core$async$transduce_$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11883__auto____1;
return cljs$core$async$transduce_$_state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto__,f__$1))
})();
var state__11899__auto__ = (function (){var statearr_14638 = f__11898__auto__.call(null);
(statearr_14638[(6)] = c__11897__auto__);

return statearr_14638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto__,f__$1))
);

return c__11897__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14642 = arguments.length;
switch (G__14642) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11897__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto__){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto__){
return (function (state_14667){
var state_val_14668 = (state_14667[(1)]);
if((state_val_14668 === (7))){
var inst_14649 = (state_14667[(2)]);
var state_14667__$1 = state_14667;
var statearr_14669_14690 = state_14667__$1;
(statearr_14669_14690[(2)] = inst_14649);

(statearr_14669_14690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (1))){
var inst_14643 = cljs.core.seq.call(null,coll);
var inst_14644 = inst_14643;
var state_14667__$1 = (function (){var statearr_14670 = state_14667;
(statearr_14670[(7)] = inst_14644);

return statearr_14670;
})();
var statearr_14671_14691 = state_14667__$1;
(statearr_14671_14691[(2)] = null);

(statearr_14671_14691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (4))){
var inst_14644 = (state_14667[(7)]);
var inst_14647 = cljs.core.first.call(null,inst_14644);
var state_14667__$1 = state_14667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14667__$1,(7),ch,inst_14647);
} else {
if((state_val_14668 === (13))){
var inst_14661 = (state_14667[(2)]);
var state_14667__$1 = state_14667;
var statearr_14672_14692 = state_14667__$1;
(statearr_14672_14692[(2)] = inst_14661);

(statearr_14672_14692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (6))){
var inst_14652 = (state_14667[(2)]);
var state_14667__$1 = state_14667;
if(cljs.core.truth_(inst_14652)){
var statearr_14673_14693 = state_14667__$1;
(statearr_14673_14693[(1)] = (8));

} else {
var statearr_14674_14694 = state_14667__$1;
(statearr_14674_14694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (3))){
var inst_14665 = (state_14667[(2)]);
var state_14667__$1 = state_14667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14667__$1,inst_14665);
} else {
if((state_val_14668 === (12))){
var state_14667__$1 = state_14667;
var statearr_14675_14695 = state_14667__$1;
(statearr_14675_14695[(2)] = null);

(statearr_14675_14695[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (2))){
var inst_14644 = (state_14667[(7)]);
var state_14667__$1 = state_14667;
if(cljs.core.truth_(inst_14644)){
var statearr_14676_14696 = state_14667__$1;
(statearr_14676_14696[(1)] = (4));

} else {
var statearr_14677_14697 = state_14667__$1;
(statearr_14677_14697[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (11))){
var inst_14658 = cljs.core.async.close_BANG_.call(null,ch);
var state_14667__$1 = state_14667;
var statearr_14678_14698 = state_14667__$1;
(statearr_14678_14698[(2)] = inst_14658);

(statearr_14678_14698[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (9))){
var state_14667__$1 = state_14667;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14679_14699 = state_14667__$1;
(statearr_14679_14699[(1)] = (11));

} else {
var statearr_14680_14700 = state_14667__$1;
(statearr_14680_14700[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (5))){
var inst_14644 = (state_14667[(7)]);
var state_14667__$1 = state_14667;
var statearr_14681_14701 = state_14667__$1;
(statearr_14681_14701[(2)] = inst_14644);

(statearr_14681_14701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (10))){
var inst_14663 = (state_14667[(2)]);
var state_14667__$1 = state_14667;
var statearr_14682_14702 = state_14667__$1;
(statearr_14682_14702[(2)] = inst_14663);

(statearr_14682_14702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (8))){
var inst_14644 = (state_14667[(7)]);
var inst_14654 = cljs.core.next.call(null,inst_14644);
var inst_14644__$1 = inst_14654;
var state_14667__$1 = (function (){var statearr_14683 = state_14667;
(statearr_14683[(7)] = inst_14644__$1);

return statearr_14683;
})();
var statearr_14684_14703 = state_14667__$1;
(statearr_14684_14703[(2)] = null);

(statearr_14684_14703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11897__auto__))
;
return ((function (switch__11882__auto__,c__11897__auto__){
return (function() {
var cljs$core$async$state_machine__11883__auto__ = null;
var cljs$core$async$state_machine__11883__auto____0 = (function (){
var statearr_14685 = [null,null,null,null,null,null,null,null];
(statearr_14685[(0)] = cljs$core$async$state_machine__11883__auto__);

(statearr_14685[(1)] = (1));

return statearr_14685;
});
var cljs$core$async$state_machine__11883__auto____1 = (function (state_14667){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_14667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e14686){if((e14686 instanceof Object)){
var ex__11886__auto__ = e14686;
var statearr_14687_14704 = state_14667;
(statearr_14687_14704[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14705 = state_14667;
state_14667 = G__14705;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$state_machine__11883__auto__ = function(state_14667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11883__auto____1.call(this,state_14667);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11883__auto____0;
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11883__auto____1;
return cljs$core$async$state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto__))
})();
var state__11899__auto__ = (function (){var statearr_14688 = f__11898__auto__.call(null);
(statearr_14688[(6)] = c__11897__auto__);

return statearr_14688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto__))
);

return c__11897__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14706 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14706 = (function (ch,cs,meta14707){
this.ch = ch;
this.cs = cs;
this.meta14707 = meta14707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14708,meta14707__$1){
var self__ = this;
var _14708__$1 = this;
return (new cljs.core.async.t_cljs$core$async14706(self__.ch,self__.cs,meta14707__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14708){
var self__ = this;
var _14708__$1 = this;
return self__.meta14707;
});})(cs))
;

cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14706.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14706.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14707","meta14707",592325733,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14706.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14706";

cljs.core.async.t_cljs$core$async14706.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async14706");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14706.
 */
cljs.core.async.__GT_t_cljs$core$async14706 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14706(ch__$1,cs__$1,meta14707){
return (new cljs.core.async.t_cljs$core$async14706(ch__$1,cs__$1,meta14707));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14706(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11897__auto___14928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto___14928,cs,m,dchan,dctr,done){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto___14928,cs,m,dchan,dctr,done){
return (function (state_14843){
var state_val_14844 = (state_14843[(1)]);
if((state_val_14844 === (7))){
var inst_14839 = (state_14843[(2)]);
var state_14843__$1 = state_14843;
var statearr_14845_14929 = state_14843__$1;
(statearr_14845_14929[(2)] = inst_14839);

(statearr_14845_14929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (20))){
var inst_14742 = (state_14843[(7)]);
var inst_14754 = cljs.core.first.call(null,inst_14742);
var inst_14755 = cljs.core.nth.call(null,inst_14754,(0),null);
var inst_14756 = cljs.core.nth.call(null,inst_14754,(1),null);
var state_14843__$1 = (function (){var statearr_14846 = state_14843;
(statearr_14846[(8)] = inst_14755);

return statearr_14846;
})();
if(cljs.core.truth_(inst_14756)){
var statearr_14847_14930 = state_14843__$1;
(statearr_14847_14930[(1)] = (22));

} else {
var statearr_14848_14931 = state_14843__$1;
(statearr_14848_14931[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (27))){
var inst_14786 = (state_14843[(9)]);
var inst_14791 = (state_14843[(10)]);
var inst_14711 = (state_14843[(11)]);
var inst_14784 = (state_14843[(12)]);
var inst_14791__$1 = cljs.core._nth.call(null,inst_14784,inst_14786);
var inst_14792 = cljs.core.async.put_BANG_.call(null,inst_14791__$1,inst_14711,done);
var state_14843__$1 = (function (){var statearr_14849 = state_14843;
(statearr_14849[(10)] = inst_14791__$1);

return statearr_14849;
})();
if(cljs.core.truth_(inst_14792)){
var statearr_14850_14932 = state_14843__$1;
(statearr_14850_14932[(1)] = (30));

} else {
var statearr_14851_14933 = state_14843__$1;
(statearr_14851_14933[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (1))){
var state_14843__$1 = state_14843;
var statearr_14852_14934 = state_14843__$1;
(statearr_14852_14934[(2)] = null);

(statearr_14852_14934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (24))){
var inst_14742 = (state_14843[(7)]);
var inst_14761 = (state_14843[(2)]);
var inst_14762 = cljs.core.next.call(null,inst_14742);
var inst_14720 = inst_14762;
var inst_14721 = null;
var inst_14722 = (0);
var inst_14723 = (0);
var state_14843__$1 = (function (){var statearr_14853 = state_14843;
(statearr_14853[(13)] = inst_14761);

(statearr_14853[(14)] = inst_14722);

(statearr_14853[(15)] = inst_14720);

(statearr_14853[(16)] = inst_14723);

(statearr_14853[(17)] = inst_14721);

return statearr_14853;
})();
var statearr_14854_14935 = state_14843__$1;
(statearr_14854_14935[(2)] = null);

(statearr_14854_14935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (39))){
var state_14843__$1 = state_14843;
var statearr_14858_14936 = state_14843__$1;
(statearr_14858_14936[(2)] = null);

(statearr_14858_14936[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (4))){
var inst_14711 = (state_14843[(11)]);
var inst_14711__$1 = (state_14843[(2)]);
var inst_14712 = (inst_14711__$1 == null);
var state_14843__$1 = (function (){var statearr_14859 = state_14843;
(statearr_14859[(11)] = inst_14711__$1);

return statearr_14859;
})();
if(cljs.core.truth_(inst_14712)){
var statearr_14860_14937 = state_14843__$1;
(statearr_14860_14937[(1)] = (5));

} else {
var statearr_14861_14938 = state_14843__$1;
(statearr_14861_14938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (15))){
var inst_14722 = (state_14843[(14)]);
var inst_14720 = (state_14843[(15)]);
var inst_14723 = (state_14843[(16)]);
var inst_14721 = (state_14843[(17)]);
var inst_14738 = (state_14843[(2)]);
var inst_14739 = (inst_14723 + (1));
var tmp14855 = inst_14722;
var tmp14856 = inst_14720;
var tmp14857 = inst_14721;
var inst_14720__$1 = tmp14856;
var inst_14721__$1 = tmp14857;
var inst_14722__$1 = tmp14855;
var inst_14723__$1 = inst_14739;
var state_14843__$1 = (function (){var statearr_14862 = state_14843;
(statearr_14862[(14)] = inst_14722__$1);

(statearr_14862[(15)] = inst_14720__$1);

(statearr_14862[(16)] = inst_14723__$1);

(statearr_14862[(18)] = inst_14738);

(statearr_14862[(17)] = inst_14721__$1);

return statearr_14862;
})();
var statearr_14863_14939 = state_14843__$1;
(statearr_14863_14939[(2)] = null);

(statearr_14863_14939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (21))){
var inst_14765 = (state_14843[(2)]);
var state_14843__$1 = state_14843;
var statearr_14867_14940 = state_14843__$1;
(statearr_14867_14940[(2)] = inst_14765);

(statearr_14867_14940[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (31))){
var inst_14791 = (state_14843[(10)]);
var inst_14795 = done.call(null,null);
var inst_14796 = cljs.core.async.untap_STAR_.call(null,m,inst_14791);
var state_14843__$1 = (function (){var statearr_14868 = state_14843;
(statearr_14868[(19)] = inst_14795);

return statearr_14868;
})();
var statearr_14869_14941 = state_14843__$1;
(statearr_14869_14941[(2)] = inst_14796);

(statearr_14869_14941[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (32))){
var inst_14785 = (state_14843[(20)]);
var inst_14783 = (state_14843[(21)]);
var inst_14786 = (state_14843[(9)]);
var inst_14784 = (state_14843[(12)]);
var inst_14798 = (state_14843[(2)]);
var inst_14799 = (inst_14786 + (1));
var tmp14864 = inst_14785;
var tmp14865 = inst_14783;
var tmp14866 = inst_14784;
var inst_14783__$1 = tmp14865;
var inst_14784__$1 = tmp14866;
var inst_14785__$1 = tmp14864;
var inst_14786__$1 = inst_14799;
var state_14843__$1 = (function (){var statearr_14870 = state_14843;
(statearr_14870[(20)] = inst_14785__$1);

(statearr_14870[(21)] = inst_14783__$1);

(statearr_14870[(9)] = inst_14786__$1);

(statearr_14870[(22)] = inst_14798);

(statearr_14870[(12)] = inst_14784__$1);

return statearr_14870;
})();
var statearr_14871_14942 = state_14843__$1;
(statearr_14871_14942[(2)] = null);

(statearr_14871_14942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (40))){
var inst_14811 = (state_14843[(23)]);
var inst_14815 = done.call(null,null);
var inst_14816 = cljs.core.async.untap_STAR_.call(null,m,inst_14811);
var state_14843__$1 = (function (){var statearr_14872 = state_14843;
(statearr_14872[(24)] = inst_14815);

return statearr_14872;
})();
var statearr_14873_14943 = state_14843__$1;
(statearr_14873_14943[(2)] = inst_14816);

(statearr_14873_14943[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (33))){
var inst_14802 = (state_14843[(25)]);
var inst_14804 = cljs.core.chunked_seq_QMARK_.call(null,inst_14802);
var state_14843__$1 = state_14843;
if(inst_14804){
var statearr_14874_14944 = state_14843__$1;
(statearr_14874_14944[(1)] = (36));

} else {
var statearr_14875_14945 = state_14843__$1;
(statearr_14875_14945[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (13))){
var inst_14732 = (state_14843[(26)]);
var inst_14735 = cljs.core.async.close_BANG_.call(null,inst_14732);
var state_14843__$1 = state_14843;
var statearr_14876_14946 = state_14843__$1;
(statearr_14876_14946[(2)] = inst_14735);

(statearr_14876_14946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (22))){
var inst_14755 = (state_14843[(8)]);
var inst_14758 = cljs.core.async.close_BANG_.call(null,inst_14755);
var state_14843__$1 = state_14843;
var statearr_14877_14947 = state_14843__$1;
(statearr_14877_14947[(2)] = inst_14758);

(statearr_14877_14947[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (36))){
var inst_14802 = (state_14843[(25)]);
var inst_14806 = cljs.core.chunk_first.call(null,inst_14802);
var inst_14807 = cljs.core.chunk_rest.call(null,inst_14802);
var inst_14808 = cljs.core.count.call(null,inst_14806);
var inst_14783 = inst_14807;
var inst_14784 = inst_14806;
var inst_14785 = inst_14808;
var inst_14786 = (0);
var state_14843__$1 = (function (){var statearr_14878 = state_14843;
(statearr_14878[(20)] = inst_14785);

(statearr_14878[(21)] = inst_14783);

(statearr_14878[(9)] = inst_14786);

(statearr_14878[(12)] = inst_14784);

return statearr_14878;
})();
var statearr_14879_14948 = state_14843__$1;
(statearr_14879_14948[(2)] = null);

(statearr_14879_14948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (41))){
var inst_14802 = (state_14843[(25)]);
var inst_14818 = (state_14843[(2)]);
var inst_14819 = cljs.core.next.call(null,inst_14802);
var inst_14783 = inst_14819;
var inst_14784 = null;
var inst_14785 = (0);
var inst_14786 = (0);
var state_14843__$1 = (function (){var statearr_14880 = state_14843;
(statearr_14880[(20)] = inst_14785);

(statearr_14880[(21)] = inst_14783);

(statearr_14880[(9)] = inst_14786);

(statearr_14880[(27)] = inst_14818);

(statearr_14880[(12)] = inst_14784);

return statearr_14880;
})();
var statearr_14881_14949 = state_14843__$1;
(statearr_14881_14949[(2)] = null);

(statearr_14881_14949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (43))){
var state_14843__$1 = state_14843;
var statearr_14882_14950 = state_14843__$1;
(statearr_14882_14950[(2)] = null);

(statearr_14882_14950[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (29))){
var inst_14827 = (state_14843[(2)]);
var state_14843__$1 = state_14843;
var statearr_14883_14951 = state_14843__$1;
(statearr_14883_14951[(2)] = inst_14827);

(statearr_14883_14951[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (44))){
var inst_14836 = (state_14843[(2)]);
var state_14843__$1 = (function (){var statearr_14884 = state_14843;
(statearr_14884[(28)] = inst_14836);

return statearr_14884;
})();
var statearr_14885_14952 = state_14843__$1;
(statearr_14885_14952[(2)] = null);

(statearr_14885_14952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (6))){
var inst_14775 = (state_14843[(29)]);
var inst_14774 = cljs.core.deref.call(null,cs);
var inst_14775__$1 = cljs.core.keys.call(null,inst_14774);
var inst_14776 = cljs.core.count.call(null,inst_14775__$1);
var inst_14777 = cljs.core.reset_BANG_.call(null,dctr,inst_14776);
var inst_14782 = cljs.core.seq.call(null,inst_14775__$1);
var inst_14783 = inst_14782;
var inst_14784 = null;
var inst_14785 = (0);
var inst_14786 = (0);
var state_14843__$1 = (function (){var statearr_14886 = state_14843;
(statearr_14886[(20)] = inst_14785);

(statearr_14886[(21)] = inst_14783);

(statearr_14886[(9)] = inst_14786);

(statearr_14886[(30)] = inst_14777);

(statearr_14886[(29)] = inst_14775__$1);

(statearr_14886[(12)] = inst_14784);

return statearr_14886;
})();
var statearr_14887_14953 = state_14843__$1;
(statearr_14887_14953[(2)] = null);

(statearr_14887_14953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (28))){
var inst_14783 = (state_14843[(21)]);
var inst_14802 = (state_14843[(25)]);
var inst_14802__$1 = cljs.core.seq.call(null,inst_14783);
var state_14843__$1 = (function (){var statearr_14888 = state_14843;
(statearr_14888[(25)] = inst_14802__$1);

return statearr_14888;
})();
if(inst_14802__$1){
var statearr_14889_14954 = state_14843__$1;
(statearr_14889_14954[(1)] = (33));

} else {
var statearr_14890_14955 = state_14843__$1;
(statearr_14890_14955[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (25))){
var inst_14785 = (state_14843[(20)]);
var inst_14786 = (state_14843[(9)]);
var inst_14788 = (inst_14786 < inst_14785);
var inst_14789 = inst_14788;
var state_14843__$1 = state_14843;
if(cljs.core.truth_(inst_14789)){
var statearr_14891_14956 = state_14843__$1;
(statearr_14891_14956[(1)] = (27));

} else {
var statearr_14892_14957 = state_14843__$1;
(statearr_14892_14957[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (34))){
var state_14843__$1 = state_14843;
var statearr_14893_14958 = state_14843__$1;
(statearr_14893_14958[(2)] = null);

(statearr_14893_14958[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (17))){
var state_14843__$1 = state_14843;
var statearr_14894_14959 = state_14843__$1;
(statearr_14894_14959[(2)] = null);

(statearr_14894_14959[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (3))){
var inst_14841 = (state_14843[(2)]);
var state_14843__$1 = state_14843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14843__$1,inst_14841);
} else {
if((state_val_14844 === (12))){
var inst_14770 = (state_14843[(2)]);
var state_14843__$1 = state_14843;
var statearr_14895_14960 = state_14843__$1;
(statearr_14895_14960[(2)] = inst_14770);

(statearr_14895_14960[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (2))){
var state_14843__$1 = state_14843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14843__$1,(4),ch);
} else {
if((state_val_14844 === (23))){
var state_14843__$1 = state_14843;
var statearr_14896_14961 = state_14843__$1;
(statearr_14896_14961[(2)] = null);

(statearr_14896_14961[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (35))){
var inst_14825 = (state_14843[(2)]);
var state_14843__$1 = state_14843;
var statearr_14897_14962 = state_14843__$1;
(statearr_14897_14962[(2)] = inst_14825);

(statearr_14897_14962[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (19))){
var inst_14742 = (state_14843[(7)]);
var inst_14746 = cljs.core.chunk_first.call(null,inst_14742);
var inst_14747 = cljs.core.chunk_rest.call(null,inst_14742);
var inst_14748 = cljs.core.count.call(null,inst_14746);
var inst_14720 = inst_14747;
var inst_14721 = inst_14746;
var inst_14722 = inst_14748;
var inst_14723 = (0);
var state_14843__$1 = (function (){var statearr_14898 = state_14843;
(statearr_14898[(14)] = inst_14722);

(statearr_14898[(15)] = inst_14720);

(statearr_14898[(16)] = inst_14723);

(statearr_14898[(17)] = inst_14721);

return statearr_14898;
})();
var statearr_14899_14963 = state_14843__$1;
(statearr_14899_14963[(2)] = null);

(statearr_14899_14963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (11))){
var inst_14742 = (state_14843[(7)]);
var inst_14720 = (state_14843[(15)]);
var inst_14742__$1 = cljs.core.seq.call(null,inst_14720);
var state_14843__$1 = (function (){var statearr_14900 = state_14843;
(statearr_14900[(7)] = inst_14742__$1);

return statearr_14900;
})();
if(inst_14742__$1){
var statearr_14901_14964 = state_14843__$1;
(statearr_14901_14964[(1)] = (16));

} else {
var statearr_14902_14965 = state_14843__$1;
(statearr_14902_14965[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (9))){
var inst_14772 = (state_14843[(2)]);
var state_14843__$1 = state_14843;
var statearr_14903_14966 = state_14843__$1;
(statearr_14903_14966[(2)] = inst_14772);

(statearr_14903_14966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (5))){
var inst_14718 = cljs.core.deref.call(null,cs);
var inst_14719 = cljs.core.seq.call(null,inst_14718);
var inst_14720 = inst_14719;
var inst_14721 = null;
var inst_14722 = (0);
var inst_14723 = (0);
var state_14843__$1 = (function (){var statearr_14904 = state_14843;
(statearr_14904[(14)] = inst_14722);

(statearr_14904[(15)] = inst_14720);

(statearr_14904[(16)] = inst_14723);

(statearr_14904[(17)] = inst_14721);

return statearr_14904;
})();
var statearr_14905_14967 = state_14843__$1;
(statearr_14905_14967[(2)] = null);

(statearr_14905_14967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (14))){
var state_14843__$1 = state_14843;
var statearr_14906_14968 = state_14843__$1;
(statearr_14906_14968[(2)] = null);

(statearr_14906_14968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (45))){
var inst_14833 = (state_14843[(2)]);
var state_14843__$1 = state_14843;
var statearr_14907_14969 = state_14843__$1;
(statearr_14907_14969[(2)] = inst_14833);

(statearr_14907_14969[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (26))){
var inst_14775 = (state_14843[(29)]);
var inst_14829 = (state_14843[(2)]);
var inst_14830 = cljs.core.seq.call(null,inst_14775);
var state_14843__$1 = (function (){var statearr_14908 = state_14843;
(statearr_14908[(31)] = inst_14829);

return statearr_14908;
})();
if(inst_14830){
var statearr_14909_14970 = state_14843__$1;
(statearr_14909_14970[(1)] = (42));

} else {
var statearr_14910_14971 = state_14843__$1;
(statearr_14910_14971[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (16))){
var inst_14742 = (state_14843[(7)]);
var inst_14744 = cljs.core.chunked_seq_QMARK_.call(null,inst_14742);
var state_14843__$1 = state_14843;
if(inst_14744){
var statearr_14911_14972 = state_14843__$1;
(statearr_14911_14972[(1)] = (19));

} else {
var statearr_14912_14973 = state_14843__$1;
(statearr_14912_14973[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (38))){
var inst_14822 = (state_14843[(2)]);
var state_14843__$1 = state_14843;
var statearr_14913_14974 = state_14843__$1;
(statearr_14913_14974[(2)] = inst_14822);

(statearr_14913_14974[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (30))){
var state_14843__$1 = state_14843;
var statearr_14914_14975 = state_14843__$1;
(statearr_14914_14975[(2)] = null);

(statearr_14914_14975[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (10))){
var inst_14723 = (state_14843[(16)]);
var inst_14721 = (state_14843[(17)]);
var inst_14731 = cljs.core._nth.call(null,inst_14721,inst_14723);
var inst_14732 = cljs.core.nth.call(null,inst_14731,(0),null);
var inst_14733 = cljs.core.nth.call(null,inst_14731,(1),null);
var state_14843__$1 = (function (){var statearr_14915 = state_14843;
(statearr_14915[(26)] = inst_14732);

return statearr_14915;
})();
if(cljs.core.truth_(inst_14733)){
var statearr_14916_14976 = state_14843__$1;
(statearr_14916_14976[(1)] = (13));

} else {
var statearr_14917_14977 = state_14843__$1;
(statearr_14917_14977[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (18))){
var inst_14768 = (state_14843[(2)]);
var state_14843__$1 = state_14843;
var statearr_14918_14978 = state_14843__$1;
(statearr_14918_14978[(2)] = inst_14768);

(statearr_14918_14978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (42))){
var state_14843__$1 = state_14843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14843__$1,(45),dchan);
} else {
if((state_val_14844 === (37))){
var inst_14802 = (state_14843[(25)]);
var inst_14711 = (state_14843[(11)]);
var inst_14811 = (state_14843[(23)]);
var inst_14811__$1 = cljs.core.first.call(null,inst_14802);
var inst_14812 = cljs.core.async.put_BANG_.call(null,inst_14811__$1,inst_14711,done);
var state_14843__$1 = (function (){var statearr_14919 = state_14843;
(statearr_14919[(23)] = inst_14811__$1);

return statearr_14919;
})();
if(cljs.core.truth_(inst_14812)){
var statearr_14920_14979 = state_14843__$1;
(statearr_14920_14979[(1)] = (39));

} else {
var statearr_14921_14980 = state_14843__$1;
(statearr_14921_14980[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14844 === (8))){
var inst_14722 = (state_14843[(14)]);
var inst_14723 = (state_14843[(16)]);
var inst_14725 = (inst_14723 < inst_14722);
var inst_14726 = inst_14725;
var state_14843__$1 = state_14843;
if(cljs.core.truth_(inst_14726)){
var statearr_14922_14981 = state_14843__$1;
(statearr_14922_14981[(1)] = (10));

} else {
var statearr_14923_14982 = state_14843__$1;
(statearr_14923_14982[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11897__auto___14928,cs,m,dchan,dctr,done))
;
return ((function (switch__11882__auto__,c__11897__auto___14928,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11883__auto__ = null;
var cljs$core$async$mult_$_state_machine__11883__auto____0 = (function (){
var statearr_14924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14924[(0)] = cljs$core$async$mult_$_state_machine__11883__auto__);

(statearr_14924[(1)] = (1));

return statearr_14924;
});
var cljs$core$async$mult_$_state_machine__11883__auto____1 = (function (state_14843){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_14843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e14925){if((e14925 instanceof Object)){
var ex__11886__auto__ = e14925;
var statearr_14926_14983 = state_14843;
(statearr_14926_14983[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14984 = state_14843;
state_14843 = G__14984;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11883__auto__ = function(state_14843){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11883__auto____1.call(this,state_14843);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11883__auto____0;
cljs$core$async$mult_$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11883__auto____1;
return cljs$core$async$mult_$_state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto___14928,cs,m,dchan,dctr,done))
})();
var state__11899__auto__ = (function (){var statearr_14927 = f__11898__auto__.call(null);
(statearr_14927[(6)] = c__11897__auto___14928);

return statearr_14927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto___14928,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14986 = arguments.length;
switch (G__14986) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14998 = arguments.length;
var i__4500__auto___14999 = (0);
while(true){
if((i__4500__auto___14999 < len__4499__auto___14998)){
args__4502__auto__.push((arguments[i__4500__auto___14999]));

var G__15000 = (i__4500__auto___14999 + (1));
i__4500__auto___14999 = G__15000;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14992){
var map__14993 = p__14992;
var map__14993__$1 = ((((!((map__14993 == null)))?(((((map__14993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14993):map__14993);
var opts = map__14993__$1;
var statearr_14995_15001 = state;
(statearr_14995_15001[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__14993,map__14993__$1,opts){
return (function (val){
var statearr_14996_15002 = state;
(statearr_14996_15002[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14993,map__14993__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_14997_15003 = state;
(statearr_14997_15003[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14988){
var G__14989 = cljs.core.first.call(null,seq14988);
var seq14988__$1 = cljs.core.next.call(null,seq14988);
var G__14990 = cljs.core.first.call(null,seq14988__$1);
var seq14988__$2 = cljs.core.next.call(null,seq14988__$1);
var G__14991 = cljs.core.first.call(null,seq14988__$2);
var seq14988__$3 = cljs.core.next.call(null,seq14988__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14989,G__14990,G__14991,seq14988__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15004 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15004 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta15005){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta15005 = meta15005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15006,meta15005__$1){
var self__ = this;
var _15006__$1 = this;
return (new cljs.core.async.t_cljs$core$async15004(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta15005__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15006){
var self__ = this;
var _15006__$1 = this;
return self__.meta15005;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15004.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15004.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15004.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15004.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15004.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15004.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15004.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15004.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15004.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta15005","meta15005",1229891335,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15004.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15004";

cljs.core.async.t_cljs$core$async15004.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async15004");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15004.
 */
cljs.core.async.__GT_t_cljs$core$async15004 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15004(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15005){
return (new cljs.core.async.t_cljs$core$async15004(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15005));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15004(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11897__auto___15168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto___15168,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto___15168,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15108){
var state_val_15109 = (state_15108[(1)]);
if((state_val_15109 === (7))){
var inst_15023 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
var statearr_15110_15169 = state_15108__$1;
(statearr_15110_15169[(2)] = inst_15023);

(statearr_15110_15169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (20))){
var inst_15035 = (state_15108[(7)]);
var state_15108__$1 = state_15108;
var statearr_15111_15170 = state_15108__$1;
(statearr_15111_15170[(2)] = inst_15035);

(statearr_15111_15170[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (27))){
var state_15108__$1 = state_15108;
var statearr_15112_15171 = state_15108__$1;
(statearr_15112_15171[(2)] = null);

(statearr_15112_15171[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (1))){
var inst_15010 = (state_15108[(8)]);
var inst_15010__$1 = calc_state.call(null);
var inst_15012 = (inst_15010__$1 == null);
var inst_15013 = cljs.core.not.call(null,inst_15012);
var state_15108__$1 = (function (){var statearr_15113 = state_15108;
(statearr_15113[(8)] = inst_15010__$1);

return statearr_15113;
})();
if(inst_15013){
var statearr_15114_15172 = state_15108__$1;
(statearr_15114_15172[(1)] = (2));

} else {
var statearr_15115_15173 = state_15108__$1;
(statearr_15115_15173[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (24))){
var inst_15082 = (state_15108[(9)]);
var inst_15068 = (state_15108[(10)]);
var inst_15059 = (state_15108[(11)]);
var inst_15082__$1 = inst_15059.call(null,inst_15068);
var state_15108__$1 = (function (){var statearr_15116 = state_15108;
(statearr_15116[(9)] = inst_15082__$1);

return statearr_15116;
})();
if(cljs.core.truth_(inst_15082__$1)){
var statearr_15117_15174 = state_15108__$1;
(statearr_15117_15174[(1)] = (29));

} else {
var statearr_15118_15175 = state_15108__$1;
(statearr_15118_15175[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (4))){
var inst_15026 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
if(cljs.core.truth_(inst_15026)){
var statearr_15119_15176 = state_15108__$1;
(statearr_15119_15176[(1)] = (8));

} else {
var statearr_15120_15177 = state_15108__$1;
(statearr_15120_15177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (15))){
var inst_15053 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
if(cljs.core.truth_(inst_15053)){
var statearr_15121_15178 = state_15108__$1;
(statearr_15121_15178[(1)] = (19));

} else {
var statearr_15122_15179 = state_15108__$1;
(statearr_15122_15179[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (21))){
var inst_15058 = (state_15108[(12)]);
var inst_15058__$1 = (state_15108[(2)]);
var inst_15059 = cljs.core.get.call(null,inst_15058__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15060 = cljs.core.get.call(null,inst_15058__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15061 = cljs.core.get.call(null,inst_15058__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15108__$1 = (function (){var statearr_15123 = state_15108;
(statearr_15123[(13)] = inst_15060);

(statearr_15123[(11)] = inst_15059);

(statearr_15123[(12)] = inst_15058__$1);

return statearr_15123;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15108__$1,(22),inst_15061);
} else {
if((state_val_15109 === (31))){
var inst_15090 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
if(cljs.core.truth_(inst_15090)){
var statearr_15124_15180 = state_15108__$1;
(statearr_15124_15180[(1)] = (32));

} else {
var statearr_15125_15181 = state_15108__$1;
(statearr_15125_15181[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (32))){
var inst_15067 = (state_15108[(14)]);
var state_15108__$1 = state_15108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15108__$1,(35),out,inst_15067);
} else {
if((state_val_15109 === (33))){
var inst_15058 = (state_15108[(12)]);
var inst_15035 = inst_15058;
var state_15108__$1 = (function (){var statearr_15126 = state_15108;
(statearr_15126[(7)] = inst_15035);

return statearr_15126;
})();
var statearr_15127_15182 = state_15108__$1;
(statearr_15127_15182[(2)] = null);

(statearr_15127_15182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (13))){
var inst_15035 = (state_15108[(7)]);
var inst_15042 = inst_15035.cljs$lang$protocol_mask$partition0$;
var inst_15043 = (inst_15042 & (64));
var inst_15044 = inst_15035.cljs$core$ISeq$;
var inst_15045 = (cljs.core.PROTOCOL_SENTINEL === inst_15044);
var inst_15046 = ((inst_15043) || (inst_15045));
var state_15108__$1 = state_15108;
if(cljs.core.truth_(inst_15046)){
var statearr_15128_15183 = state_15108__$1;
(statearr_15128_15183[(1)] = (16));

} else {
var statearr_15129_15184 = state_15108__$1;
(statearr_15129_15184[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (22))){
var inst_15068 = (state_15108[(10)]);
var inst_15067 = (state_15108[(14)]);
var inst_15066 = (state_15108[(2)]);
var inst_15067__$1 = cljs.core.nth.call(null,inst_15066,(0),null);
var inst_15068__$1 = cljs.core.nth.call(null,inst_15066,(1),null);
var inst_15069 = (inst_15067__$1 == null);
var inst_15070 = cljs.core._EQ_.call(null,inst_15068__$1,change);
var inst_15071 = ((inst_15069) || (inst_15070));
var state_15108__$1 = (function (){var statearr_15130 = state_15108;
(statearr_15130[(10)] = inst_15068__$1);

(statearr_15130[(14)] = inst_15067__$1);

return statearr_15130;
})();
if(cljs.core.truth_(inst_15071)){
var statearr_15131_15185 = state_15108__$1;
(statearr_15131_15185[(1)] = (23));

} else {
var statearr_15132_15186 = state_15108__$1;
(statearr_15132_15186[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (36))){
var inst_15058 = (state_15108[(12)]);
var inst_15035 = inst_15058;
var state_15108__$1 = (function (){var statearr_15133 = state_15108;
(statearr_15133[(7)] = inst_15035);

return statearr_15133;
})();
var statearr_15134_15187 = state_15108__$1;
(statearr_15134_15187[(2)] = null);

(statearr_15134_15187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (29))){
var inst_15082 = (state_15108[(9)]);
var state_15108__$1 = state_15108;
var statearr_15135_15188 = state_15108__$1;
(statearr_15135_15188[(2)] = inst_15082);

(statearr_15135_15188[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (6))){
var state_15108__$1 = state_15108;
var statearr_15136_15189 = state_15108__$1;
(statearr_15136_15189[(2)] = false);

(statearr_15136_15189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (28))){
var inst_15078 = (state_15108[(2)]);
var inst_15079 = calc_state.call(null);
var inst_15035 = inst_15079;
var state_15108__$1 = (function (){var statearr_15137 = state_15108;
(statearr_15137[(15)] = inst_15078);

(statearr_15137[(7)] = inst_15035);

return statearr_15137;
})();
var statearr_15138_15190 = state_15108__$1;
(statearr_15138_15190[(2)] = null);

(statearr_15138_15190[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (25))){
var inst_15104 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
var statearr_15139_15191 = state_15108__$1;
(statearr_15139_15191[(2)] = inst_15104);

(statearr_15139_15191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (34))){
var inst_15102 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
var statearr_15140_15192 = state_15108__$1;
(statearr_15140_15192[(2)] = inst_15102);

(statearr_15140_15192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (17))){
var state_15108__$1 = state_15108;
var statearr_15141_15193 = state_15108__$1;
(statearr_15141_15193[(2)] = false);

(statearr_15141_15193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (3))){
var state_15108__$1 = state_15108;
var statearr_15142_15194 = state_15108__$1;
(statearr_15142_15194[(2)] = false);

(statearr_15142_15194[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (12))){
var inst_15106 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15108__$1,inst_15106);
} else {
if((state_val_15109 === (2))){
var inst_15010 = (state_15108[(8)]);
var inst_15015 = inst_15010.cljs$lang$protocol_mask$partition0$;
var inst_15016 = (inst_15015 & (64));
var inst_15017 = inst_15010.cljs$core$ISeq$;
var inst_15018 = (cljs.core.PROTOCOL_SENTINEL === inst_15017);
var inst_15019 = ((inst_15016) || (inst_15018));
var state_15108__$1 = state_15108;
if(cljs.core.truth_(inst_15019)){
var statearr_15143_15195 = state_15108__$1;
(statearr_15143_15195[(1)] = (5));

} else {
var statearr_15144_15196 = state_15108__$1;
(statearr_15144_15196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (23))){
var inst_15067 = (state_15108[(14)]);
var inst_15073 = (inst_15067 == null);
var state_15108__$1 = state_15108;
if(cljs.core.truth_(inst_15073)){
var statearr_15145_15197 = state_15108__$1;
(statearr_15145_15197[(1)] = (26));

} else {
var statearr_15146_15198 = state_15108__$1;
(statearr_15146_15198[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (35))){
var inst_15093 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
if(cljs.core.truth_(inst_15093)){
var statearr_15147_15199 = state_15108__$1;
(statearr_15147_15199[(1)] = (36));

} else {
var statearr_15148_15200 = state_15108__$1;
(statearr_15148_15200[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (19))){
var inst_15035 = (state_15108[(7)]);
var inst_15055 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15035);
var state_15108__$1 = state_15108;
var statearr_15149_15201 = state_15108__$1;
(statearr_15149_15201[(2)] = inst_15055);

(statearr_15149_15201[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (11))){
var inst_15035 = (state_15108[(7)]);
var inst_15039 = (inst_15035 == null);
var inst_15040 = cljs.core.not.call(null,inst_15039);
var state_15108__$1 = state_15108;
if(inst_15040){
var statearr_15150_15202 = state_15108__$1;
(statearr_15150_15202[(1)] = (13));

} else {
var statearr_15151_15203 = state_15108__$1;
(statearr_15151_15203[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (9))){
var inst_15010 = (state_15108[(8)]);
var state_15108__$1 = state_15108;
var statearr_15152_15204 = state_15108__$1;
(statearr_15152_15204[(2)] = inst_15010);

(statearr_15152_15204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (5))){
var state_15108__$1 = state_15108;
var statearr_15153_15205 = state_15108__$1;
(statearr_15153_15205[(2)] = true);

(statearr_15153_15205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (14))){
var state_15108__$1 = state_15108;
var statearr_15154_15206 = state_15108__$1;
(statearr_15154_15206[(2)] = false);

(statearr_15154_15206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (26))){
var inst_15068 = (state_15108[(10)]);
var inst_15075 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15068);
var state_15108__$1 = state_15108;
var statearr_15155_15207 = state_15108__$1;
(statearr_15155_15207[(2)] = inst_15075);

(statearr_15155_15207[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (16))){
var state_15108__$1 = state_15108;
var statearr_15156_15208 = state_15108__$1;
(statearr_15156_15208[(2)] = true);

(statearr_15156_15208[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (38))){
var inst_15098 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
var statearr_15157_15209 = state_15108__$1;
(statearr_15157_15209[(2)] = inst_15098);

(statearr_15157_15209[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (30))){
var inst_15060 = (state_15108[(13)]);
var inst_15068 = (state_15108[(10)]);
var inst_15059 = (state_15108[(11)]);
var inst_15085 = cljs.core.empty_QMARK_.call(null,inst_15059);
var inst_15086 = inst_15060.call(null,inst_15068);
var inst_15087 = cljs.core.not.call(null,inst_15086);
var inst_15088 = ((inst_15085) && (inst_15087));
var state_15108__$1 = state_15108;
var statearr_15158_15210 = state_15108__$1;
(statearr_15158_15210[(2)] = inst_15088);

(statearr_15158_15210[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (10))){
var inst_15010 = (state_15108[(8)]);
var inst_15031 = (state_15108[(2)]);
var inst_15032 = cljs.core.get.call(null,inst_15031,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15033 = cljs.core.get.call(null,inst_15031,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15034 = cljs.core.get.call(null,inst_15031,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15035 = inst_15010;
var state_15108__$1 = (function (){var statearr_15159 = state_15108;
(statearr_15159[(16)] = inst_15033);

(statearr_15159[(17)] = inst_15032);

(statearr_15159[(7)] = inst_15035);

(statearr_15159[(18)] = inst_15034);

return statearr_15159;
})();
var statearr_15160_15211 = state_15108__$1;
(statearr_15160_15211[(2)] = null);

(statearr_15160_15211[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (18))){
var inst_15050 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
var statearr_15161_15212 = state_15108__$1;
(statearr_15161_15212[(2)] = inst_15050);

(statearr_15161_15212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (37))){
var state_15108__$1 = state_15108;
var statearr_15162_15213 = state_15108__$1;
(statearr_15162_15213[(2)] = null);

(statearr_15162_15213[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (8))){
var inst_15010 = (state_15108[(8)]);
var inst_15028 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15010);
var state_15108__$1 = state_15108;
var statearr_15163_15214 = state_15108__$1;
(statearr_15163_15214[(2)] = inst_15028);

(statearr_15163_15214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11897__auto___15168,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11882__auto__,c__11897__auto___15168,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11883__auto__ = null;
var cljs$core$async$mix_$_state_machine__11883__auto____0 = (function (){
var statearr_15164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15164[(0)] = cljs$core$async$mix_$_state_machine__11883__auto__);

(statearr_15164[(1)] = (1));

return statearr_15164;
});
var cljs$core$async$mix_$_state_machine__11883__auto____1 = (function (state_15108){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_15108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e15165){if((e15165 instanceof Object)){
var ex__11886__auto__ = e15165;
var statearr_15166_15215 = state_15108;
(statearr_15166_15215[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15216 = state_15108;
state_15108 = G__15216;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11883__auto__ = function(state_15108){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11883__auto____1.call(this,state_15108);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11883__auto____0;
cljs$core$async$mix_$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11883__auto____1;
return cljs$core$async$mix_$_state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto___15168,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11899__auto__ = (function (){var statearr_15167 = f__11898__auto__.call(null);
(statearr_15167[(6)] = c__11897__auto___15168);

return statearr_15167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto___15168,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15218 = arguments.length;
switch (G__15218) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15222 = arguments.length;
switch (G__15222) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__15220_SHARP_){
if(cljs.core.truth_(p1__15220_SHARP_.call(null,topic))){
return p1__15220_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15220_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15223 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15223 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15224){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15224 = meta15224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15225,meta15224__$1){
var self__ = this;
var _15225__$1 = this;
return (new cljs.core.async.t_cljs$core$async15223(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15224__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15223.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15225){
var self__ = this;
var _15225__$1 = this;
return self__.meta15224;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15223.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15223.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15223.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15223.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15223.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15223.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15223.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15223.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15224","meta15224",-154517792,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15223.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15223";

cljs.core.async.t_cljs$core$async15223.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async15223");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15223.
 */
cljs.core.async.__GT_t_cljs$core$async15223 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15223(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15224){
return (new cljs.core.async.t_cljs$core$async15223(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15224));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15223(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11897__auto___15343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto___15343,mults,ensure_mult,p){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto___15343,mults,ensure_mult,p){
return (function (state_15297){
var state_val_15298 = (state_15297[(1)]);
if((state_val_15298 === (7))){
var inst_15293 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
var statearr_15299_15344 = state_15297__$1;
(statearr_15299_15344[(2)] = inst_15293);

(statearr_15299_15344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (20))){
var state_15297__$1 = state_15297;
var statearr_15300_15345 = state_15297__$1;
(statearr_15300_15345[(2)] = null);

(statearr_15300_15345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (1))){
var state_15297__$1 = state_15297;
var statearr_15301_15346 = state_15297__$1;
(statearr_15301_15346[(2)] = null);

(statearr_15301_15346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (24))){
var inst_15276 = (state_15297[(7)]);
var inst_15285 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15276);
var state_15297__$1 = state_15297;
var statearr_15302_15347 = state_15297__$1;
(statearr_15302_15347[(2)] = inst_15285);

(statearr_15302_15347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (4))){
var inst_15228 = (state_15297[(8)]);
var inst_15228__$1 = (state_15297[(2)]);
var inst_15229 = (inst_15228__$1 == null);
var state_15297__$1 = (function (){var statearr_15303 = state_15297;
(statearr_15303[(8)] = inst_15228__$1);

return statearr_15303;
})();
if(cljs.core.truth_(inst_15229)){
var statearr_15304_15348 = state_15297__$1;
(statearr_15304_15348[(1)] = (5));

} else {
var statearr_15305_15349 = state_15297__$1;
(statearr_15305_15349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (15))){
var inst_15270 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
var statearr_15306_15350 = state_15297__$1;
(statearr_15306_15350[(2)] = inst_15270);

(statearr_15306_15350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (21))){
var inst_15290 = (state_15297[(2)]);
var state_15297__$1 = (function (){var statearr_15307 = state_15297;
(statearr_15307[(9)] = inst_15290);

return statearr_15307;
})();
var statearr_15308_15351 = state_15297__$1;
(statearr_15308_15351[(2)] = null);

(statearr_15308_15351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (13))){
var inst_15252 = (state_15297[(10)]);
var inst_15254 = cljs.core.chunked_seq_QMARK_.call(null,inst_15252);
var state_15297__$1 = state_15297;
if(inst_15254){
var statearr_15309_15352 = state_15297__$1;
(statearr_15309_15352[(1)] = (16));

} else {
var statearr_15310_15353 = state_15297__$1;
(statearr_15310_15353[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (22))){
var inst_15282 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
if(cljs.core.truth_(inst_15282)){
var statearr_15311_15354 = state_15297__$1;
(statearr_15311_15354[(1)] = (23));

} else {
var statearr_15312_15355 = state_15297__$1;
(statearr_15312_15355[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (6))){
var inst_15276 = (state_15297[(7)]);
var inst_15278 = (state_15297[(11)]);
var inst_15228 = (state_15297[(8)]);
var inst_15276__$1 = topic_fn.call(null,inst_15228);
var inst_15277 = cljs.core.deref.call(null,mults);
var inst_15278__$1 = cljs.core.get.call(null,inst_15277,inst_15276__$1);
var state_15297__$1 = (function (){var statearr_15313 = state_15297;
(statearr_15313[(7)] = inst_15276__$1);

(statearr_15313[(11)] = inst_15278__$1);

return statearr_15313;
})();
if(cljs.core.truth_(inst_15278__$1)){
var statearr_15314_15356 = state_15297__$1;
(statearr_15314_15356[(1)] = (19));

} else {
var statearr_15315_15357 = state_15297__$1;
(statearr_15315_15357[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (25))){
var inst_15287 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
var statearr_15316_15358 = state_15297__$1;
(statearr_15316_15358[(2)] = inst_15287);

(statearr_15316_15358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (17))){
var inst_15252 = (state_15297[(10)]);
var inst_15261 = cljs.core.first.call(null,inst_15252);
var inst_15262 = cljs.core.async.muxch_STAR_.call(null,inst_15261);
var inst_15263 = cljs.core.async.close_BANG_.call(null,inst_15262);
var inst_15264 = cljs.core.next.call(null,inst_15252);
var inst_15238 = inst_15264;
var inst_15239 = null;
var inst_15240 = (0);
var inst_15241 = (0);
var state_15297__$1 = (function (){var statearr_15317 = state_15297;
(statearr_15317[(12)] = inst_15238);

(statearr_15317[(13)] = inst_15241);

(statearr_15317[(14)] = inst_15240);

(statearr_15317[(15)] = inst_15263);

(statearr_15317[(16)] = inst_15239);

return statearr_15317;
})();
var statearr_15318_15359 = state_15297__$1;
(statearr_15318_15359[(2)] = null);

(statearr_15318_15359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (3))){
var inst_15295 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15297__$1,inst_15295);
} else {
if((state_val_15298 === (12))){
var inst_15272 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
var statearr_15319_15360 = state_15297__$1;
(statearr_15319_15360[(2)] = inst_15272);

(statearr_15319_15360[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (2))){
var state_15297__$1 = state_15297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15297__$1,(4),ch);
} else {
if((state_val_15298 === (23))){
var state_15297__$1 = state_15297;
var statearr_15320_15361 = state_15297__$1;
(statearr_15320_15361[(2)] = null);

(statearr_15320_15361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (19))){
var inst_15278 = (state_15297[(11)]);
var inst_15228 = (state_15297[(8)]);
var inst_15280 = cljs.core.async.muxch_STAR_.call(null,inst_15278);
var state_15297__$1 = state_15297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15297__$1,(22),inst_15280,inst_15228);
} else {
if((state_val_15298 === (11))){
var inst_15238 = (state_15297[(12)]);
var inst_15252 = (state_15297[(10)]);
var inst_15252__$1 = cljs.core.seq.call(null,inst_15238);
var state_15297__$1 = (function (){var statearr_15321 = state_15297;
(statearr_15321[(10)] = inst_15252__$1);

return statearr_15321;
})();
if(inst_15252__$1){
var statearr_15322_15362 = state_15297__$1;
(statearr_15322_15362[(1)] = (13));

} else {
var statearr_15323_15363 = state_15297__$1;
(statearr_15323_15363[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (9))){
var inst_15274 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
var statearr_15324_15364 = state_15297__$1;
(statearr_15324_15364[(2)] = inst_15274);

(statearr_15324_15364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (5))){
var inst_15235 = cljs.core.deref.call(null,mults);
var inst_15236 = cljs.core.vals.call(null,inst_15235);
var inst_15237 = cljs.core.seq.call(null,inst_15236);
var inst_15238 = inst_15237;
var inst_15239 = null;
var inst_15240 = (0);
var inst_15241 = (0);
var state_15297__$1 = (function (){var statearr_15325 = state_15297;
(statearr_15325[(12)] = inst_15238);

(statearr_15325[(13)] = inst_15241);

(statearr_15325[(14)] = inst_15240);

(statearr_15325[(16)] = inst_15239);

return statearr_15325;
})();
var statearr_15326_15365 = state_15297__$1;
(statearr_15326_15365[(2)] = null);

(statearr_15326_15365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (14))){
var state_15297__$1 = state_15297;
var statearr_15330_15366 = state_15297__$1;
(statearr_15330_15366[(2)] = null);

(statearr_15330_15366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (16))){
var inst_15252 = (state_15297[(10)]);
var inst_15256 = cljs.core.chunk_first.call(null,inst_15252);
var inst_15257 = cljs.core.chunk_rest.call(null,inst_15252);
var inst_15258 = cljs.core.count.call(null,inst_15256);
var inst_15238 = inst_15257;
var inst_15239 = inst_15256;
var inst_15240 = inst_15258;
var inst_15241 = (0);
var state_15297__$1 = (function (){var statearr_15331 = state_15297;
(statearr_15331[(12)] = inst_15238);

(statearr_15331[(13)] = inst_15241);

(statearr_15331[(14)] = inst_15240);

(statearr_15331[(16)] = inst_15239);

return statearr_15331;
})();
var statearr_15332_15367 = state_15297__$1;
(statearr_15332_15367[(2)] = null);

(statearr_15332_15367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (10))){
var inst_15238 = (state_15297[(12)]);
var inst_15241 = (state_15297[(13)]);
var inst_15240 = (state_15297[(14)]);
var inst_15239 = (state_15297[(16)]);
var inst_15246 = cljs.core._nth.call(null,inst_15239,inst_15241);
var inst_15247 = cljs.core.async.muxch_STAR_.call(null,inst_15246);
var inst_15248 = cljs.core.async.close_BANG_.call(null,inst_15247);
var inst_15249 = (inst_15241 + (1));
var tmp15327 = inst_15238;
var tmp15328 = inst_15240;
var tmp15329 = inst_15239;
var inst_15238__$1 = tmp15327;
var inst_15239__$1 = tmp15329;
var inst_15240__$1 = tmp15328;
var inst_15241__$1 = inst_15249;
var state_15297__$1 = (function (){var statearr_15333 = state_15297;
(statearr_15333[(17)] = inst_15248);

(statearr_15333[(12)] = inst_15238__$1);

(statearr_15333[(13)] = inst_15241__$1);

(statearr_15333[(14)] = inst_15240__$1);

(statearr_15333[(16)] = inst_15239__$1);

return statearr_15333;
})();
var statearr_15334_15368 = state_15297__$1;
(statearr_15334_15368[(2)] = null);

(statearr_15334_15368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (18))){
var inst_15267 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
var statearr_15335_15369 = state_15297__$1;
(statearr_15335_15369[(2)] = inst_15267);

(statearr_15335_15369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (8))){
var inst_15241 = (state_15297[(13)]);
var inst_15240 = (state_15297[(14)]);
var inst_15243 = (inst_15241 < inst_15240);
var inst_15244 = inst_15243;
var state_15297__$1 = state_15297;
if(cljs.core.truth_(inst_15244)){
var statearr_15336_15370 = state_15297__$1;
(statearr_15336_15370[(1)] = (10));

} else {
var statearr_15337_15371 = state_15297__$1;
(statearr_15337_15371[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11897__auto___15343,mults,ensure_mult,p))
;
return ((function (switch__11882__auto__,c__11897__auto___15343,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11883__auto__ = null;
var cljs$core$async$state_machine__11883__auto____0 = (function (){
var statearr_15338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15338[(0)] = cljs$core$async$state_machine__11883__auto__);

(statearr_15338[(1)] = (1));

return statearr_15338;
});
var cljs$core$async$state_machine__11883__auto____1 = (function (state_15297){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_15297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e15339){if((e15339 instanceof Object)){
var ex__11886__auto__ = e15339;
var statearr_15340_15372 = state_15297;
(statearr_15340_15372[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15373 = state_15297;
state_15297 = G__15373;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$state_machine__11883__auto__ = function(state_15297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11883__auto____1.call(this,state_15297);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11883__auto____0;
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11883__auto____1;
return cljs$core$async$state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto___15343,mults,ensure_mult,p))
})();
var state__11899__auto__ = (function (){var statearr_15341 = f__11898__auto__.call(null);
(statearr_15341[(6)] = c__11897__auto___15343);

return statearr_15341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto___15343,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15375 = arguments.length;
switch (G__15375) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15378 = arguments.length;
switch (G__15378) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15381 = arguments.length;
switch (G__15381) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__11897__auto___15448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto___15448,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto___15448,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15420){
var state_val_15421 = (state_15420[(1)]);
if((state_val_15421 === (7))){
var state_15420__$1 = state_15420;
var statearr_15422_15449 = state_15420__$1;
(statearr_15422_15449[(2)] = null);

(statearr_15422_15449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (1))){
var state_15420__$1 = state_15420;
var statearr_15423_15450 = state_15420__$1;
(statearr_15423_15450[(2)] = null);

(statearr_15423_15450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (4))){
var inst_15384 = (state_15420[(7)]);
var inst_15386 = (inst_15384 < cnt);
var state_15420__$1 = state_15420;
if(cljs.core.truth_(inst_15386)){
var statearr_15424_15451 = state_15420__$1;
(statearr_15424_15451[(1)] = (6));

} else {
var statearr_15425_15452 = state_15420__$1;
(statearr_15425_15452[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (15))){
var inst_15416 = (state_15420[(2)]);
var state_15420__$1 = state_15420;
var statearr_15426_15453 = state_15420__$1;
(statearr_15426_15453[(2)] = inst_15416);

(statearr_15426_15453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (13))){
var inst_15409 = cljs.core.async.close_BANG_.call(null,out);
var state_15420__$1 = state_15420;
var statearr_15427_15454 = state_15420__$1;
(statearr_15427_15454[(2)] = inst_15409);

(statearr_15427_15454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (6))){
var state_15420__$1 = state_15420;
var statearr_15428_15455 = state_15420__$1;
(statearr_15428_15455[(2)] = null);

(statearr_15428_15455[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (3))){
var inst_15418 = (state_15420[(2)]);
var state_15420__$1 = state_15420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15420__$1,inst_15418);
} else {
if((state_val_15421 === (12))){
var inst_15406 = (state_15420[(8)]);
var inst_15406__$1 = (state_15420[(2)]);
var inst_15407 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15406__$1);
var state_15420__$1 = (function (){var statearr_15429 = state_15420;
(statearr_15429[(8)] = inst_15406__$1);

return statearr_15429;
})();
if(cljs.core.truth_(inst_15407)){
var statearr_15430_15456 = state_15420__$1;
(statearr_15430_15456[(1)] = (13));

} else {
var statearr_15431_15457 = state_15420__$1;
(statearr_15431_15457[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (2))){
var inst_15383 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15384 = (0);
var state_15420__$1 = (function (){var statearr_15432 = state_15420;
(statearr_15432[(9)] = inst_15383);

(statearr_15432[(7)] = inst_15384);

return statearr_15432;
})();
var statearr_15433_15458 = state_15420__$1;
(statearr_15433_15458[(2)] = null);

(statearr_15433_15458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (11))){
var inst_15384 = (state_15420[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15420,(10),Object,null,(9));
var inst_15393 = chs__$1.call(null,inst_15384);
var inst_15394 = done.call(null,inst_15384);
var inst_15395 = cljs.core.async.take_BANG_.call(null,inst_15393,inst_15394);
var state_15420__$1 = state_15420;
var statearr_15434_15459 = state_15420__$1;
(statearr_15434_15459[(2)] = inst_15395);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (9))){
var inst_15384 = (state_15420[(7)]);
var inst_15397 = (state_15420[(2)]);
var inst_15398 = (inst_15384 + (1));
var inst_15384__$1 = inst_15398;
var state_15420__$1 = (function (){var statearr_15435 = state_15420;
(statearr_15435[(7)] = inst_15384__$1);

(statearr_15435[(10)] = inst_15397);

return statearr_15435;
})();
var statearr_15436_15460 = state_15420__$1;
(statearr_15436_15460[(2)] = null);

(statearr_15436_15460[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (5))){
var inst_15404 = (state_15420[(2)]);
var state_15420__$1 = (function (){var statearr_15437 = state_15420;
(statearr_15437[(11)] = inst_15404);

return statearr_15437;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15420__$1,(12),dchan);
} else {
if((state_val_15421 === (14))){
var inst_15406 = (state_15420[(8)]);
var inst_15411 = cljs.core.apply.call(null,f,inst_15406);
var state_15420__$1 = state_15420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15420__$1,(16),out,inst_15411);
} else {
if((state_val_15421 === (16))){
var inst_15413 = (state_15420[(2)]);
var state_15420__$1 = (function (){var statearr_15438 = state_15420;
(statearr_15438[(12)] = inst_15413);

return statearr_15438;
})();
var statearr_15439_15461 = state_15420__$1;
(statearr_15439_15461[(2)] = null);

(statearr_15439_15461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (10))){
var inst_15388 = (state_15420[(2)]);
var inst_15389 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15420__$1 = (function (){var statearr_15440 = state_15420;
(statearr_15440[(13)] = inst_15388);

return statearr_15440;
})();
var statearr_15441_15462 = state_15420__$1;
(statearr_15441_15462[(2)] = inst_15389);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15421 === (8))){
var inst_15402 = (state_15420[(2)]);
var state_15420__$1 = state_15420;
var statearr_15442_15463 = state_15420__$1;
(statearr_15442_15463[(2)] = inst_15402);

(statearr_15442_15463[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11897__auto___15448,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11882__auto__,c__11897__auto___15448,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11883__auto__ = null;
var cljs$core$async$state_machine__11883__auto____0 = (function (){
var statearr_15443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15443[(0)] = cljs$core$async$state_machine__11883__auto__);

(statearr_15443[(1)] = (1));

return statearr_15443;
});
var cljs$core$async$state_machine__11883__auto____1 = (function (state_15420){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_15420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e15444){if((e15444 instanceof Object)){
var ex__11886__auto__ = e15444;
var statearr_15445_15464 = state_15420;
(statearr_15445_15464[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15465 = state_15420;
state_15420 = G__15465;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$state_machine__11883__auto__ = function(state_15420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11883__auto____1.call(this,state_15420);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11883__auto____0;
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11883__auto____1;
return cljs$core$async$state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto___15448,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11899__auto__ = (function (){var statearr_15446 = f__11898__auto__.call(null);
(statearr_15446[(6)] = c__11897__auto___15448);

return statearr_15446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto___15448,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15468 = arguments.length;
switch (G__15468) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11897__auto___15522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto___15522,out){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto___15522,out){
return (function (state_15500){
var state_val_15501 = (state_15500[(1)]);
if((state_val_15501 === (7))){
var inst_15480 = (state_15500[(7)]);
var inst_15479 = (state_15500[(8)]);
var inst_15479__$1 = (state_15500[(2)]);
var inst_15480__$1 = cljs.core.nth.call(null,inst_15479__$1,(0),null);
var inst_15481 = cljs.core.nth.call(null,inst_15479__$1,(1),null);
var inst_15482 = (inst_15480__$1 == null);
var state_15500__$1 = (function (){var statearr_15502 = state_15500;
(statearr_15502[(9)] = inst_15481);

(statearr_15502[(7)] = inst_15480__$1);

(statearr_15502[(8)] = inst_15479__$1);

return statearr_15502;
})();
if(cljs.core.truth_(inst_15482)){
var statearr_15503_15523 = state_15500__$1;
(statearr_15503_15523[(1)] = (8));

} else {
var statearr_15504_15524 = state_15500__$1;
(statearr_15504_15524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (1))){
var inst_15469 = cljs.core.vec.call(null,chs);
var inst_15470 = inst_15469;
var state_15500__$1 = (function (){var statearr_15505 = state_15500;
(statearr_15505[(10)] = inst_15470);

return statearr_15505;
})();
var statearr_15506_15525 = state_15500__$1;
(statearr_15506_15525[(2)] = null);

(statearr_15506_15525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (4))){
var inst_15470 = (state_15500[(10)]);
var state_15500__$1 = state_15500;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15500__$1,(7),inst_15470);
} else {
if((state_val_15501 === (6))){
var inst_15496 = (state_15500[(2)]);
var state_15500__$1 = state_15500;
var statearr_15507_15526 = state_15500__$1;
(statearr_15507_15526[(2)] = inst_15496);

(statearr_15507_15526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (3))){
var inst_15498 = (state_15500[(2)]);
var state_15500__$1 = state_15500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15500__$1,inst_15498);
} else {
if((state_val_15501 === (2))){
var inst_15470 = (state_15500[(10)]);
var inst_15472 = cljs.core.count.call(null,inst_15470);
var inst_15473 = (inst_15472 > (0));
var state_15500__$1 = state_15500;
if(cljs.core.truth_(inst_15473)){
var statearr_15509_15527 = state_15500__$1;
(statearr_15509_15527[(1)] = (4));

} else {
var statearr_15510_15528 = state_15500__$1;
(statearr_15510_15528[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (11))){
var inst_15470 = (state_15500[(10)]);
var inst_15489 = (state_15500[(2)]);
var tmp15508 = inst_15470;
var inst_15470__$1 = tmp15508;
var state_15500__$1 = (function (){var statearr_15511 = state_15500;
(statearr_15511[(10)] = inst_15470__$1);

(statearr_15511[(11)] = inst_15489);

return statearr_15511;
})();
var statearr_15512_15529 = state_15500__$1;
(statearr_15512_15529[(2)] = null);

(statearr_15512_15529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (9))){
var inst_15480 = (state_15500[(7)]);
var state_15500__$1 = state_15500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15500__$1,(11),out,inst_15480);
} else {
if((state_val_15501 === (5))){
var inst_15494 = cljs.core.async.close_BANG_.call(null,out);
var state_15500__$1 = state_15500;
var statearr_15513_15530 = state_15500__$1;
(statearr_15513_15530[(2)] = inst_15494);

(statearr_15513_15530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (10))){
var inst_15492 = (state_15500[(2)]);
var state_15500__$1 = state_15500;
var statearr_15514_15531 = state_15500__$1;
(statearr_15514_15531[(2)] = inst_15492);

(statearr_15514_15531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15501 === (8))){
var inst_15470 = (state_15500[(10)]);
var inst_15481 = (state_15500[(9)]);
var inst_15480 = (state_15500[(7)]);
var inst_15479 = (state_15500[(8)]);
var inst_15484 = (function (){var cs = inst_15470;
var vec__15475 = inst_15479;
var v = inst_15480;
var c = inst_15481;
return ((function (cs,vec__15475,v,c,inst_15470,inst_15481,inst_15480,inst_15479,state_val_15501,c__11897__auto___15522,out){
return (function (p1__15466_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15466_SHARP_);
});
;})(cs,vec__15475,v,c,inst_15470,inst_15481,inst_15480,inst_15479,state_val_15501,c__11897__auto___15522,out))
})();
var inst_15485 = cljs.core.filterv.call(null,inst_15484,inst_15470);
var inst_15470__$1 = inst_15485;
var state_15500__$1 = (function (){var statearr_15515 = state_15500;
(statearr_15515[(10)] = inst_15470__$1);

return statearr_15515;
})();
var statearr_15516_15532 = state_15500__$1;
(statearr_15516_15532[(2)] = null);

(statearr_15516_15532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11897__auto___15522,out))
;
return ((function (switch__11882__auto__,c__11897__auto___15522,out){
return (function() {
var cljs$core$async$state_machine__11883__auto__ = null;
var cljs$core$async$state_machine__11883__auto____0 = (function (){
var statearr_15517 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15517[(0)] = cljs$core$async$state_machine__11883__auto__);

(statearr_15517[(1)] = (1));

return statearr_15517;
});
var cljs$core$async$state_machine__11883__auto____1 = (function (state_15500){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_15500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e15518){if((e15518 instanceof Object)){
var ex__11886__auto__ = e15518;
var statearr_15519_15533 = state_15500;
(statearr_15519_15533[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15534 = state_15500;
state_15500 = G__15534;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$state_machine__11883__auto__ = function(state_15500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11883__auto____1.call(this,state_15500);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11883__auto____0;
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11883__auto____1;
return cljs$core$async$state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto___15522,out))
})();
var state__11899__auto__ = (function (){var statearr_15520 = f__11898__auto__.call(null);
(statearr_15520[(6)] = c__11897__auto___15522);

return statearr_15520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto___15522,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__15536 = arguments.length;
switch (G__15536) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11897__auto___15581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto___15581,out){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto___15581,out){
return (function (state_15560){
var state_val_15561 = (state_15560[(1)]);
if((state_val_15561 === (7))){
var inst_15542 = (state_15560[(7)]);
var inst_15542__$1 = (state_15560[(2)]);
var inst_15543 = (inst_15542__$1 == null);
var inst_15544 = cljs.core.not.call(null,inst_15543);
var state_15560__$1 = (function (){var statearr_15562 = state_15560;
(statearr_15562[(7)] = inst_15542__$1);

return statearr_15562;
})();
if(inst_15544){
var statearr_15563_15582 = state_15560__$1;
(statearr_15563_15582[(1)] = (8));

} else {
var statearr_15564_15583 = state_15560__$1;
(statearr_15564_15583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15561 === (1))){
var inst_15537 = (0);
var state_15560__$1 = (function (){var statearr_15565 = state_15560;
(statearr_15565[(8)] = inst_15537);

return statearr_15565;
})();
var statearr_15566_15584 = state_15560__$1;
(statearr_15566_15584[(2)] = null);

(statearr_15566_15584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15561 === (4))){
var state_15560__$1 = state_15560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15560__$1,(7),ch);
} else {
if((state_val_15561 === (6))){
var inst_15555 = (state_15560[(2)]);
var state_15560__$1 = state_15560;
var statearr_15567_15585 = state_15560__$1;
(statearr_15567_15585[(2)] = inst_15555);

(statearr_15567_15585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15561 === (3))){
var inst_15557 = (state_15560[(2)]);
var inst_15558 = cljs.core.async.close_BANG_.call(null,out);
var state_15560__$1 = (function (){var statearr_15568 = state_15560;
(statearr_15568[(9)] = inst_15557);

return statearr_15568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15560__$1,inst_15558);
} else {
if((state_val_15561 === (2))){
var inst_15537 = (state_15560[(8)]);
var inst_15539 = (inst_15537 < n);
var state_15560__$1 = state_15560;
if(cljs.core.truth_(inst_15539)){
var statearr_15569_15586 = state_15560__$1;
(statearr_15569_15586[(1)] = (4));

} else {
var statearr_15570_15587 = state_15560__$1;
(statearr_15570_15587[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15561 === (11))){
var inst_15537 = (state_15560[(8)]);
var inst_15547 = (state_15560[(2)]);
var inst_15548 = (inst_15537 + (1));
var inst_15537__$1 = inst_15548;
var state_15560__$1 = (function (){var statearr_15571 = state_15560;
(statearr_15571[(8)] = inst_15537__$1);

(statearr_15571[(10)] = inst_15547);

return statearr_15571;
})();
var statearr_15572_15588 = state_15560__$1;
(statearr_15572_15588[(2)] = null);

(statearr_15572_15588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15561 === (9))){
var state_15560__$1 = state_15560;
var statearr_15573_15589 = state_15560__$1;
(statearr_15573_15589[(2)] = null);

(statearr_15573_15589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15561 === (5))){
var state_15560__$1 = state_15560;
var statearr_15574_15590 = state_15560__$1;
(statearr_15574_15590[(2)] = null);

(statearr_15574_15590[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15561 === (10))){
var inst_15552 = (state_15560[(2)]);
var state_15560__$1 = state_15560;
var statearr_15575_15591 = state_15560__$1;
(statearr_15575_15591[(2)] = inst_15552);

(statearr_15575_15591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15561 === (8))){
var inst_15542 = (state_15560[(7)]);
var state_15560__$1 = state_15560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15560__$1,(11),out,inst_15542);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11897__auto___15581,out))
;
return ((function (switch__11882__auto__,c__11897__auto___15581,out){
return (function() {
var cljs$core$async$state_machine__11883__auto__ = null;
var cljs$core$async$state_machine__11883__auto____0 = (function (){
var statearr_15576 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15576[(0)] = cljs$core$async$state_machine__11883__auto__);

(statearr_15576[(1)] = (1));

return statearr_15576;
});
var cljs$core$async$state_machine__11883__auto____1 = (function (state_15560){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_15560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e15577){if((e15577 instanceof Object)){
var ex__11886__auto__ = e15577;
var statearr_15578_15592 = state_15560;
(statearr_15578_15592[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15593 = state_15560;
state_15560 = G__15593;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$state_machine__11883__auto__ = function(state_15560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11883__auto____1.call(this,state_15560);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11883__auto____0;
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11883__auto____1;
return cljs$core$async$state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto___15581,out))
})();
var state__11899__auto__ = (function (){var statearr_15579 = f__11898__auto__.call(null);
(statearr_15579[(6)] = c__11897__auto___15581);

return statearr_15579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto___15581,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15595 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15595 = (function (f,ch,meta15596){
this.f = f;
this.ch = ch;
this.meta15596 = meta15596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15597,meta15596__$1){
var self__ = this;
var _15597__$1 = this;
return (new cljs.core.async.t_cljs$core$async15595(self__.f,self__.ch,meta15596__$1));
});

cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15597){
var self__ = this;
var _15597__$1 = this;
return self__.meta15596;
});

cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15598 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15598 = (function (f,ch,meta15596,_,fn1,meta15599){
this.f = f;
this.ch = ch;
this.meta15596 = meta15596;
this._ = _;
this.fn1 = fn1;
this.meta15599 = meta15599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15600,meta15599__$1){
var self__ = this;
var _15600__$1 = this;
return (new cljs.core.async.t_cljs$core$async15598(self__.f,self__.ch,self__.meta15596,self__._,self__.fn1,meta15599__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15598.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15600){
var self__ = this;
var _15600__$1 = this;
return self__.meta15599;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15598.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15598.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15598.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15598.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15594_SHARP_){
return f1.call(null,(((p1__15594_SHARP_ == null))?null:self__.f.call(null,p1__15594_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15598.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15596","meta15596",-2126394538,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15595","cljs.core.async/t_cljs$core$async15595",-113453982,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15599","meta15599",-1784939435,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15598.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15598";

cljs.core.async.t_cljs$core$async15598.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async15598");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15598.
 */
cljs.core.async.__GT_t_cljs$core$async15598 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15598(f__$1,ch__$1,meta15596__$1,___$2,fn1__$1,meta15599){
return (new cljs.core.async.t_cljs$core$async15598(f__$1,ch__$1,meta15596__$1,___$2,fn1__$1,meta15599));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15598(self__.f,self__.ch,self__.meta15596,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15596","meta15596",-2126394538,null)], null);
});

cljs.core.async.t_cljs$core$async15595.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15595";

cljs.core.async.t_cljs$core$async15595.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async15595");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15595.
 */
cljs.core.async.__GT_t_cljs$core$async15595 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15595(f__$1,ch__$1,meta15596){
return (new cljs.core.async.t_cljs$core$async15595(f__$1,ch__$1,meta15596));
});

}

return (new cljs.core.async.t_cljs$core$async15595(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15601 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15601 = (function (f,ch,meta15602){
this.f = f;
this.ch = ch;
this.meta15602 = meta15602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15603,meta15602__$1){
var self__ = this;
var _15603__$1 = this;
return (new cljs.core.async.t_cljs$core$async15601(self__.f,self__.ch,meta15602__$1));
});

cljs.core.async.t_cljs$core$async15601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15603){
var self__ = this;
var _15603__$1 = this;
return self__.meta15602;
});

cljs.core.async.t_cljs$core$async15601.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15601.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15601.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15601.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15601.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15601.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15602","meta15602",-605999125,null)], null);
});

cljs.core.async.t_cljs$core$async15601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15601";

cljs.core.async.t_cljs$core$async15601.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async15601");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15601.
 */
cljs.core.async.__GT_t_cljs$core$async15601 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15601(f__$1,ch__$1,meta15602){
return (new cljs.core.async.t_cljs$core$async15601(f__$1,ch__$1,meta15602));
});

}

return (new cljs.core.async.t_cljs$core$async15601(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15604 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15604 = (function (p,ch,meta15605){
this.p = p;
this.ch = ch;
this.meta15605 = meta15605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15606,meta15605__$1){
var self__ = this;
var _15606__$1 = this;
return (new cljs.core.async.t_cljs$core$async15604(self__.p,self__.ch,meta15605__$1));
});

cljs.core.async.t_cljs$core$async15604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15606){
var self__ = this;
var _15606__$1 = this;
return self__.meta15605;
});

cljs.core.async.t_cljs$core$async15604.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15604.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15604.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15604.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15604.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15604.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15604.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15605","meta15605",1024255844,null)], null);
});

cljs.core.async.t_cljs$core$async15604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15604";

cljs.core.async.t_cljs$core$async15604.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async15604");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15604.
 */
cljs.core.async.__GT_t_cljs$core$async15604 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15604(p__$1,ch__$1,meta15605){
return (new cljs.core.async.t_cljs$core$async15604(p__$1,ch__$1,meta15605));
});

}

return (new cljs.core.async.t_cljs$core$async15604(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__15608 = arguments.length;
switch (G__15608) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11897__auto___15648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto___15648,out){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto___15648,out){
return (function (state_15629){
var state_val_15630 = (state_15629[(1)]);
if((state_val_15630 === (7))){
var inst_15625 = (state_15629[(2)]);
var state_15629__$1 = state_15629;
var statearr_15631_15649 = state_15629__$1;
(statearr_15631_15649[(2)] = inst_15625);

(statearr_15631_15649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (1))){
var state_15629__$1 = state_15629;
var statearr_15632_15650 = state_15629__$1;
(statearr_15632_15650[(2)] = null);

(statearr_15632_15650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (4))){
var inst_15611 = (state_15629[(7)]);
var inst_15611__$1 = (state_15629[(2)]);
var inst_15612 = (inst_15611__$1 == null);
var state_15629__$1 = (function (){var statearr_15633 = state_15629;
(statearr_15633[(7)] = inst_15611__$1);

return statearr_15633;
})();
if(cljs.core.truth_(inst_15612)){
var statearr_15634_15651 = state_15629__$1;
(statearr_15634_15651[(1)] = (5));

} else {
var statearr_15635_15652 = state_15629__$1;
(statearr_15635_15652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (6))){
var inst_15611 = (state_15629[(7)]);
var inst_15616 = p.call(null,inst_15611);
var state_15629__$1 = state_15629;
if(cljs.core.truth_(inst_15616)){
var statearr_15636_15653 = state_15629__$1;
(statearr_15636_15653[(1)] = (8));

} else {
var statearr_15637_15654 = state_15629__$1;
(statearr_15637_15654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (3))){
var inst_15627 = (state_15629[(2)]);
var state_15629__$1 = state_15629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15629__$1,inst_15627);
} else {
if((state_val_15630 === (2))){
var state_15629__$1 = state_15629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15629__$1,(4),ch);
} else {
if((state_val_15630 === (11))){
var inst_15619 = (state_15629[(2)]);
var state_15629__$1 = state_15629;
var statearr_15638_15655 = state_15629__$1;
(statearr_15638_15655[(2)] = inst_15619);

(statearr_15638_15655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (9))){
var state_15629__$1 = state_15629;
var statearr_15639_15656 = state_15629__$1;
(statearr_15639_15656[(2)] = null);

(statearr_15639_15656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (5))){
var inst_15614 = cljs.core.async.close_BANG_.call(null,out);
var state_15629__$1 = state_15629;
var statearr_15640_15657 = state_15629__$1;
(statearr_15640_15657[(2)] = inst_15614);

(statearr_15640_15657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (10))){
var inst_15622 = (state_15629[(2)]);
var state_15629__$1 = (function (){var statearr_15641 = state_15629;
(statearr_15641[(8)] = inst_15622);

return statearr_15641;
})();
var statearr_15642_15658 = state_15629__$1;
(statearr_15642_15658[(2)] = null);

(statearr_15642_15658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (8))){
var inst_15611 = (state_15629[(7)]);
var state_15629__$1 = state_15629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15629__$1,(11),out,inst_15611);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11897__auto___15648,out))
;
return ((function (switch__11882__auto__,c__11897__auto___15648,out){
return (function() {
var cljs$core$async$state_machine__11883__auto__ = null;
var cljs$core$async$state_machine__11883__auto____0 = (function (){
var statearr_15643 = [null,null,null,null,null,null,null,null,null];
(statearr_15643[(0)] = cljs$core$async$state_machine__11883__auto__);

(statearr_15643[(1)] = (1));

return statearr_15643;
});
var cljs$core$async$state_machine__11883__auto____1 = (function (state_15629){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_15629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e15644){if((e15644 instanceof Object)){
var ex__11886__auto__ = e15644;
var statearr_15645_15659 = state_15629;
(statearr_15645_15659[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15660 = state_15629;
state_15629 = G__15660;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$state_machine__11883__auto__ = function(state_15629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11883__auto____1.call(this,state_15629);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11883__auto____0;
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11883__auto____1;
return cljs$core$async$state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto___15648,out))
})();
var state__11899__auto__ = (function (){var statearr_15646 = f__11898__auto__.call(null);
(statearr_15646[(6)] = c__11897__auto___15648);

return statearr_15646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto___15648,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15662 = arguments.length;
switch (G__15662) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11897__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto__){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto__){
return (function (state_15725){
var state_val_15726 = (state_15725[(1)]);
if((state_val_15726 === (7))){
var inst_15721 = (state_15725[(2)]);
var state_15725__$1 = state_15725;
var statearr_15727_15765 = state_15725__$1;
(statearr_15727_15765[(2)] = inst_15721);

(statearr_15727_15765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (20))){
var inst_15691 = (state_15725[(7)]);
var inst_15702 = (state_15725[(2)]);
var inst_15703 = cljs.core.next.call(null,inst_15691);
var inst_15677 = inst_15703;
var inst_15678 = null;
var inst_15679 = (0);
var inst_15680 = (0);
var state_15725__$1 = (function (){var statearr_15728 = state_15725;
(statearr_15728[(8)] = inst_15678);

(statearr_15728[(9)] = inst_15679);

(statearr_15728[(10)] = inst_15680);

(statearr_15728[(11)] = inst_15702);

(statearr_15728[(12)] = inst_15677);

return statearr_15728;
})();
var statearr_15729_15766 = state_15725__$1;
(statearr_15729_15766[(2)] = null);

(statearr_15729_15766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (1))){
var state_15725__$1 = state_15725;
var statearr_15730_15767 = state_15725__$1;
(statearr_15730_15767[(2)] = null);

(statearr_15730_15767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (4))){
var inst_15666 = (state_15725[(13)]);
var inst_15666__$1 = (state_15725[(2)]);
var inst_15667 = (inst_15666__$1 == null);
var state_15725__$1 = (function (){var statearr_15731 = state_15725;
(statearr_15731[(13)] = inst_15666__$1);

return statearr_15731;
})();
if(cljs.core.truth_(inst_15667)){
var statearr_15732_15768 = state_15725__$1;
(statearr_15732_15768[(1)] = (5));

} else {
var statearr_15733_15769 = state_15725__$1;
(statearr_15733_15769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (15))){
var state_15725__$1 = state_15725;
var statearr_15737_15770 = state_15725__$1;
(statearr_15737_15770[(2)] = null);

(statearr_15737_15770[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (21))){
var state_15725__$1 = state_15725;
var statearr_15738_15771 = state_15725__$1;
(statearr_15738_15771[(2)] = null);

(statearr_15738_15771[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (13))){
var inst_15678 = (state_15725[(8)]);
var inst_15679 = (state_15725[(9)]);
var inst_15680 = (state_15725[(10)]);
var inst_15677 = (state_15725[(12)]);
var inst_15687 = (state_15725[(2)]);
var inst_15688 = (inst_15680 + (1));
var tmp15734 = inst_15678;
var tmp15735 = inst_15679;
var tmp15736 = inst_15677;
var inst_15677__$1 = tmp15736;
var inst_15678__$1 = tmp15734;
var inst_15679__$1 = tmp15735;
var inst_15680__$1 = inst_15688;
var state_15725__$1 = (function (){var statearr_15739 = state_15725;
(statearr_15739[(8)] = inst_15678__$1);

(statearr_15739[(9)] = inst_15679__$1);

(statearr_15739[(10)] = inst_15680__$1);

(statearr_15739[(12)] = inst_15677__$1);

(statearr_15739[(14)] = inst_15687);

return statearr_15739;
})();
var statearr_15740_15772 = state_15725__$1;
(statearr_15740_15772[(2)] = null);

(statearr_15740_15772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (22))){
var state_15725__$1 = state_15725;
var statearr_15741_15773 = state_15725__$1;
(statearr_15741_15773[(2)] = null);

(statearr_15741_15773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (6))){
var inst_15666 = (state_15725[(13)]);
var inst_15675 = f.call(null,inst_15666);
var inst_15676 = cljs.core.seq.call(null,inst_15675);
var inst_15677 = inst_15676;
var inst_15678 = null;
var inst_15679 = (0);
var inst_15680 = (0);
var state_15725__$1 = (function (){var statearr_15742 = state_15725;
(statearr_15742[(8)] = inst_15678);

(statearr_15742[(9)] = inst_15679);

(statearr_15742[(10)] = inst_15680);

(statearr_15742[(12)] = inst_15677);

return statearr_15742;
})();
var statearr_15743_15774 = state_15725__$1;
(statearr_15743_15774[(2)] = null);

(statearr_15743_15774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (17))){
var inst_15691 = (state_15725[(7)]);
var inst_15695 = cljs.core.chunk_first.call(null,inst_15691);
var inst_15696 = cljs.core.chunk_rest.call(null,inst_15691);
var inst_15697 = cljs.core.count.call(null,inst_15695);
var inst_15677 = inst_15696;
var inst_15678 = inst_15695;
var inst_15679 = inst_15697;
var inst_15680 = (0);
var state_15725__$1 = (function (){var statearr_15744 = state_15725;
(statearr_15744[(8)] = inst_15678);

(statearr_15744[(9)] = inst_15679);

(statearr_15744[(10)] = inst_15680);

(statearr_15744[(12)] = inst_15677);

return statearr_15744;
})();
var statearr_15745_15775 = state_15725__$1;
(statearr_15745_15775[(2)] = null);

(statearr_15745_15775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (3))){
var inst_15723 = (state_15725[(2)]);
var state_15725__$1 = state_15725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15725__$1,inst_15723);
} else {
if((state_val_15726 === (12))){
var inst_15711 = (state_15725[(2)]);
var state_15725__$1 = state_15725;
var statearr_15746_15776 = state_15725__$1;
(statearr_15746_15776[(2)] = inst_15711);

(statearr_15746_15776[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (2))){
var state_15725__$1 = state_15725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15725__$1,(4),in$);
} else {
if((state_val_15726 === (23))){
var inst_15719 = (state_15725[(2)]);
var state_15725__$1 = state_15725;
var statearr_15747_15777 = state_15725__$1;
(statearr_15747_15777[(2)] = inst_15719);

(statearr_15747_15777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (19))){
var inst_15706 = (state_15725[(2)]);
var state_15725__$1 = state_15725;
var statearr_15748_15778 = state_15725__$1;
(statearr_15748_15778[(2)] = inst_15706);

(statearr_15748_15778[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (11))){
var inst_15691 = (state_15725[(7)]);
var inst_15677 = (state_15725[(12)]);
var inst_15691__$1 = cljs.core.seq.call(null,inst_15677);
var state_15725__$1 = (function (){var statearr_15749 = state_15725;
(statearr_15749[(7)] = inst_15691__$1);

return statearr_15749;
})();
if(inst_15691__$1){
var statearr_15750_15779 = state_15725__$1;
(statearr_15750_15779[(1)] = (14));

} else {
var statearr_15751_15780 = state_15725__$1;
(statearr_15751_15780[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (9))){
var inst_15713 = (state_15725[(2)]);
var inst_15714 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15725__$1 = (function (){var statearr_15752 = state_15725;
(statearr_15752[(15)] = inst_15713);

return statearr_15752;
})();
if(cljs.core.truth_(inst_15714)){
var statearr_15753_15781 = state_15725__$1;
(statearr_15753_15781[(1)] = (21));

} else {
var statearr_15754_15782 = state_15725__$1;
(statearr_15754_15782[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (5))){
var inst_15669 = cljs.core.async.close_BANG_.call(null,out);
var state_15725__$1 = state_15725;
var statearr_15755_15783 = state_15725__$1;
(statearr_15755_15783[(2)] = inst_15669);

(statearr_15755_15783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (14))){
var inst_15691 = (state_15725[(7)]);
var inst_15693 = cljs.core.chunked_seq_QMARK_.call(null,inst_15691);
var state_15725__$1 = state_15725;
if(inst_15693){
var statearr_15756_15784 = state_15725__$1;
(statearr_15756_15784[(1)] = (17));

} else {
var statearr_15757_15785 = state_15725__$1;
(statearr_15757_15785[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (16))){
var inst_15709 = (state_15725[(2)]);
var state_15725__$1 = state_15725;
var statearr_15758_15786 = state_15725__$1;
(statearr_15758_15786[(2)] = inst_15709);

(statearr_15758_15786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (10))){
var inst_15678 = (state_15725[(8)]);
var inst_15680 = (state_15725[(10)]);
var inst_15685 = cljs.core._nth.call(null,inst_15678,inst_15680);
var state_15725__$1 = state_15725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15725__$1,(13),out,inst_15685);
} else {
if((state_val_15726 === (18))){
var inst_15691 = (state_15725[(7)]);
var inst_15700 = cljs.core.first.call(null,inst_15691);
var state_15725__$1 = state_15725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15725__$1,(20),out,inst_15700);
} else {
if((state_val_15726 === (8))){
var inst_15679 = (state_15725[(9)]);
var inst_15680 = (state_15725[(10)]);
var inst_15682 = (inst_15680 < inst_15679);
var inst_15683 = inst_15682;
var state_15725__$1 = state_15725;
if(cljs.core.truth_(inst_15683)){
var statearr_15759_15787 = state_15725__$1;
(statearr_15759_15787[(1)] = (10));

} else {
var statearr_15760_15788 = state_15725__$1;
(statearr_15760_15788[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11897__auto__))
;
return ((function (switch__11882__auto__,c__11897__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11883__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11883__auto____0 = (function (){
var statearr_15761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15761[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11883__auto__);

(statearr_15761[(1)] = (1));

return statearr_15761;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11883__auto____1 = (function (state_15725){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_15725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e15762){if((e15762 instanceof Object)){
var ex__11886__auto__ = e15762;
var statearr_15763_15789 = state_15725;
(statearr_15763_15789[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15790 = state_15725;
state_15725 = G__15790;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11883__auto__ = function(state_15725){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11883__auto____1.call(this,state_15725);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11883__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11883__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto__))
})();
var state__11899__auto__ = (function (){var statearr_15764 = f__11898__auto__.call(null);
(statearr_15764[(6)] = c__11897__auto__);

return statearr_15764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto__))
);

return c__11897__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15792 = arguments.length;
switch (G__15792) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15795 = arguments.length;
switch (G__15795) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15798 = arguments.length;
switch (G__15798) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11897__auto___15845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto___15845,out){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto___15845,out){
return (function (state_15822){
var state_val_15823 = (state_15822[(1)]);
if((state_val_15823 === (7))){
var inst_15817 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
var statearr_15824_15846 = state_15822__$1;
(statearr_15824_15846[(2)] = inst_15817);

(statearr_15824_15846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (1))){
var inst_15799 = null;
var state_15822__$1 = (function (){var statearr_15825 = state_15822;
(statearr_15825[(7)] = inst_15799);

return statearr_15825;
})();
var statearr_15826_15847 = state_15822__$1;
(statearr_15826_15847[(2)] = null);

(statearr_15826_15847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (4))){
var inst_15802 = (state_15822[(8)]);
var inst_15802__$1 = (state_15822[(2)]);
var inst_15803 = (inst_15802__$1 == null);
var inst_15804 = cljs.core.not.call(null,inst_15803);
var state_15822__$1 = (function (){var statearr_15827 = state_15822;
(statearr_15827[(8)] = inst_15802__$1);

return statearr_15827;
})();
if(inst_15804){
var statearr_15828_15848 = state_15822__$1;
(statearr_15828_15848[(1)] = (5));

} else {
var statearr_15829_15849 = state_15822__$1;
(statearr_15829_15849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (6))){
var state_15822__$1 = state_15822;
var statearr_15830_15850 = state_15822__$1;
(statearr_15830_15850[(2)] = null);

(statearr_15830_15850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (3))){
var inst_15819 = (state_15822[(2)]);
var inst_15820 = cljs.core.async.close_BANG_.call(null,out);
var state_15822__$1 = (function (){var statearr_15831 = state_15822;
(statearr_15831[(9)] = inst_15819);

return statearr_15831;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15822__$1,inst_15820);
} else {
if((state_val_15823 === (2))){
var state_15822__$1 = state_15822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15822__$1,(4),ch);
} else {
if((state_val_15823 === (11))){
var inst_15802 = (state_15822[(8)]);
var inst_15811 = (state_15822[(2)]);
var inst_15799 = inst_15802;
var state_15822__$1 = (function (){var statearr_15832 = state_15822;
(statearr_15832[(7)] = inst_15799);

(statearr_15832[(10)] = inst_15811);

return statearr_15832;
})();
var statearr_15833_15851 = state_15822__$1;
(statearr_15833_15851[(2)] = null);

(statearr_15833_15851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (9))){
var inst_15802 = (state_15822[(8)]);
var state_15822__$1 = state_15822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15822__$1,(11),out,inst_15802);
} else {
if((state_val_15823 === (5))){
var inst_15799 = (state_15822[(7)]);
var inst_15802 = (state_15822[(8)]);
var inst_15806 = cljs.core._EQ_.call(null,inst_15802,inst_15799);
var state_15822__$1 = state_15822;
if(inst_15806){
var statearr_15835_15852 = state_15822__$1;
(statearr_15835_15852[(1)] = (8));

} else {
var statearr_15836_15853 = state_15822__$1;
(statearr_15836_15853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (10))){
var inst_15814 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
var statearr_15837_15854 = state_15822__$1;
(statearr_15837_15854[(2)] = inst_15814);

(statearr_15837_15854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (8))){
var inst_15799 = (state_15822[(7)]);
var tmp15834 = inst_15799;
var inst_15799__$1 = tmp15834;
var state_15822__$1 = (function (){var statearr_15838 = state_15822;
(statearr_15838[(7)] = inst_15799__$1);

return statearr_15838;
})();
var statearr_15839_15855 = state_15822__$1;
(statearr_15839_15855[(2)] = null);

(statearr_15839_15855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11897__auto___15845,out))
;
return ((function (switch__11882__auto__,c__11897__auto___15845,out){
return (function() {
var cljs$core$async$state_machine__11883__auto__ = null;
var cljs$core$async$state_machine__11883__auto____0 = (function (){
var statearr_15840 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15840[(0)] = cljs$core$async$state_machine__11883__auto__);

(statearr_15840[(1)] = (1));

return statearr_15840;
});
var cljs$core$async$state_machine__11883__auto____1 = (function (state_15822){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_15822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e15841){if((e15841 instanceof Object)){
var ex__11886__auto__ = e15841;
var statearr_15842_15856 = state_15822;
(statearr_15842_15856[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15857 = state_15822;
state_15822 = G__15857;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$state_machine__11883__auto__ = function(state_15822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11883__auto____1.call(this,state_15822);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11883__auto____0;
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11883__auto____1;
return cljs$core$async$state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto___15845,out))
})();
var state__11899__auto__ = (function (){var statearr_15843 = f__11898__auto__.call(null);
(statearr_15843[(6)] = c__11897__auto___15845);

return statearr_15843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto___15845,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15859 = arguments.length;
switch (G__15859) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11897__auto___15925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto___15925,out){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto___15925,out){
return (function (state_15897){
var state_val_15898 = (state_15897[(1)]);
if((state_val_15898 === (7))){
var inst_15893 = (state_15897[(2)]);
var state_15897__$1 = state_15897;
var statearr_15899_15926 = state_15897__$1;
(statearr_15899_15926[(2)] = inst_15893);

(statearr_15899_15926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15898 === (1))){
var inst_15860 = (new Array(n));
var inst_15861 = inst_15860;
var inst_15862 = (0);
var state_15897__$1 = (function (){var statearr_15900 = state_15897;
(statearr_15900[(7)] = inst_15862);

(statearr_15900[(8)] = inst_15861);

return statearr_15900;
})();
var statearr_15901_15927 = state_15897__$1;
(statearr_15901_15927[(2)] = null);

(statearr_15901_15927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15898 === (4))){
var inst_15865 = (state_15897[(9)]);
var inst_15865__$1 = (state_15897[(2)]);
var inst_15866 = (inst_15865__$1 == null);
var inst_15867 = cljs.core.not.call(null,inst_15866);
var state_15897__$1 = (function (){var statearr_15902 = state_15897;
(statearr_15902[(9)] = inst_15865__$1);

return statearr_15902;
})();
if(inst_15867){
var statearr_15903_15928 = state_15897__$1;
(statearr_15903_15928[(1)] = (5));

} else {
var statearr_15904_15929 = state_15897__$1;
(statearr_15904_15929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15898 === (15))){
var inst_15887 = (state_15897[(2)]);
var state_15897__$1 = state_15897;
var statearr_15905_15930 = state_15897__$1;
(statearr_15905_15930[(2)] = inst_15887);

(statearr_15905_15930[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15898 === (13))){
var state_15897__$1 = state_15897;
var statearr_15906_15931 = state_15897__$1;
(statearr_15906_15931[(2)] = null);

(statearr_15906_15931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15898 === (6))){
var inst_15862 = (state_15897[(7)]);
var inst_15883 = (inst_15862 > (0));
var state_15897__$1 = state_15897;
if(cljs.core.truth_(inst_15883)){
var statearr_15907_15932 = state_15897__$1;
(statearr_15907_15932[(1)] = (12));

} else {
var statearr_15908_15933 = state_15897__$1;
(statearr_15908_15933[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15898 === (3))){
var inst_15895 = (state_15897[(2)]);
var state_15897__$1 = state_15897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15897__$1,inst_15895);
} else {
if((state_val_15898 === (12))){
var inst_15861 = (state_15897[(8)]);
var inst_15885 = cljs.core.vec.call(null,inst_15861);
var state_15897__$1 = state_15897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15897__$1,(15),out,inst_15885);
} else {
if((state_val_15898 === (2))){
var state_15897__$1 = state_15897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15897__$1,(4),ch);
} else {
if((state_val_15898 === (11))){
var inst_15877 = (state_15897[(2)]);
var inst_15878 = (new Array(n));
var inst_15861 = inst_15878;
var inst_15862 = (0);
var state_15897__$1 = (function (){var statearr_15909 = state_15897;
(statearr_15909[(7)] = inst_15862);

(statearr_15909[(8)] = inst_15861);

(statearr_15909[(10)] = inst_15877);

return statearr_15909;
})();
var statearr_15910_15934 = state_15897__$1;
(statearr_15910_15934[(2)] = null);

(statearr_15910_15934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15898 === (9))){
var inst_15861 = (state_15897[(8)]);
var inst_15875 = cljs.core.vec.call(null,inst_15861);
var state_15897__$1 = state_15897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15897__$1,(11),out,inst_15875);
} else {
if((state_val_15898 === (5))){
var inst_15862 = (state_15897[(7)]);
var inst_15861 = (state_15897[(8)]);
var inst_15870 = (state_15897[(11)]);
var inst_15865 = (state_15897[(9)]);
var inst_15869 = (inst_15861[inst_15862] = inst_15865);
var inst_15870__$1 = (inst_15862 + (1));
var inst_15871 = (inst_15870__$1 < n);
var state_15897__$1 = (function (){var statearr_15911 = state_15897;
(statearr_15911[(12)] = inst_15869);

(statearr_15911[(11)] = inst_15870__$1);

return statearr_15911;
})();
if(cljs.core.truth_(inst_15871)){
var statearr_15912_15935 = state_15897__$1;
(statearr_15912_15935[(1)] = (8));

} else {
var statearr_15913_15936 = state_15897__$1;
(statearr_15913_15936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15898 === (14))){
var inst_15890 = (state_15897[(2)]);
var inst_15891 = cljs.core.async.close_BANG_.call(null,out);
var state_15897__$1 = (function (){var statearr_15915 = state_15897;
(statearr_15915[(13)] = inst_15890);

return statearr_15915;
})();
var statearr_15916_15937 = state_15897__$1;
(statearr_15916_15937[(2)] = inst_15891);

(statearr_15916_15937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15898 === (10))){
var inst_15881 = (state_15897[(2)]);
var state_15897__$1 = state_15897;
var statearr_15917_15938 = state_15897__$1;
(statearr_15917_15938[(2)] = inst_15881);

(statearr_15917_15938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15898 === (8))){
var inst_15861 = (state_15897[(8)]);
var inst_15870 = (state_15897[(11)]);
var tmp15914 = inst_15861;
var inst_15861__$1 = tmp15914;
var inst_15862 = inst_15870;
var state_15897__$1 = (function (){var statearr_15918 = state_15897;
(statearr_15918[(7)] = inst_15862);

(statearr_15918[(8)] = inst_15861__$1);

return statearr_15918;
})();
var statearr_15919_15939 = state_15897__$1;
(statearr_15919_15939[(2)] = null);

(statearr_15919_15939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11897__auto___15925,out))
;
return ((function (switch__11882__auto__,c__11897__auto___15925,out){
return (function() {
var cljs$core$async$state_machine__11883__auto__ = null;
var cljs$core$async$state_machine__11883__auto____0 = (function (){
var statearr_15920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15920[(0)] = cljs$core$async$state_machine__11883__auto__);

(statearr_15920[(1)] = (1));

return statearr_15920;
});
var cljs$core$async$state_machine__11883__auto____1 = (function (state_15897){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_15897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e15921){if((e15921 instanceof Object)){
var ex__11886__auto__ = e15921;
var statearr_15922_15940 = state_15897;
(statearr_15922_15940[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15941 = state_15897;
state_15897 = G__15941;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$state_machine__11883__auto__ = function(state_15897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11883__auto____1.call(this,state_15897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11883__auto____0;
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11883__auto____1;
return cljs$core$async$state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto___15925,out))
})();
var state__11899__auto__ = (function (){var statearr_15923 = f__11898__auto__.call(null);
(statearr_15923[(6)] = c__11897__auto___15925);

return statearr_15923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto___15925,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15943 = arguments.length;
switch (G__15943) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11897__auto___16013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11897__auto___16013,out){
return (function (){
var f__11898__auto__ = (function (){var switch__11882__auto__ = ((function (c__11897__auto___16013,out){
return (function (state_15985){
var state_val_15986 = (state_15985[(1)]);
if((state_val_15986 === (7))){
var inst_15981 = (state_15985[(2)]);
var state_15985__$1 = state_15985;
var statearr_15987_16014 = state_15985__$1;
(statearr_15987_16014[(2)] = inst_15981);

(statearr_15987_16014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15986 === (1))){
var inst_15944 = [];
var inst_15945 = inst_15944;
var inst_15946 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15985__$1 = (function (){var statearr_15988 = state_15985;
(statearr_15988[(7)] = inst_15945);

(statearr_15988[(8)] = inst_15946);

return statearr_15988;
})();
var statearr_15989_16015 = state_15985__$1;
(statearr_15989_16015[(2)] = null);

(statearr_15989_16015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15986 === (4))){
var inst_15949 = (state_15985[(9)]);
var inst_15949__$1 = (state_15985[(2)]);
var inst_15950 = (inst_15949__$1 == null);
var inst_15951 = cljs.core.not.call(null,inst_15950);
var state_15985__$1 = (function (){var statearr_15990 = state_15985;
(statearr_15990[(9)] = inst_15949__$1);

return statearr_15990;
})();
if(inst_15951){
var statearr_15991_16016 = state_15985__$1;
(statearr_15991_16016[(1)] = (5));

} else {
var statearr_15992_16017 = state_15985__$1;
(statearr_15992_16017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15986 === (15))){
var inst_15975 = (state_15985[(2)]);
var state_15985__$1 = state_15985;
var statearr_15993_16018 = state_15985__$1;
(statearr_15993_16018[(2)] = inst_15975);

(statearr_15993_16018[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15986 === (13))){
var state_15985__$1 = state_15985;
var statearr_15994_16019 = state_15985__$1;
(statearr_15994_16019[(2)] = null);

(statearr_15994_16019[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15986 === (6))){
var inst_15945 = (state_15985[(7)]);
var inst_15970 = inst_15945.length;
var inst_15971 = (inst_15970 > (0));
var state_15985__$1 = state_15985;
if(cljs.core.truth_(inst_15971)){
var statearr_15995_16020 = state_15985__$1;
(statearr_15995_16020[(1)] = (12));

} else {
var statearr_15996_16021 = state_15985__$1;
(statearr_15996_16021[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15986 === (3))){
var inst_15983 = (state_15985[(2)]);
var state_15985__$1 = state_15985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15985__$1,inst_15983);
} else {
if((state_val_15986 === (12))){
var inst_15945 = (state_15985[(7)]);
var inst_15973 = cljs.core.vec.call(null,inst_15945);
var state_15985__$1 = state_15985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15985__$1,(15),out,inst_15973);
} else {
if((state_val_15986 === (2))){
var state_15985__$1 = state_15985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15985__$1,(4),ch);
} else {
if((state_val_15986 === (11))){
var inst_15953 = (state_15985[(10)]);
var inst_15949 = (state_15985[(9)]);
var inst_15963 = (state_15985[(2)]);
var inst_15964 = [];
var inst_15965 = inst_15964.push(inst_15949);
var inst_15945 = inst_15964;
var inst_15946 = inst_15953;
var state_15985__$1 = (function (){var statearr_15997 = state_15985;
(statearr_15997[(11)] = inst_15963);

(statearr_15997[(7)] = inst_15945);

(statearr_15997[(8)] = inst_15946);

(statearr_15997[(12)] = inst_15965);

return statearr_15997;
})();
var statearr_15998_16022 = state_15985__$1;
(statearr_15998_16022[(2)] = null);

(statearr_15998_16022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15986 === (9))){
var inst_15945 = (state_15985[(7)]);
var inst_15961 = cljs.core.vec.call(null,inst_15945);
var state_15985__$1 = state_15985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15985__$1,(11),out,inst_15961);
} else {
if((state_val_15986 === (5))){
var inst_15953 = (state_15985[(10)]);
var inst_15946 = (state_15985[(8)]);
var inst_15949 = (state_15985[(9)]);
var inst_15953__$1 = f.call(null,inst_15949);
var inst_15954 = cljs.core._EQ_.call(null,inst_15953__$1,inst_15946);
var inst_15955 = cljs.core.keyword_identical_QMARK_.call(null,inst_15946,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15956 = ((inst_15954) || (inst_15955));
var state_15985__$1 = (function (){var statearr_15999 = state_15985;
(statearr_15999[(10)] = inst_15953__$1);

return statearr_15999;
})();
if(cljs.core.truth_(inst_15956)){
var statearr_16000_16023 = state_15985__$1;
(statearr_16000_16023[(1)] = (8));

} else {
var statearr_16001_16024 = state_15985__$1;
(statearr_16001_16024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15986 === (14))){
var inst_15978 = (state_15985[(2)]);
var inst_15979 = cljs.core.async.close_BANG_.call(null,out);
var state_15985__$1 = (function (){var statearr_16003 = state_15985;
(statearr_16003[(13)] = inst_15978);

return statearr_16003;
})();
var statearr_16004_16025 = state_15985__$1;
(statearr_16004_16025[(2)] = inst_15979);

(statearr_16004_16025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15986 === (10))){
var inst_15968 = (state_15985[(2)]);
var state_15985__$1 = state_15985;
var statearr_16005_16026 = state_15985__$1;
(statearr_16005_16026[(2)] = inst_15968);

(statearr_16005_16026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15986 === (8))){
var inst_15953 = (state_15985[(10)]);
var inst_15945 = (state_15985[(7)]);
var inst_15949 = (state_15985[(9)]);
var inst_15958 = inst_15945.push(inst_15949);
var tmp16002 = inst_15945;
var inst_15945__$1 = tmp16002;
var inst_15946 = inst_15953;
var state_15985__$1 = (function (){var statearr_16006 = state_15985;
(statearr_16006[(14)] = inst_15958);

(statearr_16006[(7)] = inst_15945__$1);

(statearr_16006[(8)] = inst_15946);

return statearr_16006;
})();
var statearr_16007_16027 = state_15985__$1;
(statearr_16007_16027[(2)] = null);

(statearr_16007_16027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11897__auto___16013,out))
;
return ((function (switch__11882__auto__,c__11897__auto___16013,out){
return (function() {
var cljs$core$async$state_machine__11883__auto__ = null;
var cljs$core$async$state_machine__11883__auto____0 = (function (){
var statearr_16008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16008[(0)] = cljs$core$async$state_machine__11883__auto__);

(statearr_16008[(1)] = (1));

return statearr_16008;
});
var cljs$core$async$state_machine__11883__auto____1 = (function (state_15985){
while(true){
var ret_value__11884__auto__ = (function (){try{while(true){
var result__11885__auto__ = switch__11882__auto__.call(null,state_15985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11885__auto__;
}
break;
}
}catch (e16009){if((e16009 instanceof Object)){
var ex__11886__auto__ = e16009;
var statearr_16010_16028 = state_15985;
(statearr_16010_16028[(5)] = ex__11886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16029 = state_15985;
state_15985 = G__16029;
continue;
} else {
return ret_value__11884__auto__;
}
break;
}
});
cljs$core$async$state_machine__11883__auto__ = function(state_15985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11883__auto____1.call(this,state_15985);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11883__auto____0;
cljs$core$async$state_machine__11883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11883__auto____1;
return cljs$core$async$state_machine__11883__auto__;
})()
;})(switch__11882__auto__,c__11897__auto___16013,out))
})();
var state__11899__auto__ = (function (){var statearr_16011 = f__11898__auto__.call(null);
(statearr_16011[(6)] = c__11897__auto___16013);

return statearr_16011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11899__auto__);
});})(c__11897__auto___16013,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
