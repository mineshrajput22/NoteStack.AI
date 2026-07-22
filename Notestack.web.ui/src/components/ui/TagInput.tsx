import { Input } from './input';
import { Plus } from 'lucide-react';
import { Button } from './button';
import { useState } from 'react';

type TagInputProps = {
	value: string[];
	onChange: (value: string[]) => void;
};

const TagInput = ({ value = [], onChange }: TagInputProps) => {
	const [input, setInput] = useState('');

	const addTag = () => {
		const trimmed = input.trim();
		if (!trimmed || value.includes(trimmed)) return;

		const updatedTags = [...value, trimmed];

		onChange(updatedTags);
		setInput('');
	};

	const removeTag = (tagToRemove: string) => {
		onChange(value.filter((tag) => tag !== tagToRemove));
	};
	return (
		<>
			<div className=' w-full flex flex-wrap gap-2'>
				{value.map((tag, index) => (
					<Button type='button' variant='outline' className='w-fit' key={index}>
						{`#${tag}`}{' '}
						<span className='hover:scale-105' onClick={() => removeTag(tag)}>
							❌
						</span>
					</Button>
				))}
			</div>
			<div className='flex items-center justify-start'>
				<Input
					className='w-[40%]'
					id='noteTag'
					type='text'
					placeholder='#gym'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							e.preventDefault();
							addTag();
						}
					}}
				/>

				<Button
					type='button'
					className='hover:scale-105 right-3 mx-2'
					onClick={addTag}>
					<Plus size={26} />
				</Button>
			</div>
		</>
	);
};

export default TagInput;
