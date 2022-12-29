// client/src/App.js


import React from "react";
import blockchainImg from './../../images/what_is_blockchain.jpg'
import ethImg from './../../images/why_ethereum.jpg'
function About() {


  return (
    <div id="about">
    <div className="about-content">
       <h1>WHAT IS ETHEREUM?</h1>
       <img className="left" src={blockchainImg} alt=""/>
       <p>
          The Ethereum network is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third party interference. These apps run on a custom built blockchain, an enormously powerful shared global infrastructure that can move value around and represent ownership.
          <br/>
          Want to know more? Check out the official <a target ="_blank" href="https://ethereum.org/en/">website</a>
       </p>
    </div>
    <div className="spacerXL"></div>
    <div className="about-content">
       <h1>WHY ETHEREUM?</h1>
       <img className="right" src={ethImg} alt=""/>
       <p>
          Ethereum's blockchain technology is <b>decentralized</b> and open source; meaning the code is available for anyone to see and contributes to it's growing ecosystem.
          <br/>
          Smart contracts are not just about financial transactions like paying for a flight ticket or receiving your salary; they can also be used for co-signing a <b>loan or renting out your house</b> through an escrow service.
       </p>
    </div>
 </div>
        


  );
}

export default About;