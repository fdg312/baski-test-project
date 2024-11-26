export const StepTitle = ({
	title,
	number,
}: {
	title: string
	number: number
}) => {
	return (
		<div className='title flex gap-4'>
			<div className='rounded-full flex justify-center items-center w-8 h-8 bg-main'>
				<span className='text-white font-extrabold text-lg'>{number}</span>
			</div>
			<h3 className='text-gray text-2xl font-semibold'>{title}</h3>
		</div>
	)
}
