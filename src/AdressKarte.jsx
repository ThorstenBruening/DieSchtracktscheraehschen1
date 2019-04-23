import React from "react"

// const AdressKarte = ({ props: adresse }, props) => {
// const AdressKarte = ( props: { adresse: {strasse, plz, ort } = {} } ) => {
const AdressKarte = props => {
	// console.log("props: ", props )
	// const { adresse } = adresse
	console.log("adresse: ", adresse)
	const { vorname, nachname } = props
	const name = `${vorname} ${nachname}`
	const { adresse } = props
	return (
		<>
			<h3>AdressKarte</h3>
			<br />
			<br />
			{/* */}
			<br />
			<br />
			{/*  Props: {JSON.stringify(props, null, 2)} */}
			<br />
			Name: {JSON.stringify(name, null, 2)}
			<br />
			Adresse: {JSON.stringify(adresse, null, 2)}
		</>
	)
}
export default AdressKarte
