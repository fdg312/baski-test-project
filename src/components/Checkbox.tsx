export const Checkbox = ({
	id,
	checked,
	onChange,
}: {
	id: string
	checked: boolean
	onChange: (checked: boolean) => void
}) => {
	return (
		<div className='flex items-center space-x-2'>
			<input
				id={id}
				type='checkbox'
				className='peer hidden'
				checked={checked}
				onChange={e => {
					console.log(checked)
					onChange(e.target.checked)
				}}
			/>
			<label
				htmlFor={id}
				className={`relative flex items-center justify-center w-6 h-6 rounded cursor-pointer 
          border border-gray-400 bg-white
          peer-checked:bg-main
          peer-checked:border-main
          hover:bg-main hover:border-main
          transition duration-200`}
			>
				<span
					className={`absolute inset-0 flex items-center justify-center 
						after:content-['✓'] after:text-white after:text-lg 
						after:bg-red-500 peer-checked:after:opacity-100 
						after:transition after:duration-200 ${!checked && 'after:opacity-0'}`}
				></span>
			</label>
		</div>
	)
}
