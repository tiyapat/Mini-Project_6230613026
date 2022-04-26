import Head from 'next/head'
import Web3 from 'web3'
import 'bulma/css/bulma.css'
import styles from '../styles/VendingMachine.module.css'

const VendingMachine = () => {
    let web3
    //window.ethereum
    const connectWalletHandler = () => {
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
            window.ethereum.request({method: "eth_requestAccounts"})
            web3  = new Web3(window.ethereum)
        } else {
            //meta mast not installed
            console.log("Please install MetaMask")
        }
        
    }
    return(
        <div className={styles.main}>
            <Head>
                <title>VendingMachine App</title>
                <meta name="description" content="A blockchain vending app" />
            </Head>
            <nav classNAme="navbar mt-4 mb-4">
                <div className="container">
                    <div className="navbar-brand">
                        <h1>Vending Machine</h1>
                    </div>
                    <div className="navbar-end">
                        <button onClick={connectWalletHandler} className="button is primary">Connect Wallet</button>
                    </div>
                </div>
            </nav>
            <section>
                <div className="container">
                    <p>placeholder text</p>
                </div>
            </section>
        </div>
    )
}

export default VendingMachine