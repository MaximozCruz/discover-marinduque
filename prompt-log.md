## Task 1 - Sector Selector
**Sector:** Tourism & Cultural Innovation
**Local challenge:** Visitors and residents may need a simple place to discover examples of destinations and local cultural information in Marinduque. Information spread across different sources can make initial trip planning less convenient.

**Target users:** Local residents, students, and visitors who want a simple introduction to places and culture in Marinduque.

**Proposed project:** Discover Marinduque - Community Tourism Guide.

**Key features:**
1. Search/filter sample destination cards.
2. Add or remove destinations from a personal trip list.
3. Responsive navigation and a short local-culture information section.

**Scope and limitations:** One responsive page using semantic HTML, CSS, and vanilla JavaScript. No backend, database, authentication, or external APIs. Content is demonstration information and does not provide live travel updates.

## Task 2 - Zero-Shot Prompting

**Objective:** Generate a first baseline page using a direct instruction without examples.

**Prompt:**
Create a simple webpage about tourism in Marinduque, Philippines. Include a title, some tourist destinations, and basic styling using HTML, CSS, and JavaScript.

**Output:**
Iâ€™ll first check the workspace for any existing starter files so the page fits whatâ€™s already there; if itâ€™s empty, Iâ€™ll build a compact, responsive single-page tourism guide with HTML, CSS, and a little interactive JavaScript.

Read 

The workspace is empty, so thereâ€™s no existing design or code path to preserve. Iâ€™m making this as three small vanilla files: a destination guide with category filters, responsive styling, and clear labels where the photos are illustrative rather than verified photos of each landmark.

Generating patch (233 lines) in , , 

The page is in place, including the destination filters and responsive layout. Iâ€™m checking the JavaScript syntax first, then Iâ€™ll report the files and any verification limits.

Ran terminal command: node --check script.js

Checked , , , no problems found

Created a responsive Marinduque tourism webpage with destination descriptions, Nature/Culture filters, and basic JavaScript interactions.

Files: `index.html`, `styles.css`, `script.js`

JavaScript syntax check and workspace diagnostics passed. Destination images are illustrative and loaded from Unsplash.

Made changes.

**Observation:**
The prompt is short and easy to understand, but it leaves many details open. Copilot may choose its own layout, content, and features. It may not include search, a trip list, responsive navigation, accessibility requirements, or clear limits on external tools.

## Task 3 - Structured Prompt: Anatomy of an Effective Prompt

**Objective:** Improve the baseline using Role, Task, Context, Constraints, Expected Output, and Acceptance Criteria.

**Prompt:**
Act as a frontend web developer experienced with semantic HTML, responsive CSS, and accessible JavaScript. Create a single-page website called â€œDiscover Marinduqueâ€ that introduces tourism destinations and local culture. The intended users are local residents, students, and visitors who want a simple introduction to Marinduque, Philippines. This is a student demonstration prototype. Use semantic HTML, CSS, and vanilla JavaScript only. Do not use frameworks, backend services, a database, authentication, or external APIs. Use clearly identified demonstration content and do not present live travel updates or official advisories.

**Expected Output:** Provide complete `index.html`, `style.css`, and `script.js` files. Include destination cards, a search field, a trip list that lets users add and remove destinations, and a responsive navigation menu.

**Acceptance Criteria:** The page must fit mobile and desktop screens; the search field must filter destination cards; adding and removing destinations must update the trip list; the navigation button must update its `aria-expanded` value and work with keyboard interaction; labels and visible focus indicators must be present. Explain how to test each feature.

**Output:**
The existing page already has the requested destination guide and interactions. Iâ€™m aligning the visible heading with the exact â€œDiscover Marinduqueâ€ name and adding a clear student-demo notice so visitors wonâ€™t mistake sample information for live updates or official advisories.

Generating patch (9 lines) in 

Checked , , , no problems found

The single-page site is ready in `index.html`, `styles.css`, and `script.js`. It includes searchable, filterable destination cards, a trip list that saves in the browser, responsive keyboard-operable navigation, and a local-culture section. The visible title now reads â€œDiscover Marinduque,â€ and the footer identifies it as a student demonstration with sample information only.

Workspace diagnostics report no errors.

Made changes.

**Observation:**
The structured prompt gives Copilot clearer requirements and limits its technology choices.

## Task 4A â€” Few-Shot Prompting

**Objective:** Use examples to demonstrate a consistent destination data format.

**Prompt:**
Create destination entries for the Discover Marinduque tourism webpage. Follow these examples exactly:
Name: Poctoy White Beach  
Location: Torrijos  
Category: Beach  
Description: A coastal destination for a relaxing beach visit.
Generate two additional sample destination entries using the same four fields. Render the entries as consistent semantic HTML cards. Preserve the existing CSS naming convention if one is provided. Do not invent live opening hours, prices, or travel advisories.

**Output:**
Iâ€™ll keep the existing `.destination-card` styling and use the requested four fields in the same order for three cards: the exact Poctoy example plus two sample entries based on places already featured on the page. Iâ€™m checking the card markup and filter labels so the new entries fit without breaking search or trip-list controls.

Read , lines 38 to 111

Read , lines 38 to 100

Read 

The page currently has six cards, but the prompt calls for the provided example plus two additional sample entries. Iâ€™m narrowing the featured set to those three, keeping the existing card class, category filters, and trip-list IDs intact, and rendering Name, Location, Category, and Description as labeled semantic fields.

Generating patch (49 lines) in , 

Checked , , no problems found

The three cards now follow the same labeled field structure, and the requested Poctoy wording is exact. The markup/style checks are clean; I noticed the first cardâ€™s decorative number still reflects its former position, so Iâ€™m correcting that before the final validation.

Generating patch (6 lines) in 

Ran terminal command: node --check script.js

Checked , , , no problems found

Updated the destination section in `index.html` with three consistent semantic cards using the fields Name, Location, Category, and Description. Poctoy White Beach uses the exact details provided; the additional sample entries are Tres Reyes Islands and Boac Cathedral. Existing card styling, filters, and trip-list controls are preserved.

Diagnostics and the JavaScript syntax check passed.

Made changes.

**Observation:**
The examples demonstrate the intended structure and help make each destination card consistent.

## Task 4B â€” Role Assignment Prompting

**Objective:** Review the same page from an accessibility specialistâ€™s perspective.

**Prompt:**
Act as a frontend accessibility reviewer familiar with semantic HTML and keyboard-accessible interfaces. Review the current Discover Marinduque prototype files. Check heading structure, landmark elements, form labels, button names, keyboard operation, visible focus indicators, color contrast, and whether the mobile navigation button updates `aria-expanded` accurately. Identify specific issues in the supplied code and recommend the smallest targeted fixes. Do not redesign the page or add frameworks. Provide a short test procedure for each important recommendation.

**Output:**
Iâ€™ll review the current HTML, CSS, and JavaScript against each requested accessibility area, especially contrast and the mobile menuâ€™s state/focus behavior. Iâ€™ll report only concrete issues with targeted fixes and quick tests; no redesign or code changes.

Read 

Read 

Read 

The structure and controls are largely sound: there is one `h1`, labeled sections, an explicit search label, native buttons, and a menu toggle that updates `aria-expanded` and returns focus on Escape. Iâ€™m checking exact contrast ratios and line locations now; the most likely actionable issue is low-contrast small text and focus styling.

Ran terminal command: Select-String -Path index.html,styles.css,script.js -Pattern '<h1|<h2|<h3|<header|<main|<nav|<footer|<label|aria-expanded|aria-label|focus-visible|--paper:|--muted:|--coral:|placeholder|\.menu-toggle|closeNavigation|navigation\.querySelectorAll|keydown|\.card-category|\.filter-button span|\.results-message|\.photo-note|\.site-footer p' | ForEach-Object { "{0}:{1}: {2}" -f $_.Path, $_.LineNumber, $_.Line.Trim() }; node -e 'function lum(h){const c=h.match(/[a-f0-9]{2}/gi).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return .2126*c[0]+.7152*c[1]+.0722*c[2]}function ratio(a,b){let x=lum(a),y=lum(b);return ((Math.max(x,y)+.05)/(Math.min(x,y)+.05)).toFixed(2)};[["#687b70","#f6f4eb","muted/paper"],["#e8795b","#f6f4eb","coral/paper"],["#78887e","#fffefa","placeholder/field"],["#ffffff","#174e42","white/green"],["#f2ad83","#174e42","peach/green"],["#e8795b","#fffefa","coral/white"]].forEach(([a,b,n])=>console.log(n+" "+ratio(a,b)+":1"))'
Completed with input: Select-String -Path index.html,styles.css,script.js -Pattern '<h1|<h2|<h3|<header|<main|<nav|<footer|<label|aria-expanded|aria-label|focus-visible|--paper:|--muted:|--coral:|placeholder|\.menu-toggle|closeNavigation|navigation\.querySelectorAll|keydown|\.card-category|\.filter-button span|\.results-message|\.photo-note|\.site-footer p' | ForEach-Object { "{0}:{1}: {2}" -f $_.Path, $_.LineNumber, $_.Line.Trim() }; node -e 'function lum(h){const c=h.match(/[a-f0-9]{2}/gi).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return .2126*c[0]+.7152*c[1]+.0722*c[2]}function ratio(a,b){let x=lum(a),y=lum(b);return ((Math.max(x,y)+.05)/(Math.min(x,y)+.05)).toFixed(2)};[["#687b70","#f6f4eb","muted/paper"],["#e8795b","#f6f4eb","coral/paper"],["#78887e","#fffefa","placeholder/field"],["#ffffff","#174e42","white/green"],["#f2ad83","#174e42","peach/green"],["#e8795b","#fffefa","coral/white"]].forEach(([a,b,n])=>console.log(n+" "+ratio(a,b)+":1"))'
Tool execution failed with exit code 1

The source confirms the heading hierarchy, landmarks, labels, button names, and menu state logic are in place. My first contrast-calculation command hit a PowerShell quoting issue, so Iâ€™m rerunning that check with native PowerShell math before I finalize the review findings.

Ran terminal command: function Get-Lum($hex) { $r=[Convert]::ToInt32($hex.Substring(1,2),16)/255; $g=[Convert]::ToInt32($hex.Substring(3,2),16)/255; $b=[Convert]::ToInt32($hex.Substring(5,2),16)/255; $channels=@($r,$g,$b) | ForEach-Object { if ($_ -le 0.04045) { $_ / 12.92 } else { [math]::Pow(($_ + 0.055) / 1.055, 2.4) } }; return 0.2126*$channels[0]+0.7152*$channels[1]+0.0722*$channels[2] }; function Get-Ratio($first,$second) { $a=Get-Lum $first; $b=Get-Lum $second; return ([math]::Max($a,$b)+0.05)/([math]::Min($a,$b)+0.05) }; $pairs=@(@('#687b70','#f6f4eb','muted on paper'),@('#e8795b','#f6f4eb','coral on paper'),@('#78887e','#fffefa','placeholder on input'),@('#ffffff','#174e42','white on green'),@('#f2ad83','#174e42','peach on green'),@('#e8795b','#fffefa','focus coral on white')); foreach ($pair in $pairs) { $ratio=Get-Ratio $pair[0] $pair[1]; Write-Output ('{0}: {1:N2}:1' -f $pair[2],$ratio) }

**Findings**

- **High: Several text colors fail WCAG AA contrast.** In `styles.css:5`, muted text on the paper background is **4.09:1**; coral text on paper is **2.60:1**; and the search placeholder is **3.70:1** (`styles.css:51`). These are below the **4.5:1** target for normal-sized text. Darken the muted, coral, and placeholder colors; verify each actual text/background pairing with a contrast checker. The white and peach text on the green culture section pass.
- **Medium: The keyboard focus outline is low contrast.** The coral outline in `styles.css:17` measures **2.60:1** against the paper background and **2.84:1** against white. Use a focus color that reaches at least **3:1** against the adjacent background, with a contrasting override on dark sections. Test by tabbing through links, buttons, and the search input.

**Checks That Pass**

The page has a clear heading hierarchy and semantic header, navigation, main, and footer landmarks. Sections have accessible names, the search input has an associated label, and buttons have names. The mobile menuâ€™s `aria-expanded` starts false and is updated when toggled; Escape closes it and returns focus to the menu button (`script.js:122`).

**Quick Test**

At a narrow viewport, use Tab and Enter to open the menu; confirm `aria-expanded="true"` and that links appear. Press Escape; confirm it closes, reports false, and focus returns to the toggle. Then keyboard-test the search and destination controls, checking that focus remains visible and text is readable.

**Observation:**
The role instruction focuses the review on accessibility instead of general design.


## Task 5 â€” Structured Analysis and Refinement

**Objective:** Diagnose a concrete issue, apply a small correction, and verify the result.

**Prompt:**
Review the supplied Discover Marinduque HTML, CSS, and JavaScript against these requirements: destination search filters cards; add/remove buttons update the trip list and their `aria-pressed` states; the mobile navigation button updates `aria-expanded`; and the page remains usable on narrow screens. Identify the two most important issues supported by specific code evidence. For each issue, state the likely cause, propose the smallest correction, and provide a test procedure. Do not rewrite unrelated components or claim that a fix is verified until it has been tested.

**Output:**
I found one direct requirements mismatch: destination add buttons update the list, but the code never gives them or their changed state an `aria-pressed` value. Iâ€™m checking the exact implementation and navigation focus handling now to confirm the second issue rather than infer one from the prompt.

Ran terminal command: Select-String -Path index.html,script.js,styles.css -Pattern 'trip-add|trip-remove|aria-pressed|renderTripList|disabled|menu-toggle|closeNavigation|is-open|addEventListener\("click"|keydown|destination-grid|destinationCards\.forEach|grid-template-columns: 1fr|@media \(max-width' | ForEach-Object { "{0}:{1}: {2}" -f (Split-Path $_.Path -Leaf), $_.LineNumber, $_.Line.Trim() }

**1. Trip-list buttons donâ€™t expose their pressed state.** The cardâ€™s Add button is disabled and relabeled when saved (`script.js:53`); the add/remove handlers update the list but never set `aria-pressed` (`script.js:102`). This leaves the requested toggle state unavailable to assistive technology.

Smallest correction: make each cardâ€™s Add button a toggle, initialize `aria-pressed="false"`, and update its pressed state and label when adding or removing. Keep the separate trip-list Remove button as a normal action; it doesnâ€™t need `aria-pressed`.

**Test:** Activate Add with a keyboard. Confirm the place appears in the trip list and the card button reports pressed. Remove it from the list and confirm the card button reports not pressed.

**2. Mobile navigation may leave keyboard focus on a hidden link.** Activating a navigation link calls `closeNavigation` (`script.js:136`), which removes the open class; at mobile widths that hides the nav with `display: none` (`styles.css:109`). Focus is not moved after the focused link disappears.

Smallest correction: on link activation, move focus to the destination heading or section as the menu closes.

**Test:** At a narrow viewport, open the menu with the keyboard, tab to a link, and press Enter. Confirm focus moves to the destination and the next Tab continues from there, rather than restarting at the top or landing on hidden content.

Search filtering, list updates, the menuâ€™s `aria-expanded` toggle, and one-column destination cards at small widths are present in the source. I did not run browser tests, so these behaviors and recommendations remain unverified.

## Task 6 â€” Final Comparison

Zero-Shot - The brief prompt produced a basic Marinduque tourism page with destination cards, Nature/Culture filters, responsive styling, and basic JavaScript. The layout and feature choices were largely left to Copilot.

Structured Prompt - The page was aligned with the â€œDiscover Marinduqueâ€ name and expanded to include a search field, add/remove trip list, responsive navigation, local-culture information, and a student-demonstration notice. The project stayed within semantic HTML, CSS, and vanilla JavaScript.

Few-Shot - The destination section was narrowed to three cards. Poctoy White Beach followed the supplied example, while Tres Reyes Islands and Boac Cathedral used the same four labeled fields in the same order. Existing styling and interactive controls were preserved.

Role Assignment - The accessibility review confirmed several sound semantic and keyboard-navigation features, while identifying low contrast for some text and the focus outline, plus a potential focus issue when the mobile menu closes. The recommendations were not implemented in the website.

Structured Analysis - The code review found that Add buttons do not expose `aria-pressed`, and that closing the mobile menu after link activation may leave focus on a hidden link. Search, filters, trip-list add/remove behavior, localStorage persistence, and narrow-screen card layout are present in the code. The proposed fixes were not applied, and no browser tests were run, so their success was not verified.

## Final Reflection

This activity showed me that prompt engineering is important in AI-assisted web development because the quality of generated code depends partly on how clearly requirements are communicated. A zero-shot prompt is useful for a quick starting point, but it can leave important design and functionality decisions to the AI. A structured prompt provides role, task, context, constraints, expected output, and acceptance criteria, so the result can be compared against clear requirements. Few-shot prompting demonstrates the format through examples, while role assignment directs attention to a specialized concern such as accessibility. Structured analysis helps identify a specific issue and plan a targeted correction.

I also learned that generated code should not be accepted just because it looks correct. The developer must inspect the HTML, CSS, and JavaScript, test the interactions, check mobile responsiveness and accessibility, and verify factual content. The best version should be selected based on the requirements and actual test results, not merely on appearance.## Task 1 - Sector Selector
**Sector:** Tourism & Cultural Innovation
**Local challenge:** Visitors and residents may need a simple place to discover examples of destinations and local cultural information in Marinduque. Information spread across different sources can make initial trip planning less convenient.

**Target users:** Local residents, students, and visitors who want a simple introduction to places and culture in Marinduque.

**Proposed project:** Discover Marinduque - Community Tourism Guide.

**Key features:**
1. Search/filter sample destination cards.
2. Add or remove destinations from a personal trip list.
3. Responsive navigation and a short local-culture information section.

**Scope and limitations:** One responsive page using semantic HTML, CSS, and vanilla JavaScript. No backend, database, authentication, or external APIs. Content is demonstration information and does not provide live travel updates.

## Task 2 - Zero-Shot Prompting

**Objective:** Generate a first baseline page using a direct instruction without examples.

**Prompt:**
Create a simple webpage about tourism in Marinduque, Philippines. Include a title, some tourist destinations, and basic styling using HTML, CSS, and JavaScript.

**Output:**
I’ll first check the workspace for any existing starter files so the page fits what’s already there; if it’s empty, I’ll build a compact, responsive single-page tourism guide with HTML, CSS, and a little interactive JavaScript.

Read 

The workspace is empty, so there’s no existing design or code path to preserve. I’m making this as three small vanilla files: a destination guide with category filters, responsive styling, and clear labels where the photos are illustrative rather than verified photos of each landmark.

Generating patch (233 lines) in , , 

The page is in place, including the destination filters and responsive layout. I’m checking the JavaScript syntax first, then I’ll report the files and any verification limits.

Ran terminal command: node --check script.js

Checked , , , no problems found

Created a responsive Marinduque tourism webpage with destination descriptions, Nature/Culture filters, and basic JavaScript interactions.

Files: `index.html`, `styles.css`, `script.js`

JavaScript syntax check and workspace diagnostics passed. Destination images are illustrative and loaded from Unsplash.

Made changes.

**Observation:**
The prompt is short and easy to understand, but it leaves many details open. Copilot may choose its own layout, content, and features. It may not include search, a trip list, responsive navigation, accessibility requirements, or clear limits on external tools.

## Task 3 - Structured Prompt: Anatomy of an Effective Prompt

**Objective:** Improve the baseline using Role, Task, Context, Constraints, Expected Output, and Acceptance Criteria.

**Prompt:**
Act as a frontend web developer experienced with semantic HTML, responsive CSS, and accessible JavaScript. Create a single-page website called “Discover Marinduque” that introduces tourism destinations and local culture. The intended users are local residents, students, and visitors who want a simple introduction to Marinduque, Philippines. This is a student demonstration prototype. Use semantic HTML, CSS, and vanilla JavaScript only. Do not use frameworks, backend services, a database, authentication, or external APIs. Use clearly identified demonstration content and do not present live travel updates or official advisories.

**Expected Output:** Provide complete `index.html`, `style.css`, and `script.js` files. Include destination cards, a search field, a trip list that lets users add and remove destinations, and a responsive navigation menu.

**Acceptance Criteria:** The page must fit mobile and desktop screens; the search field must filter destination cards; adding and removing destinations must update the trip list; the navigation button must update its `aria-expanded` value and work with keyboard interaction; labels and visible focus indicators must be present. Explain how to test each feature.

**Output:**
The existing page already has the requested destination guide and interactions. I’m aligning the visible heading with the exact “Discover Marinduque” name and adding a clear student-demo notice so visitors won’t mistake sample information for live updates or official advisories.

Generating patch (9 lines) in 

Checked , , , no problems found

The single-page site is ready in `index.html`, `styles.css`, and `script.js`. It includes searchable, filterable destination cards, a trip list that saves in the browser, responsive keyboard-operable navigation, and a local-culture section. The visible title now reads “Discover Marinduque,” and the footer identifies it as a student demonstration with sample information only.

Workspace diagnostics report no errors.

Made changes.

**Observation:**
The structured prompt gives Copilot clearer requirements and limits its technology choices.

## Task 4A — Few-Shot Prompting

**Objective:** Use examples to demonstrate a consistent destination data format.

**Prompt:**
Create destination entries for the Discover Marinduque tourism webpage. Follow these examples exactly:
Name: Poctoy White Beach  
Location: Torrijos  
Category: Beach  
Description: A coastal destination for a relaxing beach visit.
Generate two additional sample destination entries using the same four fields. Render the entries as consistent semantic HTML cards. Preserve the existing CSS naming convention if one is provided. Do not invent live opening hours, prices, or travel advisories.

**Output:**
I’ll keep the existing `.destination-card` styling and use the requested four fields in the same order for three cards: the exact Poctoy example plus two sample entries based on places already featured on the page. I’m checking the card markup and filter labels so the new entries fit without breaking search or trip-list controls.

Read , lines 38 to 111

Read , lines 38 to 100

Read 

The page currently has six cards, but the prompt calls for the provided example plus two additional sample entries. I’m narrowing the featured set to those three, keeping the existing card class, category filters, and trip-list IDs intact, and rendering Name, Location, Category, and Description as labeled semantic fields.

Generating patch (49 lines) in , 

Checked , , no problems found

The three cards now follow the same labeled field structure, and the requested Poctoy wording is exact. The markup/style checks are clean; I noticed the first card’s decorative number still reflects its former position, so I’m correcting that before the final validation.

Generating patch (6 lines) in 

Ran terminal command: node --check script.js

Checked , , , no problems found

Updated the destination section in `index.html` with three consistent semantic cards using the fields Name, Location, Category, and Description. Poctoy White Beach uses the exact details provided; the additional sample entries are Tres Reyes Islands and Boac Cathedral. Existing card styling, filters, and trip-list controls are preserved.

Diagnostics and the JavaScript syntax check passed.

Made changes.

**Observation:**
The examples demonstrate the intended structure and help make each destination card consistent.

## Task 4B — Role Assignment Prompting

**Objective:** Review the same page from an accessibility specialist’s perspective.

**Prompt:**
Act as a frontend accessibility reviewer familiar with semantic HTML and keyboard-accessible interfaces. Review the current Discover Marinduque prototype files. Check heading structure, landmark elements, form labels, button names, keyboard operation, visible focus indicators, color contrast, and whether the mobile navigation button updates `aria-expanded` accurately. Identify specific issues in the supplied code and recommend the smallest targeted fixes. Do not redesign the page or add frameworks. Provide a short test procedure for each important recommendation.

**Output:**
I’ll review the current HTML, CSS, and JavaScript against each requested accessibility area, especially contrast and the mobile menu’s state/focus behavior. I’ll report only concrete issues with targeted fixes and quick tests; no redesign or code changes.

Read 

Read 

Read 

The structure and controls are largely sound: there is one `h1`, labeled sections, an explicit search label, native buttons, and a menu toggle that updates `aria-expanded` and returns focus on Escape. I’m checking exact contrast ratios and line locations now; the most likely actionable issue is low-contrast small text and focus styling.

Ran terminal command: Select-String -Path index.html,styles.css,script.js -Pattern '<h1|<h2|<h3|<header|<main|<nav|<footer|<label|aria-expanded|aria-label|focus-visible|--paper:|--muted:|--coral:|placeholder|\.menu-toggle|closeNavigation|navigation\.querySelectorAll|keydown|\.card-category|\.filter-button span|\.results-message|\.photo-note|\.site-footer p' | ForEach-Object { "{0}:{1}: {2}" -f $_.Path, $_.LineNumber, $_.Line.Trim() }; node -e 'function lum(h){const c=h.match(/[a-f0-9]{2}/gi).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return .2126*c[0]+.7152*c[1]+.0722*c[2]}function ratio(a,b){let x=lum(a),y=lum(b);return ((Math.max(x,y)+.05)/(Math.min(x,y)+.05)).toFixed(2)};[["#687b70","#f6f4eb","muted/paper"],["#e8795b","#f6f4eb","coral/paper"],["#78887e","#fffefa","placeholder/field"],["#ffffff","#174e42","white/green"],["#f2ad83","#174e42","peach/green"],["#e8795b","#fffefa","coral/white"]].forEach(([a,b,n])=>console.log(n+" "+ratio(a,b)+":1"))'
Completed with input: Select-String -Path index.html,styles.css,script.js -Pattern '<h1|<h2|<h3|<header|<main|<nav|<footer|<label|aria-expanded|aria-label|focus-visible|--paper:|--muted:|--coral:|placeholder|\.menu-toggle|closeNavigation|navigation\.querySelectorAll|keydown|\.card-category|\.filter-button span|\.results-message|\.photo-note|\.site-footer p' | ForEach-Object { "{0}:{1}: {2}" -f $_.Path, $_.LineNumber, $_.Line.Trim() }; node -e 'function lum(h){const c=h.match(/[a-f0-9]{2}/gi).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return .2126*c[0]+.7152*c[1]+.0722*c[2]}function ratio(a,b){let x=lum(a),y=lum(b);return ((Math.max(x,y)+.05)/(Math.min(x,y)+.05)).toFixed(2)};[["#687b70","#f6f4eb","muted/paper"],["#e8795b","#f6f4eb","coral/paper"],["#78887e","#fffefa","placeholder/field"],["#ffffff","#174e42","white/green"],["#f2ad83","#174e42","peach/green"],["#e8795b","#fffefa","coral/white"]].forEach(([a,b,n])=>console.log(n+" "+ratio(a,b)+":1"))'
Tool execution failed with exit code 1

The source confirms the heading hierarchy, landmarks, labels, button names, and menu state logic are in place. My first contrast-calculation command hit a PowerShell quoting issue, so I’m rerunning that check with native PowerShell math before I finalize the review findings.

Ran terminal command: function Get-Lum($hex) { $r=[Convert]::ToInt32($hex.Substring(1,2),16)/255; $g=[Convert]::ToInt32($hex.Substring(3,2),16)/255; $b=[Convert]::ToInt32($hex.Substring(5,2),16)/255; $channels=@($r,$g,$b) | ForEach-Object { if ($_ -le 0.04045) { $_ / 12.92 } else { [math]::Pow(($_ + 0.055) / 1.055, 2.4) } }; return 0.2126*$channels[0]+0.7152*$channels[1]+0.0722*$channels[2] }; function Get-Ratio($first,$second) { $a=Get-Lum $first; $b=Get-Lum $second; return ([math]::Max($a,$b)+0.05)/([math]::Min($a,$b)+0.05) }; $pairs=@(@('#687b70','#f6f4eb','muted on paper'),@('#e8795b','#f6f4eb','coral on paper'),@('#78887e','#fffefa','placeholder on input'),@('#ffffff','#174e42','white on green'),@('#f2ad83','#174e42','peach on green'),@('#e8795b','#fffefa','focus coral on white')); foreach ($pair in $pairs) { $ratio=Get-Ratio $pair[0] $pair[1]; Write-Output ('{0}: {1:N2}:1' -f $pair[2],$ratio) }

**Findings**

- **High: Several text colors fail WCAG AA contrast.** In `styles.css:5`, muted text on the paper background is **4.09:1**; coral text on paper is **2.60:1**; and the search placeholder is **3.70:1** (`styles.css:51`). These are below the **4.5:1** target for normal-sized text. Darken the muted, coral, and placeholder colors; verify each actual text/background pairing with a contrast checker. The white and peach text on the green culture section pass.
- **Medium: The keyboard focus outline is low contrast.** The coral outline in `styles.css:17` measures **2.60:1** against the paper background and **2.84:1** against white. Use a focus color that reaches at least **3:1** against the adjacent background, with a contrasting override on dark sections. Test by tabbing through links, buttons, and the search input.

**Checks That Pass**

The page has a clear heading hierarchy and semantic header, navigation, main, and footer landmarks. Sections have accessible names, the search input has an associated label, and buttons have names. The mobile menu’s `aria-expanded` starts false and is updated when toggled; Escape closes it and returns focus to the menu button (`script.js:122`).

**Quick Test**

At a narrow viewport, use Tab and Enter to open the menu; confirm `aria-expanded="true"` and that links appear. Press Escape; confirm it closes, reports false, and focus returns to the toggle. Then keyboard-test the search and destination controls, checking that focus remains visible and text is readable.

**Observation:**
The role instruction focuses the review on accessibility instead of general design.


## Task 5 — Structured Analysis and Refinement

**Objective:** Diagnose a concrete issue, apply a small correction, and verify the result.

**Prompt:**
Review the supplied Discover Marinduque HTML, CSS, and JavaScript against these requirements: destination search filters cards; add/remove buttons update the trip list and their `aria-pressed` states; the mobile navigation button updates `aria-expanded`; and the page remains usable on narrow screens. Identify the two most important issues supported by specific code evidence. For each issue, state the likely cause, propose the smallest correction, and provide a test procedure. Do not rewrite unrelated components or claim that a fix is verified until it has been tested.

**Output:**
I found one direct requirements mismatch: destination add buttons update the list, but the code never gives them or their changed state an `aria-pressed` value. I’m checking the exact implementation and navigation focus handling now to confirm the second issue rather than infer one from the prompt.

Ran terminal command: Select-String -Path index.html,script.js,styles.css -Pattern 'trip-add|trip-remove|aria-pressed|renderTripList|disabled|menu-toggle|closeNavigation|is-open|addEventListener\("click"|keydown|destination-grid|destinationCards\.forEach|grid-template-columns: 1fr|@media \(max-width' | ForEach-Object { "{0}:{1}: {2}" -f (Split-Path $_.Path -Leaf), $_.LineNumber, $_.Line.Trim() }

**1. Trip-list buttons don’t expose their pressed state.** The card’s Add button is disabled and relabeled when saved (`script.js:53`); the add/remove handlers update the list but never set `aria-pressed` (`script.js:102`). This leaves the requested toggle state unavailable to assistive technology.

Smallest correction: make each card’s Add button a toggle, initialize `aria-pressed="false"`, and update its pressed state and label when adding or removing. Keep the separate trip-list Remove button as a normal action; it doesn’t need `aria-pressed`.

**Test:** Activate Add with a keyboard. Confirm the place appears in the trip list and the card button reports pressed. Remove it from the list and confirm the card button reports not pressed.

**2. Mobile navigation may leave keyboard focus on a hidden link.** Activating a navigation link calls `closeNavigation` (`script.js:136`), which removes the open class; at mobile widths that hides the nav with `display: none` (`styles.css:109`). Focus is not moved after the focused link disappears.

Smallest correction: on link activation, move focus to the destination heading or section as the menu closes.

**Test:** At a narrow viewport, open the menu with the keyboard, tab to a link, and press Enter. Confirm focus moves to the destination and the next Tab continues from there, rather than restarting at the top or landing on hidden content.

Search filtering, list updates, the menu’s `aria-expanded` toggle, and one-column destination cards at small widths are present in the source. I did not run browser tests, so these behaviors and recommendations remain unverified.

## Task 6 — Final Comparison

Zero-Shot - The brief prompt produced a basic Marinduque tourism page with destination cards, Nature/Culture filters, responsive styling, and basic JavaScript. The layout and feature choices were largely left to Copilot.

Structured Prompt - The page was aligned with the “Discover Marinduque” name and expanded to include a search field, add/remove trip list, responsive navigation, local-culture information, and a student-demonstration notice. The project stayed within semantic HTML, CSS, and vanilla JavaScript.

Few-Shot - The destination section was narrowed to three cards. Poctoy White Beach followed the supplied example, while Tres Reyes Islands and Boac Cathedral used the same four labeled fields in the same order. Existing styling and interactive controls were preserved.

Role Assignment - The accessibility review confirmed several sound semantic and keyboard-navigation features, while identifying low contrast for some text and the focus outline, plus a potential focus issue when the mobile menu closes. The recommendations were not implemented in the website.

Structured Analysis - The code review found that Add buttons do not expose `aria-pressed`, and that closing the mobile menu after link activation may leave focus on a hidden link. Search, filters, trip-list add/remove behavior, localStorage persistence, and narrow-screen card layout are present in the code. The proposed fixes were not applied, and no browser tests were run, so their success was not verified.

## Final Reflection

This activity showed me that prompt engineering is important in AI-assisted web development because the quality of generated code depends partly on how clearly requirements are communicated. A zero-shot prompt is useful for a quick starting point, but it can leave important design and functionality decisions to the AI. A structured prompt provides role, task, context, constraints, expected output, and acceptance criteria, so the result can be compared against clear requirements. Few-shot prompting demonstrates the format through examples, while role assignment directs attention to a specialized concern such as accessibility. Structured analysis helps identify a specific issue and plan a targeted correction.

I also learned that generated code should not be accepted just because it looks correct. The developer must inspect the HTML, CSS, and JavaScript, test the interactions, check mobile responsiveness and accessibility, and verify factual content. The best version should be selected based on the requirements and actual test results, not merely on appearance.
