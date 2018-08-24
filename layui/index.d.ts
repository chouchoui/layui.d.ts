///<reference path="../jquery/index.d.ts" />

declare module layui {
    type LayerCallbackSuccess = null | ((layero: JQuery, index: number) => void);
    type LayerCallbackYes = null | ((index: number, layero: JQuery) => boolean | void);
    type LayerCallbackCancel = null | ((index: number, layero: JQuery) => boolean | void);
    type LayerCallbackEnd = null | (() => void);
    type LayerCallbackFull = null | ((layero: JQuery) => void);
    type LayerCallbackMin = null | ((layero: JQuery) => void);
    type LayerCallbackRestore = null | ((layero: JQuery) => void);
    type LayerCallbackPrompt = null | ((value: string, index: number, elem: JQuery) => void);

    /**
     * Layer options
     */
    interface LayerOptions {
        type?: number;
        title?: string | boolean | string[];
        content?: string | HTMLElement | JQuery | string[];
        skin?: string;
        area?: string | string[];
        offset?: number | string | string[];
        icon?: number;
        btn?: string | string[];
        closeBtn?: string | boolean;
        shade?: string | boolean | (number | string)[];
        shadeClose?: boolean;
        time?: number;
        id?: string;
        anim?: number;
        isOutAnim?: boolean;
        maxmin?: boolean;
        fixed?: boolean;
        resize?: boolean;
        resizing?: Function;
        scrollbar?: boolean;
        maxWidth?: number;
        zIndex?: number;
        move?: string | boolean | HTMLElement;
        moveType?: boolean;
        moveOut?: boolean;
        moveEnd?: null | (() => void);
        tips?: number | (number | string)[];
        tipsMore?: boolean;
        success?: LayerCallbackSuccess;
        yes?: LayerCallbackYes;
        btn2?: LayerCallbackYes;
        btn3?: LayerCallbackYes;
        cancel?: LayerCallbackCancel;
        end?: LayerCallbackEnd;
        full?: LayerCallbackFull;
        min?: LayerCallbackMin;
        restore?: LayerCallbackRestore;
    }

    interface LayerConfigOptions extends LayerOptions {
        path?: string;
        extend?: string[];
    }

    interface LayerPromptOptions extends LayerOptions {
        formType?: number;
        value?: string;
        maxlength?: number;
        area?: string[];
    }

    interface LayerTabOptions extends LayerOptions {
        tab: ({ title: string, content: string })[];
    }

    interface LayerPhotosOptions extends LayerOptions {
        photos: LayerPhotosData | string;
        tab?: (pic: LayerPhotosDataItem, layero: JQuery) => void;
    }

    interface LayerPhotosData {
        title: string;
        id: number;
        start?: number;
        data: LayerPhotosDataItem[];
    }

    interface LayerPhotosDataItem {
        alt: string;
        pid?: number;
        src: string;
        thumb: string;
    }

    /**
     * Layer object
     */
    interface Layer {
        /**
         * 初始化全局配置
         * @param {LayerConfigOptions} options;
         */
        config(options: LayerConfigOptions): void;
        /**
         * 初始化就绪
         * @param {string} path
         * @param {Function} callback
         */
        ready(path: string, callback: () => void): void;
        /**
         * 初始化就绪
         * @param {Function} callback
         */
        ready(callback: () => void): void;
        /**
         * 原始核心方法
         * @param {LayerOptions} options
         */
        open(options?: LayerOptions): number;
        /**
         * 普通信息框
         * @param {string} content
         * @param {LayerOptions} options
         * @param {Function} yes
         */
        alert(content: string, options?: LayerOptions, yes?: LayerCallbackYes): number;
        /**
         * 普通信息框
         * @param {string} content
         * @param {Function} yes
         */
        alert(content: string, yes?: LayerCallbackYes): number;

        confirm(content: string, options?: LayerOptions, yes?: LayerCallbackYes, cancel?: LayerCallbackCancel): number;

        confirm(content: string, yes?: LayerCallbackYes, cancel?: LayerCallbackCancel): number;

        msg(content: string, options?: LayerOptions, end?: LayerCallbackEnd): number;

        msg(content: string, end?: LayerCallbackEnd): number;

        load(icon?: number, options?: LayerOptions): number;

        tips(content: string, follow: string | this, options?: LayerOptions): number;

        close(index: number): void;

        closeAll(type?: 'dialog' | 'page' | 'iframe' | 'loading' | 'tips'): void;

        style(index: number, cssStyle: { [key: string]: string | number }): void;

        title(title: string, index: number): void;

        getChildFrame(selector: string, index: number): JQuery;

        getFrameIndex(windowName: string): number;

        iframeAuto(index: number): void;

        iframeSrc(index: number, url: string): void;

        setTop(layero: JQuery): void;

        full(): void;

        min(): void;

        restore(): void;

        prompt(options?: LayerPromptOptions, yes?: LayerCallbackPrompt): number;

        prompt(yes?: LayerCallbackPrompt): number;

        tab(options: LayerTabOptions): number;

        photos(options: LayerPhotosOptions): number;
    }

    interface TabOption {
        title: string;
        content: string;
        id: string;
    }

    interface TabElement {
        headerElem: string;
        bodyElem: string;
    }

    interface Element {
        init(type?: string, filter?: string): void;
        on(filter: string, callback: (data: any) => any): void;
        tabAdd(filter: string, options: TabOption): void;
        tabDelete(filter: string, layid: string): void;
        tabChange(filter: string, layid: string): void;
        tab(option: TabElement): void;
        progress(filter: string, percent: string);
        render(type?: string, filter?: string): void;
    }

    interface LayFormData {
        elem?: HTMLElement;
        othis?: any;
        value?: string;
        form?: any;
        field?: any;
    }

    interface Form {
        on(event: string, callback: (data: LayFormData) => any): void;
        render(type?: string, filter?: string);
        val(filter: string, obj: object);
        verify(config: object);
    }

    interface PageOptions {
        elem: string | Object;
        count?: number;
        limit?: number;
        limits?: number[];
        curr?: number;
        groups?: number;
        prev?: string;
        next?: string;
        first?: string;
        last?: string;
        layout?: ['count' | 'prev' | 'page' | 'next' | 'limit' | 'skip'];
        theme?: string;
        hash?: string | boolean;
        jump?: (obj: PageOptions, first: boolean) => void;
    }

    interface Laypage {
        render(options: PageOptions): any;
    }

    interface DateParam {
        year?: number;
        month?: number;
        date?: number;
        hours?: number;
        minutes?: number;
        seconds?: number;
    }

    interface DateOption {
        elem?: string | HTMLElement;
        type?: 'year' | 'month' | 'date' | 'time' | 'datetime';
        range?: string | boolean;
        format?: string;
        value?: string | Date;
        isInitValue?: boolean;
        min?: string;
        max?: string;
        trigger?: string;
        show?: boolean;
        position?: "abolute" | "fixed" | "static";
        zIndex?: number;
        showBottom?: boolean;
        btns?: 'clear' | 'now' | 'confirm';
        lang?: 'cn' | 'en';
        theme?: string | 'default' | 'molv' | 'grid';
        calendar?: boolean;
        mark?: Object;
        ready?: (date: DateParam) => void;
        change?: (value: string, date: DateParam, endDate?: DateParam) => void;
        done?: (value: string, date: DateParam, endDate?: DateParam) => void;
    }

    interface Laydate {
        render(options: DateOption): Object;
        set(options: DateOption): void;
        getEndDate(month: number, year?: number): number;
    }

    interface Layui {
        layer?: Layer;
        element?: Element;
        form?: Form;
        laydate?: Laydate;
        laypage?: Laypage;
        carousel?: Carousel;
        use(mods: string | string[], callback: (...args: any[]) => any): any;
    }

    interface CarouselOption {
        elem?: string | HTMLElement;
        width?: string;
        height?: string;
        full?: boolean;
        anim?: "default" | "updown" | "fade";
        autoplay?: boolean;
        interval?: number;
        index?: number;
        arrow?: "hover" | "always" | "none";
        indicator?: "insider" | "outsider" | "none";
        trigger?: string;
    }

    interface CarouselItem {
        index?: number;
        prevIndex?: number;
        item?: any;
    }

    interface Carousel {
        render(options: CarouselOption): object;
        on(event: string, callback: (obj: CarouselItem) => any): void;
        reload(options: CarouselOption): void;
    }

    interface TableColumnOption {
        field?: string;
        title?: string;
        width?: string | number;
        minWidth?: number;
        type?: "normal" | "checkbox" | "space" | "numbers";
        LAY_CHECKED?: boolean;
        fixed?: string;
        sort?: boolean;
        unresize?: boolean;
        edit?: string;
        event?: string;
        style?: string;
        align?: "left" | "center" | "right";
        colspan?: number;
        rowspan?: number;
        templet?: string;
        toolbar?: string;
    }

    interface TableRequestParam {
        pageName: string;
        limitName: string;
    }

    interface TableResponseParam {
        statusName: string;
        statusCode: number;
        msgName: string;
        countName: string;
        dataName: string;
    }

    interface TableSortParam {
        field: string;
        type: "null" | "desc" | "asc";
    }

    interface TableOption {
        elem?: string | HTMLElement;
        cols?: TableColumnOption[][];
        url?: string;
        method?: string;
        where?: object;
        contentType?: string;
        headers?: object;
        request?: TableRequestParam;
        response?: TableResponseParam;
        done?: (res: object, curr: number, count: number) => void;
        text?: object;
        initSort?: TableSortParam;
        height?: number | string;
        skin?: "line" | "row" | "nob";
        even?: boolean;
        size?: "sm" | "lg";
    }

    interface Table {
        render(option: TableOption): Table;
        init(filter: string, option: TableOption): object;
        reload(option: TableOption);
        reload(id: string, option: TableOption);
        on(event: string, callback: (obj: TableOption) => any): void;
        set(option: TableOption);
        checkStatus(id: string);
    }

    interface UploadOption {
        elem?: string | HTMLElement;
        url?: string;
        data?: object;
        header?: object;
        accept?: "images" | "file" | "video" | "audio";
        acceptMime?: string;
        exts?: string;
        auto?: boolean;
        bindAction?: string | HTMLElement;
        field?: string;
        size?: number;
        multiple?: boolean;
        number?: number;
        drag?: boolean;
        choose?: (obj: object) => void;
        before?: (obj: object) => void;
        done?: (res: object, index: number, upload: void) => void;
        error?: (index: number, upload: void) => void;
        allDone?: (obj: object) => void;
    }

    interface Upload {
        render(option: UploadOption): Upload;
    }

    interface Rate {

    }

    export let layer: Layer;
    export let element: Element;
    export let form: Form;
    export let laydate: Laydate;
    export let laypage: Laypage;
    export let carousel: Carousel;
    export let table: Table;
    export let upload: Upload;
    export let rate: Rate;

    export function use(mods: string | string[], callback: (...args: any[]) => any): any;
}
