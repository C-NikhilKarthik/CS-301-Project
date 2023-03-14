import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function SidebarComponent({ op, select, image, text }) {
  return select ? (
    <motion.div
      layout
      className="text-slate-100 cursor-pointer my-2 w-full relative p-2 bg-slate-800 rounded flex gap-3"
    >
      <span className="material-symbols-outlined">{image}</span>
      <AnimatePresence>
        {op && (
          <motion.p
            animate={{ opacity: 1, duration: 1 }}
            initial={{ opacity: 0 }}
            layout
            className="whitespace-nowrap w-full"
          >
            {text}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  ) : (
    <motion.div
      layout
      className="text-slate-100 cursor-pointer my-2 w-full relative p-2 hover:bg-slate-800 transition-[background-color] duration-[400] rounded flex gap-3"
    >
      <span className="material-symbols-outlined">{image}</span>
      <AnimatePresence>
        {op && (
          <motion.p
            animate={{ opacity: 1,duration:1 }}
            initial={{ opacity: 0 }}
            layout
            className="whitespace-nowrap w-full"
          >
            {text}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default SidebarComponent;
