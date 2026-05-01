import './App.css'
import ProductCard from './components/productCard'

function App() {
 
  return (
    <>
      <div>
        <ProductCard name="Rain Forest" description="Explore the lush greenery and diverse wildlife of the rain forest." imageUrl="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" />
        <ProductCard name="Mountain Trekking" description="Embark on an adventure through scenic mountain trails and breathtaking views." imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ub0pgXnjiEfXzH4seCasYRX8VtHsDFBLDQ&s" />
        <ProductCard name="Beach Paradise" description="Relax on pristine beaches and enjoy crystal-clear waters." imageUrl="https://img.freepik.com/free-photo/beach-with-coconut-tree-sunset_268835-4049.jpg?semt=ais_hybrid&w=740&q=80" />
      </div>
    </>
  )
}

export default App
