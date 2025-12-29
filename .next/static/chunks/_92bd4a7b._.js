(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layouts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "layouts",
    ()=>layouts,
    "themes",
    ()=>themes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
;
const themes = {
    // --- KIDSAI KURUMSAL TEMA ---
    kidsaiMain: {
        bg: "bg-[#E0F7FA]",
        gradient: "from-[#E0F7FA] via-[#B2EBF2] to-[#81D4FA]",
        accent: "text-white",
        // Hap: Daha "sakız" kıvamında, parlak
        pill: "bg-[#FF4081] text-white border-[3px] border-white shadow-[0_6px_0px_rgba(0,0,0,0.1)]",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
        decor: "text-[#FFCA28]",
        borderColor: "border-[#F50057]",
        patternOpacity: "opacity-[0.15]"
    },
    // Alternatif (Daha sakin günler için)
    kidsaiSoft: {
        bg: "bg-[#FFF3E0]",
        gradient: "from-[#FFF3E0] via-[#FFE0B2] to-[#FFCC80]",
        accent: "text-white",
        pill: "bg-[#7E57C2] text-white border-[3px] border-white shadow-[0_6px_0px_rgba(0,0,0,0.1)]",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
        decor: "text-[#29B6F6]",
        borderColor: "border-[#7E57C2]",
        patternOpacity: "opacity-[0.10]"
    }
};
const layouts = {
    launchAnnouncement: {
        name: "🚀 KidsAI Lansman (Gün 1)",
        slides: [
            {
                id: 1,
                seriesTag: "#1",
                subtitle: "BEKLEYİŞ SONA ERDİ!",
                title: "KIDSAI ŞİMDİ YAYINDA",
                ctaText: "ÜCRETSİZ İNDİR",
                storeTitle: "Maceraya Başla",
                color: "kidsaiMain",
                phoneStyle: "tilted-left",
                imageZoom: 1
            }
        ]
    },
    featureSpotlight: {
        name: "✨ Özellik Tanıtımı (Gün 2)",
        slides: [
            {
                id: 1,
                seriesTag: "#2",
                subtitle: "AKILLI KAMERA",
                title: "NESNELERİ TANIYALIM",
                ctaText: "KEŞFETMEYE BAŞLA",
                color: "kidsaiSoft",
                phoneStyle: "tilted-right",
                imageZoom: 1
            }
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/post-template.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/components/post-template.tsx'\n\nExpected '</', got 'jsx text (\r\n\r\n             )'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layouts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2d$template$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/post-template.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Home() {
    _s();
    const [activeLayoutKey, setActiveLayoutKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('launchAnnouncement');
    const activeLayout = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layouts"][activeLayoutKey] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layouts"]['launchAnnouncement'];
    const [slides, setSlides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(activeLayout.slides);
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const slideRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layouts"][activeLayoutKey]) {
                setSlides(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layouts"][activeLayoutKey].slides);
            }
        }
    }["Home.useEffect"], [
        activeLayoutKey
    ]);
    if (slideRefs.current.length !== slides.length) {
        slideRefs.current = Array(slides.length).fill(null).map((_, i)=>slideRefs.current[i] || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])());
    }
    const handleImageUpload = (e, slideId)=>{
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setImages((prev)=>({
                        ...prev,
                        [slideId]: reader.result
                    }));
            };
            reader.readAsDataURL(file);
        }
    };
    const updateSlideProperty = (id, field, value)=>{
        setSlides(slides.map((slide)=>slide.id === id ? {
                ...slide,
                [field]: value
            } : slide));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-slate-100 font-sans text-slate-900 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10 h-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-xl flex items-center justify-center text-2xl",
                                children: "🦊"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-luckiest text-slate-800 tracking-wider",
                                        children: "KidsAI Post Studio"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500 font-fredoka",
                                        children: "Instagram İçerik Üreticisi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: activeLayoutKey,
                        onChange: (e)=>setActiveLayoutKey(e.target.value),
                        className: "p-3 pl-4 pr-10 border-2 border-slate-200 rounded-xl bg-slate-50 font-fredoka font-bold focus:border-blue-400 outline-none appearance-none cursor-pointer",
                        style: {
                            backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27292.4%27%20height%3D%27292.4%27%3E%3Cpath%20fill%3D%27%23CBD5E0%27%20d%3D%27M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%27%2F%3E%3C%2Fsvg%3E")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '0.8em'
                        },
                        children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layouts"]).map((param)=>{
                            let [key, config] = param;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: key,
                                children: config.name
                            }, key, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-[calc(100vh-80px)] mt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[400px] bg-white border-r border-slate-200 overflow-y-auto p-6 custom-scrollbar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-8 pb-8",
                            children: slides.map((slide, index)=>{
                                var _slide_imagePosition, _slide_imagePosition1;
                                var _slide_phoneRotation, _slide_phoneRotation1, _slide_imagePosition_x, _slide_imagePosition_y;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 p-6 rounded-2xl border-2 border-slate-200/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-luckiest text-xl mb-6 flex items-center gap-3 text-slate-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-yellow-400 text-yellow-900 w-8 h-8 rounded-full flex items-center justify-center text-base border-2 border-white shadow-sm",
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 19
                                                }, this),
                                                "Slayt Ayarları"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-5 font-fredoka",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 border-b-2 border-slate-200 pb-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-bold text-slate-600",
                                                            children: "Telefon Duruşu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: slide.phoneStyle || 'default',
                                                                onChange: (e)=>updateSlideProperty(slide.id, 'phoneStyle', e.target.value),
                                                                className: "col-span-2 p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 outline-none bg-white font-bold text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "default",
                                                                        children: "Varsayılan (Düz)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 100,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "floating",
                                                                        children: "Havada (Floating)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 101,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "tilted-left",
                                                                        children: "Sola Yatık"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 102,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "tilted-right",
                                                                        children: "Sağa Yatık"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 103,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "flat",
                                                                        children: "Düz & Küçük (Flat)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 104,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-slate-500 mb-1",
                                                                    children: [
                                                                        "Telefon Açısı (",
                                                                        (_slide_phoneRotation = slide.phoneRotation) !== null && _slide_phoneRotation !== void 0 ? _slide_phoneRotation : 0,
                                                                        "°)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 109,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "range",
                                                                    min: "-45",
                                                                    max: "45",
                                                                    step: "1",
                                                                    value: (_slide_phoneRotation1 = slide.phoneRotation) !== null && _slide_phoneRotation1 !== void 0 ? _slide_phoneRotation1 : 0,
                                                                    onChange: (e)=>updateSlideProperty(slide.id, 'phoneRotation', parseInt(e.target.value)),
                                                                    className: "w-full accent-blue-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-bold text-slate-600 mb-3",
                                                            children: "Ekran Görüntüsü"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "cursor-pointer flex flex-col items-center justify-center gap-2 p-6 border-3 border-dashed border-slate-300 rounded-2xl hover:border-blue-400 hover:bg-blue-50/50 transition-all group bg-white",
                                                            children: [
                                                                images[slide.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: images[slide.id],
                                                                    className: "h-32 object-contain rounded-lg shadow-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 124,
                                                                    columnNumber: 25
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                            size: 28,
                                                                            className: "text-slate-400 group-hover:text-blue-500 transition-colors"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 127,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-bold text-slate-500 group-hover:text-blue-600",
                                                                            children: "Görsel Seçin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 128,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "file",
                                                                    className: "hidden",
                                                                    accept: "image/*",
                                                                    onChange: (e)=>handleImageUpload(e, slide.id)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 131,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this),
                                                images[slide.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-5 font-fredoka border-t-2 border-slate-200 pt-5 mt-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-bold text-slate-600 mb-2",
                                                            children: "Görsel Ayarları"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-slate-500 mb-1",
                                                                    children: [
                                                                        "Yakınlaştırma (",
                                                                        slide.imageZoom || 1,
                                                                        "x)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 142,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "range",
                                                                    min: "0.5",
                                                                    max: "3",
                                                                    step: "0.05",
                                                                    value: slide.imageZoom || 1,
                                                                    onChange: (e)=>updateSlideProperty(slide.id, 'imageZoom', parseFloat(e.target.value)),
                                                                    className: "w-full accent-blue-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-slate-500 mb-1",
                                                                    children: [
                                                                        "Döndürme (",
                                                                        slide.imageRotation || 0,
                                                                        "°)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "range",
                                                                    min: "-45",
                                                                    max: "45",
                                                                    step: "1",
                                                                    value: slide.imageRotation || 0,
                                                                    onChange: (e)=>updateSlideProperty(slide.id, 'imageRotation', parseInt(e.target.value)),
                                                                    className: "w-full accent-blue-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-slate-500 mb-2",
                                                                    children: "Sığdırma"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: slide.imageFit || 'cover',
                                                                    onChange: (e)=>updateSlideProperty(slide.id, 'imageFit', e.target.value),
                                                                    className: "w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 outline-none bg-white font-bold",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "cover",
                                                                            children: "Kapla (Cover)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 170,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "contain",
                                                                            children: "Sığdır (Contain)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 171,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "fill",
                                                                            children: "Doldur (Fill)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 172,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-slate-500 mb-1",
                                                                    children: "Görsel Pozisyonu (X / Y)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "range",
                                                                            min: "0",
                                                                            max: "100",
                                                                            value: (_slide_imagePosition_x = (_slide_imagePosition = slide.imagePosition) === null || _slide_imagePosition === void 0 ? void 0 : _slide_imagePosition.x) !== null && _slide_imagePosition_x !== void 0 ? _slide_imagePosition_x : 50,
                                                                            onChange: (e)=>updateSlideProperty(slide.id, 'imagePosition', {
                                                                                    ...slide.imagePosition,
                                                                                    x: parseInt(e.target.value)
                                                                                }),
                                                                            className: "w-full accent-blue-500",
                                                                            title: "Yatay Pozisyon"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 180,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "range",
                                                                            min: "0",
                                                                            max: "100",
                                                                            value: (_slide_imagePosition_y = (_slide_imagePosition1 = slide.imagePosition) === null || _slide_imagePosition1 === void 0 ? void 0 : _slide_imagePosition1.y) !== null && _slide_imagePosition_y !== void 0 ? _slide_imagePosition_y : 50,
                                                                            onChange: (e)=>updateSlideProperty(slide.id, 'imagePosition', {
                                                                                    ...slide.imagePosition,
                                                                                    y: parseInt(e.target.value)
                                                                                }),
                                                                            className: "w-full accent-blue-500",
                                                                            title: "Dikey Pozisyon"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 181,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 179,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, this),
                                                [
                                                    {
                                                        label: 'Seri Etiketi (Örn: #1)',
                                                        field: 'seriesTag'
                                                    },
                                                    {
                                                        label: 'Üst Başlık (Hap)',
                                                        field: 'subtitle'
                                                    },
                                                    {
                                                        label: 'Ana Başlık (Büyük)',
                                                        field: 'title',
                                                        textarea: true
                                                    },
                                                    {
                                                        label: 'CTA Metni (Baloncuk)',
                                                        field: 'ctaText'
                                                    },
                                                    {
                                                        label: 'Alt Kutu Başlığı',
                                                        field: 'storeTitle'
                                                    },
                                                    {
                                                        label: 'Alt Kutu Açıklaması',
                                                        field: 'storeSubtitle'
                                                    }
                                                ].map((item)=>slide[item.field] !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-bold text-slate-600 mb-2",
                                                                children: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 25
                                                            }, this),
                                                            item.textarea ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                value: slide[item.field],
                                                                onChange: (e)=>updateSlideProperty(slide.id, item.field, e.target.value),
                                                                className: "w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 outline-none h-24 resize-none bg-white font-bold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: slide[item.field],
                                                                onChange: (e)=>updateSlideProperty(slide.id, item.field, e.target.value),
                                                                className: "w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 outline-none bg-white font-bold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, item.field, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, slide.id, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-slate-100 flex items-center justify-center p-8 overflow-hidden relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-[0.03] pointer-events-none",
                                style: {
                                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                                    backgroundSize: '20px 20px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 225,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-8 items-center h-full",
                                children: slides.map((slide, index)=>// DÜZELTME: Scale değeri ve container boyutu ayarlandı. Taşma önlendi.
                                    // 1080px genişliği ekrana sığdırmak için yaklaşık 0.4 - 0.5 arası bir scale gerekiyor.
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "transform scale-[0.45] 2xl:scale-[0.55] transition-transform origin-center shadow-2xl rounded-[40px] border-[8px] border-white/50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2d$template$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostTemplate"], {
                                            reference: slideRefs.current[index],
                                            ...slide,
                                            image: images[slide.id] || null
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 19
                                        }, this)
                                    }, slide.id, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 16
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 227,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(Home, "5CRVTLoBT0WoiPKLnp/79WkX89k=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Star
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
];
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Star", __iconNode);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Star",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Cloud
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
            key: "p7xjir"
        }
    ]
];
const Cloud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Cloud", __iconNode);
;
 //# sourceMappingURL=cloud.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cloud",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Image
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2",
            key: "1m3agn"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "9",
            r: "2",
            key: "af1f0g"
        }
    ],
    [
        "path",
        {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
            key: "1xmnt7"
        }
    ]
];
const Image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Image", __iconNode);
;
 //# sourceMappingURL=image.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Image",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Download
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "polyline",
        {
            points: "7 10 12 15 17 10",
            key: "2ggqvy"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "15",
            y2: "3",
            key: "1vk2je"
        }
    ]
];
const Download = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Download", __iconNode);
;
 //# sourceMappingURL=download.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Download",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Sparkles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx"
        }
    ],
    [
        "path",
        {
            d: "M20 3v4",
            key: "1olli1"
        }
    ],
    [
        "path",
        {
            d: "M22 5h-4",
            key: "1gvqau"
        }
    ],
    [
        "path",
        {
            d: "M4 17v2",
            key: "vumght"
        }
    ],
    [
        "path",
        {
            d: "M5 18H3",
            key: "zchphs"
        }
    ]
];
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Sparkles", __iconNode);
;
 //# sourceMappingURL=sparkles.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ],
    [
        "path",
        {
            d: "m19 12-7 7-7-7",
            key: "1idqje"
        }
    ]
];
const ArrowDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowDown", __iconNode);
;
 //# sourceMappingURL=arrow-down.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Zap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }
    ]
];
const Zap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Zap", __iconNode);
;
 //# sourceMappingURL=zap.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Zap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Heart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
            key: "c3ymky"
        }
    ]
];
const Heart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Heart", __iconNode);
;
 //# sourceMappingURL=heart.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Heart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript)");
}),
"[project]/node_modules/html-to-image/es/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canvasToBlob",
    ()=>canvasToBlob,
    "checkCanvasDimensions",
    ()=>checkCanvasDimensions,
    "createImage",
    ()=>createImage,
    "delay",
    ()=>delay,
    "getImageSize",
    ()=>getImageSize,
    "getPixelRatio",
    ()=>getPixelRatio,
    "getStyleProperties",
    ()=>getStyleProperties,
    "isInstanceOfElement",
    ()=>isInstanceOfElement,
    "nodeToDataURL",
    ()=>nodeToDataURL,
    "resolveUrl",
    ()=>resolveUrl,
    "svgToDataURL",
    ()=>svgToDataURL,
    "toArray",
    ()=>toArray,
    "uuid",
    ()=>uuid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function resolveUrl(url, baseUrl) {
    // url is absolute already
    if (url.match(/^[a-z]+:\/\//i)) {
        return url;
    }
    // url is absolute already, without protocol
    if (url.match(/^\/\//)) {
        return window.location.protocol + url;
    }
    // dataURI, mailto:, tel:, etc.
    if (url.match(/^[a-z]+:/i)) {
        return url;
    }
    const doc = document.implementation.createHTMLDocument();
    const base = doc.createElement('base');
    const a = doc.createElement('a');
    doc.head.appendChild(base);
    doc.body.appendChild(a);
    if (baseUrl) {
        base.href = baseUrl;
    }
    a.href = url;
    return a.href;
}
const uuid = (()=>{
    // generate uuid for className of pseudo elements.
    // We should not use GUIDs, otherwise pseudo elements sometimes cannot be captured.
    let counter = 0;
    // ref: http://stackoverflow.com/a/6248722/2519373
    const random = ()=>// eslint-disable-next-line no-bitwise
        "0000".concat((Math.random() * 36 ** 4 << 0).toString(36)).slice(-4);
    return ()=>{
        counter += 1;
        return "u".concat(random()).concat(counter);
    };
})();
function delay(ms) {
    return (args)=>new Promise((resolve)=>{
            setTimeout(()=>resolve(args), ms);
        });
}
function toArray(arrayLike) {
    const arr = [];
    for(let i = 0, l = arrayLike.length; i < l; i++){
        arr.push(arrayLike[i]);
    }
    return arr;
}
let styleProps = null;
function getStyleProperties() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (styleProps) {
        return styleProps;
    }
    if (options.includeStyleProperties) {
        styleProps = options.includeStyleProperties;
        return styleProps;
    }
    styleProps = toArray(window.getComputedStyle(document.documentElement));
    return styleProps;
}
function px(node, styleProperty) {
    const win = node.ownerDocument.defaultView || window;
    const val = win.getComputedStyle(node).getPropertyValue(styleProperty);
    return val ? parseFloat(val.replace('px', '')) : 0;
}
function getNodeWidth(node) {
    const leftBorder = px(node, 'border-left-width');
    const rightBorder = px(node, 'border-right-width');
    return node.clientWidth + leftBorder + rightBorder;
}
function getNodeHeight(node) {
    const topBorder = px(node, 'border-top-width');
    const bottomBorder = px(node, 'border-bottom-width');
    return node.clientHeight + topBorder + bottomBorder;
}
function getImageSize(targetNode) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const width = options.width || getNodeWidth(targetNode);
    const height = options.height || getNodeHeight(targetNode);
    return {
        width,
        height
    };
}
function getPixelRatio() {
    let ratio;
    let FINAL_PROCESS;
    try {
        FINAL_PROCESS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    } catch (e) {
    // pass
    }
    const val = FINAL_PROCESS && FINAL_PROCESS.env ? FINAL_PROCESS.env.devicePixelRatio : null;
    if (val) {
        ratio = parseInt(val, 10);
        if (Number.isNaN(ratio)) {
            ratio = 1;
        }
    }
    return ratio || window.devicePixelRatio || 1;
}
// @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#maximum_canvas_size
const canvasDimensionLimit = 16384;
function checkCanvasDimensions(canvas) {
    if (canvas.width > canvasDimensionLimit || canvas.height > canvasDimensionLimit) {
        if (canvas.width > canvasDimensionLimit && canvas.height > canvasDimensionLimit) {
            if (canvas.width > canvas.height) {
                canvas.height *= canvasDimensionLimit / canvas.width;
                canvas.width = canvasDimensionLimit;
            } else {
                canvas.width *= canvasDimensionLimit / canvas.height;
                canvas.height = canvasDimensionLimit;
            }
        } else if (canvas.width > canvasDimensionLimit) {
            canvas.height *= canvasDimensionLimit / canvas.width;
            canvas.width = canvasDimensionLimit;
        } else {
            canvas.width *= canvasDimensionLimit / canvas.height;
            canvas.height = canvasDimensionLimit;
        }
    }
}
function canvasToBlob(canvas) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (canvas.toBlob) {
        return new Promise((resolve)=>{
            canvas.toBlob(resolve, options.type ? options.type : 'image/png', options.quality ? options.quality : 1);
        });
    }
    return new Promise((resolve)=>{
        const binaryString = window.atob(canvas.toDataURL(options.type ? options.type : undefined, options.quality ? options.quality : undefined).split(',')[1]);
        const len = binaryString.length;
        const binaryArray = new Uint8Array(len);
        for(let i = 0; i < len; i += 1){
            binaryArray[i] = binaryString.charCodeAt(i);
        }
        resolve(new Blob([
            binaryArray
        ], {
            type: options.type ? options.type : 'image/png'
        }));
    });
}
function createImage(url) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>{
            img.decode().then(()=>{
                requestAnimationFrame(()=>resolve(img));
            });
        };
        img.onerror = reject;
        img.crossOrigin = 'anonymous';
        img.decoding = 'async';
        img.src = url;
    });
}
async function svgToDataURL(svg) {
    return Promise.resolve().then(()=>new XMLSerializer().serializeToString(svg)).then(encodeURIComponent).then((html)=>"data:image/svg+xml;charset=utf-8,".concat(html));
}
async function nodeToDataURL(node, width, height) {
    const xmlns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(xmlns, 'svg');
    const foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttribute('width', "".concat(width));
    svg.setAttribute('height', "".concat(height));
    svg.setAttribute('viewBox', "0 0 ".concat(width, " ").concat(height));
    foreignObject.setAttribute('width', '100%');
    foreignObject.setAttribute('height', '100%');
    foreignObject.setAttribute('x', '0');
    foreignObject.setAttribute('y', '0');
    foreignObject.setAttribute('externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);
    foreignObject.appendChild(node);
    return svgToDataURL(svg);
}
const isInstanceOfElement = (node, instance)=>{
    if (node instanceof instance) return true;
    const nodePrototype = Object.getPrototypeOf(node);
    if (nodePrototype === null) return false;
    return nodePrototype.constructor.name === instance.name || isInstanceOfElement(nodePrototype, instance);
}; //# sourceMappingURL=util.js.map
}),
"[project]/node_modules/html-to-image/es/clone-pseudos.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clonePseudoElements",
    ()=>clonePseudoElements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/util.js [app-client] (ecmascript)");
;
function formatCSSText(style) {
    const content = style.getPropertyValue('content');
    return "".concat(style.cssText, " content: '").concat(content.replace(/'|"/g, ''), "';");
}
function formatCSSProperties(style, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleProperties"])(options).map((name)=>{
        const value = style.getPropertyValue(name);
        const priority = style.getPropertyPriority(name);
        return "".concat(name, ": ").concat(value).concat(priority ? ' !important' : '', ";");
    }).join(' ');
}
function getPseudoElementStyle(className, pseudo, style, options) {
    const selector = ".".concat(className, ":").concat(pseudo);
    const cssText = style.cssText ? formatCSSText(style) : formatCSSProperties(style, options);
    return document.createTextNode("".concat(selector, "{").concat(cssText, "}"));
}
function clonePseudoElement(nativeNode, clonedNode, pseudo, options) {
    const style = window.getComputedStyle(nativeNode, pseudo);
    const content = style.getPropertyValue('content');
    if (content === '' || content === 'none') {
        return;
    }
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid"])();
    try {
        clonedNode.className = "".concat(clonedNode.className, " ").concat(className);
    } catch (err) {
        return;
    }
    const styleElement = document.createElement('style');
    styleElement.appendChild(getPseudoElementStyle(className, pseudo, style, options));
    clonedNode.appendChild(styleElement);
}
function clonePseudoElements(nativeNode, clonedNode, options) {
    clonePseudoElement(nativeNode, clonedNode, ':before', options);
    clonePseudoElement(nativeNode, clonedNode, ':after', options);
} //# sourceMappingURL=clone-pseudos.js.map
}),
"[project]/node_modules/html-to-image/es/mimes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMimeType",
    ()=>getMimeType
]);
const WOFF = 'application/font-woff';
const JPEG = 'image/jpeg';
const mimes = {
    woff: WOFF,
    woff2: WOFF,
    ttf: 'application/font-truetype',
    eot: 'application/vnd.ms-fontobject',
    png: 'image/png',
    jpg: JPEG,
    jpeg: JPEG,
    gif: 'image/gif',
    tiff: 'image/tiff',
    svg: 'image/svg+xml',
    webp: 'image/webp'
};
function getExtension(url) {
    const match = /\.([^./]*?)$/g.exec(url);
    return match ? match[1] : '';
}
function getMimeType(url) {
    const extension = getExtension(url).toLowerCase();
    return mimes[extension] || '';
} //# sourceMappingURL=mimes.js.map
}),
"[project]/node_modules/html-to-image/es/dataurl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAsDataURL",
    ()=>fetchAsDataURL,
    "isDataUrl",
    ()=>isDataUrl,
    "makeDataUrl",
    ()=>makeDataUrl,
    "resourceToDataURL",
    ()=>resourceToDataURL
]);
function getContentFromDataUrl(dataURL) {
    return dataURL.split(/,/)[1];
}
function isDataUrl(url) {
    return url.search(/^(data:)/) !== -1;
}
function makeDataUrl(content, mimeType) {
    return "data:".concat(mimeType, ";base64,").concat(content);
}
async function fetchAsDataURL(url, init, process) {
    const res = await fetch(url, init);
    if (res.status === 404) {
        throw new Error('Resource "'.concat(res.url, '" not found'));
    }
    const blob = await res.blob();
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = ()=>{
            try {
                resolve(process({
                    res,
                    result: reader.result
                }));
            } catch (error) {
                reject(error);
            }
        };
        reader.readAsDataURL(blob);
    });
}
const cache = {};
function getCacheKey(url, contentType, includeQueryParams) {
    let key = url.replace(/\?.*/, '');
    if (includeQueryParams) {
        key = url;
    }
    // font resource
    if (/ttf|otf|eot|woff2?/i.test(key)) {
        key = key.replace(/.*\//, '');
    }
    return contentType ? "[".concat(contentType, "]").concat(key) : key;
}
async function resourceToDataURL(resourceUrl, contentType, options) {
    const cacheKey = getCacheKey(resourceUrl, contentType, options.includeQueryParams);
    if (cache[cacheKey] != null) {
        return cache[cacheKey];
    }
    // ref: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
    if (options.cacheBust) {
        // eslint-disable-next-line no-param-reassign
        resourceUrl += (/\?/.test(resourceUrl) ? '&' : '?') + new Date().getTime();
    }
    let dataURL;
    try {
        const content = await fetchAsDataURL(resourceUrl, options.fetchRequestInit, (param)=>{
            let { res, result } = param;
            if (!contentType) {
                // eslint-disable-next-line no-param-reassign
                contentType = res.headers.get('Content-Type') || '';
            }
            return getContentFromDataUrl(result);
        });
        dataURL = makeDataUrl(content, contentType);
    } catch (error) {
        dataURL = options.imagePlaceholder || '';
        let msg = "Failed to fetch resource: ".concat(resourceUrl);
        if (error) {
            msg = typeof error === 'string' ? error : error.message;
        }
        if (msg) {
            console.warn(msg);
        }
    }
    cache[cacheKey] = dataURL;
    return dataURL;
} //# sourceMappingURL=dataurl.js.map
}),
"[project]/node_modules/html-to-image/es/clone-node.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cloneNode",
    ()=>cloneNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$clone$2d$pseudos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/clone-pseudos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$mimes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/mimes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$dataurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/dataurl.js [app-client] (ecmascript)");
;
;
;
;
async function cloneCanvasElement(canvas) {
    const dataURL = canvas.toDataURL();
    if (dataURL === 'data:,') {
        return canvas.cloneNode(false);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createImage"])(dataURL);
}
async function cloneVideoElement(video, options) {
    if (video.currentSrc) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = video.clientWidth;
        canvas.height = video.clientHeight;
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createImage"])(dataURL);
    }
    const poster = video.poster;
    const contentType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$mimes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMimeType"])(poster);
    const dataURL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$dataurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resourceToDataURL"])(poster, contentType, options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createImage"])(dataURL);
}
async function cloneIFrameElement(iframe, options) {
    var _a;
    try {
        if ((_a = iframe === null || iframe === void 0 ? void 0 : iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.body) {
            return await cloneNode(iframe.contentDocument.body, options, true);
        }
    } catch (_b) {
    // Failed to clone iframe
    }
    return iframe.cloneNode(false);
}
async function cloneSingleNode(node, options) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOfElement"])(node, HTMLCanvasElement)) {
        return cloneCanvasElement(node);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOfElement"])(node, HTMLVideoElement)) {
        return cloneVideoElement(node, options);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOfElement"])(node, HTMLIFrameElement)) {
        return cloneIFrameElement(node, options);
    }
    return node.cloneNode(isSVGElement(node));
}
const isSlotElement = (node)=>node.tagName != null && node.tagName.toUpperCase() === 'SLOT';
const isSVGElement = (node)=>node.tagName != null && node.tagName.toUpperCase() === 'SVG';
async function cloneChildren(nativeNode, clonedNode, options) {
    var _a, _b;
    if (isSVGElement(clonedNode)) {
        return clonedNode;
    }
    let children = [];
    if (isSlotElement(nativeNode) && nativeNode.assignedNodes) {
        children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(nativeNode.assignedNodes());
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOfElement"])(nativeNode, HTMLIFrameElement) && ((_a = nativeNode.contentDocument) === null || _a === void 0 ? void 0 : _a.body)) {
        children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(nativeNode.contentDocument.body.childNodes);
    } else {
        children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(((_b = nativeNode.shadowRoot) !== null && _b !== void 0 ? _b : nativeNode).childNodes);
    }
    if (children.length === 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOfElement"])(nativeNode, HTMLVideoElement)) {
        return clonedNode;
    }
    await children.reduce((deferred, child)=>deferred.then(()=>cloneNode(child, options)).then((clonedChild)=>{
            if (clonedChild) {
                clonedNode.appendChild(clonedChild);
            }
        }), Promise.resolve());
    return clonedNode;
}
function cloneCSSStyle(nativeNode, clonedNode, options) {
    const targetStyle = clonedNode.style;
    if (!targetStyle) {
        return;
    }
    const sourceStyle = window.getComputedStyle(nativeNode);
    if (sourceStyle.cssText) {
        targetStyle.cssText = sourceStyle.cssText;
        targetStyle.transformOrigin = sourceStyle.transformOrigin;
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleProperties"])(options).forEach((name)=>{
            let value = sourceStyle.getPropertyValue(name);
            if (name === 'font-size' && value.endsWith('px')) {
                const reducedFont = Math.floor(parseFloat(value.substring(0, value.length - 2))) - 0.1;
                value = "".concat(reducedFont, "px");
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOfElement"])(nativeNode, HTMLIFrameElement) && name === 'display' && value === 'inline') {
                value = 'block';
            }
            if (name === 'd' && clonedNode.getAttribute('d')) {
                value = "path(".concat(clonedNode.getAttribute('d'), ")");
            }
            targetStyle.setProperty(name, value, sourceStyle.getPropertyPriority(name));
        });
    }
}
function cloneInputValue(nativeNode, clonedNode) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOfElement"])(nativeNode, HTMLTextAreaElement)) {
        clonedNode.innerHTML = nativeNode.value;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOfElement"])(nativeNode, HTMLInputElement)) {
        clonedNode.setAttribute('value', nativeNode.value);
    }
}
function cloneSelectValue(nativeNode, clonedNode) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOfElement"])(nativeNode, HTMLSelectElement)) {
        const clonedSelect = clonedNode;
        const selectedOption = Array.from(clonedSelect.children).find((child)=>nativeNode.value === child.getAttribute('value'));
        if (selectedOption) {
            selectedOption.setAttribute('selected', '');
        }
    }
}
function decorate(nativeNode, clonedNode, options) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOfElement"])(clonedNode, Element)) {
        cloneCSSStyle(nativeNode, clonedNode, options);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$clone$2d$pseudos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clonePseudoElements"])(nativeNode, clonedNode, options);
        cloneInputValue(nativeNode, clonedNode);
        cloneSelectValue(nativeNode, clonedNode);
    }
    return clonedNode;
}
async function ensureSVGSymbols(clone, options) {
    const uses = clone.querySelectorAll ? clone.querySelectorAll('use') : [];
    if (uses.length === 0) {
        return clone;
    }
    const processedDefs = {};
    for(let i = 0; i < uses.length; i++){
        const use = uses[i];
        const id = use.getAttribute('xlink:href');
        if (id) {
            const exist = clone.querySelector(id);
            const definition = document.querySelector(id);
            if (!exist && definition && !processedDefs[id]) {
                // eslint-disable-next-line no-await-in-loop
                processedDefs[id] = await cloneNode(definition, options, true);
            }
        }
    }
    const nodes = Object.values(processedDefs);
    if (nodes.length) {
        const ns = 'http://www.w3.org/1999/xhtml';
        const svg = document.createElementNS(ns, 'svg');
        svg.setAttribute('xmlns', ns);
        svg.style.position = 'absolute';
        svg.style.width = '0';
        svg.style.height = '0';
        svg.style.overflow = 'hidden';
        svg.style.display = 'none';
        const defs = document.createElementNS(ns, 'defs');
        svg.appendChild(defs);
        for(let i = 0; i < nodes.length; i++){
            defs.appendChild(nodes[i]);
        }
        clone.appendChild(svg);
    }
    return clone;
}
async function cloneNode(node, options, isRoot) {
    if (!isRoot && options.filter && !options.filter(node)) {
        return null;
    }
    return Promise.resolve(node).then((clonedNode)=>cloneSingleNode(clonedNode, options)).then((clonedNode)=>cloneChildren(node, clonedNode, options)).then((clonedNode)=>decorate(node, clonedNode, options)).then((clonedNode)=>ensureSVGSymbols(clonedNode, options));
} //# sourceMappingURL=clone-node.js.map
}),
"[project]/node_modules/html-to-image/es/embed-resources.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "embed",
    ()=>embed,
    "embedResources",
    ()=>embedResources,
    "parseURLs",
    ()=>parseURLs,
    "shouldEmbed",
    ()=>shouldEmbed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$mimes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/mimes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$dataurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/dataurl.js [app-client] (ecmascript)");
;
;
;
const URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
const URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
const FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function toRegex(url) {
    // eslint-disable-next-line no-useless-escape
    const escaped = url.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
    return new RegExp("(url\\(['\"]?)(".concat(escaped, ")(['\"]?\\))"), 'g');
}
function parseURLs(cssText) {
    const urls = [];
    cssText.replace(URL_REGEX, (raw, quotation, url)=>{
        urls.push(url);
        return raw;
    });
    return urls.filter((url)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$dataurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDataUrl"])(url));
}
async function embed(cssText, resourceURL, baseURL, options, getContentFromUrl) {
    try {
        const resolvedURL = baseURL ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveUrl"])(resourceURL, baseURL) : resourceURL;
        const contentType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$mimes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMimeType"])(resourceURL);
        let dataURL;
        if (getContentFromUrl) {
            const content = await getContentFromUrl(resolvedURL);
            dataURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$dataurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeDataUrl"])(content, contentType);
        } else {
            dataURL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$dataurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resourceToDataURL"])(resolvedURL, contentType, options);
        }
        return cssText.replace(toRegex(resourceURL), "$1".concat(dataURL, "$3"));
    } catch (error) {
    // pass
    }
    return cssText;
}
function filterPreferredFontFormat(str, param) {
    let { preferredFontFormat } = param;
    return !preferredFontFormat ? str : str.replace(FONT_SRC_REGEX, (match)=>{
        // eslint-disable-next-line no-constant-condition
        while(true){
            const [src, , format] = URL_WITH_FORMAT_REGEX.exec(match) || [];
            if (!format) {
                return '';
            }
            if (format === preferredFontFormat) {
                return "src: ".concat(src, ";");
            }
        }
    });
}
function shouldEmbed(url) {
    return url.search(URL_REGEX) !== -1;
}
async function embedResources(cssText, baseUrl, options) {
    if (!shouldEmbed(cssText)) {
        return cssText;
    }
    const filteredCSSText = filterPreferredFontFormat(cssText, options);
    const urls = parseURLs(filteredCSSText);
    return urls.reduce((deferred, url)=>deferred.then((css)=>embed(css, url, baseUrl, options)), Promise.resolve(filteredCSSText));
} //# sourceMappingURL=embed-resources.js.map
}),
"[project]/node_modules/html-to-image/es/embed-images.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "embedImages",
    ()=>embedImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$embed$2d$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/embed-resources.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$dataurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/dataurl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$mimes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/mimes.js [app-client] (ecmascript)");
;
;
;
;
async function embedProp(propName, node, options) {
    var _a;
    const propValue = (_a = node.style) === null || _a === void 0 ? void 0 : _a.getPropertyValue(propName);
    if (propValue) {
        const cssString = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$embed$2d$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["embedResources"])(propValue, null, options);
        node.style.setProperty(propName, cssString, node.style.getPropertyPriority(propName));
        return true;
    }
    return false;
}
async function embedBackground(clonedNode, options) {
    ;
    await embedProp('background', clonedNode, options) || await embedProp('background-image', clonedNode, options);
    await embedProp('mask', clonedNode, options) || await embedProp('-webkit-mask', clonedNode, options) || await embedProp('mask-image', clonedNode, options) || await embedProp('-webkit-mask-image', clonedNode, options);
}
async function embedImageNode(clonedNode, options) {
    const isImageElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOfElement"])(clonedNode, HTMLImageElement);
    if (!(isImageElement && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$dataurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDataUrl"])(clonedNode.src)) && !((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOfElement"])(clonedNode, SVGImageElement) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$dataurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDataUrl"])(clonedNode.href.baseVal))) {
        return;
    }
    const url = isImageElement ? clonedNode.src : clonedNode.href.baseVal;
    const dataURL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$dataurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resourceToDataURL"])(url, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$mimes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMimeType"])(url), options);
    await new Promise((resolve, reject)=>{
        clonedNode.onload = resolve;
        clonedNode.onerror = options.onImageErrorHandler ? function() {
            for(var _len = arguments.length, attributes = new Array(_len), _key = 0; _key < _len; _key++){
                attributes[_key] = arguments[_key];
            }
            try {
                resolve(options.onImageErrorHandler(...attributes));
            } catch (error) {
                reject(error);
            }
        } : reject;
        const image = clonedNode;
        if (image.decode) {
            image.decode = resolve;
        }
        if (image.loading === 'lazy') {
            image.loading = 'eager';
        }
        if (isImageElement) {
            clonedNode.srcset = '';
            clonedNode.src = dataURL;
        } else {
            clonedNode.href.baseVal = dataURL;
        }
    });
}
async function embedChildren(clonedNode, options) {
    const children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(clonedNode.childNodes);
    const deferreds = children.map((child)=>embedImages(child, options));
    await Promise.all(deferreds).then(()=>clonedNode);
}
async function embedImages(clonedNode, options) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOfElement"])(clonedNode, Element)) {
        await embedBackground(clonedNode, options);
        await embedImageNode(clonedNode, options);
        await embedChildren(clonedNode, options);
    }
} //# sourceMappingURL=embed-images.js.map
}),
"[project]/node_modules/html-to-image/es/apply-style.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyStyle",
    ()=>applyStyle
]);
function applyStyle(node, options) {
    const { style } = node;
    if (options.backgroundColor) {
        style.backgroundColor = options.backgroundColor;
    }
    if (options.width) {
        style.width = "".concat(options.width, "px");
    }
    if (options.height) {
        style.height = "".concat(options.height, "px");
    }
    const manual = options.style;
    if (manual != null) {
        Object.keys(manual).forEach((key)=>{
            style[key] = manual[key];
        });
    }
    return node;
} //# sourceMappingURL=apply-style.js.map
}),
"[project]/node_modules/html-to-image/es/embed-webfonts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "embedWebFonts",
    ()=>embedWebFonts,
    "getWebFontCSS",
    ()=>getWebFontCSS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$dataurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/dataurl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$embed$2d$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/embed-resources.js [app-client] (ecmascript)");
;
;
;
const cssFetchCache = {};
async function fetchCSS(url) {
    let cache = cssFetchCache[url];
    if (cache != null) {
        return cache;
    }
    const res = await fetch(url);
    const cssText = await res.text();
    cache = {
        url,
        cssText
    };
    cssFetchCache[url] = cache;
    return cache;
}
async function embedFonts(data, options) {
    let cssText = data.cssText;
    const regexUrl = /url\(["']?([^"')]+)["']?\)/g;
    const fontLocs = cssText.match(/url\([^)]+\)/g) || [];
    const loadFonts = fontLocs.map(async (loc)=>{
        let url = loc.replace(regexUrl, '$1');
        if (!url.startsWith('https://')) {
            url = new URL(url, data.url).href;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$dataurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAsDataURL"])(url, options.fetchRequestInit, (param)=>{
            let { result } = param;
            cssText = cssText.replace(loc, "url(".concat(result, ")"));
            return [
                loc,
                result
            ];
        });
    });
    return Promise.all(loadFonts).then(()=>cssText);
}
function parseCSS(source) {
    if (source == null) {
        return [];
    }
    const result = [];
    const commentsRegex = /(\/\*[\s\S]*?\*\/)/gi;
    // strip out comments
    let cssText = source.replace(commentsRegex, '');
    // eslint-disable-next-line prefer-regex-literals
    const keyframesRegex = new RegExp('((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})', 'gi');
    // eslint-disable-next-line no-constant-condition
    while(true){
        const matches = keyframesRegex.exec(cssText);
        if (matches === null) {
            break;
        }
        result.push(matches[0]);
    }
    cssText = cssText.replace(keyframesRegex, '');
    const importRegex = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
    // to match css & media queries together
    const combinedCSSRegex = '((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]' + '*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})';
    // unified regex
    const unifiedRegex = new RegExp(combinedCSSRegex, 'gi');
    // eslint-disable-next-line no-constant-condition
    while(true){
        let matches = importRegex.exec(cssText);
        if (matches === null) {
            matches = unifiedRegex.exec(cssText);
            if (matches === null) {
                break;
            } else {
                importRegex.lastIndex = unifiedRegex.lastIndex;
            }
        } else {
            unifiedRegex.lastIndex = importRegex.lastIndex;
        }
        result.push(matches[0]);
    }
    return result;
}
async function getCSSRules(styleSheets, options) {
    const ret = [];
    const deferreds = [];
    // First loop inlines imports
    styleSheets.forEach((sheet)=>{
        if ('cssRules' in sheet) {
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(sheet.cssRules || []).forEach((item, index)=>{
                    if (item.type === CSSRule.IMPORT_RULE) {
                        let importIndex = index + 1;
                        const url = item.href;
                        const deferred = fetchCSS(url).then((metadata)=>embedFonts(metadata, options)).then((cssText)=>parseCSS(cssText).forEach((rule)=>{
                                try {
                                    sheet.insertRule(rule, rule.startsWith('@import') ? importIndex += 1 : sheet.cssRules.length);
                                } catch (error) {
                                    console.error('Error inserting rule from remote css', {
                                        rule,
                                        error
                                    });
                                }
                            })).catch((e)=>{
                            console.error('Error loading remote css', e.toString());
                        });
                        deferreds.push(deferred);
                    }
                });
            } catch (e) {
                const inline = styleSheets.find((a)=>a.href == null) || document.styleSheets[0];
                if (sheet.href != null) {
                    deferreds.push(fetchCSS(sheet.href).then((metadata)=>embedFonts(metadata, options)).then((cssText)=>parseCSS(cssText).forEach((rule)=>{
                            inline.insertRule(rule, inline.cssRules.length);
                        })).catch((err)=>{
                        console.error('Error loading remote stylesheet', err);
                    }));
                }
                console.error('Error inlining remote css file', e);
            }
        }
    });
    return Promise.all(deferreds).then(()=>{
        // Second loop parses rules
        styleSheets.forEach((sheet)=>{
            if ('cssRules' in sheet) {
                try {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(sheet.cssRules || []).forEach((item)=>{
                        ret.push(item);
                    });
                } catch (e) {
                    console.error("Error while reading CSS rules from ".concat(sheet.href), e);
                }
            }
        });
        return ret;
    });
}
function getWebFontRules(cssRules) {
    return cssRules.filter((rule)=>rule.type === CSSRule.FONT_FACE_RULE).filter((rule)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$embed$2d$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldEmbed"])(rule.style.getPropertyValue('src')));
}
async function parseWebFontRules(node, options) {
    if (node.ownerDocument == null) {
        throw new Error('Provided element is not within a Document');
    }
    const styleSheets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(node.ownerDocument.styleSheets);
    const cssRules = await getCSSRules(styleSheets, options);
    return getWebFontRules(cssRules);
}
function normalizeFontFamily(font) {
    return font.trim().replace(/["']/g, '');
}
function getUsedFonts(node) {
    const fonts = new Set();
    function traverse(node) {
        const fontFamily = node.style.fontFamily || getComputedStyle(node).fontFamily;
        fontFamily.split(',').forEach((font)=>{
            fonts.add(normalizeFontFamily(font));
        });
        Array.from(node.children).forEach((child)=>{
            if (child instanceof HTMLElement) {
                traverse(child);
            }
        });
    }
    traverse(node);
    return fonts;
}
async function getWebFontCSS(node, options) {
    const rules = await parseWebFontRules(node, options);
    const usedFonts = getUsedFonts(node);
    const cssTexts = await Promise.all(rules.filter((rule)=>usedFonts.has(normalizeFontFamily(rule.style.fontFamily))).map((rule)=>{
        const baseUrl = rule.parentStyleSheet ? rule.parentStyleSheet.href : null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$embed$2d$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["embedResources"])(rule.cssText, baseUrl, options);
    }));
    return cssTexts.join('\n');
}
async function embedWebFonts(clonedNode, options) {
    const cssText = options.fontEmbedCSS != null ? options.fontEmbedCSS : options.skipFonts ? null : await getWebFontCSS(clonedNode, options);
    if (cssText) {
        const styleNode = document.createElement('style');
        const sytleContent = document.createTextNode(cssText);
        styleNode.appendChild(sytleContent);
        if (clonedNode.firstChild) {
            clonedNode.insertBefore(styleNode, clonedNode.firstChild);
        } else {
            clonedNode.appendChild(styleNode);
        }
    }
} //# sourceMappingURL=embed-webfonts.js.map
}),
"[project]/node_modules/html-to-image/es/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFontEmbedCSS",
    ()=>getFontEmbedCSS,
    "toBlob",
    ()=>toBlob,
    "toCanvas",
    ()=>toCanvas,
    "toJpeg",
    ()=>toJpeg,
    "toPixelData",
    ()=>toPixelData,
    "toPng",
    ()=>toPng,
    "toSvg",
    ()=>toSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$clone$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/clone-node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$embed$2d$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/embed-images.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$apply$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/apply-style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$embed$2d$webfonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/embed-webfonts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/util.js [app-client] (ecmascript)");
;
;
;
;
;
async function toSvg(node) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSize"])(node, options);
    const clonedNode = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$clone$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneNode"])(node, options, true);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$embed$2d$webfonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["embedWebFonts"])(clonedNode, options);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$embed$2d$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["embedImages"])(clonedNode, options);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$apply$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyStyle"])(clonedNode, options);
    const datauri = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeToDataURL"])(clonedNode, width, height);
    return datauri;
}
async function toCanvas(node) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSize"])(node, options);
    const svg = await toSvg(node, options);
    const img = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createImage"])(svg);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const ratio = options.pixelRatio || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPixelRatio"])();
    const canvasWidth = options.canvasWidth || width;
    const canvasHeight = options.canvasHeight || height;
    canvas.width = canvasWidth * ratio;
    canvas.height = canvasHeight * ratio;
    if (!options.skipAutoScale) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkCanvasDimensions"])(canvas);
    }
    canvas.style.width = "".concat(canvasWidth);
    canvas.style.height = "".concat(canvasHeight);
    if (options.backgroundColor) {
        context.fillStyle = options.backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas;
}
async function toPixelData(node) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSize"])(node, options);
    const canvas = await toCanvas(node, options);
    const ctx = canvas.getContext('2d');
    return ctx.getImageData(0, 0, width, height).data;
}
async function toPng(node) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const canvas = await toCanvas(node, options);
    return canvas.toDataURL();
}
async function toJpeg(node) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const canvas = await toCanvas(node, options);
    return canvas.toDataURL('image/jpeg', options.quality || 1);
}
async function toBlob(node) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const canvas = await toCanvas(node, options);
    const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canvasToBlob"])(canvas);
    return blob;
}
async function getFontEmbedCSS(node) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$embed$2d$webfonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebFontCSS"])(node, options);
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Upload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "polyline",
        {
            points: "17 8 12 3 7 8",
            key: "t8dd8p"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "3",
            y2: "15",
            key: "widbto"
        }
    ]
];
const Upload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Upload", __iconNode);
;
 //# sourceMappingURL=upload.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Upload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_92bd4a7b._.js.map