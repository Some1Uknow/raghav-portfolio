import Main from "./HomePageComponents/Main"
import NavBar from "./HomePageComponents/NavBar"

const Home = () => {
  return (
    <>
        <div className='h-screen'>
            <NavBar/>
            <Main/>
        </div>
    </>
  )
}

export default Home