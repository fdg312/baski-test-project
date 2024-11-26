export const MySelect = ({
	isOpen,
	setIsOpen,
	selectedOption,
	setSelectedOption,
}: {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	selectedOption: string
	setSelectedOption: (selectedOption: string) => void
}) => {
	const options = Array.from({ length: 8 }, (_, index) => `${index + 1}`)

	const handleSelect = (option: string) => {
		setSelectedOption(option)
		setIsOpen(false)
	}

	return (
		<div className='relative inline-block w-full'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='relative w-full text-left px-4 py-2 text-gray bg-[#f7f7f7] border border-[#eeeeee] rounded-md shadow-sm focus:outline-none'
			>
				<span>{selectedOption}</span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className={`absolute top-[12px] right-1 h-4 w-4 transform transition-transform ${
						isOpen ? 'rotate-180' : 'rotate-0'
					}`}
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					strokeWidth={2}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M19 9l-7 7-7-7'
					/>
				</svg>
			</button>
			{isOpen && (
				<div className='absolute p-1 z-10 mt-1 w-full bg-[#f7f7f7] border border-[#eeeeee] rounded-md shadow-lg'>
					{options.map((option, index) => (
						<div
							key={index}
							onClick={() => handleSelect(option)}
							className='rounded px-2 py-1 text-xs text-left text-gray cursor-pointer hover:bg-gray/10'
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	)
}
