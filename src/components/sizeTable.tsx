export const SizeTable = () => {
	const data = [
		{
			model: 'CVF 20-1',
			B1: 353,
			B2: 241,
			'B1+B2': 594,
			D: '-',
			D1: 154,
			D2: 111,
		},
		{
			model: 'CVF 20-2',
			B1: 406,
			B2: '275/293',
			'B1+B2': '681/699',
			D: '-',
			D1: 177,
			D2: 116,
		},
		{
			model: 'CVF 20-3',
			B1: 471,
			B2: 305,
			'B1+B2': 776,
			D: 300,
			D1: 197,
			D2: 148,
		},
		{
			model: 'CVF 20-4',
			B1: 537,
			B2: 305,
			'B1+B2': 842,
			D: 300,
			D1: 197,
			D2: 148,
		},
		{
			model: 'CVF 20-5',
			B1: 582,
			B2: 390,
			'B1+B2': 972,
			D: 300,
			D1: 275,
			D2: 210,
		},
		{
			model: 'CVF 20-6',
			B1: 627,
			B2: 390,
			'B1+B2': 1017,
			D: 300,
			D1: 275,
			D2: 210,
		},
		{
			model: 'CVF 20-7',
			B1: 672,
			B2: 390,
			'B1+B2': 1062,
			D: 300,
			D1: 275,
			D2: 210,
		},
		{
			model: 'CVF 20-8',
			B1: 737,
			B2: 505,
			'B1+B2': 1242,
			D: 350,
			D1: 330,
			D2: 255,
		},
		{
			model: 'CVF 20-10',
			B1: 827,
			B2: 505,
			'B1+B2': 1332,
			D: 350,
			D1: 330,
			D2: 255,
		},
		{
			model: 'CVF 20-12',
			B1: 917,
			B2: 505,
			'B1+B2': 1422,
			D: 350,
			D1: 330,
			D2: 255,
		},
		{
			model: 'CVF 20-14',
			B1: 1007,
			B2: 505,
			'B1+B2': 1512,
			D: 350,
			D1: 330,
			D2: 255,
		},
		{
			model: 'CVF 20-16',
			B1: 1097,
			B2: 560,
			'B1+B2': 1657,
			D: 350,
			D1: 330,
			D2: 255,
		},
		{
			model: 'CVF 20-17',
			B1: 1142,
			B2: 560,
			'B1+B2': 1702,
			D: 350,
			D1: 330,
			D2: 255,
		},
	]

	return (
		<div className='overflow-x-auto'>
			<table className='table-auto border border-gray-300 text-sm text-gray-600'>
				<thead>
					<tr>
						<th
							rowSpan={2}
							className='border border-gray-300 bg-gray-200 text-center font-normal'
						>
							Модель
						</th>
						<th
							colSpan={6}
							className='border border-gray-300 bg-gray-200 text-center font-normal'
						>
							Размеры
						</th>
					</tr>
					<tr>
						<th className='border border-gray-300 px-4 py-2 font-normal'>B1</th>
						<th className='border border-gray-300 px-4 py-2 font-normal'>B2</th>
						<th className='border border-gray-300 px-4 py-2 font-normal'>
							B1+B2
						</th>
						<th className='border border-gray-300 px-4 py-2 font-normal'>D</th>
						<th className='border border-gray-300 px-4 py-2 font-normal'>D1</th>
						<th className='border border-gray-300 px-4 py-2 font-normal'>D2</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
							<td className='border border-[#555]'>{row.model}</td>
							<td className='border border-[#555]'>{row.B1}</td>
							<td className='border border-[#555]'>{row.B2}</td>
							<td className='border border-[#555]'>{row['B1+B2']}</td>
							<td className='border border-[#555]'>{row.D}</td>
							<td className='border border-[#555]'>{row.D1}</td>
							<td className='border border-[#555]'>{row.D2}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
