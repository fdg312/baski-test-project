export const CategoryButton = ({
	index,
	activeCategory,
	handleClick,
	name,
}: {
	index: number
	activeCategory: number
	name: string
	handleClick: () => void
}) => {
	return (
		<div
			className={`category cursor-pointer flex items-center p-3 border-x-2 border-b-2 border-light-gray ${
				activeCategory !== index && 'hover:border-s-main hover:border-s-4'
			} ${
				activeCategory === index && 'border-0 bg-main text-white hover:border-0'
			}`}
			onClick={handleClick}
		>
			<span className='font-normal'>{name}</span>
		</div>
	)
}
