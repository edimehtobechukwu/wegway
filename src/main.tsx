import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import App from "./App.tsx";
import "./index.css";
import i18n from "./i18n"; // Import i18n configuration

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <Suspense fallback={<div className="flex h-screen w-screen items-center justify-center font-['Oswald'] text-2xl text-[#1a4d2e]">Loading / Lädt...</div>}>
                <App />
            </Suspense>
        </I18nextProvider>
    </React.StrictMode>
);
