import type { CSSProperties } from "react";

/**
 * Decorative Linux-terminal code background.
 *
 * Five vertical columns of terminal / boot-log / Swift / iOS snippets
 * drift slowly DOWNWARD via CSS keyframes, each column headed by a
 * typing line that reveals characters as if being typed (pure CSS,
 * steps() timing — no per-frame React re-renders).
 *
 * The content is hardcoded, never executes, and contains no secrets.
 * - pointer-events: none, low z-index, dim opacity
 * - honors prefers-reduced-motion (static texture in globals.css)
 */

type Tone = "cmd" | "code" | "dim" | "plain";

interface TermLine {
  text: string;
  tone: Tone;
  typing?: boolean;
}

const LINES: TermLine[] = [
  { text: "localhost kernel[0]: Darwin Kernel Version 24.1.0", tone: "dim" },
  { text: "localhost com.apple.xpc.launchd[1]: service started", tone: "dim" },
  { text: "localhost syslogd[29]: Configuration Notice:", tone: "dim" },
  { text: "localhost kernel[0]: Secure Boot: chain verified", tone: "code" },
  { text: "localhost kernel[0]: Sandbox: profile loaded", tone: "code" },
  { text: "localhost kernel[0]: Secure Enclave: present", tone: "code" },
  { text: "localhost SpringBoard[41]: Research mode: read-only", tone: "dim" },
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
  { text: "localhost kernel[0]: <Info>: entitlement check: ok", tone: "dim" },
  { text: "localhost amfid[62]: <Notice>: validating trust cache", tone: "dim" },
  { text: "localhost kernel[0]: <Debug>: XNU: scheduler online", tone: "dim" },
  { text: "adnan@ios-research:~$ xcodebuild -version", tone: "cmd" },
  { text: "Xcode 16.1  •  Swift 6.0.3", tone: "dim" },
  { text: "Framework: SwiftUI / UIKit", tone: "dim" },
  { text: "Environment: Development", tone: "dim" },
  { text: "Status: Research Mode", tone: "dim" },
  { text: "localhost backboardd[44]: <Notice>: display ready", tone: "dim" },
  { text: "localhost kernel[0]: <Info>: memorystatus: ok", tone: "dim" },
  { text: "adnan@ios-research:~$ sw_vers", tone: "cmd" },
  { text: "ProductName: iOS  •  Build: Edu", tone: "dim" },
  { text: "Secure Enclave: present", tone: "code" },
  { text: "Secure Boot: chain verified", tone: "code" },
  { text: "Sandbox: enforced", tone: "code" },
  { text: "adnan@ios-research:~$ ls ~/Research/", tone: "cmd" },
  { text: "notes/  papers/  playgrounds/", tone: "dim" },
  { text: "threat-models/  writeups/", tone: "dim" },
  { text: "localhost medialibraryd[51]: <Notice>: index ready", tone: "dim" },
  { text: "adnan@ios-research:~$ cat NOTES.md", tone: "cmd" },
  { text: "# responsible disclosure first", tone: "code" },
  { text: "# document, never weaponize", tone: "code" },
  { text: "entitlement: com.apple.security.app-sandbox", tone: "dim" },
  { text: "localhost kernel[0]: <Debug>: ipc: port 0x2a41 ok", tone: "dim" },
  { text: "adnan@ios-research:~$ sysctl kern.osversion", tone: "cmd" },
  { text: "kern.osversion: 24B83", tone: "dim" },
  { text: "MobileGestalt: query (read-only)", tone: "dim" },
  { text: "localhost routined[58]: <Notice>: location: off", tone: "dim" },
  { text: "adnan@ios-research:~$ echo \"Welcome to Adnan.120hz\"", tone: "cmd" },
  { text: "Welcome to Adnan.120hz", tone: "code" },
  { text: "func study(_ topic: String) -> Knowledge {", tone: "plain" },
  { text: "  return Knowledge(topic: topic)", tone: "plain" },
  { text: "}", tone: "plain" },
  { text: "localhost kernel[0]: <Info>: cpu: 6 cores online", tone: "dim" },
  { text: "adnan@ios-research:~$ ./render --terminal --retro", tone: "cmd" },
  { text: "rendering dashboard… ok", tone: "code" },
  { text: "uptime: 99.98%  •  links: 5/5", tone: "dim" },
  { text: "adnan@ios-research:~$ whoami", tone: "cmd" },
  { text: "independent-researcher", tone: "code" },
  { text: "// learn • document • share", tone: "dim" },
];

/** One typing line per column — revealed character by character in CSS. */
const TYPING = [
  "adnan@ios-research:~$ ./boot --verbose",
  "adnan@ios-research:~$ tail -f research.log",
  "adnan@ios-research:~$ sysctl kern.osversion",
  "adnan@ios-research:~$ echo $INDEPENDENT_RESEARCH",
  "adnan@ios-research:~$ ./render --terminal --retro",
];

/** Columns with staggered speeds for a natural console feel. */
const COLUMNS = [
  { left: "1%", duration: 62, delay: -14, offset: 0, typeDur: 11, hideSm: false },
  { left: "21%", duration: 74, delay: -46, offset: 13, typeDur: 14, hideSm: false },
  { left: "41%", duration: 66, delay: -28, offset: 27, typeDur: 10, hideSm: false },
  { left: "61%", duration: 80, delay: -58, offset: 8, typeDur: 13, hideSm: true },
  { left: "81%", duration: 70, delay: -38, offset: 19, typeDur: 12, hideSm: true },
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
        // The typing line heads each seamless half of the stream;
        // the -50% keyframe loop keeps the downward scroll seamless.
        const half: TermLine[] = [
          { text: TYPING[i % TYPING.length], tone: "cmd", typing: true },
          ...rotated(col.offset),
        ];
        const stream = [...half, ...half];
        return (
          <div
            key={i}
            className={`term-col${col.hideSm ? " hide-sm" : ""}`}
            style={{
              left: col.left,
              animationDuration: `${col.duration}s`,
              animationDelay: `${col.delay}s`,
            }}
          >
            {stream.map((line, j) =>
              line.typing ? (
                <div key={j} className="term-line tone-cmd">
                  <span
                    className="term-type"
                    style={
                      {
                        "--type-ch": `${line.text.length + 1}ch`,
                        animationDuration: `${col.typeDur}s`,
                      } as CSSProperties
                    }
                  >
                    {line.text}
                  </span>
                  <span className="term-cursor" aria-hidden="true" />
                </div>
              ) : (
                <div key={j} className={`term-line tone-${line.tone}`}>
                  {line.text}
                </div>
              ),
            )}
          </div>
        );
      })}
    </div>
  );
}
