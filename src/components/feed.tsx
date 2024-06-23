import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/pro-solid-svg-icons'


function Feed() {
	return (
		<div className='py-5 w-1/2 self-center max-w-md min-w-64 flex flex-col items-center justify-center gap-y-1 border border-teal-400'>
			<div className="w-full flex flex-row items-center justify-between">
				<div className="flex flex-row items-center justify-start gap-x-2">
					<FontAwesomeIcon icon={faCircleUser} size='2x' />
					<div className='text-base font-sans text-white flex-1'>Applied to <span className='font-bold'>Front End Developer</span></div>
				</div>
				<div className='text-base font-sans text-white'>Sep 20</div>
			</div>
			<div className='h-5 ml-7 my-2 w-full border-l border-l-orange-400' />
			<div className="w-full flex flex-row items-center justify-between">
				<div className="flex flex-row items-center justify-start gap-x-2">
					<FontAwesomeIcon icon={faCircleUser} size='2x' />
					<div className='text-base font-sans text-white flex-1'>Applied to <span className='font-bold'>Front End Developer</span></div>
				</div>
				<div className='text-base font-sans text-white'>Sep 20</div>
			</div>
		</div>
	)
}

export default Feed