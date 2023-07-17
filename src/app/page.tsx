import AboutHeader from '@/content/om-oss/header.mdx'
import AboutContent from '@/content/om-oss/content.mdx'
import VisionHeader from '@/content/vision/header.mdx'
import VisionContent from '@/content/vision/content.mdx'

const Home = async () => {
	return (
		<>
			<div
				id='image-container'
				className='min-h-screen bg-[url("./content/om-oss/image.jpg")] bg-cover bg-fixed bg-center'
			>
				<div className='full-w-container min-h-screen bg-primary-950 bg-opacity-40'>
					<section className='max-w-container flex flex-col items-center justify-center text-center text-primary-100 md:px-24'>
						<AboutHeader />
					</section>
				</div>
			</div>
			<div className='full-w-container py-16 text-primary-950'>
				<section className='max-w-container flex justify-center text-center'>
					<div className='max-w-lg'>
						<AboutContent />
					</div>
				</section>
			</div>
			<div
				id='image-container'
				className='min-h-full bg-[url("./content/vision/image.jpg")] bg-cover bg-fixed bg-center'
			>
				<div className='full-w-container min-h-full bg-primary-950 bg-opacity-40 py-32'>
					<section className='max-w-container flex flex-col items-center justify-center text-center text-primary-100 md:px-24'>
						<VisionHeader />
					</section>
				</div>
			</div>
			<div className='full-w-container py-16 text-primary-950'>
				<section className='max-w-container flex justify-center text-center'>
					<div className='max-w-lg'>
						<VisionContent />
					</div>
				</section>
			</div>
		</>
	)
}

export default Home
