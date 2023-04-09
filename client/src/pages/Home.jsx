import {motion,AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'
import state from '../store'
import { CustomButton } from '../components'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'

const Home = () => {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img
            src='/public/threejs.png'
            alt='logo'
            className='w-8 h-8 object-contain '
            />

          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                Make <br className='xl:block hidden'/> miracle
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-slate-950 text-base'>
                Make your unique shirt with our brand-new 3D tools <strong>
                  Create your imagination
                </strong>{" "} and define your style
              </p>
              <CustomButton
              type="filled"
              title="Make it"
              handleClick={()=>state.intro=false}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>

          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home