import Image from 'next/image'

export default function Jumbotron() {
    return <div><Image priority responsive="true"  src="/images/jumbotron-background.jpg" width={1872} height={827}  alt="Indian-food-restoraunt" /></div>
}