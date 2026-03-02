
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from './CardComponent/CardComponent';
import img1 from '../src/assets/ITE.webp'
import img2 from '../src/assets/GDA.webp';
import img3 from '../src/assets/DMA.webp';
function App() {
  img1 ,img2,img3
 

  return (  
    <>
    <CardComponent img ="img1" title="IT Support Engineer" text="it support engineer" />  
     <CardComponent  img ="img2" title="Digital Markeiting  With AI" text="Digital Markeiting  With AI" /> 
      <CardComponent img ="img3" title="Graphic Desgining With AI" text="Graphic Desgining  With AI" /> 
        
    </>
  )
}


export default App
