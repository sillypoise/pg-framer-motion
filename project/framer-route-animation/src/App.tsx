import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import React, { useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";

function Page({ page }: { page: string }) {
    let isPresent = useIsPresent();
    return (
        <main className="mlb-l">
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{
                    scaleX: 0,
                    transition: { duration: 0.5, ease: "circOut" },
                }}
                exit={{
                    scaleX: 1,
                    transition: { duration: 0.5, ease: "circIn" },
                }}
                style={{ originX: isPresent ? 0 : 1 }}
                className="imposter inset-[0] transform-none bg-dark-tomato-9 z-10"
            />
            <article className="center stack">
                <div className="cover">
                    <h1>{page}</h1>
                </div>
            </article>
        </main>
    );
}

function App() {
    let location = useLocation();

    const element = useRoutes([
        {
            path: "/",
            element: <Page page="Home" />,
        },
        {
            path: "/a",
            element: <Page page="A" />,
        },
        {
            path: "/b",
            element: <Page page="B" />,
        },
    ]);

    if (!element) return null;

    return (
        <main className="mlb-l">
            <article className="center stack max-is-[55ch]">
                <h1 className="text-3">Framer Route Animation</h1>
                <AnimatePresence mode="wait" initial={false}>
                    {React.cloneElement(element, { key: location.key })}
                </AnimatePresence>
            </article>
        </main>
    );
}

export default App;
