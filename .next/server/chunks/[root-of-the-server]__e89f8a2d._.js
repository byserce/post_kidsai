module.exports = [
"[project]/.next-internal/server/app/api/generate/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/generate/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(req) {
    try {
        const { prompt } = await req.json();
        // .env.local dosyasından API anahtarını alıyoruz
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Gemini API Key bulunamadı. Lütfen .env.local dosyasını kontrol edin.'
            }, {
                status: 500
            });
        }
        // Gemini'ye gönderilecek sistem talimatı
        const systemInstruction = `
      You are a World-Class UI/UX Designer and Creative Director.
      Your task is to generate a JSON object for a slide based on the user's prompt.
      
      The JSON must strictly follow this structure:
      {
        "id": "string (unique)",
        "layoutId": "one of ['hero-v1', 'classic-v1', 'smart-v1']",
        "themeColor": "one of ['cyan', 'rose', 'purple', 'indigo', 'emerald', 'amber']",
        "customTheme": {
           "bg": "Tailwind class for background (e.g., bg-slate-900 or bg-gradient-to-r...)",
           "title": "Tailwind class for title color (e.g., text-white)",
           "blob": "Tailwind class for blob color (e.g., bg-purple-500)"
        },
        "decorations": [
           { 
             "type": "one of ['blob', 'star', 'cloud', 'sparkle', 'camera', 'zap', 'circle']", 
             "className": "Tailwind classes for position, size, color, animation (e.g., 'absolute top-10 left-10 w-20 h-20 text-yellow-400 animate-bounce')" 
           }
        ],
        "content": {
          "tr": { "title": "", "subtitle": "", "cta": "", "description": "", "rating": "" },
          "en": { "title": "", "subtitle": "", "cta": "", "description": "", "rating": "" },
          "de": { "title": "", "subtitle": "", "cta": "", "description": "", "rating": "" },
          "es": { "title": "", "subtitle": "", "cta": "", "description": "", "rating": "" },
          "fr": { "title": "", "subtitle": "", "cta": "", "description": "", "rating": "" },
          "ja": { "title": "", "subtitle": "", "cta": "", "description": "", "rating": "" },
          "ko": { "title": "", "subtitle": "", "cta": "", "description": "", "rating": "" },
          "ar": { "title": "", "subtitle": "", "cta": "", "description": "", "rating": "" }
        },
        "phone": {
          "transform": { "x": number, "y": number, "rotateX": number, "rotateY": number, "rotateZ": number, "scale": number }
        },
        "image": {
          "url": "A relevant Unsplash image URL based on the topic",
          "fit": "cover",
          "transform": { "x": 0, "y": 0, "scale": 1, "rotateZ": 0 }
        }
      }

      DESIGN RULES (CRITICAL):
      1. Translate the content meaningfully into all 8 languages.
      2. VISUAL DESIGN: 
         - Generate a unique 'customTheme' based on the prompt (e.g., Space = dark bg, Nature = green bg).
         - Generate 3 to 6 'decorations' items to create a composition. Place them randomly using 'absolute', 'top-xx', 'left-xx', 'right-xx'.
         - Use 'blob' type for large background blurs (w-96 h-96 blur-3xl).
         - Use icons (star, cloud, zap) for details.
      3. 3D COMPOSITION (IMPORTANT): You MUST change the 'phone.transform' values to create a unique scene.
         - For 'Dynamic/Fun' topics: Use tilted angles (e.g., rotateY: 15, rotateZ: -5, y: 30).
         - NEVER return all zeros. Be creative with X, Y, and Rotations.
      4. IMAGE: Use a high-quality Unsplash URL: 'https://images.unsplash.com/photo-...?auto=format&fit=crop&w=800&q=80'. 
         - Search for specific keywords related to the prompt.
         - Adjust 'image.transform' if needed (e.g., scale: 1.2 to zoom into the photo).
      5. Return ONLY the JSON object.
    `;
        // Gemini API Çağrısı
        // Model ismi düzeltildi: gemini-1.5-flash (2.5 henüz yok)
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: systemInstruction + "\n\nUser Request: " + prompt
                            }
                        ]
                    }
                ],
                generationConfig: {
                    response_mime_type: "application/json"
                }
            })
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Gemini API hatası');
        }
        const data = await response.json();
        const generatedText = data.candidates[0].content.parts[0].text;
        const generatedContent = JSON.parse(generatedText);
        generatedContent.id = `ai-${Date.now()}`;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(generatedContent);
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || 'Bir hata oluştu'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e89f8a2d._.js.map