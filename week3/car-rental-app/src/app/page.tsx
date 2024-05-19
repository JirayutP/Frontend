import Image from 'next/image'
import Banner from '@/component/Banner'
import styles from './page.module.css'
import ProductCard from '@/component/ProductCard'

export default function Home() {
  return (
    <main>
      <div>
        {/* <h1 style={{color: "rgb(0,0,0)"}}>Hello World</h1> */}
        <Banner/>
        <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </main>
  )
}
