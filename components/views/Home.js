import html from "html-literal";

export default (state) => html`
  <section>
    <h1>Homework OpenWeatherMap API output:</h1>
    <div class="current forecast">
      <h3>
        The weather in ${state.weather.city} is ${state.weather.description}.
        Temperature is ${state.weather.temp}F, and it feels like
        ${state.weather.feelsLike}F.
      </h3>
    </div>
  </section>
  <section>
    <div class="Media feed"></div>
  </section>
`;
