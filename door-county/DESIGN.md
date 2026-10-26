---
name: Family Trip — Door County
description: A compact bilingual family lodging shortlist with direct booking resources.
colors:
  paper: "#faf9f6"
  ink: "#252525"
  green: "#086359"
  forest: "#173e38"
  line: "#deddd8"
  muted: "#626262"
typography:
  display:
    fontFamily: "DM Sans, Noto Sans KR, sans-serif"
    fontSize: "clamp(2rem, 3.9vw, 3.3rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-.03em"
  body:
    fontFamily: "DM Sans, Noto Sans KR, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  control: "6px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "white"
    rounded: "{rounded.control}"
    padding: "11px 18px"
  button-primary-hover:
    backgroundColor: "{colors.forest}"
---

# Design System: Family Trip — Door County

## Overview

Implementation record for `index.html`, `style.css`, and `page.js`, captured October 26, 2026. Mode: Read. The surface inherits Family Trip’s warm paper, green accents, and sans-serif typography. It provides five lodging candidates in English and Korean, with availability caveats and direct property resources. There is no approved visual comp. These are implemented decisions, not a claim of separate visual or accessibility certification.

The page uses a compact introduction, visible research status, two photographed entries, three text entries, and a practical closing note. Property names and resource links remain prominent.

## Colors

Paper is the page background. Ink is primary text; muted text carries addresses, dates, captions, and supporting facts. Green identifies links and primary actions. Forest gives the closing section and strong labels their darker emphasis. Fine neutral lines separate entries. A pale green status panel distinguishes availability limitations without suggesting confirmed inventory.

## Typography

Use sans-serif throughout, including Korean text and fallbacks. Headings have medium weight, close letter spacing, and natural wrapping. The main heading uses the available container width; dates sit beneath it. Do not add decorative line breaks or narrow heading containers.

At widths up to 800px the English main heading is 2.25rem; the Korean main heading is 2.1rem with `word-break: keep-all`. Body text retains a generous line height. Supporting labels are smaller and usually semibold or bold.

## Layout

The centered content width is at most 1200px, with 40px side margins on larger screens. At widths up to 800px, side margins become 18px and all property content uses one column.

The first two entries pair photographs with descriptions and facts; the second reverses the desktop image placement. Desktop photos remain sticky while their associated entry scrolls. Mobile photos return to normal document flow. Remaining entries use a two-column text layout on desktop, with descriptions on the left and facts and actions on the right. Dividers and spacing separate entries without enclosing them in cards.

The closing section spans the page and holds two text columns on desktop, one on mobile. Print rules remove navigation and controls and avoid splitting individual entries where possible.

## Elevation & Depth

The page is flat. Background color and dividers establish hierarchy. Only the temporary share announcement has a subtle shadow; lodging entries have none.

## Shapes

Controls, photographs, and the status panel use modest rounded corners. Buttons are rectangular with a minimum comfortable height rather than pill-shaped. Photographs crop to a consistent ratio, wider on mobile.

## Components

- **Header:** Family Trip home link, language toggle, and share control. Controls use outlined neutral styling.
- **Status panel:** Gives the availability caveat before the property list. Keep unpublished room availability and unquoted rates explicit.
- **Property shortcuts:** Wrapping anchor links with at least 44px height. Preserve recognizable property names.
- **Property entry:** Name, location, recommendation, short description, and a definition list for pet policy, one-night conditions, and room fit. Separate the main availability action from phone, policy, photo, and map links.
- **Primary action:** Green fill, white text, and a minimum height of 46px. Hover changes to forest.
- **Research footer:** Dated caveats, expandable source links, and a home link.
- **Language and sharing:** The language toggle updates the document language and `lang` query parameter. Share uses native sharing when available, otherwise clipboard copy with a polite status announcement.

Accessibility provisions include semantic landmarks, a skip link, image alternative text, visible keyboard focus outlines, labeled navigation, native buttons, and a polite live region. Reduced-motion settings disable smooth scrolling. Many standalone links have 44px minimum height; inline caption links do not. Some navigation labels, image alternatives, and the skip link remain in English when Korean content is selected. Verify actual font loading, contrast, keyboard behavior, and both language layouts in rendered desktop and mobile checks before claiming conformance.

## Do's and Don'ts

- Keep headers compact and let headings wrap naturally.
- Preserve sans-serif typography in screen and print outputs.
- Preserve both language versions when editing visible content.
- Keep candidate status and booking uncertainty visible beside useful actions.
- Use photographs as property illustrations, without implying a guaranteed room or current conditions.
- Do not add decorative heroes, invented availability badges, or unsupported prices.
- Do not insert new discussion questions or reflection prompts into the page.
