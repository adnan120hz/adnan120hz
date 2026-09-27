/**
 * Decorative Linux-terminal code background.
 *
 * Purely visual: several vertical columns of terminal / Swift / iOS
 * snippets drift slowly upward via CSS keyframes. The content is
 * hardcoded, never executes, and contains no secrets.
 *
 * - pointer-events: none, low z-index, subtle opacity
 * - no per-frame React re-renders (CSS animation only)
 * - honors prefers-reduced-motion (animation disabled in globals.css)
 */

type Tone = "cmd" | "code" | "dim" | "plain";

interface TermLine {
  text: string;
  tone: Tone;
}

const LINES: TermLine[] = [
  { text: "adnan@ios-research:~$ uname -a", tone: "cmd" },
  { text: "Darwin Kernel Version 24.1.0 [EDU]", tone: "dim" },
  { text: "Platform: iOS  •  Arch: arm64", tone: "dim" },
  { text: "adnan@ios-research:~$ echo $RESEARCH_MODE", tone: "cmd" },
  { text: "education-only", tone: "code" },
  { text: "import SwiftUI", tone: "code" },
  { text: "import Foundation", tone: "code" },
  { text: "import Security", tone: "code" },
  { text: "struct ResearchDashboard: View {", tone: "plain" },
  { text: '  let platform = "iOS"', tone: "plain" },
  { text: '  let purpose  = "Education"', tone: "plain" },
  { text: '  let mode     = "Read Only"', tone: "plain" },
  { text: "}", tone: "plain" },
  { text: "adnan@ios-research:~$ xcodebuild -version", tone: "cmd" },
  { text: "Xcode 16.1  •  Swift 6.0.3", tone: "dim" },
  { text: "Framework: SwiftUI / UIKit", tone: "dim" },
  { text: "Environment: Development", tone: "dim" },
  { text: "Status: Research Mode", tone: "dim" },
  { text: "adnan@ios-research:~$ sw_vers", tone: "cmd" },
  { text: "ProductName: iOS  •  Build: Edu", tone: "dim" },
  { text: "Secure Enclave: present", tone: "code" },
  { text: "Secure Boot: chain verified", tone: "code" },
  { text: "Sandbox: enforced", tone: "code" },
  { text: "adnan@ios-research:~$ ls ~/Research/", tone: "cmd" },
  { text: "notes/  papers/  playgrounds/", tone: "dim" },
  { text: "threat-models/  writeups/", tone: "dim" },
  { text: "adnan@ios-research:~$ cat NOTES.md", tone: "cmd" },
  { text: "# responsible disclosure first", tone: "code" },
  { text: "# document, never weaponize", tone: "code" },
  { text: "entitlement: com.apple.security.app-sandbox", tone: "dim" },
  { text: "adnan@ios-research:~$ sysctl kern.osversion", tone: "cmd" },
  { text: "kern.osversion: 24B83", tone: "dim" },
  { text: "MobileGestalt: query (read-only)", tone: "dim" },
  { text: "adnan@ios-research:~$ echo \"Welcome to Adnan.120hz\"", tone: "cmd" },
  { text: "Welcome to Adnan.120hz", tone: "code" },
  { text: "func study(_ topic: String) -> Knowledge {", tone: "plain" },
  { text: "  return Knowledge(topic: topic)", tone: "plain" },
  { text: "}", tone: "plain" },
  { text: "adnan@ios-research:~$ ./render --retro --calm", tone: "cmd" },
  { text: "rendering dashboard… ok", tone: "code" },
  { text: "uptime: 99.98%  •  links: 5/5", tone: "dim" },
  { text: "adnan@ios-research:~$ whoami", tone: "cmd" },
  { text: "independent-researcher", tone: "code" },
  { text: "// learn • document • share", tone: "dim" },
];

/** Columns with staggered speeds for a natural console feel. */
const COLUMNS = [
  { left: "1%", duration: 52, delay: -12, offset: 0 },
  { left: "21%", duration: 68, delay: -40, offset: 11 },
  { left: "41%", duration: 60, delay: -25, offset: 23 },
  { left: "61%", duration: 74, delay: -55, offset: 7 },
  { left: "81%", duration: 56, delay: -5, offset: 31 },
];

function rotated(offset: number): TermLine[] {
  const n = LINES.length;
  const k = ((offset % n) + n) % n;
  return [...LINES.slice(k), ...LINES.slice(0, k)];
}

export default function TerminalBackground() {
  return (
    <div aria-hidden="true" className="terminal-bg">
      {COLUMNS.map((col, i) => {
        // Repeat the stream enough times to always cover tall viewports;
        // the -50% keyframe loop keeps the scroll seamless.
        const stream = [...rotated(col.offset), ...rotated(col.offset)];
        return (
          <div
            key={i}
            className="term-col"
            style={{
              left: col.left,
              animationDuration: `${col.duration}s`,
              animationDelay: `${col.delay}s`,
            }}
          >
            {stream.map((line, j) => (
              <div key={j} className={`term-line tone-${line.tone}`}>
                {line.text}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
