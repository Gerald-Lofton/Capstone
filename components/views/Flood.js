import html from "html-literal";

export default (state) => html`
  <section>
    <div class="floodIframe">
      <iframe
        src="https://water.weather.gov/ahps/region_iframe.php?state=MOsscale=true"
        height="945"
        width="1125"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </section>
`;
