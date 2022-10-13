import html from "html-literal";

export default (links) => html`
  <nav>
    <i class="material-symbols-outlined">
      menu
    </i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          (link) =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
`;
