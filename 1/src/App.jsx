import {Canvas} from '@react-three/fiber'
import './App.css'
import { Model} from './public/collegiata_di_san_candido/scene.gltf'

function App() {


  return (
    <>
<Canvas>
style={{
  height: '100vh',
  width: '100vh',
}}

  <Model/>
</Canvas>


 
  </>
  )
}

export default App
