import { CategoryButton } from '@/components/categoryButton'
import { HeaderSeries } from '@/components/headerSeries'
import { MyButton } from '@/components/myButton'
import { MyInput } from '@/components/myInput'
import { MySelect } from '@/components/mySelect'
import { SerieCheckbox } from '@/components/serieCheckbox'
import { StepTitle } from '@/components/stepTitle'
import { categories, series } from '@/data'
import { ISerie } from '@/types/series'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

interface IInputData {
	pressure: string
	power: string
	quantity: string
}

const Home = () => {
	console.log('Home')
	const [searchParams, setSearchParams] = useSearchParams()
	const navigate = useNavigate()
	const [activeCategory, setActiveCategory] = useState(0)
	const [isOpenSelect, setIsOpenSelect] = useState(false)
	const [visibleSeries, setVisibleSeries] = useState<ISerie[]>(series)
	const [activeSeries, setActiveSeries] = useState<string[]>([])
	const [inputData, setInputData] = useState<IInputData>({
		pressure: '',
		power: '',
		quantity: '1',
	})

	useEffect(() => {
		if (activeCategory === 0) {
			setVisibleSeries(series)
			setActiveSeries([])
		} else {
			setVisibleSeries(
				series.filter(serie => serie.categoryId === activeCategory)
			)
			setActiveSeries([])
		}
	}, [activeCategory])

	useEffect(() => {
		if (searchParams.get('series')) {
			setActiveSeries(searchParams.get('series')!.split(','))
		}
		setInputData({
			pressure: searchParams.get('pressure') ?? '',
			power: searchParams.get('power') ?? '',
			quantity: searchParams.get('quantity') ?? '1',
		})
	}, [searchParams])

	useEffect(() => {
		if (activeSeries.length > 0) {
			searchParams.set('series', activeSeries.join(','))
			setSearchParams(searchParams, { replace: true })
			setIsOpenSelect(false)
		} else {
			searchParams.delete('series')
			setSearchParams(searchParams, { replace: true })
			setIsOpenSelect(false)
		}
	}, [activeSeries])

	const checkAll = () => {
		if (activeSeries.length === visibleSeries.length) {
			setActiveSeries([])
		} else {
			setActiveSeries(visibleSeries.map(serie => serie.name))
		}
	}

	return (
		<main className='main flex flex-col lg:flex-row'>
			<div className='first-step w-full lg:w-1/3 border-2 border-light-gray p-4 flex flex-col gap-6'>
				<StepTitle title='Область применения' number={1} />
				<div className='categories border-t-2 border-light-gray'>
					<CategoryButton
						index={0}
						activeCategory={activeCategory}
						handleClick={() => setActiveCategory(0)}
						name='Все насосы'
					/>
					{categories.map(category => (
						<CategoryButton
							key={category.id}
							index={category.id}
							activeCategory={activeCategory}
							handleClick={() => setActiveCategory(category.id)}
							name={category.name}
						/>
					))}
				</div>
			</div>
			<div className='second-step w-full lg:w-1/3 border-y-2 lg:border-y-2 border-light-gray p-4 flex flex-col gap-6'>
				<StepTitle title='Серии насосов' number={2} />
				<div className='all-series'>
					<HeaderSeries
						activeSeries={activeSeries}
						visibleSeries={visibleSeries}
						checkAll={checkAll}
					/>
					<div className='series flex flex-col border-t-2 border-light-gray'>
						{visibleSeries.map(serie => (
							<SerieCheckbox
								key={serie.name}
								serie={serie}
								activeSeries={activeSeries}
								setActiveSeries={setActiveSeries}
							/>
						))}
					</div>
				</div>
			</div>
			<div className='third-step w-full lg:w-1/3 border-2 border-light-gray p-4 flex flex-col gap-6'>
				<StepTitle title='Вводимые данные' number={3} />
				<div className='wrapper flex flex-col justify-between h-full'>
					{!activeSeries.length ? (
						<h3 className='text-[#555] text-left'>
							Выберите WOW или несколько серий насосов
						</h3>
					) : (
						<div className='inputs flex flex-col gap-4'>
							<div className='input-box flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0'>
								<span className='text-[#555] text-sm after:content-["*"] after:ml-0.5 after:text-red'>
									Производительность
								</span>
								<div className='input flex items-center gap-2 w-full sm:w-[55%]'>
									<MyInput
										onChange={value =>
											setInputData({ ...inputData, power: value })
										}
										value={inputData.power}
									/>
									<span className='text-[#555]'>м³/ч</span>
								</div>
							</div>
							<div className='input-box flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0'>
								<span className='text-[#555] text-sm after:content-["*"] after:ml-0.5 after:text-red'>
									Напор
								</span>
								<div className='input flex items-center w-full sm:w-[55%] gap-2'>
									<MyInput
										onChange={value =>
											setInputData({ ...inputData, pressure: value })
										}
										value={inputData.pressure}
									/>
									<span className='text-[#555]'>м</span>
								</div>
							</div>
							<div className='input-box flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0'>
								<span className='text-[#555] text-sm w-full sm:w-1/3 text-left'>
									Количество параллельно работающих насосов
								</span>
								<div className='w-full sm:w-[55%]'>
									<MySelect
										setSelectedOption={(option: string) =>
											setInputData({ ...inputData, quantity: option })
										}
										selectedOption={inputData.quantity}
										isOpen={isOpenSelect}
										setIsOpen={setIsOpenSelect}
									/>
								</div>
							</div>
						</div>
					)}
					<div className='button flex justify-end mt-4 lg:mt-0'>
						<MyButton
							handleClick={() =>
								navigate(
									'result/' +
										`?series=${activeSeries.join(',')}&power=${
											inputData.power
										}&pressure=${inputData.pressure}&quantity=${
											inputData.quantity
										}`
								)
							}
							label='Далее'
						/>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Home
