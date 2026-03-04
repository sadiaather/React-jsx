
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from './Components/CardComponent';
import img1 from '../src/assets/ITE.webp'
import img2 from '../src/assets/GDA.webp';
import img3 from '../src/assets/DMA.webp';
import Header from './Components/Header';
 const data=[
  {
    title:"IT Support Engineer", text:"it support engineer" ,img:img1
  },
  {
    title:"Graphic Desgining with AI", text:"it support engineer" ,img:img2
  },
  {
    title:"Digital Marketing with AI", text:"it support engineer" ,img:img3
  }
 ]
function App() {


  return (  
    <>
< Header />
    
    
    <div style = {{display:"flex",flexWrap:"wrap",gap:"5%" ,padding:"2px",margin:"2px"}}>
      {
        data.map((data,index)=>(
          <CardComponent 
          key={index}
          title={data.title}
          text={data.text}
          img={data.img}/>
        ))
      } 
   
    </div>
       
    </>

  )
}


export default App
