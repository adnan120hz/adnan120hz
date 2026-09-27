import type { CSSProperties } from "react";

/**
 * Decorative Linux-terminal code background.
 *
 * Seven vertical columns of terminal / boot-log / Swift / iOS snippets
 * drift slowly DOWNWARD via CSS keyframes, each column headed by a
 * typing line that reveals characters as if being typed (pure CSS,
 * steps() timing — no per-frame React re-renders).
 *
 * All seven columns render on every viewport so the code fills the
 * left, center, and right of the screen, including on mobile.
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
  { text: "localhost kernel[0]: <Info>: mach: ipc space ready", tone: "dim" },
  { text: "localhost dyld[1]: <Notice>: shared cache loaded", tone: "dim" },
  { text: "localhost kernel[0]: <Info>: codesign: signature valid", tone: "code" },
  { text: "localhost trustd[63]: <Notice>: cert chain: ok", tone: "dim" },
  { text: "adnan@ios-research:~$ codesign -dv /Research/App", tone: "cmd" },
  { text: "Authority: Apple Development (read-only)", tone: "dim" },
  { text: "adnan@ios-research:~$ swift --version", tone: "cmd" },
  { text: "swift-driver 1.115  •  Swift 6.0.3", tone: "dim" },
  { text: "import Dispatch", tone: "code" },
  { text: "import Combine", tone: "code" },
  { text: 'let queue = DispatchQueue(label: "research")', tone: "plain" },
  { text: 'queue.async { study("XNU") }', tone: "plain" },
  { text: "localhost kernel[0]: <Debug>: dispatch: queue ready", tone: "dim" },
  { text: "adnan@ios-research:~$ man sandbox", tone: "cmd" },
  { text: "sandbox(7): app sandbox profile", tone: "dim" },
  { text: "// least privilege, always", tone: "dim" },
  { text: "localhost sandboxd[66]: <Notice>: profile compiled", tone: "dim" },
  { text: "localhost WebKit[77]: <Notice>: process: edu-mode", tone: "dim" },
  { text: "localhost kernel[0]: <Info>: IOKit: matching done", tone: "dim" },
  { text: "adnan@ios-research:~$ otool -L ResearchKit", tone: "cmd" },
  { text: "linked: SwiftUI, Foundation, Security", tone: "dim" },
  { text: "struct ThreatModel {", tone: "plain" },
  { text: '  let scope = "concepts only"', tone: "plain" },
  { text: '  let rule  = "no live targets"', tone: "plain" },
  { text: "}", tone: "plain" },
  { text: "localhost kernel[0]: <Info>: memorystatus: jetsam ok", tone: "dim" },
  { text: "adnan@ios-research:~$ log show --last 1m --edu", tone: "cmd" },
  { text: "events: 42  •  mode: read-only", tone: "dim" },
  { text: "localhost keychaind[69]: <Notice>: edu vault locked", tone: "dim" },
  { text: "adnan@ios-research:~$ file Research.playground", tone: "cmd" },
  { text: "Swift playground: text", tone: "dim" },
  { text: "// document • learn • share", tone: "code" },
  { text: "localhost Metal[71]: <Notice>: GPU: research profile", tone: "dim" },
  { text: "localhost kernel[0]: <Info>: smc: sensors ok", tone: "dim" },
  { text: "adnan@ios-research:~$ uptime", tone: "cmd" },
  { text: "19:41  up 99 days,  education mode", tone: "dim" },
];

/** One typing line per column — revealed character by character in CSS. */
const TYPING = [
  "adnan@ios-research:~$ ./boot --verbose",
  "adnan@ios-research:~$ tail -f research.log",
  "adnan@ios-research:~$ sysctl kern.osversion",
  "adnan@ios-research:~$ echo $INDEPENDENT_RESEARCH",
  "adnan@ios-research:~$ ./render --terminal --retro",
  "adnan@ios-research:~$ swift build --edu",
  "adnan@ios-research:~$ log stream --read-only",
];

/** Columns with staggered speeds for a natural console feel. */
const COLUMNS = [
  { left: "1%", duration: 60, delay: -12, offset: 0, typeDur: 11 },
  { left: "15%", duration: 72, delay: -44, offset: 17, typeDur: 14 },
  { left: "29%", duration: 64, delay: -26, offset: 34, typeDur: 10 },
  { left: "43%", duration: 78, delay: -56, offset: 51, typeDur: 13 },
  { left: "57%", duration: 66, delay: -32, offset: 68, typeDur: 12 },
  { left: "71%", duration: 74, delay: -48, offset: 85, typeDur: 11 },
  { left: "85%", duration: 62, delay: -20, offset: 9, typeDur: 14 },
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
            className="term-col"
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
