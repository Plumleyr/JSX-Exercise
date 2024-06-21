const App = () => {
    return (
        <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center', }}>
            <Person name ="Plankton" age={32} hobbies={ ["Stealing the formula", "Loves Chum", "Has a wife named Karen"] }/>
            <Person name ="Spongebob" age={11} hobbies={ ["Catch Jellyfish", "Making Krabby Patties", "Loves Going to Work"] }/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));