import { useState, useEffect } from 'react'
import Select from './components/Select'
import SelectZon from './components/SelectZon'
import Card from './components/Card'
import SetDefaultBtn from './components/SetDefaultBtn'
import './App.css'

function App() {
	const [negeri, setNegeri] = useState('sabah')
	const [zon, setZon] = useState([])
	const [userZon, setUserZon] = useState('kota kinabalu')
	const [waktuSolat, setWaktuSolat] = useState([])
	const [newSession, setNewSession] = useState(true);
	
	// fetch zones for a negeri 
	useEffect(() => {
		const fetchData = async () => {
			// user had set a default location & a fresh session
			if (localStorage.getItem('cookie_negeri') !== null && newSession) { 
				setNegeri(localStorage.getItem('cookie_negeri'));
			}
			const url = 'https://waktu-solat-api.herokuapp.com/api/v1/states.json?negeri=' + negeri
			const res = await fetch(url)
			const data = await res.json()
			setZon(data.data.negeri.zon)

			// user had set a default location & a fresh session
			if (localStorage.getItem('cookie_zon') !== null && newSession) {
				setUserZon(localStorage.getItem('cookie_zon'));
				setNewSession(false)
			} else {
				setUserZon(data.data.negeri.zon[0])
			}
		}
		fetchData()
	}, [negeri]) // eslint-disable-line
	// ignore warning about newSession.

	// fetch waktu solat for a specific zon
	useEffect(() => {
		const fetchData = async () => {
			const url = 'https://waktu-solat-api.herokuapp.com/api/v1/prayer_times.json?zon=' + userZon
			const res = await fetch(url)
			const data = await res.json()

			setWaktuSolat(data.data[0].waktu_solat)
		}
		fetchData()
	}, [userZon])

	const selectedValue = (value) => {
		setNegeri(value)
	}

	const selectedZon = (zon) => {
		setUserZon(zon)
	}

	const setDefaultLocation = () => {
		localStorage.setItem('cookie_negeri', negeri)
		localStorage.setItem('cookie_zon', userZon)
	}

	return (
		<div className="App">
			<h1> Waktu Solat </h1>
			<div className="selects">
				<span> <Select negeri={negeri} selected={selectedValue} /> </span>
				<span> <SelectZon zon={zon} userZon={userZon} selected={selectedZon} /> </span>
			</div>
			<SetDefaultBtn setDefault={setDefaultLocation} />
			<h3> Waktu solat {userZon} </h3>
			<Card waktuSolat={waktuSolat} />
		</div>
	);
}

export default App;