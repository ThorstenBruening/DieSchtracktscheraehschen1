import "./styles.css"
import React from "react"
import ReactDOM from "react-dom"

import Karte from "./Karte"
import AdressKarte from "./AdressKarte"

const App = () => {
	const opptschickt = {
		vorname: "Hans",
		nachname: "Meiser",
		adresse: {
			strasse: "Wallrafplatz 5",
			plz: "50667",
			ort: "Köln",
		},
	}
	console.log("opptschickt: ", opptschickt)
	return (
		<div className="App">
			<h1>Die Schtracktscheraehschen</h1>
			<h2>Itz Mettschik!</h2>
			OpptSchickt: {JSON.stringify(opptschickt, null, 4)}
			<Karte {...opptschickt} />
			<br />
			<br />
			<AdressKarte {...opptschickt} />
		</div>
	)
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
