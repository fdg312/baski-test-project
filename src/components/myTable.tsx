import { Models } from 'appwrite'

export const MyTable = ({
	data,
	activePump,
	handleClick,
}: {
	data: Models.Document[]
	activePump: number
	handleClick: (id: number) => void
}) => {
	return (
		<div className='w-full overflow-x-auto'>
			<table className='table-auto min-w-full border-collapse border border-light-gray text-sm'>
				<thead>
					<tr>
						<th className='relative text-left text-[#555] px-2 pb-6 font-normal after:absolute after:h-[1px] after:w-5/6 after:bottom-0 after:left-2 after:bg-[#BBBBBC]'>
							Наименование
						</th>
						<th className='relative text-left text-[#555] px-2 pb-6 font-normal after:absolute after:h-[1px] after:w-5/6 after:bottom-0 after:left-2 after:bg-[#BBBBBC]'>
							Наличие
						</th>
						<th className='relative text-left text-[#555] px-2 pb-6 font-normal after:absolute after:h-[1px] after:w-5/6 after:bottom-0 after:left-2 after:bg-[#BBBBBC]'>
							Тип насоса
						</th>
						<th className='relative text-left text-[#555] px-2 pb-6 font-normal after:absolute after:h-[1px] after:w-5/6 after:bottom-0 after:left-2 after:bg-[#BBBBBC]'>
							Артикул
						</th>
						<th className='relative text-left text-[#555] px-2 pb-6 font-normal after:absolute after:h-[1px] after:w-5/6 after:bottom-0 after:left-2 after:bg-[#BBBBBC]'>
							Цена с НДС
							<br />
							<span className='text-[#888]'>₽</span>
						</th>
						<th className='relative text-left text-[#555] px-2 pb-6 font-normal after:absolute after:h-[1px] after:w-5/6 after:bottom-0 after:left-2 after:bg-[#BBBBBC]'>
							P — мощность
							<br />
							<span className='text-[#888]'>кВт</span>
						</th>
						<th className='relative text-left text-[#555] px-2 pb-6 font-normal after:absolute after:h-[1px] after:w-5/6 after:bottom-0 after:left-2 after:bg-[#BBBBBC]'>
							η — КПД
							<br />
							<span className='text-[#888]'>%</span>
						</th>
						<th className='relative text-left text-[#555] px-2 pb-6 font-normal after:absolute after:h-[1px] after:w-5/6 after:bottom-0 after:left-2 after:bg-[#BBBBBC]'>
							NPSH м
						</th>
						<th className='relative text-left text-[#555] px-2 pb-6 font-normal after:absolute after:h-[1px] after:w-5/6 after:bottom-0 after:left-2 after:bg-[#BBBBBC]'>
							DN вх. <span className='text-[#888]'>мм</span>
						</th>
						<th className='relative text-left text-[#555] px-2 pb-6 font-normal after:absolute after:h-[1px] after:w-5/6 after:bottom-0 after:left-2 after:bg-[#BBBBBC]'>
							DN вых. <span className='text-[#888]'>мм</span>
						</th>
						<th className='relative text-left text-[#555] px-2 pb-6 font-normal after:absolute after:h-[1px] after:w-5/6 after:bottom-0 after:left-2 after:bg-[#BBBBBC]'>
							Q — расход
							<br />
							<span className='text-[#888]'>м³/ч</span>
						</th>
						<th className='relative text-left text-[#555] px-2 pb-6 font-normal after:absolute after:h-[1px] after:w-5/6 after:bottom-0 after:left-2 after:bg-[#BBBBBC]'>
							H — напор
							<span className='text-[#888]'>м</span>
						</th>
						<th className='relative text-left text-[#555] px-2 pb-6 font-normal after:absolute after:h-[1px] after:w-5/6 after:bottom-0 after:left-2 after:bg-[#BBBBBC]'>
							Монтажная длина
							<br />
							<span className='text-[#888]'>мм</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr
							key={item.$id}
							className={
								'cursor-pointer text-left ' +
								(index === activePump
									? 'bg-light-main text-white'
									: 'hover:bg-[#f9f9fa] text-[#555]')
							}
							onClick={() => handleClick(index)}
						>
							<td className='px-4 py-[3px] text-nowrap'>{item.name}</td>
							<td
								className={`px-4 text-nowrap ${
									item.availability === 'В наличии'
										? 'text-[#00b300]'
										: item.availability === 'Нет в наличии'
										? 'text-[#ff0000]'
										: item.availability === 'В пути'
										? 'text-[#ff8000]'
										: ''
								}`}
							>
								{item.availability}
							</td>
							<td className='px-4 text-nowrap'>{item.type}</td>
							<td className='px-4 text-nowrap'>{item.article}</td>
							<td className='px-4 text-nowrap'>{item.price}</td>
							<td className='px-4 text-nowrap'>{item.power}</td>
							<td className='px-4 text-nowrap'>{item.efficiency}</td>
							<td className='px-4 text-nowrap'>{item.NPSH}</td>
							<td className='px-4 text-nowrap'>{item.DN_enter}</td>
							<td className='px-4 text-nowrap'>{item.DN_exit}</td>
							<td className='px-4 text-nowrap'>{item.Q}</td>
							<td className='px-4 text-nowrap'>{item.H}</td>
							<td className='px-4 text-nowrap'>{item.mount_len}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
