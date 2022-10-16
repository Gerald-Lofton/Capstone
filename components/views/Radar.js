import html from "html-literal";

export default (state) => html`
  <section>${state.weatherfact}</section>
  <br />
  <section>
    <div class="RadariFrame">
      <iframe
        src="https://www.rainviewer.com/map.html?loc=37.44,-97.2949,5&oFa=0&oC=1&oU=0&oCS=1&oF=0&oAP=1&c=3&o=90&lm=1&layer=radar&sm=1&sn=1"
        width="100%"
        frameborder="0"
        style="border:0;height:50vh;"
        allowfullscreen
      >
      </iframe>
    </div>
  </section>
  <section></section>
`;
