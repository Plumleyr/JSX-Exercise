const App = () =>{
    return (
        <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center', }}>
            <Tweet username="Banana1" name="John" date="12-31-12" message="I like cheese"/>
            <Tweet username="Banana2" name="Sean" date="09-27-19" message="I don't like cheese"/>
            <Tweet username="Banana3" name="Cole" date="11-13-22" message="Peppers are sick"/>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"));