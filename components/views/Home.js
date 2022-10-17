import html from "html-literal";

export default (state) => html`
  <section id="main page">
    <h1>Current Weather</h1>
    <div class="current forecast">
      <h3>
        The weather in ${state.weather.city} is ${state.weather.description}.
        Temperature is ${state.weather.temp}F, and it feels like
        ${state.weather.feelsLike}F.
      </h3>
    </div>
  </section>
  <section>
    <div class="boxempty">
      <h3>Coming Soon</h3>
    </div>
  </section>
`;
