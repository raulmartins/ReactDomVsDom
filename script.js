const jsCotainer = document.getElementById("js");
const reactContainer = document.getElementById("react");
const render = () => {
  jsCotainer.innerHTML = `
  <div class="demo">
    Olá Container Javascript
    <input></input>
    <p>${new Date()}</p>
  </div>`;

  ReactDOM.render(
    React.createElement(
      "div",
      { className: "demo" },
      "Olá Container React",
      React.createElement("input"),
      React.createElement("p", null, new Date().toString())
    ),
    reactContainer
  );
};

setInterval(render, 1000);
