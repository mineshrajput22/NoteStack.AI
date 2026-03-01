import { Pencil, Plus, Trash2 } from 'lucide-react';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './card';

export const NoteCard = () => {
	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle className='text-2xl'>Go To Gym at 5</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-2'>
					<h2 className='font-bold text-xl'>Description:</h2>
					<div className='font-normal indent-9 border-2 border-white/20  rounded-xl p-3 border-dotted min-h-40 '>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
							voluptates blanditiis vero sed optio ratione, repudiandae
							recusandae distinctio nam numquam odit ipsum voluptatibus impedit
							autem accusamus non tempore magni libero, vitae sit in dolor. At
							debitis amet laborum voluptatibus dolorem deleniti
						</p>
					</div>
					<div className='font-medium'>{'#gym #routine #morning'}</div>
				</CardContent>
				<CardFooter>
					<div className='flex gap-4 justify-end w-full'>
						<Button>
							<Pencil />
						</Button>
						<Button>
							<Trash2 />
						</Button>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
};
