import Main from "./HomePageComponents/Main"
import NavBar from "./HomePageComponents/NavBar"

const Home = () => {
  return (
    <>
        <div className="h-screen max-sm:h-max">
            <NavBar/>
            <Main/>
        </div>
    </>
  )
}

export default Home