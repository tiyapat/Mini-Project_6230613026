import Head from 'next/head'
import 'bulma/css/bulma.css'
import style from '../styles/VendingMachine.module.css'

export default function VendingMachine(){
    return (
        <div>
            <Head>
                <title>VendingMachine App </title>
                <meta name="description" content="A blockchain vending machine app" />
            </Head>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <h1> Vending Machine </h1>
                    </div>
                    <div className="navbar-end">
                        <button className="button is-primary">Connect Wallet</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}