import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className='flex flex-col items-center w-full py-4 px-4 pt-32'>
            <h1 className='text-center text-6xl leading-12 md:text-7xl md:leading-17.5 mt-4 font-semibold max-w-3xl'>
                Software Engineer
            </h1>

            <div className='max-w-md mt-2'>
                <ul>
                    <li>AvePoint, Inc</li>
                    <li>Ho Chi Minh, Viet Nam</li>
                    <li>+84 0708607525</li>
                    <li>zin.it.dev@gmail.com</li>
                </ul>
            </div>

            <div className='flex items-center gap-2 mt-8 text-sm'>
                <Button>Contact Me</Button>
                <Button variant='outline'>My Resume</Button>
            </div>

            <div className='space-x-6 mt-10'>
                
            </div>
        </section>
    );
};

export default Hero;
