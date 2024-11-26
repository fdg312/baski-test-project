export const MyButton = ({
	label,
	disabled,
	handleClick,
}: {
	label: string
	handleClick?: () => void
	disabled?: boolean
}) => {
	return (
		<button
			disabled={disabled}
			onClick={handleClick}
			className='bg-main max-w-[200px] hover:bg-light-main text-white py-2 px-4 w-1/2'
		>
			{label}
		</button>
	)
}
