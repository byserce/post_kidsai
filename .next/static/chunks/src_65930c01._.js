(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layouts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppLanguage",
    ()=>AppLanguage,
    "LANGUAGE_CONFIG",
    ()=>LANGUAGE_CONFIG,
    "LAYOUT_TRANSLATIONS",
    ()=>LAYOUT_TRANSLATIONS,
    "layouts",
    ()=>layouts,
    "themes",
    ()=>themes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
;
var AppLanguage = /*#__PURE__*/ function(AppLanguage) {
    AppLanguage["tr"] = "tr";
    AppLanguage["en"] = "en";
    AppLanguage["de"] = "de";
    AppLanguage["fr"] = "fr";
    AppLanguage["es"] = "es";
    AppLanguage["ja"] = "ja";
    AppLanguage["ko"] = "ko";
    AppLanguage["ar"] = "ar";
    return AppLanguage;
}({});
const LANGUAGE_CONFIG = {
    ["tr"]: {
        label: 'Türkçe',
        locale: 'tr-TR',
        dir: 'ltr'
    },
    ["en"]: {
        label: 'English',
        locale: 'en-US',
        dir: 'ltr'
    },
    ["de"]: {
        label: 'Deutsch',
        locale: 'de-DE',
        dir: 'ltr'
    },
    ["fr"]: {
        label: 'Français',
        locale: 'fr-FR',
        dir: 'ltr'
    },
    ["es"]: {
        label: 'Español',
        locale: 'es-ES',
        dir: 'ltr'
    },
    ["ja"]: {
        label: '日本語',
        locale: 'ja-JP',
        dir: 'ltr',
        fontFallback: true
    },
    ["ko"]: {
        label: '한국어',
        locale: 'ko-KR',
        dir: 'ltr',
        fontFallback: true
    },
    ["ar"]: {
        label: 'العربية',
        locale: 'ar-SA',
        dir: 'rtl',
        fontFallback: true
    }
};
const themes = {
    // --- KIDSAI RESMİ TEMA ---
    kidsaiOfficial: {
        // Pastel Mavi'den Hafif Mora geçiş (Uygulama arka planı hissi)
        bg: "bg-[#E0F7FA]",
        gradient: "from-[#E0F7FA] via-[#B2EBF2] to-[#E1BEE7]",
        accent: "text-white",
        // Hap: Parlak Turuncu (Dikkat çekici)
        pill: "bg-[#FFA726] text-white border-[4px] border-white shadow-[0_6px_0px_rgba(0,0,0,0.15)]",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
        decor: "text-[#FFEB3B]",
        borderColor: "border-white",
        patternOpacity: "opacity-[0.4]"
    }
};
const layouts = {
    launchAnnouncement: {
        name: "🚀 KidsAI Lansman (Resmi)",
        slides: [
            {
                id: 1,
                seriesTag: "YENİ",
                subtitle: "MACERA BAŞLASIN!",
                title: "KIDSAI ŞİMDİ YAYINDA",
                ctaText: "ÜCRETSİZ İNDİR",
                storeTitle: "Hemen Keşfet",
                storeSubtitle: "App Store & Google Play",
                color: "kidsaiOfficial",
                phoneStyle: "floating",
                imageZoom: 1
            }
        ]
    }
};
const LAYOUT_TRANSLATIONS = {
    launchAnnouncement: {
        ["tr"]: [
            {
                title: "KIDSAI ŞİMDİ YAYINDA",
                subtitle: "MACERA BAŞLASIN!",
                seriesTag: "YENİ",
                ctaText: "ÜCRETSİZ İNDİR",
                storeTitle: "Hemen Keşfet",
                storeSubtitle: "App Store & Google Play"
            }
        ],
        ["en"]: [
            {
                title: "KIDSAI IS LIVE NOW",
                subtitle: "LET THE ADVENTURE BEGIN!",
                seriesTag: "NEW",
                ctaText: "DOWNLOAD FREE",
                storeTitle: "Discover Now",
                storeSubtitle: "App Store & Google Play"
            }
        ],
        ["de"]: [
            {
                title: "KIDSAI JETZT VERFÜGBAR",
                subtitle: "DAS ABENTEUER BEGINNT!",
                seriesTag: "NEU",
                ctaText: "KOSTENLOS LADEN",
                storeTitle: "Jetzt Entdecken",
                storeSubtitle: "App Store & Google Play"
            }
        ],
        ["fr"]: [
            {
                title: "KIDSAI EST EN LIGNE",
                subtitle: "QUE L'AVENTURE COMMENCE !",
                seriesTag: "NOUVEAU",
                ctaText: "TÉLÉCHARGER",
                storeTitle: "Découvrir",
                storeSubtitle: "App Store & Google Play"
            }
        ],
        ["es"]: [
            {
                title: "KIDSAI YA ESTÁ AQUÍ",
                subtitle: "¡QUE COMIENCE LA AVENTURA!",
                seriesTag: "NUEVO",
                ctaText: "DESCARGAR GRATIS",
                storeTitle: "Descubrir",
                storeSubtitle: "App Store & Google Play"
            }
        ],
        ["ja"]: [
            {
                title: "KIDSAI リリース",
                subtitle: "冒険を始めよう！",
                seriesTag: "新着",
                ctaText: "無料ダウンロード",
                storeTitle: "今すぐチェック",
                storeSubtitle: "App Store & Google Play"
            }
        ],
        ["ko"]: [
            {
                title: "KIDSAI 출시 완료",
                subtitle: "모험을 시작하세요!",
                seriesTag: "NEW",
                ctaText: "무료 다운로드",
                storeTitle: "지금 확인하기",
                storeSubtitle: "App Store & Google Play"
            }
        ],
        ["ar"]: [
            {
                title: "KIDSAI متاح الآن",
                subtitle: "لتبدأ المغامرة!",
                seriesTag: "جديد",
                ctaText: "تحميل مجاني",
                storeTitle: "اكتشف الآن",
                storeSubtitle: "App Store & Google Play"
            }
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/post-template.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostTemplate",
    ()=>PostTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layouts.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function PostTemplate(param) {
    let { reference, title, subtitle, seriesTag, ctaText, color, image, imageFit = 'cover', imagePosition = {
        x: 50,
        y: 50
    }, imageZoom = 1, imageRotation = 0, storeTitle, storeSubtitle, phoneStyle = 'default', phoneRotation, phoneScale = 1, phonePosition = {
        x: 0,
        y: 0
    }, language = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppLanguage"].tr } = param;
    const currentTheme = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themes"][color] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themes"].kidsaiOfficial;
    const langConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGE_CONFIG"][language];
    // Font Seçimi: Asya ve Arapça dilleri için standart fontları kullan (Karakter desteği için)
    const titleFontClass = langConfig.fontFallback ? 'font-black tracking-tighter' : 'font-luckiest';
    const bodyFontClass = langConfig.fontFallback ? 'font-bold' : 'font-fredoka font-black';
    // Telefon Stilleri Konfigürasyonu (Base değerler)
    const phoneConfig = {
        default: {
            y: -64,
            scale: 0.6,
            rotate: 0
        },
        floating: {
            y: -40,
            scale: 0.65,
            rotate: 0
        },
        'tilted-left': {
            y: -32,
            scale: 0.6,
            rotate: -3
        },
        'tilted-right': {
            y: -32,
            scale: 0.6,
            rotate: 3
        },
        flat: {
            y: -64,
            scale: 0.7,
            rotate: 0
        }
    };
    const activeConfig = phoneConfig[phoneStyle] || phoneConfig.default;
    // Nihai Transform Değerleri
    const finalScale = activeConfig.scale * phoneScale;
    const finalRotate = activeConfig.rotate + (phoneRotation || 0);
    const finalX = phonePosition.x;
    const finalY = activeConfig.y + phonePosition.y;
    const handleDownload = async ()=>{
        if (reference.current) {
            try {
                const dataUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPng"])(reference.current, {
                    pixelRatio: 2,
                    filter: (node)=>{
                        var _node_classList;
                        return !((_node_classList = node.classList) === null || _node_classList === void 0 ? void 0 : _node_classList.contains('exclude-from-export'));
                    }
                });
                const link = document.createElement('a');
                link.download = "kidsai-post-".concat(language, "-").concat(new Date().getTime(), ".png");
                link.href = dataUrl;
                link.click();
            } catch (err) {
                console.error('Hata:', err);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: reference,
        className: "w-[1080px] h-[1350px] flex-shrink-0 relative overflow-hidden group selection:bg-none font-sans bg-white",
        dir: langConfig.dir,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 flex flex-col items-center bg-gradient-to-b", currentTheme.bg, currentTheme.gradient),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-40 origin-center scale-[2]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,white_0deg,transparent_20deg,white_40deg,transparent_60deg,white_80deg,transparent_100deg,white_120deg,transparent_140deg,white_160deg,transparent_180deg,white_200deg,transparent_220deg,white_240deg,transparent_260deg,white_280deg,transparent_300deg,white_320deg,transparent_340deg,white_360deg)] mix-blend-overlay opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/src/components/post-template.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/post-template.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 pointer-events-none mix-blend-overlay", currentTheme.patternOpacity),
                    style: {
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 3px, transparent 3px)',
                        backgroundSize: '50px 50px'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/post-template.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-[-50px] left-[-80px] text-white/40 transform -rotate-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                        size: 400,
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/post-template.tsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/post-template.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-[100px] right-[-100px] text-white/30 transform rotate-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                        size: 350,
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/post-template.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/post-template.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-20 w-full h-full flex flex-col items-center pt-20 pb-12 px-8",
                    children: [
                        seriesTag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-16 z-50", langConfig.dir === 'rtl' ? 'right-12 rotate-[15deg]' : 'left-12 rotate-[-15deg]'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-[#FF4081] text-white border-[4px] border-white shadow-[0_6px_0px_rgba(0,0,0,0.1)] px-6 py-2 rounded-2xl text-3xl tracking-wider", titleFontClass),
                                children: seriesTag
                            }, void 0, false, {
                                fileName: "[project]/src/components/post-template.tsx",
                                lineNumber: 110,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/post-template.tsx",
                            lineNumber: 109,
                            columnNumber: 14
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-5 text-center relative z-30 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-8 py-3 rounded-full transform hover:scale-105 transition-transform", currentTheme.pill),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl tracking-widest uppercase drop-shadow-md", bodyFontClass),
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/post-template.tsx",
                                        lineNumber: 121,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/post-template.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[8rem] leading-[0.85] text-center text-white relative z-10 whitespace-pre-line", titleFontClass),
                                            style: {
                                                // Metnin etrafına kalın çerçeve (Sticker efekti için)
                                                WebkitTextStroke: '16px white',
                                                paintOrder: 'stroke fill'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-transparent bg-clip-text bg-gradient-to-b from-[#42A5F5] to-[#1E88E5]",
                                                style: {
                                                    WebkitTextStroke: '0px'
                                                },
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/post-template.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/post-template.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-2 left-0 w-full text-[8rem] leading-[0.85] text-center text-black/10 z-0 whitespace-pre-line", titleFontClass),
                                            style: {
                                                WebkitTextStroke: '16px rgba(0,0,0,0.1)'
                                            },
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/post-template.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/post-template.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/post-template.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 w-full flex items-center justify-center relative -mt-8",
                            children: [
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-[500px] h-[500px] bg-white/50 blur-[60px] rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/post-template.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-[460px] h-[880px] rounded-[64px] overflow-hidden z-20", "border-[18px] bg-white", "shadow-[0_30px_60px_-15px_rgba(50,50,93,0.3),_0_18px_36px_-18px_rgba(0,0,0,0.4)]"),
                                    style: {
                                        transform: "translate(".concat(finalX, "px, ").concat(finalY, "px) rotate(").concat(finalRotate, "deg) scale(").concat(finalScale, ")")
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full bg-slate-50 overflow-hidden relative rounded-[46px] border-[4px] border-slate-100",
                                        children: [
                                            image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: image,
                                                className: "w-full h-full",
                                                alt: "App Screen",
                                                style: {
                                                    objectFit: imageFit,
                                                    objectPosition: "".concat(imagePosition.x, "% ").concat(imagePosition.y, "%"),
                                                    transform: "scale(".concat(imageZoom, ") rotate(").concat(imageRotation, "deg)")
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/post-template.tsx",
                                                lineNumber: 172,
                                                columnNumber: 22
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full flex flex-col items-center justify-center bg-blue-50 font-fredoka gap-4 text-center p-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white p-6 rounded-full shadow-lg border-2 border-blue-100",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                            size: 64,
                                                            className: "text-blue-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/post-template.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/post-template.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 26
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-400 font-bold text-2xl",
                                                        children: "Görsel Yükle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/post-template.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 26
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/post-template.tsx",
                                                lineNumber: 183,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-[250px] h-[900px] bg-gradient-to-l from-white/20 to-transparent skew-x-[-20deg] pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/post-template.tsx",
                                                lineNumber: 191,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/post-template.tsx",
                                        lineNumber: 170,
                                        columnNumber: 18
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/post-template.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-[20%] right-[10%] transform rotate-[15deg] z-30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#FFEB3B] p-3 rounded-2xl border-[4px] border-white shadow-[0_5px_0px_rgba(0,0,0,0.1)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            size: 48,
                                            className: "text-[#FBC02D]",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/post-template.tsx",
                                            lineNumber: 198,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/post-template.tsx",
                                        lineNumber: 197,
                                        columnNumber: 18
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/post-template.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-[35%] left-[10%] transform -rotate-[12deg] z-30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#FF4081] p-3 rounded-full border-[4px] border-white shadow-[0_5px_0px_rgba(0,0,0,0.1)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            size: 48,
                                            className: "text-white",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/post-template.tsx",
                                            lineNumber: 203,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/post-template.tsx",
                                        lineNumber: 202,
                                        columnNumber: 18
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/post-template.tsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-[10%] left-[18%] transform -rotate-[20deg] z-10 opacity-80",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-2 rounded-full border-[3px] border-blue-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                                            size: 40,
                                            className: "text-blue-300",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/post-template.tsx",
                                            lineNumber: 208,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/post-template.tsx",
                                        lineNumber: 207,
                                        columnNumber: 18
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/post-template.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/post-template.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-[800px] bg-white rounded-[40px] p-4 border-[6px] border-white/50 shadow-[0_15px_40px_rgba(0,0,0,0.1)] relative mt-0 flex flex-col items-center mb-4",
                            children: [
                                " ",
                                ctaText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -top-5 bg-[#66BB6A] text-white px-6 py-2 rounded-2xl text-xl border-[4px] border-white shadow-[0_6px_0px_rgba(0,0,0,0.15)] transform rotate-[-2deg]", titleFontClass),
                                    children: ctaText
                                }, void 0, false, {
                                    fileName: "[project]/src/components/post-template.tsx",
                                    lineNumber: 219,
                                    columnNumber: 18
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-6 mt-4 w-full px-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0 w-16 h-16",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/appstore.png",
                                                alt: "App Store",
                                                className: "w-full h-full object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/post-template.tsx",
                                                lineNumber: 229,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/post-template.tsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center gap-1 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-3xl text-slate-800 whitespace-nowrap", bodyFontClass),
                                                    children: storeTitle || 'Maceraya Katılın'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/post-template.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xl text-slate-500 font-medium whitespace-nowrap", bodyFontClass.replace('font-black', 'font-medium')),
                                                    children: storeSubtitle || 'Eğlenceli ve Güvenli Öğrenme'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/post-template.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/post-template.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0 w-16 h-16",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/google.png",
                                                alt: "Google Play",
                                                className: "w-full h-full object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/post-template.tsx",
                                                lineNumber: 244,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/post-template.tsx",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/post-template.tsx",
                                    lineNumber: 225,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 mt-3 text-slate-400 text-sm animate-pulse", titleFontClass),
                                    children: [
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/post-template.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "LİNK PROFİLDE (BIO)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/post-template.tsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/post-template.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/post-template.tsx",
                                    lineNumber: 249,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/post-template.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/post-template.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleDownload,
                    className: "exclude-from-export absolute top-8 right-8 z-50 bg-[#FF4081] text-white p-4 rounded-2xl shadow-[0_6px_0px_rgba(0,0,0,0.2)] border-[3px] border-white hover:scale-110 transition-transform",
                    title: "Kaydet",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                        size: 32,
                        strokeWidth: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/post-template.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/post-template.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/post-template.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/post-template.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_c = PostTemplate;
var _c;
__turbopack_context__.k.register(_c, "PostTemplate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
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
function Home() {
    _s();
    const [activeLayoutKey, setActiveLayoutKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('launchAnnouncement');
    const [currentLanguage, setCurrentLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppLanguage"].tr);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Tüm dillerin içeriklerini tutan ana state
    const [multiLangSlides, setMultiLangSlides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const slideRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Layout değiştiğinde tüm diller için başlangıç verisini oluştur
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const baseLayout = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layouts"][activeLayoutKey] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layouts"]['launchAnnouncement'];
            const initialData = {};
            // Her dil için varsayılan layout verisini kopyala
            Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppLanguage"]).forEach({
                "Home.useEffect": (lang)=>{
                    var _LAYOUT_TRANSLATIONS_activeLayoutKey;
                    // 1. Temel yapıyı kopyala
                    const slides = JSON.parse(JSON.stringify(baseLayout.slides));
                    // 2. Varsa bu dilin çevirilerini uygula
                    const translations = (_LAYOUT_TRANSLATIONS_activeLayoutKey = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT_TRANSLATIONS"][activeLayoutKey]) === null || _LAYOUT_TRANSLATIONS_activeLayoutKey === void 0 ? void 0 : _LAYOUT_TRANSLATIONS_activeLayoutKey[lang];
                    if (translations) {
                        slides.forEach({
                            "Home.useEffect": (slide, index)=>{
                                if (translations[index]) {
                                    Object.assign(slide, translations[index]);
                                }
                            }
                        }["Home.useEffect"]);
                    }
                    initialData[lang] = slides;
                }
            }["Home.useEffect"]);
            setMultiLangSlides(initialData);
        }
    }["Home.useEffect"], [
        activeLayoutKey
    ]);
    // Şu anki dilin slaytlarını al
    const currentSlides = multiLangSlides[currentLanguage] || [];
    if (slideRefs.current.length !== currentSlides.length) {
        slideRefs.current = Array(currentSlides.length).fill(null).map((_, i)=>slideRefs.current[i] || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])());
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
        // Telefon ayarlarının tüm slaytlarda senkronize olması için kontrol listesi
        // Görsel ayarlarını da ekliyoruz ki dil değişince resim konumu bozulmasın
        const globalFields = [
            'phoneStyle',
            'phoneScale',
            'phonePosition',
            'phoneRotation',
            'imageFit',
            'imagePosition',
            'imageZoom',
            'imageRotation'
        ];
        const isGlobal = globalFields.includes(field);
        setMultiLangSlides((prev)=>{
            const nextState = {
                ...prev
            };
            if (isGlobal) {
                // Global ayar: Tüm dillerdeki tüm slaytları güncelle
                Object.keys(nextState).forEach((lang)=>{
                    nextState[lang] = nextState[lang].map((slide)=>({
                            ...slide,
                            [field]: value
                        }));
                });
            } else {
                // Yerel ayar: Sadece mevcut dildeki ilgili slaytı güncelle
                nextState[currentLanguage] = nextState[currentLanguage].map((slide)=>slide.id === id ? {
                        ...slide,
                        [field]: value
                    } : slide);
            }
            return nextState;
        });
    };
    const handleDownloadAllLanguages = async ()=>{
        setIsDownloading(true);
        const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        const originalLanguage = currentLanguage;
        // Her dili sırayla işleyip ZIP dosyasına ekle
        for (const lang of Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppLanguage"])){
            // Dili değiştir ve DOM'un güncellenmesini bekle
            await new Promise((resolve)=>{
                setCurrentLanguage(lang);
                setTimeout(resolve, 500); // Re-render için kısa bir bekleme süresi
            });
            const langFolder = zip.folder(lang);
            for(let i = 0; i < slideRefs.current.length; i++){
                const ref = slideRefs.current[i];
                if (ref.current) {
                    try {
                        const dataUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPng"])(ref.current, {
                            pixelRatio: 2,
                            filter: (node)=>{
                                var _node_classList;
                                return !((_node_classList = node.classList) === null || _node_classList === void 0 ? void 0 : _node_classList.contains('exclude-from-export'));
                            }
                        });
                        const base64Data = dataUrl.split(',')[1];
                        langFolder === null || langFolder === void 0 ? void 0 : langFolder.file("slide-".concat(i + 1, ".png"), base64Data, {
                            base64: true
                        });
                    } catch (err) {
                        console.error("Hata (".concat(lang, ", slayt ").concat(i + 1, "):"), err);
                    }
                }
            }
        }
        const content = await zip.generateAsync({
            type: 'blob'
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAs"])(content, "kidsai-posts-all-languages.zip");
        // Orijinal dile geri dön ve indirme durumunu sıfırla
        setCurrentLanguage(originalLanguage);
        setIsDownloading(false);
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
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-luckiest text-slate-800 tracking-wider",
                                        children: "KidsAI Post Studio"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500 font-fredoka",
                                        children: "Instagram İçerik Üreticisi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDownloadAllLanguages,
                                disabled: isDownloading,
                                className: "flex items-center gap-2 bg-slate-800 text-white px-4 py-3 rounded-xl font-bold hover:bg-slate-700 transition-colors shadow-lg shadow-slate-200 disabled:bg-slate-500 disabled:cursor-wait",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: isDownloading ? 'İndiriliyor...' : 'Tüm Dilleri İndir (ZIP)'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: currentLanguage,
                                onChange: (e)=>setCurrentLanguage(e.target.value),
                                className: "p-3 pl-4 pr-8 border-2 border-slate-200 rounded-xl bg-white font-bold text-slate-700 focus:border-blue-400 outline-none cursor-pointer",
                                children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGE_CONFIG"]).map((param)=>{
                                    let [code, config] = param;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: code,
                                        children: config.label
                                    }, code, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 156,
                                columnNumber: 11
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
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-[calc(100vh-80px)] mt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[400px] bg-white border-r border-slate-200 overflow-y-auto p-6 custom-scrollbar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-8 pb-8",
                            children: currentSlides.map((slide, index)=>{
                                var _slide_phonePosition, _slide_phonePosition1, _slide_imagePosition, _slide_imagePosition1;
                                var _slide_phonePosition_x, _slide_phonePosition_y, _slide_phoneRotation, _slide_phoneRotation1, _slide_imagePosition_x, _slide_imagePosition_y;
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
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this),
                                                "Slayt Ayarları"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 190,
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
                                                            lineNumber: 201,
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
                                                                        lineNumber: 209,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "floating",
                                                                        children: "Havada (Floating)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 210,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "tilted-left",
                                                                        children: "Sola Yatık"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 211,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "tilted-right",
                                                                        children: "Sağa Yatık"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 212,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "flat",
                                                                        children: "Düz & Küçük (Flat)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 213,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-slate-500 mb-1",
                                                                    children: [
                                                                        "Telefon Boyutu (",
                                                                        slide.phoneScale || 1,
                                                                        "x)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 218,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "range",
                                                                    min: "0.5",
                                                                    max: "2",
                                                                    step: "0.05",
                                                                    value: slide.phoneScale || 1,
                                                                    onChange: (e)=>updateSlideProperty(slide.id, 'phoneScale', parseFloat(e.target.value)),
                                                                    className: "w-full accent-blue-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-slate-500 mb-1",
                                                                    children: "Telefon Pozisyonu (X / Y)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "range",
                                                                            min: "-300",
                                                                            max: "300",
                                                                            value: (_slide_phonePosition_x = (_slide_phonePosition = slide.phonePosition) === null || _slide_phonePosition === void 0 ? void 0 : _slide_phonePosition.x) !== null && _slide_phonePosition_x !== void 0 ? _slide_phonePosition_x : 0,
                                                                            onChange: (e)=>updateSlideProperty(slide.id, 'phonePosition', {
                                                                                    ...slide.phonePosition || {
                                                                                        x: 0,
                                                                                        y: 0
                                                                                    },
                                                                                    x: parseInt(e.target.value)
                                                                                }),
                                                                            className: "w-full accent-blue-500",
                                                                            title: "Yatay Pozisyon"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 230,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "range",
                                                                            min: "-300",
                                                                            max: "300",
                                                                            value: (_slide_phonePosition_y = (_slide_phonePosition1 = slide.phonePosition) === null || _slide_phonePosition1 === void 0 ? void 0 : _slide_phonePosition1.y) !== null && _slide_phonePosition_y !== void 0 ? _slide_phonePosition_y : 0,
                                                                            onChange: (e)=>updateSlideProperty(slide.id, 'phonePosition', {
                                                                                    ...slide.phonePosition || {
                                                                                        x: 0,
                                                                                        y: 0
                                                                                    },
                                                                                    y: parseInt(e.target.value)
                                                                                }),
                                                                            className: "w-full accent-blue-500",
                                                                            title: "Dikey Pozisyon"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 231,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 227,
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
                                                                    lineNumber: 236,
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
                                                                    lineNumber: 237,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-bold text-slate-600 mb-3",
                                                            children: "Ekran Görüntüsü"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 248,
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
                                                                    lineNumber: 251,
                                                                    columnNumber: 25
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                            size: 28,
                                                                            className: "text-slate-400 group-hover:text-blue-500 transition-colors"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 254,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-bold text-slate-500 group-hover:text-blue-600",
                                                                            children: "Görsel Seçin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 255,
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
                                                                    lineNumber: 258,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 247,
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
                                                            lineNumber: 265,
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
                                                                    lineNumber: 269,
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
                                                                    lineNumber: 270,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 268,
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
                                                                    lineNumber: 280,
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
                                                                    lineNumber: 281,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-slate-500 mb-2",
                                                                    children: "Sığdırma"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 291,
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
                                                                            lineNumber: 297,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "contain",
                                                                            children: "Sığdır (Contain)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 298,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "fill",
                                                                            children: "Doldur (Fill)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 299,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-slate-500 mb-1",
                                                                    children: "Görsel Pozisyonu (X / Y)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 305,
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
                                                                            lineNumber: 307,
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
                                                                            lineNumber: 308,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 264,
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
                                                                lineNumber: 325,
                                                                columnNumber: 25
                                                            }, this),
                                                            item.textarea ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                value: slide[item.field],
                                                                onChange: (e)=>updateSlideProperty(slide.id, item.field, e.target.value),
                                                                className: "w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 outline-none h-24 resize-none bg-white font-bold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: slide[item.field],
                                                                onChange: (e)=>updateSlideProperty(slide.id, item.field, e.target.value),
                                                                className: "w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 outline-none bg-white font-bold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, item.field, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, slide.id, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 186,
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
                                lineNumber: 352,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-8 items-center h-full",
                                children: currentSlides.map((slide, index)=>// DÜZELTME: Scale değeri ve container boyutu ayarlandı. Taşma önlendi.
                                    // 1080px genişliği ekrana sığdırmak için yaklaşık 0.4 - 0.5 arası bir scale gerekiyor.
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "transform scale-[0.45] 2xl:scale-[0.55] transition-transform origin-center shadow-2xl rounded-[40px] border-[8px] border-white/50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$post$2d$template$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostTemplate"], {
                                            reference: slideRefs.current[index],
                                            ...slide,
                                            image: images[slide.id] || null,
                                            language: currentLanguage
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 359,
                                            columnNumber: 19
                                        }, this)
                                    }, slide.id, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 358,
                                        columnNumber: 16
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 354,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s(Home, "HoKca6Yw+QMVYhjNa+Q2SyJAQ7E=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_65930c01._.js.map