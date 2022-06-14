const NomeContext = React.createContext('nome');

function MeuComponente1() {
    //I want to pass this variable to the component called MeuComponente4
    const meuNome = 'Ana Laura Almeida';
    return (
        <div className="component-1">
            <MeuComponente2> 
                <p>Hello! How are you?</p>
            </MeuComponente2>
        </div>
    )
}

function MeuComponente2(props) {
    return (
        <div className="component-2">
        <div>
            <header>{props.children}</header>
            <footer></footer>
        </div>
            <MeuComponente3></MeuComponente3>
        </div>
    )
}

function MeuComponente3(props) {
    return (
        <div className="component-3">
            <MeuComponente4></MeuComponente4>
        </div>
    )
}

function MeuComponente4(props) {
    //by convention we call it props, but it could be called, parameters and others
    return (
        <div className="component-4">
            <p>Component - 4</p>
        </div>
    )
}

function MeuComponente() {
    return (
        <div id="components">
            <MeuComponente1></MeuComponente1>
        </div>
    )
}

ReactDOM.render(
    <MeuComponente></MeuComponente>,
    document.getElementById("app")
)