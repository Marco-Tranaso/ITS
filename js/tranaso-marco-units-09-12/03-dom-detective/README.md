# DOM Detective – GOG.com

Below are JavaScript snippets written in the browser console after inspecting www.gog.com using DevTools. Each snippet is followed by a short explanation of what it selects from the DOM.

```javascript
// Every image on the page
document.querySelectorAll("img");
// → Selects all <img> elements present in the document.

// The main menu at the top of the page
document.querySelector("header nav");
// → Selects the main navigation menu inside the header section.

// All the news items under "News"
document.querySelectorAll('[data-test="news-article"]');
// → Selects all the news article elements based on the data-test attribute.

// The footer
document.querySelector("footer");
// → Selects the footer section at the bottom of the page.

// All the social media links at the bottom of the page
document.querySelectorAll("footer a[href*='facebook'], footer a[href*='twitter'], footer a[href*='instagram'], footer a[href*='youtube']");
// → Selects all <a> tags in the footer whose href contains a social media keyword.
