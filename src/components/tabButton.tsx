export const TabButton = ({
	activeTab,
	index,
	title,
	handleClick,
}: {
	activeTab: number
	index: number
	title: string
	handleClick: () => void
}) => {
	return (
		<button
			onClick={handleClick}
			className={
				'py-4 px-6 bg-b-gray font-bold border border-light-gray hover:bg-white hover:text-main ' +
				(activeTab === index && 'bg-white text-main border-t-2 border-t-main')
			}
		>
			{title}
		</button>
	)
}
