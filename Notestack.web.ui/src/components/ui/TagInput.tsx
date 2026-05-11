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
			<div>
				{value.map((tag, index) => (
					<span key={index}>
						#{tag} <button onClick={() => removeTag(tag)}>X</button>
					</span>
				))}
			</div>
			<div className=' flex items-center justify-center'>
				<Input
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

				<Button className=' right-3 mx-2' onClick={() => addTag()}>
					<Plus size={26} />
				</Button>
			</div>
		</>
	);
};

export default TagInput;
