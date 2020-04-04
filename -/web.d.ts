declare namespace $ { }
export = $;

declare namespace $ {
    namespace $$ {
        let $$: typeof $;
    }
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = (typeof globalThis) & (typeof $.$$) & (typeof $);
    function $mol_ambient(this: $mol_ambient_context | void, overrides: Partial<$mol_ambient_context>): $mol_ambient_context;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    class $mol_object2 {
        static $: $mol_ambient_context;
        [$mol_ambient_ref]: $mol_ambient_context;
        get $(): $mol_ambient_context;
        set $(next: $mol_ambient_context);
        constructor(init?: (obj: any) => void);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static toString(): any;
        destructor(): void;
        toString(): any;
        toJSON(): any;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        promise: any;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement;
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
    }
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<(this: Host, ...args: Args) => Result>) => TypedPropertyDescriptor<(this: Host, ...args: Args) => Result>;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    let $mol_dev_format_head: symbol;
    let $mol_dev_format_body: symbol;
    function $mol_dev_format_native(obj: any): any;
    function $mol_dev_format_auto(obj: any): any;
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: any;
    let $mol_dev_format_ol: any;
    let $mol_dev_format_li: any;
    let $mol_dev_format_table: any;
    let $mol_dev_format_tr: any;
    let $mol_dev_format_td: any;
    let $mol_dev_format_accent: any;
    let $mol_dev_format_strong: any;
    let $mol_dev_format_string: any;
    let $mol_dev_format_shade: any;
    let $mol_dev_format_indent: any;
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
    function $mol_log(path: any, ...values: any[]): void;
}

declare namespace $ {
    function $mol_log_group<Task extends Function, This>(name: string, task: Task): Task;
}

declare namespace $ {
    function $mol_log_context(next?: () => void): () => void;
}

declare namespace $ {
    function $mol_log_debug(next?: string): string;
}

declare namespace $ {
    var $mol_log_filter: (next?: string) => string;
}

declare namespace $ {
    class $mol_log2 extends $mol_wrapper {
        readonly host: any;
        readonly id: string;
        readonly args: any[];
        static current: $mol_log2;
        static wrap<This extends {
            $: $mol_ambient_context;
        }, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => any;
        constructor(host: any, id: string, args: any[]);
        stream: $mol_log2_line[];
        flush(): void;
        info(...values: any[]): void;
        static info(...values: any[]): void;
        static excludes: RegExp[];
        static prefix: any[];
    }
    class $mol_log2_indent extends $mol_wrapper {
        static wrap<This extends {
            $: $mol_ambient_context;
        }, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => any;
    }
    class $mol_log2_table extends $mol_log2 {
    }
    class $mol_log2_hidden extends $mol_log2 {
        flush(): void;
    }
    class $mol_log2_line extends Array<any> {
        constructor(...items: any[]);
    }
    class $mol_log2_token extends Array<any> {
        constructor(...items: any[]);
    }
    let $mol_log2_token_empty: $mol_log2_token;
    let $mol_log2_token_indent: $mol_log2_token;
    let $mol_log2_legend: $mol_log2_table;
}

declare namespace $ {
}

declare namespace $ {
    function $mol_compare_any(a: any, b: any): boolean;
}

declare namespace $ {
    const $mol_conform_stack: any[];
    function $mol_conform<Target, Source>(target: Target, source: Source): Target;
    const $mol_conform_handlers: WeakMap<Object, (target: any, source: any) => any>;
    function $mol_conform_handler<Class>(cl: {
        new (...args: any[]): Class;
    }, handler: (target: Class, source: Class) => Class): void;
    function $mol_conform_array<Value, List extends {
        [index: number]: Value;
        length: number;
    }>(target: List, source: List): List;
}

declare namespace $ {
    function $mol_array_trim<Item>(array: Item[]): Item[];
}

declare namespace $ {
    const enum $mol_fiber_status {
        persist = -3,
        actual = -2,
        doubt = -1,
        obsolete = 0
    }
    function $mol_fiber_defer<Value = void>(calculate: () => Value): $mol_fiber<any>;
    function $mol_fiber_func<This, Args extends any[], Result>(calculate: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    function $mol_fiber_root<Calculate extends (this: This, ...args: any[]) => Result, Result = void, This = void>(calculate: Calculate): Calculate;
    function $mol_fiber_method<Host, Value>(obj: Host, name: keyof Host, descr: TypedPropertyDescriptor<(this: Host, ...args: any[]) => Value>): TypedPropertyDescriptor<(this: Host, ...args: any[]) => Value>;
    function $mol_fiber_async<Args extends any[], Value>(task: (...args: Args) => Value): (...args: Args) => Promise<Value>;
    function $mol_fiber_sync<Args extends any[], Value = void, This = void>(request: (this: This, ...args: Args) => PromiseLike<Value>): (...args: Args) => Value;
    function $mol_fiber_warp(): Promise<void>;
    function $mol_fiber_fence(func: () => any): any;
    function $mol_fiber_unlimit<Result>(task: () => Result): Result;
    class $mol_fiber_solid extends $mol_wrapper {
        static func<This, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    }
    class $mol_fiber<Value = any> extends $mol_wrapper {
        static wrap<Func extends (...args: any[]) => any>(task: Func): (this: ThisParameterType<Func>, ...args: Parameters<Func>) => any;
        static quant: number;
        static deadline: number;
        static liveline: number;
        static current: $mol_fiber<any>;
        static scheduled: $mol_after_tick;
        static queue: (() => PromiseLike<any>)[];
        static tick(): Promise<void>;
        static schedule(): Promise<any>;
        value: Value;
        error: Error | PromiseLike<Value>;
        cursor: $mol_fiber_status;
        masters: (number | $mol_fiber<any>)[];
        calculate: () => Value;
        schedule(): void;
        wake(): Value;
        push(value: Value): Value;
        fail(error: Error | PromiseLike<Value>): Error | PromiseLike<Value>;
        wait(promise: PromiseLike<Value>): PromiseLike<Value>;
        complete(): void;
        complete_master(master_index: number): void;
        pull(): void;
        update(): void;
        get(): Value;
        limit(): void;
        get master(): $mol_fiber;
        set master(next: $mol_fiber);
        rescue(master: $mol_fiber, master_index: number): void;
        obey(master: $mol_fiber, master_index: number): number;
        lead(slave: $mol_fiber, master_index: number): number;
        dislead(slave_index: number): void;
        disobey(master_index: number): void;
        obsolete_slaves(): void;
        obsolete(master_index: number): void;
        forget(): void;
        abort(): boolean;
        destructor(): void;
    }
    let $mol_fiber_token_runned: $mol_log2_token;
    let $mol_fiber_token_changed1: $mol_log2_token;
    let $mol_fiber_token_changed2: $mol_log2_token;
    let $mol_fiber_token_actualized: $mol_log2_token;
    let $mol_fiber_token_sleeped: $mol_log2_token;
    let $mol_fiber_token_failed: $mol_log2_token;
    let $mol_fiber_token_destructed: $mol_log2_token;
}

declare namespace $ {
    function $mol_atom2_value<Value>(task: () => Value): Value | undefined;
    class $mol_atom2<Value = any> extends $mol_fiber<Value> {
        static get current(): $mol_atom2<any>;
        static cached: boolean;
        static reap_task: $mol_fiber<any>;
        static reap_queue: $mol_atom2<any>[];
        static reap(atom: $mol_atom2): void;
        slaves: (number | $mol_fiber<any>)[];
        rescue(master: $mol_atom2, cursor: number): void;
        get(): Value;
        pull(): void;
        _value: Value;
        get value(): Value;
        set value(next: Value);
        _error: Error | PromiseLike<Value>;
        get error(): null | Error | PromiseLike<Value>;
        set error(next: null | Error | PromiseLike<Value>);
        put(next: Value): Value;
        complete_master(master_index: number): void;
        obey(master: $mol_fiber, master_index: number): number;
        lead(slave: $mol_fiber, master_index: number): number;
        dislead(slave_index: number): void;
        obsolete(master_index?: number): void;
        doubt(master_index?: number): void;
        obsolete_slaves(): void;
        doubt_slaves(): void;
        get fresh(): (this: void) => void;
        get alone(): boolean;
        get derived(): boolean;
        destructor(): void;
    }
    let $mol_atom2_token_revalidation: $mol_log2_token;
    let $mol_atom2_token_stumbled: $mol_log2_token;
    let $mol_atom2_token_revalidated: $mol_log2_token;
    let $mol_atom2_token_leaded: $mol_log2_token;
    let $mol_atom2_token_disleaded: $mol_log2_token;
    let $mol_atom2_token_obsoleted: $mol_log2_token;
    let $mol_atom2_token_doubted: $mol_log2_token;
}

declare namespace $ {
    class $mol_mem_force extends Object {
        constructor();
        $mol_mem_force: boolean;
        static $mol_mem_force: boolean;
        static toString(): string;
    }
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    class $mol_mem_force_update extends $mol_mem_force {
    }
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_atom2_value;
    function $mol_mem_persist(): void;
    function $mol_mem<Host extends object, Field extends keyof Host, Value>(proto: Host, name: Field, descr?: TypedPropertyDescriptor<(next?: Value, force?: $mol_mem_force) => Value>): any;
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(next?: {
            width: number;
            height: number;
        }, force?: $mol_mem_force): {
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
    function $mol_dict_key(value: any): any;
    class $mol_dict<Key, Value> extends Map<Key, Value> {
        get(key: Key): Value;
        has(key: Key): boolean;
        set(key: Key, value: Value): this;
        delete(key: Key): boolean;
        forEach(back: (value: Value, key: Key, dict: Map<Key, Value>) => void, context?: any): void;
        [Symbol.iterator](): {
            [Symbol.iterator](): any;
            next(): IteratorResult<[Key, Value], any>;
        };
    }
}

declare namespace $ {
    function $mol_mem_key<Host extends object, Field extends keyof Host, Key, Value>(proto: Host, name: Field, descr?: TypedPropertyDescriptor<(key: Key, next?: Value, force?: $mol_mem_force) => Value>): any;
}

declare namespace $ {
    function $mol_atom2_autorun(calculate: () => any): $mol_atom2<unknown>;
}

declare namespace $ {
    class $mol_defer extends $mol_object {
        run: () => void;
        constructor(run: () => void);
        destructor(): void;
        static all: $mol_defer[];
        static timer: any;
        static scheduleNative: (handler: () => void) => any;
        static schedule(): void;
        static unschedule(): void;
        static add(defer: $mol_defer): void;
        static drop(defer: $mol_defer): void;
        static run(): void;
    }
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[]): Element[];
        static focus(event: FocusEvent): void;
        static blur(event: FocusEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_fail_catch(error: object): boolean;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    function $mol_func_name(func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    function $mol_deprecated(message: string): <Method extends (this: Host, ...args: readonly any[]) => any, Host extends { [key in Field]: Method; }, Field extends keyof Host>(host: Host, field: Field, descr: TypedPropertyDescriptor<Method>) => void;
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Lower, Upper> = {
        [Field in keyof Input]: Lower extends Input[Field] ? never : Input[Field] extends Upper ? Field : never;
    }[keyof Input];
}

declare namespace $ {
    type $mol_type_pick<Input, Lower, Upper> = Pick<Input, $mol_type_keys_extract<Input, Lower, Upper>>;
}

declare namespace $ {
    const enum $mol_theme {
        back = "var(--mol_theme_back)",
        hover = "var(--mol_theme_hover)",
        current = "var(--mol_theme_current)",
        text = "var(--mol_theme_text)",
        control = "var(--mol_theme_control)",
        shade = "var(--mol_theme_shade)",
        line = "var(--mol_theme_line)",
        focus = "var(--mol_theme_focus)",
        field = "var(--mol_theme_field)"
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {
    class $mol_after_frame extends $mol_object2 {
        task: () => void;
        id: any;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        autorun(): $mol_atom2<unknown>;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        sub_visible(): readonly (string | number | boolean | Node | $mol_view)[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): ClientRect;
        view_rect_cache(next?: ClientRect): ClientRect;
        view_rect_watcher(): {
            destructor: () => boolean;
        };
        dom_id(): any;
        dom_node(next?: Element): Element;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        view_names_owned(): string[];
        view_names(): string[];
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [key: string]: (event: Event) => void;
        };
        plugins(): readonly $mol_view[];
    }
    type $mol_view_all = $mol_type_pick<$mol_ambient_context, any, typeof $mol_view>;
}

declare namespace $ {
}

interface Window {
    cordova: any;
}
declare namespace $ {
}

declare namespace $ {
    class $mol_import extends $mol_object2 {
        static script(uri: string, next?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $ {
    class $ts_numl extends $mol_view {
    }
}

declare namespace $.$$ {
    class $ts_numl extends $.$ts_numl {
        static api(): any;
        render(): void;
        dom_name(): string;
    }
}

declare namespace $ {
    class $ts_tutorial_layout extends $ts_numl {
        dom_name(): string;
        attr(): {
            responsive: string;
            "nu-id": string;
            id: string;
            width: string;
            height: string;
        };
        sub(): readonly any[];
        theme_main(): $$.$ts_numl;
        theme_blue(): $$.$ts_numl;
        theme_green(): $$.$ts_numl;
        theme_orange(): $$.$ts_numl;
        theme_purple(): $$.$ts_numl;
        theme_lime(): $$.$ts_numl;
        theme_red(): $$.$ts_numl;
        attrs_section(): $$.$ts_numl;
        attrs_block(): $$.$ts_numl;
        attrs_bold(): $$.$ts_numl;
        items(): $mol_view;
    }
}

declare namespace $ {
    class $ts_tutorial_header_logo extends $ts_numl {
        dom_name(): string;
        attr(): {
            radius: string;
            display: string;
            flow: string;
            gap: string;
            items: string;
        };
        sub(): readonly any[];
        svg_logo(): $$.$ts_numl;
        line_divider(): $$.$ts_numl;
        svg_github(): $$.$ts_numl;
    }
}

declare namespace $ {
    class $ts_select extends $ts_numl {
        dom_name(): string;
        attr(): {
            radius: string;
            border: string;
            shadow: string;
        };
        menuitem(lang: any): $$.$ts_numl;
        select(event?: any, force?: $mol_mem_force): any;
        items(): readonly $mol_view[];
        sub(): readonly any[];
        attrs_dropdown(): $$.$ts_numl;
        selected(val?: any, force?: $mol_mem_force): any;
        icon_dropdown(): $$.$ts_numl;
        popupmenu_dropdown(): $$.$ts_numl;
        items_wrapped(): readonly $mol_view[];
    }
}

declare namespace $.$$ {
    class $ts_select extends $.$ts_select {
        items_wrapped(): any[];
        select(value: any): any;
        menuitem(lang: any): $ts_numl;
    }
}

declare namespace $ {
    class $ts_tutorial_header extends $ts_numl {
        dom_name(): string;
        attr(): {
            theme: string;
            padding: string;
            radius: string;
            display: string;
            flow: string;
        };
        sub(): readonly any[];
        flex_left(): $$.$ts_numl;
        Logo(): $ts_tutorial_header_logo;
        Language(): $$.$ts_select;
        btngroup_navgitaion(): $$.$ts_numl;
        attrs_btn(): $$.$ts_numl;
        btn_guide(): $$.$ts_numl;
        btn_tutorials(): $$.$ts_numl;
        btn_examples(): $$.$ts_numl;
        btn_blog(): $$.$ts_numl;
        btn_about(): $$.$ts_numl;
    }
}

declare namespace $ {
    class $ts_tutorial extends $mol_view {
        sub(): readonly any[];
        block_layout(): $ts_tutorial_layout;
        grid(): $$.$ts_numl;
        Header(): $ts_tutorial_header;
        Body(): $ts_tutorial_body;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node(next?: Element): Element;
        attr_static(): {
            [key: string]: string | number | boolean;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        render(): void;
    }
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
    function $mol_dom_render_events_async(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
}

declare namespace $ {
    class $mol_ghost extends $mol_view {
        Sub(): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_ghost extends $.$mol_ghost {
        dom_node(): Element;
        dom_node_actual(): Element;
        dom_tree(): Element;
        title(): string;
    }
}

declare namespace $ {
    class $ts_grip extends $mol_ghost {
        pos_x(val?: any, force?: $mol_mem_force): any;
        pos_y(val?: any, force?: $mol_mem_force): any;
        start(event?: any, force?: $mol_mem_force): any;
        done(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $ts_grip extends $.$ts_grip {
        pos_y(val?: number): number;
        pos_x(val?: number): number;
        move(node: HTMLElement, callback?: (event: PointerEvent) => void): {
            destroy(): void;
        };
        dom_node_actual(): Element;
    }
}

declare namespace $ {
    class $ts_splitter_hor extends $ts_grip {
        type(): string;
        title(): string;
        Sub(): $mol_view;
        Divider(): $mol_view;
    }
}

declare namespace $.$$ {
    class $ts_splitter_hor extends $.$ts_splitter_hor {
        size(val?: any): any;
        set_style_for_sibling(sibling: string, val: string): void;
        pos_x(val?: number): void;
        clamp(num: number, min: number, max: number): number;
        node(): HTMLElement;
        sibling(sibling: string): HTMLElement;
        min_width_node(sibling: string): number;
        setPos(pos: number, type: string): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_grip extends $mol_ghost {
        pos_x(val?: any, force?: $mol_mem_force): any;
        pos_y(val?: any, force?: $mol_mem_force): any;
        start(event?: any, force?: $mol_mem_force): any;
        done(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_grip extends $.$mol_grip {
        pos_y(val?: number): number;
        pos_x(val?: number): number;
        move(node: HTMLElement, callback?: (event: PointerEvent) => void): {
            destroy(): void;
        };
        dom_node_actual(): Element;
    }
}

declare namespace $ {
    class $mol_splitter_ver extends $mol_grip {
        type(): string;
        Sub(): $mol_view;
        Divider(): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_splitter_ver extends $.$mol_splitter_ver {
        set_style_for_sibling(node: string, val: string): void;
        pos_y(val?: number): void;
        clamp(num: number, min: number, max: number): number;
        node(): HTMLElement;
        min_height_node(sibling: string): number;
        setPos(pos: number, type: string): void;
        sub(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_resizer_ver extends $mol_view {
        Divider(id: any): $$.$mol_splitter_ver;
        pages(): readonly $mol_view[];
        sub(): readonly $mol_view[];
        pages_wrapped(): readonly $mol_view[];
    }
}

declare namespace $.$$ {
    class $mol_resizer_ver extends $.$mol_resizer_ver {
        divider(id?: any): $mol_splitter_ver;
        pages_wrapped(): readonly [];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_splitter_hor extends $mol_grip {
        type(): string;
        title(): string;
        Sub(): $mol_view;
        Divider(): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_splitter_hor extends $.$mol_splitter_hor {
        size(val?: any): any;
        set_style_for_sibling(sibling: string, val: string): void;
        pos_x(val?: number): void;
        clamp(num: number, min: number, max: number): number;
        node(): HTMLElement;
        sibling(sibling: string): HTMLElement;
        min_width_node(sibling: string): number;
        setPos(pos: number, type: string): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $ts_resizer_hor extends $ts_numl {
        Divider(id: any, title?: any, force?: $mol_mem_force): any;
        pages(): readonly $mol_view[];
        sub(): readonly $mol_view[];
        pages_wrapped(): readonly $mol_view[];
    }
}

declare namespace $.$$ {
    class $ts_resizer_hor extends $.$ts_resizer_hor {
        divider(id?: any, title?: any): $ts_splitter_hor;
        Divider(id: any, title?: any): $ts_splitter_hor;
        pages_wrapped(): readonly [];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $ts_tutorial_body extends $ts_numl {
        sub(): readonly any[];
        splitter(): $$.$ts_resizer_hor;
        First(): $mol_view;
        first_title(): $ts_tutorial_divider;
        Second(): $mol_view;
        second_title(): $ts_tutorial_divider;
        Third(): $mol_view;
        third_title(): $ts_tutorial_divider;
        Fourth(): $mol_view;
    }
}
declare namespace $ {
    class $ts_tutorial_divider extends $ts_numl {
        dom_name(): string;
        title(): string;
        attr(): {
            content: string;
            padding: string;
            height: string;
            gap: string;
            flow: string;
        };
        sub(): readonly any[];
        icon(): $$.$ts_numl;
        el_one(): $$.$ts_numl;
    }
}

declare namespace $ {
}
