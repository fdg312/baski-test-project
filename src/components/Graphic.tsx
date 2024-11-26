import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Scatter,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

const data = [
	{ 'Q, м³/ч': 0, 'H, м': 15 },
	{ 'Q, м³/ч': 5, 'H, м': 14 },
	{ 'Q, м³/ч': 15, 'H, м': 13 },
	{ 'Q, м³/ч': 25, 'H, м': 12 },
	{ 'Q, м³/ч': 35, 'H, м': 10 },
	{ 'Q, м³/ч': 45, 'H, м': 5 },
]

const Graphic = () => {
	return (
		<div className='w-full max-w-[800px]'>
			<ResponsiveContainer width='100%' height={450}>
				<LineChart data={data}>
					<CartesianGrid strokeDasharray='2 2' />
					<XAxis dataKey='Q, м³/ч' />
					<YAxis yAxisId='left' orientation='left' />
					<YAxis yAxisId='right' orientation='right' />
					<Tooltip />
					<Line
						type='monotone'
						dataKey='Q, м³/ч'
						stroke='#383838'
						yAxisId='left'
					/>
					<Line
						type='monotone'
						dataKey='H, м'
						stroke='#334374'
						yAxisId='right'
					/>
					<Legend />
					<Scatter
						data={[{ 'Q, м³/ч': 2, 'H, м': 2 }]}
						fill='red'
						shape='circle'
						name='Red Dot'
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Graphic
