import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={sendData}>SiuskNx</button>
            </div>
        );
    }
}

async function sendData() {
    const options = {
        headers: { 'Content-Type': 'application/json' },
        method: "GET"
    };

    //const response = await fetch('API/Example/route1').then(data => data.json());
    //alert(response.dataString);
    const response = await fetch('API/Example/route1');
    const data = await response.json();
    alert(data.dataString);
    //const data = response.json();
}


