export const MyInput = ({
	placeholder,
	value,
	onChange,
	className,
}: {
	placeholder?: string
	className?: string
	value: string
	onChange: (value: string) => void
}) => {
	return (
		<input
			className={
				'border outline-none text-gray bg-[#f7f7f7] border-[#eeeeee] p-2 rounded ' +
				className
			}
			placeholder={placeholder}
			onChange={e => onChange(e.target.value)}
			value={value}
			required
			type='text'
		/>
	)
}
