import GithubSVG from '../../components/svg/github.svg';
import LinkedinSVG from '../../components/svg/linkedin.svg';
import type { ClassNameProp } from '../../types/app.types';

export default function Contact({ className }: ClassNameProp) {
    return (
        <div className={`w-full flex-col gap-2 items-center ${className}`}>
            <div className='h-5 flex flex-row gap-3'>
                <a
                    className='item-hover'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.linkedin.com/in/vishv-nagde-417449252/'
                    aria-label='Go to LinkedIn profile'
                >
                    <LinkedinSVG />
                </a>
                <a
                    className='item-hover'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://github.com/Vishv186'
                    aria-label='Go to Github profile'
                >
                    <GithubSVG />
                </a>
            </div>
            <a
                className='text-text underline'
                target='_blank'
                rel='noopener noreferrer'
                href='mailto:vishvnagde186@gmail.com'
                aria-label='Send an email'
            >
                vishvnagde186@gmail.com
            </a>
        </div>
    );
}
