/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-100 font-sans p-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-10 shadow-2xl text-center"
      >
        <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-full mb-6">
          <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
        </div>
        <h1 className="text-3xl font-light tracking-tight mb-3 text-slate-50">
          Ready to Build
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          The workspace is initialized and functioning normally. What would you like to create today?
        </p>
        <div className="text-xs font-mono text-slate-600">
          workspace active
        </div>
      </motion.div>
    </div>
  );
}
