const NomeContext = React.createContext('nome');

function MeuComponente1(props) {
    //I want to pass this variable to the component called MeuComponente4
    const meuNome = 'Ana Laura Almeida';
    return (
        <div className="component-1">
            <MeuComponente2>
                <MeuComponente3 onClickIncrementar={props.onClickIncrementar}></MeuComponente3>
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
            <MeuComponente4 onClickIncrementar={props.onClickIncrementar}></MeuComponente4>
        </div>
    )
}

function MeuComponente4(props) {
    const [idade, setIdade] = React.useState(28);
    setTimeout(function(){
        setIdade(29);
    }, 1000)

    return (
        <div className="component-4">
            <p>Component - 4 - {idade}</p>
            <button type="button" onClick={props.onClickIncrementar}>Incrementar</button>
        </div>
    )
}

function MeuComponente(props) {
    return (
        <div id="components">
            <MeuComponente1 onClickIncrementar={props.onClickIncrementar}></MeuComponente1>
        </div>
    )
}

function MeuComponenteIrmao(props){
    return(
        <div id="component-irmao">
            <MeuComponenteIrmao2 contador={props.contador}></MeuComponenteIrmao2>
        </div>
    )
}


function MeuComponenteIrmao2(props){
    return(
        <h2>Contador: {props.contador} </h2>
    )
}

function AppComponent(){
    const [contador, setContador] = React.useState(0);

    const clickIncrementa = function(){
        setContador(contador + 1);
    }

    return(
        <React.Fragment>     
            <MeuComponente onClickIncrementar={clickIncrementa}/>
            <MeuComponenteIrmao contador={contador}/>
        </React.Fragment>
    )
}

ReactDOM.render(
    <AppComponent></AppComponent>,
    document.getElementById("app")
)