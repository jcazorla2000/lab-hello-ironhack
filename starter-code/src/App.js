import React from "react";

function App () {
    return (
      <div id="container">
        <div id="nav">
            <img src="/images/ironhack-logo.svg" alt="" id=""></img>
            <img src="/images/menu-top.svg" alt="" id=""></img>
        </div>
        <div id="header">
            <h1>Say hello to ReactJS</h1>
            <h3>You will learn a Frontend framework from scratch, to become a Ninja Developer</h3>
            <button>Awesome!</button>
        </div>
        <div id="box">
            <div id="card">
                <img src="/images/icon1.png" alt="" id=""></img>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div id="card">
                <img src="/images/icon2.png" alt="" id=""></img>
                <p>Build encapsulated component that manage their state.</p>
            </div>
            <div id="card">
                <img src="/images/icon3.png" alt="" id=""></img>
                <p>A set of immutable values are passed to the components.</p>
            </div>
            <div id="card">
                <img src="/images/icon4.png" alt="" id=""></img>
                <p>Statically-typed designed to run on modern browsers.</p>
            </div>
        </div>
      </div>  
    );
}

export default App;