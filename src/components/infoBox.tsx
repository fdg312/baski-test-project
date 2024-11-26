export const InfoBox = ({
	children,
	title,
}: {
	children: React.ReactNode
	title: string
}) => {
	return (
		<div className='infobox'>
			<div className='info-title p-2 bg-b-gray border-2 border-y-0 border-light-gray'>
				<h3 className='font-bold text-sm text-left text-[#222]'>{title}</h3>
			</div>
			{children}
		</div>
	)
}
