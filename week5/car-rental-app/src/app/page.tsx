import Image from 'next/image'
import Banner from '@/components/Banner'
import styles from './page.module.css'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <main>
      <div>
        {/* <h1 style={{color: "rgb(0,0,0)"}}>Hello World</h1> */}
        <Banner/>
        <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
          <ProductCard carName='Honda Civic' imgSrc='/img/civic.jpg'/>
          <ProductCard carName='Honda Accord' imgSrc='/img/accord.jpg'/>
          <ProductCard carName='Toyota Fortuner' imgSrc='/img/fortuner.jpg'/>
          <ProductCard carName='Tesla Model 3' imgSrc='/img/tesla.jpg'/>
        </div>
      </div>
    </main>
  )
}
