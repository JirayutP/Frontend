import Image from 'next/image'
import Banner from '@/components/Banner'
import styles from './page.module.css'
import ProductCard from '@/components/ProductCard'
import CarPanel from '@/components/CarPanel'
import { TravelCard } from '@/components/TravelCard'

export default function Home() {
  return (
    <main>
      <div>
        {/* <h1 style={{color: "rgb(0,0,0)"}}>Hello World</h1> */}
        <Banner/>
        <TravelCard></TravelCard>
      </div>
    </main>
  )
}
