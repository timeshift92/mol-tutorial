require( "source-map-support" ).install()
;
process.on( 'unhandledRejection' , up => { throw up } );
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Error.stackTraceLimit = Infinity;
module.exports;
//mol.js.map
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var globalThis = globalThis || global || self || this
var $ = ( typeof module === 'object' ) ? Object.setPrototypeOf( module['export'+'s'] , globalThis ) : globalThis
$.$$ = $
$.$mol = $  // deprecated

;
"use strict";
var $;
(function ($) {
    let $$;
    (function ($$_1) {
    })($$ = $.$$ || ($.$$ = {}));
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//ambient.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        if (!having)
            return false;
        if (typeof having !== 'object')
            return false;
        if (typeof having['destructor'] !== 'function')
            return false;
        return true;
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//owning.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//fail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//hidden.js.map
;
"use strict";
//writable.js.map
;
"use strict";
var $;
(function ($) {
    var _a;
    class $mol_object2 {
        constructor(init) {
            this[_a] = null;
            if (init)
                init(this);
        }
        get $() {
            if (this[$.$mol_ambient_ref])
                return this[$.$mol_ambient_ref];
            const owner = $.$mol_owning_get(this);
            return this[$.$mol_ambient_ref] = (owner === null || owner === void 0 ? void 0 : owner.$) || $mol_object2.$;
        }
        set $(next) {
            if (this[$.$mol_ambient_ref])
                $.$mol_fail_hidden(new Error('Context already defined'));
            this[$.$mol_ambient_ref] = next;
        }
        static create(init) {
            return new this(init);
        }
        static toString() { return this[Symbol.toStringTag] || this.name; }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    _a = $.$mol_ambient_ref;
    $mol_object2.$ = $;
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//object2.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.cancelled = false;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//tick.js.map
;
"use strict";
var $node = new Proxy({}, { get(target, name, wrapper) {
        const path = require('path');
        const fs = require('fs');
        const mod = require('module');
        if (mod.builtinModules.indexOf(name) >= 0)
            return require(name);
        let dir = path.resolve('.');
        const suffix = `./node_modules/${name}`;
        while (!fs.existsSync(path.join(dir, suffix))) {
            const parent = path.resolve(dir, '..');
            if (parent === dir) {
                $.$mol_exec('.', 'npm', 'install', name);
                try {
                    $.$mol_exec('.', 'npm', 'install', '@types/' + name);
                }
                catch (_a) { }
                break;
            }
            else {
                dir = parent;
            }
        }
        return require(name);
    } });
//node.node.js.map
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//context.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));
//context.node.js.map
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $.$mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $.$mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//attach.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $_1.$mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//object.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $.$mol_object {
        static size(next) {
            return next || {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));
//window.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $.$mol_object2 {
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//wrapper.js.map
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] = $['devtoolsFormatters'] || [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', Object.assign({ 'vertical-align': '8%' }, style), ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//format.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//maybe.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log(path, ...values) {
        if ($.$mol_log_filter() == null)
            return;
        path = String(path);
        if (path.indexOf($.$mol_log_filter()) === -1)
            return;
        const context = $.$mol_log_context();
        if (context)
            context();
        console.debug(path, ...values);
        if ($.$mol_log_debug() == null)
            return;
        if (path.indexOf($.$mol_log_debug()) === -1)
            return;
        debugger;
    }
    $.$mol_log = $mol_log;
})($ || ($ = {}));
//log.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log_group(name, task) {
        const filter = $.$mol_log_filter();
        if (filter == null)
            return task;
        return function $mol_log_group_wrapper(...args) {
            let started = false;
            let prev = $.$mol_log_context();
            $.$mol_log_context(() => {
                if (prev)
                    prev();
                started = true;
                if (filter || prev)
                    console.group(name);
                else
                    console.groupCollapsed(name);
                $.$mol_log_context(prev = null);
            });
            try {
                return task.apply(this, args);
            }
            finally {
                if (started)
                    console.groupEnd();
                $.$mol_log_context(prev);
            }
        };
    }
    $.$mol_log_group = $mol_log_group;
})($ || ($ = {}));
//log_group.js.map
;
"use strict";
var $;
(function ($) {
    let context = null;
    function $mol_log_context(next = context) {
        return context = next;
    }
    $.$mol_log_context = $mol_log_context;
})($ || ($ = {}));
//log_context.js.map
;
"use strict";
var $;
(function ($) {
    let debug;
    function $mol_log_debug(next = debug) {
        return debug = next;
    }
    $.$mol_log_debug = $mol_log_debug;
})($ || ($ = {}));
//log_debug.node.js.map
;
"use strict";
var $;
(function ($) {
    let filter;
    $.$mol_log_filter = function $mol_log_filter(next = filter) {
        return filter = next;
    };
})($ || ($ = {}));
//log_filter.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_log2 extends $.$mol_wrapper {
        constructor(host, id, args) {
            super();
            this.host = host;
            this.id = id;
            this.args = args;
            this.stream = [];
            this[Symbol.toStringTag] = host ? `${host}.${id}` : id;
        }
        static wrap(task) {
            const Inner = this;
            const wrapped = function (...args) {
                const outer = $mol_log2.current;
                const inner = $mol_log2.current = new Inner(this, task.name, args);
                try {
                    return task.call(this, ...args);
                }
                finally {
                    $mol_log2.current = outer;
                    inner.flush();
                }
            };
            return wrapped;
        }
        flush() {
            if (this.stream.length === 0)
                return;
            console.debug(this);
        }
        info(...values) {
            this.stream.push(new $mol_log2_line(...$mol_log2.prefix, ...values));
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, ...$.$mol_maybe(this.host).map($.$mol_dev_format_auto), '.', $.$mol_dev_format_strong(this.id), '(', ...this.args.map($.$mol_dev_format_auto), ') ', $.$mol_dev_format_auto(this.stream));
        }
        static info(...values) {
            const excludes = $mol_log2.excludes;
            if (!excludes)
                return;
            const skip = excludes.some((regexp, index) => {
                return regexp && regexp.test(String(values[index])) || false;
            });
            if (skip)
                return;
            if (!$mol_log2.current) {
                console.warn(new Error(`$mol_log.current is not defined. Wrap entry point to $mol_log!`));
                $mol_log2.current = new $mol_log2(null, '$mol_log2_default', []);
                console.debug($mol_log2.current);
            }
            $mol_log2.current.info(...values);
        }
    }
    $mol_log2.current = null;
    $mol_log2.excludes = null;
    $mol_log2.prefix = [];
    $.$mol_log2 = $mol_log2;
    class $mol_log2_indent extends $.$mol_wrapper {
        static wrap(task) {
            const Inner = this;
            const wrapped = function (...args) {
                try {
                    $mol_log2.prefix.push($.$mol_log2_token_indent);
                    return task.call(this, ...args);
                }
                finally {
                    $mol_log2.prefix.pop();
                }
            };
            return wrapped;
        }
    }
    $.$mol_log2_indent = $mol_log2_indent;
    class $mol_log2_table extends $mol_log2 {
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, $.$mol_dev_format_strong(`${this}(`), ...this.args.map($.$mol_dev_format_auto), $.$mol_dev_format_strong(`) `));
        }
        [$.$mol_dev_format_body]() {
            return $.$mol_dev_format_table({}, ...this.stream.map($.$mol_dev_format_auto));
        }
    }
    $.$mol_log2_table = $mol_log2_table;
    class $mol_log2_hidden extends $mol_log2 {
        flush() { }
    }
    $.$mol_log2_hidden = $mol_log2_hidden;
    class $mol_log2_line extends Array {
        constructor(...items) {
            super(...items);
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_tr({}, ...this.map(item => $.$mol_dev_format_td({}, $.$mol_dev_format_auto(item))));
        }
    }
    $.$mol_log2_line = $mol_log2_line;
    class $mol_log2_token extends Array {
        constructor(...items) {
            super(...items);
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_accent(...this);
        }
    }
    $.$mol_log2_token = $mol_log2_token;
    $.$mol_log2_token_empty = new $mol_log2_token('');
    $.$mol_log2_token_indent = new $mol_log2_token('\t');
    $.$mol_log2_legend = new $mol_log2_table(null, '$mol_log2_legend', []);
    if (!$mol_log2.excludes)
        $.$mol_log2_legend.info($.$mol_log2_token_empty, 'Use `$mol_log2.excludes : null | RegExp[]` to toggle logs');
})($ || ($ = {}));
//log2.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_any(a, b) {
        if (a === b)
            return true;
        if (!Number.isNaN(a))
            return false;
        if (!Number.isNaN(b))
            return false;
        return true;
    }
    $.$mol_compare_any = $mol_compare_any;
})($ || ($ = {}));
//any.js.map
;
"use strict";
var $;
(function ($) {
    const cache = new WeakMap();
    $.$mol_conform_stack = [];
    function $mol_conform(target, source) {
        if ($.$mol_compare_any(target, source))
            return source;
        if (!target || typeof target !== 'object')
            return target;
        if (!source || typeof source !== 'object')
            return target;
        if (target instanceof Error)
            return target;
        if (source instanceof Error)
            return target;
        if (target['constructor'] !== source['constructor'])
            return target;
        if (cache.get(target))
            return target;
        cache.set(target, true);
        const conform = $.$mol_conform_handlers.get(target['constructor']);
        if (!conform)
            return target;
        if ($.$mol_conform_stack.indexOf(target) !== -1)
            return target;
        $.$mol_conform_stack.push(target);
        try {
            return conform(target, source);
        }
        finally {
            $.$mol_conform_stack.pop();
        }
    }
    $.$mol_conform = $mol_conform;
    $.$mol_conform_handlers = new WeakMap();
    function $mol_conform_handler(cl, handler) {
        $.$mol_conform_handlers.set(cl, handler);
    }
    $.$mol_conform_handler = $mol_conform_handler;
    function $mol_conform_array(target, source) {
        if (source.length !== target.length)
            return target;
        for (let i = 0; i < target.length; ++i) {
            if (!$.$mol_compare_any(source[i], target[i]))
                return target;
        }
        return source;
    }
    $.$mol_conform_array = $mol_conform_array;
    $mol_conform_handler(Array, $mol_conform_array);
    $mol_conform_handler(Uint8Array, $mol_conform_array);
    $mol_conform_handler(Uint16Array, $mol_conform_array);
    $mol_conform_handler(Uint32Array, $mol_conform_array);
    $mol_conform_handler(Object, (target, source) => {
        let count = 0;
        let equal = true;
        for (let key in target) {
            const conformed = $mol_conform(target[key], source[key]);
            if (conformed !== target[key]) {
                try {
                    target[key] = conformed;
                }
                catch (error) { }
                if (!$.$mol_compare_any(conformed, target[key]))
                    equal = false;
            }
            if (!$.$mol_compare_any(conformed, source[key]))
                equal = false;
            ++count;
        }
        for (let key in source)
            if (--count < 0)
                break;
        return (equal && count === 0) ? source : target;
    });
    $mol_conform_handler(Date, (target, source) => {
        if (target.getTime() === source.getTime())
            return source;
        return target;
    });
    $mol_conform_handler(RegExp, (target, source) => {
        if (target.toString() === source.toString())
            return source;
        return target;
    });
})($ || ($ = {}));
//conform.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_array_trim(array) {
        let last = array.length;
        while (last > 0) {
            --last;
            const value = array[last];
            if (value === undefined)
                array.pop();
            else
                break;
        }
        return array;
    }
    $.$mol_array_trim = $mol_array_trim;
})($ || ($ = {}));
//trim.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_defer(calculate) {
        const fiber = new $mol_fiber;
        fiber.calculate = calculate;
        fiber[Symbol.toStringTag] = calculate.name;
        fiber.schedule();
        return fiber;
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_func(calculate) {
        console.warn('$mol_fiber_func is deprecated. Use $mol_fiber.func instead.');
        return $mol_fiber.func(calculate);
    }
    $.$mol_fiber_func = $mol_fiber_func;
    function $mol_fiber_root(calculate) {
        const wrapper = function (...args) {
            const fiber = new $mol_fiber();
            fiber.calculate = calculate.bind(this, ...args);
            return fiber.wake();
        };
        wrapper[Symbol.toStringTag] = calculate.name;
        return wrapper;
    }
    $.$mol_fiber_root = $mol_fiber_root;
    function $mol_fiber_method(obj, name, descr) {
        console.warn('$mol_fiber_method is deprecated. Use $mol_fiber.method instead.');
        return $mol_fiber.method(obj, name, descr);
    }
    $.$mol_fiber_method = $mol_fiber_method;
    function $mol_fiber_async(task) {
        return (...args) => new Promise($mol_fiber_root((done, fail) => {
            try {
                done(task(...args));
            }
            catch (error) {
                if ('then' in error)
                    return $.$mol_fail_hidden(error);
                fail(error);
            }
        }));
    }
    $.$mol_fiber_async = $mol_fiber_async;
    function $mol_fiber_sync(request) {
        return function $mol_fiber_sync_wrapper(...args) {
            const slave = $mol_fiber.current;
            let master = slave && slave.master;
            if (!master || master.constructor !== $mol_fiber) {
                master = new $mol_fiber;
                master.cursor = -3;
                master.error = request.call(this, ...args).then($.$mol_log2.func(master.push).bind(master), $.$mol_log2.func(master.fail).bind(master));
                const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                master[Symbol.toStringTag] = prefix + (request.name || $mol_fiber_sync.name);
            }
            return master.get();
        };
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    async function $mol_fiber_warp() {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            while ($mol_fiber.queue.length)
                await $mol_fiber.tick();
            return Promise.resolve();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    function $mol_fiber_fence(func) {
        const prev = $mol_fiber.current;
        try {
            $mol_fiber.current = null;
            return func();
        }
        finally {
            $mol_fiber.current = prev;
        }
    }
    $.$mol_fiber_fence = $mol_fiber_fence;
    function $mol_fiber_unlimit(task) {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            return task();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_unlimit = $mol_fiber_unlimit;
    class $mol_fiber_solid extends $.$mol_wrapper {
        static func(task) {
            function wrapped(...args) {
                const deadline = $mol_fiber.deadline;
                try {
                    $mol_fiber.deadline = Number.POSITIVE_INFINITY;
                    return task.call(this, ...args);
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail(new Error('Solid fiber can not be suspended.'));
                    return $.$mol_fail_hidden(error);
                }
                finally {
                    $mol_fiber.deadline = deadline;
                }
            }
            return $mol_fiber.func(wrapped);
        }
    }
    $.$mol_fiber_solid = $mol_fiber_solid;
    class $mol_fiber extends $.$mol_wrapper {
        constructor() {
            super(...arguments);
            this.value = undefined;
            this.error = null;
            this.cursor = 0;
            this.masters = [];
        }
        static wrap(task) {
            return function $mol_fiber_wrapper(...args) {
                const slave = $mol_fiber.current;
                let master = slave && slave.master;
                if (!master || master.constructor !== $mol_fiber) {
                    master = new $mol_fiber;
                    master.calculate = task.bind(this, ...args);
                    const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                    master[Symbol.toStringTag] = `${prefix}${task.name}`;
                }
                return master.get();
            };
        }
        static async tick() {
            while ($mol_fiber.queue.length > 0) {
                const now = Date.now();
                if (now >= $mol_fiber.deadline) {
                    $mol_fiber.schedule();
                    $mol_fiber.liveline = now;
                    return;
                }
                const task = $mol_fiber.queue.shift();
                await task();
            }
        }
        static schedule() {
            if (!$mol_fiber.scheduled) {
                $mol_fiber.scheduled = new $.$mol_after_tick(async () => {
                    const now = Date.now();
                    let quant = $mol_fiber.quant;
                    if ($mol_fiber.liveline) {
                        quant = Math.max(quant, Math.floor((now - $mol_fiber.liveline) / 2));
                        $mol_fiber.liveline = 0;
                    }
                    $mol_fiber.deadline = now + quant;
                    $mol_fiber.scheduled = null;
                    await $mol_fiber.tick();
                });
            }
            const promise = new this.$.Promise(done => this.queue.push(() => (done(), promise)));
            return promise;
        }
        schedule() {
            $mol_fiber.schedule().then(() => this.wake());
        }
        wake() {
            try {
                if (this.cursor > -2)
                    return this.get();
            }
            catch (error) {
                if ('then' in error)
                    return;
                $.$mol_fail_hidden(error);
            }
        }
        push(value) {
            value = this.$.$mol_conform(value, this.value);
            if (this.error || !Object.is(this.value, value)) {
                this.$.$mol_log2.info(this, $.$mol_fiber_token_changed1, value, $.$mol_fiber_token_changed2, this.error || this.value);
                this.obsolete_slaves();
                this.forget();
            }
            else {
                this.$.$mol_log2.info(this, $.$mol_fiber_token_actualized, value);
            }
            this.error = null;
            this.value = value;
            this.complete();
            return value;
        }
        fail(error) {
            this.complete();
            this.$.$mol_log2.info(this, $.$mol_fiber_token_failed, error);
            this.error = error;
            this.obsolete_slaves();
            return error;
        }
        wait(promise) {
            this.error = promise;
            this.$.$mol_log2.info(this, $.$mol_fiber_token_sleeped, promise);
            this.cursor = 0;
            return promise;
        }
        complete() {
            if (this.cursor <= -2)
                return;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
            this.cursor = -2;
        }
        complete_master(master_index) {
            this.disobey(master_index);
        }
        pull() {
            this.push(this.calculate());
        }
        update() {
            const slave = $mol_fiber.current;
            try {
                $mol_fiber.current = this;
                this.$.$mol_log2.info(this, $.$mol_fiber_token_runned);
                this.pull();
            }
            catch (error) {
                if ('then' in error) {
                    if (!slave) {
                        const listener = () => this.wake();
                        error = error.then(listener, listener);
                    }
                    this.wait(error);
                }
                else {
                    this.fail(error);
                }
            }
            finally {
                $mol_fiber.current = slave;
            }
        }
        get() {
            if (this.cursor > 0) {
                this.$.$mol_fail(new Error(`Cyclic dependency at ${this}`));
            }
            const slave = $mol_fiber.current;
            if (slave)
                slave.master = this;
            if (this.cursor > -2)
                this.update();
            if (this.error)
                return this.$.$mol_fail_hidden(this.error);
            return this.value;
        }
        limit() {
            if (!$mol_fiber.deadline)
                return;
            if (!$mol_fiber.current)
                return;
            if (Date.now() < $mol_fiber.deadline)
                return;
            this.$.$mol_fail_hidden($mol_fiber.schedule());
        }
        get master() {
            return this.masters[this.cursor];
        }
        set master(next) {
            if (this.cursor === -1)
                return;
            const cursor = this.cursor;
            const prev = this.masters[this.cursor];
            if (prev !== next) {
                if (prev)
                    this.rescue(prev, cursor);
                this.masters[cursor] = next;
                this.masters[cursor + 1] = this.obey(next, cursor);
            }
            this.cursor = cursor + 2;
        }
        rescue(master, master_index) { }
        obey(master, master_index) { return -1; }
        lead(slave, master_index) { return -1; }
        dislead(slave_index) {
            this.destructor();
        }
        disobey(master_index) {
            const master = this.masters[master_index];
            if (!master)
                return;
            master.dislead(this.masters[master_index + 1]);
            this.masters[master_index] = undefined;
            this.masters[master_index + 1] = undefined;
            this.$.$mol_array_trim(this.masters);
        }
        obsolete_slaves() { }
        obsolete(master_index) { }
        forget() {
            this.value = undefined;
        }
        abort() {
            this.forget();
            return true;
        }
        destructor() {
            if (!this.abort())
                return;
            this.$.$mol_log2.info(this, $.$mol_fiber_token_destructed);
            this.complete();
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_native(this);
        }
    }
    $mol_fiber.quant = 16;
    $mol_fiber.deadline = 0;
    $mol_fiber.liveline = 0;
    $mol_fiber.current = null;
    $mol_fiber.scheduled = null;
    $mol_fiber.queue = [];
    __decorate([
        $.$mol_log2.method
    ], $mol_fiber.prototype, "wake", null);
    __decorate([
        $.$mol_log2_indent.method
    ], $mol_fiber.prototype, "update", null);
    $.$mol_fiber = $mol_fiber;
    $.$mol_fiber_token_runned = new $.$mol_log2_token(' ► ');
    $.$mol_fiber_token_changed1 = new $.$mol_log2_token(' ˸ ');
    $.$mol_fiber_token_changed2 = new $.$mol_log2_token(' 🠈 ');
    $.$mol_fiber_token_actualized = new $.$mol_log2_token(' ✓ ');
    $.$mol_fiber_token_sleeped = new $.$mol_log2_token(' 💤 ');
    $.$mol_fiber_token_failed = new $.$mol_log2_token(' 🔥 ');
    $.$mol_fiber_token_destructed = new $.$mol_log2_token(' 🕱 ');
    $.$mol_log2_legend.info($.$mol_fiber_token_runned, '$mol_fiber starts execution');
    $.$mol_log2_legend.info(new $.$mol_log2_line($.$mol_fiber_token_changed1, $.$mol_fiber_token_changed2), '$mol_fiber value is changed to different value');
    $.$mol_log2_legend.info($.$mol_fiber_token_actualized, 'Actual $mol_fiber value is same as before');
    $.$mol_log2_legend.info($.$mol_fiber_token_sleeped, '$mol_fiber can not run now and awaits on promise');
    $.$mol_log2_legend.info($.$mol_fiber_token_failed, '$mol_fiber is failed and will be throw an Error or Promise');
    $.$mol_log2_legend.info($.$mol_fiber_token_destructed, '$mol_fiber fully destructed');
})($ || ($ = {}));
//fiber.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_value(task) {
        const cached = $mol_atom2.cached;
        try {
            $mol_atom2.cached = true;
            return task();
        }
        finally {
            $mol_atom2.cached = cached;
        }
    }
    $.$mol_atom2_value = $mol_atom2_value;
    class $mol_atom2 extends $.$mol_fiber {
        constructor() {
            super(...arguments);
            this.slaves = [];
            this._value = undefined;
            this._error = null;
        }
        static get current() {
            const atom = $.$mol_fiber.current;
            if (atom instanceof $mol_atom2)
                return atom;
            return null;
        }
        static reap(atom) {
            this.reap_queue.push(atom);
            if (this.reap_task)
                return;
            this.reap_task = $.$mol_fiber_defer(() => {
                this.reap_task = null;
                while (true) {
                    const atom = this.reap_queue.pop();
                    if (!atom)
                        break;
                    if (!atom.alone)
                        continue;
                    atom.destructor();
                }
            });
        }
        rescue(master, cursor) {
            if (!(master instanceof $mol_atom2))
                return;
            const master_index = this.masters.length;
            const slave_index = this.masters[cursor + 1] + 1;
            master.slaves[slave_index] = master_index;
            this.masters.push(master, this.masters[cursor + 1]);
        }
        get() {
            if ($mol_atom2.cached)
                return this.value;
            const value = super.get();
            if (value === undefined)
                $.$mol_fail(new Error(`Not defined: ${this}`));
            return value;
        }
        pull() {
            if (this.cursor === 0)
                return super.pull();
            this.$.$mol_log2.info(this, $.$mol_atom2_token_revalidation);
            const masters = this.masters;
            for (let index = 0; index < masters.length; index += 2) {
                const master = masters[index];
                if (!master)
                    continue;
                try {
                    master.get();
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail_hidden(error);
                    this.cursor = 0;
                }
                if (this.cursor !== 0)
                    continue;
                this.$.$mol_log2.info(this, $.$mol_atom2_token_stumbled, this._error || this._value);
                return super.pull();
            }
            this.$.$mol_log2.info(this, $.$mol_atom2_token_revalidated, this._error || this._value);
            this.cursor = -2;
        }
        get value() { return this._value; }
        set value(next) {
            const prev = this._value;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                next[Symbol.toStringTag] = this[Symbol.toStringTag];
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._value = next;
        }
        get error() { return this._error; }
        set error(next) {
            const prev = this._error;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                next[Symbol.toStringTag] = this[Symbol.toStringTag];
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._error = next;
        }
        put(next) {
            this.cursor = this.masters.length;
            next = this.push(next);
            this.cursor = -3;
            return next;
        }
        complete_master(master_index) {
            if (this.masters[master_index] instanceof $mol_atom2) {
                if (master_index >= this.cursor)
                    this.disobey(master_index);
            }
            else {
                this.disobey(master_index);
            }
        }
        obey(master, master_index) {
            return master.lead(this, master_index);
        }
        lead(slave, master_index) {
            this.$.$mol_log2.info(this, $.$mol_atom2_token_leaded, slave);
            const slave_index = this.slaves.length;
            this.slaves[slave_index] = slave;
            this.slaves[slave_index + 1] = master_index;
            return slave_index;
        }
        dislead(slave_index) {
            if (slave_index < 0)
                return;
            this.$.$mol_log2.info(this, $.$mol_atom2_token_disleaded, this.slaves[slave_index]);
            this.slaves[slave_index] = undefined;
            this.slaves[slave_index + 1] = undefined;
            $.$mol_array_trim(this.slaves);
            if (this.cursor > -3 && this.alone)
                $mol_atom2.reap(this);
        }
        obsolete(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Obsoleted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor === 0)
                return;
            this.$.$mol_log2.info(this, $.$mol_atom2_token_obsoleted, this._error || this._value);
            if (this.cursor !== -1)
                this.doubt_slaves();
            this.cursor = 0;
        }
        doubt(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Doubted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor >= -1)
                return;
            this.$.$mol_log2.info(this, $.$mol_atom2_token_doubted, this._error || this._value);
            this.cursor = -1;
            this.doubt_slaves();
        }
        obsolete_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.obsolete(this.slaves[index + 1]);
            }
        }
        doubt_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.doubt(this.slaves[index + 1]);
            }
        }
        get fresh() {
            return $.$mol_log2_hidden.func(() => {
                if (this.cursor !== -2)
                    return;
                this.cursor = 0;
                $.$mol_fiber_solid.run(() => this.update());
            });
        }
        get alone() {
            return this.slaves.length === 0;
        }
        get derived() {
            for (let index = 0; index < this.masters.length; index += 2) {
                if (this.masters[index])
                    return true;
            }
            return false;
        }
        destructor() {
            if (!this.abort())
                return;
            this.$.$mol_log2.info(this, $.$mol_fiber_token_destructed);
            this.cursor = -3;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
        }
    }
    $mol_atom2.cached = false;
    $mol_atom2.reap_task = null;
    $mol_atom2.reap_queue = [];
    __decorate([
        $.$mol_log2_indent.method
    ], $mol_atom2.prototype, "obsolete_slaves", null);
    __decorate([
        $.$mol_log2_indent.method
    ], $mol_atom2.prototype, "doubt_slaves", null);
    $.$mol_atom2 = $mol_atom2;
    $.$mol_atom2_token_revalidation = new $.$mol_log2_token(' ⏭ ');
    $.$mol_atom2_token_stumbled = new $.$mol_log2_token(' ⏯ ');
    $.$mol_atom2_token_revalidated = new $.$mol_log2_token(' ✔ ');
    $.$mol_atom2_token_leaded = new $.$mol_log2_token(' ☍ ');
    $.$mol_atom2_token_disleaded = new $.$mol_log2_token(' ☌ ');
    $.$mol_atom2_token_obsoleted = new $.$mol_log2_token(' ✘ ');
    $.$mol_atom2_token_doubted = new $.$mol_log2_token(' � ');
    $.$mol_log2_legend.info($.$mol_atom2_token_revalidation, '$mol_atom2 starts masters cheking for changes');
    $.$mol_log2_legend.info($.$mol_atom2_token_stumbled, '$mol_atom2 is obsoleted while masters checking');
    $.$mol_log2_legend.info($.$mol_atom2_token_revalidated, '$mol_atom2 is actual becasue there is no changed masters');
    $.$mol_log2_legend.info($.$mol_atom2_token_leaded, '$mol_atom2 leads some slave');
    $.$mol_log2_legend.info($.$mol_atom2_token_disleaded, '$mol_atom2 disleads some slave');
    $.$mol_log2_legend.info($.$mol_atom2_token_obsoleted, '$mol_atom2 is obsoleted because some master is changed');
    $.$mol_log2_legend.info($.$mol_atom2_token_doubted, '$mol_atom2 is doubted because some master is doubted or obsoleted');
})($ || ($ = {}));
//atom2.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_mem_force extends Object {
        constructor() {
            super();
            this.$mol_mem_force = true;
        }
        static toString() { return this.name; }
    }
    $mol_mem_force.$mol_mem_force = true;
    $.$mol_mem_force = $mol_mem_force;
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    $.$mol_mem_force_cache = $mol_mem_force_cache;
    class $mol_mem_force_update extends $mol_mem_force {
    }
    $.$mol_mem_force_update = $mol_mem_force_update;
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
    $.$mol_mem_force_fail = $mol_mem_force_fail;
})($ || ($ = {}));
//force.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $.$mol_atom2_value;
    function $mol_mem_persist() {
        const atom = $.$mol_atom2.current;
        if (!atom)
            return;
        if (atom.hasOwnProperty('destructor'))
            return;
        atom.destructor = () => { };
    }
    $.$mol_mem_persist = $mol_mem_persist;
    function $mol_mem(proto, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2.calculate = value.bind(host);
            cache2[Symbol.toStringTag] = `${host}.${name}()`;
            cache2.abort = () => {
                store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            store.set(host, cache2);
            return cache2;
        };
        return Object.assign(Object.assign({}, descr || {}), { value(next, force) {
                if (next === undefined) {
                    const cache = get_cache(this);
                    if (force === $.$mol_mem_force_cache)
                        return cache.obsolete(Number.NaN);
                    if ($.$mol_atom2.current)
                        return cache.get();
                    else
                        return $.$mol_fiber.run(() => cache.get());
                }
                return $.$mol_fiber.run(() => {
                    if (force === $.$mol_mem_force_fail)
                        return get_cache(this).fail(next);
                    if (force !== $.$mol_mem_force_cache)
                        next = value.call(this, next);
                    return get_cache(this).put(next);
                });
            } });
    }
    $.$mol_mem = $mol_mem;
})($ || ($ = {}));
//mem.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dict_key(value) {
        if (!value)
            return value;
        if (typeof value !== 'object')
            return value;
        if (Array.isArray(value))
            return value.join(' , ');
        if (Object.getPrototypeOf(Object.getPrototypeOf(value)) === null)
            return JSON.stringify(value);
        return value;
    }
    $.$mol_dict_key = $mol_dict_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_dict_key(key));
        }
        has(key) {
            return super.has($mol_dict_key(key));
        }
        set(key, value) {
            return super.set($mol_dict_key(key), value);
        }
        delete(key) {
            return super.delete($mol_dict_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        [Symbol.iterator]() {
            const iterator = super[Symbol.iterator]();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (!iteration.done) {
                        const key = iteration.value[0];
                        if (typeof key === 'string')
                            iteration.value[0] = JSON.parse(key);
                    }
                    return iteration;
                }
            };
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_mem_key(proto, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host, key) => {
            let dict = store.get(host);
            if (!dict)
                store.set(host, dict = new $.$mol_dict);
            let cache = dict.get(key);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2[Symbol.toStringTag] = `${host}.${name}(${JSON.stringify(key)})`;
            cache2.calculate = value.bind(host, key);
            cache2.abort = () => {
                dict.delete(key);
                if (dict.size === 0)
                    store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            dict.set(key, cache2);
            return cache2;
        };
        return {
            value(key, next, force) {
                if (next === undefined) {
                    const cache = get_cache(this, key);
                    if (force === $.$mol_mem_force_cache)
                        return cache.obsolete();
                    if ($.$mol_atom2.current)
                        return cache.get();
                    else
                        return $.$mol_fiber.run(() => cache.get());
                }
                return $.$mol_fiber.run(() => {
                    if (force === $.$mol_mem_force_fail)
                        return get_cache(this, key).fail(next);
                    if (force !== $.$mol_mem_force_cache)
                        next = value.call(this, key, next);
                    return get_cache(this, key).put(next);
                });
            }
        };
    }
    $.$mol_mem_key = $mol_mem_key;
})($ || ($ = {}));
//key.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_autorun(calculate) {
        return $.$mol_atom2.create(atom => {
            atom.calculate = calculate;
            atom.obsolete_slaves = atom.schedule;
            atom.doubt_slaves = atom.schedule;
            atom[Symbol.toStringTag] = calculate[Symbol.toStringTag] || calculate.name || '$mol_atom2_autorun';
            atom.schedule();
        });
    }
    $.$mol_atom2_autorun = $mol_atom2_autorun;
})($ || ($ = {}));
//autorun.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_defer extends $.$mol_object {
        constructor(run) {
            super();
            this.run = run;
            $mol_defer.add(this);
        }
        destructor() {
            $mol_defer.drop(this);
        }
        static schedule() {
            if (this.timer)
                return;
            this.timer = this.scheduleNative(() => {
                this.timer = null;
                this.run();
            });
        }
        static unschedule() {
            if (!this.timer)
                return;
            cancelAnimationFrame(this.timer);
            this.timer = null;
        }
        static add(defer) {
            this.all.push(defer);
            this.schedule();
        }
        static drop(defer) {
            var index = this.all.indexOf(defer);
            if (index >= 0)
                this.all.splice(index, 1);
        }
        static run() {
            if (this.all.length === 0)
                return;
            this.schedule();
            for (var defer; defer = this.all.shift();)
                defer.run();
        }
    }
    $mol_defer.all = [];
    $mol_defer.timer = null;
    $mol_defer.scheduleNative = (typeof requestAnimationFrame == 'function')
        ? handler => requestAnimationFrame(handler)
        : handler => setTimeout(handler, 16);
    $.$mol_defer = $mol_defer;
})($ || ($ = {}));
//defer.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $.$mol_object {
        static focused(next) {
            if (next === undefined)
                return [];
            const parents = [];
            let element = next[0];
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            new $.$mol_defer($.$mol_log2.func(() => {
                const element = $.$mol_mem_cached(() => this.focused())[0];
                if (element)
                    element.focus();
                else
                    $.$mol_dom_context.blur();
            }));
            return parents;
        }
        static focus(event) {
            this.focused([event.target]);
        }
        static blur(event) {
            const elements = $.$mol_mem_cached(() => this.focused());
            if (elements && elements[0] === event.target)
                this.focused([]);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "focused", null);
    __decorate([
        $.$mol_log2.method
    ], $mol_view_selection, "focus", null);
    __decorate([
        $.$mol_log2.method
    ], $mol_view_selection, "blur", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//selection.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//qname.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//const.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//attributes.js.map
;
"use strict";
var $;
(function ($) {
    const cacthed = new WeakMap();
    function $mol_fail_catch(error) {
        if (cacthed.get(error))
            return false;
        cacthed.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//catch.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const cur = style[name];
            if (typeof val === 'number') {
                if (parseFloat(cur) == val)
                    continue;
                style[name] = `${val}px`;
            }
            if (cur !== val)
                style[name] = val;
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//styles.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//fields.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $.$mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $.$mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//children.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        let name = func.name;
        if ((name === null || name === void 0 ? void 0 : name.length) > 1)
            return name;
        for (let key in $) {
            try {
                if ($[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch (_a) { }
        }
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//name.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_deprecated(message) {
        return (host, field, descr) => {
            const value = descr.value;
            descr.value = function $mol_deprecated_wrapper(...args) {
                console.warn(`${host.constructor.name}::${field} is deprecated. ${message}`);
                return value.call(this, ...args);
            };
        };
    }
    $.$mol_deprecated = $mol_deprecated;
})($ || ($ = {}));
//deprecated.js.map
;
"use strict";
//extract.js.map
;
"use strict";
//pick.js.map
;
"use strict";
//theme.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/theme/theme.css", "[mol_theme] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\n@media (prefers-color-scheme: light) {\n\t[mol_theme=\"$mol_theme_auto\"] {\n\t\t--mol_theme_back: hsl( 210 , 50% , 99% );\n\t\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t\t--mol_theme_current: hsl( 210 , 100% , 80% );\n\t\t--mol_theme_text: rgba( 0 , 0 , 0 , .9 );\n\t\t--mol_theme_control: hsla( 210 , 60% , 35% , 1 );\n\t\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t\t--mol_theme_line: rgba( 220 , 220 , 220 , 1 );\n\t\t--mol_theme_focus: hsla( 0 , 60% , 50% , 0.75 );\n\t\t--mol_theme_field: white;\n\t}\n}\n\n@media (prefers-color-scheme: dark) {\n\t[mol_theme=\"$mol_theme_auto\"] {\n\t\t--mol_theme_back: hsl( 210 , 50% , 10% );\n\t\t--mol_theme_hover: #333;\n\t\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t\t--mol_theme_text: rgba( 255 , 255 , 255 , .8 );\n\t\t--mol_theme_control: hsla( 210 , 60% , 70% , 1 );\n\t\t--mol_theme_shade: rgba( 255 , 255 , 255 , .5 );\n\t\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t\t--mol_theme_focus: rgba( 204 , 68 , 50 , .75 );\n\t\t--mol_theme_field: black;\n\t}\n}\n\n[mol_theme=\"$mol_theme_light\"] , :root {\n\t--mol_theme_back: hsl( 210 , 50% , 99% );\n\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 80% );\n\t--mol_theme_text: rgba( 0 , 0 , 0 , .9 );\n\t--mol_theme_control: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t--mol_theme_line: rgba( 220 , 220 , 220 , 1 );\n\t--mol_theme_focus: hsla( 0 , 60% , 50% , 0.75 );\n\t--mol_theme_field: white;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_back: hsl( 210 , 50% , 10% );\n\t--mol_theme_hover: #333;\n\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t--mol_theme_text: rgba( 255 , 255 , 255 , .8 );\n\t--mol_theme_control: hsla( 210 , 60% , 70% , 1 );\n\t--mol_theme_shade: rgba( 255 , 255 , 255 , .5 );\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_focus: rgba( 204 , 68 , 50 , .75 );\n\t--mol_theme_field: black;\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: white;\n\t--mol_theme_control: white;\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: rgb(204, 68, 50);\n\t--mol_theme_hover: rgb(165, 56, 42);\n\t--mol_theme_text: white;\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_control: white;\n}\n");
})($ || ($ = {}));
//theme.css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/skin/skin.css", ":root {\n\t--mol_skin_font: 1rem/1.5 \"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n\t--mol_skin_font_monospace: Monaco, monospace;\n}\n\n/* Deprecated, use mol_theme instead */\n:root {\n\n\t--mol_skin_outline: 0 0 0 1px var(--mol_theme_line);\n\t\n\t--mol_skin_base: #3a8ccb;\n\t--mol_skin_base_text: white;\n\t\n\t--mol_skin_current: var(--mol_skin_base);\n\t--mol_skin_current_text: white;\n\t--mol_skin_current_line: #1471b8;\n\t\n\t--mol_skin_button: var(--mol_skin_card);\n\t--mol_skin_hover: rgba( 0 , 0 , 0 , .05 );\n\t\n\t--mol_skin_round: 0px;\n\t\n\t--mol_skin_focus_line: rgba( 0 , 0 , 0 , .2 );\n\t--mol_skin_focus_outline: 0 0 0 1px var(--mol_skin_focus_line);\n\t\n\t--mol_skin_float: var(--mol_skin_focus_outline);\n\n\t--mol_skin_passive: #eee;\n\t--mol_skin_passive_text: rgba( 0 , 0 , 0 , .5 );\n\t\n\t--mol_skin_light: #fcfcfc;\n\t--mol_skin_light_line: rgba( 230 , 230 , 230 , .75 );\n\t--mol_skin_light_text: rgba( 0 , 0 , 0 , .9 );\n\t--mol_skin_light_hover: #f7f7f7;\n\t--mol_skin_light_outline: 0 0 0 1px var(--mol_theme_line);\n\n\t--mol_skin_card: var(--mol_theme_back);\n\t--mol_skin_card_text: var(--mol_theme_text);\n\t\n\t--mol_skin_accent: #dd0e3e;\n\t--mol_skin_accent_text: white;\n\t--mol_skin_accent_hover: #c50d37;\n\n\t--mol_skin_warn: rgba( 255 , 50 , 50 , 0.75 );\n\t--mol_skin_warn_text: white;\n\t--mol_skin_warn_hover: color( var(--mol_skin_warn) lightness(-5%) );\n\n\t--mol_skin_good: #96DAA9;\n\t--mol_skin_good_text: black;\n\n\t--mol_skin_bad: #CC5252;\n\t--mol_skin_bad_text: white;\n}\n");
})($ || ($ = {}));
//skin.css.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $.$mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $.$mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $.$mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            return $.$mol_atom2_autorun(() => {
                this.dom_tree();
                document.title = this.title();
                return this;
            });
        }
        static autobind() {
            const nodes = $.$mol_dom_context.document.querySelectorAll('[mol_view_root]');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $.$mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $.$mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_width());
                }
            });
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub()) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                if ('then' in error)
                    $.$mol_fail_hidden(error);
            }
            return min;
        }
        view_rect() {
            if ($.$mol_atom2.current)
                this.view_rect_watcher();
            return this.view_rect_cache();
        }
        view_rect_cache(next = null) {
            return next;
        }
        view_rect_watcher() {
            $mol_view.watchers.add(this);
            return { destructor: () => $mol_view.watchers.delete(this) };
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || $.$mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $.$mol_const('<#' + id + '>');
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_log2.func($.$mol_fiber_root(events[event_name])), { passive: false });
            }
            return node;
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                $.$mol_dom_render_attributes(node, { mol_view_error: null });
                for (let plugin of this.plugins()) {
                    if (plugin instanceof $.$mol_plugin) {
                        plugin.render();
                    }
                }
                this.render();
            }
            catch (error) {
                const need_catch = $.$mol_fail_catch(error);
                if (need_catch) {
                    $.$mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                }
                if (error instanceof Promise)
                    $.$mol_fail_hidden(error);
                if (need_catch) {
                    try {
                        void (node.innerText = error.message);
                    }
                    catch (e) { }
                    console.error(error);
                }
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $.$mol_dom_render_attributes(node, attr);
            $.$mol_dom_render_styles(node, style);
            $.$mol_dom_render_fields(node, fields);
            return node;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view) ? child.dom_node_actual() : String(child);
            });
            $.$mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = $.$mol_owning_get(this, $mol_view);
            if (owner instanceof $mol_view) {
                const suffix = this[$.$mol_object_field];
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push($.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = $.$mol_func_name(Class);
                if (!name)
                    continue;
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return {};
        }
        plugins() {
            return [];
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, $.$mol_dev_format_native(this), $.$mol_dev_format_shade('/'), $.$mol_dev_format_auto($.$mol_mem_cached(() => this.sub())));
        }
    }
    $mol_view.watchers = new Set();
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_cache", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $.$mol_deprecated('Use $mol_view::event instead.')
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $.$mol_mem
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: background-color, height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tword-break: break-word;\n\tbox-sizing: border-box;\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont: var(--mol_skin_font);\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t135deg,\n\t\trgba(255,220,220,1),\n\t\trgba(255,220,220,1) 11px,\n\t\trgba(255,255,220,1) 10px,\n\t\trgba(255,255,220,1) 20px\n\t);\n\tbackground-size: 28px 28px;\n\tcolor: black;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .1 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .1 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .1 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n}\n");
})($ || ($ = {}));
//view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_import extends $.$mol_object2 {
        static script(uri, next, force) {
            const doc = $.$mol_dom_context.document;
            const found = doc.querySelector(`script[src="${uri}"]`);
            if (found)
                return $.$mol_dom_context;
            return $.$mol_fail_hidden(new Promise((done, fail) => {
                const script = doc.createElement('script');
                script.src = uri;
                script.onload = () => done($.$mol_dom_context);
                script.onerror = () => fail(new Error(`Can not import ${uri}`));
                doc.head.appendChild(script);
            }));
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_import, "script", null);
    $.$mol_import = $mol_import;
})($ || ($ = {}));
//import.js.map
;
"use strict";
var $;
(function ($) {
    class $ts_numl extends $.$mol_view {
    }
    $.$ts_numl = $ts_numl;
})($ || ($ = {}));
//numl.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ts_numl extends $.$ts_numl {
            static api() {
                return $.$mol_import.script('https://cdn.jsdelivr.net/npm/numl/dist/numl.js');
            }
            render() {
                $ts_numl.api();
                return super.render();
            }
            dom_name() {
                const element_name = 'nu-' + $.$mol_dom_qname(this[$.$mol_object_field]).split('_')[0];
                return element_name || 'nu-el';
            }
        }
        __decorate([
            $.$mol_mem
        ], $ts_numl, "api", null);
        $$.$ts_numl = $ts_numl;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//numl.view.js.map
;
"use strict";
var $;
(function ($) {
    class $ts_tutorial_layout extends $.$ts_numl {
        dom_name() {
            return "nu-block";
        }
        attr() {
            return ({
                "responsive": "960px|800px|640px",
                "nu-id": "root",
                "id": "roo",
                "width": "100%",
                "height": "100%",
            });
        }
        sub() {
            return [this.theme_main(), this.theme_blue(), this.theme_green(), this.theme_orange(), this.theme_purple(), this.theme_lime(), this.theme_red(), this.attrs_section(), this.attrs_block(), this.attrs_bold(), this.items()];
        }
        theme_main() {
            return ((obj) => {
                obj.attr = () => ({
                    "hue": "272",
                });
                return obj;
            })(new this.$.$ts_numl());
        }
        theme_blue() {
            return ((obj) => {
                obj.attr = () => ({
                    "name": "blue",
                    "from": "#0859A1",
                    "saturation": "100",
                    "mod": "dim",
                });
                return obj;
            })(new this.$.$ts_numl());
        }
        theme_green() {
            return ((obj) => {
                obj.attr = () => ({
                    "name": "green",
                    "hue": "154\t",
                    "mod": "dim\t",
                });
                return obj;
            })(new this.$.$ts_numl());
        }
        theme_orange() {
            return ((obj) => {
                obj.attr = () => ({
                    "name": "orange",
                    "hue": "45\t",
                    "mod": "dim",
                });
                return obj;
            })(new this.$.$ts_numl());
        }
        theme_purple() {
            return ((obj) => {
                obj.attr = () => ({
                    "name": "purple",
                    "hue": "301\t",
                    "mod": "dim",
                });
                return obj;
            })(new this.$.$ts_numl());
        }
        theme_lime() {
            return ((obj) => {
                obj.attr = () => ({
                    "name": "lime",
                    "hue": "96\t",
                    "mod": "dim\t\t\t",
                });
                return obj;
            })(new this.$.$ts_numl());
        }
        theme_red() {
            return ((obj) => {
                obj.attr = () => ({
                    "name": "red",
                    "hue": "1\t",
                    "mod": "dim",
                });
                return obj;
            })(new this.$.$ts_numl());
        }
        attrs_section() {
            return ((obj) => {
                obj.attr = () => ({
                    "role": "article",
                    "for": "section",
                    "display": "flex",
                    "gap": "4x",
                    "flow": "column",
                    "width": "100%",
                    "fill": "bg :even[subtle]\"",
                    "items": "center",
                    "padding": "8x 2x || 4x 2x",
                });
                return obj;
            })(new this.$.$ts_numl());
        }
        attrs_block() {
            return ((obj) => {
                obj.attr = () => ({
                    "for": "block",
                    "width": "clamp(initial, 100%, 980px)",
                });
                return obj;
            })(new this.$.$ts_numl());
        }
        attrs_bold() {
            return ((obj) => {
                obj.attr = () => ({
                    "for": "bold",
                    "text": "w6",
                    "force": "",
                });
                return obj;
            })(new this.$.$ts_numl());
        }
        items() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view());
        }
    }
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_layout.prototype, "theme_main", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_layout.prototype, "theme_blue", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_layout.prototype, "theme_green", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_layout.prototype, "theme_orange", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_layout.prototype, "theme_purple", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_layout.prototype, "theme_lime", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_layout.prototype, "theme_red", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_layout.prototype, "attrs_section", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_layout.prototype, "attrs_block", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_layout.prototype, "attrs_bold", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_layout.prototype, "items", null);
    $.$ts_tutorial_layout = $ts_tutorial_layout;
})($ || ($ = {}));
//layout.view.tree.js.map
;
var $node = $node || {} ; $node[ "/ts/tutorial/header/logo/logo.svg" ] = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSLQodC70L7QuV8xIiB4PSIwIiB5PSIwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MDAgMzQwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICA8ZGVmcy8+CiAgPHN0eWxlPgogICAgLnN0MHtmaWxsOiMzYThjY2J9CiAgPC9zdHlsZT4KICA8cGF0aCBkPSJNMTgzLjkgMjI0LjFjLTQuNiAwLTguOCAxLjMtMTIuNSAzLjRMMTEwLjYgMTYxVjQ4LjljNC4zLTEuMSA4LjItMy4zIDExLjMtNi4zbDM2LjggMjYuOGMtLjcgMi4zLTEuMSA0LjgtMS4xIDcuNCAwIDEzLjcgMTEuMSAyNC44IDI0LjggMjQuOHMyNC44LTExLjEgMjQuOC0yNC44LTExLTI0LjgtMjQuNy0yNC44Yy02LjQgMC0xMi4zIDIuNS0xNi43IDYuNWwtMzcuMi0yNy4xYy42LTIuMS45LTQuMy45LTYuNSAwLTEzLjctMTEuMS0yNC44LTI0LjgtMjQuOHMtMjQuOCAxMS0yNC44IDI0LjdjMCAyLjYuNCA1LjEgMS4yIDcuNUw0Mi4zIDU5LjJDMzcuOCA1NC43IDMxLjYgNTIgMjQuOCA1MiAxMS4xIDUyIDAgNjMuMSAwIDc2LjhzMTEuMSAyNC44IDI0LjggMjQuOGM0LjEgMCA4LTEgMTEuNS0yLjhMOTcuNyAxNjZ2MTEwLjljLTQuMiAxLjEtOCAzLjMtMTEgNi4ybC0zNi44LTI2LjhjLjctMi4zIDEuMS00LjggMS4xLTcuNCAwLTEzLjctMTEuMS0yNC44LTI0LjgtMjQuOFMxLjQgMjM1LjIgMS40IDI0OC45czExLjEgMjQuOCAyNC44IDI0LjhjNi40IDAgMTIuMy0yLjUgMTYuNy02LjVsMzcuMiAyNy4xYy0uNiAyLjEtLjkgNC4zLS45IDYuNSAwIDEzLjcgMTEuMSAyNC44IDI0LjggMjQuOHMyNC44LTExLjEgMjQuOC0yNC44YzAtMi42LS40LTUuMS0xLjItNy41bDM4LjgtMjYuOWM0LjUgNC41IDEwLjcgNy4yIDE3LjUgNy4yIDEzLjcgMCAyNC44LTExLjEgMjQuOC0yNC44cy0xMS4xLTI0LjctMjQuOC0yNC43em0tMS40LTE1OS4yYzYuNSAwIDExLjkgNS4zIDExLjkgMTEuOSAwIDYuNS01LjMgMTEuOS0xMS45IDExLjktNi41IDAtMTEuOS01LjMtMTEuOS0xMS45IDAtNi42IDUuMy0xMS45IDExLjktMTEuOXptLTc3LjgtNTJjNi41IDAgMTEuOSA1LjMgMTEuOSAxMS45IDAgNi41LTUuMyAxMS45LTExLjkgMTEuOS02LjUgMC0xMS45LTUuMy0xMS45LTExLjkgMC02LjUgNS4zLTExLjkgMTEuOS0xMS45ek0yNC44IDg4LjZjLTYuNSAwLTExLjktNS4zLTExLjktMTEuOSAwLTYuNSA1LjMtMTEuOSAxMS45LTExLjlzMTEuOSA1LjMgMTEuOSAxMS45YzAgNi42LTUuNCAxMS45LTExLjkgMTEuOXptMjEgMS4zYzIuNC0zLjggMy44LTguMyAzLjgtMTMuMiAwLTIuMi0uMy00LjMtLjgtNi4zbDM5LjMtMjcuM2MyLjcgMi41IDYgNC40IDkuNiA1LjR2OTguMkw0NS44IDg5Ljl6bTExNi41IDE0Ni44Yy0yIDMuNi0zLjIgNy44LTMuMiAxMi4yIDAgMi4yLjMgNC4zLjkgNi4zbC0zOS4zIDI3LjNjLTIuOC0yLjYtNi4yLTQuNS0xMC01LjV2LTk2LjhsNTEuNiA1Ni41em0tMTM2LjEgMjRjLTYuNSAwLTExLjktNS4zLTExLjktMTEuOSAwLTYuNSA1LjMtMTEuOSAxMS45LTExLjkgNi41IDAgMTEuOSA1LjMgMTEuOSAxMS45IDAgNi42LTUuMyAxMS45LTExLjkgMTEuOXptNzcuOCA1MmMtNi41IDAtMTEuOS01LjMtMTEuOS0xMS45IDAtNi41IDUuMy0xMS45IDExLjktMTEuOSA2LjUgMCAxMS45IDUuMyAxMS45IDExLjkgMCA2LjYtNS40IDExLjktMTEuOSAxMS45em03OS45LTUyYy02LjUgMC0xMS45LTUuMy0xMS45LTExLjkgMC02LjUgNS4zLTExLjkgMTEuOS0xMS45IDYuNSAwIDExLjkgNS4zIDExLjkgMTEuOS0uMSA2LjYtNS40IDExLjktMTEuOSAxMS45ek0yODMgMTQzLjFsLjkgMTAuMmMyLjUtMy43IDUuNi02LjYgOS4zLTguNiAzLjctMiA4LTMgMTIuOS0zczkuMiAxLjEgMTIuNyAzLjNjMy41IDIuMiA2LjIgNS41IDggOS45IDIuNC00LjEgNS41LTcuNCA5LjMtOS43czguMy0zLjUgMTMuNC0zLjVjNy42IDAgMTMuNiAyLjcgMTggOC4xIDQuNCA1LjQgNi42IDEzLjYgNi42IDI0Ljd2NDUuOGgtMjAuOHYtNDUuOGMwLTYuMi0xLTEwLjUtMi45LTEyLjktMS45LTIuNC00LjctMy42LTguNS0zLjYtMi45IDAtNS41LjctNy43IDJzLTMuOSAzLjEtNS4yIDUuNWMwIC45IDAgMS43LjEgMi4zIDAgLjYuMSAxLjMuMSAydjUwLjdoLTIwLjd2LTQ1LjhjMC02LTEtMTAuMy0yLjktMTIuOHMtNC44LTMuNy04LjYtMy43Yy0yLjggMC01LjMuNS03LjQgMS42LTIuMSAxLjEtMy45IDIuNi01LjIgNC41djU2LjJoLTIwLjd2LTc3LjFIMjgzek0zODYuOCAxODAuOWMwLTExLjUgMy4yLTIwLjkgOS42LTI4LjMgNi40LTcuMyAxNS4zLTExIDI2LjctMTEgMTEuNCAwIDIwLjMgMy43IDI2LjggMTFzOS43IDE2LjcgOS43IDI4LjN2MS41YzAgMTEuNi0zLjIgMjEtOS43IDI4LjMtNi40IDcuMy0xNS4zIDEwLjktMjYuNyAxMC45LTExLjQgMC0yMC4zLTMuNi0yNi44LTEwLjktNi40LTcuMy05LjctMTYuNy05LjctMjguM3YtMS41em0yMC43IDEuNWMwIDcgMS4yIDEyLjcgMy43IDE2LjlzNi41IDYuNCAxMiA2LjRjNS40IDAgOS4zLTIuMSAxMS44LTYuNCAyLjUtNC4zIDMuNy05LjkgMy43LTE2Ljl2LTEuNWMwLTYuOC0xLjMtMTIuNC0zLjgtMTYuN3MtNi41LTYuNS0xMS45LTYuNS05LjMgMi4yLTExLjggNi41Yy0yLjUgNC40LTMuNyA5LjktMy43IDE2Ljd2MS41ek00OTQuMiAyMjAuMmgtMjAuOFYxMDloMjAuOHYxMTEuMnoiIGNsYXNzPSJzdDAiLz4KICA8Zz4KICAgIDxwYXRoIGQ9Ik0yNzkuOSAyODQuOGgtMS44di0xMC4yaC0xMi42djEwLjJoLTEuOHYtMjIuMmgxLjhWMjczaDEyLjZ2LTEwLjRoMS44djIyLjJ6TTI5NS42IDI4NC44Yy0uMS0uNi0uMi0xLjEtLjMtMS41LS4xLS40LS4xLS44LS4xLTEuMy0uNi45LTEuNCAxLjYtMi40IDIuMi0xIC42LTIuMi45LTMuNS45LTEuNiAwLTIuOS0uNC0zLjgtMS4zLS45LS45LTEuMy0yLTEuMy0zLjVzLjYtMi43IDEuOS0zLjYgMy0xLjQgNS0xLjRoNC4xdi0yYzAtMS4yLS40LTIuMS0xLjEtMi44LS43LS43LTEuOC0xLTMuMi0xLTEuMiAwLTIuMy4zLTMgLjktLjguNi0xLjIgMS40LTEuMiAyLjNIMjg1di0uMWMtLjEtMS4yLjUtMi4zIDEuNi0zLjMgMS4xLS45IDIuNi0xLjQgNC40LTEuNCAxLjggMCAzLjMuNSA0LjQgMS40IDEuMS45IDEuNiAyLjIgMS42IDR2OC4xYzAgLjYgMCAxLjEuMSAxLjcuMS41LjIgMS4xLjMgMS42aC0xLjh6bS02LjEtMS4zYzEuNCAwIDIuNi0uMyAzLjYtMXMxLjctMS41IDIuMS0yLjZ2LTMuMmgtNC4xYy0xLjUgMC0yLjcuNC0zLjcgMS4xLTEgLjctMS40IDEuNi0xLjQgMi42IDAgLjkuMyAxLjcuOSAyLjMuNy41IDEuNi44IDIuNi44ek0zMTQuNSAyODQuOGgtMS44di03LjZoLTguOXY3LjZIMzAydi0xNi41aDEuOHY3LjRoOC45di03LjRoMS44djE2LjV6TTMxOC4zIDI3Ni4zYzAtMi40LjctNC40IDItNiAxLjMtMS42IDMuMS0yLjMgNS4zLTIuMyAyLjIgMCA0IC44IDUuMyAyLjNzMiAzLjUgMiA2di41YzAgMi40LS43IDQuNC0yIDYtMS4zIDEuNS0zLjEgMi4zLTUuMyAyLjMtMi4yIDAtNC0uOC01LjMtMi4zLTEuMy0xLjUtMi0zLjUtMi02di0uNXptMS44LjVjMCAxLjkuNSAzLjUgMS40IDQuOCAxIDEuMyAyLjMgMS45IDQgMS45IDEuNyAwIDMtLjcgNC0xLjkgMS0xLjMgMS41LTIuOSAxLjUtNC44di0uNWMwLTEuOS0uNS0zLjUtMS41LTQuOC0xLTEuMy0yLjMtMi00LTItMS43IDAtMyAuNy00IDJzLTEuNCAyLjktMS40IDQuOHYuNXpNMzQ4LjYgMjY5LjloLTZ2MTQuOWgtMS44di0xNC45SDMzNXYtMS42aDEzLjZ2MS42ek0zNTguMSAyODUuMWMtMi4xIDAtMy45LS44LTUuMi0yLjMtMS4zLTEuNS0yLTMuNC0yLTUuOHYtLjhjMC0yLjQuNy00LjMgMi01LjkgMS4zLTEuNSAzLTIuMyA1LTIuM3MzLjUuNiA0LjYgMS45YzEuMSAxLjMgMS42IDMgMS42IDUuMnYxLjRoLTExLjV2LjVjMCAxLjkuNSAzLjQgMS40IDQuNy45IDEuMiAyLjMgMS45IDMuOSAxLjkgMSAwIDEuOS0uMiAyLjgtLjUuOC0uMyAxLjUtLjggMi4xLTEuM2wuOCAxLjJjLS42LjYtMS4zIDEuMS0yLjMgMS41LS44LjQtMS45LjYtMy4yLjZ6bS0uMi0xNS41Yy0xLjQgMC0yLjYuNS0zLjUgMS41cy0xLjQgMi4zLTEuNiAzLjh2LjFoOS40di0uNGMwLTEuNS0uNC0yLjctMS4yLTMuNi0uNS0uOS0xLjYtMS40LTMuMS0xLjR6TTM3My4xIDI3NS4xbDQuNS02LjdoMi4ybC01LjYgOC4xIDUuOCA4LjRoLTIuMWwtNC43LTctNC43IDdoLTIuMmw1LjgtOC40LTUuNi04LjFoMi4xbDQuNSA2Ljd6TTM5NS43IDI4NC44aC0xLjh2LTcuNkgzODV2Ny42aC0xLjh2LTE2LjVoMS44djcuNGg4Ljl2LTcuNGgxLjh2MTYuNXpNMzk5LjUgMjc2LjNjMC0yLjQuNy00LjQgMi02IDEuMy0xLjYgMy4xLTIuMyA1LjMtMi4zIDIuMiAwIDQgLjggNS4zIDIuMyAxLjMgMS42IDIgMy41IDIgNnYuNWMwIDIuNC0uNyA0LjQtMiA2LTEuMyAxLjUtMy4xIDIuMy01LjMgMi4zLTIuMiAwLTQtLjgtNS4zLTIuMy0xLjMtMS41LTItMy41LTItNnYtLjV6bTEuOC41YzAgMS45LjUgMy41IDEuNCA0LjggMSAxLjMgMi4zIDEuOSA0IDEuOSAxLjcgMCAzLS43IDQtMS45IDEtMS4zIDEuNS0yLjkgMS41LTQuOHYtLjVjMC0xLjktLjUtMy41LTEuNS00LjgtMS0xLjMtMi4zLTItNC0yLTEuNyAwLTMgLjctNCAycy0xLjQgMi45LTEuNCA0Ljh2LjV6TTQzMC4yIDI2OC4zdjE2LjVoLTEuOHYtMTQuOWgtN3Y1LjdjMCAzLjItLjQgNS42LTEuMSA3LS44IDEuNC0yIDIuMi0zLjggMi4yaC0uN3YtMS42aC42YzEuMSAwIDEuOS0uNiAyLjQtMS43cy44LTMuMS44LTUuOXYtNy4zaDEwLjZ6TTQzMy44IDI3Ni4zYzAtMi40LjctNC40IDItNnMzLjEtMi4zIDUuMy0yLjNjMi4yIDAgNCAuOCA1LjMgMi4zIDEuMyAxLjYgMiAzLjUgMiA2di41YzAgMi40LS43IDQuNC0yIDYtMS4zIDEuNS0zLjEgMi4zLTUuMyAyLjMtMi4yIDAtNC0uOC01LjMtMi4zLTEuMy0xLjUtMi0zLjUtMi02di0uNXptMS44LjVjMCAxLjkuNSAzLjUgMS40IDQuOCAxIDEuMyAyLjMgMS45IDQgMS45IDEuNyAwIDMtLjcgNC0xLjkgMS0xLjMgMS41LTIuOSAxLjUtNC44di0uNWMwLTEuOS0uNS0zLjUtMS41LTQuOC0xLTEuMy0yLjMtMi00LTItMS43IDAtMyAuNy00IDJzLTEuNCAyLjktMS40IDQuOHYuNXpNNDYyLjMgMjY5LjlINDU0djE0LjloLTEuOHYtMTYuNWgxMC4ydjEuNnpNNDc2IDI2OC4zaDEuOHYxNi41SDQ3NnYtMTMuNGgtLjFsLTguOCAxMy41aC0xLjh2LTE2LjVoMS44djEzLjRoLjFsOC44LTEzLjV6TTQ5My4zIDI2OC4zaDEuOHYxNi41aC0xLjh2LTEzLjRoLS4xbC04LjggMTMuNWgtMS44di0xNi41aDEuOHYxMy40aC4xbDguOC0xMy41ek0yNjMuMSAzMjAuN2MuOCAwIDEuNC0uOCAxLjktMi4zLjUtMS41LjgtMy44LjktNi43bC4zLTZoOS45djE0LjloMS42djYuOWgtMS44di01LjRoLTEyLjR2NS40aC0xLjd2LTYuOWgxLjN6bTQuNi05Yy0uMSAyLjItLjMgNC0uNiA1LjVzLS43IDIuNy0xLjIgMy41aDguNHYtMTMuMkgyNjhsLS4zIDQuMnpNMjk0IDMwNS44djE2LjVoLTEuOHYtMTQuOWgtN3Y1LjdjMCAzLjItLjQgNS42LTEuMSA3LS44IDEuNC0yIDIuMi0zLjggMi4yaC0uN3YtMS42aC42YzEuMSAwIDEuOS0uNiAyLjQtMS43cy44LTMuMS44LTUuOXYtNy4zSDI5NHpNMzEwLjkgMzA1Ljh2MTYuNUgzMDl2LTYuNmgtNS4xbC00IDYuNmgtMmw0LjEtNi45Yy0xLjEtLjMtMi0uOS0yLjYtMS43LS42LS44LS45LTEuOC0uOS0zIDAtMS40LjUtMi42IDEuNi0zLjUgMS0uOSAyLjUtMS40IDQuMy0xLjRoNi41em0tMTAuNiA0LjljMCAuOS4zIDEuNy45IDIuNC42LjYgMS41IDEgMi43IDFoNS4xdi02LjdoLTQuN2MtMS40IDAtMi40LjMtMy4xIDEtLjYuNi0uOSAxLjQtLjkgMi4zek0zMzMuNiAzMDcuM2gtOC4zdjE0LjloLTEuOHYtMTYuNWgxMC4ydjEuNnpNMzQ3LjIgMzA1LjhoMS44djE2LjVoLTEuOHYtMTMuNGgtLjFsLTguOCAxMy41aC0xLjh2LTE2LjVoMS44djEzLjRoLjFsOC44LTEzLjV6TTM2Ni40IDMyMi4yaC0xLjh2LTE0LjloLTguOXYxNC45aC0xLjh2LTE2LjVoMTIuNXYxNi41ek0zNzcuNCAzMjIuNmMtMi4xIDAtMy45LS44LTUuMi0yLjMtMS4zLTEuNS0yLTMuNC0yLTUuOHYtLjhjMC0yLjQuNy00LjMgMi01LjlzMy0yLjMgNS0yLjMgMy41LjYgNC42IDEuOWMxLjEgMS4zIDEuNiAzIDEuNiA1LjJ2MS40aC0xMS41di41YzAgMS45LjUgMy40IDEuNCA0LjcuOSAxLjIgMi4zIDEuOSAzLjkgMS45IDEgMCAxLjktLjIgMi44LS41czEuNS0uOCAyLjEtMS4zbC44IDEuMmMtLjYuNi0xLjMgMS4xLTIuMyAxLjUtLjcuNC0xLjkuNi0zLjIuNnptLS4xLTE1LjZjLTEuNCAwLTIuNi41LTMuNSAxLjUtLjkgMS0xLjQgMi4zLTEuNiAzLjh2LjFoOS40di0uNGMwLTEuNS0uNC0yLjctMS4yLTMuNnMtMS43LTEuNC0zLjEtMS40ek00MDAuNSAzMTQuNWMwIDIuNS0uNiA0LjQtMS43IDUuOXMtMi43IDIuMi00LjYgMi4yYy0xLjEgMC0yLjItLjItMy0uNy0uOS0uNC0xLjYtMS4xLTIuMS0xLjl2OC41aC0xLjh2LTIyLjhoMS40bC4zIDIuNmMuNS0uOSAxLjMtMS42IDIuMS0yLjEuOS0uNSAxLjktLjggMy4xLS44IDIgMCAzLjUuOCA0LjYgMi40IDEuMSAxLjYgMS43IDMuNyAxLjcgNi4zdi40em0tMS44LS40YzAtMi4xLS40LTMuOC0xLjItNS4xLS44LTEuMy0yLjEtMi0zLjctMi0xLjIgMC0yLjIuMy0zIC45LS44LjYtMS4zIDEuMy0xLjcgMi4zdjhjLjQuOSAxIDEuNiAxLjggMi4xczEuOC44IDIuOS44YzEuNiAwIDIuOC0uNiAzLjYtMS44czEuMi0yLjggMS4yLTQuOHYtLjR6TTQxMC43IDMxM2MxLjYgMCAyLjctLjMgMy40LS44LjctLjUgMS4xLTEuMiAxLjEtMi4yIDAtLjktLjQtMS42LTEuMi0yLjItLjgtLjYtMS45LS45LTMuNS0uOS0xLjMgMC0yLjUuMy0zLjQuOS0uOS42LTEuNCAxLjQtMS40IDIuM0g0MDR2LS4xYy0uMS0xLjQuNS0yLjUgMS44LTMuMyAxLjMtLjkgMi44LTEuMyA0LjctMS4zIDIgMCAzLjYuNCA0LjcgMS4yIDEuMi44IDEuNyAyIDEuNyAzLjQgMCAuOC0uMyAxLjUtLjggMi4yLS42LjYtMS4zIDEuMS0yLjMgMS41IDEuMS4zIDIgLjggMi42IDEuNS42LjcuOSAxLjUuOSAyLjUgMCAxLjUtLjYgMi43LTEuOSAzLjUtMS4zLjktMi45IDEuMy00LjkgMS4zLTEuOSAwLTMuNS0uNC00LjgtMS4zLTEuMy0uOC0yLTIuMS0xLjktMy42di0uMWgxLjdjMCAxIC41IDEuOCAxLjQgMi41LjkuNyAyLjEgMSAzLjYgMXMyLjctLjMgMy42LS45Yy45LS42IDEuMy0xLjQgMS4zLTIuNCAwLTEuMS0uNC0xLjktMS4yLTIuNC0uOC0uNS0yLS44LTMuNi0uOGgtMi44VjMxM2gyLjl6TTQzMiAzMjIuMmMtLjEtLjYtLjItMS4xLS4zLTEuNS0uMS0uNC0uMS0uOC0uMS0xLjMtLjYuOS0xLjQgMS42LTIuNCAyLjItMSAuNi0yLjIuOS0zLjUuOS0xLjYgMC0yLjktLjQtMy44LTEuMy0uOS0uOS0xLjMtMi0xLjMtMy41cy42LTIuNyAxLjktMy42YzEuMy0uOSAzLTEuNCA1LTEuNGg0LjF2LTJjMC0xLjItLjQtMi4xLTEuMS0yLjgtLjctLjctMS44LTEtMy4yLTEtMS4yIDAtMi4zLjMtMyAuOS0uOC42LTEuMiAxLjQtMS4yIDIuM2gtMS43di0uMWMtLjEtMS4yLjUtMi4zIDEuNi0zLjMgMS4xLS45IDIuNi0xLjQgNC40LTEuNCAxLjggMCAzLjMuNSA0LjQgMS40IDEuMS45IDEuNiAyLjIgMS42IDR2OC4xYzAgLjYgMCAxLjEuMSAxLjcuMS41LjIgMS4xLjMgMS42SDQzMnptLTYuMS0xLjNjMS40IDAgMi42LS4zIDMuNi0xczEuNy0xLjUgMi4xLTIuNnYtMy4yaC00LjFjLTEuNSAwLTIuNy40LTMuNyAxLjEtMSAuNy0xLjQgMS42LTEuNCAyLjYgMCAuOS4zIDEuNy45IDIuMy43LjYgMS41LjggMi42Ljh6TTQzOC4yIDMyMC43Yy44IDAgMS40LS44IDEuOS0yLjNzLjgtMy44LjktNi43bC4zLTZoOS45djE0LjloMS42djYuOUg0NTF2LTUuNGgtMTIuNHY1LjRoLTEuN3YtNi45aDEuM3ptNC43LTljLS4xIDIuMi0uMyA0LS42IDUuNXMtLjcgMi43LTEuMiAzLjVoOC40di0xMy4yaC02LjNsLS4zIDQuMnpNNDY3IDMyMi4yYy0uMS0uNi0uMi0xLjEtLjMtMS41LS4xLS40LS4xLS44LS4xLTEuMy0uNi45LTEuNCAxLjYtMi40IDIuMi0xIC42LTIuMi45LTMuNS45LTEuNiAwLTIuOS0uNC0zLjgtMS4zLS45LS45LTEuMy0yLTEuMy0zLjVzLjYtMi43IDEuOS0zLjZjMS4zLS45IDMtMS40IDUtMS40aDQuMXYtMmMwLTEuMi0uNC0yLjEtMS4xLTIuOC0uNy0uNy0xLjgtMS0zLjItMS0xLjIgMC0yLjMuMy0zIC45LS44LjYtMS4yIDEuNC0xLjIgMi4zaC0xLjd2LS4xYy0uMS0xLjIuNS0yLjMgMS42LTMuMyAxLjEtLjkgMi42LTEuNCA0LjQtMS40czMuMy41IDQuNCAxLjRjMS4xLjkgMS42IDIuMiAxLjYgNHY4LjFjMCAuNiAwIDEuMS4xIDEuNy4xLjUuMiAxLjEuMyAxLjZINDY3em0tNi4xLTEuM2MxLjQgMCAyLjYtLjMgMy42LTFzMS43LTEuNSAyLjEtMi42di0zLjJoLTQuMWMtMS41IDAtMi43LjQtMy43IDEuMS0xIC43LTEuNCAxLjYtMS40IDIuNiAwIC45LjMgMS43LjkgMi4zLjcuNiAxLjYuOCAyLjYuOHpNNDg1LjcgMzIyLjJoLTEuOHYtNi45Yy0uNy4zLTEuNC41LTIuMi42LS43LjEtMS40LjItMi4xLjItMi4xIDAtMy43LS41LTQuOC0xLjQtMS0uOS0xLjYtMi41LTEuNi00Ljh2LTQuMmgxLjh2NC4yYzAgMS43LjQgMi45IDEuMSAzLjYuNy43IDEuOCAxIDMuNCAxIC43IDAgMS41LS4xIDIuMi0uMnMxLjQtLjMgMi4xLS42di04aDEuOHYxNi41eiIvPgogIDwvZz4KPC9zdmc+Cg=="

;
var $node = $node || {} ; $node[ "/ts/tutorial/header/logo/github.svg" ] = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWxsPSJ2YXIoLS1udS1iZy1jb2xvcikiIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cGF0aCAgZD0iTTEyIDAuNUM1LjM3IDAuNSAwIDUuNzggMCAxMi4yOTJDMCAxNy41MDMgMy40MzggMjEuOTIyIDguMjA1IDIzLjQ4QzguODA1IDIzLjU5MSA5LjAyNSAyMy4yMjYgOS4wMjUgMjIuOTEzQzkuMDI1IDIyLjYzMyA5LjAxNSAyMS44OTEgOS4wMSAyMC45MDhDNS42NzIgMjEuNjE5IDQuOTY4IDE5LjMyNiA0Ljk2OCAxOS4zMjZDNC40MjIgMTcuOTY1IDMuNjMzIDE3LjYwMSAzLjYzMyAxNy42MDFDMi41NDYgMTYuODcgMy43MTcgMTYuODg1IDMuNzE3IDE2Ljg4NUM0LjkyMiAxNi45NjcgNS41NTUgMTguMSA1LjU1NSAxOC4xQzYuNjI1IDE5LjkwMyA4LjM2NCAxOS4zODIgOS4wNSAxOS4wODFDOS4xNTggMTguMzE4IDkuNDY3IDE3Ljc5OSA5LjgxIDE3LjUwNEM3LjE0NSAxNy4yMDkgNC4zNDQgMTYuMTk1IDQuMzQ0IDExLjY3N0M0LjM0NCAxMC4zOSA0LjgwOSA5LjMzOCA1LjU3OSA4LjUxM0M1LjQ0NCA4LjIxNSA1LjAzOSA3LjAxNiA1LjY4NCA1LjM5MkM1LjY4NCA1LjM5MiA2LjY4OSA1LjA3NiA4Ljk4NCA2LjYwMUM5Ljk0NCA2LjMzOSAxMC45NjQgNi4yMDkgMTEuOTg0IDYuMjAzQzEzLjAwNCA2LjIwOSAxNC4wMjQgNi4zMzkgMTQuOTg0IDYuNjAxQzE3LjI2NCA1LjA3NiAxOC4yNjkgNS4zOTIgMTguMjY5IDUuMzkyQzE4LjkxNCA3LjAxNiAxOC41MDkgOC4yMTUgMTguMzg5IDguNTEzQzE5LjE1NCA5LjMzOCAxOS42MTkgMTAuMzkgMTkuNjE5IDExLjY3N0MxOS42MTkgMTYuMjA3IDE2LjgxNCAxNy4yMDQgMTQuMTQ0IDE3LjQ5NEMxNC41NjQgMTcuODQ4IDE0Ljk1NCAxOC41NzEgMTQuOTU0IDE5LjY3NkMxNC45NTQgMjEuMjU0IDE0LjkzOSAyMi41MjIgMTQuOTM5IDIyLjkwNUMxNC45MzkgMjMuMjE0IDE1LjE0OSAyMy41ODMgMTUuNzY0IDIzLjQ2NUMyMC41NjUgMjEuOTE3IDI0IDE3LjQ5NSAyNCAxMi4yOTJDMjQgNS43OCAxOC42MjcgMC41IDEyIDAuNVoiIC8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="

;
"use strict";
var $;
(function ($) {
    class $ts_tutorial_header_logo extends $.$ts_numl {
        dom_name() {
            return "nu-flex";
        }
        attr() {
            return ({
                "radius": "none",
                "display": "flex",
                "flow": "row",
                "gap": "1",
                "items": "center",
            });
        }
        sub() {
            return [this.svg_logo(), this.line_divider(), this.svg_github()];
        }
        svg_logo() {
            return ((obj) => {
                obj.attr = () => ({
                    "theme": "blue",
                    "fill": "",
                    "color": "",
                    "padding": "20px 0px 20px 32px",
                    "width": "61px",
                    "height": "40px",
                    "src": "ts/tutorial/header/logo/logo.svg",
                });
                return obj;
            })(new this.$.$ts_numl());
        }
        line_divider() {
            return ((obj) => {
                obj.attr = () => ({
                    "orient": "v",
                    "height": "24px",
                    "width": "1px",
                    "place": "center",
                });
                return obj;
            })(new this.$.$ts_numl());
        }
        svg_github() {
            return ((obj) => {
                obj.attr = () => ({
                    "theme": "blue swap",
                    "width": "24px",
                    "height": "23px",
                    "src": "ts/tutorial/header/logo/github.svg",
                });
                return obj;
            })(new this.$.$ts_numl());
        }
    }
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_header_logo.prototype, "svg_logo", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_header_logo.prototype, "line_divider", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_header_logo.prototype, "svg_github", null);
    $.$ts_tutorial_header_logo = $ts_tutorial_header_logo;
})($ || ($ = {}));
//logo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $ts_select extends $.$ts_numl {
        dom_name() {
            return "nu-btn";
        }
        attr() {
            return ({
                "radius": "none",
                "border": "none",
                "shadow": "^:hover[none] none",
            });
        }
        menuitem(lang) {
            return ((obj) => {
                obj.event = () => ({
                    "click": (event) => this.select(event),
                });
                return obj;
            })(new this.$.$ts_numl());
        }
        select(event, force) {
            return (event !== void 0) ? event : null;
        }
        items() {
            return [];
        }
        sub() {
            return [this.attrs_dropdown(), this.selected(), this.icon_dropdown(), this.popupmenu_dropdown()];
        }
        attrs_dropdown() {
            return ((obj) => {
                obj.attr = () => ({
                    "for": "dropdown-icon",
                    "name": "chevron-down",
                    "scale": "^:pressed[flip-y]",
                    "size": "2.5x",
                });
                return obj;
            })(new this.$.$ts_numl());
        }
        selected(val, force) {
            return (val !== void 0) ? val : "En";
        }
        icon_dropdown() {
            return ((obj) => {
                obj.attr = () => ({
                    "as": "dropdown-icon",
                });
                return obj;
            })(new this.$.$ts_numl());
        }
        popupmenu_dropdown() {
            return ((obj) => {
                obj.sub = () => this.items_wrapped();
                return obj;
            })(new this.$.$ts_numl());
        }
        items_wrapped() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $ts_select.prototype, "menuitem", null);
    __decorate([
        $.$mol_mem
    ], $ts_select.prototype, "select", null);
    __decorate([
        $.$mol_mem
    ], $ts_select.prototype, "attrs_dropdown", null);
    __decorate([
        $.$mol_mem
    ], $ts_select.prototype, "selected", null);
    __decorate([
        $.$mol_mem
    ], $ts_select.prototype, "icon_dropdown", null);
    __decorate([
        $.$mol_mem
    ], $ts_select.prototype, "popupmenu_dropdown", null);
    $.$ts_select = $ts_select;
})($ || ($ = {}));
//select.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ts_select extends $.$ts_select {
            items_wrapped() {
                let items = [];
                this.items().map(c => {
                    items.push(this.menuitem(c));
                });
                return items;
            }
            select(value) {
                return this.selected(value) || null;
            }
            menuitem(lang) {
                return ((obj) => {
                    obj.sub = () => [lang];
                    obj.event = () => ({
                        "click": (event) => this.select(lang),
                    });
                    return obj;
                })(new this.$.$ts_numl());
            }
        }
        __decorate([
            $.$mol_mem
        ], $ts_select.prototype, "select", null);
        __decorate([
            $.$mol_mem_key
        ], $ts_select.prototype, "menuitem", null);
        $$.$ts_select = $ts_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//select.view.js.map
;
"use strict";
var $;
(function ($) {
    class $ts_tutorial_header extends $.$ts_numl {
        dom_name() {
            return "nu-card";
        }
        attr() {
            return ({
                "theme": "blue tint bold",
                "padding": "0",
                "radius": "none",
                "display": "flex | none | none",
                "flow": "row",
            });
        }
        sub() {
            return [this.flex_left(), this.btngroup_navgitaion()];
        }
        flex_left() {
            return ((obj) => {
                obj.attr = () => ({
                    "content": "space-between",
                    "border": "right",
                    "width": "clamp(320px,320px,100%)",
                    "items": "center",
                });
                obj.sub = () => [this.Logo(), this.Language()];
                return obj;
            })(new this.$.$ts_numl());
        }
        Logo() {
            return ((obj) => {
                return obj;
            })(new this.$.$ts_tutorial_header_logo());
        }
        Language() {
            return ((obj) => {
                obj.items = () => ["En", "Ru"];
                return obj;
            })(new this.$.$ts_select());
        }
        btngroup_navgitaion() {
            return ((obj) => {
                obj.attr = () => ({
                    "radius": "none",
                    "display": "flex",
                    "height": "100%",
                });
                obj.sub = () => [this.attrs_btn(), this.btn_guide(), this.btn_tutorials(), this.btn_examples(), this.btn_blog(), this.btn_about()];
                return obj;
            })(new this.$.$ts_numl());
        }
        attrs_btn() {
            return ((obj) => {
                obj.attr = () => ({
                    "for": "nu-btn",
                    "radius": "none",
                    "border": "none",
                    "shadow": " :hover[none] none",
                    "theme": " :pressed[blue swap bold] blue tint",
                    "size": "2.5x",
                });
                return obj;
            })(new this.$.$ts_numl());
        }
        btn_guide() {
            return ((obj) => {
                obj.attr = () => ({
                    "value": "guide",
                });
                obj.sub = () => ["Guide"];
                return obj;
            })(new this.$.$ts_numl());
        }
        btn_tutorials() {
            return ((obj) => {
                obj.attr = () => ({
                    "value": "tutorials",
                });
                obj.sub = () => ["Tutorials"];
                return obj;
            })(new this.$.$ts_numl());
        }
        btn_examples() {
            return ((obj) => {
                obj.attr = () => ({
                    "value": "examples",
                });
                obj.sub = () => ["Examples"];
                return obj;
            })(new this.$.$ts_numl());
        }
        btn_blog() {
            return ((obj) => {
                obj.attr = () => ({
                    "value": "blog",
                });
                obj.sub = () => ["Blog"];
                return obj;
            })(new this.$.$ts_numl());
        }
        btn_about() {
            return ((obj) => {
                obj.attr = () => ({
                    "value": "about",
                });
                obj.sub = () => ["About"];
                return obj;
            })(new this.$.$ts_numl());
        }
    }
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_header.prototype, "flex_left", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_header.prototype, "Logo", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_header.prototype, "Language", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_header.prototype, "btngroup_navgitaion", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_header.prototype, "attrs_btn", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_header.prototype, "btn_guide", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_header.prototype, "btn_tutorials", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_header.prototype, "btn_examples", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_header.prototype, "btn_blog", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_header.prototype, "btn_about", null);
    $.$ts_tutorial_header = $ts_tutorial_header;
})($ || ($ = {}));
//header.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $ts_tutorial extends $.$mol_view {
        sub() {
            return [this.block_layout()];
        }
        block_layout() {
            return ((obj) => {
                obj.items = () => this.grid();
                return obj;
            })(new this.$.$ts_tutorial_layout());
        }
        grid() {
            return ((obj) => {
                obj.attr = () => ({
                    "rows": " 80px 1fr auto",
                    "width": "100%",
                    "height": "100%",
                });
                obj.sub = () => [this.Header(), this.Body()];
                return obj;
            })(new this.$.$ts_numl());
        }
        Header() {
            return ((obj) => {
                return obj;
            })(new this.$.$ts_tutorial_header());
        }
        Body() {
            return ((obj) => {
                return obj;
            })(new this.$.$ts_tutorial_body());
        }
    }
    __decorate([
        $.$mol_mem
    ], $ts_tutorial.prototype, "block_layout", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial.prototype, "grid", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial.prototype, "Header", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial.prototype, "Body", null);
    $.$ts_tutorial = $ts_tutorial;
})($ || ($ = {}));
//tutorial.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("ts/tutorial/tutorial.view.css", "[ts_tutorial]{\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//tutorial.view.css.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_exec(dir, command, ...args) {
        let [app, ...args0] = command.split(' ');
        args = [...args0, ...args];
        console.info(`${$node.colorette.gray($node.path.relative('', dir))}> ${$node.colorette.blue(app)} ${$node.colorette.cyan(args.join(' '))}`);
        var res = $node['child_process'].spawnSync(app, args, {
            cwd: $node.path.resolve(dir),
            shell: true,
        });
        if (res.status || res.error)
            return $.$mol_fail(res.error || new Error(res.stderr.toString()));
        if (!res.stdout)
            res.stdout = new Buffer('');
        return res;
    }
    $.$mol_exec = $mol_exec;
})($ || ($ = {}));
//exec.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $.$mol_view {
        dom_node(next) {
            const node = next || $.$mol_owning_get(this, $.$mol_view).dom_node();
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_log2.func($.$mol_fiber_root(events[event_name])), { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//plugin.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: false });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
    function $mol_dom_render_events_async(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: true });
        }
    }
    $.$mol_dom_render_events_async = $mol_dom_render_events_async;
})($ || ($ = {}));
//events.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_ghost extends $.$mol_view {
        Sub() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_ghost.prototype, "Sub", null);
    $.$mol_ghost = $mol_ghost;
})($ || ($ = {}));
//ghost.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node() {
                const node = this.Sub().dom_node();
                $.$mol_dom_render_attributes(node, this.attr_static());
                $.$mol_dom_render_events(node, this.event());
                return node;
            }
            dom_node_actual() {
                const node = this.Sub().dom_node_actual();
                const attr = this.attr();
                const style = this.style();
                const fields = this.field();
                $.$mol_dom_render_attributes(node, attr);
                $.$mol_dom_render_styles(node, style);
                $.$mol_dom_render_fields(node, fields);
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                const node = Sub.dom_tree();
                this.dom_node_actual();
                return node;
            }
            title() {
                return this.Sub().title();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_ghost.prototype, "dom_node", null);
        __decorate([
            $.$mol_mem
        ], $mol_ghost.prototype, "dom_node_actual", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ghost.view.js.map
;
"use strict";
var $;
(function ($) {
    class $ts_grip extends $.$mol_ghost {
        pos_x(val, force) {
            return (val !== void 0) ? val : null;
        }
        pos_y(val, force) {
            return (val !== void 0) ? val : null;
        }
        start(event, force) {
            return (event !== void 0) ? event : null;
        }
        done(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $ts_grip.prototype, "pos_x", null);
    __decorate([
        $.$mol_mem
    ], $ts_grip.prototype, "pos_y", null);
    __decorate([
        $.$mol_mem
    ], $ts_grip.prototype, "start", null);
    __decorate([
        $.$mol_mem
    ], $ts_grip.prototype, "done", null);
    $.$ts_grip = $ts_grip;
})($ || ($ = {}));
//grip.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ts_grip extends $.$ts_grip {
            pos_y(val) {
                return (val !== void 0) ? val : NaN;
            }
            pos_x(val) {
                return (val !== void 0) ? val : NaN;
            }
            move(node, callback = (event) => {
                this.pos_x(event.pageX);
                this.pos_y(event.pageY);
            }) {
                const pointerdown = (event) => {
                    if (event.which !== 1)
                        return;
                    event.preventDefault();
                    const onpointerup = (_event) => {
                        window.removeEventListener('pointermove', callback, false);
                        window.removeEventListener('pointerup', onpointerup, false);
                        window.removeEventListener('pointercancel', onpointerup, false);
                        this.done(_event);
                    };
                    this.start(event);
                    window.addEventListener('pointermove', callback, false);
                    window.addEventListener('pointerup', onpointerup, false);
                    window.addEventListener('pointercancel', onpointerup, false);
                };
                node.addEventListener('pointerdown', pointerdown, false);
                return {
                    destroy() {
                        node.removeEventListener('pointerdown', onpointerdown, false);
                    }
                };
            }
            dom_node_actual() {
                this.move(this.dom_node());
                return super.dom_node_actual();
            }
        }
        __decorate([
            $.$mol_mem
        ], $ts_grip.prototype, "pos_y", null);
        __decorate([
            $.$mol_mem
        ], $ts_grip.prototype, "pos_x", null);
        $$.$ts_grip = $ts_grip;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//grip.view.js.map
;
"use strict";
var $;
(function ($) {
    class $ts_splitter_hor extends $.$ts_grip {
        type() {
            return "horizontal";
        }
        title() {
            return "";
        }
        Sub() {
            return this.Divider();
        }
        Divider() {
            return ((obj) => {
                obj.sub = () => [this.title()];
                return obj;
            })(new this.$.$mol_view());
        }
    }
    __decorate([
        $.$mol_mem
    ], $ts_splitter_hor.prototype, "Divider", null);
    $.$ts_splitter_hor = $ts_splitter_hor;
})($ || ($ = {}));
//hor.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ts_splitter_hor extends $.$ts_splitter_hor {
            size(val) {
                return (val !== void 0) ? val : 0;
            }
            set_style_for_sibling(sibling, val) {
                this.sibling(sibling).style['width'] = val;
            }
            pos_x(val) {
                this.setPos(val, 'horizontal');
            }
            clamp(num, min, max) {
                return num < min ? min : num > max ? max : num;
            }
            node() {
                return this.dom_node().parentNode;
            }
            sibling(sibling) {
                return this.dom_node()[`${sibling}ElementSibling`];
            }
            min_width_node(sibling) {
                const tmp = this.sibling(sibling).style.width;
                this.sibling(sibling).style.width = 'auto';
                const min_width = this.sibling(sibling).clientWidth;
                this.sibling(sibling).style.width = tmp;
                return min_width;
            }
            setPos(pos, type) {
                const main = this.dom_node().parentNode.clientWidth;
                const { top, left } = this.sibling('previous').getBoundingClientRect();
                const { right, width } = this.sibling('next').getBoundingClientRect();
                const min_width_left = 0;
                const min_width_right = 0;
                let rect_size = right - left;
                const percentage = (rect_size / main) * 100;
                const px = pos - top;
                const calculated1 = this.clamp(px - left, min_width_left, rect_size) + 3;
                this.set_style_for_sibling('previous', `${(calculated1 / rect_size) * percentage}%`);
                const calculated2 = this.clamp(rect_size - (px - left), min_width_right, rect_size) + 3;
                this.set_style_for_sibling('next', `${(calculated2 / rect_size) * percentage}%`);
            }
        }
        __decorate([
            $.$mol_mem
        ], $ts_splitter_hor.prototype, "size", null);
        $$.$ts_splitter_hor = $ts_splitter_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hor.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("ts/splitter/hor/hor.view.css", "[ts_splitter_hor_divider] {\n\tpadding: 0px 3px;\n    margin: 0 -3px;\n    cursor: ew-resize;\n    opacity: 0;\n}\n");
})($ || ($ = {}));
//hor.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_grip extends $.$mol_ghost {
        pos_x(val, force) {
            return (val !== void 0) ? val : null;
        }
        pos_y(val, force) {
            return (val !== void 0) ? val : null;
        }
        start(event, force) {
            return (event !== void 0) ? event : null;
        }
        done(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_grip.prototype, "pos_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_grip.prototype, "pos_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_grip.prototype, "start", null);
    __decorate([
        $.$mol_mem
    ], $mol_grip.prototype, "done", null);
    $.$mol_grip = $mol_grip;
})($ || ($ = {}));
//grip.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grip extends $.$mol_grip {
            pos_y(val) {
                return (val !== void 0) ? val : NaN;
            }
            pos_x(val) {
                return (val !== void 0) ? val : NaN;
            }
            move(node, callback = (event) => {
                this.pos_x(event.pageX);
                this.pos_y(event.pageY);
            }) {
                const pointerdown = (event) => {
                    if (event.which !== 1)
                        return;
                    event.preventDefault();
                    const onpointerup = (_event) => {
                        window.removeEventListener('pointermove', callback, false);
                        window.removeEventListener('pointerup', onpointerup, false);
                        window.removeEventListener('pointercancel', onpointerup, false);
                        this.done(_event);
                    };
                    this.start(event);
                    window.addEventListener('pointermove', callback, false);
                    window.addEventListener('pointerup', onpointerup, false);
                    window.addEventListener('pointercancel', onpointerup, false);
                };
                node.addEventListener('pointerdown', pointerdown, false);
                return {
                    destroy() {
                        node.removeEventListener('pointerdown', onpointerdown, false);
                    }
                };
            }
            dom_node_actual() {
                this.move(this.dom_node());
                return super.dom_node_actual();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grip.prototype, "pos_y", null);
        __decorate([
            $.$mol_mem
        ], $mol_grip.prototype, "pos_x", null);
        $$.$mol_grip = $mol_grip;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//grip.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_splitter_ver extends $.$mol_grip {
        type() {
            return "vertical";
        }
        Sub() {
            return this.Divider();
        }
        Divider() {
            return ((obj) => {
                obj.sub = () => [""];
                return obj;
            })(new this.$.$mol_view());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_splitter_ver.prototype, "Divider", null);
    $.$mol_splitter_ver = $mol_splitter_ver;
})($ || ($ = {}));
//ver.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_splitter_ver extends $.$mol_splitter_ver {
            set_style_for_sibling(node, val) {
                this.dom_node()[`${node}ElementSibling`].style['height'] = val;
            }
            pos_y(val) {
                this.setPos(val, 'vertical');
            }
            clamp(num, min, max) {
                return num < min ? min : num > max ? max : num;
            }
            node() {
                return this.dom_node().parentNode;
            }
            min_height_node(sibling) {
                const tmp = this.dom_node()[`${sibling}ElementSibling`].style.height;
                this.dom_node()[`${sibling}ElementSibling`].style.height = 'auto';
                const min_height = this.dom_node()[`${sibling}ElementSibling`].clientHeight;
                this.dom_node()[`${sibling}ElementSibling`].style.height = tmp;
                return min_height;
            }
            setPos(pos, type) {
                const main = this.dom_node().parentNode.clientHeight;
                const { top, left } = this.dom_node()[`previousElementSibling`].getBoundingClientRect();
                const { bottom, height } = this.dom_node()[`nextElementSibling`].getBoundingClientRect();
                const min_height_top = this.min_height_node('previous');
                const min_height_bottom = this.min_height_node('next');
                let rect_size = bottom - top;
                const percentage = (rect_size / main) * 100;
                const px = pos - top;
                if (bottom - px < 0 || bottom - px < min_height_bottom)
                    return;
                if (px - top < 0 || px - top < min_height_top)
                    return;
                const calculated1 = this.clamp(px - top, min_height_top, rect_size) + 3;
                this.set_style_for_sibling('previous', `${(calculated1 / rect_size) * percentage}%`);
                const calculated2 = this.clamp(rect_size - (px - top), min_height_bottom, rect_size) + 3;
                this.set_style_for_sibling('next', `${(calculated2 / rect_size) * percentage}%`);
            }
            sub() {
                this.dom_node().style['flex-direction'] = this.type() == 'horizontal' ? 'row' : 'column';
                return [this.Divider()];
            }
        }
        $$.$mol_splitter_ver = $mol_splitter_ver;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ver.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/splitter/ver/ver.view.css", "[mol_splitter_ver_divider] {\n  padding: 3px 0px;\n  margin: -3px 0;\n  cursor: ns-resize;\n  opacity: 0;\n}\n[mol_splitter_ver] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n");
})($ || ($ = {}));
//ver.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_resizer_ver extends $.$mol_view {
        Divider(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_splitter_ver());
        }
        pages() {
            return [];
        }
        sub() {
            return this.pages_wrapped();
        }
        pages_wrapped() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_resizer_ver.prototype, "Divider", null);
    $.$mol_resizer_ver = $mol_resizer_ver;
})($ || ($ = {}));
//ver.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_resizer_ver extends $.$mol_resizer_ver {
            divider(id) {
                return this.Divider(id);
            }
            pages_wrapped() {
                let extended = [];
                for (let i = 0; i < this.pages().length; i++) {
                    extended.push(this.pages()[i]);
                    if (i < this.pages().length - 1)
                        extended.push(this.divider(i + 1));
                }
                return extended;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_resizer_ver.prototype, "pages_wrapped", null);
        $$.$mol_resizer_ver = $mol_resizer_ver;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ver.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/resizer/ver/ver.view.css", "[mol_resizer] * {\n  min-height: fit-content;\n}\n[mol_resizer_ver] {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n}\n");
})($ || ($ = {}));
//ver.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_splitter_hor extends $.$mol_grip {
        type() {
            return "horizontal";
        }
        title() {
            return "";
        }
        Sub() {
            return this.Divider();
        }
        Divider() {
            return ((obj) => {
                obj.sub = () => [this.title()];
                return obj;
            })(new this.$.$mol_view());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_splitter_hor.prototype, "Divider", null);
    $.$mol_splitter_hor = $mol_splitter_hor;
})($ || ($ = {}));
//hor.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_splitter_hor extends $.$mol_splitter_hor {
            size(val) {
                return (val !== void 0) ? val : 0;
            }
            set_style_for_sibling(sibling, val) {
                this.sibling(sibling).style['width'] = val;
            }
            pos_x(val) {
                this.setPos(val, 'horizontal');
            }
            clamp(num, min, max) {
                return num < min ? min : num > max ? max : num;
            }
            node() {
                return this.dom_node().parentNode;
            }
            sibling(sibling) {
                return this.dom_node()[`${sibling}ElementSibling`];
            }
            min_width_node(sibling) {
                const tmp = this.sibling(sibling).style.width;
                this.sibling(sibling).style.width = 'auto';
                const min_width = this.sibling(sibling).clientWidth;
                this.sibling(sibling).style.width = tmp;
                return min_width;
            }
            setPos(pos, type) {
                const main = this.dom_node().parentNode.clientWidth;
                const { top, left } = this.sibling('previous').getBoundingClientRect();
                const { right, width } = this.sibling('next').getBoundingClientRect();
                const min_width_left = this.min_width_node('previous');
                const min_width_right = this.min_width_node('next');
                let rect_size = right - left;
                const percentage = (rect_size / main) * 100;
                const px = pos - top;
                if (right - px < 0 || right - px < min_width_right)
                    return;
                if (px - left < 0 || px - left < min_width_left)
                    return;
                const calculated1 = this.clamp(px - left, min_width_left, rect_size) + 3;
                this.set_style_for_sibling('previous', `${(calculated1 / rect_size) * percentage}%`);
                const calculated2 = this.clamp(rect_size - (px - left), min_width_right, rect_size) + 3;
                this.set_style_for_sibling('next', `${(calculated2 / rect_size) * percentage}%`);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_splitter_hor.prototype, "size", null);
        $$.$mol_splitter_hor = $mol_splitter_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hor.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/splitter/hor/hor.view.css", "[mol_splitter_hor_divider] {\n\tpadding: 0px 3px;\n    margin: 0 -3px;\n    cursor: ew-resize;\n    opacity: 0;\n}\n");
})($ || ($ = {}));
//hor.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $ts_resizer_hor extends $.$ts_numl {
        Divider(id, title, force) {
            return (title !== void 0) ? title : ((obj) => {
                return obj;
            })(new this.$.$mol_splitter_hor());
        }
        pages() {
            return [];
        }
        sub() {
            return this.pages_wrapped();
        }
        pages_wrapped() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $ts_resizer_hor.prototype, "Divider", null);
    $.$ts_resizer_hor = $ts_resizer_hor;
})($ || ($ = {}));
//hor.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $ts_resizer_hor extends $.$ts_resizer_hor {
            divider(id, title) {
                return this.Divider(id, title);
            }
            Divider(id, title) {
                return ((obj) => {
                    obj.title = () => title;
                    return obj;
                })(new this.$.$ts_splitter_hor());
            }
            pages_wrapped() {
                var _a;
                let extended = [];
                for (let i = 0; i < this.pages().length; i++) {
                    extended.push(this.pages()[i]);
                    if (i < this.pages().length - 1)
                        extended.push(this.divider(i + 1, (_a = this.pages()[i]) === null || _a === void 0 ? void 0 : _a.title()));
                }
                return extended;
            }
        }
        __decorate([
            $.$mol_mem_key
        ], $ts_resizer_hor.prototype, "Divider", null);
        __decorate([
            $.$mol_mem
        ], $ts_resizer_hor.prototype, "pages_wrapped", null);
        $$.$ts_resizer_hor = $ts_resizer_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hor.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("ts/resizer/hor/hor.view.css", "[mol_resizer_ver] {\n\tdisplay: flex;\n\twidth: 100%;\n}\n");
})($ || ($ = {}));
//hor.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $ts_tutorial_body extends $.$ts_numl {
        sub() {
            return [this.splitter()];
        }
        splitter() {
            return ((obj) => {
                obj.pages = () => [this.First(), this.Second(), this.Third(), this.Fourth()];
                return obj;
            })(new this.$.$ts_resizer_hor());
        }
        First() {
            return ((obj) => {
                obj.title = () => this.first_title();
                obj.sub = () => ["first"];
                return obj;
            })(new this.$.$mol_view());
        }
        first_title() {
            return ((obj) => {
                obj.title = () => "first";
                return obj;
            })(new this.$.$ts_tutorial_divider());
        }
        Second() {
            return ((obj) => {
                obj.title = () => this.second_title();
                obj.sub = () => ["second"];
                return obj;
            })(new this.$.$mol_view());
        }
        second_title() {
            return ((obj) => {
                obj.title = () => "second";
                return obj;
            })(new this.$.$ts_tutorial_divider());
        }
        Third() {
            return ((obj) => {
                obj.title = () => this.third_title();
                obj.sub = () => ["third"];
                return obj;
            })(new this.$.$mol_view());
        }
        third_title() {
            return ((obj) => {
                obj.title = () => "third";
                return obj;
            })(new this.$.$ts_tutorial_divider());
        }
        Fourth() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view());
        }
    }
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_body.prototype, "splitter", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_body.prototype, "First", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_body.prototype, "first_title", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_body.prototype, "Second", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_body.prototype, "second_title", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_body.prototype, "Third", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_body.prototype, "third_title", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_body.prototype, "Fourth", null);
    $.$ts_tutorial_body = $ts_tutorial_body;
})($ || ($ = {}));
(function ($) {
    class $ts_tutorial_divider extends $.$ts_numl {
        dom_name() {
            return "nu-flex";
        }
        title() {
            return "";
        }
        attr() {
            return ({
                "content": "start",
                "padding": "top 5",
                "height": "100%",
                "gap": "1",
                "flow": "column",
            });
        }
        sub() {
            return [this.icon(), this.el_one()];
        }
        icon() {
            return ((obj) => {
                obj.attr = () => ({
                    "name": "align-justify",
                });
                return obj;
            })(new this.$.$ts_numl());
        }
        el_one() {
            return ((obj) => {
                obj.attr = () => ({
                    "transform": "rotate(90deg)",
                });
                obj.sub = () => [this.title()];
                return obj;
            })(new this.$.$ts_numl());
        }
    }
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_divider.prototype, "icon", null);
    __decorate([
        $.$mol_mem
    ], $ts_tutorial_divider.prototype, "el_one", null);
    $.$ts_tutorial_divider = $ts_tutorial_divider;
})($ || ($ = {}));
//body.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("ts/tutorial/body/body.view.css", "[ts_splitter_hor_divider] {\n\theight: 100%;\n\twidth: 84px;\n\tborder: 1px solid #ebebeb;\n\tbackground-color: white;\n\tbox-shadow: inset 1px 0px 0px #ebebeb;\n\topacity: 1;\n\tjustify-self: center;\n\talign-self: center;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n[ts_splitter_hor_view] {\n\ttransform: rotate(90deg);\n\tdisplay: table;\n}\n[ts_tutorial_body_splitter] {\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: flex;\n}\n");
})($ || ($ = {}));
//body.view.css.js.map
;
"use strict";
//assert.js.map
;
"use strict";
//assert.test.js.map
;
"use strict";
//writable.test.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    function $mol_test(set) {
        for (let name in set) {
            const code = set[name];
            const test = (typeof code === 'string') ? new Function('', code) : code;
            $_1.$mol_test_all.push($_1.$mol_log_group(name, test));
        }
        $mol_test_schedule();
    }
    $_1.$mol_test = $mol_test;
    $_1.$mol_test_mocks = [];
    $_1.$mol_test_all = [];
    async function $mol_test_run() {
        for (var test of $_1.$mol_test_all) {
            let context = Object.create($$);
            for (let mock of $_1.$mol_test_mocks)
                await mock(context);
            await test(context);
        }
        console.info('$mol_test completed', $_1.$mol_test_all.length);
    }
    $_1.$mol_test_run = $mol_test_run;
    let scheduled = false;
    function $mol_test_schedule() {
        if (scheduled)
            return;
        scheduled = true;
        setTimeout($_1.$mol_log_group('$mol_test', () => {
            scheduled = false;
            $mol_test_run();
        }), 500);
    }
    $_1.$mol_test_schedule = $mol_test_schedule;
    $_1.$mol_test_mocks.push(context => {
        let seed = 0;
        context.Math = Object.create(Math);
        context.Math.random = () => Math.sin(seed++);
        const forbidden = ['XMLHttpRequest', 'fetch'];
        for (let api of forbidden) {
            context[api] = new Proxy(function () { }, {
                get() {
                    $_1.$mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
                apply() {
                    $_1.$mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
            });
        }
    });
    $mol_test({
        'mocked Math.random'($) {
            console.assert($.Math.random() === 0);
            console.assert($.Math.random() === Math.sin(1));
        },
        'forbidden XMLHttpRequest'($) {
            try {
                console.assert(void new $.XMLHttpRequest);
            }
            catch (error) {
                console.assert(error.message === 'XMLHttpRequest is forbidden in tests');
            }
        },
        'forbidden fetch'($) {
            try {
                console.assert(void $.fetch(''));
            }
            catch (error) {
                console.assert(error.message === 'fetch is forbidden in tests');
            }
        },
    });
})($ || ($ = {}));
//test.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_after_mock_queue = [];
    function $mol_after_mock_warp() {
        const queue = $.$mol_after_mock_queue.splice(0);
        for (const task of queue)
            task();
    }
    $.$mol_after_mock_warp = $mol_after_mock_warp;
    class $mol_after_mock_commmon extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve();
            this.cancelled = false;
            $.$mol_after_mock_queue.push(task);
        }
        destructor() {
            const index = $.$mol_after_mock_queue.indexOf(this.task);
            if (index >= 0)
                $.$mol_after_mock_queue.splice(index, 1);
        }
    }
    $.$mol_after_mock_commmon = $mol_after_mock_commmon;
    class $mol_after_mock_timeout extends $mol_after_mock_commmon {
        constructor(delay, task) {
            super(task);
            this.delay = delay;
        }
    }
    $.$mol_after_mock_timeout = $mol_after_mock_timeout;
})($ || ($ = {}));
//mock.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_tick = $_1.$mol_after_mock_commmon;
    });
})($ || ($ = {}));
//tick.test.js.map
;
"use strict";
//deep.js.map
;
"use strict";
//deep.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElement: (name) => $.$mol_dom_context.document.createElement(name)
    };
})($ || ($ = {}));
//jsx.js.map
;
"use strict";
//jsx d.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_jsx_make(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        if ($.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $.$mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(id)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        const guid = $.$mol_jsx_prefix + id;
        let node = guid && $.$mol_jsx_document.getElementById(guid);
        if (typeof Elem !== 'string') {
            if (Elem.prototype) {
                const view = node && node[Elem] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                node = view.valueOf();
                node[Elem] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                }
            }
        }
        if (!node)
            node = $.$mol_jsx_document.createElement(Elem);
        $.$mol_dom_render_children(node, [].concat(...childNodes));
        for (const key in props) {
            if (typeof props[key] === 'string') {
                node.setAttribute(key, props[key]);
            }
            else if (props[key] && props[key]['constructor'] === Object) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            node[key] = props[key];
        }
        if (guid)
            node.id = guid;
        return node;
    }
    $.$mol_jsx_make = $mol_jsx_make;
})($ || ($ = {}));
//make.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Make empty div'() {
            $.$mol_assert_equal(($.$mol_jsx_make("div", null)).outerHTML, '<div></div>');
        },
        'Define native field'() {
            const dom = $.$mol_jsx_make("input", { value: '123' });
            $.$mol_assert_equal(dom.outerHTML, '<input value="123">');
            $.$mol_assert_equal(dom.value, '123');
        },
        'Define classes'() {
            const dom = $.$mol_jsx_make("div", { classList: ['foo bar'] });
            $.$mol_assert_equal(dom.outerHTML, '<div class="foo bar"></div>');
        },
        'Define styles'() {
            const dom = $.$mol_jsx_make("div", { style: { color: 'red' } });
            $.$mol_assert_equal(dom.outerHTML, '<div style="color: red;"></div>');
        },
        'Define dataset'() {
            const dom = $.$mol_jsx_make("div", { dataset: { foo: 'bar' } });
            $.$mol_assert_equal(dom.outerHTML, '<div data-foo="bar"></div>');
        },
        'Define attributes'() {
            const dom = $.$mol_jsx_make("div", { hidden: true, lang: "ru" });
            $.$mol_assert_equal(dom.outerHTML, '<div hidden="" lang="ru"></div>');
        },
        'Define child nodes'() {
            const dom = $.$mol_jsx_make("div", null,
                "hello",
                $.$mol_jsx_make("strong", null, "world"),
                "!");
            $.$mol_assert_equal(dom.outerHTML, '<div>hello<strong>world</strong>!</div>');
        },
        'Function as component'() {
            const Button = ({ hint }, target) => {
                return $.$mol_jsx_make("button", { title: hint }, target());
            };
            const dom = $.$mol_jsx_make(Button, { id: "/foo", hint: "click me" }, () => 'hey!');
            $.$mol_assert_equal(dom.outerHTML, '<button title="click me" id="/foo">hey!</button>');
        },
        'Nested guid generation'() {
            const Foo = () => {
                return $.$mol_jsx_make("div", null,
                    $.$mol_jsx_make(Bar, { id: "/bar" },
                        $.$mol_jsx_make("img", { id: "/icon" })));
            };
            const Bar = (props, icon) => {
                return $.$mol_jsx_make("span", null, icon);
            };
            const dom = $.$mol_jsx_make(Foo, { id: "/foo" });
            $.$mol_assert_equal(dom.outerHTML, '<div id="/foo"><span id="/foo/bar"><img id="/foo/icon"></span></div>');
        },
        'Fail on non unique ids'() {
            const App = () => {
                return $.$mol_jsx_make("div", null,
                    $.$mol_jsx_make("span", { id: "/bar" }),
                    $.$mol_jsx_make("span", { id: "/bar" }));
            };
            $.$mol_assert_fail(() => $.$mol_jsx_make(App, { id: "/foo" }), 'JSX already has tag with id "/bar"');
        },
    });
})($ || ($ = {}));
//make.test.js.map
;
"use strict";
var $;
(function ($) {
    const a_stack = [];
    const b_stack = [];
    let cache = null;
    function $mol_compare_deep(a, b) {
        if (Object.is(a, b))
            return true;
        const a_type = typeof a;
        const b_type = typeof b;
        if (a_type !== b_type)
            return false;
        if (a_type === 'function')
            return String(a) === String(b);
        if (a_type !== 'object')
            return false;
        if (!a || !b)
            return false;
        if (a instanceof Error)
            return false;
        if (a['constructor'] !== b['constructor'])
            return false;
        if (a instanceof RegExp)
            return Object.is(String(a), String(b));
        const ref = a_stack.indexOf(a);
        if (ref >= 0) {
            return Object.is(b_stack[ref], b);
        }
        if (!cache)
            cache = new WeakMap;
        let a_cache = cache.get(a);
        if (a_cache) {
            const b_cache = a_cache.get(b);
            if (typeof b_cache === 'boolean')
                return b_cache;
        }
        else {
            a_cache = new WeakMap();
            cache.set(a, a_cache);
        }
        a_stack.push(a);
        b_stack.push(b);
        let result;
        try {
            if (a[Symbol.iterator]) {
                const a_iter = a[Symbol.iterator]();
                const b_iter = b[Symbol.iterator]();
                while (true) {
                    const a_next = a_iter.next();
                    const b_next = b_iter.next();
                    if (a_next.done !== a_next.done)
                        return result = false;
                    if (a_next.done)
                        break;
                    if (!$mol_compare_deep(a_next.value, b_next.value))
                        return result = false;
                }
                return result = true;
            }
            let count = 0;
            for (let key in a) {
                try {
                    if (!$mol_compare_deep(a[key], b[key]))
                        return result = false;
                }
                catch (error) {
                    $.$mol_fail_hidden(new $.$mol_error_mix(`Failed ${JSON.stringify(key)} fields comparison of ${a} and ${b}`, error));
                }
                ++count;
            }
            for (let key in b) {
                --count;
                if (count < 0)
                    return result = false;
            }
            const a_val = a['valueOf']();
            if (Object.is(a_val, a))
                return result = true;
            const b_val = b['valueOf']();
            if (!Object.is(a_val, b_val))
                return result = false;
            return result = true;
        }
        finally {
            a_stack.pop();
            b_stack.pop();
            if (a_stack.length === 0) {
                cache = null;
            }
            else {
                a_cache.set(b, result);
            }
        }
    }
    $.$mol_compare_deep = $mol_compare_deep;
})($ || ($ = {}));
//deep.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'nulls & undefineds'() {
            $.$mol_assert_ok($.$mol_compare_deep(null, null));
            $.$mol_assert_ok($.$mol_compare_deep(undefined, undefined));
            $.$mol_assert_not($.$mol_compare_deep(undefined, null));
            $.$mol_assert_not($.$mol_compare_deep({}, null));
        },
        'number'() {
            $.$mol_assert_ok($.$mol_compare_deep(1, 1));
            $.$mol_assert_ok($.$mol_compare_deep(Number.NaN, Number.NaN));
            $.$mol_assert_not($.$mol_compare_deep(1, 2));
        },
        'Number'() {
            $.$mol_assert_ok($.$mol_compare_deep(Object(1), Object(1)));
            $.$mol_assert_ok($.$mol_compare_deep(Object(Number.NaN), Object(Number.NaN)));
            $.$mol_assert_not($.$mol_compare_deep(Object(1), Object(2)));
        },
        'empty POJOs'() {
            $.$mol_assert_ok($.$mol_compare_deep({}, {}));
        },
        'different POJOs'() {
            $.$mol_assert_not($.$mol_compare_deep({ a: 1 }, { b: 2 }));
        },
        'different POJOs with same keys but different values'() {
            $.$mol_assert_not($.$mol_compare_deep({ a: 1 }, { a: 2 }));
        },
        'different POJOs with different keys but same values'() {
            $.$mol_assert_not($.$mol_compare_deep({}, { a: undefined }));
        },
        'Array'() {
            $.$mol_assert_ok($.$mol_compare_deep([], []));
            $.$mol_assert_ok($.$mol_compare_deep([1, [2]], [1, [2]]));
            $.$mol_assert_not($.$mol_compare_deep([1, 2], [1, 3]));
            $.$mol_assert_not($.$mol_compare_deep([1, 2,], [1, 3, undefined]));
        },
        'same POJO trees'() {
            $.$mol_assert_ok($.$mol_compare_deep({ a: { b: 1 } }, { a: { b: 1 } }));
        },
        'different classes with same values'() {
            class Obj {
                constructor() {
                    this.foo = 1;
                }
            }
            const a = new Obj;
            const b = new class extends Obj {
            };
            $.$mol_assert_not($.$mol_compare_deep(a, b));
        },
        'same POJOs with cyclic reference'() {
            const a = { foo: {} };
            a['self'] = a;
            const b = { foo: {} };
            b['self'] = b;
            $.$mol_assert_ok($.$mol_compare_deep(a, b));
        },
        'empty Element'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx_make("div", null), $.$mol_jsx_make("div", null)));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx_make("div", null), $.$mol_jsx_make("span", null)));
        },
        'Element with attributes'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx_make("div", { dir: "rtl" }), $.$mol_jsx_make("div", { dir: "rtl" })));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx_make("div", { dir: "rtl" }), $.$mol_jsx_make("div", null)));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx_make("div", { dir: "rtl" }), $.$mol_jsx_make("div", { dir: "ltr" })));
        },
        'Element with styles'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx_make("div", { style: { color: 'red' } }), $.$mol_jsx_make("div", { style: { color: 'red' } })));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx_make("div", { style: { color: 'red' } }), $.$mol_jsx_make("div", { style: {} })));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx_make("div", { style: { color: 'red' } }), $.$mol_jsx_make("div", { style: { color: 'blue' } })));
        },
        'Element with content'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx_make("div", null,
                "foo",
                $.$mol_jsx_make("br", null)), $.$mol_jsx_make("div", null,
                "foo",
                $.$mol_jsx_make("br", null))));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx_make("div", null,
                "foo",
                $.$mol_jsx_make("br", null)), $.$mol_jsx_make("div", null,
                "bar",
                $.$mol_jsx_make("br", null))));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx_make("div", null,
                "foo",
                $.$mol_jsx_make("br", null)), $.$mol_jsx_make("div", null,
                "foo",
                $.$mol_jsx_make("hr", null))));
        },
        'Element with handlers'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx_make("div", { onclick: () => 1 }), $.$mol_jsx_make("div", { onclick: () => 1 })));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx_make("div", { onclick: () => 1 }), $.$mol_jsx_make("div", { onclick: () => 2 })));
        },
        'Date'() {
            $.$mol_assert_ok($.$mol_compare_deep(new Date(12345), new Date(12345)));
            $.$mol_assert_not($.$mol_compare_deep(new Date(12345), new Date(12346)));
        },
        'RegExp'() {
            $.$mol_assert_ok($.$mol_compare_deep(/\x22/mig, /\x22/mig));
            $.$mol_assert_not($.$mol_compare_deep(/\x22/mig, /\x21/mig));
            $.$mol_assert_not($.$mol_compare_deep(/\x22/mig, /\x22/mg));
        },
        'Map'() {
            $.$mol_assert_ok($.$mol_compare_deep(new Map, new Map));
            $.$mol_assert_ok($.$mol_compare_deep(new Map([[[1], [2]]]), new Map([[[1], [2]]])));
            $.$mol_assert_not($.$mol_compare_deep(new Map([[1, 2]]), new Map([[1, 3]])));
        },
        'Set'() {
            $.$mol_assert_ok($.$mol_compare_deep(new Set, new Set));
            $.$mol_assert_ok($.$mol_compare_deep(new Set([1, [2]]), new Set([1, [2]])));
            $.$mol_assert_not($.$mol_compare_deep(new Set([1]), new Set([2])));
        },
        'Uint8Array'() {
            $.$mol_assert_ok($.$mol_compare_deep(new Uint8Array, new Uint8Array));
            $.$mol_assert_ok($.$mol_compare_deep(new Uint8Array([0]), new Uint8Array([0])));
            $.$mol_assert_not($.$mol_compare_deep(new Uint8Array([0]), new Uint8Array([1])));
        },
    });
})($ || ($ = {}));
//deep.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_assert_ok(value) {
        if (value)
            return;
        $.$mol_fail(new Error(`${value} ≠ true`));
    }
    $.$mol_assert_ok = $mol_assert_ok;
    function $mol_assert_not(value) {
        if (!value)
            return;
        $.$mol_fail(new Error(`${value} ≠ false`));
    }
    $.$mol_assert_not = $mol_assert_not;
    function $mol_assert_fail(handler, ErrorRight) {
        const fail = $.$mol_fail;
        try {
            $.$mol_fail = $.$mol_fail_hidden;
            handler();
        }
        catch (error) {
            if (!ErrorRight)
                return error;
            if (typeof ErrorRight === 'string') {
                if (error.message !== ErrorRight)
                    throw error;
            }
            else {
                if (!(error instanceof ErrorRight))
                    throw error;
            }
            return error;
        }
        finally {
            $.$mol_fail = fail;
        }
        $.$mol_fail(new Error('Not failed'));
    }
    $.$mol_assert_fail = $mol_assert_fail;
    function $mol_assert_equal(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (Number.isNaN(args[i]) && Number.isNaN(args[j]))
                    continue;
                if (args[i] !== args[j])
                    $.$mol_fail(new Error(`Not equal\n${args[i]}\n${args[j]}`));
            }
        }
    }
    $.$mol_assert_equal = $mol_assert_equal;
    function $mol_assert_unique(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (args[i] === args[j] || (Number.isNaN(args[i]) && Number.isNaN(args[j]))) {
                    $.$mol_fail(new Error(`args[${i}] = args[${j}] = ${args[i]}`));
                }
            }
        }
    }
    $.$mol_assert_unique = $mol_assert_unique;
    function $mol_assert_like(head, ...tail) {
        for (let value of tail) {
            if ($.$mol_compare_deep(value, head)) {
                head = value;
            }
            else {
                const print = (val) => {
                    if (!val)
                        return val;
                    if (typeof val !== 'object')
                        return val;
                    if ('outerHTML' in val)
                        return val.outerHTML;
                    return val;
                };
                return $.$mol_fail(new Error(`Not like\n${print(head)}\n---\n${print(value)}`));
            }
        }
    }
    $.$mol_assert_like = $mol_assert_like;
})($ || ($ = {}));
//assert.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'must be false'() {
            $.$mol_assert_not(0);
        },
        'must be true'() {
            $.$mol_assert_ok(1);
        },
        'two must be equal'() {
            $.$mol_assert_equal(2, 2);
        },
        'three must be equal'() {
            $.$mol_assert_equal(2, 2, 2);
        },
        'two must be unique'() {
            $.$mol_assert_unique([3], [3]);
        },
        'three must be unique'() {
            $.$mol_assert_unique([3], [3], [3]);
        },
        'two must be alike'() {
            $.$mol_assert_like([3], [3]);
        },
        'three must be alike'() {
            $.$mol_assert_like([3], [3], [3]);
        },
    });
})($ || ($ = {}));
//assert.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'init with overload'() {
            class X extends $.$mol_object {
                foo() {
                    return 1;
                }
            }
            var x = X.make({
                foo: () => 2,
            });
            $.$mol_assert_equal(x.foo(), 2);
        },
    });
})($ || ($ = {}));
//object.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'run callback'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            $.$mol_assert_equal(Plus1.run(() => 2), 3);
        },
        'wrap function'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            const obj = {
                level: 2,
                pow: Plus1.func(function (a) {
                    return a ** this.level;
                })
            };
            $.$mol_assert_equal(obj.pow(2), 5);
        },
        'decorate field getter'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return Plus1.last = (task.call(this, ...args) || 0) + 1;
                    };
                }
            }
            Plus1.last = 0;
            class Foo {
                static get two() {
                    return 1;
                }
                static set two(next) { }
            }
            __decorate([
                Plus1.field
            ], Foo, "two", null);
            $.$mol_assert_equal(Foo.two, 2);
            Foo.two = 3;
            $.$mol_assert_equal(Plus1.last, 2);
            $.$mol_assert_equal(Foo.two, 2);
        },
        'decorate instance method'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            class Foo1 {
                constructor() {
                    this.level = 2;
                }
                pow(a) {
                    return a ** this.level;
                }
            }
            __decorate([
                Plus1.method
            ], Foo1.prototype, "pow", null);
            const Foo2 = Foo1;
            const foo = new Foo2;
            $.$mol_assert_equal(foo.pow(2), 5);
        },
        'decorate static method'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            class Foo {
                static pow(a) {
                    return a ** this.level;
                }
            }
            Foo.level = 2;
            __decorate([
                Plus1.method
            ], Foo, "pow", null);
            $.$mol_assert_equal(Foo.pow(2), 5);
        },
        'decorate class'() {
            class BarInc extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        const foo = task.call(this, ...args);
                        foo.bar++;
                        return foo;
                    };
                }
            }
            let Foo = class Foo {
                constructor(bar) {
                    this.bar = bar;
                }
            };
            Foo = __decorate([
                BarInc.class
            ], Foo);
            $.$mol_assert_equal(new Foo(2).bar, 3);
        },
    });
})($ || ($ = {}));
//wrapper.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'all cases of using maybe'() {
            $.$mol_assert_equal($.$mol_maybe(0)[0], 0);
            $.$mol_assert_equal($.$mol_maybe(false)[0], false);
            $.$mol_assert_equal($.$mol_maybe(null)[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(void 0)[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(void 0).map(v => v.toString())[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(0).map(v => v.toString())[0], '0');
        },
    });
})($ || ($ = {}));
//maybe.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        var _a;
        $.$mol_log2 = (_a = class extends $_1.$mol_log2 {
            },
            _a.current = new $_1.$mol_log2(null, '$mol_log2_mock', []),
            _a);
    });
})($ || ($ = {}));
//log2.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'objects by reference'() {
            $.$mol_assert_equal($.$mol_compare_any({}, {}), false);
        },
        'primitives by value'() {
            $.$mol_assert_equal($.$mol_compare_any('a', 'a'), true);
        },
        'NaN by value'() {
            $.$mol_assert_equal($.$mol_compare_any(Number.NaN, Number.NaN), true);
        },
        'NaN not equal zero'() {
            $.$mol_assert_equal($.$mol_compare_any(Number.NaN, 0), false);
        },
    });
})($ || ($ = {}));
//any.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'return source when same object'() {
            const target = {};
            $.$mol_assert_equal($.$mol_conform(target, target), target);
        },
        'return target when some is not object'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(true, obj), true);
            $.$mol_assert_equal($.$mol_conform(obj, true), obj);
        },
        'return target when some is null'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(null, obj), null);
            $.$mol_assert_equal($.$mol_conform(obj, null), obj);
        },
        'return target when some is undefined'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(undefined, obj), undefined);
            $.$mol_assert_equal($.$mol_conform(obj, undefined), obj);
        },
        'return target when different keys count'() {
            const target = [1, 2, 3];
            const source = [1, 2, 3, undefined];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.join(','), '1,2,3');
        },
        'return source when array values are strong equal'() {
            const source = [1, 2, 3];
            $.$mol_assert_equal($.$mol_conform([1, 2, 3], source), source);
        },
        'return source when object values are strong equal'() {
            const source = { a: 1, b: 2 };
            $.$mol_assert_equal($.$mol_conform({ a: 1, b: 2 }, source), source);
        },
        'return target when some values are not equal'() {
            const target = [1, 2, 3];
            const source = [1, 2, 5];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.join(','), '1,2,3');
        },
        'return source when values are deep equal'() {
            const source = { foo: { bar: 1 } };
            $.$mol_assert_equal($.$mol_conform({ foo: { bar: 1 } }, source), source);
        },
        'return target with equal values from source and not equal from target'() {
            const source = { foo: { xxx: 1 }, bar: { xxx: 2 } };
            const target = { foo: { xxx: 1 }, bar: { xxx: 3 } };
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.foo, source.foo);
            $.$mol_assert_equal(result.bar, target.bar);
        },
        'return target when equal but with different class'() {
            const target = { '0': 1 };
            $.$mol_assert_equal($.$mol_conform(target, [1]), target);
        },
        'return target when conformer for class is not defined'() {
            const Obj = class {
            };
            const source = new Obj;
            const target = new Obj;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
        },
        'return target when has cyclic reference'() {
            const source = { foo: {} };
            source['self'] = source;
            const target = { foo: {} };
            target['self'] = target;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result['self'], target);
            $.$mol_assert_equal(result.foo, source.foo);
        },
        'return source when equal dates'() {
            const source = new Date(12345);
            const target = new Date(12345);
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'return source when equal regular expressions'() {
            const source = /\x22/mig;
            const target = /\x22/mig;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'return cached value if already conformed'() {
            const source = { foo: { xxx: 1 }, bar: { xxx: 3 } };
            const target = { foo: { xxx: 2 }, bar: { xxx: 3 } };
            const result = $.$mol_conform(target, source);
            target.foo.xxx = 1;
            $.$mol_assert_equal($.$mol_conform(target.foo, source.foo), target.foo);
        },
        'skip readlony fields'() {
            const source = { foo: {}, bar: {} };
            const target = { foo: {}, bar: {} };
            Object.defineProperty(target, 'bar', { value: {}, writable: false });
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.foo, source.foo);
            $.$mol_assert_equal(result.bar, target.bar);
        },
        'object with NaN'() {
            const source = { foo: Number.NaN };
            const target = { foo: Number.NaN };
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'array with NaN'() {
            const source = [Number.NaN];
            const target = [Number.NaN];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
    });
})($ || ($ = {}));
//conform.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'trim array'() {
            const array = [undefined, null, 0, false, null, undefined, undefined];
            const correct = [undefined, null, 0, false, null];
            $.$mol_array_trim(array);
            $.$mol_assert_like(array, correct);
        }
    });
})($ || ($ = {}));
//trim.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push(async ($) => {
        await $_1.$mol_fiber_warp();
        $_1.$mol_fiber.deadline = Date.now() + 100;
    });
})($ || ($ = {}));
//fiber.test.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $.$mol_object2 {
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//timeout.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_timeout = $_1.$mol_after_mock_timeout;
    });
})($ || ($ = {}));
//timeout.test.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $.$mol_after_timeout {
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//frame.node.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_frame = $_1.$mol_after_mock_commmon;
    });
})($ || ($ = {}));
//frame.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'Value has js-path name'() {
            class App extends $_1.$mol_object2 {
                static get title() { return new $_1.$mol_object2; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "title", null);
            $_1.$mol_assert_equal(`${App.title}`, 'App.title');
        },
        'Simple property'() {
            class App extends $_1.$mol_object2 {
            }
            App.value = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", void 0);
            $_1.$mol_assert_equal(App.value, 1);
            App.value = 2;
            $_1.$mol_assert_equal(App.value, 2);
        },
        'Instant actualization'() {
            class Source extends $_1.$mol_object2 {
                constructor() {
                    super(...arguments);
                    this.value = 1;
                }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], Source.prototype, "value", void 0);
            class App extends $_1.$mol_object2 {
                static get source() { return Source.create(); }
                static get value() { return this.source.value + 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "source", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", null);
            $_1.$mol_assert_equal(App.value, 2);
            App.source.value = 2;
            $_1.$mol_assert_equal(App.value, 3);
        },
        'Access to cached value'() {
            class App extends $_1.$mol_object2 {
                static get value() { return 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", null);
            $_1.$mol_assert_equal($_1.$mol_atom2_value(() => App.value), undefined);
            $_1.$mol_assert_equal(App.value, 1);
            $_1.$mol_assert_equal($_1.$mol_atom2_value(() => App.value), 1);
        },
        'Do not recalc slaves on equal changes'() {
            class App extends $_1.$mol_object2 {
                static get result() { return this.first[0] + this.counter++; }
            }
            App.first = [1];
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.first = [1];
            $_1.$mol_assert_equal(App.result, 1);
        },
        'Do not recalc grand slave on equal direct slave result '() {
            class App extends $_1.$mol_object2 {
                static get second() { return Math.abs(this.first); }
                static get result() { return this.second + ++this.counter; }
            }
            App.first = 1;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 2);
            App.first = -1;
            $_1.$mol_assert_equal(App.result, 2);
        },
        'Recalc when [not changed master] changes [following master]'() {
            class App extends $_1.$mol_object2 {
                static get second() {
                    this.third = this.first;
                    return 0;
                }
                static get result() { return this.second + this.third + ++this.counter; }
            }
            App.first = 1;
            App.third = 0;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "third", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 2);
            App.first = 5;
            $_1.$mol_assert_equal(App.result, 7);
        },
        'Branch switching'() {
            class App extends $_1.$mol_object2 {
                static get second() { return 2; }
                static get result() {
                    return (this.condition ? this.first : this.second) + this.counter++;
                }
            }
            App.first = 1;
            App.condition = true;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.condition = false;
            $_1.$mol_assert_equal(App.result, 3);
            App.first = 10;
            $_1.$mol_assert_equal(App.result, 3);
        },
        'Forbidden self invalidation'() {
            class App extends $_1.$mol_object2 {
                static get second() { return this.first + 1; }
                static get result() {
                    this.second;
                    return this.first++;
                }
            }
            App.first = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_fail(() => App.result);
        },
        'Side effect inside computation'() {
            class App extends $_1.$mol_object2 {
                static increase() { return ++this.first; }
                static get result() {
                    return this.increase() + 1;
                }
            }
            App.first = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_fiber.method
            ], App, "increase", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 3);
        },
        'Forbidden cyclic dependency'() {
            class App extends $_1.$mol_object2 {
                static get first() { return this.second - 1; }
                static get second() { return this.first + 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            $_1.$mol_assert_fail(() => App.first);
        },
        'Forget sub fibers on complete'() {
            class App extends $_1.$mol_object2 {
                static count() { return this.counter++; }
                static get result() { return this.count() + this.data; }
            }
            App.counter = 0;
            App.data = 1;
            __decorate([
                $_1.$mol_fiber.method
            ], App, "count", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "data", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.data = 2;
            $_1.$mol_assert_equal(App.result, 3);
        },
        async 'Automatic destroy owned value on self destruction'() {
            let counter = 0;
            class Having extends $_1.$mol_object2 {
                destructor() { counter++; }
            }
            class App extends $_1.$mol_object2 {
                static get having() { return Having.create(); }
                static get result() {
                    if (this.condition)
                        this.having;
                    return 0;
                }
            }
            App.condition = true;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "having", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            App.result;
            App.condition = false;
            App.result;
            $_1.$mol_assert_equal(counter, 0);
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(counter, 1);
        },
        async 'Do not destroy putted value'() {
            class App extends $_1.$mol_object2 {
                static get target() {
                    return this.condition ? this.source : 0;
                }
            }
            App.condition = true;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "source", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "target", null);
            App.source = 1;
            $_1.$mol_assert_equal(App.target, 1);
            App.condition = false;
            $_1.$mol_assert_equal(App.target, 0);
            await $_1.$mol_fiber_warp();
            App.condition = true;
            $_1.$mol_assert_equal(App.target, 1);
        },
        'Restore after error'() {
            class App extends $_1.$mol_object2 {
                static get broken() {
                    if (this.condition)
                        $_1.$mol_fail(new Error('test error'));
                    return 1;
                }
                static get result() { return this.broken; }
            }
            App.condition = false;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "broken", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.condition = true;
            $_1.$mol_assert_fail(() => App.result);
            App.condition = false;
            $_1.$mol_assert_equal(App.result, 1);
        },
        async 'auto fresh only when alive'($) {
            let state = 1;
            const monitor = new $.$mol_atom2;
            monitor.calculate = () => {
                new $.$mol_after_frame($_1.$mol_atom2.current.fresh);
                return state;
            };
            $_1.$mol_assert_equal(monitor.get(), 1);
            state = 2;
            $_1.$mol_assert_equal(monitor.get(), 1);
            $.$mol_after_mock_warp();
            $_1.$mol_assert_equal(monitor.get(), 2);
            state = 3;
            $_1.$mol_assert_equal(monitor.get(), 2);
            monitor.destructor();
            $_1.$mol_assert_equal(monitor.value, undefined);
            $.$mol_after_mock_warp();
            await $.$mol_fiber_warp();
            $_1.$mol_assert_equal(monitor.value, undefined);
        },
    });
})($ || ($ = {}));
//atom2.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Property method'() {
            class App extends $.$mol_object2 {
                static value(next = 1) { return next + 1; }
            }
            __decorate([
                $.$mol_mem
            ], App, "value", null);
            $.$mol_assert_equal(App.value(), 2);
            App.value(2);
            $.$mol_assert_equal(App.value(), 3);
        },
        'auto sync of properties'() {
            class X extends $.$mol_object2 {
                foo(next) {
                    return next || 1;
                }
                bar() {
                    return this.foo() + 1;
                }
                xxx() {
                    return this.bar() + 1;
                }
            }
            __decorate([
                $.$mol_mem
            ], X.prototype, "foo", null);
            __decorate([
                $.$mol_mem
            ], X.prototype, "bar", null);
            __decorate([
                $.$mol_mem
            ], X.prototype, "xxx", null);
            const x = new X;
            $.$mol_assert_equal(x.bar(), 2);
            $.$mol_assert_equal(x.xxx(), 3);
            x.foo(5);
            $.$mol_assert_equal(x.xxx(), 7);
        },
        async 'must be deferred destroyed when no longer referenced'() {
            let foo;
            let foo_destroyed = false;
            class B extends $.$mol_object2 {
                showing(next) {
                    if (next === void 0)
                        return true;
                    return next;
                }
                foo() {
                    return foo = new class extends $.$mol_object {
                        destructor() {
                            foo_destroyed = true;
                        }
                    };
                }
                bar() {
                    return this.showing() ? this.foo() : null;
                }
            }
            __decorate([
                $.$mol_mem
            ], B.prototype, "showing", null);
            __decorate([
                $.$mol_mem
            ], B.prototype, "foo", null);
            __decorate([
                $.$mol_mem
            ], B.prototype, "bar", null);
            var b = new B;
            var bar = b.bar();
            $.$mol_assert_ok(bar);
            b.showing(false);
            b.bar();
            await $.$mol_fiber_warp();
            $.$mol_assert_ok(foo_destroyed);
            $.$mol_assert_not(b.bar());
            b.showing(true);
            $.$mol_defer.run();
            $.$mol_assert_unique(b.bar(), bar);
        },
        async 'wait for data'() {
            class Test extends $.$mol_object2 {
                source() {
                    return $.$mol_fiber_sync(() => new Promise(done => done('Jin')))();
                }
                middle() {
                    return this.source();
                }
                target() {
                    return this.middle();
                }
            }
            __decorate([
                $.$mol_mem
            ], Test.prototype, "source", null);
            __decorate([
                $.$mol_mem
            ], Test.prototype, "middle", null);
            __decorate([
                $.$mol_mem
            ], Test.prototype, "target", null);
            const t = new Test;
            $.$mol_assert_fail(() => t.target().valueOf(), Promise);
            await $.$mol_fiber_warp();
            $.$mol_assert_equal(t.target(), 'Jin');
        },
    });
})($ || ($ = {}));
//mem.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'number'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get(123), undefined);
            $.$mol_assert_equal(dict.has(123), false);
            dict.set(123, 321);
            $.$mol_assert_equal(dict.get(123), 321);
            $.$mol_assert_equal(dict.has(123), true);
            dict.delete(123);
            $.$mol_assert_equal(dict.get(123), undefined);
            $.$mol_assert_equal(dict.has(123), false);
        },
        'pojo as key'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get({ foo: 123 }), undefined);
            $.$mol_assert_equal(dict.has({ foo: 123 }), false);
            dict.set({ foo: 123 }, 321);
            $.$mol_assert_equal(dict.get({ foo: 123 }), 321);
            $.$mol_assert_equal(dict.has({ foo: 123 }), true);
            dict.delete({ foo: 123 });
            $.$mol_assert_equal(dict.get({ foo: 123 }), undefined);
            $.$mol_assert_equal(dict.has({ foo: 123 }), false);
        },
        'array as key'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get([123]), undefined);
            $.$mol_assert_equal(dict.has([123]), false);
            dict.set([123], 321);
            $.$mol_assert_equal(dict.get([123]), 321);
            $.$mol_assert_equal(dict.has([123]), true);
            dict.delete([123]);
            $.$mol_assert_equal(dict.get([123]), undefined);
            $.$mol_assert_equal(dict.has([123]), false);
        },
        'html element as key'() {
            const el = $.$mol_jsx_make("div", null);
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get(el), undefined);
            $.$mol_assert_equal(dict.has(el), false);
            dict.set(el, 321);
            $.$mol_assert_equal(dict.get(el), 321);
            $.$mol_assert_equal(dict.has(el), true);
            $.$mol_assert_equal(dict.get($.$mol_jsx_make("div", null)), undefined);
            $.$mol_assert_equal(dict.has($.$mol_jsx_make("div", null)), false);
            dict.delete(el);
            $.$mol_assert_equal(dict.get(el), undefined);
            $.$mol_assert_equal(dict.has(el), false);
        },
        'for-of key restore'() {
            const dict = new $.$mol_dict([[123, 321]]);
            const keys = [];
            const vals = [];
            for (const [key, val] of dict) {
                keys.push(key);
                vals.push(val);
            }
            $.$mol_assert_equal(keys.length, 1);
            $.$mol_assert_equal(keys[0], 123);
            $.$mol_assert_equal(vals.length, 1);
            $.$mol_assert_equal(vals[0], 321);
        },
        'forEach key restore'() {
            const dict = new $.$mol_dict([[123, 321]]);
            const keys = [];
            const vals = [];
            dict.forEach((val, key) => {
                keys.push(key);
                vals.push(val);
            });
            $.$mol_assert_equal(keys.length, 1);
            $.$mol_assert_equal(keys[0], 123);
            $.$mol_assert_equal(vals.length, 1);
            $.$mol_assert_equal(vals[0], 321);
        },
    });
})($ || ($ = {}));
//dict.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'keyed reactive properties'() {
            $.$mol_fiber_warp();
            class Fib extends $.$mol_object2 {
                static value(index, next) {
                    if (next)
                        return next;
                    if (index < 2)
                        return 1;
                    return this.value(index - 1) + this.value(index - 2);
                }
            }
            __decorate([
                $.$mol_mem_key
            ], Fib, "value", null);
            $.$mol_assert_equal(Fib.value(10), 89);
            Fib.value(1, 2);
            $.$mol_assert_equal(Fib.value(10), 144);
        },
        'cached property with simple key'() {
            class X extends $.$mol_object2 {
                foo(id, next) {
                    if (next == null)
                        return new Number(123);
                    return new Number(next);
                }
            }
            __decorate([
                $.$mol_mem_key
            ], X.prototype, "foo", null);
            const x = new X;
            $.$mol_assert_equal(x.foo(0).valueOf(), 123);
            $.$mol_assert_equal(x.foo(0), x.foo(0));
            $.$mol_assert_unique(x.foo(0), x.foo(1));
            x.foo(0, 321);
            $.$mol_assert_equal(x.foo(0).valueOf(), 321);
            x.foo(0, null);
            $.$mol_assert_equal(x.foo(0).valueOf(), 123);
        },
        'cached property with complex key'() {
            class X extends $.$mol_object2 {
                foo(ids) {
                    return Math.random();
                }
            }
            __decorate([
                $.$mol_mem_key
            ], X.prototype, "foo", null);
            const x = new X;
            $.$mol_assert_equal(x.foo([0, 1]), x.foo([0, 1]));
            $.$mol_assert_unique(x.foo([0, 1]), x.foo([0, 2]));
        },
    });
})($ || ($ = {}));
//key.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'const returns stored value'() {
            const foo = { bar: $.$mol_const(Math.random()) };
            $.$mol_assert_equal(foo.bar(), foo.bar());
            $.$mol_assert_equal(foo.bar(), foo.bar['()']);
        },
    });
})($ || ($ = {}));
//const.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_field(proto, name, descr) {
        if (!descr)
            descr = Object.getOwnPropertyDescriptor(proto, name);
        const get = descr ? (descr.get || $.$mol_const(descr.value)) : (() => undefined);
        const set = descr && descr.set || function (next) { get_cache(this).put(next); };
        const store = new WeakMap();
        Object.defineProperty(proto, name + "@", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (!cache) {
                cache = new $.$mol_atom2;
                cache.calculate = get.bind(host);
                cache[Symbol.toStringTag] = `${host}.${name}`;
                cache.abort = () => {
                    store.delete(host);
                    cache.forget();
                    return true;
                };
                store.set(host, cache);
            }
            return cache;
        };
        return {
            get() {
                return get_cache(this).get();
            },
            set,
        };
    }
    $.$mol_atom2_field = $mol_atom2_field;
})($ || ($ = {}));
//field.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        async 'Autorun'() {
            class App extends $.$mol_object2 {
                static get init() {
                    ++this.counter;
                    return this.state;
                }
            }
            App.state = 1;
            App.counter = 0;
            __decorate([
                $.$mol_atom2_field
            ], App, "state", void 0);
            __decorate([
                $.$mol_atom2_field
            ], App, "init", null);
            const autorun = $.$mol_atom2_autorun(() => App.init);
            try {
                await $.$mol_fiber_warp();
                $.$mol_assert_equal(App.counter, 1);
                App.state = 2;
                $.$mol_assert_equal(App.counter, 1);
                await $.$mol_fiber_warp();
                $.$mol_assert_equal(App.counter, 2);
                App.state = 3;
            }
            finally {
                autorun.destructor();
            }
            App.state = 4;
            await $.$mol_fiber_warp();
            $.$mol_assert_equal(App.counter, 2);
        },
    });
})($ || ($ = {}));
//autorun.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_func_name_test = (() => () => { })();
    $.$mol_test({
        'FQN of anon function'() {
            $.$mol_assert_equal($.$mol_func_name_test.name, '');
            $.$mol_assert_equal($.$mol_func_name($.$mol_func_name_test), '$mol_func_name_test');
            $.$mol_assert_equal($.$mol_func_name_test.name, '$mol_func_name_test');
        },
    });
})($ || ($ = {}));
//name.test.js.map
;
"use strict";
//extract.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'id auto generation'() {
            class $mol_view_test_item extends $.$mol_view {
            }
            class $mol_view_test_block extends $.$mol_view {
                element(id) {
                    return new $mol_view_test_item();
                }
            }
            __decorate([
                $.$mol_mem_key
            ], $mol_view_test_block.prototype, "element", null);
            var x = $mol_view_test_block.Root(0);
            $.$mol_assert_equal(x.dom_node().id, '$mol_view_test_block.Root(0)');
            $.$mol_assert_equal(x.element(0).dom_node().id, '$mol_view_test_block.Root(0).element(0)');
        },
        'caching ref to dom node'() {
            var x = new class extends $.$mol_view {
            };
            $.$mol_assert_equal(x.dom_node(), x.dom_node());
        },
        'content render'() {
            class $mol_view_test extends $.$mol_view {
                sub() {
                    return ['lol', 5];
                }
            }
            var x = new $mol_view_test();
            var node = x.dom_tree();
            $.$mol_assert_equal(node.innerHTML, 'lol5');
        },
        'bem attributes generation'() {
            class $mol_view_test_item extends $.$mol_view {
            }
            class $mol_view_test_block extends $.$mol_view {
                Element(id) {
                    return new $mol_view_test_item();
                }
            }
            __decorate([
                $.$mol_mem_key
            ], $mol_view_test_block.prototype, "Element", null);
            var x = new $mol_view_test_block();
            $.$mol_assert_equal(x.dom_node().getAttribute('mol_view_test_block'), '');
            $.$mol_assert_equal(x.dom_node().getAttribute('mol_view'), '');
            $.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_block_element'), '');
            $.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_item'), '');
            $.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view'), '');
        },
        'render custom attributes'() {
            class $mol_view_test extends $.$mol_view {
                attr() {
                    return {
                        'href': '#haha',
                        'required': true,
                        'hidden': false,
                    };
                }
            }
            var x = new $mol_view_test();
            var node = x.dom_tree();
            $.$mol_assert_equal(node.getAttribute('href'), '#haha');
            $.$mol_assert_equal(node.getAttribute('required'), 'true');
            $.$mol_assert_equal(node.getAttribute('hidden'), null);
        },
        'render custom fields'() {
            class $mol_view_test extends $.$mol_view {
                field() {
                    return {
                        'hidden': true
                    };
                }
            }
            var x = new $mol_view_test();
            var node = x.dom_tree();
            $.$mol_assert_equal(node.hidden, true);
        },
        'attach event handlers'() {
            var clicked = false;
            class $mol_view_test extends $.$mol_view {
                event() {
                    return {
                        'click': (next) => this.event_click(next)
                    };
                }
                event_click(next) {
                    clicked = true;
                }
            }
            var x = new $mol_view_test();
            var node = x.dom_node();
            node.click();
            $.$mol_assert_ok(clicked);
        },
    });
})($ || ($ = {}));
//view.test.js.map
;
"use strict";
//equals.js.map
;
"use strict";
//equals.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_diff_path(...paths) {
        const limit = Math.min(...paths.map(path => path.length));
        lookup: for (var i = 0; i < limit; ++i) {
            const first = paths[0][i];
            for (let j = 1; j < paths.length; ++j) {
                if (paths[j][i] !== first)
                    break lookup;
            }
        }
        return {
            prefix: paths[0].slice(0, i),
            suffix: paths.map(path => path.slice(i)),
        };
    }
    $.$mol_diff_path = $mol_diff_path;
})($ || ($ = {}));
//path.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'equal paths'() {
            const diff = $.$mol_diff_path([1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]);
            $.$mol_assert_like(diff, {
                prefix: [1, 2, 3, 4],
                suffix: [[], [], []],
            });
        },
        'different suffix'() {
            const diff = $.$mol_diff_path([1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 5, 4]);
            $.$mol_assert_like(diff, {
                prefix: [1, 2],
                suffix: [[3, 4], [3, 5], [5, 4]],
            });
        },
        'one contains other'() {
            const diff = $.$mol_diff_path([1, 2, 3, 4], [1, 2], [1, 2, 3]);
            $.$mol_assert_like(diff, {
                prefix: [1, 2],
                suffix: [[3, 4], [], [3]],
            });
        },
        'fully different'() {
            const diff = $.$mol_diff_path([1, 2], [3, 4], [5, 6]);
            $.$mol_assert_like(diff, {
                prefix: [],
                suffix: [[1, 2], [3, 4], [5, 6]],
            });
        },
    });
})($ || ($ = {}));
//path.test.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_error_mix extends Error {
        constructor(message, ...errors) {
            super(message);
            this.errors = errors;
            if (errors.length) {
                const stacks = [...errors.map(error => error.message), this.stack];
                const diff = $.$mol_diff_path(...stacks.map(stack => {
                    if (!stack)
                        return [];
                    return stack.split('\n').reverse();
                }));
                const head = diff.prefix.reverse().join('\n');
                const tails = diff.suffix.map(path => path.reverse().map(line => line.replace(/^(?!\s+at)/, '\tat (.) ')).join('\n')).join('\n\tat (.) -----\n');
                this.stack = `Error: ${this.constructor.name}\n\tat (.) /"""\\\n${tails}\n\tat (.) \\___/\n${head}`;
                this.message += errors.map(error => '\n' + error.message).join('');
            }
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));
//mix.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $.$mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror')[0];
        if (error)
            throw new Error(error.textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//parse.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_jsx_attach(next, action) {
        const prev = $.$mol_jsx_document;
        try {
            $.$mol_jsx_document = next;
            return action();
        }
        finally {
            $.$mol_jsx_document = prev;
        }
    }
    $.$mol_jsx_attach = $mol_jsx_attach;
})($ || ($ = {}));
//attach.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Attach to document'() {
            const doc = $.$mol_dom_parse('<html><body id="/foo"></body></html>');
            $.$mol_jsx_attach(doc, () => $.$mol_jsx_make("body", { id: "/foo" }, "bar"));
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
    });
})($ || ($ = {}));
//attach.test.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_jsx_view extends $.$mol_object2 {
        static of(node) {
            return node[this];
        }
        valueOf() {
            const prefix = $.$mol_jsx_prefix;
            const booked = $.$mol_jsx_booked;
            const document = $.$mol_jsx_document;
            try {
                $.$mol_jsx_prefix = this[Symbol.toStringTag];
                $.$mol_jsx_booked = new Set;
                $.$mol_jsx_document = this.ownerDocument;
                return this.render();
            }
            finally {
                $.$mol_jsx_prefix = prefix;
                $.$mol_jsx_booked = booked;
                $.$mol_jsx_document = document;
            }
        }
        render() {
            return $.$mol_fail(new Error('dom_tree() not implemented'));
        }
    }
    $.$mol_jsx_view = $mol_jsx_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Class as component'() {
            class Foo extends $.$mol_jsx_view {
                constructor() {
                    super(...arguments);
                    this.title = '';
                }
                render() {
                    return $.$mol_jsx_make("div", null,
                        this.title,
                        " ",
                        this.childNodes.join('-'));
                }
            }
            const dom = $.$mol_jsx_make(Foo, { id: "/foo", title: "bar" },
                "xxx",
                123);
            $.$mol_assert_equal(dom.outerHTML, '<div id="/foo">bar xxx-123</div>');
        },
        'View by element'() {
            class Br extends $.$mol_jsx_view {
                render() {
                    view = this;
                    return $.$mol_jsx_make("br", { id: "/foo" });
                }
            }
            let view;
            $.$mol_assert_equal(Br.of($.$mol_jsx_make(Br, null)), view);
        },
        'Attached view rerender'() {
            const doc = $.$mol_dom_parse('<html><body id="/foo"></body></html>');
            class Title extends $.$mol_jsx_view {
                constructor() {
                    super(...arguments);
                    this.value = 'foo';
                }
                render() {
                    return $.$mol_jsx_make("div", null, this.value);
                }
            }
            const dom = $.$mol_jsx_attach(doc, () => $.$mol_jsx_make(Title, { id: "/foo" }));
            const title = Title.of(dom);
            $.$mol_assert_equal(title.ownerDocument, doc);
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">foo</body></html>');
            title.value = 'bar';
            title.valueOf();
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
        async 'Reactive attached view'() {
            const doc = $.$mol_dom_parse('<html><body id="/foo"></body></html>');
            class Task {
                title(next) { return next || 'foo'; }
            }
            __decorate([
                $.$mol_mem
            ], Task.prototype, "title", null);
            class App extends $.$mol_jsx_view {
                task() { return new Task; }
                valueOf() {
                    return super.valueOf();
                }
                render() {
                    return $.$mol_jsx_make("div", null, this.task().title());
                }
            }
            __decorate([
                $.$mol_mem
            ], App.prototype, "task", null);
            __decorate([
                $.$mol_mem
            ], App.prototype, "valueOf", null);
            const task = new Task;
            $.$mol_atom2_autorun(() => $.$mol_jsx_attach(doc, () => $.$mol_jsx_make(App, { id: "/foo", task: () => task })));
            await $.$mol_fiber_warp();
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">foo</body></html>');
            task.title('bar');
            await $.$mol_fiber_warp();
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
    });
})($ || ($ = {}));
//view.test.js.map

//# sourceMappingURL=node.test.js.map
