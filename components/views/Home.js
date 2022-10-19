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
    <form class="search">
      <input id="search" type="text" class="input" placeholder="search..." />
      <input type="submit" id="searchbtn" class="search-results">Search</input>
    </form>
  </section>
  <br />
  <section>
    <div class="boxempty">
      <h3>Coming Soon</h3>
    </div>
  </section>
`;
