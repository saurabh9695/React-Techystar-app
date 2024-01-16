import React from 'react'
import vg from "../assets/laptop.jpg";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
 } from "react-icons/ai" ; 

const Home = () => {
  return (
    <>
   <div className="home" id="home">
    <main>
      <h1>TechyStar</h1>
      <p>Solution to all your problems</p>
    </main>
   </div>

   <div className="home2">
   <img src={vg} alt="Graphics" />


    <div>
      <p>
        We are your one and only solution to the tech problems
        you face
        every day. We are leading tech company whose aim is to 
        increase the 
        problem solving ability in children.
      </p>
    </div>
   </div>
   <div className="home3" id="about">
   <div>
    <h1>Who we are?</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quaerat id vitae nisi, cumque voluptate deleniti eligendi reprehenderit non ex neque laudantium at iusto minus qui est incidunt soluta sint pariatur! Ipsam consequuntur aspernatur provident beatae. Nobis officia vel eligendi soluta sint in beatae voluptatibus quas dolores facere, tenetur explicabo illum reiciendis laborum placeat, corporis ullam enim, similique fugiat cupiditate quia eos repellendus consequatur? Odit eos cum libero voluptatibus facere placeat id, assumenda tenetur minima repellendus autem laudantium nostrum aut fuga totam eligendi cupiditate, ipsum corporis omnis aperiam quas ex, blanditiis quaerat. Nobis accusantium quisquam nisi ratione sunt nam aut?</p>
   </div>
   </div>

   <div className="home4" id="brands">
<div>
  <h1>Brands</h1>
  <article>
    <div 
    style={{
      animationDelay:"0.3s",
    }}
    >
      <AiFillGoogleCircle/>
      <p>Google</p>
    </div>

    <div style={{
      animationDelay:"05s",
    }}>
      <AiFillAmazonCircle/>
      <p>Amazon</p>
    </div>
    <div style={{
      animationDelay:"0.7s",
    }}>
      <AiFillYoutube/>
      <p>Youtube</p>
    </div>
    <div style={{
      animationDelay:"1s",
    }}
    >
      <AiFillInstagram/>
      <p>Instagram</p>

    </div>
  </article>
</div>
   </div>
   </>
  );
};

export default Home
