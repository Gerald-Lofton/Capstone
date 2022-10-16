import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { after, capitalize, each } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}`;

  afterRender(state);

  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".gg-menu").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
  if (state.view === "Flood") {
    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();

      const Weatherinput = event.target.elements;
      console.log("Weatherinput", Weatherinput);

      const Userinput = [];
      // Interate over the toppings input group elements
      for (let Userinput of Userinput.input) {
        // If the value of the checked attribute is true then add the value to the toppings array
        if (User.checked) {
          input.push(input.value);
        }
      }

      const requestData = {
        customer: Weatherinput.customer.value,
        input: Weather.input.value,
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.WEATHER_INPUT_API}`, requestData)
        .then((response) => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Pizza.Weatherinputs.push(response.data);
          router.navigate("/Flood");
        })
        .catch((error) => {
          console.log("It puked", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
          )
          .then((response) => {
            const kelvinToFahrenheit = (kelvinTemp) =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Home.weather = {};
            store.Home.weather.city = response.data.name;
            store.Home.weather.temp = kelvinToFahrenheit(
              response.data.main.temp
            );
            store.Home.weather.feelsLike = kelvinToFahrenheit(
              response.data.main.feels_like
            );
            store.Home.weather.description = response.data.weather[0].main;
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        break;
      case "Radar":
        axios
          .get(`${process.env.WEATHER_FACT_API}`)
          .then((response) => {
            console.log(response.data[0].weatherfact);
            store.Radar.weatherfact.push(response.data[0].weatherfact);
            console.log(store.Radar.weatherfact[0]);
            done();
          })
          .catch((error) => {
            console.log("It puked", error);
            done();
          });
        break;
      default:
        done();
    }
  },
});

router
  .on({
    "/": () => render(),
    ":view": (params) => {
      let view = capitalize(params.data.view);
      render(store[view]);
    },
  })
  .resolve();
