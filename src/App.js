import { useState, useEffect } from 'react'
import Select from './components/Select'
import SelectZon from './components/SelectZon'
import Table from './components/Table'

function App() {
	const [negeri, setNegeri] = useState('sabah')
	const [zon, setZon] = useState([])
	const [userZon, setUserZon] = useState('kota kinabalu')
	const [waktuSolat, setWaktuSolat] = useState([])
	
	useEffect(() => {
		const fetchData = async () => {
			const url = 'https://waktu-solat-api.herokuapp.com/api/v1/states.json?negeri=' + negeri
			const res = await fetch(url)
			const data = await res.json()

			setZon(data.data.negeri.zon)
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
			<Select selected={selectedValue} />
			<SelectZon zon={zon} selected={selectedZon} />

			<h3> Waktu solat {userZon} </h3>
			<Table waktuSolat={waktuSolat} />

			{/* { waktuSolat.map(item => {
				const waktu = item.name
				const masa = item.time

				return (
					<p key={waktuSolat.indexOf(item) + 1}>
						{waktuSolat.indexOf(item) + 1}. {waktu} {masa}	  
					</p>
				)
			})} */}
		</div>
	);
}

export default App;
