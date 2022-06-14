const NomeContext = React.createContext('nome');

function MeuComponente1() {
  //I want to pass this variable to the component called MeuComponente4
  const meuNome = 'Ana Laura Almeida';
  return /*#__PURE__*/React.createElement(NomeContext.Provider, {
    value: meuNome
  }, /*#__PURE__*/React.createElement("div", {
    className: "component-1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null)));
}

function MeuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-2"
  }, /*#__PURE__*/React.createElement(MeuComponente3, null));
}

function MeuComponente3(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, null));
}

function MeuComponente4(props) {
  //by convention we call it props, but it could be called, parameters and others
  return /*#__PURE__*/React.createElement(NomeContext.Consumer, null, nomeContext => /*#__PURE__*/React.createElement("div", {
    className: "component-4"
  }, /*#__PURE__*/React.createElement("p", null, nomeContext)));
}

function MeuComponente() {
  return /*#__PURE__*/React.createElement("div", {
    id: "components"
  }, /*#__PURE__*/React.createElement(MeuComponente1, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MeuComponente, null), document.getElementById("app"));
