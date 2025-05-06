
import './App.css'
import Home from './components/Home'

function App() {
 

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-geay-100 py-8 px-4'>
     <div className='text-center mb-8'>
      <h1 className='text-5xl font-bold text-white mb-2 '>Ai Image Enhancer</h1>
      <p className='text-lg text-white'> Upload Your Image and let Ai enhance to in seconds </p>
     </div>
     <Home/> 


    

    <div className='text-lg text-gray-500 mt-6'>
        <p>Powered By Ai @ShivKumar</p>
    </div>


    </div>
  )
}

export default App
