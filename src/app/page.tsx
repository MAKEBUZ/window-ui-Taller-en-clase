import { 
  ChevronDown, 
  Check, 
  CircleDashed, 
  Play, 
  Image, 
} from "lucide-react";

export default function window_ui() {
  return (
    <main className='bg-gray-100 flex items-center justify-center w-screen h-screen'>
      <section className='bg-white rounded-3xl shadow-md p-6 w-full max-w-xl '>
        <span>
          <h1 className='text-xl font-medium text-gray-800 mb-1'>Appearance</h1>
          <p className="text-gray-400 text-sm mb-4">Set or customize your preferences for the system</p>
        </span>
        
        <hr className="my-4 border-gray-200" />
        
        <section className='flex justify-between items-center mb-4'>
          <span>
            <h2 className='text-gray-700 font-medium'>Language</h2>
            <p className="text-gray-400 text-sm">Select the language of the platform</p>
          </span>
          <span className='bg-white border border-gray-200 rounded-xl px-4 py-2 text-gray-700 w-36 flex items-center justify-between'>
            English
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </span>
        </section>

        <hr className="my-4 border-gray-200" />
        
        <section className='mb-4'>
          <span className='mb-3'>
            <h2 className='text-gray-700 font-medium'>Interface theme</h2>
            <p className="text-gray-400 text-sm mb-4">Customize your application appereance</p>
          </span>
          
          <ul className='flex justify-between'>
            <li className='flex flex-col items-center'>
              <figure className='h-20 w-24 bg-darkmode/10 rounded-lg mb-2 flex items-center justify-center p-2 bg-gradient-to-r from-darkmode/90 to-darkmode/10'>
                <span className='w-full h-3/4 flex flex-col space-y-2'>
                  <span className='h-1 w-3/4 bg-gray-300 rounded'></span>
                  <span className='h-1 w-full bg-gray-300 rounded'></span>
                  <span className='h-1 w-2/3 bg-gray-300 rounded'></span>
                </span>
              </figure>
              <figcaption className='text-sm text-gray-500'>Auto</figcaption>
            </li>
            
            <li className='flex flex-col items-center'>
              <figure className='h-20 w-24 bg-white border-2 border-purple-500 rounded-lg mb-2 flex items-center justify-center p-2 relative'>
                <span className='w-full h-3/4 flex flex-col space-y-2'>
                  <span className='h-1 w-3/4 bg-gray-300 rounded'></span>
                  <span className='h-1 w-full bg-gray-300 rounded'></span>
                  <span className='h-1 w-2/3 bg-gray-300 rounded'></span>
                </span>
                <mark className='absolute bottom-2 left-2 bg-purple-500 rounded-full h-5 w-5 flex items-center justify-center'>
                  <Check className="h-3 w-3 text-white" />
                </mark>
              </figure>
              <figcaption className='text-sm text-purple-500'>Light</figcaption>
            </li>
            
            <li className='flex flex-col items-center'>
              <figure className='h-20 w-24 bg-darkmode rounded-lg mb-2 flex items-center justify-center p-2'>
                <span className='w-full h-3/4 flex flex-col space-y-2'>
                  <span className='h-1 w-3/4 bg-purple-600 rounded'></span>
                  <span className='h-1 w-full bg-purple-600 rounded'></span>
                  <span className='h-1 w-2/3 bg-purple-600 rounded'></span>
                </span>
              </figure>
              <figcaption className='text-sm text-gray-500'>Dark</figcaption>
            </li>
          </ul>
        </section>
        
        <hr className="my-4 border-gray-200" />
        
        <section className='mb-5'>
          <span className='mb-2 flex justify-between items-center'>
            <div>
              <h2 className='text-gray-700 font-medium'>Accent color</h2>
              <p className="text-gray-400 text-sm">Pick your platform's main color</p>
            </div>
            <ul className='flex space-x-3'>
              <li className='h-7 w-7 rounded-full bg-red-400'></li>
              <li className='h-7 w-7 rounded-full bg-yellow-400'></li>
              <li className='h-7 w-7 rounded-full bg-green-400'></li>
              <li className='h-7 w-7 rounded-full bg-indigo-600'></li>
              <li className='h-7 w-7 rounded-full bg-pink-400'></li>
            </ul>
          </span>
        </section>
        
        <hr className="my-4 border-gray-200" />
        
        <ul className='space-y-4 mb-4'>
        <li className='flex items-center justify-between py-2'>
            <span className='flex items-center'>
              <CircleDashed className="mr-3 text-gray-400 w-4 h-4" />
              <span className='text-gray-700'>Reduce Motion</span>
            </span>
            <span className='w-12 h-6 bg-indigo-600 rounded-full flex items-center px-1'>
              <span className='h-4 w-4 bg-white rounded-full ml-auto'></span>
            </span>
          </li>

          <hr className="my-2 border-gray-200" />
          
          <li className='flex items-center justify-between py-2'>
            <span className='flex items-center'>
              <Play className="mr-3 text-gray-400 w-4 h-4" />
              <span className='text-gray-700'>Auto play</span>
            </span>
            <span className='w-12 h-6 bg-indigo-600 rounded-full flex items-center px-1'>
              <span className='h-4 w-4 bg-white rounded-full ml-auto'></span>
            </span>
          </li>

          <hr className="my-2 border-gray-200" />
          
          <li className='flex items-center justify-between'>
            <span className='flex items-center'>
              <Image className="mr-3 text-gray-400 w-4 h-4" />
              <span className='text-gray-700'>High quality photo</span>
            </span>
            <span className='w-12 h-6 bg-gray-300 rounded-full flex items-center px-1'>
              <span className='h-4 w-4 bg-white rounded-full'></span>
            </span>
          </li>
        </ul>

        <hr className="my-2 border-gray-200" />
        
        <span className='flex justify-between items-center mt-6'>
          <span className='text-gray-400 flex items-center'>
            Reset to default
          </span>
          <div className='flex space-x-3'>
            <span className='bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-xl'>Cancel</span>
            <span className='bg-indigo-600 text-white px-6 py-2 rounded-xl'>Save Preferences</span>
          </div>
        </span>
      </section>
    </main>
  );
}