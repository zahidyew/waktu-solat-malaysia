import { useState, useEffect } from 'react'
import Select from './components/Select'

function App() {
	const [negeri, setNegeri] = useState('sabah')
	const [zon, setZon] = useState([])

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

	const selectedValue = (value) => {
		//console.log(value)
		setNegeri(value)
	}

	const selectedZon = (zon) => {
		console.log(zon)
		
		// will clean later & use useEffect 
		// this is just testing concept 
		const fetchData = async () => {
			const url = 'https://waktu-solat-api.herokuapp.com/api/v1/prayer_times.json?zon=' + zon
			const res = await fetch(url)
			const data = await res.json()

			console.log(data.data[0].waktu_solat)
		}
		fetchData()
	}

	return (
		<div className="App">
			<h1> Title here </h1>
			<Select selected={selectedValue} />

			{zon.map(item => {
				return (
					<p key={zon.indexOf(item) + 1} onClick={() => selectedZon(item)} > {zon.indexOf(item) + 1}. {item} </p>
				)
			})}

		</div>
	);
}

export default App;
