import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navigation from './layout/Navigation'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['200', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'HopeSprout',
	description: 'HopeSprout',
	viewport:
		'width=device-width, initial-scale=1.0, maximum-scale=1, viewport-fit=cover',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='sv'>
			<body className={`${poppins.className} bg-primary-100 text-primary-950`}>
				<Navigation />
				{children}
			</body>
		</html>
	)
}

export default RootLayout
