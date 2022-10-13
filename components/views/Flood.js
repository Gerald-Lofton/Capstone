import html from "html-literal";

export default (state) => html`
  <section></section>
  <br>
  <section>
    <div class="iframe-container">
      <iframe
        loading="lazy"
        src=https://water.weather.gov/ahps/region_iframe.php?state=MOsscale=true height="830" width="960" frameborder="0" scrolling="yes"></iframe>
    </div>
  </section>
`;
