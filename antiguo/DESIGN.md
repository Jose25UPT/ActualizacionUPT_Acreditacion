# Design System Specification: Editorial Academic Excellence

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Curator."** 

Unlike standard academic portals that feel cluttered and utilitarian, this system treats digital space like a high-end editorial journal. It moves away from rigid, "boxed-in" grids and instead utilizes intentional asymmetry, generous white space, and a sophisticated layering of surfaces. The goal is to convey authority through restraint—using the lead turquoise as a precision tool rather than a blunt instrument. By overlapping elements and utilizing a high-contrast typography scale, we create a rhythmic, breathing layout that feels both intellectually rigorous and modern.

## 2. Color Strategy
The palette is anchored by the lead turquoise (`#00a0b1`), balanced against a cool, academic neutral scale.

### Palette Architecture
*   **Primary (`#006874`) & Primary Container (`#00a0b1`):** These are our "Action" colors. The lead turquoise (`primary_container`) should be used for significant interactive regions and brand-defining moments.
*   **Tertiary (`#924c0b`):** A sophisticated ochre used sparingly for "Editor's Notes" or specific calls to attention that require warmth against the cool primary tones.
*   **The "No-Line" Rule:** To achieve a premium feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through background shifts. For example, a `surface-container-low` section should sit directly on a `surface` background. The transition of color *is* the divider.

### Surface Hierarchy & Signature Textures
*   **Nesting:** Depth is created by "stacking" layers. Use the `surface-container` tiers (Lowest to Highest) to define importance. An inner card should use `surface-container-lowest` when placed on a `surface-container-low` background to create a soft, natural lift.
*   **The Glass & Gradient Rule:** For hero sections or floating navigation, use Glassmorphism—apply a semi-transparent background color with a heavy `backdrop-blur`.
*   **Signature Gradients:** To provide "soul," use subtle linear gradients transitioning from `primary` to `primary_container` (turquoise) for main CTAs. This adds a three-dimensional luster that flat color cannot replicate.

## 3. Typography
We use a "Human-Centric Authority" pairing: **Noto Serif** for the academic soul and **Public Sans** for the functional clarity.

*   **Display & Headline (Noto Serif):** Used for large-scale storytelling. The `display-lg` (3.5rem) and `headline-md` (1.75rem) tiers should feel like the masthead of a prestigious publication.
*   **Body & Labels (Public Sans):** Used for maximum readability. This typeface provides the "Steel" in the system—precise, reliable, and invisible.
*   **Hierarchy as Brand:** Use extreme scale differences (e.g., a `display-sm` headline followed immediately by `label-md` metadata) to create an editorial cadence that breaks the monotony of traditional "web" layouts.

## 4. Elevation & Depth
In this design system, depth is a matter of light and material, not artificial structure.

*   **Tonal Layering:** Avoid shadows where possible. Rely on the `surface-container` tiers to create hierarchy.
*   **Ambient Shadows:** When an element must "float" (e.g., a modal or floating action button), use extra-diffused shadows. 
    *   *Shadow Rule:* Large blur values, 4%-8% opacity. The shadow must be tinted with the `on-surface` color (`#171d1e`) to feel like natural ambient light.
*   **The "Ghost Border" Fallback:** If a border is essential for accessibility, it must be a "Ghost Border": use the `outline-variant` (`#bcc9cb`) at **15% opacity**. Never use 100% opaque borders.
*   **Materiality:** Utilize `backdrop-blur` on headers and overlay cards to allow the lead turquoise and surface colors to bleed through, ensuring the UI feels like a single integrated environment rather than a collection of separate parts.

## 5. Components

### Buttons
*   **Primary:** A subtle gradient from `primary` to `primary_container`. Roundedness: `md` (0.375rem).
*   **Secondary:** No background, `outline-variant` ghost border, and `primary` text.
*   **State:** On hover, increase the opacity of the gradient or shift the tonal depth of the surface layer.

### Input Fields
*   **Style:** Minimalist. Use a `surface-container-high` background with a `primary` underline (2px) on focus. 
*   **Label:** Always use `label-md` (Public Sans) in `on-surface-variant` color.

### Cards & Lists
*   **The "No-Divider" Rule:** Forbid 1px dividers between list items. Use vertical white space (32px or 48px) or a alternating subtle background shift between `surface` and `surface-container-low`.
*   **Editorial Cards:** Cards should feature asymmetrical padding—more breathing room on the leading edge to guide the eye toward the content.

### Chips
*   **Filter Chips:** Use `secondary_container` with `on_secondary_container` text. These should be pills (Rounded: `full`) to contrast against the more architectural `md` corners of the buttons.

## 6. Do's and Don'ts

### Do
*   **Do** use the lead turquoise (`#00a0b1`) for moments of inspiration and interaction.
*   **Do** embrace asymmetry. Shift your headlines 40px to the left of your body text to create a modern editorial feel.
*   **Do** use `surface-bright` and `surface-container-lowest` to create high-contrast focal points on information-dense pages.

### Don't
*   **Don't** use black for text. Always use `on-surface` (`#171d1e`) for a softer, more premium reading experience.
*   **Don't** use standard drop shadows. If it looks like a "box shadow," it's too heavy. It should look like a soft glow.
*   **Don't** use lines to separate content. Use the Spacing Scale and color transitions to define boundaries.
*   **Don't** center-align long-form body text. Keep it left-aligned for academic readability.