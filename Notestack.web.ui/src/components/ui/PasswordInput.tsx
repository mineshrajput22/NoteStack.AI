import { useState } from 'react';
import { Input } from './input';
import { Eye, EyeOff } from 'lucide-react';
import { Field, FieldDescription, FieldLabel } from './field';

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	fieldName: string;
	error?: string;
};

const PasswordInput = ({ fieldName, error, ...props }: PasswordInputProps) => {
	const [isShowPassword, setIsShowPassword] = useState(false);
	return (
		<>
			<Field>
				<FieldLabel htmlFor='password'>{fieldName}</FieldLabel>
				<div className='relative flex items-center justify-center'>
					<Input
						id='password'
						type={isShowPassword ? 'text' : 'password'}
						placeholder='********'
						{...props}
					/>
					<button
						type='button'
						className='absolute right-3 opacity-50 '
						onClick={() => setIsShowPassword((prev) => !prev)}>
						{isShowPassword ?
							<EyeOff size={20} opacity={1} />
						:	<Eye size={20} />}
					</button>
				</div>
				{error && (
					<FieldDescription className='text-red-500'>{error}</FieldDescription>
				)}
			</Field>
		</>
	);
};

export default PasswordInput;
