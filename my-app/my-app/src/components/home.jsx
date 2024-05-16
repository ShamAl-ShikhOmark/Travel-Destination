import header from "../header/header"
import Footer from "../footer/footer"
import Tours  from "../tours/tours"
function Home(props) {
    return (
        <div className="home">
<header/>
<tours data ={props.data}/>       {/*recieve the data from App and pass it again as props to Tours*/}
<footer/>
        </div>
    )
     }

export default Home