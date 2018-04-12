// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14762 = arguments.length;
switch (G__14762) {
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
if(typeof cljs.core.async.t_cljs$core$async14763 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14763 = (function (f,blockable,meta14764){
this.f = f;
this.blockable = blockable;
this.meta14764 = meta14764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14765,meta14764__$1){
var self__ = this;
var _14765__$1 = this;
return (new cljs.core.async.t_cljs$core$async14763(self__.f,self__.blockable,meta14764__$1));
});

cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14765){
var self__ = this;
var _14765__$1 = this;
return self__.meta14764;
});

cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14764","meta14764",31258136,null)], null);
});

cljs.core.async.t_cljs$core$async14763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14763";

cljs.core.async.t_cljs$core$async14763.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async14763");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14763.
 */
cljs.core.async.__GT_t_cljs$core$async14763 = (function cljs$core$async$__GT_t_cljs$core$async14763(f__$1,blockable__$1,meta14764){
return (new cljs.core.async.t_cljs$core$async14763(f__$1,blockable__$1,meta14764));
});

}

return (new cljs.core.async.t_cljs$core$async14763(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14769 = arguments.length;
switch (G__14769) {
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
var G__14772 = arguments.length;
switch (G__14772) {
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
var G__14775 = arguments.length;
switch (G__14775) {
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
var val_14777 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14777);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14777,ret){
return (function (){
return fn1.call(null,val_14777);
});})(val_14777,ret))
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
var G__14779 = arguments.length;
switch (G__14779) {
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
var n__4376__auto___14781 = n;
var x_14782 = (0);
while(true){
if((x_14782 < n__4376__auto___14781)){
(a[x_14782] = (0));

var G__14783 = (x_14782 + (1));
x_14782 = G__14783;
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

var G__14784 = (i + (1));
i = G__14784;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async14785 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14785 = (function (flag,meta14786){
this.flag = flag;
this.meta14786 = meta14786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14787,meta14786__$1){
var self__ = this;
var _14787__$1 = this;
return (new cljs.core.async.t_cljs$core$async14785(self__.flag,meta14786__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14787){
var self__ = this;
var _14787__$1 = this;
return self__.meta14786;
});})(flag))
;

cljs.core.async.t_cljs$core$async14785.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14785.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async14785.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14785.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14785.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14786","meta14786",-803879562,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14785.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14785";

cljs.core.async.t_cljs$core$async14785.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async14785");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14785.
 */
cljs.core.async.__GT_t_cljs$core$async14785 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14785(flag__$1,meta14786){
return (new cljs.core.async.t_cljs$core$async14785(flag__$1,meta14786));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14785(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14788 = (function (flag,cb,meta14789){
this.flag = flag;
this.cb = cb;
this.meta14789 = meta14789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14790,meta14789__$1){
var self__ = this;
var _14790__$1 = this;
return (new cljs.core.async.t_cljs$core$async14788(self__.flag,self__.cb,meta14789__$1));
});

cljs.core.async.t_cljs$core$async14788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14790){
var self__ = this;
var _14790__$1 = this;
return self__.meta14789;
});

cljs.core.async.t_cljs$core$async14788.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async14788.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14789","meta14789",631951954,null)], null);
});

cljs.core.async.t_cljs$core$async14788.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14788";

cljs.core.async.t_cljs$core$async14788.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async14788");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14788.
 */
cljs.core.async.__GT_t_cljs$core$async14788 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14788(flag__$1,cb__$1,meta14789){
return (new cljs.core.async.t_cljs$core$async14788(flag__$1,cb__$1,meta14789));
});

}

return (new cljs.core.async.t_cljs$core$async14788(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__14791_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14791_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14792_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14792_SHARP_,port], null));
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
var G__14793 = (i + (1));
i = G__14793;
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
var len__4499__auto___14799 = arguments.length;
var i__4500__auto___14800 = (0);
while(true){
if((i__4500__auto___14800 < len__4499__auto___14799)){
args__4502__auto__.push((arguments[i__4500__auto___14800]));

var G__14801 = (i__4500__auto___14800 + (1));
i__4500__auto___14800 = G__14801;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14796){
var map__14797 = p__14796;
var map__14797__$1 = ((((!((map__14797 == null)))?(((((map__14797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14797):map__14797);
var opts = map__14797__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14794){
var G__14795 = cljs.core.first.call(null,seq14794);
var seq14794__$1 = cljs.core.next.call(null,seq14794);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14795,seq14794__$1);
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
var G__14803 = arguments.length;
switch (G__14803) {
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
var c__12532__auto___14849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto___14849){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto___14849){
return (function (state_14827){
var state_val_14828 = (state_14827[(1)]);
if((state_val_14828 === (7))){
var inst_14823 = (state_14827[(2)]);
var state_14827__$1 = state_14827;
var statearr_14829_14850 = state_14827__$1;
(statearr_14829_14850[(2)] = inst_14823);

(statearr_14829_14850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14828 === (1))){
var state_14827__$1 = state_14827;
var statearr_14830_14851 = state_14827__$1;
(statearr_14830_14851[(2)] = null);

(statearr_14830_14851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14828 === (4))){
var inst_14806 = (state_14827[(7)]);
var inst_14806__$1 = (state_14827[(2)]);
var inst_14807 = (inst_14806__$1 == null);
var state_14827__$1 = (function (){var statearr_14831 = state_14827;
(statearr_14831[(7)] = inst_14806__$1);

return statearr_14831;
})();
if(cljs.core.truth_(inst_14807)){
var statearr_14832_14852 = state_14827__$1;
(statearr_14832_14852[(1)] = (5));

} else {
var statearr_14833_14853 = state_14827__$1;
(statearr_14833_14853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14828 === (13))){
var state_14827__$1 = state_14827;
var statearr_14834_14854 = state_14827__$1;
(statearr_14834_14854[(2)] = null);

(statearr_14834_14854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14828 === (6))){
var inst_14806 = (state_14827[(7)]);
var state_14827__$1 = state_14827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14827__$1,(11),to,inst_14806);
} else {
if((state_val_14828 === (3))){
var inst_14825 = (state_14827[(2)]);
var state_14827__$1 = state_14827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14827__$1,inst_14825);
} else {
if((state_val_14828 === (12))){
var state_14827__$1 = state_14827;
var statearr_14835_14855 = state_14827__$1;
(statearr_14835_14855[(2)] = null);

(statearr_14835_14855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14828 === (2))){
var state_14827__$1 = state_14827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14827__$1,(4),from);
} else {
if((state_val_14828 === (11))){
var inst_14816 = (state_14827[(2)]);
var state_14827__$1 = state_14827;
if(cljs.core.truth_(inst_14816)){
var statearr_14836_14856 = state_14827__$1;
(statearr_14836_14856[(1)] = (12));

} else {
var statearr_14837_14857 = state_14827__$1;
(statearr_14837_14857[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14828 === (9))){
var state_14827__$1 = state_14827;
var statearr_14838_14858 = state_14827__$1;
(statearr_14838_14858[(2)] = null);

(statearr_14838_14858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14828 === (5))){
var state_14827__$1 = state_14827;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14839_14859 = state_14827__$1;
(statearr_14839_14859[(1)] = (8));

} else {
var statearr_14840_14860 = state_14827__$1;
(statearr_14840_14860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14828 === (14))){
var inst_14821 = (state_14827[(2)]);
var state_14827__$1 = state_14827;
var statearr_14841_14861 = state_14827__$1;
(statearr_14841_14861[(2)] = inst_14821);

(statearr_14841_14861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14828 === (10))){
var inst_14813 = (state_14827[(2)]);
var state_14827__$1 = state_14827;
var statearr_14842_14862 = state_14827__$1;
(statearr_14842_14862[(2)] = inst_14813);

(statearr_14842_14862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14828 === (8))){
var inst_14810 = cljs.core.async.close_BANG_.call(null,to);
var state_14827__$1 = state_14827;
var statearr_14843_14863 = state_14827__$1;
(statearr_14843_14863[(2)] = inst_14810);

(statearr_14843_14863[(1)] = (10));


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
});})(c__12532__auto___14849))
;
return ((function (switch__12517__auto__,c__12532__auto___14849){
return (function() {
var cljs$core$async$state_machine__12518__auto__ = null;
var cljs$core$async$state_machine__12518__auto____0 = (function (){
var statearr_14844 = [null,null,null,null,null,null,null,null];
(statearr_14844[(0)] = cljs$core$async$state_machine__12518__auto__);

(statearr_14844[(1)] = (1));

return statearr_14844;
});
var cljs$core$async$state_machine__12518__auto____1 = (function (state_14827){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_14827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e14845){if((e14845 instanceof Object)){
var ex__12521__auto__ = e14845;
var statearr_14846_14864 = state_14827;
(statearr_14846_14864[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14865 = state_14827;
state_14827 = G__14865;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$state_machine__12518__auto__ = function(state_14827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12518__auto____1.call(this,state_14827);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12518__auto____0;
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12518__auto____1;
return cljs$core$async$state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto___14849))
})();
var state__12534__auto__ = (function (){var statearr_14847 = f__12533__auto__.call(null);
(statearr_14847[(6)] = c__12532__auto___14849);

return statearr_14847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto___14849))
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
return (function (p__14866){
var vec__14867 = p__14866;
var v = cljs.core.nth.call(null,vec__14867,(0),null);
var p = cljs.core.nth.call(null,vec__14867,(1),null);
var job = vec__14867;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12532__auto___15038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto___15038,res,vec__14867,v,p,job,jobs,results){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto___15038,res,vec__14867,v,p,job,jobs,results){
return (function (state_14874){
var state_val_14875 = (state_14874[(1)]);
if((state_val_14875 === (1))){
var state_14874__$1 = state_14874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14874__$1,(2),res,v);
} else {
if((state_val_14875 === (2))){
var inst_14871 = (state_14874[(2)]);
var inst_14872 = cljs.core.async.close_BANG_.call(null,res);
var state_14874__$1 = (function (){var statearr_14876 = state_14874;
(statearr_14876[(7)] = inst_14871);

return statearr_14876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14874__$1,inst_14872);
} else {
return null;
}
}
});})(c__12532__auto___15038,res,vec__14867,v,p,job,jobs,results))
;
return ((function (switch__12517__auto__,c__12532__auto___15038,res,vec__14867,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____0 = (function (){
var statearr_14877 = [null,null,null,null,null,null,null,null];
(statearr_14877[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__);

(statearr_14877[(1)] = (1));

return statearr_14877;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____1 = (function (state_14874){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_14874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e14878){if((e14878 instanceof Object)){
var ex__12521__auto__ = e14878;
var statearr_14879_15039 = state_14874;
(statearr_14879_15039[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15040 = state_14874;
state_14874 = G__15040;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__ = function(state_14874){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____1.call(this,state_14874);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto___15038,res,vec__14867,v,p,job,jobs,results))
})();
var state__12534__auto__ = (function (){var statearr_14880 = f__12533__auto__.call(null);
(statearr_14880[(6)] = c__12532__auto___15038);

return statearr_14880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto___15038,res,vec__14867,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14881){
var vec__14882 = p__14881;
var v = cljs.core.nth.call(null,vec__14882,(0),null);
var p = cljs.core.nth.call(null,vec__14882,(1),null);
var job = vec__14882;
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
var n__4376__auto___15041 = n;
var __15042 = (0);
while(true){
if((__15042 < n__4376__auto___15041)){
var G__14885_15043 = type;
var G__14885_15044__$1 = (((G__14885_15043 instanceof cljs.core.Keyword))?G__14885_15043.fqn:null);
switch (G__14885_15044__$1) {
case "compute":
var c__12532__auto___15046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15042,c__12532__auto___15046,G__14885_15043,G__14885_15044__$1,n__4376__auto___15041,jobs,results,process,async){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (__15042,c__12532__auto___15046,G__14885_15043,G__14885_15044__$1,n__4376__auto___15041,jobs,results,process,async){
return (function (state_14898){
var state_val_14899 = (state_14898[(1)]);
if((state_val_14899 === (1))){
var state_14898__$1 = state_14898;
var statearr_14900_15047 = state_14898__$1;
(statearr_14900_15047[(2)] = null);

(statearr_14900_15047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14899 === (2))){
var state_14898__$1 = state_14898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14898__$1,(4),jobs);
} else {
if((state_val_14899 === (3))){
var inst_14896 = (state_14898[(2)]);
var state_14898__$1 = state_14898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14898__$1,inst_14896);
} else {
if((state_val_14899 === (4))){
var inst_14888 = (state_14898[(2)]);
var inst_14889 = process.call(null,inst_14888);
var state_14898__$1 = state_14898;
if(cljs.core.truth_(inst_14889)){
var statearr_14901_15048 = state_14898__$1;
(statearr_14901_15048[(1)] = (5));

} else {
var statearr_14902_15049 = state_14898__$1;
(statearr_14902_15049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14899 === (5))){
var state_14898__$1 = state_14898;
var statearr_14903_15050 = state_14898__$1;
(statearr_14903_15050[(2)] = null);

(statearr_14903_15050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14899 === (6))){
var state_14898__$1 = state_14898;
var statearr_14904_15051 = state_14898__$1;
(statearr_14904_15051[(2)] = null);

(statearr_14904_15051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14899 === (7))){
var inst_14894 = (state_14898[(2)]);
var state_14898__$1 = state_14898;
var statearr_14905_15052 = state_14898__$1;
(statearr_14905_15052[(2)] = inst_14894);

(statearr_14905_15052[(1)] = (3));


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
});})(__15042,c__12532__auto___15046,G__14885_15043,G__14885_15044__$1,n__4376__auto___15041,jobs,results,process,async))
;
return ((function (__15042,switch__12517__auto__,c__12532__auto___15046,G__14885_15043,G__14885_15044__$1,n__4376__auto___15041,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____0 = (function (){
var statearr_14906 = [null,null,null,null,null,null,null];
(statearr_14906[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__);

(statearr_14906[(1)] = (1));

return statearr_14906;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____1 = (function (state_14898){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_14898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e14907){if((e14907 instanceof Object)){
var ex__12521__auto__ = e14907;
var statearr_14908_15053 = state_14898;
(statearr_14908_15053[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15054 = state_14898;
state_14898 = G__15054;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__ = function(state_14898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____1.call(this,state_14898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__;
})()
;})(__15042,switch__12517__auto__,c__12532__auto___15046,G__14885_15043,G__14885_15044__$1,n__4376__auto___15041,jobs,results,process,async))
})();
var state__12534__auto__ = (function (){var statearr_14909 = f__12533__auto__.call(null);
(statearr_14909[(6)] = c__12532__auto___15046);

return statearr_14909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(__15042,c__12532__auto___15046,G__14885_15043,G__14885_15044__$1,n__4376__auto___15041,jobs,results,process,async))
);


break;
case "async":
var c__12532__auto___15055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15042,c__12532__auto___15055,G__14885_15043,G__14885_15044__$1,n__4376__auto___15041,jobs,results,process,async){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (__15042,c__12532__auto___15055,G__14885_15043,G__14885_15044__$1,n__4376__auto___15041,jobs,results,process,async){
return (function (state_14922){
var state_val_14923 = (state_14922[(1)]);
if((state_val_14923 === (1))){
var state_14922__$1 = state_14922;
var statearr_14924_15056 = state_14922__$1;
(statearr_14924_15056[(2)] = null);

(statearr_14924_15056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14923 === (2))){
var state_14922__$1 = state_14922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14922__$1,(4),jobs);
} else {
if((state_val_14923 === (3))){
var inst_14920 = (state_14922[(2)]);
var state_14922__$1 = state_14922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14922__$1,inst_14920);
} else {
if((state_val_14923 === (4))){
var inst_14912 = (state_14922[(2)]);
var inst_14913 = async.call(null,inst_14912);
var state_14922__$1 = state_14922;
if(cljs.core.truth_(inst_14913)){
var statearr_14925_15057 = state_14922__$1;
(statearr_14925_15057[(1)] = (5));

} else {
var statearr_14926_15058 = state_14922__$1;
(statearr_14926_15058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14923 === (5))){
var state_14922__$1 = state_14922;
var statearr_14927_15059 = state_14922__$1;
(statearr_14927_15059[(2)] = null);

(statearr_14927_15059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14923 === (6))){
var state_14922__$1 = state_14922;
var statearr_14928_15060 = state_14922__$1;
(statearr_14928_15060[(2)] = null);

(statearr_14928_15060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14923 === (7))){
var inst_14918 = (state_14922[(2)]);
var state_14922__$1 = state_14922;
var statearr_14929_15061 = state_14922__$1;
(statearr_14929_15061[(2)] = inst_14918);

(statearr_14929_15061[(1)] = (3));


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
});})(__15042,c__12532__auto___15055,G__14885_15043,G__14885_15044__$1,n__4376__auto___15041,jobs,results,process,async))
;
return ((function (__15042,switch__12517__auto__,c__12532__auto___15055,G__14885_15043,G__14885_15044__$1,n__4376__auto___15041,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____0 = (function (){
var statearr_14930 = [null,null,null,null,null,null,null];
(statearr_14930[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__);

(statearr_14930[(1)] = (1));

return statearr_14930;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____1 = (function (state_14922){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_14922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e14931){if((e14931 instanceof Object)){
var ex__12521__auto__ = e14931;
var statearr_14932_15062 = state_14922;
(statearr_14932_15062[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15063 = state_14922;
state_14922 = G__15063;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__ = function(state_14922){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____1.call(this,state_14922);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__;
})()
;})(__15042,switch__12517__auto__,c__12532__auto___15055,G__14885_15043,G__14885_15044__$1,n__4376__auto___15041,jobs,results,process,async))
})();
var state__12534__auto__ = (function (){var statearr_14933 = f__12533__auto__.call(null);
(statearr_14933[(6)] = c__12532__auto___15055);

return statearr_14933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(__15042,c__12532__auto___15055,G__14885_15043,G__14885_15044__$1,n__4376__auto___15041,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14885_15044__$1)].join('')));

}

var G__15064 = (__15042 + (1));
__15042 = G__15064;
continue;
} else {
}
break;
}

var c__12532__auto___15065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto___15065,jobs,results,process,async){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto___15065,jobs,results,process,async){
return (function (state_14955){
var state_val_14956 = (state_14955[(1)]);
if((state_val_14956 === (1))){
var state_14955__$1 = state_14955;
var statearr_14957_15066 = state_14955__$1;
(statearr_14957_15066[(2)] = null);

(statearr_14957_15066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14956 === (2))){
var state_14955__$1 = state_14955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14955__$1,(4),from);
} else {
if((state_val_14956 === (3))){
var inst_14953 = (state_14955[(2)]);
var state_14955__$1 = state_14955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14955__$1,inst_14953);
} else {
if((state_val_14956 === (4))){
var inst_14936 = (state_14955[(7)]);
var inst_14936__$1 = (state_14955[(2)]);
var inst_14937 = (inst_14936__$1 == null);
var state_14955__$1 = (function (){var statearr_14958 = state_14955;
(statearr_14958[(7)] = inst_14936__$1);

return statearr_14958;
})();
if(cljs.core.truth_(inst_14937)){
var statearr_14959_15067 = state_14955__$1;
(statearr_14959_15067[(1)] = (5));

} else {
var statearr_14960_15068 = state_14955__$1;
(statearr_14960_15068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14956 === (5))){
var inst_14939 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14955__$1 = state_14955;
var statearr_14961_15069 = state_14955__$1;
(statearr_14961_15069[(2)] = inst_14939);

(statearr_14961_15069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14956 === (6))){
var inst_14936 = (state_14955[(7)]);
var inst_14941 = (state_14955[(8)]);
var inst_14941__$1 = cljs.core.async.chan.call(null,(1));
var inst_14942 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14943 = [inst_14936,inst_14941__$1];
var inst_14944 = (new cljs.core.PersistentVector(null,2,(5),inst_14942,inst_14943,null));
var state_14955__$1 = (function (){var statearr_14962 = state_14955;
(statearr_14962[(8)] = inst_14941__$1);

return statearr_14962;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14955__$1,(8),jobs,inst_14944);
} else {
if((state_val_14956 === (7))){
var inst_14951 = (state_14955[(2)]);
var state_14955__$1 = state_14955;
var statearr_14963_15070 = state_14955__$1;
(statearr_14963_15070[(2)] = inst_14951);

(statearr_14963_15070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14956 === (8))){
var inst_14941 = (state_14955[(8)]);
var inst_14946 = (state_14955[(2)]);
var state_14955__$1 = (function (){var statearr_14964 = state_14955;
(statearr_14964[(9)] = inst_14946);

return statearr_14964;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14955__$1,(9),results,inst_14941);
} else {
if((state_val_14956 === (9))){
var inst_14948 = (state_14955[(2)]);
var state_14955__$1 = (function (){var statearr_14965 = state_14955;
(statearr_14965[(10)] = inst_14948);

return statearr_14965;
})();
var statearr_14966_15071 = state_14955__$1;
(statearr_14966_15071[(2)] = null);

(statearr_14966_15071[(1)] = (2));


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
});})(c__12532__auto___15065,jobs,results,process,async))
;
return ((function (switch__12517__auto__,c__12532__auto___15065,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____0 = (function (){
var statearr_14967 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__);

(statearr_14967[(1)] = (1));

return statearr_14967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____1 = (function (state_14955){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_14955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e14968){if((e14968 instanceof Object)){
var ex__12521__auto__ = e14968;
var statearr_14969_15072 = state_14955;
(statearr_14969_15072[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15073 = state_14955;
state_14955 = G__15073;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__ = function(state_14955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____1.call(this,state_14955);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto___15065,jobs,results,process,async))
})();
var state__12534__auto__ = (function (){var statearr_14970 = f__12533__auto__.call(null);
(statearr_14970[(6)] = c__12532__auto___15065);

return statearr_14970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto___15065,jobs,results,process,async))
);


var c__12532__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto__,jobs,results,process,async){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto__,jobs,results,process,async){
return (function (state_15008){
var state_val_15009 = (state_15008[(1)]);
if((state_val_15009 === (7))){
var inst_15004 = (state_15008[(2)]);
var state_15008__$1 = state_15008;
var statearr_15010_15074 = state_15008__$1;
(statearr_15010_15074[(2)] = inst_15004);

(statearr_15010_15074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (20))){
var state_15008__$1 = state_15008;
var statearr_15011_15075 = state_15008__$1;
(statearr_15011_15075[(2)] = null);

(statearr_15011_15075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (1))){
var state_15008__$1 = state_15008;
var statearr_15012_15076 = state_15008__$1;
(statearr_15012_15076[(2)] = null);

(statearr_15012_15076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (4))){
var inst_14973 = (state_15008[(7)]);
var inst_14973__$1 = (state_15008[(2)]);
var inst_14974 = (inst_14973__$1 == null);
var state_15008__$1 = (function (){var statearr_15013 = state_15008;
(statearr_15013[(7)] = inst_14973__$1);

return statearr_15013;
})();
if(cljs.core.truth_(inst_14974)){
var statearr_15014_15077 = state_15008__$1;
(statearr_15014_15077[(1)] = (5));

} else {
var statearr_15015_15078 = state_15008__$1;
(statearr_15015_15078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (15))){
var inst_14986 = (state_15008[(8)]);
var state_15008__$1 = state_15008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15008__$1,(18),to,inst_14986);
} else {
if((state_val_15009 === (21))){
var inst_14999 = (state_15008[(2)]);
var state_15008__$1 = state_15008;
var statearr_15016_15079 = state_15008__$1;
(statearr_15016_15079[(2)] = inst_14999);

(statearr_15016_15079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (13))){
var inst_15001 = (state_15008[(2)]);
var state_15008__$1 = (function (){var statearr_15017 = state_15008;
(statearr_15017[(9)] = inst_15001);

return statearr_15017;
})();
var statearr_15018_15080 = state_15008__$1;
(statearr_15018_15080[(2)] = null);

(statearr_15018_15080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (6))){
var inst_14973 = (state_15008[(7)]);
var state_15008__$1 = state_15008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15008__$1,(11),inst_14973);
} else {
if((state_val_15009 === (17))){
var inst_14994 = (state_15008[(2)]);
var state_15008__$1 = state_15008;
if(cljs.core.truth_(inst_14994)){
var statearr_15019_15081 = state_15008__$1;
(statearr_15019_15081[(1)] = (19));

} else {
var statearr_15020_15082 = state_15008__$1;
(statearr_15020_15082[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (3))){
var inst_15006 = (state_15008[(2)]);
var state_15008__$1 = state_15008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15008__$1,inst_15006);
} else {
if((state_val_15009 === (12))){
var inst_14983 = (state_15008[(10)]);
var state_15008__$1 = state_15008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15008__$1,(14),inst_14983);
} else {
if((state_val_15009 === (2))){
var state_15008__$1 = state_15008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15008__$1,(4),results);
} else {
if((state_val_15009 === (19))){
var state_15008__$1 = state_15008;
var statearr_15021_15083 = state_15008__$1;
(statearr_15021_15083[(2)] = null);

(statearr_15021_15083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (11))){
var inst_14983 = (state_15008[(2)]);
var state_15008__$1 = (function (){var statearr_15022 = state_15008;
(statearr_15022[(10)] = inst_14983);

return statearr_15022;
})();
var statearr_15023_15084 = state_15008__$1;
(statearr_15023_15084[(2)] = null);

(statearr_15023_15084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (9))){
var state_15008__$1 = state_15008;
var statearr_15024_15085 = state_15008__$1;
(statearr_15024_15085[(2)] = null);

(statearr_15024_15085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (5))){
var state_15008__$1 = state_15008;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15025_15086 = state_15008__$1;
(statearr_15025_15086[(1)] = (8));

} else {
var statearr_15026_15087 = state_15008__$1;
(statearr_15026_15087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (14))){
var inst_14988 = (state_15008[(11)]);
var inst_14986 = (state_15008[(8)]);
var inst_14986__$1 = (state_15008[(2)]);
var inst_14987 = (inst_14986__$1 == null);
var inst_14988__$1 = cljs.core.not.call(null,inst_14987);
var state_15008__$1 = (function (){var statearr_15027 = state_15008;
(statearr_15027[(11)] = inst_14988__$1);

(statearr_15027[(8)] = inst_14986__$1);

return statearr_15027;
})();
if(inst_14988__$1){
var statearr_15028_15088 = state_15008__$1;
(statearr_15028_15088[(1)] = (15));

} else {
var statearr_15029_15089 = state_15008__$1;
(statearr_15029_15089[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (16))){
var inst_14988 = (state_15008[(11)]);
var state_15008__$1 = state_15008;
var statearr_15030_15090 = state_15008__$1;
(statearr_15030_15090[(2)] = inst_14988);

(statearr_15030_15090[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (10))){
var inst_14980 = (state_15008[(2)]);
var state_15008__$1 = state_15008;
var statearr_15031_15091 = state_15008__$1;
(statearr_15031_15091[(2)] = inst_14980);

(statearr_15031_15091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (18))){
var inst_14991 = (state_15008[(2)]);
var state_15008__$1 = state_15008;
var statearr_15032_15092 = state_15008__$1;
(statearr_15032_15092[(2)] = inst_14991);

(statearr_15032_15092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (8))){
var inst_14977 = cljs.core.async.close_BANG_.call(null,to);
var state_15008__$1 = state_15008;
var statearr_15033_15093 = state_15008__$1;
(statearr_15033_15093[(2)] = inst_14977);

(statearr_15033_15093[(1)] = (10));


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
});})(c__12532__auto__,jobs,results,process,async))
;
return ((function (switch__12517__auto__,c__12532__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____0 = (function (){
var statearr_15034 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__);

(statearr_15034[(1)] = (1));

return statearr_15034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____1 = (function (state_15008){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_15008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e15035){if((e15035 instanceof Object)){
var ex__12521__auto__ = e15035;
var statearr_15036_15094 = state_15008;
(statearr_15036_15094[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15095 = state_15008;
state_15008 = G__15095;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__ = function(state_15008){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____1.call(this,state_15008);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12518__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto__,jobs,results,process,async))
})();
var state__12534__auto__ = (function (){var statearr_15037 = f__12533__auto__.call(null);
(statearr_15037[(6)] = c__12532__auto__);

return statearr_15037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto__,jobs,results,process,async))
);

return c__12532__auto__;
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
var G__15097 = arguments.length;
switch (G__15097) {
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
var G__15100 = arguments.length;
switch (G__15100) {
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
var G__15103 = arguments.length;
switch (G__15103) {
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
var c__12532__auto___15152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto___15152,tc,fc){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto___15152,tc,fc){
return (function (state_15129){
var state_val_15130 = (state_15129[(1)]);
if((state_val_15130 === (7))){
var inst_15125 = (state_15129[(2)]);
var state_15129__$1 = state_15129;
var statearr_15131_15153 = state_15129__$1;
(statearr_15131_15153[(2)] = inst_15125);

(statearr_15131_15153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (1))){
var state_15129__$1 = state_15129;
var statearr_15132_15154 = state_15129__$1;
(statearr_15132_15154[(2)] = null);

(statearr_15132_15154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (4))){
var inst_15106 = (state_15129[(7)]);
var inst_15106__$1 = (state_15129[(2)]);
var inst_15107 = (inst_15106__$1 == null);
var state_15129__$1 = (function (){var statearr_15133 = state_15129;
(statearr_15133[(7)] = inst_15106__$1);

return statearr_15133;
})();
if(cljs.core.truth_(inst_15107)){
var statearr_15134_15155 = state_15129__$1;
(statearr_15134_15155[(1)] = (5));

} else {
var statearr_15135_15156 = state_15129__$1;
(statearr_15135_15156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (13))){
var state_15129__$1 = state_15129;
var statearr_15136_15157 = state_15129__$1;
(statearr_15136_15157[(2)] = null);

(statearr_15136_15157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (6))){
var inst_15106 = (state_15129[(7)]);
var inst_15112 = p.call(null,inst_15106);
var state_15129__$1 = state_15129;
if(cljs.core.truth_(inst_15112)){
var statearr_15137_15158 = state_15129__$1;
(statearr_15137_15158[(1)] = (9));

} else {
var statearr_15138_15159 = state_15129__$1;
(statearr_15138_15159[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (3))){
var inst_15127 = (state_15129[(2)]);
var state_15129__$1 = state_15129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15129__$1,inst_15127);
} else {
if((state_val_15130 === (12))){
var state_15129__$1 = state_15129;
var statearr_15139_15160 = state_15129__$1;
(statearr_15139_15160[(2)] = null);

(statearr_15139_15160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (2))){
var state_15129__$1 = state_15129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15129__$1,(4),ch);
} else {
if((state_val_15130 === (11))){
var inst_15106 = (state_15129[(7)]);
var inst_15116 = (state_15129[(2)]);
var state_15129__$1 = state_15129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15129__$1,(8),inst_15116,inst_15106);
} else {
if((state_val_15130 === (9))){
var state_15129__$1 = state_15129;
var statearr_15140_15161 = state_15129__$1;
(statearr_15140_15161[(2)] = tc);

(statearr_15140_15161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (5))){
var inst_15109 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15110 = cljs.core.async.close_BANG_.call(null,fc);
var state_15129__$1 = (function (){var statearr_15141 = state_15129;
(statearr_15141[(8)] = inst_15109);

return statearr_15141;
})();
var statearr_15142_15162 = state_15129__$1;
(statearr_15142_15162[(2)] = inst_15110);

(statearr_15142_15162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (14))){
var inst_15123 = (state_15129[(2)]);
var state_15129__$1 = state_15129;
var statearr_15143_15163 = state_15129__$1;
(statearr_15143_15163[(2)] = inst_15123);

(statearr_15143_15163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (10))){
var state_15129__$1 = state_15129;
var statearr_15144_15164 = state_15129__$1;
(statearr_15144_15164[(2)] = fc);

(statearr_15144_15164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15130 === (8))){
var inst_15118 = (state_15129[(2)]);
var state_15129__$1 = state_15129;
if(cljs.core.truth_(inst_15118)){
var statearr_15145_15165 = state_15129__$1;
(statearr_15145_15165[(1)] = (12));

} else {
var statearr_15146_15166 = state_15129__$1;
(statearr_15146_15166[(1)] = (13));

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
});})(c__12532__auto___15152,tc,fc))
;
return ((function (switch__12517__auto__,c__12532__auto___15152,tc,fc){
return (function() {
var cljs$core$async$state_machine__12518__auto__ = null;
var cljs$core$async$state_machine__12518__auto____0 = (function (){
var statearr_15147 = [null,null,null,null,null,null,null,null,null];
(statearr_15147[(0)] = cljs$core$async$state_machine__12518__auto__);

(statearr_15147[(1)] = (1));

return statearr_15147;
});
var cljs$core$async$state_machine__12518__auto____1 = (function (state_15129){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_15129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e15148){if((e15148 instanceof Object)){
var ex__12521__auto__ = e15148;
var statearr_15149_15167 = state_15129;
(statearr_15149_15167[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15168 = state_15129;
state_15129 = G__15168;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$state_machine__12518__auto__ = function(state_15129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12518__auto____1.call(this,state_15129);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12518__auto____0;
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12518__auto____1;
return cljs$core$async$state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto___15152,tc,fc))
})();
var state__12534__auto__ = (function (){var statearr_15150 = f__12533__auto__.call(null);
(statearr_15150[(6)] = c__12532__auto___15152);

return statearr_15150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto___15152,tc,fc))
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
var c__12532__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto__){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto__){
return (function (state_15189){
var state_val_15190 = (state_15189[(1)]);
if((state_val_15190 === (7))){
var inst_15185 = (state_15189[(2)]);
var state_15189__$1 = state_15189;
var statearr_15191_15209 = state_15189__$1;
(statearr_15191_15209[(2)] = inst_15185);

(statearr_15191_15209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15190 === (1))){
var inst_15169 = init;
var state_15189__$1 = (function (){var statearr_15192 = state_15189;
(statearr_15192[(7)] = inst_15169);

return statearr_15192;
})();
var statearr_15193_15210 = state_15189__$1;
(statearr_15193_15210[(2)] = null);

(statearr_15193_15210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15190 === (4))){
var inst_15172 = (state_15189[(8)]);
var inst_15172__$1 = (state_15189[(2)]);
var inst_15173 = (inst_15172__$1 == null);
var state_15189__$1 = (function (){var statearr_15194 = state_15189;
(statearr_15194[(8)] = inst_15172__$1);

return statearr_15194;
})();
if(cljs.core.truth_(inst_15173)){
var statearr_15195_15211 = state_15189__$1;
(statearr_15195_15211[(1)] = (5));

} else {
var statearr_15196_15212 = state_15189__$1;
(statearr_15196_15212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15190 === (6))){
var inst_15169 = (state_15189[(7)]);
var inst_15176 = (state_15189[(9)]);
var inst_15172 = (state_15189[(8)]);
var inst_15176__$1 = f.call(null,inst_15169,inst_15172);
var inst_15177 = cljs.core.reduced_QMARK_.call(null,inst_15176__$1);
var state_15189__$1 = (function (){var statearr_15197 = state_15189;
(statearr_15197[(9)] = inst_15176__$1);

return statearr_15197;
})();
if(inst_15177){
var statearr_15198_15213 = state_15189__$1;
(statearr_15198_15213[(1)] = (8));

} else {
var statearr_15199_15214 = state_15189__$1;
(statearr_15199_15214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15190 === (3))){
var inst_15187 = (state_15189[(2)]);
var state_15189__$1 = state_15189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15189__$1,inst_15187);
} else {
if((state_val_15190 === (2))){
var state_15189__$1 = state_15189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15189__$1,(4),ch);
} else {
if((state_val_15190 === (9))){
var inst_15176 = (state_15189[(9)]);
var inst_15169 = inst_15176;
var state_15189__$1 = (function (){var statearr_15200 = state_15189;
(statearr_15200[(7)] = inst_15169);

return statearr_15200;
})();
var statearr_15201_15215 = state_15189__$1;
(statearr_15201_15215[(2)] = null);

(statearr_15201_15215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15190 === (5))){
var inst_15169 = (state_15189[(7)]);
var state_15189__$1 = state_15189;
var statearr_15202_15216 = state_15189__$1;
(statearr_15202_15216[(2)] = inst_15169);

(statearr_15202_15216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15190 === (10))){
var inst_15183 = (state_15189[(2)]);
var state_15189__$1 = state_15189;
var statearr_15203_15217 = state_15189__$1;
(statearr_15203_15217[(2)] = inst_15183);

(statearr_15203_15217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15190 === (8))){
var inst_15176 = (state_15189[(9)]);
var inst_15179 = cljs.core.deref.call(null,inst_15176);
var state_15189__$1 = state_15189;
var statearr_15204_15218 = state_15189__$1;
(statearr_15204_15218[(2)] = inst_15179);

(statearr_15204_15218[(1)] = (10));


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
});})(c__12532__auto__))
;
return ((function (switch__12517__auto__,c__12532__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12518__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12518__auto____0 = (function (){
var statearr_15205 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15205[(0)] = cljs$core$async$reduce_$_state_machine__12518__auto__);

(statearr_15205[(1)] = (1));

return statearr_15205;
});
var cljs$core$async$reduce_$_state_machine__12518__auto____1 = (function (state_15189){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_15189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e15206){if((e15206 instanceof Object)){
var ex__12521__auto__ = e15206;
var statearr_15207_15219 = state_15189;
(statearr_15207_15219[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15220 = state_15189;
state_15189 = G__15220;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12518__auto__ = function(state_15189){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12518__auto____1.call(this,state_15189);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12518__auto____0;
cljs$core$async$reduce_$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12518__auto____1;
return cljs$core$async$reduce_$_state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto__))
})();
var state__12534__auto__ = (function (){var statearr_15208 = f__12533__auto__.call(null);
(statearr_15208[(6)] = c__12532__auto__);

return statearr_15208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto__))
);

return c__12532__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__12532__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto__,f__$1){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto__,f__$1){
return (function (state_15226){
var state_val_15227 = (state_15226[(1)]);
if((state_val_15227 === (1))){
var inst_15221 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_15226__$1 = state_15226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15226__$1,(2),inst_15221);
} else {
if((state_val_15227 === (2))){
var inst_15223 = (state_15226[(2)]);
var inst_15224 = f__$1.call(null,inst_15223);
var state_15226__$1 = state_15226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15226__$1,inst_15224);
} else {
return null;
}
}
});})(c__12532__auto__,f__$1))
;
return ((function (switch__12517__auto__,c__12532__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__12518__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12518__auto____0 = (function (){
var statearr_15228 = [null,null,null,null,null,null,null];
(statearr_15228[(0)] = cljs$core$async$transduce_$_state_machine__12518__auto__);

(statearr_15228[(1)] = (1));

return statearr_15228;
});
var cljs$core$async$transduce_$_state_machine__12518__auto____1 = (function (state_15226){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_15226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e15229){if((e15229 instanceof Object)){
var ex__12521__auto__ = e15229;
var statearr_15230_15232 = state_15226;
(statearr_15230_15232[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15233 = state_15226;
state_15226 = G__15233;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12518__auto__ = function(state_15226){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12518__auto____1.call(this,state_15226);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12518__auto____0;
cljs$core$async$transduce_$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12518__auto____1;
return cljs$core$async$transduce_$_state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto__,f__$1))
})();
var state__12534__auto__ = (function (){var statearr_15231 = f__12533__auto__.call(null);
(statearr_15231[(6)] = c__12532__auto__);

return statearr_15231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto__,f__$1))
);

return c__12532__auto__;
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
var G__15235 = arguments.length;
switch (G__15235) {
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
var c__12532__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto__){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto__){
return (function (state_15260){
var state_val_15261 = (state_15260[(1)]);
if((state_val_15261 === (7))){
var inst_15242 = (state_15260[(2)]);
var state_15260__$1 = state_15260;
var statearr_15262_15283 = state_15260__$1;
(statearr_15262_15283[(2)] = inst_15242);

(statearr_15262_15283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15261 === (1))){
var inst_15236 = cljs.core.seq.call(null,coll);
var inst_15237 = inst_15236;
var state_15260__$1 = (function (){var statearr_15263 = state_15260;
(statearr_15263[(7)] = inst_15237);

return statearr_15263;
})();
var statearr_15264_15284 = state_15260__$1;
(statearr_15264_15284[(2)] = null);

(statearr_15264_15284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15261 === (4))){
var inst_15237 = (state_15260[(7)]);
var inst_15240 = cljs.core.first.call(null,inst_15237);
var state_15260__$1 = state_15260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15260__$1,(7),ch,inst_15240);
} else {
if((state_val_15261 === (13))){
var inst_15254 = (state_15260[(2)]);
var state_15260__$1 = state_15260;
var statearr_15265_15285 = state_15260__$1;
(statearr_15265_15285[(2)] = inst_15254);

(statearr_15265_15285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15261 === (6))){
var inst_15245 = (state_15260[(2)]);
var state_15260__$1 = state_15260;
if(cljs.core.truth_(inst_15245)){
var statearr_15266_15286 = state_15260__$1;
(statearr_15266_15286[(1)] = (8));

} else {
var statearr_15267_15287 = state_15260__$1;
(statearr_15267_15287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15261 === (3))){
var inst_15258 = (state_15260[(2)]);
var state_15260__$1 = state_15260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15260__$1,inst_15258);
} else {
if((state_val_15261 === (12))){
var state_15260__$1 = state_15260;
var statearr_15268_15288 = state_15260__$1;
(statearr_15268_15288[(2)] = null);

(statearr_15268_15288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15261 === (2))){
var inst_15237 = (state_15260[(7)]);
var state_15260__$1 = state_15260;
if(cljs.core.truth_(inst_15237)){
var statearr_15269_15289 = state_15260__$1;
(statearr_15269_15289[(1)] = (4));

} else {
var statearr_15270_15290 = state_15260__$1;
(statearr_15270_15290[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15261 === (11))){
var inst_15251 = cljs.core.async.close_BANG_.call(null,ch);
var state_15260__$1 = state_15260;
var statearr_15271_15291 = state_15260__$1;
(statearr_15271_15291[(2)] = inst_15251);

(statearr_15271_15291[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15261 === (9))){
var state_15260__$1 = state_15260;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15272_15292 = state_15260__$1;
(statearr_15272_15292[(1)] = (11));

} else {
var statearr_15273_15293 = state_15260__$1;
(statearr_15273_15293[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15261 === (5))){
var inst_15237 = (state_15260[(7)]);
var state_15260__$1 = state_15260;
var statearr_15274_15294 = state_15260__$1;
(statearr_15274_15294[(2)] = inst_15237);

(statearr_15274_15294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15261 === (10))){
var inst_15256 = (state_15260[(2)]);
var state_15260__$1 = state_15260;
var statearr_15275_15295 = state_15260__$1;
(statearr_15275_15295[(2)] = inst_15256);

(statearr_15275_15295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15261 === (8))){
var inst_15237 = (state_15260[(7)]);
var inst_15247 = cljs.core.next.call(null,inst_15237);
var inst_15237__$1 = inst_15247;
var state_15260__$1 = (function (){var statearr_15276 = state_15260;
(statearr_15276[(7)] = inst_15237__$1);

return statearr_15276;
})();
var statearr_15277_15296 = state_15260__$1;
(statearr_15277_15296[(2)] = null);

(statearr_15277_15296[(1)] = (2));


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
});})(c__12532__auto__))
;
return ((function (switch__12517__auto__,c__12532__auto__){
return (function() {
var cljs$core$async$state_machine__12518__auto__ = null;
var cljs$core$async$state_machine__12518__auto____0 = (function (){
var statearr_15278 = [null,null,null,null,null,null,null,null];
(statearr_15278[(0)] = cljs$core$async$state_machine__12518__auto__);

(statearr_15278[(1)] = (1));

return statearr_15278;
});
var cljs$core$async$state_machine__12518__auto____1 = (function (state_15260){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_15260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e15279){if((e15279 instanceof Object)){
var ex__12521__auto__ = e15279;
var statearr_15280_15297 = state_15260;
(statearr_15280_15297[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15298 = state_15260;
state_15260 = G__15298;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$state_machine__12518__auto__ = function(state_15260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12518__auto____1.call(this,state_15260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12518__auto____0;
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12518__auto____1;
return cljs$core$async$state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto__))
})();
var state__12534__auto__ = (function (){var statearr_15281 = f__12533__auto__.call(null);
(statearr_15281[(6)] = c__12532__auto__);

return statearr_15281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto__))
);

return c__12532__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async15299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15299 = (function (ch,cs,meta15300){
this.ch = ch;
this.cs = cs;
this.meta15300 = meta15300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15301,meta15300__$1){
var self__ = this;
var _15301__$1 = this;
return (new cljs.core.async.t_cljs$core$async15299(self__.ch,self__.cs,meta15300__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15301){
var self__ = this;
var _15301__$1 = this;
return self__.meta15300;
});})(cs))
;

cljs.core.async.t_cljs$core$async15299.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15299.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15299.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15299.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15299.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15299.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15299.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15300","meta15300",-1806634305,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15299";

cljs.core.async.t_cljs$core$async15299.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async15299");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15299.
 */
cljs.core.async.__GT_t_cljs$core$async15299 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15299(ch__$1,cs__$1,meta15300){
return (new cljs.core.async.t_cljs$core$async15299(ch__$1,cs__$1,meta15300));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15299(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12532__auto___15521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto___15521,cs,m,dchan,dctr,done){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto___15521,cs,m,dchan,dctr,done){
return (function (state_15436){
var state_val_15437 = (state_15436[(1)]);
if((state_val_15437 === (7))){
var inst_15432 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15438_15522 = state_15436__$1;
(statearr_15438_15522[(2)] = inst_15432);

(statearr_15438_15522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (20))){
var inst_15335 = (state_15436[(7)]);
var inst_15347 = cljs.core.first.call(null,inst_15335);
var inst_15348 = cljs.core.nth.call(null,inst_15347,(0),null);
var inst_15349 = cljs.core.nth.call(null,inst_15347,(1),null);
var state_15436__$1 = (function (){var statearr_15439 = state_15436;
(statearr_15439[(8)] = inst_15348);

return statearr_15439;
})();
if(cljs.core.truth_(inst_15349)){
var statearr_15440_15523 = state_15436__$1;
(statearr_15440_15523[(1)] = (22));

} else {
var statearr_15441_15524 = state_15436__$1;
(statearr_15441_15524[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (27))){
var inst_15379 = (state_15436[(9)]);
var inst_15304 = (state_15436[(10)]);
var inst_15384 = (state_15436[(11)]);
var inst_15377 = (state_15436[(12)]);
var inst_15384__$1 = cljs.core._nth.call(null,inst_15377,inst_15379);
var inst_15385 = cljs.core.async.put_BANG_.call(null,inst_15384__$1,inst_15304,done);
var state_15436__$1 = (function (){var statearr_15442 = state_15436;
(statearr_15442[(11)] = inst_15384__$1);

return statearr_15442;
})();
if(cljs.core.truth_(inst_15385)){
var statearr_15443_15525 = state_15436__$1;
(statearr_15443_15525[(1)] = (30));

} else {
var statearr_15444_15526 = state_15436__$1;
(statearr_15444_15526[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (1))){
var state_15436__$1 = state_15436;
var statearr_15445_15527 = state_15436__$1;
(statearr_15445_15527[(2)] = null);

(statearr_15445_15527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (24))){
var inst_15335 = (state_15436[(7)]);
var inst_15354 = (state_15436[(2)]);
var inst_15355 = cljs.core.next.call(null,inst_15335);
var inst_15313 = inst_15355;
var inst_15314 = null;
var inst_15315 = (0);
var inst_15316 = (0);
var state_15436__$1 = (function (){var statearr_15446 = state_15436;
(statearr_15446[(13)] = inst_15315);

(statearr_15446[(14)] = inst_15354);

(statearr_15446[(15)] = inst_15316);

(statearr_15446[(16)] = inst_15313);

(statearr_15446[(17)] = inst_15314);

return statearr_15446;
})();
var statearr_15447_15528 = state_15436__$1;
(statearr_15447_15528[(2)] = null);

(statearr_15447_15528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (39))){
var state_15436__$1 = state_15436;
var statearr_15451_15529 = state_15436__$1;
(statearr_15451_15529[(2)] = null);

(statearr_15451_15529[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (4))){
var inst_15304 = (state_15436[(10)]);
var inst_15304__$1 = (state_15436[(2)]);
var inst_15305 = (inst_15304__$1 == null);
var state_15436__$1 = (function (){var statearr_15452 = state_15436;
(statearr_15452[(10)] = inst_15304__$1);

return statearr_15452;
})();
if(cljs.core.truth_(inst_15305)){
var statearr_15453_15530 = state_15436__$1;
(statearr_15453_15530[(1)] = (5));

} else {
var statearr_15454_15531 = state_15436__$1;
(statearr_15454_15531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (15))){
var inst_15315 = (state_15436[(13)]);
var inst_15316 = (state_15436[(15)]);
var inst_15313 = (state_15436[(16)]);
var inst_15314 = (state_15436[(17)]);
var inst_15331 = (state_15436[(2)]);
var inst_15332 = (inst_15316 + (1));
var tmp15448 = inst_15315;
var tmp15449 = inst_15313;
var tmp15450 = inst_15314;
var inst_15313__$1 = tmp15449;
var inst_15314__$1 = tmp15450;
var inst_15315__$1 = tmp15448;
var inst_15316__$1 = inst_15332;
var state_15436__$1 = (function (){var statearr_15455 = state_15436;
(statearr_15455[(13)] = inst_15315__$1);

(statearr_15455[(15)] = inst_15316__$1);

(statearr_15455[(16)] = inst_15313__$1);

(statearr_15455[(17)] = inst_15314__$1);

(statearr_15455[(18)] = inst_15331);

return statearr_15455;
})();
var statearr_15456_15532 = state_15436__$1;
(statearr_15456_15532[(2)] = null);

(statearr_15456_15532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (21))){
var inst_15358 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15460_15533 = state_15436__$1;
(statearr_15460_15533[(2)] = inst_15358);

(statearr_15460_15533[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (31))){
var inst_15384 = (state_15436[(11)]);
var inst_15388 = done.call(null,null);
var inst_15389 = cljs.core.async.untap_STAR_.call(null,m,inst_15384);
var state_15436__$1 = (function (){var statearr_15461 = state_15436;
(statearr_15461[(19)] = inst_15388);

return statearr_15461;
})();
var statearr_15462_15534 = state_15436__$1;
(statearr_15462_15534[(2)] = inst_15389);

(statearr_15462_15534[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (32))){
var inst_15379 = (state_15436[(9)]);
var inst_15378 = (state_15436[(20)]);
var inst_15377 = (state_15436[(12)]);
var inst_15376 = (state_15436[(21)]);
var inst_15391 = (state_15436[(2)]);
var inst_15392 = (inst_15379 + (1));
var tmp15457 = inst_15378;
var tmp15458 = inst_15377;
var tmp15459 = inst_15376;
var inst_15376__$1 = tmp15459;
var inst_15377__$1 = tmp15458;
var inst_15378__$1 = tmp15457;
var inst_15379__$1 = inst_15392;
var state_15436__$1 = (function (){var statearr_15463 = state_15436;
(statearr_15463[(9)] = inst_15379__$1);

(statearr_15463[(20)] = inst_15378__$1);

(statearr_15463[(22)] = inst_15391);

(statearr_15463[(12)] = inst_15377__$1);

(statearr_15463[(21)] = inst_15376__$1);

return statearr_15463;
})();
var statearr_15464_15535 = state_15436__$1;
(statearr_15464_15535[(2)] = null);

(statearr_15464_15535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (40))){
var inst_15404 = (state_15436[(23)]);
var inst_15408 = done.call(null,null);
var inst_15409 = cljs.core.async.untap_STAR_.call(null,m,inst_15404);
var state_15436__$1 = (function (){var statearr_15465 = state_15436;
(statearr_15465[(24)] = inst_15408);

return statearr_15465;
})();
var statearr_15466_15536 = state_15436__$1;
(statearr_15466_15536[(2)] = inst_15409);

(statearr_15466_15536[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (33))){
var inst_15395 = (state_15436[(25)]);
var inst_15397 = cljs.core.chunked_seq_QMARK_.call(null,inst_15395);
var state_15436__$1 = state_15436;
if(inst_15397){
var statearr_15467_15537 = state_15436__$1;
(statearr_15467_15537[(1)] = (36));

} else {
var statearr_15468_15538 = state_15436__$1;
(statearr_15468_15538[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (13))){
var inst_15325 = (state_15436[(26)]);
var inst_15328 = cljs.core.async.close_BANG_.call(null,inst_15325);
var state_15436__$1 = state_15436;
var statearr_15469_15539 = state_15436__$1;
(statearr_15469_15539[(2)] = inst_15328);

(statearr_15469_15539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (22))){
var inst_15348 = (state_15436[(8)]);
var inst_15351 = cljs.core.async.close_BANG_.call(null,inst_15348);
var state_15436__$1 = state_15436;
var statearr_15470_15540 = state_15436__$1;
(statearr_15470_15540[(2)] = inst_15351);

(statearr_15470_15540[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (36))){
var inst_15395 = (state_15436[(25)]);
var inst_15399 = cljs.core.chunk_first.call(null,inst_15395);
var inst_15400 = cljs.core.chunk_rest.call(null,inst_15395);
var inst_15401 = cljs.core.count.call(null,inst_15399);
var inst_15376 = inst_15400;
var inst_15377 = inst_15399;
var inst_15378 = inst_15401;
var inst_15379 = (0);
var state_15436__$1 = (function (){var statearr_15471 = state_15436;
(statearr_15471[(9)] = inst_15379);

(statearr_15471[(20)] = inst_15378);

(statearr_15471[(12)] = inst_15377);

(statearr_15471[(21)] = inst_15376);

return statearr_15471;
})();
var statearr_15472_15541 = state_15436__$1;
(statearr_15472_15541[(2)] = null);

(statearr_15472_15541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (41))){
var inst_15395 = (state_15436[(25)]);
var inst_15411 = (state_15436[(2)]);
var inst_15412 = cljs.core.next.call(null,inst_15395);
var inst_15376 = inst_15412;
var inst_15377 = null;
var inst_15378 = (0);
var inst_15379 = (0);
var state_15436__$1 = (function (){var statearr_15473 = state_15436;
(statearr_15473[(9)] = inst_15379);

(statearr_15473[(20)] = inst_15378);

(statearr_15473[(27)] = inst_15411);

(statearr_15473[(12)] = inst_15377);

(statearr_15473[(21)] = inst_15376);

return statearr_15473;
})();
var statearr_15474_15542 = state_15436__$1;
(statearr_15474_15542[(2)] = null);

(statearr_15474_15542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (43))){
var state_15436__$1 = state_15436;
var statearr_15475_15543 = state_15436__$1;
(statearr_15475_15543[(2)] = null);

(statearr_15475_15543[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (29))){
var inst_15420 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15476_15544 = state_15436__$1;
(statearr_15476_15544[(2)] = inst_15420);

(statearr_15476_15544[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (44))){
var inst_15429 = (state_15436[(2)]);
var state_15436__$1 = (function (){var statearr_15477 = state_15436;
(statearr_15477[(28)] = inst_15429);

return statearr_15477;
})();
var statearr_15478_15545 = state_15436__$1;
(statearr_15478_15545[(2)] = null);

(statearr_15478_15545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (6))){
var inst_15368 = (state_15436[(29)]);
var inst_15367 = cljs.core.deref.call(null,cs);
var inst_15368__$1 = cljs.core.keys.call(null,inst_15367);
var inst_15369 = cljs.core.count.call(null,inst_15368__$1);
var inst_15370 = cljs.core.reset_BANG_.call(null,dctr,inst_15369);
var inst_15375 = cljs.core.seq.call(null,inst_15368__$1);
var inst_15376 = inst_15375;
var inst_15377 = null;
var inst_15378 = (0);
var inst_15379 = (0);
var state_15436__$1 = (function (){var statearr_15479 = state_15436;
(statearr_15479[(9)] = inst_15379);

(statearr_15479[(20)] = inst_15378);

(statearr_15479[(29)] = inst_15368__$1);

(statearr_15479[(30)] = inst_15370);

(statearr_15479[(12)] = inst_15377);

(statearr_15479[(21)] = inst_15376);

return statearr_15479;
})();
var statearr_15480_15546 = state_15436__$1;
(statearr_15480_15546[(2)] = null);

(statearr_15480_15546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (28))){
var inst_15395 = (state_15436[(25)]);
var inst_15376 = (state_15436[(21)]);
var inst_15395__$1 = cljs.core.seq.call(null,inst_15376);
var state_15436__$1 = (function (){var statearr_15481 = state_15436;
(statearr_15481[(25)] = inst_15395__$1);

return statearr_15481;
})();
if(inst_15395__$1){
var statearr_15482_15547 = state_15436__$1;
(statearr_15482_15547[(1)] = (33));

} else {
var statearr_15483_15548 = state_15436__$1;
(statearr_15483_15548[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (25))){
var inst_15379 = (state_15436[(9)]);
var inst_15378 = (state_15436[(20)]);
var inst_15381 = (inst_15379 < inst_15378);
var inst_15382 = inst_15381;
var state_15436__$1 = state_15436;
if(cljs.core.truth_(inst_15382)){
var statearr_15484_15549 = state_15436__$1;
(statearr_15484_15549[(1)] = (27));

} else {
var statearr_15485_15550 = state_15436__$1;
(statearr_15485_15550[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (34))){
var state_15436__$1 = state_15436;
var statearr_15486_15551 = state_15436__$1;
(statearr_15486_15551[(2)] = null);

(statearr_15486_15551[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (17))){
var state_15436__$1 = state_15436;
var statearr_15487_15552 = state_15436__$1;
(statearr_15487_15552[(2)] = null);

(statearr_15487_15552[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (3))){
var inst_15434 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15436__$1,inst_15434);
} else {
if((state_val_15437 === (12))){
var inst_15363 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15488_15553 = state_15436__$1;
(statearr_15488_15553[(2)] = inst_15363);

(statearr_15488_15553[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (2))){
var state_15436__$1 = state_15436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15436__$1,(4),ch);
} else {
if((state_val_15437 === (23))){
var state_15436__$1 = state_15436;
var statearr_15489_15554 = state_15436__$1;
(statearr_15489_15554[(2)] = null);

(statearr_15489_15554[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (35))){
var inst_15418 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15490_15555 = state_15436__$1;
(statearr_15490_15555[(2)] = inst_15418);

(statearr_15490_15555[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (19))){
var inst_15335 = (state_15436[(7)]);
var inst_15339 = cljs.core.chunk_first.call(null,inst_15335);
var inst_15340 = cljs.core.chunk_rest.call(null,inst_15335);
var inst_15341 = cljs.core.count.call(null,inst_15339);
var inst_15313 = inst_15340;
var inst_15314 = inst_15339;
var inst_15315 = inst_15341;
var inst_15316 = (0);
var state_15436__$1 = (function (){var statearr_15491 = state_15436;
(statearr_15491[(13)] = inst_15315);

(statearr_15491[(15)] = inst_15316);

(statearr_15491[(16)] = inst_15313);

(statearr_15491[(17)] = inst_15314);

return statearr_15491;
})();
var statearr_15492_15556 = state_15436__$1;
(statearr_15492_15556[(2)] = null);

(statearr_15492_15556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (11))){
var inst_15335 = (state_15436[(7)]);
var inst_15313 = (state_15436[(16)]);
var inst_15335__$1 = cljs.core.seq.call(null,inst_15313);
var state_15436__$1 = (function (){var statearr_15493 = state_15436;
(statearr_15493[(7)] = inst_15335__$1);

return statearr_15493;
})();
if(inst_15335__$1){
var statearr_15494_15557 = state_15436__$1;
(statearr_15494_15557[(1)] = (16));

} else {
var statearr_15495_15558 = state_15436__$1;
(statearr_15495_15558[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (9))){
var inst_15365 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15496_15559 = state_15436__$1;
(statearr_15496_15559[(2)] = inst_15365);

(statearr_15496_15559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (5))){
var inst_15311 = cljs.core.deref.call(null,cs);
var inst_15312 = cljs.core.seq.call(null,inst_15311);
var inst_15313 = inst_15312;
var inst_15314 = null;
var inst_15315 = (0);
var inst_15316 = (0);
var state_15436__$1 = (function (){var statearr_15497 = state_15436;
(statearr_15497[(13)] = inst_15315);

(statearr_15497[(15)] = inst_15316);

(statearr_15497[(16)] = inst_15313);

(statearr_15497[(17)] = inst_15314);

return statearr_15497;
})();
var statearr_15498_15560 = state_15436__$1;
(statearr_15498_15560[(2)] = null);

(statearr_15498_15560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (14))){
var state_15436__$1 = state_15436;
var statearr_15499_15561 = state_15436__$1;
(statearr_15499_15561[(2)] = null);

(statearr_15499_15561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (45))){
var inst_15426 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15500_15562 = state_15436__$1;
(statearr_15500_15562[(2)] = inst_15426);

(statearr_15500_15562[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (26))){
var inst_15368 = (state_15436[(29)]);
var inst_15422 = (state_15436[(2)]);
var inst_15423 = cljs.core.seq.call(null,inst_15368);
var state_15436__$1 = (function (){var statearr_15501 = state_15436;
(statearr_15501[(31)] = inst_15422);

return statearr_15501;
})();
if(inst_15423){
var statearr_15502_15563 = state_15436__$1;
(statearr_15502_15563[(1)] = (42));

} else {
var statearr_15503_15564 = state_15436__$1;
(statearr_15503_15564[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (16))){
var inst_15335 = (state_15436[(7)]);
var inst_15337 = cljs.core.chunked_seq_QMARK_.call(null,inst_15335);
var state_15436__$1 = state_15436;
if(inst_15337){
var statearr_15504_15565 = state_15436__$1;
(statearr_15504_15565[(1)] = (19));

} else {
var statearr_15505_15566 = state_15436__$1;
(statearr_15505_15566[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (38))){
var inst_15415 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15506_15567 = state_15436__$1;
(statearr_15506_15567[(2)] = inst_15415);

(statearr_15506_15567[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (30))){
var state_15436__$1 = state_15436;
var statearr_15507_15568 = state_15436__$1;
(statearr_15507_15568[(2)] = null);

(statearr_15507_15568[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (10))){
var inst_15316 = (state_15436[(15)]);
var inst_15314 = (state_15436[(17)]);
var inst_15324 = cljs.core._nth.call(null,inst_15314,inst_15316);
var inst_15325 = cljs.core.nth.call(null,inst_15324,(0),null);
var inst_15326 = cljs.core.nth.call(null,inst_15324,(1),null);
var state_15436__$1 = (function (){var statearr_15508 = state_15436;
(statearr_15508[(26)] = inst_15325);

return statearr_15508;
})();
if(cljs.core.truth_(inst_15326)){
var statearr_15509_15569 = state_15436__$1;
(statearr_15509_15569[(1)] = (13));

} else {
var statearr_15510_15570 = state_15436__$1;
(statearr_15510_15570[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (18))){
var inst_15361 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15511_15571 = state_15436__$1;
(statearr_15511_15571[(2)] = inst_15361);

(statearr_15511_15571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (42))){
var state_15436__$1 = state_15436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15436__$1,(45),dchan);
} else {
if((state_val_15437 === (37))){
var inst_15304 = (state_15436[(10)]);
var inst_15404 = (state_15436[(23)]);
var inst_15395 = (state_15436[(25)]);
var inst_15404__$1 = cljs.core.first.call(null,inst_15395);
var inst_15405 = cljs.core.async.put_BANG_.call(null,inst_15404__$1,inst_15304,done);
var state_15436__$1 = (function (){var statearr_15512 = state_15436;
(statearr_15512[(23)] = inst_15404__$1);

return statearr_15512;
})();
if(cljs.core.truth_(inst_15405)){
var statearr_15513_15572 = state_15436__$1;
(statearr_15513_15572[(1)] = (39));

} else {
var statearr_15514_15573 = state_15436__$1;
(statearr_15514_15573[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (8))){
var inst_15315 = (state_15436[(13)]);
var inst_15316 = (state_15436[(15)]);
var inst_15318 = (inst_15316 < inst_15315);
var inst_15319 = inst_15318;
var state_15436__$1 = state_15436;
if(cljs.core.truth_(inst_15319)){
var statearr_15515_15574 = state_15436__$1;
(statearr_15515_15574[(1)] = (10));

} else {
var statearr_15516_15575 = state_15436__$1;
(statearr_15516_15575[(1)] = (11));

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
});})(c__12532__auto___15521,cs,m,dchan,dctr,done))
;
return ((function (switch__12517__auto__,c__12532__auto___15521,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12518__auto__ = null;
var cljs$core$async$mult_$_state_machine__12518__auto____0 = (function (){
var statearr_15517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15517[(0)] = cljs$core$async$mult_$_state_machine__12518__auto__);

(statearr_15517[(1)] = (1));

return statearr_15517;
});
var cljs$core$async$mult_$_state_machine__12518__auto____1 = (function (state_15436){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_15436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e15518){if((e15518 instanceof Object)){
var ex__12521__auto__ = e15518;
var statearr_15519_15576 = state_15436;
(statearr_15519_15576[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15577 = state_15436;
state_15436 = G__15577;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12518__auto__ = function(state_15436){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12518__auto____1.call(this,state_15436);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12518__auto____0;
cljs$core$async$mult_$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12518__auto____1;
return cljs$core$async$mult_$_state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto___15521,cs,m,dchan,dctr,done))
})();
var state__12534__auto__ = (function (){var statearr_15520 = f__12533__auto__.call(null);
(statearr_15520[(6)] = c__12532__auto___15521);

return statearr_15520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto___15521,cs,m,dchan,dctr,done))
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
var G__15579 = arguments.length;
switch (G__15579) {
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
var len__4499__auto___15591 = arguments.length;
var i__4500__auto___15592 = (0);
while(true){
if((i__4500__auto___15592 < len__4499__auto___15591)){
args__4502__auto__.push((arguments[i__4500__auto___15592]));

var G__15593 = (i__4500__auto___15592 + (1));
i__4500__auto___15592 = G__15593;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15585){
var map__15586 = p__15585;
var map__15586__$1 = ((((!((map__15586 == null)))?(((((map__15586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15586):map__15586);
var opts = map__15586__$1;
var statearr_15588_15594 = state;
(statearr_15588_15594[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__15586,map__15586__$1,opts){
return (function (val){
var statearr_15589_15595 = state;
(statearr_15589_15595[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15586,map__15586__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_15590_15596 = state;
(statearr_15590_15596[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15581){
var G__15582 = cljs.core.first.call(null,seq15581);
var seq15581__$1 = cljs.core.next.call(null,seq15581);
var G__15583 = cljs.core.first.call(null,seq15581__$1);
var seq15581__$2 = cljs.core.next.call(null,seq15581__$1);
var G__15584 = cljs.core.first.call(null,seq15581__$2);
var seq15581__$3 = cljs.core.next.call(null,seq15581__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15582,G__15583,G__15584,seq15581__$3);
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
if(typeof cljs.core.async.t_cljs$core$async15597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15597 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta15598){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta15598 = meta15598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15599,meta15598__$1){
var self__ = this;
var _15599__$1 = this;
return (new cljs.core.async.t_cljs$core$async15597(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta15598__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15599){
var self__ = this;
var _15599__$1 = this;
return self__.meta15598;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async15597.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta15598","meta15598",730081630,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15597";

cljs.core.async.t_cljs$core$async15597.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async15597");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15597.
 */
cljs.core.async.__GT_t_cljs$core$async15597 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15597(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15598){
return (new cljs.core.async.t_cljs$core$async15597(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15598));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15597(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12532__auto___15761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto___15761,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto___15761,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15701){
var state_val_15702 = (state_15701[(1)]);
if((state_val_15702 === (7))){
var inst_15616 = (state_15701[(2)]);
var state_15701__$1 = state_15701;
var statearr_15703_15762 = state_15701__$1;
(statearr_15703_15762[(2)] = inst_15616);

(statearr_15703_15762[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (20))){
var inst_15628 = (state_15701[(7)]);
var state_15701__$1 = state_15701;
var statearr_15704_15763 = state_15701__$1;
(statearr_15704_15763[(2)] = inst_15628);

(statearr_15704_15763[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (27))){
var state_15701__$1 = state_15701;
var statearr_15705_15764 = state_15701__$1;
(statearr_15705_15764[(2)] = null);

(statearr_15705_15764[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (1))){
var inst_15603 = (state_15701[(8)]);
var inst_15603__$1 = calc_state.call(null);
var inst_15605 = (inst_15603__$1 == null);
var inst_15606 = cljs.core.not.call(null,inst_15605);
var state_15701__$1 = (function (){var statearr_15706 = state_15701;
(statearr_15706[(8)] = inst_15603__$1);

return statearr_15706;
})();
if(inst_15606){
var statearr_15707_15765 = state_15701__$1;
(statearr_15707_15765[(1)] = (2));

} else {
var statearr_15708_15766 = state_15701__$1;
(statearr_15708_15766[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (24))){
var inst_15675 = (state_15701[(9)]);
var inst_15661 = (state_15701[(10)]);
var inst_15652 = (state_15701[(11)]);
var inst_15675__$1 = inst_15652.call(null,inst_15661);
var state_15701__$1 = (function (){var statearr_15709 = state_15701;
(statearr_15709[(9)] = inst_15675__$1);

return statearr_15709;
})();
if(cljs.core.truth_(inst_15675__$1)){
var statearr_15710_15767 = state_15701__$1;
(statearr_15710_15767[(1)] = (29));

} else {
var statearr_15711_15768 = state_15701__$1;
(statearr_15711_15768[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (4))){
var inst_15619 = (state_15701[(2)]);
var state_15701__$1 = state_15701;
if(cljs.core.truth_(inst_15619)){
var statearr_15712_15769 = state_15701__$1;
(statearr_15712_15769[(1)] = (8));

} else {
var statearr_15713_15770 = state_15701__$1;
(statearr_15713_15770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (15))){
var inst_15646 = (state_15701[(2)]);
var state_15701__$1 = state_15701;
if(cljs.core.truth_(inst_15646)){
var statearr_15714_15771 = state_15701__$1;
(statearr_15714_15771[(1)] = (19));

} else {
var statearr_15715_15772 = state_15701__$1;
(statearr_15715_15772[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (21))){
var inst_15651 = (state_15701[(12)]);
var inst_15651__$1 = (state_15701[(2)]);
var inst_15652 = cljs.core.get.call(null,inst_15651__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15653 = cljs.core.get.call(null,inst_15651__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15654 = cljs.core.get.call(null,inst_15651__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15701__$1 = (function (){var statearr_15716 = state_15701;
(statearr_15716[(12)] = inst_15651__$1);

(statearr_15716[(13)] = inst_15653);

(statearr_15716[(11)] = inst_15652);

return statearr_15716;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15701__$1,(22),inst_15654);
} else {
if((state_val_15702 === (31))){
var inst_15683 = (state_15701[(2)]);
var state_15701__$1 = state_15701;
if(cljs.core.truth_(inst_15683)){
var statearr_15717_15773 = state_15701__$1;
(statearr_15717_15773[(1)] = (32));

} else {
var statearr_15718_15774 = state_15701__$1;
(statearr_15718_15774[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (32))){
var inst_15660 = (state_15701[(14)]);
var state_15701__$1 = state_15701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15701__$1,(35),out,inst_15660);
} else {
if((state_val_15702 === (33))){
var inst_15651 = (state_15701[(12)]);
var inst_15628 = inst_15651;
var state_15701__$1 = (function (){var statearr_15719 = state_15701;
(statearr_15719[(7)] = inst_15628);

return statearr_15719;
})();
var statearr_15720_15775 = state_15701__$1;
(statearr_15720_15775[(2)] = null);

(statearr_15720_15775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (13))){
var inst_15628 = (state_15701[(7)]);
var inst_15635 = inst_15628.cljs$lang$protocol_mask$partition0$;
var inst_15636 = (inst_15635 & (64));
var inst_15637 = inst_15628.cljs$core$ISeq$;
var inst_15638 = (cljs.core.PROTOCOL_SENTINEL === inst_15637);
var inst_15639 = ((inst_15636) || (inst_15638));
var state_15701__$1 = state_15701;
if(cljs.core.truth_(inst_15639)){
var statearr_15721_15776 = state_15701__$1;
(statearr_15721_15776[(1)] = (16));

} else {
var statearr_15722_15777 = state_15701__$1;
(statearr_15722_15777[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (22))){
var inst_15660 = (state_15701[(14)]);
var inst_15661 = (state_15701[(10)]);
var inst_15659 = (state_15701[(2)]);
var inst_15660__$1 = cljs.core.nth.call(null,inst_15659,(0),null);
var inst_15661__$1 = cljs.core.nth.call(null,inst_15659,(1),null);
var inst_15662 = (inst_15660__$1 == null);
var inst_15663 = cljs.core._EQ_.call(null,inst_15661__$1,change);
var inst_15664 = ((inst_15662) || (inst_15663));
var state_15701__$1 = (function (){var statearr_15723 = state_15701;
(statearr_15723[(14)] = inst_15660__$1);

(statearr_15723[(10)] = inst_15661__$1);

return statearr_15723;
})();
if(cljs.core.truth_(inst_15664)){
var statearr_15724_15778 = state_15701__$1;
(statearr_15724_15778[(1)] = (23));

} else {
var statearr_15725_15779 = state_15701__$1;
(statearr_15725_15779[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (36))){
var inst_15651 = (state_15701[(12)]);
var inst_15628 = inst_15651;
var state_15701__$1 = (function (){var statearr_15726 = state_15701;
(statearr_15726[(7)] = inst_15628);

return statearr_15726;
})();
var statearr_15727_15780 = state_15701__$1;
(statearr_15727_15780[(2)] = null);

(statearr_15727_15780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (29))){
var inst_15675 = (state_15701[(9)]);
var state_15701__$1 = state_15701;
var statearr_15728_15781 = state_15701__$1;
(statearr_15728_15781[(2)] = inst_15675);

(statearr_15728_15781[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (6))){
var state_15701__$1 = state_15701;
var statearr_15729_15782 = state_15701__$1;
(statearr_15729_15782[(2)] = false);

(statearr_15729_15782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (28))){
var inst_15671 = (state_15701[(2)]);
var inst_15672 = calc_state.call(null);
var inst_15628 = inst_15672;
var state_15701__$1 = (function (){var statearr_15730 = state_15701;
(statearr_15730[(15)] = inst_15671);

(statearr_15730[(7)] = inst_15628);

return statearr_15730;
})();
var statearr_15731_15783 = state_15701__$1;
(statearr_15731_15783[(2)] = null);

(statearr_15731_15783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (25))){
var inst_15697 = (state_15701[(2)]);
var state_15701__$1 = state_15701;
var statearr_15732_15784 = state_15701__$1;
(statearr_15732_15784[(2)] = inst_15697);

(statearr_15732_15784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (34))){
var inst_15695 = (state_15701[(2)]);
var state_15701__$1 = state_15701;
var statearr_15733_15785 = state_15701__$1;
(statearr_15733_15785[(2)] = inst_15695);

(statearr_15733_15785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (17))){
var state_15701__$1 = state_15701;
var statearr_15734_15786 = state_15701__$1;
(statearr_15734_15786[(2)] = false);

(statearr_15734_15786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (3))){
var state_15701__$1 = state_15701;
var statearr_15735_15787 = state_15701__$1;
(statearr_15735_15787[(2)] = false);

(statearr_15735_15787[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (12))){
var inst_15699 = (state_15701[(2)]);
var state_15701__$1 = state_15701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15701__$1,inst_15699);
} else {
if((state_val_15702 === (2))){
var inst_15603 = (state_15701[(8)]);
var inst_15608 = inst_15603.cljs$lang$protocol_mask$partition0$;
var inst_15609 = (inst_15608 & (64));
var inst_15610 = inst_15603.cljs$core$ISeq$;
var inst_15611 = (cljs.core.PROTOCOL_SENTINEL === inst_15610);
var inst_15612 = ((inst_15609) || (inst_15611));
var state_15701__$1 = state_15701;
if(cljs.core.truth_(inst_15612)){
var statearr_15736_15788 = state_15701__$1;
(statearr_15736_15788[(1)] = (5));

} else {
var statearr_15737_15789 = state_15701__$1;
(statearr_15737_15789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (23))){
var inst_15660 = (state_15701[(14)]);
var inst_15666 = (inst_15660 == null);
var state_15701__$1 = state_15701;
if(cljs.core.truth_(inst_15666)){
var statearr_15738_15790 = state_15701__$1;
(statearr_15738_15790[(1)] = (26));

} else {
var statearr_15739_15791 = state_15701__$1;
(statearr_15739_15791[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (35))){
var inst_15686 = (state_15701[(2)]);
var state_15701__$1 = state_15701;
if(cljs.core.truth_(inst_15686)){
var statearr_15740_15792 = state_15701__$1;
(statearr_15740_15792[(1)] = (36));

} else {
var statearr_15741_15793 = state_15701__$1;
(statearr_15741_15793[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (19))){
var inst_15628 = (state_15701[(7)]);
var inst_15648 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15628);
var state_15701__$1 = state_15701;
var statearr_15742_15794 = state_15701__$1;
(statearr_15742_15794[(2)] = inst_15648);

(statearr_15742_15794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (11))){
var inst_15628 = (state_15701[(7)]);
var inst_15632 = (inst_15628 == null);
var inst_15633 = cljs.core.not.call(null,inst_15632);
var state_15701__$1 = state_15701;
if(inst_15633){
var statearr_15743_15795 = state_15701__$1;
(statearr_15743_15795[(1)] = (13));

} else {
var statearr_15744_15796 = state_15701__$1;
(statearr_15744_15796[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (9))){
var inst_15603 = (state_15701[(8)]);
var state_15701__$1 = state_15701;
var statearr_15745_15797 = state_15701__$1;
(statearr_15745_15797[(2)] = inst_15603);

(statearr_15745_15797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (5))){
var state_15701__$1 = state_15701;
var statearr_15746_15798 = state_15701__$1;
(statearr_15746_15798[(2)] = true);

(statearr_15746_15798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (14))){
var state_15701__$1 = state_15701;
var statearr_15747_15799 = state_15701__$1;
(statearr_15747_15799[(2)] = false);

(statearr_15747_15799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (26))){
var inst_15661 = (state_15701[(10)]);
var inst_15668 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15661);
var state_15701__$1 = state_15701;
var statearr_15748_15800 = state_15701__$1;
(statearr_15748_15800[(2)] = inst_15668);

(statearr_15748_15800[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (16))){
var state_15701__$1 = state_15701;
var statearr_15749_15801 = state_15701__$1;
(statearr_15749_15801[(2)] = true);

(statearr_15749_15801[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (38))){
var inst_15691 = (state_15701[(2)]);
var state_15701__$1 = state_15701;
var statearr_15750_15802 = state_15701__$1;
(statearr_15750_15802[(2)] = inst_15691);

(statearr_15750_15802[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (30))){
var inst_15661 = (state_15701[(10)]);
var inst_15653 = (state_15701[(13)]);
var inst_15652 = (state_15701[(11)]);
var inst_15678 = cljs.core.empty_QMARK_.call(null,inst_15652);
var inst_15679 = inst_15653.call(null,inst_15661);
var inst_15680 = cljs.core.not.call(null,inst_15679);
var inst_15681 = ((inst_15678) && (inst_15680));
var state_15701__$1 = state_15701;
var statearr_15751_15803 = state_15701__$1;
(statearr_15751_15803[(2)] = inst_15681);

(statearr_15751_15803[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (10))){
var inst_15603 = (state_15701[(8)]);
var inst_15624 = (state_15701[(2)]);
var inst_15625 = cljs.core.get.call(null,inst_15624,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15626 = cljs.core.get.call(null,inst_15624,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15627 = cljs.core.get.call(null,inst_15624,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15628 = inst_15603;
var state_15701__$1 = (function (){var statearr_15752 = state_15701;
(statearr_15752[(7)] = inst_15628);

(statearr_15752[(16)] = inst_15625);

(statearr_15752[(17)] = inst_15626);

(statearr_15752[(18)] = inst_15627);

return statearr_15752;
})();
var statearr_15753_15804 = state_15701__$1;
(statearr_15753_15804[(2)] = null);

(statearr_15753_15804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (18))){
var inst_15643 = (state_15701[(2)]);
var state_15701__$1 = state_15701;
var statearr_15754_15805 = state_15701__$1;
(statearr_15754_15805[(2)] = inst_15643);

(statearr_15754_15805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (37))){
var state_15701__$1 = state_15701;
var statearr_15755_15806 = state_15701__$1;
(statearr_15755_15806[(2)] = null);

(statearr_15755_15806[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15702 === (8))){
var inst_15603 = (state_15701[(8)]);
var inst_15621 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15603);
var state_15701__$1 = state_15701;
var statearr_15756_15807 = state_15701__$1;
(statearr_15756_15807[(2)] = inst_15621);

(statearr_15756_15807[(1)] = (10));


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
});})(c__12532__auto___15761,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12517__auto__,c__12532__auto___15761,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12518__auto__ = null;
var cljs$core$async$mix_$_state_machine__12518__auto____0 = (function (){
var statearr_15757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15757[(0)] = cljs$core$async$mix_$_state_machine__12518__auto__);

(statearr_15757[(1)] = (1));

return statearr_15757;
});
var cljs$core$async$mix_$_state_machine__12518__auto____1 = (function (state_15701){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_15701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e15758){if((e15758 instanceof Object)){
var ex__12521__auto__ = e15758;
var statearr_15759_15808 = state_15701;
(statearr_15759_15808[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15809 = state_15701;
state_15701 = G__15809;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12518__auto__ = function(state_15701){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12518__auto____1.call(this,state_15701);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12518__auto____0;
cljs$core$async$mix_$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12518__auto____1;
return cljs$core$async$mix_$_state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto___15761,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12534__auto__ = (function (){var statearr_15760 = f__12533__auto__.call(null);
(statearr_15760[(6)] = c__12532__auto___15761);

return statearr_15760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto___15761,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__15811 = arguments.length;
switch (G__15811) {
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
var G__15815 = arguments.length;
switch (G__15815) {
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
return (function (p1__15813_SHARP_){
if(cljs.core.truth_(p1__15813_SHARP_.call(null,topic))){
return p1__15813_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15813_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15816 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15816 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15817){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15817 = meta15817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15818,meta15817__$1){
var self__ = this;
var _15818__$1 = this;
return (new cljs.core.async.t_cljs$core$async15816(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15817__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15818){
var self__ = this;
var _15818__$1 = this;
return self__.meta15817;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15816.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15816.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15816.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15816.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15816.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async15816.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15816.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15816.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15817","meta15817",1111866513,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15816.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15816";

cljs.core.async.t_cljs$core$async15816.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async15816");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15816.
 */
cljs.core.async.__GT_t_cljs$core$async15816 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15816(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15817){
return (new cljs.core.async.t_cljs$core$async15816(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15817));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15816(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12532__auto___15936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto___15936,mults,ensure_mult,p){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto___15936,mults,ensure_mult,p){
return (function (state_15890){
var state_val_15891 = (state_15890[(1)]);
if((state_val_15891 === (7))){
var inst_15886 = (state_15890[(2)]);
var state_15890__$1 = state_15890;
var statearr_15892_15937 = state_15890__$1;
(statearr_15892_15937[(2)] = inst_15886);

(statearr_15892_15937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (20))){
var state_15890__$1 = state_15890;
var statearr_15893_15938 = state_15890__$1;
(statearr_15893_15938[(2)] = null);

(statearr_15893_15938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (1))){
var state_15890__$1 = state_15890;
var statearr_15894_15939 = state_15890__$1;
(statearr_15894_15939[(2)] = null);

(statearr_15894_15939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (24))){
var inst_15869 = (state_15890[(7)]);
var inst_15878 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15869);
var state_15890__$1 = state_15890;
var statearr_15895_15940 = state_15890__$1;
(statearr_15895_15940[(2)] = inst_15878);

(statearr_15895_15940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (4))){
var inst_15821 = (state_15890[(8)]);
var inst_15821__$1 = (state_15890[(2)]);
var inst_15822 = (inst_15821__$1 == null);
var state_15890__$1 = (function (){var statearr_15896 = state_15890;
(statearr_15896[(8)] = inst_15821__$1);

return statearr_15896;
})();
if(cljs.core.truth_(inst_15822)){
var statearr_15897_15941 = state_15890__$1;
(statearr_15897_15941[(1)] = (5));

} else {
var statearr_15898_15942 = state_15890__$1;
(statearr_15898_15942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (15))){
var inst_15863 = (state_15890[(2)]);
var state_15890__$1 = state_15890;
var statearr_15899_15943 = state_15890__$1;
(statearr_15899_15943[(2)] = inst_15863);

(statearr_15899_15943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (21))){
var inst_15883 = (state_15890[(2)]);
var state_15890__$1 = (function (){var statearr_15900 = state_15890;
(statearr_15900[(9)] = inst_15883);

return statearr_15900;
})();
var statearr_15901_15944 = state_15890__$1;
(statearr_15901_15944[(2)] = null);

(statearr_15901_15944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (13))){
var inst_15845 = (state_15890[(10)]);
var inst_15847 = cljs.core.chunked_seq_QMARK_.call(null,inst_15845);
var state_15890__$1 = state_15890;
if(inst_15847){
var statearr_15902_15945 = state_15890__$1;
(statearr_15902_15945[(1)] = (16));

} else {
var statearr_15903_15946 = state_15890__$1;
(statearr_15903_15946[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (22))){
var inst_15875 = (state_15890[(2)]);
var state_15890__$1 = state_15890;
if(cljs.core.truth_(inst_15875)){
var statearr_15904_15947 = state_15890__$1;
(statearr_15904_15947[(1)] = (23));

} else {
var statearr_15905_15948 = state_15890__$1;
(statearr_15905_15948[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (6))){
var inst_15821 = (state_15890[(8)]);
var inst_15869 = (state_15890[(7)]);
var inst_15871 = (state_15890[(11)]);
var inst_15869__$1 = topic_fn.call(null,inst_15821);
var inst_15870 = cljs.core.deref.call(null,mults);
var inst_15871__$1 = cljs.core.get.call(null,inst_15870,inst_15869__$1);
var state_15890__$1 = (function (){var statearr_15906 = state_15890;
(statearr_15906[(7)] = inst_15869__$1);

(statearr_15906[(11)] = inst_15871__$1);

return statearr_15906;
})();
if(cljs.core.truth_(inst_15871__$1)){
var statearr_15907_15949 = state_15890__$1;
(statearr_15907_15949[(1)] = (19));

} else {
var statearr_15908_15950 = state_15890__$1;
(statearr_15908_15950[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (25))){
var inst_15880 = (state_15890[(2)]);
var state_15890__$1 = state_15890;
var statearr_15909_15951 = state_15890__$1;
(statearr_15909_15951[(2)] = inst_15880);

(statearr_15909_15951[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (17))){
var inst_15845 = (state_15890[(10)]);
var inst_15854 = cljs.core.first.call(null,inst_15845);
var inst_15855 = cljs.core.async.muxch_STAR_.call(null,inst_15854);
var inst_15856 = cljs.core.async.close_BANG_.call(null,inst_15855);
var inst_15857 = cljs.core.next.call(null,inst_15845);
var inst_15831 = inst_15857;
var inst_15832 = null;
var inst_15833 = (0);
var inst_15834 = (0);
var state_15890__$1 = (function (){var statearr_15910 = state_15890;
(statearr_15910[(12)] = inst_15834);

(statearr_15910[(13)] = inst_15831);

(statearr_15910[(14)] = inst_15833);

(statearr_15910[(15)] = inst_15832);

(statearr_15910[(16)] = inst_15856);

return statearr_15910;
})();
var statearr_15911_15952 = state_15890__$1;
(statearr_15911_15952[(2)] = null);

(statearr_15911_15952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (3))){
var inst_15888 = (state_15890[(2)]);
var state_15890__$1 = state_15890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15890__$1,inst_15888);
} else {
if((state_val_15891 === (12))){
var inst_15865 = (state_15890[(2)]);
var state_15890__$1 = state_15890;
var statearr_15912_15953 = state_15890__$1;
(statearr_15912_15953[(2)] = inst_15865);

(statearr_15912_15953[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (2))){
var state_15890__$1 = state_15890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15890__$1,(4),ch);
} else {
if((state_val_15891 === (23))){
var state_15890__$1 = state_15890;
var statearr_15913_15954 = state_15890__$1;
(statearr_15913_15954[(2)] = null);

(statearr_15913_15954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (19))){
var inst_15821 = (state_15890[(8)]);
var inst_15871 = (state_15890[(11)]);
var inst_15873 = cljs.core.async.muxch_STAR_.call(null,inst_15871);
var state_15890__$1 = state_15890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15890__$1,(22),inst_15873,inst_15821);
} else {
if((state_val_15891 === (11))){
var inst_15831 = (state_15890[(13)]);
var inst_15845 = (state_15890[(10)]);
var inst_15845__$1 = cljs.core.seq.call(null,inst_15831);
var state_15890__$1 = (function (){var statearr_15914 = state_15890;
(statearr_15914[(10)] = inst_15845__$1);

return statearr_15914;
})();
if(inst_15845__$1){
var statearr_15915_15955 = state_15890__$1;
(statearr_15915_15955[(1)] = (13));

} else {
var statearr_15916_15956 = state_15890__$1;
(statearr_15916_15956[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (9))){
var inst_15867 = (state_15890[(2)]);
var state_15890__$1 = state_15890;
var statearr_15917_15957 = state_15890__$1;
(statearr_15917_15957[(2)] = inst_15867);

(statearr_15917_15957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (5))){
var inst_15828 = cljs.core.deref.call(null,mults);
var inst_15829 = cljs.core.vals.call(null,inst_15828);
var inst_15830 = cljs.core.seq.call(null,inst_15829);
var inst_15831 = inst_15830;
var inst_15832 = null;
var inst_15833 = (0);
var inst_15834 = (0);
var state_15890__$1 = (function (){var statearr_15918 = state_15890;
(statearr_15918[(12)] = inst_15834);

(statearr_15918[(13)] = inst_15831);

(statearr_15918[(14)] = inst_15833);

(statearr_15918[(15)] = inst_15832);

return statearr_15918;
})();
var statearr_15919_15958 = state_15890__$1;
(statearr_15919_15958[(2)] = null);

(statearr_15919_15958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (14))){
var state_15890__$1 = state_15890;
var statearr_15923_15959 = state_15890__$1;
(statearr_15923_15959[(2)] = null);

(statearr_15923_15959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (16))){
var inst_15845 = (state_15890[(10)]);
var inst_15849 = cljs.core.chunk_first.call(null,inst_15845);
var inst_15850 = cljs.core.chunk_rest.call(null,inst_15845);
var inst_15851 = cljs.core.count.call(null,inst_15849);
var inst_15831 = inst_15850;
var inst_15832 = inst_15849;
var inst_15833 = inst_15851;
var inst_15834 = (0);
var state_15890__$1 = (function (){var statearr_15924 = state_15890;
(statearr_15924[(12)] = inst_15834);

(statearr_15924[(13)] = inst_15831);

(statearr_15924[(14)] = inst_15833);

(statearr_15924[(15)] = inst_15832);

return statearr_15924;
})();
var statearr_15925_15960 = state_15890__$1;
(statearr_15925_15960[(2)] = null);

(statearr_15925_15960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (10))){
var inst_15834 = (state_15890[(12)]);
var inst_15831 = (state_15890[(13)]);
var inst_15833 = (state_15890[(14)]);
var inst_15832 = (state_15890[(15)]);
var inst_15839 = cljs.core._nth.call(null,inst_15832,inst_15834);
var inst_15840 = cljs.core.async.muxch_STAR_.call(null,inst_15839);
var inst_15841 = cljs.core.async.close_BANG_.call(null,inst_15840);
var inst_15842 = (inst_15834 + (1));
var tmp15920 = inst_15831;
var tmp15921 = inst_15833;
var tmp15922 = inst_15832;
var inst_15831__$1 = tmp15920;
var inst_15832__$1 = tmp15922;
var inst_15833__$1 = tmp15921;
var inst_15834__$1 = inst_15842;
var state_15890__$1 = (function (){var statearr_15926 = state_15890;
(statearr_15926[(12)] = inst_15834__$1);

(statearr_15926[(13)] = inst_15831__$1);

(statearr_15926[(14)] = inst_15833__$1);

(statearr_15926[(17)] = inst_15841);

(statearr_15926[(15)] = inst_15832__$1);

return statearr_15926;
})();
var statearr_15927_15961 = state_15890__$1;
(statearr_15927_15961[(2)] = null);

(statearr_15927_15961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (18))){
var inst_15860 = (state_15890[(2)]);
var state_15890__$1 = state_15890;
var statearr_15928_15962 = state_15890__$1;
(statearr_15928_15962[(2)] = inst_15860);

(statearr_15928_15962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (8))){
var inst_15834 = (state_15890[(12)]);
var inst_15833 = (state_15890[(14)]);
var inst_15836 = (inst_15834 < inst_15833);
var inst_15837 = inst_15836;
var state_15890__$1 = state_15890;
if(cljs.core.truth_(inst_15837)){
var statearr_15929_15963 = state_15890__$1;
(statearr_15929_15963[(1)] = (10));

} else {
var statearr_15930_15964 = state_15890__$1;
(statearr_15930_15964[(1)] = (11));

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
});})(c__12532__auto___15936,mults,ensure_mult,p))
;
return ((function (switch__12517__auto__,c__12532__auto___15936,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12518__auto__ = null;
var cljs$core$async$state_machine__12518__auto____0 = (function (){
var statearr_15931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15931[(0)] = cljs$core$async$state_machine__12518__auto__);

(statearr_15931[(1)] = (1));

return statearr_15931;
});
var cljs$core$async$state_machine__12518__auto____1 = (function (state_15890){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_15890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e15932){if((e15932 instanceof Object)){
var ex__12521__auto__ = e15932;
var statearr_15933_15965 = state_15890;
(statearr_15933_15965[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15966 = state_15890;
state_15890 = G__15966;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$state_machine__12518__auto__ = function(state_15890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12518__auto____1.call(this,state_15890);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12518__auto____0;
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12518__auto____1;
return cljs$core$async$state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto___15936,mults,ensure_mult,p))
})();
var state__12534__auto__ = (function (){var statearr_15934 = f__12533__auto__.call(null);
(statearr_15934[(6)] = c__12532__auto___15936);

return statearr_15934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto___15936,mults,ensure_mult,p))
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
var G__15968 = arguments.length;
switch (G__15968) {
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
var G__15971 = arguments.length;
switch (G__15971) {
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
var G__15974 = arguments.length;
switch (G__15974) {
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
var c__12532__auto___16041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto___16041,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto___16041,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16013){
var state_val_16014 = (state_16013[(1)]);
if((state_val_16014 === (7))){
var state_16013__$1 = state_16013;
var statearr_16015_16042 = state_16013__$1;
(statearr_16015_16042[(2)] = null);

(statearr_16015_16042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16014 === (1))){
var state_16013__$1 = state_16013;
var statearr_16016_16043 = state_16013__$1;
(statearr_16016_16043[(2)] = null);

(statearr_16016_16043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16014 === (4))){
var inst_15977 = (state_16013[(7)]);
var inst_15979 = (inst_15977 < cnt);
var state_16013__$1 = state_16013;
if(cljs.core.truth_(inst_15979)){
var statearr_16017_16044 = state_16013__$1;
(statearr_16017_16044[(1)] = (6));

} else {
var statearr_16018_16045 = state_16013__$1;
(statearr_16018_16045[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16014 === (15))){
var inst_16009 = (state_16013[(2)]);
var state_16013__$1 = state_16013;
var statearr_16019_16046 = state_16013__$1;
(statearr_16019_16046[(2)] = inst_16009);

(statearr_16019_16046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16014 === (13))){
var inst_16002 = cljs.core.async.close_BANG_.call(null,out);
var state_16013__$1 = state_16013;
var statearr_16020_16047 = state_16013__$1;
(statearr_16020_16047[(2)] = inst_16002);

(statearr_16020_16047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16014 === (6))){
var state_16013__$1 = state_16013;
var statearr_16021_16048 = state_16013__$1;
(statearr_16021_16048[(2)] = null);

(statearr_16021_16048[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16014 === (3))){
var inst_16011 = (state_16013[(2)]);
var state_16013__$1 = state_16013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16013__$1,inst_16011);
} else {
if((state_val_16014 === (12))){
var inst_15999 = (state_16013[(8)]);
var inst_15999__$1 = (state_16013[(2)]);
var inst_16000 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15999__$1);
var state_16013__$1 = (function (){var statearr_16022 = state_16013;
(statearr_16022[(8)] = inst_15999__$1);

return statearr_16022;
})();
if(cljs.core.truth_(inst_16000)){
var statearr_16023_16049 = state_16013__$1;
(statearr_16023_16049[(1)] = (13));

} else {
var statearr_16024_16050 = state_16013__$1;
(statearr_16024_16050[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16014 === (2))){
var inst_15976 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15977 = (0);
var state_16013__$1 = (function (){var statearr_16025 = state_16013;
(statearr_16025[(7)] = inst_15977);

(statearr_16025[(9)] = inst_15976);

return statearr_16025;
})();
var statearr_16026_16051 = state_16013__$1;
(statearr_16026_16051[(2)] = null);

(statearr_16026_16051[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16014 === (11))){
var inst_15977 = (state_16013[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16013,(10),Object,null,(9));
var inst_15986 = chs__$1.call(null,inst_15977);
var inst_15987 = done.call(null,inst_15977);
var inst_15988 = cljs.core.async.take_BANG_.call(null,inst_15986,inst_15987);
var state_16013__$1 = state_16013;
var statearr_16027_16052 = state_16013__$1;
(statearr_16027_16052[(2)] = inst_15988);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16013__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16014 === (9))){
var inst_15977 = (state_16013[(7)]);
var inst_15990 = (state_16013[(2)]);
var inst_15991 = (inst_15977 + (1));
var inst_15977__$1 = inst_15991;
var state_16013__$1 = (function (){var statearr_16028 = state_16013;
(statearr_16028[(7)] = inst_15977__$1);

(statearr_16028[(10)] = inst_15990);

return statearr_16028;
})();
var statearr_16029_16053 = state_16013__$1;
(statearr_16029_16053[(2)] = null);

(statearr_16029_16053[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16014 === (5))){
var inst_15997 = (state_16013[(2)]);
var state_16013__$1 = (function (){var statearr_16030 = state_16013;
(statearr_16030[(11)] = inst_15997);

return statearr_16030;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16013__$1,(12),dchan);
} else {
if((state_val_16014 === (14))){
var inst_15999 = (state_16013[(8)]);
var inst_16004 = cljs.core.apply.call(null,f,inst_15999);
var state_16013__$1 = state_16013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16013__$1,(16),out,inst_16004);
} else {
if((state_val_16014 === (16))){
var inst_16006 = (state_16013[(2)]);
var state_16013__$1 = (function (){var statearr_16031 = state_16013;
(statearr_16031[(12)] = inst_16006);

return statearr_16031;
})();
var statearr_16032_16054 = state_16013__$1;
(statearr_16032_16054[(2)] = null);

(statearr_16032_16054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16014 === (10))){
var inst_15981 = (state_16013[(2)]);
var inst_15982 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16013__$1 = (function (){var statearr_16033 = state_16013;
(statearr_16033[(13)] = inst_15981);

return statearr_16033;
})();
var statearr_16034_16055 = state_16013__$1;
(statearr_16034_16055[(2)] = inst_15982);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16013__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16014 === (8))){
var inst_15995 = (state_16013[(2)]);
var state_16013__$1 = state_16013;
var statearr_16035_16056 = state_16013__$1;
(statearr_16035_16056[(2)] = inst_15995);

(statearr_16035_16056[(1)] = (5));


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
});})(c__12532__auto___16041,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12517__auto__,c__12532__auto___16041,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12518__auto__ = null;
var cljs$core$async$state_machine__12518__auto____0 = (function (){
var statearr_16036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16036[(0)] = cljs$core$async$state_machine__12518__auto__);

(statearr_16036[(1)] = (1));

return statearr_16036;
});
var cljs$core$async$state_machine__12518__auto____1 = (function (state_16013){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_16013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e16037){if((e16037 instanceof Object)){
var ex__12521__auto__ = e16037;
var statearr_16038_16057 = state_16013;
(statearr_16038_16057[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16058 = state_16013;
state_16013 = G__16058;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$state_machine__12518__auto__ = function(state_16013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12518__auto____1.call(this,state_16013);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12518__auto____0;
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12518__auto____1;
return cljs$core$async$state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto___16041,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12534__auto__ = (function (){var statearr_16039 = f__12533__auto__.call(null);
(statearr_16039[(6)] = c__12532__auto___16041);

return statearr_16039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto___16041,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__16061 = arguments.length;
switch (G__16061) {
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
var c__12532__auto___16115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto___16115,out){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto___16115,out){
return (function (state_16093){
var state_val_16094 = (state_16093[(1)]);
if((state_val_16094 === (7))){
var inst_16072 = (state_16093[(7)]);
var inst_16073 = (state_16093[(8)]);
var inst_16072__$1 = (state_16093[(2)]);
var inst_16073__$1 = cljs.core.nth.call(null,inst_16072__$1,(0),null);
var inst_16074 = cljs.core.nth.call(null,inst_16072__$1,(1),null);
var inst_16075 = (inst_16073__$1 == null);
var state_16093__$1 = (function (){var statearr_16095 = state_16093;
(statearr_16095[(7)] = inst_16072__$1);

(statearr_16095[(9)] = inst_16074);

(statearr_16095[(8)] = inst_16073__$1);

return statearr_16095;
})();
if(cljs.core.truth_(inst_16075)){
var statearr_16096_16116 = state_16093__$1;
(statearr_16096_16116[(1)] = (8));

} else {
var statearr_16097_16117 = state_16093__$1;
(statearr_16097_16117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (1))){
var inst_16062 = cljs.core.vec.call(null,chs);
var inst_16063 = inst_16062;
var state_16093__$1 = (function (){var statearr_16098 = state_16093;
(statearr_16098[(10)] = inst_16063);

return statearr_16098;
})();
var statearr_16099_16118 = state_16093__$1;
(statearr_16099_16118[(2)] = null);

(statearr_16099_16118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (4))){
var inst_16063 = (state_16093[(10)]);
var state_16093__$1 = state_16093;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16093__$1,(7),inst_16063);
} else {
if((state_val_16094 === (6))){
var inst_16089 = (state_16093[(2)]);
var state_16093__$1 = state_16093;
var statearr_16100_16119 = state_16093__$1;
(statearr_16100_16119[(2)] = inst_16089);

(statearr_16100_16119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (3))){
var inst_16091 = (state_16093[(2)]);
var state_16093__$1 = state_16093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16093__$1,inst_16091);
} else {
if((state_val_16094 === (2))){
var inst_16063 = (state_16093[(10)]);
var inst_16065 = cljs.core.count.call(null,inst_16063);
var inst_16066 = (inst_16065 > (0));
var state_16093__$1 = state_16093;
if(cljs.core.truth_(inst_16066)){
var statearr_16102_16120 = state_16093__$1;
(statearr_16102_16120[(1)] = (4));

} else {
var statearr_16103_16121 = state_16093__$1;
(statearr_16103_16121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (11))){
var inst_16063 = (state_16093[(10)]);
var inst_16082 = (state_16093[(2)]);
var tmp16101 = inst_16063;
var inst_16063__$1 = tmp16101;
var state_16093__$1 = (function (){var statearr_16104 = state_16093;
(statearr_16104[(11)] = inst_16082);

(statearr_16104[(10)] = inst_16063__$1);

return statearr_16104;
})();
var statearr_16105_16122 = state_16093__$1;
(statearr_16105_16122[(2)] = null);

(statearr_16105_16122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (9))){
var inst_16073 = (state_16093[(8)]);
var state_16093__$1 = state_16093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16093__$1,(11),out,inst_16073);
} else {
if((state_val_16094 === (5))){
var inst_16087 = cljs.core.async.close_BANG_.call(null,out);
var state_16093__$1 = state_16093;
var statearr_16106_16123 = state_16093__$1;
(statearr_16106_16123[(2)] = inst_16087);

(statearr_16106_16123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (10))){
var inst_16085 = (state_16093[(2)]);
var state_16093__$1 = state_16093;
var statearr_16107_16124 = state_16093__$1;
(statearr_16107_16124[(2)] = inst_16085);

(statearr_16107_16124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16094 === (8))){
var inst_16072 = (state_16093[(7)]);
var inst_16074 = (state_16093[(9)]);
var inst_16063 = (state_16093[(10)]);
var inst_16073 = (state_16093[(8)]);
var inst_16077 = (function (){var cs = inst_16063;
var vec__16068 = inst_16072;
var v = inst_16073;
var c = inst_16074;
return ((function (cs,vec__16068,v,c,inst_16072,inst_16074,inst_16063,inst_16073,state_val_16094,c__12532__auto___16115,out){
return (function (p1__16059_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16059_SHARP_);
});
;})(cs,vec__16068,v,c,inst_16072,inst_16074,inst_16063,inst_16073,state_val_16094,c__12532__auto___16115,out))
})();
var inst_16078 = cljs.core.filterv.call(null,inst_16077,inst_16063);
var inst_16063__$1 = inst_16078;
var state_16093__$1 = (function (){var statearr_16108 = state_16093;
(statearr_16108[(10)] = inst_16063__$1);

return statearr_16108;
})();
var statearr_16109_16125 = state_16093__$1;
(statearr_16109_16125[(2)] = null);

(statearr_16109_16125[(1)] = (2));


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
});})(c__12532__auto___16115,out))
;
return ((function (switch__12517__auto__,c__12532__auto___16115,out){
return (function() {
var cljs$core$async$state_machine__12518__auto__ = null;
var cljs$core$async$state_machine__12518__auto____0 = (function (){
var statearr_16110 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16110[(0)] = cljs$core$async$state_machine__12518__auto__);

(statearr_16110[(1)] = (1));

return statearr_16110;
});
var cljs$core$async$state_machine__12518__auto____1 = (function (state_16093){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_16093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e16111){if((e16111 instanceof Object)){
var ex__12521__auto__ = e16111;
var statearr_16112_16126 = state_16093;
(statearr_16112_16126[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16127 = state_16093;
state_16093 = G__16127;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$state_machine__12518__auto__ = function(state_16093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12518__auto____1.call(this,state_16093);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12518__auto____0;
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12518__auto____1;
return cljs$core$async$state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto___16115,out))
})();
var state__12534__auto__ = (function (){var statearr_16113 = f__12533__auto__.call(null);
(statearr_16113[(6)] = c__12532__auto___16115);

return statearr_16113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto___16115,out))
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
var G__16129 = arguments.length;
switch (G__16129) {
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
var c__12532__auto___16174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto___16174,out){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto___16174,out){
return (function (state_16153){
var state_val_16154 = (state_16153[(1)]);
if((state_val_16154 === (7))){
var inst_16135 = (state_16153[(7)]);
var inst_16135__$1 = (state_16153[(2)]);
var inst_16136 = (inst_16135__$1 == null);
var inst_16137 = cljs.core.not.call(null,inst_16136);
var state_16153__$1 = (function (){var statearr_16155 = state_16153;
(statearr_16155[(7)] = inst_16135__$1);

return statearr_16155;
})();
if(inst_16137){
var statearr_16156_16175 = state_16153__$1;
(statearr_16156_16175[(1)] = (8));

} else {
var statearr_16157_16176 = state_16153__$1;
(statearr_16157_16176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (1))){
var inst_16130 = (0);
var state_16153__$1 = (function (){var statearr_16158 = state_16153;
(statearr_16158[(8)] = inst_16130);

return statearr_16158;
})();
var statearr_16159_16177 = state_16153__$1;
(statearr_16159_16177[(2)] = null);

(statearr_16159_16177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (4))){
var state_16153__$1 = state_16153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16153__$1,(7),ch);
} else {
if((state_val_16154 === (6))){
var inst_16148 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
var statearr_16160_16178 = state_16153__$1;
(statearr_16160_16178[(2)] = inst_16148);

(statearr_16160_16178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (3))){
var inst_16150 = (state_16153[(2)]);
var inst_16151 = cljs.core.async.close_BANG_.call(null,out);
var state_16153__$1 = (function (){var statearr_16161 = state_16153;
(statearr_16161[(9)] = inst_16150);

return statearr_16161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16153__$1,inst_16151);
} else {
if((state_val_16154 === (2))){
var inst_16130 = (state_16153[(8)]);
var inst_16132 = (inst_16130 < n);
var state_16153__$1 = state_16153;
if(cljs.core.truth_(inst_16132)){
var statearr_16162_16179 = state_16153__$1;
(statearr_16162_16179[(1)] = (4));

} else {
var statearr_16163_16180 = state_16153__$1;
(statearr_16163_16180[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (11))){
var inst_16130 = (state_16153[(8)]);
var inst_16140 = (state_16153[(2)]);
var inst_16141 = (inst_16130 + (1));
var inst_16130__$1 = inst_16141;
var state_16153__$1 = (function (){var statearr_16164 = state_16153;
(statearr_16164[(8)] = inst_16130__$1);

(statearr_16164[(10)] = inst_16140);

return statearr_16164;
})();
var statearr_16165_16181 = state_16153__$1;
(statearr_16165_16181[(2)] = null);

(statearr_16165_16181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (9))){
var state_16153__$1 = state_16153;
var statearr_16166_16182 = state_16153__$1;
(statearr_16166_16182[(2)] = null);

(statearr_16166_16182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (5))){
var state_16153__$1 = state_16153;
var statearr_16167_16183 = state_16153__$1;
(statearr_16167_16183[(2)] = null);

(statearr_16167_16183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (10))){
var inst_16145 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
var statearr_16168_16184 = state_16153__$1;
(statearr_16168_16184[(2)] = inst_16145);

(statearr_16168_16184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (8))){
var inst_16135 = (state_16153[(7)]);
var state_16153__$1 = state_16153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16153__$1,(11),out,inst_16135);
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
});})(c__12532__auto___16174,out))
;
return ((function (switch__12517__auto__,c__12532__auto___16174,out){
return (function() {
var cljs$core$async$state_machine__12518__auto__ = null;
var cljs$core$async$state_machine__12518__auto____0 = (function (){
var statearr_16169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16169[(0)] = cljs$core$async$state_machine__12518__auto__);

(statearr_16169[(1)] = (1));

return statearr_16169;
});
var cljs$core$async$state_machine__12518__auto____1 = (function (state_16153){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_16153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e16170){if((e16170 instanceof Object)){
var ex__12521__auto__ = e16170;
var statearr_16171_16185 = state_16153;
(statearr_16171_16185[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16186 = state_16153;
state_16153 = G__16186;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$state_machine__12518__auto__ = function(state_16153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12518__auto____1.call(this,state_16153);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12518__auto____0;
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12518__auto____1;
return cljs$core$async$state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto___16174,out))
})();
var state__12534__auto__ = (function (){var statearr_16172 = f__12533__auto__.call(null);
(statearr_16172[(6)] = c__12532__auto___16174);

return statearr_16172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto___16174,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16188 = (function (f,ch,meta16189){
this.f = f;
this.ch = ch;
this.meta16189 = meta16189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16190,meta16189__$1){
var self__ = this;
var _16190__$1 = this;
return (new cljs.core.async.t_cljs$core$async16188(self__.f,self__.ch,meta16189__$1));
});

cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16190){
var self__ = this;
var _16190__$1 = this;
return self__.meta16189;
});

cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16191 = (function (f,ch,meta16189,_,fn1,meta16192){
this.f = f;
this.ch = ch;
this.meta16189 = meta16189;
this._ = _;
this.fn1 = fn1;
this.meta16192 = meta16192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16193,meta16192__$1){
var self__ = this;
var _16193__$1 = this;
return (new cljs.core.async.t_cljs$core$async16191(self__.f,self__.ch,self__.meta16189,self__._,self__.fn1,meta16192__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16193){
var self__ = this;
var _16193__$1 = this;
return self__.meta16192;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16191.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16191.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16187_SHARP_){
return f1.call(null,(((p1__16187_SHARP_ == null))?null:self__.f.call(null,p1__16187_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16191.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16189","meta16189",-30241282,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16188","cljs.core.async/t_cljs$core$async16188",-503274830,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16192","meta16192",-224500958,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16191";

cljs.core.async.t_cljs$core$async16191.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async16191");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16191.
 */
cljs.core.async.__GT_t_cljs$core$async16191 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16191(f__$1,ch__$1,meta16189__$1,___$2,fn1__$1,meta16192){
return (new cljs.core.async.t_cljs$core$async16191(f__$1,ch__$1,meta16189__$1,___$2,fn1__$1,meta16192));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16191(self__.f,self__.ch,self__.meta16189,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16188.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16189","meta16189",-30241282,null)], null);
});

cljs.core.async.t_cljs$core$async16188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16188";

cljs.core.async.t_cljs$core$async16188.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async16188");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16188.
 */
cljs.core.async.__GT_t_cljs$core$async16188 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16188(f__$1,ch__$1,meta16189){
return (new cljs.core.async.t_cljs$core$async16188(f__$1,ch__$1,meta16189));
});

}

return (new cljs.core.async.t_cljs$core$async16188(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16194 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16194 = (function (f,ch,meta16195){
this.f = f;
this.ch = ch;
this.meta16195 = meta16195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16196,meta16195__$1){
var self__ = this;
var _16196__$1 = this;
return (new cljs.core.async.t_cljs$core$async16194(self__.f,self__.ch,meta16195__$1));
});

cljs.core.async.t_cljs$core$async16194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16196){
var self__ = this;
var _16196__$1 = this;
return self__.meta16195;
});

cljs.core.async.t_cljs$core$async16194.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16194.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16194.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16194.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16194.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16194.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async16194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16195","meta16195",-1529522330,null)], null);
});

cljs.core.async.t_cljs$core$async16194.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16194";

cljs.core.async.t_cljs$core$async16194.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async16194");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16194.
 */
cljs.core.async.__GT_t_cljs$core$async16194 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16194(f__$1,ch__$1,meta16195){
return (new cljs.core.async.t_cljs$core$async16194(f__$1,ch__$1,meta16195));
});

}

return (new cljs.core.async.t_cljs$core$async16194(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16197 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16197 = (function (p,ch,meta16198){
this.p = p;
this.ch = ch;
this.meta16198 = meta16198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16199,meta16198__$1){
var self__ = this;
var _16199__$1 = this;
return (new cljs.core.async.t_cljs$core$async16197(self__.p,self__.ch,meta16198__$1));
});

cljs.core.async.t_cljs$core$async16197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16199){
var self__ = this;
var _16199__$1 = this;
return self__.meta16198;
});

cljs.core.async.t_cljs$core$async16197.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16197.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16197.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16197.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16197.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16197.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16197.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16198","meta16198",980528619,null)], null);
});

cljs.core.async.t_cljs$core$async16197.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16197";

cljs.core.async.t_cljs$core$async16197.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async16197");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16197.
 */
cljs.core.async.__GT_t_cljs$core$async16197 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16197(p__$1,ch__$1,meta16198){
return (new cljs.core.async.t_cljs$core$async16197(p__$1,ch__$1,meta16198));
});

}

return (new cljs.core.async.t_cljs$core$async16197(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16201 = arguments.length;
switch (G__16201) {
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
var c__12532__auto___16241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto___16241,out){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto___16241,out){
return (function (state_16222){
var state_val_16223 = (state_16222[(1)]);
if((state_val_16223 === (7))){
var inst_16218 = (state_16222[(2)]);
var state_16222__$1 = state_16222;
var statearr_16224_16242 = state_16222__$1;
(statearr_16224_16242[(2)] = inst_16218);

(statearr_16224_16242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (1))){
var state_16222__$1 = state_16222;
var statearr_16225_16243 = state_16222__$1;
(statearr_16225_16243[(2)] = null);

(statearr_16225_16243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (4))){
var inst_16204 = (state_16222[(7)]);
var inst_16204__$1 = (state_16222[(2)]);
var inst_16205 = (inst_16204__$1 == null);
var state_16222__$1 = (function (){var statearr_16226 = state_16222;
(statearr_16226[(7)] = inst_16204__$1);

return statearr_16226;
})();
if(cljs.core.truth_(inst_16205)){
var statearr_16227_16244 = state_16222__$1;
(statearr_16227_16244[(1)] = (5));

} else {
var statearr_16228_16245 = state_16222__$1;
(statearr_16228_16245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (6))){
var inst_16204 = (state_16222[(7)]);
var inst_16209 = p.call(null,inst_16204);
var state_16222__$1 = state_16222;
if(cljs.core.truth_(inst_16209)){
var statearr_16229_16246 = state_16222__$1;
(statearr_16229_16246[(1)] = (8));

} else {
var statearr_16230_16247 = state_16222__$1;
(statearr_16230_16247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (3))){
var inst_16220 = (state_16222[(2)]);
var state_16222__$1 = state_16222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16222__$1,inst_16220);
} else {
if((state_val_16223 === (2))){
var state_16222__$1 = state_16222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16222__$1,(4),ch);
} else {
if((state_val_16223 === (11))){
var inst_16212 = (state_16222[(2)]);
var state_16222__$1 = state_16222;
var statearr_16231_16248 = state_16222__$1;
(statearr_16231_16248[(2)] = inst_16212);

(statearr_16231_16248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (9))){
var state_16222__$1 = state_16222;
var statearr_16232_16249 = state_16222__$1;
(statearr_16232_16249[(2)] = null);

(statearr_16232_16249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (5))){
var inst_16207 = cljs.core.async.close_BANG_.call(null,out);
var state_16222__$1 = state_16222;
var statearr_16233_16250 = state_16222__$1;
(statearr_16233_16250[(2)] = inst_16207);

(statearr_16233_16250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (10))){
var inst_16215 = (state_16222[(2)]);
var state_16222__$1 = (function (){var statearr_16234 = state_16222;
(statearr_16234[(8)] = inst_16215);

return statearr_16234;
})();
var statearr_16235_16251 = state_16222__$1;
(statearr_16235_16251[(2)] = null);

(statearr_16235_16251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (8))){
var inst_16204 = (state_16222[(7)]);
var state_16222__$1 = state_16222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16222__$1,(11),out,inst_16204);
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
});})(c__12532__auto___16241,out))
;
return ((function (switch__12517__auto__,c__12532__auto___16241,out){
return (function() {
var cljs$core$async$state_machine__12518__auto__ = null;
var cljs$core$async$state_machine__12518__auto____0 = (function (){
var statearr_16236 = [null,null,null,null,null,null,null,null,null];
(statearr_16236[(0)] = cljs$core$async$state_machine__12518__auto__);

(statearr_16236[(1)] = (1));

return statearr_16236;
});
var cljs$core$async$state_machine__12518__auto____1 = (function (state_16222){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_16222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e16237){if((e16237 instanceof Object)){
var ex__12521__auto__ = e16237;
var statearr_16238_16252 = state_16222;
(statearr_16238_16252[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16253 = state_16222;
state_16222 = G__16253;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$state_machine__12518__auto__ = function(state_16222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12518__auto____1.call(this,state_16222);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12518__auto____0;
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12518__auto____1;
return cljs$core$async$state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto___16241,out))
})();
var state__12534__auto__ = (function (){var statearr_16239 = f__12533__auto__.call(null);
(statearr_16239[(6)] = c__12532__auto___16241);

return statearr_16239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto___16241,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16255 = arguments.length;
switch (G__16255) {
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
var c__12532__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto__){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto__){
return (function (state_16318){
var state_val_16319 = (state_16318[(1)]);
if((state_val_16319 === (7))){
var inst_16314 = (state_16318[(2)]);
var state_16318__$1 = state_16318;
var statearr_16320_16358 = state_16318__$1;
(statearr_16320_16358[(2)] = inst_16314);

(statearr_16320_16358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (20))){
var inst_16284 = (state_16318[(7)]);
var inst_16295 = (state_16318[(2)]);
var inst_16296 = cljs.core.next.call(null,inst_16284);
var inst_16270 = inst_16296;
var inst_16271 = null;
var inst_16272 = (0);
var inst_16273 = (0);
var state_16318__$1 = (function (){var statearr_16321 = state_16318;
(statearr_16321[(8)] = inst_16272);

(statearr_16321[(9)] = inst_16271);

(statearr_16321[(10)] = inst_16273);

(statearr_16321[(11)] = inst_16270);

(statearr_16321[(12)] = inst_16295);

return statearr_16321;
})();
var statearr_16322_16359 = state_16318__$1;
(statearr_16322_16359[(2)] = null);

(statearr_16322_16359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (1))){
var state_16318__$1 = state_16318;
var statearr_16323_16360 = state_16318__$1;
(statearr_16323_16360[(2)] = null);

(statearr_16323_16360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (4))){
var inst_16259 = (state_16318[(13)]);
var inst_16259__$1 = (state_16318[(2)]);
var inst_16260 = (inst_16259__$1 == null);
var state_16318__$1 = (function (){var statearr_16324 = state_16318;
(statearr_16324[(13)] = inst_16259__$1);

return statearr_16324;
})();
if(cljs.core.truth_(inst_16260)){
var statearr_16325_16361 = state_16318__$1;
(statearr_16325_16361[(1)] = (5));

} else {
var statearr_16326_16362 = state_16318__$1;
(statearr_16326_16362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (15))){
var state_16318__$1 = state_16318;
var statearr_16330_16363 = state_16318__$1;
(statearr_16330_16363[(2)] = null);

(statearr_16330_16363[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (21))){
var state_16318__$1 = state_16318;
var statearr_16331_16364 = state_16318__$1;
(statearr_16331_16364[(2)] = null);

(statearr_16331_16364[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (13))){
var inst_16272 = (state_16318[(8)]);
var inst_16271 = (state_16318[(9)]);
var inst_16273 = (state_16318[(10)]);
var inst_16270 = (state_16318[(11)]);
var inst_16280 = (state_16318[(2)]);
var inst_16281 = (inst_16273 + (1));
var tmp16327 = inst_16272;
var tmp16328 = inst_16271;
var tmp16329 = inst_16270;
var inst_16270__$1 = tmp16329;
var inst_16271__$1 = tmp16328;
var inst_16272__$1 = tmp16327;
var inst_16273__$1 = inst_16281;
var state_16318__$1 = (function (){var statearr_16332 = state_16318;
(statearr_16332[(8)] = inst_16272__$1);

(statearr_16332[(9)] = inst_16271__$1);

(statearr_16332[(10)] = inst_16273__$1);

(statearr_16332[(14)] = inst_16280);

(statearr_16332[(11)] = inst_16270__$1);

return statearr_16332;
})();
var statearr_16333_16365 = state_16318__$1;
(statearr_16333_16365[(2)] = null);

(statearr_16333_16365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (22))){
var state_16318__$1 = state_16318;
var statearr_16334_16366 = state_16318__$1;
(statearr_16334_16366[(2)] = null);

(statearr_16334_16366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (6))){
var inst_16259 = (state_16318[(13)]);
var inst_16268 = f.call(null,inst_16259);
var inst_16269 = cljs.core.seq.call(null,inst_16268);
var inst_16270 = inst_16269;
var inst_16271 = null;
var inst_16272 = (0);
var inst_16273 = (0);
var state_16318__$1 = (function (){var statearr_16335 = state_16318;
(statearr_16335[(8)] = inst_16272);

(statearr_16335[(9)] = inst_16271);

(statearr_16335[(10)] = inst_16273);

(statearr_16335[(11)] = inst_16270);

return statearr_16335;
})();
var statearr_16336_16367 = state_16318__$1;
(statearr_16336_16367[(2)] = null);

(statearr_16336_16367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (17))){
var inst_16284 = (state_16318[(7)]);
var inst_16288 = cljs.core.chunk_first.call(null,inst_16284);
var inst_16289 = cljs.core.chunk_rest.call(null,inst_16284);
var inst_16290 = cljs.core.count.call(null,inst_16288);
var inst_16270 = inst_16289;
var inst_16271 = inst_16288;
var inst_16272 = inst_16290;
var inst_16273 = (0);
var state_16318__$1 = (function (){var statearr_16337 = state_16318;
(statearr_16337[(8)] = inst_16272);

(statearr_16337[(9)] = inst_16271);

(statearr_16337[(10)] = inst_16273);

(statearr_16337[(11)] = inst_16270);

return statearr_16337;
})();
var statearr_16338_16368 = state_16318__$1;
(statearr_16338_16368[(2)] = null);

(statearr_16338_16368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (3))){
var inst_16316 = (state_16318[(2)]);
var state_16318__$1 = state_16318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16318__$1,inst_16316);
} else {
if((state_val_16319 === (12))){
var inst_16304 = (state_16318[(2)]);
var state_16318__$1 = state_16318;
var statearr_16339_16369 = state_16318__$1;
(statearr_16339_16369[(2)] = inst_16304);

(statearr_16339_16369[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (2))){
var state_16318__$1 = state_16318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16318__$1,(4),in$);
} else {
if((state_val_16319 === (23))){
var inst_16312 = (state_16318[(2)]);
var state_16318__$1 = state_16318;
var statearr_16340_16370 = state_16318__$1;
(statearr_16340_16370[(2)] = inst_16312);

(statearr_16340_16370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (19))){
var inst_16299 = (state_16318[(2)]);
var state_16318__$1 = state_16318;
var statearr_16341_16371 = state_16318__$1;
(statearr_16341_16371[(2)] = inst_16299);

(statearr_16341_16371[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (11))){
var inst_16284 = (state_16318[(7)]);
var inst_16270 = (state_16318[(11)]);
var inst_16284__$1 = cljs.core.seq.call(null,inst_16270);
var state_16318__$1 = (function (){var statearr_16342 = state_16318;
(statearr_16342[(7)] = inst_16284__$1);

return statearr_16342;
})();
if(inst_16284__$1){
var statearr_16343_16372 = state_16318__$1;
(statearr_16343_16372[(1)] = (14));

} else {
var statearr_16344_16373 = state_16318__$1;
(statearr_16344_16373[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (9))){
var inst_16306 = (state_16318[(2)]);
var inst_16307 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16318__$1 = (function (){var statearr_16345 = state_16318;
(statearr_16345[(15)] = inst_16306);

return statearr_16345;
})();
if(cljs.core.truth_(inst_16307)){
var statearr_16346_16374 = state_16318__$1;
(statearr_16346_16374[(1)] = (21));

} else {
var statearr_16347_16375 = state_16318__$1;
(statearr_16347_16375[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (5))){
var inst_16262 = cljs.core.async.close_BANG_.call(null,out);
var state_16318__$1 = state_16318;
var statearr_16348_16376 = state_16318__$1;
(statearr_16348_16376[(2)] = inst_16262);

(statearr_16348_16376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (14))){
var inst_16284 = (state_16318[(7)]);
var inst_16286 = cljs.core.chunked_seq_QMARK_.call(null,inst_16284);
var state_16318__$1 = state_16318;
if(inst_16286){
var statearr_16349_16377 = state_16318__$1;
(statearr_16349_16377[(1)] = (17));

} else {
var statearr_16350_16378 = state_16318__$1;
(statearr_16350_16378[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (16))){
var inst_16302 = (state_16318[(2)]);
var state_16318__$1 = state_16318;
var statearr_16351_16379 = state_16318__$1;
(statearr_16351_16379[(2)] = inst_16302);

(statearr_16351_16379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (10))){
var inst_16271 = (state_16318[(9)]);
var inst_16273 = (state_16318[(10)]);
var inst_16278 = cljs.core._nth.call(null,inst_16271,inst_16273);
var state_16318__$1 = state_16318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16318__$1,(13),out,inst_16278);
} else {
if((state_val_16319 === (18))){
var inst_16284 = (state_16318[(7)]);
var inst_16293 = cljs.core.first.call(null,inst_16284);
var state_16318__$1 = state_16318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16318__$1,(20),out,inst_16293);
} else {
if((state_val_16319 === (8))){
var inst_16272 = (state_16318[(8)]);
var inst_16273 = (state_16318[(10)]);
var inst_16275 = (inst_16273 < inst_16272);
var inst_16276 = inst_16275;
var state_16318__$1 = state_16318;
if(cljs.core.truth_(inst_16276)){
var statearr_16352_16380 = state_16318__$1;
(statearr_16352_16380[(1)] = (10));

} else {
var statearr_16353_16381 = state_16318__$1;
(statearr_16353_16381[(1)] = (11));

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
});})(c__12532__auto__))
;
return ((function (switch__12517__auto__,c__12532__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12518__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12518__auto____0 = (function (){
var statearr_16354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16354[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12518__auto__);

(statearr_16354[(1)] = (1));

return statearr_16354;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12518__auto____1 = (function (state_16318){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_16318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e16355){if((e16355 instanceof Object)){
var ex__12521__auto__ = e16355;
var statearr_16356_16382 = state_16318;
(statearr_16356_16382[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16383 = state_16318;
state_16318 = G__16383;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12518__auto__ = function(state_16318){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12518__auto____1.call(this,state_16318);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12518__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12518__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto__))
})();
var state__12534__auto__ = (function (){var statearr_16357 = f__12533__auto__.call(null);
(statearr_16357[(6)] = c__12532__auto__);

return statearr_16357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto__))
);

return c__12532__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16385 = arguments.length;
switch (G__16385) {
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
var G__16388 = arguments.length;
switch (G__16388) {
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
var G__16391 = arguments.length;
switch (G__16391) {
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
var c__12532__auto___16438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto___16438,out){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto___16438,out){
return (function (state_16415){
var state_val_16416 = (state_16415[(1)]);
if((state_val_16416 === (7))){
var inst_16410 = (state_16415[(2)]);
var state_16415__$1 = state_16415;
var statearr_16417_16439 = state_16415__$1;
(statearr_16417_16439[(2)] = inst_16410);

(statearr_16417_16439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (1))){
var inst_16392 = null;
var state_16415__$1 = (function (){var statearr_16418 = state_16415;
(statearr_16418[(7)] = inst_16392);

return statearr_16418;
})();
var statearr_16419_16440 = state_16415__$1;
(statearr_16419_16440[(2)] = null);

(statearr_16419_16440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (4))){
var inst_16395 = (state_16415[(8)]);
var inst_16395__$1 = (state_16415[(2)]);
var inst_16396 = (inst_16395__$1 == null);
var inst_16397 = cljs.core.not.call(null,inst_16396);
var state_16415__$1 = (function (){var statearr_16420 = state_16415;
(statearr_16420[(8)] = inst_16395__$1);

return statearr_16420;
})();
if(inst_16397){
var statearr_16421_16441 = state_16415__$1;
(statearr_16421_16441[(1)] = (5));

} else {
var statearr_16422_16442 = state_16415__$1;
(statearr_16422_16442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (6))){
var state_16415__$1 = state_16415;
var statearr_16423_16443 = state_16415__$1;
(statearr_16423_16443[(2)] = null);

(statearr_16423_16443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (3))){
var inst_16412 = (state_16415[(2)]);
var inst_16413 = cljs.core.async.close_BANG_.call(null,out);
var state_16415__$1 = (function (){var statearr_16424 = state_16415;
(statearr_16424[(9)] = inst_16412);

return statearr_16424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16415__$1,inst_16413);
} else {
if((state_val_16416 === (2))){
var state_16415__$1 = state_16415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16415__$1,(4),ch);
} else {
if((state_val_16416 === (11))){
var inst_16395 = (state_16415[(8)]);
var inst_16404 = (state_16415[(2)]);
var inst_16392 = inst_16395;
var state_16415__$1 = (function (){var statearr_16425 = state_16415;
(statearr_16425[(7)] = inst_16392);

(statearr_16425[(10)] = inst_16404);

return statearr_16425;
})();
var statearr_16426_16444 = state_16415__$1;
(statearr_16426_16444[(2)] = null);

(statearr_16426_16444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (9))){
var inst_16395 = (state_16415[(8)]);
var state_16415__$1 = state_16415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16415__$1,(11),out,inst_16395);
} else {
if((state_val_16416 === (5))){
var inst_16392 = (state_16415[(7)]);
var inst_16395 = (state_16415[(8)]);
var inst_16399 = cljs.core._EQ_.call(null,inst_16395,inst_16392);
var state_16415__$1 = state_16415;
if(inst_16399){
var statearr_16428_16445 = state_16415__$1;
(statearr_16428_16445[(1)] = (8));

} else {
var statearr_16429_16446 = state_16415__$1;
(statearr_16429_16446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (10))){
var inst_16407 = (state_16415[(2)]);
var state_16415__$1 = state_16415;
var statearr_16430_16447 = state_16415__$1;
(statearr_16430_16447[(2)] = inst_16407);

(statearr_16430_16447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16416 === (8))){
var inst_16392 = (state_16415[(7)]);
var tmp16427 = inst_16392;
var inst_16392__$1 = tmp16427;
var state_16415__$1 = (function (){var statearr_16431 = state_16415;
(statearr_16431[(7)] = inst_16392__$1);

return statearr_16431;
})();
var statearr_16432_16448 = state_16415__$1;
(statearr_16432_16448[(2)] = null);

(statearr_16432_16448[(1)] = (2));


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
});})(c__12532__auto___16438,out))
;
return ((function (switch__12517__auto__,c__12532__auto___16438,out){
return (function() {
var cljs$core$async$state_machine__12518__auto__ = null;
var cljs$core$async$state_machine__12518__auto____0 = (function (){
var statearr_16433 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16433[(0)] = cljs$core$async$state_machine__12518__auto__);

(statearr_16433[(1)] = (1));

return statearr_16433;
});
var cljs$core$async$state_machine__12518__auto____1 = (function (state_16415){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_16415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e16434){if((e16434 instanceof Object)){
var ex__12521__auto__ = e16434;
var statearr_16435_16449 = state_16415;
(statearr_16435_16449[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16450 = state_16415;
state_16415 = G__16450;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$state_machine__12518__auto__ = function(state_16415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12518__auto____1.call(this,state_16415);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12518__auto____0;
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12518__auto____1;
return cljs$core$async$state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto___16438,out))
})();
var state__12534__auto__ = (function (){var statearr_16436 = f__12533__auto__.call(null);
(statearr_16436[(6)] = c__12532__auto___16438);

return statearr_16436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto___16438,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16452 = arguments.length;
switch (G__16452) {
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
var c__12532__auto___16518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto___16518,out){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto___16518,out){
return (function (state_16490){
var state_val_16491 = (state_16490[(1)]);
if((state_val_16491 === (7))){
var inst_16486 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
var statearr_16492_16519 = state_16490__$1;
(statearr_16492_16519[(2)] = inst_16486);

(statearr_16492_16519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (1))){
var inst_16453 = (new Array(n));
var inst_16454 = inst_16453;
var inst_16455 = (0);
var state_16490__$1 = (function (){var statearr_16493 = state_16490;
(statearr_16493[(7)] = inst_16455);

(statearr_16493[(8)] = inst_16454);

return statearr_16493;
})();
var statearr_16494_16520 = state_16490__$1;
(statearr_16494_16520[(2)] = null);

(statearr_16494_16520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (4))){
var inst_16458 = (state_16490[(9)]);
var inst_16458__$1 = (state_16490[(2)]);
var inst_16459 = (inst_16458__$1 == null);
var inst_16460 = cljs.core.not.call(null,inst_16459);
var state_16490__$1 = (function (){var statearr_16495 = state_16490;
(statearr_16495[(9)] = inst_16458__$1);

return statearr_16495;
})();
if(inst_16460){
var statearr_16496_16521 = state_16490__$1;
(statearr_16496_16521[(1)] = (5));

} else {
var statearr_16497_16522 = state_16490__$1;
(statearr_16497_16522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (15))){
var inst_16480 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
var statearr_16498_16523 = state_16490__$1;
(statearr_16498_16523[(2)] = inst_16480);

(statearr_16498_16523[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (13))){
var state_16490__$1 = state_16490;
var statearr_16499_16524 = state_16490__$1;
(statearr_16499_16524[(2)] = null);

(statearr_16499_16524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (6))){
var inst_16455 = (state_16490[(7)]);
var inst_16476 = (inst_16455 > (0));
var state_16490__$1 = state_16490;
if(cljs.core.truth_(inst_16476)){
var statearr_16500_16525 = state_16490__$1;
(statearr_16500_16525[(1)] = (12));

} else {
var statearr_16501_16526 = state_16490__$1;
(statearr_16501_16526[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (3))){
var inst_16488 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16490__$1,inst_16488);
} else {
if((state_val_16491 === (12))){
var inst_16454 = (state_16490[(8)]);
var inst_16478 = cljs.core.vec.call(null,inst_16454);
var state_16490__$1 = state_16490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16490__$1,(15),out,inst_16478);
} else {
if((state_val_16491 === (2))){
var state_16490__$1 = state_16490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16490__$1,(4),ch);
} else {
if((state_val_16491 === (11))){
var inst_16470 = (state_16490[(2)]);
var inst_16471 = (new Array(n));
var inst_16454 = inst_16471;
var inst_16455 = (0);
var state_16490__$1 = (function (){var statearr_16502 = state_16490;
(statearr_16502[(10)] = inst_16470);

(statearr_16502[(7)] = inst_16455);

(statearr_16502[(8)] = inst_16454);

return statearr_16502;
})();
var statearr_16503_16527 = state_16490__$1;
(statearr_16503_16527[(2)] = null);

(statearr_16503_16527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (9))){
var inst_16454 = (state_16490[(8)]);
var inst_16468 = cljs.core.vec.call(null,inst_16454);
var state_16490__$1 = state_16490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16490__$1,(11),out,inst_16468);
} else {
if((state_val_16491 === (5))){
var inst_16463 = (state_16490[(11)]);
var inst_16455 = (state_16490[(7)]);
var inst_16454 = (state_16490[(8)]);
var inst_16458 = (state_16490[(9)]);
var inst_16462 = (inst_16454[inst_16455] = inst_16458);
var inst_16463__$1 = (inst_16455 + (1));
var inst_16464 = (inst_16463__$1 < n);
var state_16490__$1 = (function (){var statearr_16504 = state_16490;
(statearr_16504[(12)] = inst_16462);

(statearr_16504[(11)] = inst_16463__$1);

return statearr_16504;
})();
if(cljs.core.truth_(inst_16464)){
var statearr_16505_16528 = state_16490__$1;
(statearr_16505_16528[(1)] = (8));

} else {
var statearr_16506_16529 = state_16490__$1;
(statearr_16506_16529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (14))){
var inst_16483 = (state_16490[(2)]);
var inst_16484 = cljs.core.async.close_BANG_.call(null,out);
var state_16490__$1 = (function (){var statearr_16508 = state_16490;
(statearr_16508[(13)] = inst_16483);

return statearr_16508;
})();
var statearr_16509_16530 = state_16490__$1;
(statearr_16509_16530[(2)] = inst_16484);

(statearr_16509_16530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (10))){
var inst_16474 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
var statearr_16510_16531 = state_16490__$1;
(statearr_16510_16531[(2)] = inst_16474);

(statearr_16510_16531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16491 === (8))){
var inst_16463 = (state_16490[(11)]);
var inst_16454 = (state_16490[(8)]);
var tmp16507 = inst_16454;
var inst_16454__$1 = tmp16507;
var inst_16455 = inst_16463;
var state_16490__$1 = (function (){var statearr_16511 = state_16490;
(statearr_16511[(7)] = inst_16455);

(statearr_16511[(8)] = inst_16454__$1);

return statearr_16511;
})();
var statearr_16512_16532 = state_16490__$1;
(statearr_16512_16532[(2)] = null);

(statearr_16512_16532[(1)] = (2));


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
});})(c__12532__auto___16518,out))
;
return ((function (switch__12517__auto__,c__12532__auto___16518,out){
return (function() {
var cljs$core$async$state_machine__12518__auto__ = null;
var cljs$core$async$state_machine__12518__auto____0 = (function (){
var statearr_16513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16513[(0)] = cljs$core$async$state_machine__12518__auto__);

(statearr_16513[(1)] = (1));

return statearr_16513;
});
var cljs$core$async$state_machine__12518__auto____1 = (function (state_16490){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_16490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e16514){if((e16514 instanceof Object)){
var ex__12521__auto__ = e16514;
var statearr_16515_16533 = state_16490;
(statearr_16515_16533[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16534 = state_16490;
state_16490 = G__16534;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$state_machine__12518__auto__ = function(state_16490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12518__auto____1.call(this,state_16490);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12518__auto____0;
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12518__auto____1;
return cljs$core$async$state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto___16518,out))
})();
var state__12534__auto__ = (function (){var statearr_16516 = f__12533__auto__.call(null);
(statearr_16516[(6)] = c__12532__auto___16518);

return statearr_16516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto___16518,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16536 = arguments.length;
switch (G__16536) {
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
var c__12532__auto___16606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12532__auto___16606,out){
return (function (){
var f__12533__auto__ = (function (){var switch__12517__auto__ = ((function (c__12532__auto___16606,out){
return (function (state_16578){
var state_val_16579 = (state_16578[(1)]);
if((state_val_16579 === (7))){
var inst_16574 = (state_16578[(2)]);
var state_16578__$1 = state_16578;
var statearr_16580_16607 = state_16578__$1;
(statearr_16580_16607[(2)] = inst_16574);

(statearr_16580_16607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16579 === (1))){
var inst_16537 = [];
var inst_16538 = inst_16537;
var inst_16539 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16578__$1 = (function (){var statearr_16581 = state_16578;
(statearr_16581[(7)] = inst_16538);

(statearr_16581[(8)] = inst_16539);

return statearr_16581;
})();
var statearr_16582_16608 = state_16578__$1;
(statearr_16582_16608[(2)] = null);

(statearr_16582_16608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16579 === (4))){
var inst_16542 = (state_16578[(9)]);
var inst_16542__$1 = (state_16578[(2)]);
var inst_16543 = (inst_16542__$1 == null);
var inst_16544 = cljs.core.not.call(null,inst_16543);
var state_16578__$1 = (function (){var statearr_16583 = state_16578;
(statearr_16583[(9)] = inst_16542__$1);

return statearr_16583;
})();
if(inst_16544){
var statearr_16584_16609 = state_16578__$1;
(statearr_16584_16609[(1)] = (5));

} else {
var statearr_16585_16610 = state_16578__$1;
(statearr_16585_16610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16579 === (15))){
var inst_16568 = (state_16578[(2)]);
var state_16578__$1 = state_16578;
var statearr_16586_16611 = state_16578__$1;
(statearr_16586_16611[(2)] = inst_16568);

(statearr_16586_16611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16579 === (13))){
var state_16578__$1 = state_16578;
var statearr_16587_16612 = state_16578__$1;
(statearr_16587_16612[(2)] = null);

(statearr_16587_16612[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16579 === (6))){
var inst_16538 = (state_16578[(7)]);
var inst_16563 = inst_16538.length;
var inst_16564 = (inst_16563 > (0));
var state_16578__$1 = state_16578;
if(cljs.core.truth_(inst_16564)){
var statearr_16588_16613 = state_16578__$1;
(statearr_16588_16613[(1)] = (12));

} else {
var statearr_16589_16614 = state_16578__$1;
(statearr_16589_16614[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16579 === (3))){
var inst_16576 = (state_16578[(2)]);
var state_16578__$1 = state_16578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16578__$1,inst_16576);
} else {
if((state_val_16579 === (12))){
var inst_16538 = (state_16578[(7)]);
var inst_16566 = cljs.core.vec.call(null,inst_16538);
var state_16578__$1 = state_16578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16578__$1,(15),out,inst_16566);
} else {
if((state_val_16579 === (2))){
var state_16578__$1 = state_16578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16578__$1,(4),ch);
} else {
if((state_val_16579 === (11))){
var inst_16542 = (state_16578[(9)]);
var inst_16546 = (state_16578[(10)]);
var inst_16556 = (state_16578[(2)]);
var inst_16557 = [];
var inst_16558 = inst_16557.push(inst_16542);
var inst_16538 = inst_16557;
var inst_16539 = inst_16546;
var state_16578__$1 = (function (){var statearr_16590 = state_16578;
(statearr_16590[(11)] = inst_16558);

(statearr_16590[(7)] = inst_16538);

(statearr_16590[(12)] = inst_16556);

(statearr_16590[(8)] = inst_16539);

return statearr_16590;
})();
var statearr_16591_16615 = state_16578__$1;
(statearr_16591_16615[(2)] = null);

(statearr_16591_16615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16579 === (9))){
var inst_16538 = (state_16578[(7)]);
var inst_16554 = cljs.core.vec.call(null,inst_16538);
var state_16578__$1 = state_16578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16578__$1,(11),out,inst_16554);
} else {
if((state_val_16579 === (5))){
var inst_16542 = (state_16578[(9)]);
var inst_16546 = (state_16578[(10)]);
var inst_16539 = (state_16578[(8)]);
var inst_16546__$1 = f.call(null,inst_16542);
var inst_16547 = cljs.core._EQ_.call(null,inst_16546__$1,inst_16539);
var inst_16548 = cljs.core.keyword_identical_QMARK_.call(null,inst_16539,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16549 = ((inst_16547) || (inst_16548));
var state_16578__$1 = (function (){var statearr_16592 = state_16578;
(statearr_16592[(10)] = inst_16546__$1);

return statearr_16592;
})();
if(cljs.core.truth_(inst_16549)){
var statearr_16593_16616 = state_16578__$1;
(statearr_16593_16616[(1)] = (8));

} else {
var statearr_16594_16617 = state_16578__$1;
(statearr_16594_16617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16579 === (14))){
var inst_16571 = (state_16578[(2)]);
var inst_16572 = cljs.core.async.close_BANG_.call(null,out);
var state_16578__$1 = (function (){var statearr_16596 = state_16578;
(statearr_16596[(13)] = inst_16571);

return statearr_16596;
})();
var statearr_16597_16618 = state_16578__$1;
(statearr_16597_16618[(2)] = inst_16572);

(statearr_16597_16618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16579 === (10))){
var inst_16561 = (state_16578[(2)]);
var state_16578__$1 = state_16578;
var statearr_16598_16619 = state_16578__$1;
(statearr_16598_16619[(2)] = inst_16561);

(statearr_16598_16619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16579 === (8))){
var inst_16542 = (state_16578[(9)]);
var inst_16538 = (state_16578[(7)]);
var inst_16546 = (state_16578[(10)]);
var inst_16551 = inst_16538.push(inst_16542);
var tmp16595 = inst_16538;
var inst_16538__$1 = tmp16595;
var inst_16539 = inst_16546;
var state_16578__$1 = (function (){var statearr_16599 = state_16578;
(statearr_16599[(7)] = inst_16538__$1);

(statearr_16599[(14)] = inst_16551);

(statearr_16599[(8)] = inst_16539);

return statearr_16599;
})();
var statearr_16600_16620 = state_16578__$1;
(statearr_16600_16620[(2)] = null);

(statearr_16600_16620[(1)] = (2));


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
});})(c__12532__auto___16606,out))
;
return ((function (switch__12517__auto__,c__12532__auto___16606,out){
return (function() {
var cljs$core$async$state_machine__12518__auto__ = null;
var cljs$core$async$state_machine__12518__auto____0 = (function (){
var statearr_16601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16601[(0)] = cljs$core$async$state_machine__12518__auto__);

(statearr_16601[(1)] = (1));

return statearr_16601;
});
var cljs$core$async$state_machine__12518__auto____1 = (function (state_16578){
while(true){
var ret_value__12519__auto__ = (function (){try{while(true){
var result__12520__auto__ = switch__12517__auto__.call(null,state_16578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12520__auto__;
}
break;
}
}catch (e16602){if((e16602 instanceof Object)){
var ex__12521__auto__ = e16602;
var statearr_16603_16621 = state_16578;
(statearr_16603_16621[(5)] = ex__12521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16622 = state_16578;
state_16578 = G__16622;
continue;
} else {
return ret_value__12519__auto__;
}
break;
}
});
cljs$core$async$state_machine__12518__auto__ = function(state_16578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12518__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12518__auto____1.call(this,state_16578);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12518__auto____0;
cljs$core$async$state_machine__12518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12518__auto____1;
return cljs$core$async$state_machine__12518__auto__;
})()
;})(switch__12517__auto__,c__12532__auto___16606,out))
})();
var state__12534__auto__ = (function (){var statearr_16604 = f__12533__auto__.call(null);
(statearr_16604[(6)] = c__12532__auto___16606);

return statearr_16604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12534__auto__);
});})(c__12532__auto___16606,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
