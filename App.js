const parent=React.createElement("div",{id:"parent"},
    React.createElement("h1",{id:"child"},"child")
)

const heading=React.createElement("h1",{"id": "heading"},"hello");
      const root=ReactDOM.createRoot(document.getElementById("root"));
      root.render(heading);
      root.render(parent);