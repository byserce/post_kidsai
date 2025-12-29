(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/core/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/core/types.ts
__turbopack_context__.s([
    "DEFAULT_TRANSFORM",
    ()=>DEFAULT_TRANSFORM
]);
const DEFAULT_TRANSFORM = {
    x: 0,
    y: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/core/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/core/store.ts
__turbopack_context__.s([
    "useEditorStore",
    ()=>useEditorStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>"); // npm install uuid types-uuid
;
;
;
const useEditorStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        activeLanguage: 'tr',
        slides: [],
        activeSlideId: null,
        setLanguage: (lang)=>set({
                activeLanguage: lang
            }),
        addSlide: (layoutId)=>set((state)=>{
                const newSlide = {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                    layoutId,
                    themeColor: 'blue',
                    phone: {
                        style: 'iphone-14',
                        transform: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TRANSFORM"],
                            scale: 0.8
                        }
                    },
                    image: {
                        url: null,
                        fit: 'cover',
                        transform: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TRANSFORM"]
                        }
                    },
                    content: {
                        tr: {
                            title: 'Yeni Başlık',
                            subtitle: 'Alt Başlık',
                            cta: 'İncele'
                        },
                        en: {
                            title: 'New Title',
                            subtitle: 'Subtitle',
                            cta: 'Check it'
                        },
                        de: {
                            title: 'Titel',
                            subtitle: 'Untertitel',
                            cta: 'Prüfen'
                        },
                        es: {
                            title: 'Título',
                            subtitle: 'Subtítulo',
                            cta: 'Ver'
                        }
                    }
                };
                return {
                    slides: [
                        ...state.slides,
                        newSlide
                    ],
                    activeSlideId: newSlide.id
                };
            }),
        selectSlide: (id)=>set({
                activeSlideId: id
            }),
        setSlides: (slides)=>set({
                slides,
                activeSlideId: slides.length > 0 ? slides[0].id : null
            }),
        updateSlide: (id, updater)=>set((state)=>({
                    slides: state.slides.map((s)=>s.id === id ? {
                            ...s,
                            ...typeof updater === 'function' ? updater(s) : updater
                        } : s)
                })),
        updatePhoneTransform: (id, updates)=>set((state)=>({
                    slides: state.slides.map((s)=>s.id === id ? {
                            ...s,
                            phone: {
                                ...s.phone,
                                transform: {
                                    ...s.phone.transform,
                                    ...updates
                                }
                            }
                        } : s)
                })),
        updateImageTransform: (id, updates)=>set((state)=>({
                    slides: state.slides.map((s)=>s.id === id ? {
                            ...s,
                            image: {
                                ...s.image,
                                transform: {
                                    ...s.image.transform,
                                    ...updates
                                }
                            }
                        } : s)
                })),
        updateContent: (id, field, value)=>set((state)=>({
                    slides: state.slides.map((s)=>{
                        if (s.id !== id) return s;
                        return {
                            ...s,
                            content: {
                                ...s.content,
                                [state.activeLanguage]: {
                                    ...s.content[state.activeLanguage],
                                    [field]: value
                                }
                            }
                        };
                    })
                }))
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/renderer/PhoneMockup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/renderer/PhoneMockup.tsx
__turbopack_context__.s([
    "PhoneMockup",
    ()=>PhoneMockup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const PhoneMockup = (param)=>{
    let { phone, image } = param;
    // Telefonun sahnedeki duruşu (3D)
    const phoneStyle = {
        transform: "\n      translateX(".concat(phone.transform.x, "px) \n      translateY(").concat(phone.transform.y, "px) \n      scale(").concat(phone.transform.scale, ") \n      rotateX(").concat(phone.transform.rotateX, "deg) \n      rotateY(").concat(phone.transform.rotateY, "deg) \n      rotateZ(").concat(phone.transform.rotateZ, "deg)\n    "),
        transition: 'transform 0.1s ease-out'
    };
    // İçerideki resmin duruşu
    const imageStyle = {
        objectFit: image.fit,
        transform: "\n      translateX(".concat(image.transform.x, "%) \n      translateY(").concat(image.transform.y, "%) \n      scale(").concat(image.transform.scale, ") \n      rotate(").concat(image.transform.rotateZ, "deg)\n    ")
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute z-10 w-[300px] h-[600px] bg-white rounded-[40px] shadow-2xl border-[12px] border-slate-900 overflow-hidden",
        style: phoneStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-20"
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/PhoneMockup.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full bg-slate-100 relative overflow-hidden",
                children: image.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: image.url,
                    className: "w-full h-full origin-center",
                    style: imageStyle
                }, void 0, false, {
                    fileName: "[project]/src/components/renderer/PhoneMockup.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center text-slate-300",
                    children: "Resim Yok"
                }, void 0, false, {
                    fileName: "[project]/src/components/renderer/PhoneMockup.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/PhoneMockup.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/renderer/PhoneMockup.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PhoneMockup;
var _c;
__turbopack_context__.k.register(_c, "PhoneMockup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/renderer/EditableElement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditableElement",
    ()=>EditableElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const EditableElement = (param)=>{
    let { id, text, transform = {
        x: 0,
        y: 0
    }, isInteractive = false, onUpdate, className = '', tagName: Tag = 'div', scale = 1, children } = param;
    _s();
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(transform);
    const dragStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    // Dışarıdan gelen transform değişirse güncelle
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditableElement.useEffect": ()=>{
            setPos(transform);
        }
    }["EditableElement.useEffect"], [
        transform.x,
        transform.y
    ]);
    const handleMouseDown = (e)=>{
        if (!isInteractive) return;
        e.stopPropagation(); // Parent eventleri engelle
        setIsDragging(true);
        dragStart.current = {
            x: e.clientX - pos.x * scale,
            y: e.clientY - pos.y * scale
        };
    };
    const handleMouseMove = (e)=>{
        if (!isDragging) return;
        const newX = (e.clientX - dragStart.current.x) / scale;
        const newY = (e.clientY - dragStart.current.y) / scale;
        setPos({
            x: newX,
            y: newY
        });
    };
    const handleMouseUp = ()=>{
        if (!isDragging) return;
        setIsDragging(false);
        if (onUpdate) {
            onUpdate(id, text, pos);
        }
    };
    // Global mouse eventleri
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditableElement.useEffect": ()=>{
            if (isDragging) {
                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('mouseup', handleMouseUp);
            } else {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
            }
            return ({
                "EditableElement.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('mouseup', handleMouseUp);
                }
            })["EditableElement.useEffect"];
        }
    }["EditableElement.useEffect"], [
        isDragging
    ]);
    // Çift tıklama ile metin düzenleme
    const handleDoubleClick = (e)=>{
        if (!isInteractive || !text || !onUpdate) return;
        e.stopPropagation();
        const newText = window.prompt("Metni Düzenle:", text);
        if (newText !== null) {
            onUpdate(id, newText, pos);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        className: "".concat(className, " ").concat(isInteractive ? 'cursor-move hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed relative z-50' : ''),
        style: {
            transform: "translate(".concat(pos.x, "px, ").concat(pos.y, "px)"),
            transition: isDragging ? 'none' : 'transform 0.2s',
            userSelect: 'none'
        },
        onMouseDown: handleMouseDown,
        onDoubleClick: handleDoubleClick,
        children: children || text
    }, void 0, false, {
        fileName: "[project]/src/components/renderer/EditableElement.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EditableElement, "rQR7gkE3Ycph+jtzETUGhw2XZHw=");
_c = EditableElement;
var _c;
__turbopack_context__.k.register(_c, "EditableElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/renderer/layouts/LayoutHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/renderer/layouts/LayoutHero.tsx
__turbopack_context__.s([
    "LayoutHero",
    ()=>LayoutHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$PhoneMockup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/PhoneMockup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/EditableElement.tsx [app-client] (ecmascript)");
;
;
;
;
const LayoutHero = (param)=>{
    let { data, lang, isInteractive, onUpdate } = param;
    var _decorations;
    // Fallback: Seçili dil yoksa -> İngilizce -> İlk mevcut dil
    const content = data.content[lang] || data.content['en'] || Object.values(data.content)[0];
    if (!content) return null;
    const transforms = data.elementTransforms || {};
    // Renk haritası: Arka plan, metin ve vurgu renkleri
    const colorMap = {
        blue: {
            bg: 'bg-blue-50',
            text: 'text-blue-900',
            accent: 'bg-blue-500',
            blob: 'bg-blue-200',
            title: 'text-blue-500'
        },
        indigo: {
            bg: 'bg-indigo-50',
            text: 'text-indigo-900',
            accent: 'bg-indigo-500',
            blob: 'bg-purple-200',
            title: 'text-indigo-500'
        },
        purple: {
            bg: 'bg-purple-50',
            text: 'text-purple-900',
            accent: 'bg-purple-500',
            blob: 'bg-pink-200',
            title: 'text-purple-500'
        },
        rose: {
            bg: 'bg-rose-50',
            text: 'text-rose-900',
            accent: 'bg-rose-500',
            blob: 'bg-orange-200',
            title: 'text-rose-500'
        },
        emerald: {
            bg: 'bg-emerald-50',
            text: 'text-emerald-900',
            accent: 'bg-emerald-500',
            blob: 'bg-teal-200',
            title: 'text-emerald-500'
        },
        yellow: {
            bg: 'bg-yellow-50',
            text: 'text-yellow-900',
            accent: 'bg-yellow-500',
            blob: 'bg-orange-200',
            title: 'text-orange-500'
        },
        cyan: {
            bg: 'bg-cyan-50',
            text: 'text-cyan-900',
            accent: 'bg-cyan-500',
            blob: 'bg-blue-200',
            title: 'text-cyan-600'
        }
    };
    // AI tarafından üretilen özel tema varsa onu kullan, yoksa haritadan seç
    const theme = data.customTheme || colorMap[data.themeColor] || colorMap.cyan;
    // İkon Haritası
    const IconMap = {
        star: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
        cloud: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
        sparkle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        camera: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
        zap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        circle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"],
        blob: (param)=>{
            let { className } = param;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-full mix-blend-multiply filter ".concat(className)
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                lineNumber: 35,
                columnNumber: 35
            }, ("TURBOPACK compile-time value", void 0));
        }
    };
    // Store Butonları (SVG) - Alt kısma taşındı
    const StoreButtons = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 justify-center w-full mt-auto pb-16 z-30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-900 text-white px-6 py-3 rounded-2xl border-4 border-white/40 flex items-center gap-3 shadow-2xl cursor-pointer hover:scale-105 transition-transform",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 384 512",
                            fill: "currentColor",
                            className: "w-8 h-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                                lineNumber: 43,
                                columnNumber: 80
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-start leading-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] uppercase opacity-80 font-bold",
                                    children: "Download on the"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                                    lineNumber: 45,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-black tracking-wide",
                                    children: "App Store"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-900 text-white px-6 py-3 rounded-2xl border-4 border-white/40 flex items-center gap-3 shadow-2xl cursor-pointer hover:scale-105 transition-transform",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 512 512",
                            fill: "currentColor",
                            className: "w-8 h-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                                lineNumber: 51,
                                columnNumber: 80
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-start leading-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] uppercase opacity-80 font-bold",
                                    children: "Get it on"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-black tracking-wide",
                                    children: "Google Play"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
            lineNumber: 40,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative overflow-hidden flex flex-col items-center ".concat(theme.bg),
        children: [
            (_decorations = data.decorations) === null || _decorations === void 0 ? void 0 : _decorations.map((dec, i)=>{
                const IconComponent = IconMap[dec.type] || IconMap.circle;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                    className: dec.className,
                    fill: "currentColor"
                }, i, false, {
                    fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                    lineNumber: 68,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-20 flex flex-col items-center w-full h-full pt-20 px-8 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                                id: "subtitle",
                                text: content.subtitle,
                                transform: transforms.subtitle,
                                isInteractive: isInteractive,
                                onUpdate: onUpdate,
                                scale: 0.65,
                                className: "transform -rotate-2 z-30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-8 py-3 rounded-full text-2xl font-black shadow-[0_6px_0_rgba(0,0,0,0.1)] border-[5px] border-white uppercase tracking-widest bg-white ".concat(theme.title, " font-[var(--font-fredoka)] flex items-center gap-3"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            size: 28,
                                            fill: "currentColor",
                                            className: "text-yellow-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                                            lineNumber: 83,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        content.subtitle,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            size: 28,
                                            fill: "currentColor",
                                            className: "text-yellow-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                                            lineNumber: 85,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                                id: "title",
                                text: content.title,
                                transform: transforms.title,
                                isInteractive: isInteractive,
                                onUpdate: onUpdate,
                                scale: 0.65,
                                tagName: "h1",
                                className: "text-[110px] font-[var(--font-luckiest)] ".concat(theme.title, " leading-[0.9] text-center drop-shadow-xl stroke-white z-30"),
                                children: content.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                                id: "description",
                                text: content.description,
                                transform: transforms.description,
                                isInteractive: isInteractive,
                                onUpdate: onUpdate,
                                scale: 0.65,
                                className: "z-30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/90 backdrop-blur-md px-8 py-4 rounded-3xl border-4 border-white/60 shadow-lg max-w-3xl transform rotate-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-slate-700 text-center font-[var(--font-fredoka)] leading-relaxed",
                                        children: content.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                                        lineNumber: 95,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 w-full relative flex items-center justify-center perspective-1000 -mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 transform scale-110",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$PhoneMockup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneMockup"], {
                                    phone: data.phone,
                                    image: data.image
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                                lineNumber: 104,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/60 rounded-full blur-[100px] -z-10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                                lineNumber: 108,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StoreButtons, {}, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/renderer/layouts/LayoutHero.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LayoutHero;
var _c;
__turbopack_context__.k.register(_c, "LayoutHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/renderer/layouts/LayoutSplit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/renderer/layouts/LayoutSplit.tsx
__turbopack_context__.s([
    "LayoutSplit",
    ()=>LayoutSplit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$PhoneMockup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/PhoneMockup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/EditableElement.tsx [app-client] (ecmascript)");
;
;
;
;
const LayoutSplit = (param)=>{
    let { data, lang, isInteractive, onUpdate } = param;
    // Fallback: Seçili dil yoksa -> İngilizce -> İlk mevcut dil
    const content = data.content[lang] || data.content['en'] || Object.values(data.content)[0];
    if (!content) return null;
    const transforms = data.elementTransforms || {};
    // Tema rengine göre CANLI arka plan (Flutter app tarzı)
    const bgColors = {
        blue: 'bg-blue-400',
        indigo: 'bg-indigo-400',
        purple: 'bg-purple-400',
        rose: 'bg-rose-400',
        emerald: 'bg-emerald-400',
        yellow: 'bg-yellow-400',
        cyan: 'bg-cyan-400'
    };
    const bgClass = bgColors[data.themeColor] || 'bg-slate-700';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative overflow-hidden flex ".concat(bgClass, " text-white transition-colors duration-300"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-20",
                style: {
                    backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2.5px)',
                    backgroundSize: '30px 30px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/2 h-full flex flex-col justify-center p-16 z-20 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/10 backdrop-blur-sm border-4 border-white/40 rounded-[40px] p-10 shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-white mb-6 font-bold text-sm uppercase tracking-widest bg-black/20 w-max px-4 py-2 rounded-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "%100 Güvenli & Reklamsız"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                            lineNumber: 39,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                            id: "subtitle",
                            text: content.subtitle,
                            transform: transforms.subtitle,
                            isInteractive: isInteractive,
                            onUpdate: onUpdate,
                            scale: 0.65,
                            tagName: "h2",
                            className: "text-white/90 font-bold text-2xl mb-2 tracking-wide font-[var(--font-fredoka)] uppercase opacity-80",
                            children: content.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                            lineNumber: 44,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                            id: "title",
                            text: content.title,
                            transform: transforms.title,
                            isInteractive: isInteractive,
                            onUpdate: onUpdate,
                            scale: 0.65,
                            tagName: "h1",
                            className: "text-6xl font-[var(--font-luckiest)] mb-6 leading-tight drop-shadow-lg",
                            children: content.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                            lineNumber: 47,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                            id: "description",
                            text: content.description,
                            transform: transforms.description,
                            isInteractive: isInteractive,
                            onUpdate: onUpdate,
                            scale: 0.65,
                            tagName: "p",
                            className: "text-xl text-white/90 mb-8 font-[var(--font-fredoka)] leading-relaxed",
                            children: content.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                            lineNumber: 51,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 mb-8",
                            children: [
                                'Pedagog Onaylı',
                                'Çevrimdışı Mod',
                                'Ebeveyn Kontrolü'
                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 text-white font-bold font-[var(--font-fredoka)] text-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-full p-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "text-green-500",
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                                                lineNumber: 59,
                                                columnNumber: 64
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                                            lineNumber: 59,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        item
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                            lineNumber: 56,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                                    id: "cta",
                                    text: content.cta,
                                    transform: transforms.cta,
                                    isInteractive: isInteractive,
                                    onUpdate: onUpdate,
                                    scale: 0.65,
                                    className: "bg-white text-slate-900 px-8 py-4 rounded-2xl text-2xl font-black shadow-[0_6px_0_rgba(0,0,0,0.1)] border-b-4 border-slate-200 w-max font-[var(--font-fredoka)] transform transition hover:scale-105 cursor-pointer flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"], {
                                            size: 28,
                                            className: "text-purple-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        content.cta
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 opacity-80",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-white/20 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 384 512",
                                                fill: "currentColor",
                                                className: "w-4 h-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 168
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                                                lineNumber: 72,
                                                columnNumber: 101
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                                            lineNumber: 72,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-white/20 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 512 512",
                                                fill: "currentColor",
                                                className: "w-4 h-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 168
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                                                lineNumber: 73,
                                                columnNumber: 101
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                                            lineNumber: 73,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                            lineNumber: 65,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/2 h-full relative flex items-center justify-center",
                style: {
                    perspective: '1200px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                        lineNumber: 82,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$PhoneMockup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneMockup"], {
                            phone: data.phone,
                            image: data.image
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                            lineNumber: 85,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                        lineNumber: 84,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/renderer/layouts/LayoutSplit.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LayoutSplit;
var _c;
__turbopack_context__.k.register(_c, "LayoutSplit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/renderer/layouts/secondpage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/renderer/layouts/secondpage.tsx
__turbopack_context__.s([
    "LayoutClassic",
    ()=>LayoutClassic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$PhoneMockup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/PhoneMockup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$face$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanFace$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scan-face.js [app-client] (ecmascript) <export default as ScanFace>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/EditableElement.tsx [app-client] (ecmascript)");
;
;
;
;
const LayoutClassic = (param)=>{
    let { data, lang, isInteractive, onUpdate } = param;
    // Fallback content
    const content = data.content[lang] || data.content['en'] || Object.values(data.content)[0];
    if (!content) return null;
    const transforms = data.elementTransforms || {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative overflow-hidden flex flex-col bg-[#FFF0F5] text-slate-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-10",
                style: {
                    backgroundImage: 'radial-gradient(#FF69B4 3px, transparent 3px)',
                    backgroundSize: '40px 40px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-20 -right-20 w-[600px] h-[600px] bg-pink-200 rounded-full blur-3xl opacity-50"
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-200 rounded-full blur-3xl opacity-50"
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-20 pt-24 px-12 text-center flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                        id: "subtitle",
                        text: content.subtitle,
                        transform: transforms.subtitle,
                        isInteractive: isInteractive,
                        onUpdate: onUpdate,
                        scale: 0.65,
                        className: "z-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-3 bg-white border-4 border-pink-300 px-8 py-3 rounded-full shadow-xl mb-8 transform -rotate-2 hover:scale-105 transition-transform",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                    className: "text-pink-500",
                                    size: 36
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-3xl font-black text-pink-500 uppercase tracking-widest font-[var(--font-fredoka)]",
                                    children: content.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                            lineNumber: 27,
                            columnNumber: 10
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                        id: "title",
                        text: content.title,
                        transform: transforms.title,
                        isInteractive: isInteractive,
                        onUpdate: onUpdate,
                        scale: 0.65,
                        tagName: "h1",
                        className: "text-[100px] font-[var(--font-luckiest)] text-slate-800 leading-none drop-shadow-2xl mb-6 stroke-white z-30",
                        children: content.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center relative z-20 px-10 -mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-12 -mt-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$face$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanFace$3e$__["ScanFace"], {
                                    size: 48
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                                    lineNumber: 45,
                                    columnNumber: 32
                                }, void 0),
                                text: "AI Tanıma",
                                color: "bg-purple-100 text-purple-600",
                                rotate: "-rotate-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                    size: 48
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                                    lineNumber: 46,
                                    columnNumber: 32
                                }, void 0),
                                text: "İnternetsiz",
                                color: "bg-blue-100 text-blue-600",
                                rotate: "rotate-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-16 relative transform scale-110",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-pink-400 rounded-full blur-[100px] opacity-30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$PhoneMockup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneMockup"], {
                                phone: data.phone,
                                image: data.image
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "absolute -top-10 -right-10 text-yellow-400 w-16 h-16"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-12 -mt-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                    size: 48
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                                    lineNumber: 60,
                                    columnNumber: 33
                                }, void 0),
                                text: "Sesli İsim",
                                color: "bg-orange-100 text-orange-600",
                                rotate: "rotate-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                                lineNumber: 60,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-56 h-32 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/50 p-4 rounded-full border-4 border-white/50 rotate-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl",
                                        children: "📸"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                                        lineNumber: 64,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                                lineNumber: 61,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-20 pb-24 px-16 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                    id: "description",
                    text: content.description,
                    transform: transforms.description,
                    isInteractive: isInteractive,
                    onUpdate: onUpdate,
                    scale: 0.65,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/90 backdrop-blur-md border-[6px] border-white rounded-[40px] p-8 shadow-2xl max-w-4xl mx-auto transform rotate-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-slate-600 font-[var(--font-fredoka)] leading-relaxed mb-8",
                                children: content.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                                lineNumber: 74,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                                id: "cta",
                                text: content.cta,
                                transform: transforms.cta,
                                isInteractive: isInteractive,
                                onUpdate: onUpdate,
                                scale: 0.65,
                                className: "inline-block bg-pink-500 text-white text-4xl font-black py-5 px-16 rounded-3xl shadow-[0_8px_0_#C2185B] transform hover:-translate-y-1 hover:shadow-[0_10px_0_#C2185B] transition-all font-[var(--font-luckiest)] cursor-pointer",
                                children: content.cta
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                                lineNumber: 77,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                    lineNumber: 72,
                    columnNumber: 10
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LayoutClassic;
const FeatureCard = (param)=>{
    let { icon, text, color, rotate } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-4 p-6 rounded-[32px] border-[5px] border-white shadow-xl ".concat(color, " ").concat(rotate, " transition-transform hover:scale-110 w-56"),
        children: [
            icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl font-bold font-[var(--font-fredoka)] text-center leading-tight",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/renderer/layouts/secondpage.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = FeatureCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "LayoutClassic");
__turbopack_context__.k.register(_c1, "FeatureCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/renderer/layouts/thirdpage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/renderer/layouts/thirdpage.tsx
__turbopack_context__.s([
    "LayoutSmart",
    ()=>LayoutSmart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$PhoneMockup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/PhoneMockup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-client] (ecmascript) <export default as BrainCircuit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-client] (ecmascript) <export default as Wand2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/EditableElement.tsx [app-client] (ecmascript)");
;
;
;
;
const LayoutSmart = (param)=>{
    let { data, lang, isInteractive, onUpdate } = param;
    const content = data.content[lang] || data.content['en'] || Object.values(data.content)[0];
    if (!content) return null;
    const transforms = data.elementTransforms || {};
    // Dinamik Balon İçerikleri
    const b1Title = content.bubble_1_title || "AI Analiz";
    const b1Main = content.bubble_1_main || "Bu bir Kedi! 🐱";
    const b1Sub = content.bubble_1_sub || "Yumuşak tüyleri vardır ve mırıldanır.";
    const b2Title = content.bubble_2_title || "Öğrenme Modu";
    const b2Main = content.bubble_2_main || "This is a Cat! 🐱";
    const b2Sub = content.bubble_2_sub || "It has soft fur and purrs.";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative overflow-hidden flex flex-col bg-[#F3E5F5] text-slate-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-10",
                style: {
                    backgroundImage: 'radial-gradient(#9C27B0 3px, transparent 3px)',
                    backgroundSize: '40px 40px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                lineNumber: 24,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-40 -left-40 w-[700px] h-[700px] bg-purple-200 rounded-full blur-3xl opacity-50"
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                lineNumber: 28,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-200 rounded-full blur-3xl opacity-50"
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                lineNumber: 29,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-20 pt-20 px-12 text-center flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                        id: "subtitle",
                        text: content.subtitle,
                        transform: transforms.subtitle,
                        isInteractive: isInteractive,
                        onUpdate: onUpdate,
                        scale: 0.65,
                        className: "z-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-3 bg-white border-4 border-purple-300 px-8 py-3 rounded-full shadow-xl mb-6 transform rotate-2 hover:scale-105 transition-transform",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__["Wand2"], {
                                    className: "text-purple-500",
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl font-black text-purple-500 uppercase tracking-widest font-[var(--font-fredoka)]",
                                    children: content.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                        id: "title",
                        text: content.title,
                        transform: transforms.title,
                        isInteractive: isInteractive,
                        onUpdate: onUpdate,
                        scale: 0.65,
                        tagName: "h1",
                        className: "text-[90px] font-[var(--font-luckiest)] text-slate-800 leading-none drop-shadow-2xl mb-4 stroke-white z-30",
                        children: content.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                lineNumber: 32,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center relative z-20 -mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-12 top-1/4 z-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-[32px] rounded-tr-none border-[5px] border-purple-400 shadow-xl max-w-[300px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                            className: "text-purple-500",
                                            size: 32
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                            lineNumber: 53,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-black text-purple-400 text-sm uppercase",
                                            children: b1Title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                            lineNumber: 54,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                    lineNumber: 52,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-[var(--font-fredoka)] text-xl font-bold text-slate-700 leading-tight",
                                    children: [
                                        '"',
                                        b1Main,
                                        '"',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                            lineNumber: 57,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-purple-500 text-base",
                                            children: b1Sub
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                            lineNumber: 57,
                                            columnNumber: 38
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                    lineNumber: 56,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                            lineNumber: 51,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative transform scale-110 z-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-purple-500 rounded-full blur-[90px] opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$PhoneMockup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneMockup"], {
                                phone: data.phone,
                                image: data.image
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "absolute -top-12 -left-12 text-yellow-400 w-20 h-20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                className: "absolute bottom-20 -right-10 text-purple-400 w-12 h-12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-12 bottom-1/3 z-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-[32px] rounded-tl-none border-[5px] border-indigo-400 shadow-xl max-w-[300px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"], {
                                            className: "text-indigo-500",
                                            size: 32
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                            lineNumber: 74,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-black text-indigo-400 text-sm uppercase",
                                            children: b2Title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                            lineNumber: 75,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                    lineNumber: 73,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-[var(--font-fredoka)] text-xl font-bold text-slate-700 leading-tight",
                                    children: [
                                        '"',
                                        b2Main,
                                        '"',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                            lineNumber: 78,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-indigo-500 text-base",
                                            children: b2Sub
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                            lineNumber: 78,
                                            columnNumber: 38
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                    lineNumber: 77,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                            lineNumber: 72,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                lineNumber: 48,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-20 pb-16 px-16 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                        id: "description",
                        text: content.description,
                        transform: transforms.description,
                        isInteractive: isInteractive,
                        onUpdate: onUpdate,
                        scale: 0.65,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/80 backdrop-blur-md border-[5px] border-white rounded-[30px] p-6 shadow-xl max-w-4xl mx-auto transform -rotate-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-slate-600 font-[var(--font-fredoka)] leading-relaxed",
                                children: content.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                                lineNumber: 88,
                                columnNumber: 18
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                            lineNumber: 87,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                        lineNumber: 86,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                            id: "cta",
                            text: content.cta,
                            transform: transforms.cta,
                            isInteractive: isInteractive,
                            onUpdate: onUpdate,
                            scale: 0.65,
                            className: "inline-block bg-purple-600 text-white text-3xl font-black py-4 px-12 rounded-2xl shadow-[0_6px_0_#7B1FA2] transform hover:-translate-y-1 hover:shadow-[0_8px_0_#7B1FA2] transition-all font-[var(--font-luckiest)] cursor-pointer",
                            children: content.cta
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                            lineNumber: 94,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                        lineNumber: 93,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
                lineNumber: 85,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/renderer/layouts/thirdpage.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LayoutSmart;
var _c;
__turbopack_context__.k.register(_c, "LayoutSmart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/renderer/layouts/fourpage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/renderer/layouts/fourpage.tsx
__turbopack_context__.s([
    "LayoutGame",
    ()=>LayoutGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$PhoneMockup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/PhoneMockup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/medal.js [app-client] (ecmascript) <export default as Medal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/EditableElement.tsx [app-client] (ecmascript)");
;
;
;
;
const LayoutGame = (param)=>{
    let { data, lang, isInteractive, onUpdate } = param;
    const content = data.content[lang] || data.content['en'] || Object.values(data.content)[0];
    if (!content) return null;
    const transforms = data.elementTransforms || {};
    const t_mission = content.card_mission || "GÖREV";
    const t_action = content.card_action || "BUL & ÇEK";
    const t_win = content.card_win || "KAZAN";
    const t_reward = content.card_reward || "PUANLAR";
    const t_new = content.card_new || "YENİ!";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative overflow-hidden flex flex-col bg-[#FFF8E1] text-slate-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-10",
                style: {
                    backgroundImage: 'radial-gradient(#FF8F00 3px, transparent 3px)',
                    backgroundSize: '30px 30px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-32 -left-32 w-[600px] h-[600px] bg-orange-200 rounded-full blur-3xl opacity-60"
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 -right-40 w-[500px] h-[500px] bg-yellow-200 rounded-full blur-3xl opacity-60"
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-20 left-20 w-[400px] h-[400px] bg-red-100 rounded-full blur-3xl opacity-60"
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-20 pt-16 px-8 text-center flex flex-col items-center relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                        id: "subtitle",
                        text: content.subtitle,
                        transform: transforms.subtitle,
                        isInteractive: isInteractive,
                        onUpdate: onUpdate,
                        scale: 0.65,
                        className: "z-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-3 bg-white border-4 border-orange-400 px-8 py-3 rounded-full shadow-[0_8px_20px_rgba(255,167,38,0.3)] mb-6 transform -rotate-2 hover:scale-105 transition-transform",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"], {
                                    className: "text-orange-500",
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl font-black text-orange-500 uppercase tracking-widest font-[var(--font-fredoka)]",
                                    children: content.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                            lineNumber: 37,
                            columnNumber: 10
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                        id: "title",
                        text: content.title,
                        transform: transforms.title,
                        isInteractive: isInteractive,
                        onUpdate: onUpdate,
                        scale: 0.65,
                        tagName: "h1",
                        className: "text-[90px] font-[var(--font-luckiest)] text-slate-800 leading-none drop-shadow-2xl mb-2 stroke-white relative z-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                            className: "absolute -top-8 -right-12 text-yellow-400 fill-yellow-400 w-16 h-16"
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center relative z-20 -mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-12 top-1/4 z-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-5 rounded-[30px] rounded-br-none border-[5px] border-blue-400 shadow-xl transform -rotate-6 w-56 flex flex-col items-center group hover:scale-110 transition-transform",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-100 p-4 rounded-full mb-3 group-hover:rotate-12 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                        className: "text-blue-500",
                                        size: 40
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                                        lineNumber: 59,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                                    id: "card_mission",
                                    text: t_mission,
                                    transform: transforms.card_mission,
                                    isInteractive: isInteractive,
                                    onUpdate: onUpdate,
                                    scale: 0.65,
                                    className: "font-[var(--font-fredoka)] font-bold text-slate-500 text-sm uppercase tracking-wider"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                                    id: "card_action",
                                    text: t_action,
                                    transform: transforms.card_action,
                                    isInteractive: isInteractive,
                                    onUpdate: onUpdate,
                                    scale: 0.65,
                                    className: "font-[var(--font-luckiest)] text-blue-500 text-3xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                                    lineNumber: 62,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative transform scale-110 z-20 mx-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-orange-400 rounded-full blur-[90px] opacity-30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$PhoneMockup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneMockup"], {
                                phone: data.phone,
                                image: data.image
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "absolute top-10 -right-10 text-yellow-400 w-12 h-12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                className: "absolute bottom-20 -left-8 text-orange-500 fill-orange-500 w-10 h-10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-12 top-1/3 z-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-5 rounded-[30px] rounded-bl-none border-[5px] border-green-400 shadow-xl transform rotate-6 w-56 flex flex-col items-center group hover:scale-110 transition-transform",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-green-100 p-4 rounded-full mb-3 group-hover:-rotate-12 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                        className: "text-green-500 fill-green-500",
                                        size: 40
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                                        lineNumber: 82,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                                    id: "card_win",
                                    text: t_win,
                                    transform: transforms.card_win,
                                    isInteractive: isInteractive,
                                    onUpdate: onUpdate,
                                    scale: 0.65,
                                    className: "font-[var(--font-fredoka)] font-bold text-slate-500 text-sm uppercase tracking-wider"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                                    id: "card_reward",
                                    text: t_reward,
                                    transform: transforms.card_reward,
                                    isInteractive: isInteractive,
                                    onUpdate: onUpdate,
                                    scale: 0.65,
                                    className: "font-[var(--font-luckiest)] text-green-500 text-4xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                            lineNumber: 80,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-20 pb-16 px-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                        id: "description",
                        text: content.description,
                        transform: transforms.description,
                        isInteractive: isInteractive,
                        onUpdate: onUpdate,
                        scale: 0.65,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/80 backdrop-blur-md border-[6px] border-white rounded-[40px] p-6 shadow-xl max-w-4xl mx-auto transform -rotate-1 hover:rotate-0 transition-transform duration-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-slate-600 font-[var(--font-fredoka)] leading-relaxed",
                                children: content.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                                lineNumber: 96,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                        lineNumber: 94,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                            id: "cta",
                            text: content.cta,
                            transform: transforms.cta,
                            isInteractive: isInteractive,
                            onUpdate: onUpdate,
                            scale: 0.65,
                            tagName: "button",
                            className: "group relative inline-flex items-center justify-center gap-3 bg-gradient-to-b from-orange-400 to-orange-600 text-white text-3xl font-black py-5 px-16 rounded-3xl shadow-[0_8px_0_#E65100] hover:translate-y-1 hover:shadow-[0_4px_0_#E65100] transition-all font-[var(--font-luckiest)] uppercase tracking-wide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__["Medal"], {
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                content.cta,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12 border-2 border-white shadow-sm",
                                    children: t_new
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                        lineNumber: 103,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/renderer/layouts/fourpage.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LayoutGame;
var _c;
__turbopack_context__.k.register(_c, "LayoutGame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/renderer/layouts/fivepage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// c:\ata\ins_post_creator\post_kidsai\src\components\renderer\layouts\fivepage.tsx
__turbopack_context__.s([
    "LayoutHunt",
    ()=>LayoutHunt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$PhoneMockup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/PhoneMockup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/EditableElement.tsx [app-client] (ecmascript)");
;
;
;
;
const LayoutHunt = (param)=>{
    let { data, lang, isInteractive, onUpdate } = param;
    const content = data.content[lang] || data.content['en'] || Object.values(data.content)[0];
    if (!content) return null;
    const transforms = data.elementTransforms || {};
    // Kart üzerindeki örnek görev maddeleri
    const t_item1 = content.item_1 || "Kırmızı Oyuncak";
    const t_item2 = content.item_2 || "Saksı Çiçeği";
    const t_item3 = content.item_3 || "Mavi Kitap";
    const t_list_title = content.list_title || "GÖREV LİSTESİ";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative overflow-hidden flex flex-col bg-[#F1F8E9] text-slate-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-10",
                style: {
                    backgroundImage: 'linear-gradient(#8BC34A 1px, transparent 1px), linear-gradient(90deg, #8BC34A 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-20 -right-20 text-green-200 opacity-60 transform rotate-45",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                    size: 400,
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 text-emerald-200 opacity-60 transform -rotate-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                    size: 350,
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-20 pt-16 px-8 text-center flex flex-col items-center relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                        id: "subtitle",
                        text: content.subtitle,
                        transform: transforms.subtitle,
                        isInteractive: isInteractive,
                        onUpdate: onUpdate,
                        scale: 0.65,
                        className: "z-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-3 bg-white border-4 border-green-600 px-8 py-3 rounded-full shadow-[0_8px_0_rgba(22,163,74,0.3)] mb-6 transform rotate-1 hover:scale-105 transition-transform",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                    className: "text-green-600",
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                    lineNumber: 41,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl font-black text-green-600 uppercase tracking-widest font-[var(--font-fredoka)]",
                                    children: content.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                        id: "title",
                        text: content.title,
                        transform: transforms.title,
                        isInteractive: isInteractive,
                        onUpdate: onUpdate,
                        scale: 0.65,
                        tagName: "h1",
                        className: "text-[85px] font-[var(--font-luckiest)] text-slate-800 leading-none drop-shadow-2xl mb-2 stroke-white relative z-30",
                        children: [
                            content.title,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-6 -left-16 text-orange-500 transform -rotate-12 drop-shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    size: 80,
                                    strokeWidth: 3
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center relative z-20 -mt-4 px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-8 top-8 transform -rotate-3 z-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-2xl border-[4px] border-slate-200 shadow-xl w-72 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-8 bg-slate-300 rounded-t-lg border-4 border-slate-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                    lineNumber: 65,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                                    id: "list_title",
                                    text: t_list_title,
                                    transform: transforms.list_title,
                                    isInteractive: isInteractive,
                                    onUpdate: onUpdate,
                                    scale: 0.65,
                                    className: "text-center font-black text-slate-400 text-lg mb-4 tracking-widest border-b-2 border-slate-100 pb-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-green-500",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        size: 28
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 57
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                                                    id: "item_1",
                                                    text: t_item1,
                                                    transform: transforms.item_1,
                                                    isInteractive: isInteractive,
                                                    onUpdate: onUpdate,
                                                    scale: 0.65,
                                                    className: "font-bold text-slate-700 font-[var(--font-fredoka)] text-xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                            lineNumber: 71,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 opacity-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-7 h-7 border-2 border-slate-300 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                                                    id: "item_2",
                                                    text: t_item2,
                                                    transform: transforms.item_2,
                                                    isInteractive: isInteractive,
                                                    onUpdate: onUpdate,
                                                    scale: 0.65,
                                                    className: "font-bold text-slate-700 font-[var(--font-fredoka)] text-xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                            lineNumber: 75,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 opacity-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-7 h-7 border-2 border-slate-300 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                                                    id: "item_3",
                                                    text: t_item3,
                                                    transform: transforms.item_3,
                                                    isInteractive: isInteractive,
                                                    onUpdate: onUpdate,
                                                    scale: 0.65,
                                                    className: "font-bold text-slate-700 font-[var(--font-fredoka)] text-xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                            lineNumber: 79,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative transform scale-110 z-20 mx-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-green-400 rounded-full blur-[90px] opacity-30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$PhoneMockup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneMockup"], {
                                phone: data.phone,
                                image: data.image
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-16 top-1/3 z-30 transform rotate-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-orange-500 text-white p-6 rounded-full border-[6px] border-white shadow-xl flex items-center justify-center w-32 h-32",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                size: 64,
                                className: "text-yellow-300 fill-yellow-300 drop-shadow-md"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                lineNumber: 96,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                            lineNumber: 95,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-20 pb-16 px-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                        id: "description",
                        text: content.description,
                        transform: transforms.description,
                        isInteractive: isInteractive,
                        onUpdate: onUpdate,
                        scale: 0.65,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/90 backdrop-blur-md border-[6px] border-white rounded-[40px] p-6 shadow-xl max-w-4xl mx-auto transform rotate-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-slate-600 font-[var(--font-fredoka)] leading-relaxed",
                                children: content.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                lineNumber: 106,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                        lineNumber: 104,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$EditableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableElement"], {
                            id: "cta",
                            text: content.cta,
                            transform: transforms.cta,
                            isInteractive: isInteractive,
                            onUpdate: onUpdate,
                            scale: 0.65,
                            tagName: "button",
                            className: "group relative inline-flex items-center justify-center gap-3 bg-gradient-to-b from-green-500 to-green-700 text-white text-3xl font-black py-5 px-16 rounded-3xl shadow-[0_8px_0_#15803d] hover:translate-y-1 hover:shadow-[0_4px_0_#15803d] transition-all font-[var(--font-luckiest)] uppercase tracking-wide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                content.cta
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                        lineNumber: 112,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/renderer/layouts/fivepage.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LayoutHunt;
var _c;
__turbopack_context__.k.register(_c, "LayoutHunt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/renderer/SlideRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/renderer/SlideRenderer.tsx
__turbopack_context__.s([
    "SlideRenderer",
    ()=>SlideRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$layouts$2f$LayoutHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/layouts/LayoutHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$layouts$2f$LayoutSplit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/layouts/LayoutSplit.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$layouts$2f$secondpage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/layouts/secondpage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$layouts$2f$thirdpage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/layouts/thirdpage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$layouts$2f$fourpage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/layouts/fourpage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$layouts$2f$fivepage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/layouts/fivepage.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
// Tasarım kodlarını buraya kaydediyoruz
const LAYOUT_REGISTRY = {
    'hero-v1': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$layouts$2f$LayoutHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutHero"],
    'split-v1': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$layouts$2f$LayoutSplit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutSplit"],
    'classic-v1': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$layouts$2f$secondpage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutClassic"],
    'smart-v1': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$layouts$2f$thirdpage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutSmart"],
    'game-v1': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$layouts$2f$fourpage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGame"],
    'hunt-v1': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$layouts$2f$fivepage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutHunt"]
};
const SlideRenderer = (param)=>{
    let { data, lang, isInteractive = false, onElementUpdate } = param;
    const Component = LAYOUT_REGISTRY[data.layoutId] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$layouts$2f$LayoutHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutHero"];
    return(// 1080x1350 Instagram Post Boyutu
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[1080px] h-[1350px] bg-white relative shadow-2xl overflow-hidden shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
            data: data,
            lang: lang,
            isInteractive: isInteractive,
            onUpdate: onElementUpdate
        }, void 0, false, {
            fileName: "[project]/src/components/renderer/SlideRenderer.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/renderer/SlideRenderer.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
_c = SlideRenderer;
var _c;
__turbopack_context__.k.register(_c, "SlideRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/editor/EditorPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/editor/EditorPanel.tsx
__turbopack_context__.s([
    "EditorPanel",
    ()=>EditorPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
;
var _s = __turbopack_context__.k.signature();
;
;
const EditorPanel = ()=>{
    _s();
    // DÜZELTME: updateSlide buraya eklendi
    const { activeSlideId, slides, activeLanguage, updateContent, updatePhoneTransform, updateImageTransform, setLanguage, updateSlide } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])();
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
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"]
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$SlideRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/SlideRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$EditorPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/editor/EditorPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
        content: {
            tr: {
                title: 'Klasik Mod',
                subtitle: 'FOTOĞRAF ÇEK',
                cta: 'Hemen Dene',
                description: 'İnternet olmasa bile dilediğin zaman fotoğraf çek, nesnelerin ismini anında öğren!',
                rating: 'Eğitici'
            },
            en: {
                title: 'Classic Mode',
                subtitle: 'TAKE PHOTO',
                cta: 'Try Now',
                description: 'Take photos anytime, even without internet, and learn object names instantly!',
                rating: 'Educational'
            },
            de: {
                title: 'Klassik Modus',
                subtitle: 'FOTO MACHEN',
                cta: 'Probieren',
                description: 'Mach jederzeit Fotos, auch ohne Internet, und lerne sofort Namen!',
                rating: 'Lehrreich'
            },
            es: {
                title: 'Modo Clásico',
                subtitle: 'TOMAR FOTO',
                cta: 'Probar',
                description: '¡Toma fotos en cualquier momento, incluso sin internet, y aprende nombres!',
                rating: 'Educativo'
            },
            fr: {
                title: 'Mode Classique',
                subtitle: 'PRENDRE PHOTO',
                cta: 'Essayer',
                description: 'Prenez des photos à tout moment, même sans internet, et apprenez !',
                rating: 'Éducatif'
            },
            ja: {
                title: 'クラシックモード',
                subtitle: '写真を撮る',
                cta: '試す',
                description: 'インターネットがなくても、いつでも写真を撮って名前を学ぼう！',
                rating: '教育的'
            },
            ko: {
                title: '클래식 모드',
                subtitle: '사진 찍기',
                cta: '시도하기',
                description: '인터넷 없이도 언제든지 사진을 찍고 이름을 배우세요!',
                rating: '교육용'
            },
            ar: {
                title: 'الوضع الكلاسيكي',
                subtitle: 'التقط صورة',
                cta: 'جرب الآن',
                description: 'التقط الصور في أي وقت، حتى بدون إنترنت، وتعلم الأسماء فوراً!',
                rating: 'تعليمي'
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
        content: {
            tr: {
                title: 'Oyun Zamanı!',
                subtitle: 'SMART EYE GAME',
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
                subtitle: 'SMART EYE GAME',
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
                subtitle: 'SMART EYE GAME',
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
                subtitle: 'SMART EYE GAME',
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
                subtitle: 'SMART EYE GAME',
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
                subtitle: 'SMART EYE GAME',
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
                subtitle: 'SMART EYE GAME',
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
    const { slides, addSlide, activeSlideId, selectSlide, activeLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])();
    // Zustand'ın state'ini toplu güncellemek için setState fonksiyonuna erişiyoruz
    const setState = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"].setState;
    const isLoaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // AI Modal State
    const [showAiModal, setShowAiModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
                                        elementTransforms: saved.elementTransforms || {} // Kayıtlı pozisyonlar
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
            // Mevcut slaytların üzerine yenisini ekle
            const currentSlides = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"].getState().slides;
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
        const currentSlides = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"].getState().slides;
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
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$SlideRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlideRenderer"], {
                                        data: slide,
                                        lang: activeLanguage,
                                        isInteractive: false
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 346,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 345,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 right-0 bg-black text-white text-[10px] px-1 font-bold",
                                    children: index + 1
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, slide.id, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 337,
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
                            lineNumber: 357,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 335,
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
                        lineNumber: 364,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full flex items-center justify-center overflow-auto",
                        children: activeSlideId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "transform scale-[0.65] shadow-2xl shadow-slate-300 border border-slate-200 transition-all duration-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$SlideRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlideRenderer"], {
                                data: slides.find((s)=>s.id === activeSlideId),
                                lang: activeLanguage,
                                isInteractive: true,
                                onElementUpdate: (elId, txt, trans)=>handleElementUpdate(activeSlideId, elId, txt, trans)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 370,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 369,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 367,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-20 shadow-xl relative h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$EditorPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorPanel"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 382,
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
                                lineNumber: 396,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 392,
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
                                        lineNumber: 401,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 400,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-slate-800 mb-2",
                                    children: "AI Post Oluşturucu"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 404,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 mb-8 text-sm leading-relaxed",
                                    children: "Hayalindeki tasarımı anlat, yapay zeka senin için 7 dilde, görselleri ve yerleşimiyle birlikte hazırlasın."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 405,
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
                                            lineNumber: 410,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-3 right-3 text-[10px] text-slate-400 font-medium uppercase tracking-wider",
                                            children: "AI Powered"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 416,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 409,
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
                                                lineNumber: 426,
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
                                                lineNumber: 431,
                                                columnNumber: 21
                                            }, this),
                                            "Tasarımı Oluştur"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 399,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 389,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 388,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 332,
        columnNumber: 5
    }, this);
}
_s(PostFactoryPage, "Xwg7erVdvc6dXDlIojOI/AzUgio=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"]
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

//# sourceMappingURL=src_edee861c._.js.map