import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import SubscriptionPlans from '../components/SubscriptionPlans'
import RingSizes from '../components/RingSizes'
import SubmitButton from '../components/SubmitButton'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <script src="https://js.stripe.com/v3" key="stripelib" />
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Jewlry subs</h1>

      <RingSizes/>
      <SubscriptionPlans/>
      <SubmitButton/>
 
    </div>

    <style jsx>{`
      body{
        font-family: 'Roboto'
      }
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
