import { Navbar } from '~/components'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full h-screen no-scrollbar flex flex-col'>
      <Navbar />
      <div className='flex-1'>{children}</div>
    </div>
  )
}
