import { Button } from './button';
import { Field } from './field';
import { Input } from './input';

export const SearchBar = () => {
	return (
		<div>
			<div className='mx-auto w-xl py-5'>
				<Field orientation='horizontal'>
					<Input type='search' placeholder='Search...' />
					<Button>Search</Button>
				</Field>
			</div>
		</div>
	);
};
