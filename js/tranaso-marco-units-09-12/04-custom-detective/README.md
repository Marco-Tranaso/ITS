# Custom DOM Detective – BBC News

Website analyzed: [https://www.bbc.com/news](https://www.bbc.com/news)

Below are 10 JavaScript snippets used to select elements from the DOM of the BBC News homepage using complex selectors. Each snippet is followed by an explanation.

```javascript
// 1. Main headline
document.querySelector("main h1");
// → Selects the main headline inside the <main> content area.

// 2. Secondary headlines
document.querySelectorAll("main h3");
// → Selects all sub-headlines or teaser headlines under main content.

// 3. Top navigation links
document.querySelectorAll("nav[aria-label='BBC'] a");
// → Selects navigation links in the BBC top navbar.

// 4. Search input field
document.querySelector("form[action*='search'] input[type='search']");
// → Selects the search input field inside the global search form.

// 5. Featured video (if available)
document.querySelector(".nw-c-video__player video");
// → Selects the <video> tag inside a featured news video section.

// 6. Promo items in top stories
document.querySelectorAll(".gs-c-promo-heading__title");
// → Selects all promo headline titles shown in the homepage cards.

// 7. Date & time info for articles
document.querySelectorAll("time[data-testid='timestamp']");
// → Selects all `<time>` tags that include timestamps for articles.

// 8. Author or contributor info
document.querySelectorAll("[class*='contributor']");
// → Selects any element that includes the word "contributor" in its class name.

// 9. Footer link list
document.querySelectorAll("footer ul li a");
// → Selects all footer links listed in unordered lists inside <footer>.

// 10. Trending topics section
document.querySelectorAll("section[aria-labelledby*='Trending'] h3");
// → Selects the headers of trending topic sections by accessible labels.
