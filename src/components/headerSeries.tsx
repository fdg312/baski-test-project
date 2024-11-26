import { ISerie } from '@/types/series'
import { Checkbox } from './Checkbox'

export const HeaderSeries = ({
	activeSeries,
	visibleSeries,
	checkAll,
}: {
	activeSeries: string[]
	visibleSeries: ISerie[]
	checkAll: () => void
}) => {
	return (
		<div className='header-series bg-light-gray flex gap-4 items-center p-4'>
			<Checkbox
				id='all'
				checked={activeSeries.length === visibleSeries.length}
				onChange={checkAll}
			/>
			<span className='text-[#555]'>
				{activeSeries.length} из {visibleSeries.length} выбрано
			</span>
		</div>
	)
}
