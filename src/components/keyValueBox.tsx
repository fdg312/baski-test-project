export const KeyValueBox = ({
	leftValue,
	rightValue,
}: {
	leftValue: string
	rightValue: string
}) => {
	return (
		<div className='key-value flex justify-between text-[#222]'>
			<span className='w-1/2 text-sm'>{leftValue}</span>
			<span className='w-1/3 text-sm'>{rightValue}</span>
		</div>
	)
}
