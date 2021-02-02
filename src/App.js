import { useState, useEffect } from 'react'
import Select from './components/Select'
import SelectZon from './components/SelectZon'
//import Table from './components/Table'
import Card from './components/Card'
import './App.css'

function App() {
	const [negeri, setNegeri] = useState('sabah')
	const [zon, setZon] = useState([])
	const [userZon, setUserZon] = useState('kota kinabalu')
	const [waktuSolat, setWaktuSolat] = useState([])
	//const [freshStart, setFreshStart] = useState(true)
	
	useEffect(() => {
		/* if (freshStart && localStorage.getItem('cookie_negeri') !== null) {
			setNegeri(localStorage.getItem('cookie_negeri'))
			setFreshStart(false)
		} */

		const fetchData = async () => {
			const url = 'https://waktu-solat-api.herokuapp.com/api/v1/states.json?negeri=' + negeri
			const res = await fetch(url)
			const data = await res.json()

			setZon(data.data.negeri.zon)
			setUserZon(data.data.negeri.zon[0])
			//console.log(data.data.negeri.zon)
		}
		fetchData()
	}, [negeri])

	useEffect(() => {
		const fetchData = async () => {
			const url = 'https://waktu-solat-api.herokuapp.com/api/v1/prayer_times.json?zon=' + userZon
			const res = await fetch(url)
			const data = await res.json()

			setWaktuSolat(data.data[0].waktu_solat)
			//console.log(data.data[0].waktu_solat)

			/* localStorage.setItem('cookie_negeri', negeri)
			localStorage.setItem('cookie_zon', userZon) */
		}
		fetchData()
	}, [userZon])

	const selectedValue = (value) => {
		//console.log(value)
		setNegeri(value)
	}

	const selectedZon = (zon) => {
		//console.log(zon)
		setUserZon(zon)
	}

	return (
		<div className="App">
			<h1> Waktu Solat </h1>

			<div className="selects">
				<span> <Select selected={selectedValue} /> </span>
				<span> <SelectZon zon={zon} userZon={userZon} selected={selectedZon} /> </span>
			</div>
			

			<h3> Waktu solat {userZon} </h3>
			{/* <Table waktuSolat={waktuSolat} /> */}
			<Card waktuSolat={waktuSolat} />
		</div>
	);
}

export default App;
