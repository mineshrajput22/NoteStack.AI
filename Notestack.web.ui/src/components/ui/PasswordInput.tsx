import { useState } from 'react';
import { Input } from './input';
import { Eye, EyeOff } from 'lucide-react';
import { Field, FieldDescription, FieldLabel } from './field';

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	fieldName: string;
};

const PasswordInput = ({ fieldName, ...props }: PasswordInputProps) => {
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
						value={props.value}
					/>
					<button
						className='absolute right-3 opacity-50 '
						onClick={() => setIsShowPassword(!isShowPassword)}>
						{isShowPassword ?
							<EyeOff size={20} opacity={1} />
						:	<Eye size={20} />}
					</button>
				</div>
				<FieldDescription>{/* {"Error Message"} */}</FieldDescription>
			</Field>
		</>
	);
};

export default PasswordInput;
