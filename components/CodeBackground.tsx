"use client";

import { motion, useReducedMotion } from "framer-motion";

// Decorative placeholder text only — never executed as code.
const SNIPPETS: string[][] = [
  [
    "import SwiftUI",
    "import Security",
    "struct SecurityResearch {",
    '  let platform = "iOS"',
    '  let mode = "Educational"',
    "  var sandbox = true",
    "// sandbox: enforced",
    "  func analyze() -> Void {",
    "    // observe, don't exploit",
    "  }",
    "}",
    "let session = ResearchSession()",
    "// least privilege",
    "guard authorized else { return }",
  ],
  [
    "import Foundation",
    "class ThreatModel {",
    '  let scope = "iOS"',
    "  var mitigations: [String] = []",
    "// sandbox: enforced",
    "  func harden() {",
    "    // defense in depth",
    "  }",
    "}",
    "import CryptoKit",
    'let mode = "Educational"',
    "// audit, don't attack",
    "struct Finding {",
    "  var severity = \"info\"",
    "}",
  ],
  [
    "import Combine",
    "enum Lab {",
    '  case ios, macos',
    "}",
    "struct SecurityResearch {",
    '  let platform = "iOS"',
    "// sandbox: enforced",
    "  func scan() async {",
    "    // read-only probes",
    "  }",
    'let mode = "Educational"',
    "}",
    "import Security",
    "// responsible disclosure",
    "guard consented else { return }",
  ],
  [
    "import os.log",
    "struct AuditTrail {",
    '  let mode = "Educational"',
    "// sandbox: enforced",
    "  func log(_ event: String) {",
    "    // trace everything",
    "  }",
    "}",
    "import SwiftUI",
    'let platform = "iOS"',
    "class LabPolicy {",
    '  let rule = "do no harm"',
    "}",
    "// verify, then trust",
  ],
];

const COLUMN_STYLES = [
  { left: "4%", duration: 52, color: "text-cyan-300", opacity: 0.12, hide: "" },
  { left: "28%", duration: 68, color: "text-blue-400", opacity: 0.08, hide: "hidden sm:block" },
  { left: "55%", duration: 60, color: "text-white", opacity: 0.06, hide: "hidden md:block" },
  { left: "80%", duration: 74, color: "text-cyan-300", opacity: 0.1, hide: "hidden lg:block" },
];

export default function CodeBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {SNIPPETS.map((lines, col) => {
        const style = COLUMN_STYLES[col % COLUMN_STYLES.length];
        // Duplicate the block so the -50% loop is seamless.
        const doubled = [...lines, ...lines, ...lines, ...lines];
        return (
          <motion.div
            key={col}
            className={`absolute top-0 h-full ${style.hide}`}
            style={{ left: style.left }}
            animate={reduceMotion ? undefined : { y: ["0%", "-50%"] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: style.duration, repeat: Infinity, ease: "linear" }
            }
          >
            <pre
              className={`text-[10px] leading-6 font-mono whitespace-pre ${style.color}`}
              style={{ opacity: style.opacity }}
            >
              {doubled.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </pre>
          </motion.div>
        );
      })}
    </div>
  );
}
