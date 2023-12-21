import Banner from "../../components/Banner/Banner"
import Section2 from "../../components/Section2/Section2"
import Heading from "../../components/Shared/Heading"


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Heading title={'Management is used by many clients from around the world'} subtitle={'Explore & Learn More'} ></Heading>
      <Section2></Section2>
    </div>
  )
}

export default Home
