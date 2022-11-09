import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function App() {
    let [isVisible, setIsVisible] = useState(true);
    return (
        <main className="mlb-l">
            <article className="center stack max-is-[55ch]">
                <h1 className="text-3">Framer Motion Basics</h1>
                <p>
                    Start with <code>{"<motion.>"} component</code>
                </p>
                <motion.div
                    className="box bg-dark-blue-8"
                    animate={{ x: 100, opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 3 }}
                >
                    Animate my opacity and horizontal movement!
                </motion.div>
                <p>
                    Animate unmounting components with{" "}
                    <code>{`<AnimatePresence>`}</code>
                </p>
                <div className="cluster">
                    <label htmlFor="">mount/unmount</label>
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={isVisible}
                        onChange={() => setIsVisible(!isVisible)}
                        className="bs-m is-m"
                    />
                </div>
                <AnimatePresence>
                    {isVisible && (
                        <motion.div
                            className="box bg-dark-blue-8"
                            animate={{ x: 100, opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 3 }}
                            exit={{ x: -100, opacity: 0 }}
                        >
                            Animate my opacity and horizontal movement!
                        </motion.div>
                    )}
                </AnimatePresence>
            </article>
        </main>
    );
}

export default App;
