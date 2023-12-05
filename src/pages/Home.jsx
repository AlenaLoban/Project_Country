import { Link } from 'react-router-dom'
import '../App.css'
const Home = () => {
   return(
      <div className="container page">
         <h1>Lorem ipsum dolor, sit amet.</h1>
         <div>
            <p>
            Sit eius error dolorum consequatur dignissimos debitis minus officia voluptas, repellendus enim quod accusantium animi sapiente deserunt aliquam rem iure odit odio autem ut dolores reprehenderit aperiam dolor ullam. Aliquid.
            Mollitia possimus accusantium deleniti, enim fuga pariatur dolorum inventore laboriosam asperiores, eius magnam? Dolorem.</p>
            <h3>What is new?</h3>
            <nav>
               <ul>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto maxime corrupti accusantium voluptatem pariatur sunt molestias alias! Voluptate, incidunt nam.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique maiores ipsum corrupti a quia eaque sed ad repellendus ea, nihil saepe quis repudiandae provident doloremque sequi officiis? Fugit non itaque, modi ipsam eligendi vel.</li>
                  <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit alias odit, veniam consectetur quidem a velit quo nam nulla, dolore officia iure. Iusto deserunt iure laborum enim numquam quia placeat ipsum quibusdam. Quos aut quidem esse incidunt cupiditate neque officia similique, maxime sint tenetur! Explicabo similique accusantium reprehenderit amet ad. Vel ad, possimus aliquid magni harum numquam sit velit ducimus.</li>
               </ul>
            </nav>
            <div className='read-more'>
            <h3>Read more about Us</h3>
            <Link to="/about">about</Link>
            </div>

         </div>
      </div>
   )
}
export default Home