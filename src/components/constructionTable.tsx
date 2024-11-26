export const ConstructionTable = () => {
	const data = [
		{ part: 'Электродвигатель', material: '', enDin: '', aisiAstm: '' },
		{ part: 'Муфта вала', material: '', enDin: '', aisiAstm: '' },
		{
			part: 'Головная часть насоса',
			material: 'Чугун',
			enDin: 'EN-JL 1030',
			aisiAstm: 'ASTM 25B',
		},
		{ part: 'Торцевое уплотнение вала', material: '', enDin: '', aisiAstm: '' },
		{
			part: 'Вал',
			material: 'Нержавеющая сталь',
			enDin: '1.4507',
			aisiAstm: 'AISI 420',
		},
		{
			part: 'Напорный канал',
			material: 'Нержавеющая сталь',
			enDin: '1.4301',
			aisiAstm: 'AISI 304',
		},
		{
			part: 'Рабочее колесо',
			material: 'Нержавеющая сталь',
			enDin: '1.4301',
			aisiAstm: 'AISI 304',
		},
		{
			part: 'Блок рабочих колес',
			material: 'Нержавеющая сталь',
			enDin: '1.4301',
			aisiAstm: 'AISI 304',
		},
		{
			part: 'Всасывающий канал',
			material: 'Нержавеющая сталь',
			enDin: '1.4301',
			aisiAstm: 'AISI 304',
		},
		{
			part: 'Основание',
			material: 'Нержавеющая сталь',
			enDin: '1.4301',
			aisiAstm: 'AISI 304',
		},
		{ part: 'Щелевое уплотнение', material: 'PTFE', enDin: '', aisiAstm: '' },
		{
			part: 'Цилиндрический кожух',
			material: 'Нержавеющая сталь',
			enDin: '1.4301',
			aisiAstm: 'AISI 304',
		},
		{
			part: 'Уплотнение кожуха',
			material: 'EPDM/FKM',
			enDin: '',
			aisiAstm: '',
		},
		{
			part: 'Плита-основание',
			material: 'Чугун',
			enDin: 'EN-JL 1030',
			aisiAstm: 'ASTM 25B',
		},
		{
			part: 'Крышка головной части',
			material: 'Нержавеющая сталь',
			enDin: '1.4301',
			aisiAstm: 'AISI 304',
		},
	]

	return (
		<div className='overflow-x-auto p-4'>
			<table className='table-auto border-collapse border border-[#555] text-[#555] text-sm'>
				<thead>
					<tr className='bg-gray-100'>
						<th className='px-2 py-1 border border-[#555] text-left'>№</th>
						<th className='px-2 py-1 border border-[#555] text-left'>
							Описание детали
						</th>
						<th className='px-2 py-1 border border-[#555] text-left'>
							Материал
						</th>
						<th className='px-2 py-1 border border-[#555] text-left'>EN/DIN</th>
						<th className='px-2 py-1 border border-[#555] text-left'>
							AISI/ASTM
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr key={index} className='even:bg-gray-50'>
							<td className='px-2 py-1 border border-[#555]'>{index + 1}</td>
							<td className='px-2 py-1 border border-[#555]'>{row.part}</td>
							<td className='px-2 py-1 border border-[#555]'>{row.material}</td>
							<td className='px-2 py-1 border border-[#555]'>{row.enDin}</td>
							<td className='px-2 py-1 border border-[#555]'>{row.aisiAstm}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
