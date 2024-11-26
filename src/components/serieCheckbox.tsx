import { ISerie } from '@/types/series'
import { Checkbox } from './Checkbox'

export const SerieCheckbox = ({
	activeSeries,
	setActiveSeries,
	serie,
}: {
	activeSeries: string[]
	setActiveSeries: (activeSeries: string[]) => void
	serie: ISerie
}) => {
	return (
		<div
			key={serie.name}
			className='serie p-4 flex gap-4 items-center border-x-2 border-b-2 border-light-gray'
		>
			<Checkbox
				id={serie.name}
				checked={activeSeries.includes(serie.name)}
				onChange={c => {
					if (c) {
						setActiveSeries([...activeSeries, serie.name])
					} else {
						setActiveSeries(
							activeSeries.filter(activeSerie => activeSerie !== serie.name)
						)
					}
				}}
			/>
			<img className='w-auto h-12' src={serie.src} alt={serie.name} />
			<span
				className={`text-sm ${
					activeSeries.includes(serie.name) && 'font-bold'
				}`}
			>
				{serie.name}
			</span>
		</div>
	)
}
