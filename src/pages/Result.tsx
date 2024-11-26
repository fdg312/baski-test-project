import { ConstructionTable } from '@/components/constructionTable'
import { Description } from '@/components/Description'
import Graphic from '@/components/Graphic'
import { InfoBox } from '@/components/infoBox'
import { KeyValueBox } from '@/components/keyValueBox'
import { MyButton } from '@/components/myButton'
import { MyInput } from '@/components/myInput'
import { MyTable } from '@/components/myTable'
import { SizeTable } from '@/components/sizeTable'
import { TabButton } from '@/components/tabButton'
import {
	COLLECTION_ID_PUMPS,
	DATABASE_ID,
	databases,
	storage,
} from '@/lib/appwrite'
import { useQuery } from '@tanstack/react-query'
import { Query } from 'appwrite'
import { File } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

interface IInputData {
	pressure: string
	power: string
}

const Result = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const navigate = useNavigate()
	const [activePump, setActivePump] = useState<number>(0)
	const [activeTab, setActiveTab] = useState<number>(0)
	const [inputData, setInputData] = useState<IInputData>({
		pressure: '',
		power: '',
	})

	useEffect(() => {
		if (
			!(
				searchParams.get('series') &&
				searchParams.get('pressure') &&
				searchParams.get('power')
			)
		) {
			navigate('/')
		}
	}, [])

	const { data: pumps } = useQuery({
		queryKey: ['pumps'],
		queryFn: async () =>
			(
				await databases.listDocuments(DATABASE_ID, COLLECTION_ID_PUMPS, [
					Query.equal('category', searchParams.get('series')!.split(',')),
				])
			).documents,
		enabled: !!searchParams.get('series'),
	})

	useEffect(() => {
		setInputData({
			pressure: searchParams.get('pressure') || '',
			power: searchParams.get('power') || '',
		})
	}, [searchParams])

	const addEllipsis = (input: string) => {
		if (input.trimEnd().length > 24) {
			return input.trimEnd().slice(0, 24) + '...'
		}
		return input.trimEnd()
	}

	return (
		<main className='main p-2 sm:p-4 md:p-6'>
			<div className='wrapper w-full flex flex-col gap-4'>
				<div className='upper flex flex-col gap-6'>
					<div className='input-data flex flex-col gap-4'>
						<h3 className='text-[#555] text-left font-semibold'>
							Рабочая точка
						</h3>
						<div className='inputs flex flex-col md:flex-row gap-4 md:gap-8 w-full md:w-auto'>
							<div className='input flex items-center gap-2'>
								<h3 className='text-[#555]'>Производительность</h3>
								<MyInput
									className='w-[80px]'
									onChange={value =>
										setInputData({ ...inputData, power: value })
									}
									value={inputData.power}
								/>
								<span className='text-[#555] text-nowrap'>м³/ч</span>
							</div>
							<div className='input flex items-center gap-2'>
								<h3 className='text-[#555]'>Напор</h3>
								<MyInput
									className='w-[80px]'
									onChange={value =>
										setInputData({ ...inputData, pressure: value })
									}
									value={inputData.pressure}
								/>
								<span className='text-[#555]'>м</span>
							</div>
							<MyButton
								handleClick={() => {
									searchParams.set('pressure', inputData.pressure)
									searchParams.set('power', inputData.power)
									setSearchParams(searchParams)
								}}
								label='Подобрать'
							/>
						</div>
					</div>
					{pumps && (
						<MyTable
							handleClick={index => setActivePump(index)}
							activePump={activePump}
							data={pumps}
						/>
					)}
				</div>
				<div className='lower flex flex-col lg:flex-row'>
					<div className='part-info w-full lg:w-1/4'>
						<InfoBox title='Гидравлический выбор'>
							<div className='info p-2 border-2 border-t-0 border-light-gray text-left text-sm flex flex-col gap-6'>
								<span className='text-[#222]'>
									A1 [Q: 12.15 м3/ч, H: 12.25 м]
								</span>
								<KeyValueBox
									leftValue='Температура перекачиваемой жидкости, °C'
									rightValue={pumps?.[activePump]['temp_pump_liquid']}
								/>
								<KeyValueBox
									leftValue='Максимальная температура окружающей среды, °C'
									rightValue={pumps?.[activePump]['max_temp_env']}
								/>
								{!!pumps?.[activePump]['max_work_pressure'] && (
									<KeyValueBox
										leftValue='Максимальное рабочее давление, бар'
										rightValue={pumps?.[activePump]['max_work_pressure']}
									/>
								)}
							</div>
						</InfoBox>
						<InfoBox title='Двигатель'>
							<div className='info p-2 border-2 border-t-0 border-light-gray text-left text-sm flex flex-col gap-6'>
								<KeyValueBox
									leftValue='Напряжение, В'
									rightValue={pumps?.[activePump]['voltage']}
								/>
								<KeyValueBox
									leftValue='Мощность, кВт'
									rightValue={pumps?.[activePump]['power']}
								/>
								<KeyValueBox
									leftValue='Номинальный ток, А'
									rightValue={pumps?.[activePump]['amperage']}
								/>
							</div>
						</InfoBox>
						<InfoBox title='Комбинация материалов'>
							<div className='info p-2 border-2 border-t-0 border-light-gray text-left text-sm flex flex-col gap-6'>
								<KeyValueBox
									leftValue='Корпус насоса'
									rightValue={pumps?.[activePump]['corpus']}
								/>
								{pumps?.[activePump]['rotor'] !== '-' && (
									<KeyValueBox
										leftValue='Рабочее колесо'
										rightValue={pumps?.[activePump]['rotor']}
									/>
								)}
							</div>
						</InfoBox>
						<InfoBox title='Присоединение к трубопроводу'>
							<div className='info p-2 border-2 border-t-0 border-light-gray text-left text-sm flex flex-col gap-6'>
								{pumps?.[activePump]['DN_enter'] !== '-' && (
									<KeyValueBox
										leftValue='Патрубок на напорной стороне'
										rightValue={pumps?.[activePump]['DN_enter']}
									/>
								)}
								{pumps?.[activePump]['DN_exit'] !== '-' && (
									<KeyValueBox
										leftValue='Патрубок на стороне всасывания'
										rightValue={pumps?.[activePump]['DN_exit']}
									/>
								)}
								<KeyValueBox
									leftValue='Стандарт подключения'
									rightValue={pumps?.[activePump]['standard_conn']}
								/>
							</div>
						</InfoBox>
						<InfoBox title='Масса'>
							<div className='info p-2 border-2 border-t-0 border-light-gray text-left text-sm flex flex-col gap-6'>
								{!!pumps?.[activePump]['weight'] && (
									<KeyValueBox
										leftValue='Масса, кг'
										rightValue={pumps?.[activePump]['weight']}
									/>
								)}
							</div>
						</InfoBox>
					</div>
					<div className='part-statistics w-full lg:w-3/4'>
						<div className='btns flex justify-start overflow-x-auto'>
							<TabButton
								handleClick={() => setActiveTab(0)}
								activeTab={activeTab}
								index={0}
								title='График'
							/>
							<TabButton
								handleClick={() => setActiveTab(1)}
								activeTab={activeTab}
								index={1}
								title='Описание'
							/>
							<TabButton
								handleClick={() => setActiveTab(2)}
								activeTab={activeTab}
								index={2}
								title='Конструкция'
							/>
							<TabButton
								handleClick={() => setActiveTab(3)}
								activeTab={activeTab}
								index={3}
								title='Размеры'
							/>
							<TabButton
								handleClick={() => setActiveTab(4)}
								activeTab={activeTab}
								index={4}
								title='Документация'
							/>
							<TabButton
								handleClick={() => setActiveTab(5)}
								activeTab={activeTab}
								index={5}
								title='Листы данных'
							/>
						</div>
						{activeTab === 0 && (
							<div className='graphic pt-8 flex justify-center'>
								<Graphic />
							</div>
						)}
						{activeTab === 1 && <Description />}
						{activeTab === 2 && (
							<div className='flex flex-col gap-4'>
								<img
									src={storage
										.getFilePreview(
											'67437198003cf33a761b',
											'674371d500019e51cefd'
										)
										.toString()}
									alt='image of construction'
									className='max-w-full lg:max-w-sm h-auto'
								/>
								<ConstructionTable />
							</div>
						)}
						{activeTab === 3 && (
							<div className='flex flex-col gap-4'>
								<img
									className='max-w-full lg:max-w-sm h-auto'
									src={storage
										.getFilePreview(
											'67437198003cf33a761b',
											'674371df0039abd93099'
										)
										.toString()}
									alt='image of sizes'
								/>
								<SizeTable />
							</div>
						)}
						{activeTab === 4 && (
							<div className='btns p-4 flex flex-col sm:flex-row gap-4'>
								<div className='button-download flex gap-2'>
									<File color='red' size={40} />
									<div className='text flex flex-col gap-1 max-w-48 text-left'>
										<a
											href={storage
												.getFileDownload(
													'67437198003cf33a761b',
													'6744219d0023f7c3b6b0'
												)
												.toString()}
											className='text-[#555] hover:text-light-main cursor-pointer'
										>
											{addEllipsis('Каталог CV IE3, CV, CVF 10.06.2024.pdf')}
										</a>
										<span className='text-[#888]'>17.65 КБ</span>
									</div>
								</div>
								<div className='button-download flex gap-2'>
									<File color='red' size={40} />
									<div className='text flex flex-col gap-1 max-w-48 text-left'>
										<a
											href={storage
												.getFileDownload(
													'67437198003cf33a761b',
													'6744218f00075fc84a66'
												)
												.toString()}
											className='text-[#555] hover:text-light-main cursor-pointer'
										>
											{addEllipsis(
												'Руководство_по_монтажу_CVF_CV_10_06_2024.pdf'
											)}
										</a>
										<span className='text-[#888]'>17.65 КБ</span>
									</div>
								</div>
							</div>
						)}
						{activeTab === 5 && (
							<div className='h-[50vh] lg:h-[100vh] w-full'>
								<iframe
									src={storage
										.getFileView('67437198003cf33a761b', '6745c22c00276eb07f62')
										.toString()}
									className='w-full h-full border-none'
									title='PDF Viewer'
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	)
}

export default Result
