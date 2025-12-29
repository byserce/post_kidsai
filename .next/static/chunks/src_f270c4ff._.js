(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/editor/EditorPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/editor/EditorPanel.tsx
__turbopack_context__.s([
    "EditorPanel",
    ()=>EditorPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/core/store'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
;
var _s = __turbopack_context__.k.signature();
;
;
const EditorPanel = ()=>{
    _s();
    // DÜZELTME: updateSlide buraya eklendi
    const { activeSlideId, slides, activeLanguage, updateContent, updatePhoneTransform, updateImageTransform, setLanguage, updateSlide } = useEditorStore();
    const activeSlide = slides.find((s)=>s.id === activeSlideId);
    if (!activeSlide) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4",
        children: "Slayt seçiniz"
    }, void 0, false, {
        fileName: "[project]/src/components/editor/EditorPanel.tsx",
        lineNumber: 15,
        columnNumber: 28
    }, ("TURBOPACK compile-time value", void 0));
    // Kullanılabilir tema renkleri
    const themeColors = [
        {
            id: 'blue',
            class: 'bg-blue-500'
        },
        {
            id: 'indigo',
            class: 'bg-indigo-500'
        },
        {
            id: 'purple',
            class: 'bg-purple-500'
        },
        {
            id: 'rose',
            class: 'bg-rose-500'
        },
        {
            id: 'emerald',
            class: 'bg-emerald-500'
        },
        {
            id: 'yellow',
            class: 'bg-yellow-500'
        },
        {
            id: 'cyan',
            class: 'bg-cyan-400'
        }
    ];
    // Sıfırlama Butonu Bileşeni
    const ResetBtn = (param)=>{
        let { onClick } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: "p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-blue-600 transition-colors",
            title: "Varsayılan Değere Sıfırla",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                size: 12
            }, void 0, false, {
                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/editor/EditorPanel.tsx",
            lineNumber: 30,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[400px] h-full bg-white border-l border-slate-200 overflow-y-auto p-6 space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-slate-900 mb-2",
                        children: "Dil Seçimi"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 flex-wrap",
                        children: [
                            'en',
                            'tr',
                            'de',
                            'es',
                            'fr',
                            'ja',
                            'ko',
                            'ar'
                        ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLanguage(l),
                                className: "px-3 py-1 rounded border ".concat(activeLanguage === l ? 'bg-blue-600 text-white' : 'bg-white'),
                                children: l.toUpperCase()
                            }, l, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 43,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-slate-900 mb-2",
                        children: "Tema Rengi"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: themeColors.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>updateSlide(activeSlide.id, {
                                        themeColor: c.id
                                    }),
                                className: "w-8 h-8 rounded-full transition-transform ".concat(c.class, " ").concat(activeSlide.themeColor === c.id ? 'ring-2 ring-offset-2 ring-slate-900 scale-110' : 'hover:scale-105'),
                                title: c.id
                            }, c.id, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 59,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-slate-900 border-b pb-2",
                        children: [
                            "İçerik (",
                            activeLanguage.toUpperCase(),
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs text-slate-500",
                                children: "Başlık"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "w-full border rounded p-2",
                                value: activeSlide.content[activeLanguage].title,
                                onChange: (e)=>updateContent(activeSlide.id, 'title', e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs text-slate-500",
                                children: "Alt Başlık"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "w-full border rounded p-2",
                                value: activeSlide.content[activeLanguage].subtitle,
                                onChange: (e)=>updateContent(activeSlide.id, 'subtitle', e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs text-slate-500",
                                children: "Açıklama Metni"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "w-full border rounded p-2 h-20 text-sm",
                                value: activeSlide.content[activeLanguage].description || '',
                                onChange: (e)=>updateContent(activeSlide.id, 'description', e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeSlide.layoutId === 'smart-v1' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 border-t pt-3 mt-3 bg-slate-50 p-2 rounded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-bold text-xs text-purple-600 uppercase",
                                children: "Sol Balon (AI)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 100,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "w-full border rounded p-2 text-xs",
                                placeholder: "Başlık",
                                value: activeSlide.content[activeLanguage].bubble_1_title || '',
                                onChange: (e)=>updateContent(activeSlide.id, 'bubble_1_title', e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 101,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "w-full border rounded p-2 text-xs",
                                placeholder: "Ana Metin",
                                value: activeSlide.content[activeLanguage].bubble_1_main || '',
                                onChange: (e)=>updateContent(activeSlide.id, 'bubble_1_main', e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 102,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "w-full border rounded p-2 text-xs",
                                placeholder: "Alt Metin",
                                value: activeSlide.content[activeLanguage].bubble_1_sub || '',
                                onChange: (e)=>updateContent(activeSlide.id, 'bubble_1_sub', e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 103,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-bold text-xs text-indigo-600 uppercase mt-2",
                                children: "Sağ Balon (Öğrenme)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "w-full border rounded p-2 text-xs",
                                placeholder: "Başlık",
                                value: activeSlide.content[activeLanguage].bubble_2_title || '',
                                onChange: (e)=>updateContent(activeSlide.id, 'bubble_2_title', e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 106,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "w-full border rounded p-2 text-xs",
                                placeholder: "Ana Metin",
                                value: activeSlide.content[activeLanguage].bubble_2_main || '',
                                onChange: (e)=>updateContent(activeSlide.id, 'bubble_2_main', e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 107,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "w-full border rounded p-2 text-xs",
                                placeholder: "Alt Metin",
                                value: activeSlide.content[activeLanguage].bubble_2_sub || '',
                                onChange: (e)=>updateContent(activeSlide.id, 'bubble_2_sub', e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 108,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                        lineNumber: 99,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-slate-900 border-b pb-2",
                        children: "Telefon Konumu (3D)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs",
                                                children: "Yatay (X)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 120,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResetBtn, {
                                                onClick: ()=>updatePhoneTransform(activeSlide.id, {
                                                        x: 0
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "-300",
                                        max: "300",
                                        value: activeSlide.phone.transform.x,
                                        onChange: (e)=>updatePhoneTransform(activeSlide.id, {
                                                x: Number(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs",
                                                children: "Dikey (Y)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 130,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResetBtn, {
                                                onClick: ()=>updatePhoneTransform(activeSlide.id, {
                                                        y: 0
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 131,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "-300",
                                        max: "300",
                                        value: activeSlide.phone.transform.y,
                                        onChange: (e)=>updatePhoneTransform(activeSlide.id, {
                                                y: Number(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 128,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs",
                                                children: "Dönüş X (Eğim)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 140,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResetBtn, {
                                                onClick: ()=>updatePhoneTransform(activeSlide.id, {
                                                        rotateX: 0
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 141,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "-60",
                                        max: "60",
                                        value: activeSlide.phone.transform.rotateX,
                                        onChange: (e)=>updatePhoneTransform(activeSlide.id, {
                                                rotateX: Number(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs",
                                                children: "Dönüş Y (Yön)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 150,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResetBtn, {
                                                onClick: ()=>updatePhoneTransform(activeSlide.id, {
                                                        rotateY: 0
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 151,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "-60",
                                        max: "60",
                                        value: activeSlide.phone.transform.rotateY,
                                        onChange: (e)=>updatePhoneTransform(activeSlide.id, {
                                                rotateY: Number(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs",
                                                children: "Dönüş Z (Açı)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 160,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResetBtn, {
                                                onClick: ()=>updatePhoneTransform(activeSlide.id, {
                                                        rotateZ: 0
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 161,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "-180",
                                        max: "180",
                                        value: activeSlide.phone.transform.rotateZ,
                                        onChange: (e)=>updatePhoneTransform(activeSlide.id, {
                                                rotateZ: Number(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 158,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs",
                                                children: "Boyut"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 170,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResetBtn, {
                                                onClick: ()=>updatePhoneTransform(activeSlide.id, {
                                                        scale: 1
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 171,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "0.5",
                                        max: "2",
                                        step: "0.1",
                                        value: activeSlide.phone.transform.scale,
                                        onChange: (e)=>updatePhoneTransform(activeSlide.id, {
                                                scale: Number(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-slate-900 border-b pb-2",
                        children: "Ekran Görseli"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block mb-2 text-sm bg-slate-100 p-2 rounded cursor-pointer hover:bg-slate-200",
                            children: [
                                "Görsel Yükle",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    className: "hidden",
                                    onChange: (e)=>{
                                        var _e_target_files;
                                        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onload = (ev)=>updateSlide(activeSlide.id, (s)=>{
                                                    var _ev_target;
                                                    return {
                                                        image: {
                                                            ...s.image,
                                                            url: (_ev_target = ev.target) === null || _ev_target === void 0 ? void 0 : _ev_target.result
                                                        }
                                                    };
                                                });
                                            reader.readAsDataURL(file);
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                    lineNumber: 187,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/editor/EditorPanel.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>updateSlide(activeSlide.id, (s)=>({
                                            image: {
                                                ...s.image,
                                                fit: 'cover'
                                            }
                                        })),
                                className: "flex-1 py-2 text-xs font-bold rounded border transition-colors ".concat(activeSlide.image.fit === 'cover' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'),
                                children: "Doldur"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>updateSlide(activeSlide.id, (s)=>({
                                            image: {
                                                ...s.image,
                                                fit: 'contain'
                                            }
                                        })),
                                className: "flex-1 py-2 text-xs font-bold rounded border transition-colors ".concat(activeSlide.image.fit === 'contain' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'),
                                children: "Sığdır"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs",
                                                children: "Resim Zoom"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 216,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResetBtn, {
                                                onClick: ()=>updateImageTransform(activeSlide.id, {
                                                        scale: 1
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 217,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "1",
                                        max: "3",
                                        step: "0.1",
                                        value: activeSlide.image.transform.scale,
                                        onChange: (e)=>updateImageTransform(activeSlide.id, {
                                                scale: Number(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 219,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs",
                                                children: "Resim X"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 226,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResetBtn, {
                                                onClick: ()=>updateImageTransform(activeSlide.id, {
                                                        x: 0
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 227,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "-100",
                                        max: "100",
                                        value: activeSlide.image.transform.x,
                                        onChange: (e)=>updateImageTransform(activeSlide.id, {
                                                x: Number(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 224,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs",
                                                children: "Resim Y"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 236,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResetBtn, {
                                                onClick: ()=>updateImageTransform(activeSlide.id, {
                                                        y: 0
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                                lineNumber: 237,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "-100",
                                        max: "100",
                                        value: activeSlide.image.transform.y || 0,
                                        onChange: (e)=>updateImageTransform(activeSlide.id, {
                                                y: Number(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                        lineNumber: 239,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                                lineNumber: 234,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/EditorPanel.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/EditorPanel.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/editor/EditorPanel.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EditorPanel, "HFTGxbFzGL97poFqy7G8kM1pkE0=", false, function() {
    return [
        useEditorStore
    ];
});
_c = EditorPanel;
var _c;
__turbopack_context__.k.register(_c, "EditorPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/page.tsx
__turbopack_context__.s([
    "default",
    ()=>PostFactoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/core/store'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/renderer/SlideRenderer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$EditorPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/editor/EditorPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/archive.js [app-client] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jszip/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-saver/dist/FileSaver.min.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// PROFESYONEL ÇOCUK UYGULAMASI DEMO VERİSİ
const KIDS_APP_DEMO = [
    {
        id: 'slide-1',
        layoutId: 'hero-v1',
        themeColor: 'cyan',
        elementTransforms: {},
        customTheme: {
            bg: 'bg-cyan-50',
            title: 'text-cyan-600',
            blob: 'bg-blue-200'
        },
        decorations: [
            {
                type: 'blob',
                className: 'absolute -top-40 -left-40 w-[800px] h-[800px] bg-blue-200 blur-[100px] opacity-40'
            },
            {
                type: 'blob',
                className: 'absolute top-40 -right-40 w-[600px] h-[600px] bg-pink-200 blur-[80px] opacity-40'
            },
            {
                type: 'cloud',
                className: 'absolute top-16 left-16 text-white w-40 h-40 fill-white/80 drop-shadow-xl'
            },
            {
                type: 'star',
                className: 'absolute top-60 left-1/4 text-yellow-400 w-16 h-16 fill-yellow-400 drop-shadow-lg'
            },
            {
                type: 'sparkle',
                className: 'absolute top-40 right-1/3 text-yellow-400 w-10 h-10'
            },
            {
                type: 'camera',
                className: 'absolute bottom-1/4 right-10 text-indigo-400/20 w-32 h-32 -rotate-12'
            }
        ],
        content: {
            tr: {
                title: 'KidsAI Dünyası',
                subtitle: 'YAPAY ZEKA KAMERA',
                cta: 'Hemen İndir',
                description: 'Kamerayı doğrult, yapay zeka tanısın! Çocuklar için en eğlenceli öğrenme aracı.',
                rating: '8 Dilde Eğitim'
            },
            en: {
                title: 'KidsAI World',
                subtitle: 'AI CAMERA MAGIC',
                cta: 'Download Now',
                description: 'Point the camera, let AI recognize it! The most fun way to learn for kids.',
                rating: 'Learn in 8 Languages'
            },
            de: {
                title: 'KidsAI Welt',
                subtitle: 'KI-KAMERA MAGIE',
                cta: 'Jetzt Laden',
                description: 'Richte die Kamera aus, lass die KI es erkennen!',
                rating: 'Lernen in 8 Sprachen'
            },
            es: {
                title: 'Mundo KidsAI',
                subtitle: 'CÁMARA IA MÁGICA',
                cta: 'Descargar',
                description: '¡Apunta la cámara y aprende!',
                rating: 'Aprende en 8 Idiomas'
            },
            fr: {
                title: 'Monde KidsAI',
                subtitle: 'MAGIE CAMÉRA IA',
                cta: 'Télécharger',
                description: 'Pointez la caméra, laissez l\'IA reconnaître !',
                rating: 'Apprendre en 8 langues'
            },
            ja: {
                title: 'KidsAIワールド',
                subtitle: 'AIカメラの魔法',
                cta: 'ダウンロード',
                description: 'カメラを向けて、AIに認識させよう！',
                rating: '8ヶ国語で学ぶ'
            },
            ko: {
                title: 'KidsAI 월드',
                subtitle: 'AI 카메라 매직',
                cta: '다운로드',
                description: '카메라를 비추고 AI가 인식하게 하세요!',
                rating: '8개 언어로 학습'
            },
            ar: {
                title: 'عالم KidsAI',
                subtitle: 'سحر الكاميرا',
                cta: 'حمل الآن',
                description: 'وجه الكاميرا، ودع الذكاء الاصطناعي يتعرف عليها!',
                rating: 'تعلم بـ 8 لغات'
            }
        },
        phone: {
            transform: {
                x: 0,
                y: 40,
                rotateX: -5,
                rotateY: -5,
                rotateZ: 0,
                scale: 1.1
            }
        },
        image: {
            url: 'https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?q=80&w=800&auto=format&fit=crop',
            fit: 'cover',
            transform: {
                x: 0,
                y: 0,
                scale: 1.1,
                rotateZ: 0
            }
        }
    },
    {
        id: 'slide-2',
        layoutId: 'classic-v1',
        themeColor: 'rose',
        elementTransforms: {},
        content: {
            tr: {
                title: 'Klasik Mod',
                subtitle: 'FOTOĞRAF ÇEK',
                cta: 'Hemen Dene',
                description: 'İnternet olmasa bile dilediğin zaman fotoğraf çek, nesnelerin ismini anında öğren!',
                rating: 'Eğitici',
                feature_ai: 'AI Tanıma',
                feature_offline: 'İnternetsiz',
                feature_voice: 'Sesli İsim'
            },
            en: {
                title: 'Classic Mode',
                subtitle: 'TAKE PHOTO',
                cta: 'Try Now',
                description: 'Take photos anytime, even without internet, and learn object names instantly!',
                rating: 'Educational',
                feature_ai: 'AI Recognition',
                feature_offline: 'Offline Mode',
                feature_voice: 'Voice Name'
            },
            de: {
                title: 'Klassik Modus',
                subtitle: 'FOTO MACHEN',
                cta: 'Probieren',
                description: 'Mach jederzeit Fotos, auch ohne Internet, und lerne sofort Namen!',
                rating: 'Lehrreich',
                feature_ai: 'KI Erkennung',
                feature_offline: 'Offline',
                feature_voice: 'Sprachausgabe'
            },
            es: {
                title: 'Modo Clásico',
                subtitle: 'TOMAR FOTO',
                cta: 'Probar',
                description: '¡Toma fotos en cualquier momento, incluso sin internet, y aprende nombres!',
                rating: 'Educativo',
                feature_ai: 'IA Detecta',
                feature_offline: 'Sin Internet',
                feature_voice: 'Voz'
            },
            fr: {
                title: 'Mode Classique',
                subtitle: 'PRENDRE PHOTO',
                cta: 'Essayer',
                description: 'Prenez des photos à tout moment, même sans internet, et apprenez !',
                rating: 'Éducatif',
                feature_ai: 'IA Détecte',
                feature_offline: 'Hors Ligne',
                feature_voice: 'Voix'
            },
            ja: {
                title: 'クラシックモード',
                subtitle: '写真を撮る',
                cta: '試す',
                description: 'インターネットがなくても、いつでも写真を撮って名前を学ぼう！',
                rating: '教育的',
                feature_ai: 'AI認識',
                feature_offline: 'オフライン',
                feature_voice: '音声読み上げ'
            },
            ko: {
                title: '클래식 모드',
                subtitle: '사진 찍기',
                cta: '시도하기',
                description: '인터넷 없이도 언제든지 사진을 찍고 이름을 배우세요!',
                rating: '교육용',
                feature_ai: 'AI 인식',
                feature_offline: '오프라인',
                feature_voice: '음성 안내'
            },
            ar: {
                title: 'الوضع الكلاسيكي',
                subtitle: 'التقط صورة',
                cta: 'جرب الآن',
                description: 'التقط الصور في أي وقت، حتى بدون إنترنت، وتعلم الأسماء فوراً!',
                rating: 'تعليمي',
                feature_ai: 'ذكاء اصطناعي',
                feature_offline: 'بدون نت',
                feature_voice: 'نطق الاسم'
            }
        },
        phone: {
            transform: {
                x: 0,
                y: 0,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                scale: 1.0
            }
        },
        image: {
            url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop',
            fit: 'cover',
            transform: {
                x: 0,
                y: 0,
                scale: 1,
                rotateZ: 0
            }
        }
    },
    {
        id: 'slide-3',
        layoutId: 'smart-v1',
        themeColor: 'purple',
        elementTransforms: {},
        customTheme: {
            bg: 'bg-[#F3E5F5]',
            title: 'text-slate-800',
            accent: 'bg-purple-600',
            bubbleBorder: 'border-purple-400'
        },
        decorations: [
            {
                type: 'blob',
                className: 'absolute -top-40 -left-40 w-[700px] h-[700px] bg-purple-200 blur-3xl opacity-50'
            },
            {
                type: 'blob',
                className: 'absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-200 blur-3xl opacity-50'
            },
            {
                type: 'sparkle',
                className: 'absolute top-20 left-20 text-yellow-400 w-12 h-12'
            },
            {
                type: 'star',
                className: 'absolute bottom-40 right-10 text-purple-400 w-10 h-10'
            }
        ],
        content: {
            tr: {
                title: 'Akıllı Mod',
                subtitle: 'AI ÖĞRETMEN',
                cta: 'Keşfet',
                description: 'Sadece ismini değil, ne olduğunu da anlatır! Çocuklar için basitleştirilmiş detaylı açıklamalar.',
                rating: "Editörün Seçimi",
                bubble_1_title: "AI Analiz",
                bubble_1_main: "Bu bir Kedi! 🐱",
                bubble_1_sub: "Yumuşak tüyleri vardır ve mırıldanır.",
                bubble_2_title: "Öğrenme Modu",
                bubble_2_main: "This is a Cat! 🐱",
                bubble_2_sub: "It has soft fur and purrs."
            },
            en: {
                title: 'Smart Mode',
                subtitle: 'AI TEACHER',
                cta: 'Explore',
                description: 'Not just the name, but explains what it is! Detailed explanations simplified for kids.',
                rating: "Editor's Choice",
                bubble_1_title: "AI Analysis",
                bubble_1_main: "This is a Cat! 🐱",
                bubble_1_sub: "It has soft fur and purrs.",
                bubble_2_title: "Learning Mode",
                bubble_2_main: "¡Es un Gato! 🐱",
                bubble_2_sub: "Tiene pelaje suave y ronronea."
            },
            de: {
                title: 'Smart Modus',
                subtitle: 'KI LEHRER',
                cta: 'Entdecken',
                description: 'Nicht nur der Name, sondern auch Erklärungen! Kindgerecht vereinfacht.',
                rating: "Editor's Choice",
                bubble_1_title: "KI Analyse",
                bubble_1_main: "Das ist eine Katze! 🐱",
                bubble_1_sub: "Sie hat weiches Fell und schnurrt.",
                bubble_2_title: "Lernmodus",
                bubble_2_main: "This is a Cat! 🐱",
                bubble_2_sub: "It has soft fur and purrs."
            },
            es: {
                title: 'Modo Inteligente',
                subtitle: 'PROFESOR IA',
                cta: 'Explorar',
                description: '¡No solo el nombre, explica qué es! Explicaciones detalladas para niños.',
                rating: "Editor's Choice",
                bubble_1_title: "Análisis IA",
                bubble_1_main: "¡Es un Gato! 🐱",
                bubble_1_sub: "Tiene pelaje suave y ronronea.",
                bubble_2_title: "Modo Aprendizaje",
                bubble_2_main: "This is a Cat! 🐱",
                bubble_2_sub: "It has soft fur and purrs."
            },
            fr: {
                title: 'Mode Intelligent',
                subtitle: 'PROFESSEUR IA',
                cta: 'Explorer',
                description: 'Pas seulement le nom, mais explique ce que c\'est ! Explications simplifiées.',
                rating: "Choix de l'éditeur",
                bubble_1_title: "Analyse IA",
                bubble_1_main: "C'est un Chat ! 🐱",
                bubble_1_sub: "Il a une fourrure douce et ronronne.",
                bubble_2_title: "Mode Apprentissage",
                bubble_2_main: "This is a Cat! 🐱",
                bubble_2_sub: "It has soft fur and purrs."
            },
            ja: {
                title: 'スマートモード',
                subtitle: 'AI先生',
                cta: '探検する',
                description: '名前だけでなく、それが何かも説明します！子供向けにわかりやすく解説。',
                rating: '編集部のおすすめ',
                bubble_1_title: "AI分析",
                bubble_1_main: "これは猫です！ 🐱",
                bubble_1_sub: "柔らかい毛並みで喉を鳴らします。",
                bubble_2_title: "学習モード",
                bubble_2_main: "This is a Cat! 🐱",
                bubble_2_sub: "It has soft fur and purrs."
            },
            ko: {
                title: '스마트 모드',
                subtitle: 'AI 선생님',
                cta: '탐험하기',
                description: '이름뿐만 아니라 무엇인지도 설명해줍니다! 아이들을 위한 쉬운 설명.',
                rating: '에디터의 선택',
                bubble_1_title: "AI 분석",
                bubble_1_main: "이것은 고양이입니다! 🐱",
                bubble_1_sub: "부드러운 털을 가지고 있고 가르랑거립니다.",
                bubble_2_title: "학습 모드",
                bubble_2_main: "This is a Cat! 🐱",
                bubble_2_sub: "It has soft fur and purrs."
            },
            ar: {
                title: 'الوضع الذكي',
                subtitle: 'معلم الذكاء',
                cta: 'استكشف',
                description: 'لا يذكر الاسم فقط، بل يشرح ما هو! شروحات مفصلة ومبسطة للأطفال.',
                rating: 'اختيار المحرر',
                bubble_1_title: "تحليل الذكاء",
                bubble_1_main: "هذه قطة! 🐱",
                bubble_1_sub: "لديها فراء ناعم وتخرخر.",
                bubble_2_title: "وضع التعلم",
                bubble_2_main: "This is a Cat! 🐱",
                bubble_2_sub: "It has soft fur and purrs."
            }
        },
        phone: {
            transform: {
                x: 0,
                y: 20,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                scale: 1.2
            }
        },
        image: {
            url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop',
            fit: 'cover',
            transform: {
                x: 0,
                y: 0,
                scale: 1.1,
                rotateZ: 0
            }
        }
    },
    {
        id: 'slide-4',
        layoutId: 'game-v1',
        themeColor: 'orange',
        elementTransforms: {},
        content: {
            tr: {
                title: 'Oyun Zamanı!',
                subtitle: 'AKILLI GÖZ OYUNU',
                cta: 'Hemen Oyna',
                description: 'Nesnenin fotoğrafını çek, ismini dinle ve tekrar et! Doğru söylersen puan kazan.',
                rating: 'Eğlenceli',
                card_mission: 'GÖREV',
                card_action: 'ÇEK & SÖYLE',
                card_win: 'KAZAN',
                card_reward: 'PUANLAR',
                card_new: 'YENİ!'
            },
            en: {
                title: 'Game Time!',
                subtitle: 'SMART EYE GAME',
                cta: 'Play Now',
                description: 'Snap a photo, listen to the name, and repeat! Earn points for correct pronunciation.',
                rating: 'Fun',
                card_mission: 'MISSION',
                card_action: 'SNAP & SAY',
                card_win: 'WIN',
                card_reward: 'POINTS',
                card_new: 'NEW!'
            },
            de: {
                title: 'Spielzeit!',
                subtitle: 'SCHLAUES AUGE',
                cta: 'Jetzt Spielen',
                description: 'Mach ein Foto, hör den Namen und wiederhole ihn! Sammle Punkte.',
                rating: 'Spaß',
                card_mission: 'MISSION',
                card_action: 'FOTO & SAGEN',
                card_win: 'GEWINN',
                card_reward: 'PUNKTE',
                card_new: 'NEU!'
            },
            es: {
                title: '¡Hora de Jugar!',
                subtitle: 'OJO INTELIGENTE',
                cta: 'Jugar',
                description: '¡Toma una foto, escucha el nombre y repítelo! Gana puntos.',
                rating: 'Divertido',
                card_mission: 'MISIÓN',
                card_action: 'FOTO Y DI',
                card_win: 'GANAR',
                card_reward: 'PUNTOS',
                card_new: '¡NUEVO!'
            },
            fr: {
                title: 'Heure du Jeu!',
                subtitle: 'ŒIL INTELLIGENT',
                cta: 'Jouer',
                description: 'Prenez une photo, écoutez le nom et répétez-le ! Gagnez des points.',
                rating: 'Amusant',
                card_mission: 'MISSION',
                card_action: 'PHOTO & DIRE',
                card_win: 'GAGNER',
                card_reward: 'POINTS',
                card_new: 'NOUVEAU!'
            },
            ja: {
                title: 'ゲームタイム！',
                subtitle: 'スマートアイゲーム',
                cta: '今すぐプレイ',
                description: '写真を撮って、名前を聞いて繰り返そう！正しく言えたらポイント獲得。',
                rating: '楽しい',
                card_mission: 'ミッション',
                card_action: '撮って言う',
                card_win: '獲得',
                card_reward: 'ポイント',
                card_new: '新着！'
            },
            ko: {
                title: '게임 시간!',
                subtitle: '스마트 아이 게임',
                cta: '지금 플레이',
                description: '사진을 찍고, 이름을 듣고 따라하세요! 정확하면 점수 획득.',
                rating: '재미있는',
                card_mission: '미션',
                card_action: '찍고 말하기',
                card_win: '획득',
                card_reward: '포인트',
                card_new: '새로운!'
            },
            ar: {
                title: 'وقت اللعب!',
                subtitle: 'لعبة العين الذكية',
                cta: 'العب الآن',
                description: 'التقط صورة، استمع للاسم وكرره! اربح نقاطاً للنطق الصحيح.',
                rating: 'ممتع',
                card_mission: 'المهمة',
                card_action: 'صور وقل',
                card_win: 'اربح',
                card_reward: 'نقاط',
                card_new: 'جديد!'
            }
        },
        phone: {
            transform: {
                x: 0,
                y: 20,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                scale: 1.1
            }
        },
        image: {
            url: 'https://images.unsplash.com/photo-1596464716127-f9a8759fa069?q=80&w=800&auto=format&fit=crop',
            fit: 'cover',
            transform: {
                x: 0,
                y: 0,
                scale: 1.1,
                rotateZ: 0
            }
        }
    },
    {
        id: 'slide-5',
        layoutId: 'hunt-v1',
        themeColor: 'emerald',
        elementTransforms: {},
        content: {
            tr: {
                title: 'Hazine Avı',
                subtitle: 'SCAVENGER HUNT',
                cta: 'Avı Başlat',
                description: 'Listendeki eşyaları evde veya doğada bul, fotoğrafını çek ve koleksiyonu tamamla!',
                rating: 'Macera',
                item_1: 'Kırmızı Oyuncak',
                item_2: 'Saksı Çiçeği',
                item_3: 'Mavi Kitap',
                list_title: 'GÖREV LİSTESİ'
            },
            en: {
                title: 'Scavenger Hunt',
                subtitle: 'EXPLORER MODE',
                cta: 'Start Hunt',
                description: 'Find items on your list at home or outside, snap them, and complete the collection!',
                rating: 'Adventure',
                item_1: 'Red Toy',
                item_2: 'Potted Plant',
                item_3: 'Blue Book',
                list_title: 'MISSION LIST'
            },
            de: {
                title: 'Schnitzeljagd',
                subtitle: 'ENTDECKER',
                cta: 'Starten',
                description: 'Finde Gegenstände auf deiner Liste und mach ein Foto!',
                rating: 'Abenteuer',
                item_1: 'Rotes Spielzeug',
                item_2: 'Blume',
                item_3: 'Blaues Buch',
                list_title: 'MISSIONEN'
            },
            es: {
                title: 'Búsqueda',
                subtitle: 'EXPLORADOR',
                cta: 'Empezar',
                description: '¡Encuentra los objetos de la lista y toma una foto!',
                rating: 'Aventura',
                item_1: 'Juguete Rojo',
                item_2: 'Planta',
                item_3: 'Libro Azul',
                list_title: 'MISIONES'
            },
            fr: {
                title: 'Chasse au Trésor',
                subtitle: 'EXPLORATEUR',
                cta: 'Commencer',
                description: 'Trouvez les objets de la liste et prenez une photo !',
                rating: 'Aventure',
                item_1: 'Jouet Rouge',
                item_2: 'Plante',
                item_3: 'Livre Bleu',
                list_title: 'MISSIONS'
            },
            ja: {
                title: 'スカベンジャーハント',
                subtitle: '探検モード',
                cta: 'スタート',
                description: 'リストにあるアイテムを見つけて写真を撮ろう！',
                rating: '冒険',
                item_1: '赤いおもちゃ',
                item_2: '植物',
                item_3: '青い本',
                list_title: 'ミッション'
            },
            ko: {
                title: '보물 찾기',
                subtitle: '탐험가 모드',
                cta: '시작하기',
                description: '목록에 있는 물건을 찾아 사진을 찍으세요!',
                rating: '모험',
                item_1: '빨간 장난감',
                item_2: '화분',
                item_3: '파란 책',
                list_title: '미션 목록'
            },
            ar: {
                title: 'البحث عن الكنز',
                subtitle: 'المستكشف',
                cta: 'ابدأ البحث',
                description: 'ابحث عن العناصر الموجودة في قائمتك والتقط صورة!',
                rating: 'مغامرة',
                item_1: 'لعبة حمراء',
                item_2: 'نبات',
                item_3: 'كتاب أزرق',
                list_title: 'المهام'
            }
        },
        phone: {
            transform: {
                x: 0,
                y: 20,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                scale: 1.1
            }
        },
        image: {
            url: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop',
            fit: 'cover',
            transform: {
                x: 0,
                y: 0,
                scale: 1.1,
                rotateZ: 0
            }
        }
    },
    {
        id: 'slide-6',
        layoutId: 'collection-v1',
        themeColor: 'cyan',
        elementTransforms: {},
        content: {
            tr: {
                title: 'Hayvanlarım',
                subtitle: 'KOLEKSİYON',
                cta: 'Kilidi Aç',
                description: 'Puanları topla ve yeni hayvanların kilidini aç! Kendi hayvanat bahçeni oluştur.',
                rating: 'Koleksiyon',
                card_unlocked: 'AÇIK',
                card_locked: 'KİLİTLİ',
                card_points: 'PUAN',
                card_animal_name: 'KEDİ'
            },
            en: {
                title: 'My Animals',
                subtitle: 'COLLECTION',
                cta: 'Unlock',
                description: 'Collect points and unlock new animals! Create your own zoo.',
                rating: 'Collection',
                card_unlocked: 'UNLOCKED',
                card_locked: 'LOCKED',
                card_points: 'PTS',
                card_animal_name: 'CAT'
            },
            de: {
                title: 'Meine Tiere',
                subtitle: 'SAMMLUNG',
                cta: 'Freischalten',
                description: 'Sammle Punkte und schalte neue Tiere frei!',
                rating: 'Sammlung',
                card_unlocked: 'OFFEN',
                card_locked: 'GESPERRT',
                card_points: 'PKT',
                card_animal_name: 'KATZE'
            },
            es: {
                title: 'Mis Animales',
                subtitle: 'COLECCIÓN',
                cta: 'Desbloquear',
                description: '¡Gana puntos y desbloquea nuevos animales!',
                rating: 'Colección',
                card_unlocked: 'ABIERTO',
                card_locked: 'BLOQUEADO',
                card_points: 'PTS',
                card_animal_name: 'GATO'
            },
            fr: {
                title: 'Mes Animaux',
                subtitle: 'COLLECTION',
                cta: 'Débloquer',
                description: 'Gagnez des points et débloquez de nouveaux animaux !',
                rating: 'Collection',
                card_unlocked: 'OUVERT',
                card_locked: 'VERROUILLÉ',
                card_points: 'PTS',
                card_animal_name: 'CHAT'
            },
            ja: {
                title: '私の動物',
                subtitle: 'コレクション',
                cta: 'ロック解除',
                description: 'ポイントを集めて新しい動物をロック解除しよう！',
                rating: 'コレクション',
                card_unlocked: '解除',
                card_locked: 'ロック',
                card_points: 'PT',
                card_animal_name: '猫'
            },
            ko: {
                title: '나의 동물들',
                subtitle: '컬렉션',
                cta: '잠금 해제',
                description: '점수를 모아 새로운 동물의 잠금을 해제하세요!',
                rating: '컬렉션',
                card_unlocked: '해제됨',
                card_locked: '잠김',
                card_points: '점',
                card_animal_name: '고양이'
            },
            ar: {
                title: 'حيواناتي',
                subtitle: 'مجموعة',
                cta: 'افتح القفل',
                description: 'اجمع النقاط وافتح قفل حيوانات جديدة!',
                rating: 'مجموعة',
                card_unlocked: 'مفتوح',
                card_locked: 'مغلق',
                card_points: 'نقاط',
                card_animal_name: 'قطة'
            }
        },
        phone: {
            transform: {
                x: 0,
                y: 20,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                scale: 1.1
            }
        },
        image: {
            url: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=800&auto=format&fit=crop',
            fit: 'cover',
            transform: {
                x: 0,
                y: 0,
                scale: 1.1,
                rotateZ: 0
            }
        }
    },
    {
        id: 'slide-7',
        layoutId: 'closing-v1',
        themeColor: 'indigo',
        elementTransforms: {},
        content: {
            tr: {
                title: 'Macera Başlasın!',
                subtitle: 'ÜCRETSİZ İNDİR',
                cta: 'Hemen Başla',
                description: 'Çocuklar için en güvenli ve eğlenceli keşif dünyasına şimdi katılın.',
                rating: 'Editörün Seçimi'
            },
            en: {
                title: 'Start Adventure!',
                subtitle: 'DOWNLOAD FREE',
                cta: 'Start Now',
                description: 'Join the safest and most fun exploration world for kids now.',
                rating: "Editor's Choice"
            },
            de: {
                title: 'Abenteuer Starten!',
                subtitle: 'KOSTENLOS LADEN',
                cta: 'Starten',
                description: 'Tritt jetzt der sichersten Entdeckerwelt bei.',
                rating: 'Redaktionstipp'
            },
            es: {
                title: '¡Inicia Aventura!',
                subtitle: 'DESCARGA GRATIS',
                cta: 'Empezar',
                description: 'Únete al mundo de exploración más seguro y divertido.',
                rating: 'Elección del Editor'
            },
            fr: {
                title: 'L\'Aventure Commence!',
                subtitle: 'TÉLÉCHARGER',
                cta: 'Démarrer',
                description: 'Rejoignez le monde d\'exploration le plus sûr et amusant.',
                rating: 'Choix de l\'éditeur'
            },
            ja: {
                title: '冒険を始めよう！',
                subtitle: '無料ダウンロード',
                cta: '今すぐ開始',
                description: '子供たちのための最も安全で楽しい探検の世界に参加しましょう。',
                rating: '編集部のおすすめ'
            },
            ko: {
                title: '모험을 시작하세요!',
                subtitle: '무료 다운로드',
                cta: '지금 시작',
                description: '가장 안전하고 재미있는 탐험의 세계에 지금 참여하세요.',
                rating: '에디터의 선택'
            },
            ar: {
                title: 'ابدأ المغامرة!',
                subtitle: 'تحميل مجاني',
                cta: 'ابدأ الآن',
                description: 'انضم إلى عالم الاستكشاف الأكثر أماناً ومتعة للأطفال الآن.',
                rating: 'اختيار المحرر'
            }
        },
        phone: {
            transform: {
                x: 0,
                y: 20,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                scale: 1.1
            }
        },
        image: {
            url: 'https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?q=80&w=800&auto=format&fit=crop',
            fit: 'cover',
            transform: {
                x: 0,
                y: 0,
                scale: 1.1,
                rotateZ: 0
            }
        }
    }
];
// REAL AI SERVICE: Backend API'ye istek atar
const generateSlideWithAI = async (prompt)=>{
    const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt
        })
    });
    if (!response.ok) {
        const errorData = await response.json().catch(()=>({}));
        throw new Error(errorData.error || "AI Hatası: ".concat(response.status, " - ").concat(response.statusText));
    }
    return await response.json();
};
function PostFactoryPage() {
    _s();
    const { slides, addSlide, activeSlideId, selectSlide, activeLanguage } = useEditorStore();
    // Zustand'ın state'ini toplu güncellemek için setState fonksiyonuna erişiyoruz
    const setState = useEditorStore.setState;
    const isLoaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // AI Modal State
    const [showAiModal, setShowAiModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Export State
    const [exportSlideId, setExportSlideId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [exportLanguage, setExportLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const exportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Sayfa ilk yüklendiğinde: Demo verisini al + LocalStorage'daki görsel ayarları uygula
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostFactoryPage.useEffect": ()=>{
            const savedData = localStorage.getItem('kidsai-post-creator-v1');
            // Demo verisinin temiz bir kopyasını oluştur
            let initialSlides = JSON.parse(JSON.stringify(KIDS_APP_DEMO));
            if (savedData) {
                try {
                    const parsed = JSON.parse(savedData);
                    // Sadece görsel ayarları (overrides) demo verisiyle birleştir
                    if (parsed.overrides && Array.isArray(parsed.overrides)) {
                        console.log("Local storage görsel ayarları yüklendi.");
                        initialSlides = initialSlides.map({
                            "PostFactoryPage.useEffect": (slide)=>{
                                const saved = parsed.overrides.find({
                                    "PostFactoryPage.useEffect.saved": (o)=>o.id === slide.id
                                }["PostFactoryPage.useEffect.saved"]);
                                if (saved) {
                                    return {
                                        ...slide,
                                        phone: saved.phone || slide.phone,
                                        image: saved.image || slide.image,
                                        elementTransforms: saved.elementTransforms || slide.elementTransforms || {} // Kayıtlı pozisyonlar
                                    };
                                }
                                return slide;
                            }
                        }["PostFactoryPage.useEffect"]);
                    }
                } catch (e) {
                    console.error("Local storage yüklenemedi:", e);
                }
            }
            // State'i başlat
            setState({
                slides: initialSlides,
                activeSlideId: initialSlides[0].id
            });
            // Yükleme tamamlandı işaretini bir sonraki döngüye bırakarak race condition'ı önle
            setTimeout({
                "PostFactoryPage.useEffect": ()=>{
                    isLoaded.current = true;
                }
            }["PostFactoryPage.useEffect"], 100);
        }
    }["PostFactoryPage.useEffect"], []);
    // Sadece görsel ayarları (Phone ve Image) kaydet, yazıları kaydetme
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostFactoryPage.useEffect": ()=>{
            if (!isLoaded.current) return;
            // Sadece id, phone ve image verilerini filtrele
            const overrides = slides.map({
                "PostFactoryPage.useEffect.overrides": (s)=>({
                        id: s.id,
                        phone: s.phone,
                        image: s.image,
                        elementTransforms: s.elementTransforms || {}
                    })
            }["PostFactoryPage.useEffect.overrides"]);
            localStorage.setItem('kidsai-post-creator-v1', JSON.stringify({
                overrides
            }));
        }
    }["PostFactoryPage.useEffect"], [
        slides
    ]);
    // AI Generate Handler
    const handleAiGenerate = async ()=>{
        if (!prompt.trim()) return;
        setIsGenerating(true);
        try {
            const newSlide = await generateSlideWithAI(prompt);
            if (!newSlide.elementTransforms) newSlide.elementTransforms = {}; // Yeni slayt için pozisyon verisini başlat
            // Mevcut slaytların üzerine yenisini ekle
            const currentSlides = useEditorStore.getState().slides;
            setState({
                slides: [
                    ...currentSlides,
                    newSlide
                ],
                activeSlideId: newSlide.id // Yeni slaytı seç
            });
            setShowAiModal(false); // Modalı kapat
            setPrompt('');
        } catch (error) {
            console.error("AI Generation Failed:", error);
        } finally{
            setIsGenerating(false);
        }
    };
    // Eleman güncelleme (Metin veya Pozisyon)
    const handleElementUpdate = (slideId, elementId, newText, newTransform)=>{
        const currentSlides = useEditorStore.getState().slides;
        const updatedSlides = currentSlides.map((slide)=>{
            if (slide.id === slideId) {
                const updatedContent = newText ? {
                    ...slide.content,
                    [activeLanguage]: {
                        ...slide.content[activeLanguage],
                        [elementId]: newText
                    }
                } : slide.content;
                const updatedTransforms = {
                    ...slide.elementTransforms,
                    [elementId]: newTransform
                };
                return {
                    ...slide,
                    content: updatedContent,
                    elementTransforms: updatedTransforms
                };
            }
            return slide;
        });
        setState({
            slides: updatedSlides
        });
    };
    // --- İNDİRME FONKSİYONLARI ---
    // Tekil İndirme (Aktif Slayt)
    const handleDownloadCurrent = async ()=>{
        if (isExporting || !activeSlideId) return;
        setIsExporting(true);
        setExportSlideId(activeSlideId); // Gizli container'a aktif slaytı yükle
        // Render olması için kısa bir süre bekle
        setTimeout(async ()=>{
            if (exportRef.current) {
                try {
                    // 2x Pixel Ratio ile yüksek kalite çıktı al
                    const dataUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPng"])(exportRef.current, {
                        quality: 0.95,
                        pixelRatio: 2,
                        cacheBust: true,
                        skipAutoScale: true
                    });
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAs"])(dataUrl, "kidsai-".concat(activeSlideId, "-").concat(activeLanguage, ".png"));
                } catch (err) {
                    console.error("Export hatası:", err);
                    alert("Görsel oluşturulurken bir hata oluştu.");
                }
            }
            setExportSlideId(null);
            setIsExporting(false);
        }, 500);
    };
    // Aktif Slayt - Tüm Diller (ZIP)
    const handleDownloadCurrentAllLanguages = async ()=>{
        if (isExporting || !activeSlideId) return;
        setIsExporting(true);
        const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        const languages = [
            'tr',
            'en',
            'de',
            'es',
            'fr',
            'ja',
            'ko',
            'ar'
        ];
        try {
            for (const lang of languages){
                setExportLanguage(lang);
                setExportSlideId(activeSlideId);
                // Render bekleme
                await new Promise((resolve)=>setTimeout(resolve, 500));
                if (exportRef.current) {
                    try {
                        const dataUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPng"])(exportRef.current, {
                            quality: 0.95,
                            pixelRatio: 2,
                            cacheBust: true,
                            skipAutoScale: true
                        });
                        const base64Data = dataUrl.replace(/^data:image\/png;base64,/, "");
                        zip.file("".concat(activeSlideId, "-").concat(lang, ".png"), base64Data, {
                            base64: true
                        });
                    } catch (innerErr) {
                        console.error("Render hatası (".concat(lang, "):"), innerErr);
                    }
                }
            }
            const content = await zip.generateAsync({
                type: "blob"
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAs"])(content, "kidsai-".concat(activeSlideId, "-all-languages.zip"));
        } catch (err) {
            console.error("Export hatası:", err);
            alert("İşlem sırasında bir hata oluştu.");
        } finally{
            setExportSlideId(null);
            setExportLanguage(null);
            setIsExporting(false);
        }
    };
    // Toplu İndirme (Tüm Diller ve Slaytlar - ZIP)
    const handleDownloadAll = async ()=>{
        if (isExporting) return;
        setIsExporting(true);
        const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        const languages = [
            'tr',
            'en',
            'de',
            'es',
            'fr',
            'ja',
            'ko',
            'ar'
        ]; // Tüm diller
        try {
            // 1. Dilleri Dolaş
            for (const lang of languages){
                setExportLanguage(lang);
                // 2. Slaytları Dolaş
                for (const slide of slides){
                    setExportSlideId(slide.id);
                    // Render olması için bekle (Görsellerin ve fontların yüklenmesi için)
                    await new Promise((resolve)=>setTimeout(resolve, 500));
                    if (exportRef.current) {
                        try {
                            var // Klasör yapısı: tr/slide-1.png
                            _zip_folder;
                            const dataUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPng"])(exportRef.current, {
                                quality: 0.95,
                                pixelRatio: 2,
                                cacheBust: true,
                                skipAutoScale: true
                            });
                            const base64Data = dataUrl.replace(/^data:image\/png;base64,/, "");
                            (_zip_folder = zip.folder(lang)) === null || _zip_folder === void 0 ? void 0 : _zip_folder.file("".concat(slide.id, ".png"), base64Data, {
                                base64: true
                            });
                        } catch (innerErr) {
                            console.error("Slayt hatası (".concat(lang, " - ").concat(slide.id, "):"), innerErr);
                        }
                    }
                }
            }
            const content = await zip.generateAsync({
                type: "blob"
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAs"])(content, "kidsai-complete-set.zip");
        } catch (err) {
            console.error("Genel export hatası:", err);
            alert("Toplu indirme sırasında bir hata oluştu.");
        } finally{
            setExportSlideId(null);
            setExportLanguage(null);
            setIsExporting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full h-screen bg-slate-50 overflow-hidden font-sans text-slate-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-24 bg-white border-r border-slate-200 flex flex-col items-center py-4 gap-4 z-20 overflow-y-auto custom-scrollbar",
                children: [
                    slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>selectSlide(slide.id),
                            className: "w-16 h-16 rounded-xl border-2 transition-all overflow-hidden relative shrink-0 ".concat(activeSlideId === slide.id ? 'border-blue-600 ring-2 ring-blue-100 scale-105' : 'border-slate-200 hover:border-slate-400'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 scale-[0.15] origin-top-left w-[1080px] h-[1350px] pointer-events-none bg-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SlideRenderer, {
                                        data: slide,
                                        lang: activeLanguage,
                                        isInteractive: false
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 531,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 530,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 right-0 bg-black text-white text-[10px] px-1 font-bold",
                                    children: index + 1
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 533,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, slide.id, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 522,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowAiModal(true),
                        className: "w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 shrink-0 transition-colors",
                        title: "Yeni Slayt Ekle",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 542,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 537,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto flex flex-col gap-3 pb-6 border-t border-slate-200 pt-4 w-full items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDownloadCurrent,
                                disabled: isExporting,
                                className: "w-12 h-12 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-600 flex items-center justify-center text-slate-600 transition-all shadow-sm group relative",
                                title: "Şu anki slaytı indir (".concat(activeLanguage.toUpperCase(), ")"),
                                children: [
                                    isExporting && exportSlideId === activeSlideId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "animate-spin",
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 553,
                                        columnNumber: 67
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 553,
                                        columnNumber: 116
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-14 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50",
                                        children: [
                                            "PNG İndir (",
                                            activeLanguage.toUpperCase(),
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 554,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 547,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDownloadCurrentAllLanguages,
                                disabled: isExporting,
                                className: "w-12 h-12 rounded-xl bg-white border border-slate-200 hover:border-purple-400 hover:text-purple-600 flex items-center justify-center text-slate-600 transition-all shadow-sm group relative",
                                title: "Bu Slaytı Tüm Dillerde İndir (ZIP)",
                                children: [
                                    isExporting && exportSlideId === activeSlideId && exportLanguage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "animate-spin",
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 565,
                                        columnNumber: 85
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 565,
                                        columnNumber: 134
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-14 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50",
                                        children: "Bu Slayt (Tüm Diller ZIP)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 566,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 559,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDownloadAll,
                                disabled: isExporting,
                                className: "w-12 h-12 rounded-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-all shadow-md group relative",
                                title: "Tüm Dilleri ve Slaytları İndir (ZIP)",
                                children: [
                                    isExporting && exportSlideId !== activeSlideId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "animate-spin",
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 577,
                                        columnNumber: 67
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 577,
                                        columnNumber: 116
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-14 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50",
                                        children: "Tüm Diller ZIP"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 578,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 571,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 546,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 520,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 bg-slate-100 flex items-center justify-center p-8 overflow-hidden relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.05] pointer-events-none",
                        style: {
                            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 588,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full flex items-center justify-center overflow-auto",
                        children: activeSlideId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "transform scale-[0.65] shadow-2xl shadow-slate-300 border border-slate-200 transition-all duration-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SlideRenderer, {
                                data: slides.find((s)=>s.id === activeSlideId),
                                lang: activeLanguage,
                                isInteractive: true,
                                onElementUpdate: (elId, txt, trans)=>handleElementUpdate(activeSlideId, elId, txt, trans)
                            }, activeSlideId, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 594,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 593,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 591,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 586,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-20 shadow-xl relative h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$EditorPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorPanel"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 608,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 607,
                columnNumber: 7
            }, this),
            showAiModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowAiModal(false),
                            className: "absolute top-4 right-4 text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1 rounded-full transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 621,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 617,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 flex flex-col items-center text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200 ring-4 ring-blue-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 32
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 626,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 625,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-slate-800 mb-2",
                                    children: "AI Post Oluşturucu"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 629,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 mb-8 text-sm leading-relaxed",
                                    children: "Hayalindeki tasarımı anlat, yapay zeka senin için 7 dilde, görselleri ve yerleşimiyle birlikte hazırlasın."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 630,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full relative mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: prompt,
                                            onChange: (e)=>setPrompt(e.target.value),
                                            placeholder: "Örn: Çocuklar için orman hayvanlarını tanıtan, yeşil temalı, eğlenceli bir kart hazırla...",
                                            className: "w-full h-32 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none text-slate-700 placeholder:text-slate-400 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 635,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-3 right-3 text-[10px] text-slate-400 font-medium uppercase tracking-wider",
                                            children: "AI Powered"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 641,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 634,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAiGenerate,
                                    disabled: isGenerating || !prompt.trim(),
                                    className: "w-full py-4 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200",
                                    children: isGenerating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "animate-spin",
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 651,
                                                columnNumber: 21
                                            }, this),
                                            "Sihir Yapılıyor..."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 656,
                                                columnNumber: 21
                                            }, this),
                                            "Tasarımı Oluştur"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 644,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 624,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 614,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 613,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-[-9999px] top-0 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: exportRef,
                    className: "w-[1080px] h-[1350px]",
                    children: exportSlideId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SlideRenderer, {
                        data: slides.find((s)=>s.id === exportSlideId),
                        lang: exportLanguage || activeLanguage,
                        isInteractive: false
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 671,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 669,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 668,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 517,
        columnNumber: 5
    }, this);
}
_s(PostFactoryPage, "QZA5A8ErcsE8s8etfsWesM9qZlA=", false, function() {
    return [
        useEditorStore
    ];
});
_c = PostFactoryPage;
var _c;
__turbopack_context__.k.register(_c, "PostFactoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_f270c4ff._.js.map