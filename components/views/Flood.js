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
  <br>
  <section id="commentSubmission">
    <form id="commentSubmission" method="POST" action="">
      <h2>Got a question or comment?</h2>
      <div>
        <label for="customer">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          required
        />
      </div>
      <div>
        <label for="comment">Question or Comment:</label>
        <input
          type="text"
          name="comment"
          id="comment"
          placeholder="Enter Comment or Question"
          required
        />
      </div>
      <input type="submit" name="submit" value="Submit" />
    </form>
  </section>
`;
