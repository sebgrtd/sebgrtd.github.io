import React from 'react'
import {Carousel, Container, Col} from 'react-bootstrap'
import './HeroSlider.css'



const HeroSlider = () => {
    return (
        <>
            <Carousel className='carousel'>
                <Carousel.Item interval={100000}>
                <Container className="slider-container p-5 bg-dark text-center d-flex flex-column justify-content-evenly">
                        <Container>
                            <Container className='text-primary' >
                                <h1 className='d-md-inline m-3 m-md-5' style={{fontWeight: 700, fontSize: '35px' }}>Le Back-End</h1>
                                <img className='d-md-inline' src={process.env.PUBLIC_URL + '/img/server.svg'}></img>
                            </Container>
                            <Container className='d-flex flex-column flex-md-row justify-content-evenly text-start text-light mt-5'>
                                <div className='overflow-auto'>
                                    <div className='text-light'>
                                        <h2 style={{fontWeight: 600, fontSize: '22px' }}>Pourquoi faire?</h2>
                                        <p style={{fontWeight: 300, fontSize: '16px' }}>Je me suis jusque là principalement intéressé à la partie visible dite « front end » d’une application web. Hors la partie cachée de l’utilisateur lorsque l’on visite un site internet, le “back end” m’intéresse de plus en plus. Je compte d’ailleurs essayer d’implémenter le fait que mon application web reçoive certaines données d’une base de données pour les utiliser, comme par exemple le nombre de cartes, leur contenu etc..</p>
                                    </div>
                                    <div className='text-light'>
                                        <h2 style={{fontWeight: 700, fontSize: '22px' }}>Comment ça avance?</h2>
                                        <p style={{fontWeight: 300, fontSize: '16px' }}>j’ai vaguement pu me servir d’API et de google Firebase lorsque je regardais mes cours sur React. Je compte commencer à me former plus en profondeur lorsque je trouverai que mon front end sera terminé.</p>
                                    </div>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/img/undraw_servers.svg'} className='ml-5 img-fluid d-none d-lg-block'></img>
                            </Container>
                        </Container>
                    </Container>
                </Carousel.Item>
                <Carousel.Item interval={100000}>
                    <Container className="slider-container p-5 bg-dark text-center d-flex flex-column justify-content-evenly">
                        <Container>
                            <Container className='text-primary' >
                                <h1 className='d-md-inline m-3 m-md-5' style={{fontWeight: 700, fontSize: '35px' }}>la Crypto-monnaie</h1>
                                <img className='d-md-inline' src={process.env.PUBLIC_URL + '/img/currency-bitcoin.svg'}></img>
                            </Container>
                            <Container className='d-flex flex-column flex-md-row justify-content-evenly text-start text-light mt-5'>
                                <div className='overflow-auto'>
                                    <div className='text-light'>
                                        <h2 style={{fontWeight: 600, fontSize: '22px' }}>Pourquoi faire?</h2>
                                        <p style={{fontWeight: 300, fontSize: '16px' }}>La cryptomonnaie est selon moi une valeur sûre pour l’avenir, indépendante des banques du gouvernement les jetons ne peuvent pas nous être préemptés par celles-ci, ils nous appartiennent entièrement. En effet accorder sa confiance à la cryptomonnaie c’est accorder sa confiance à l’algorithme open source sur lequel reposent nos fonds, et non accorder sa confiance à un tiers, ce qui vient constituer un pas de plus vers la décentralisation et les libertés individuelles.</p>
                                    </div>
                                    <div className='text-light'>
                                        <h2 style={{fontWeight: 700, fontSize: '22px' }}>Comment ça avance?</h2>
                                        <p style={{fontWeight: 300, fontSize: '16px' }}>Pour l’instant je me contente de me renseigner et de me tenir à jour vis à vis de l’actualité, je m’appuie principalement sur la chaîne YouTube whiteboard crypto qui explique très bien les projets liés à la blockchain et l’économie liée à des tokens. Je pense commencer à y investir de manière réfléchie à mes 18 ans.</p>
                                    </div>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/img/undraw_bitcoin.svg'} className='img-fluid d-none d-lg-block'></img>
                            </Container>
                        </Container>
                    </Container>
                </Carousel.Item>
                <Carousel.Item interval={100000}>
                    <Container className="slider-container p-5 bg-dark text-center d-flex flex-column justify-content-evenly">
                        <Container>
                            <Container className='text-primary' >
                                <h1 className='d-md-inline m-3 m-md-5' style={{fontWeight: 700, fontSize: '35px' }}>les DApps</h1>
                                <img className='d-md-inline' src={process.env.PUBLIC_URL + '/img/Solidity-Logo.svg'}></img>
                            </Container>
                            <Container className='d-flex flex-column flex-md-row justify-content-evenly text-start text-light mt-5 gap-4'>
                                <div className='overflow-auto'>
                                    <div className='text-light'>
                                        <h2 style={{fontWeight: 600, fontSize: '22px' }}>Pourquoi faire?</h2>
                                        <p style={{fontWeight: 300, fontSize: '16px' }}>Les DApps (decentralized applications) sont des applications dont le fonctionnement repose sur la blockchain et non sur des serveurs centralisés(comme youtube par exemple). Elles garantissent alors le respect de la vie privée de l’utilisateur qui n’a par exemple pas besoin d’être traqué par des cookies à des fins publicitaires pour utiliser le service. Une grande partie des DApps reposent sur la blockchain Ethereum et utilisent ce que l’on appelle des ‘smart contracts’ pour toute la logique liée, par exemple si on faisait une DApp ‘distributeur automatique’ on utiliserait des smart contracts pour que l’on reçoive un certain produit que si l’on donne un certain montant.</p>
                                    </div>
                                    <div className='text-light'>
                                        <h2 style={{fontWeight: 700, fontSize: '22px' }}>Comment ça avance?</h2>
                                        <p style={{fontWeight: 300, fontSize: '16px' }}>Pour l’instant tout reste très flou pour moi, je pense que ce sera cependant la prochaine étape une fois le back end bien maitrisé. </p>
                                    </div>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/img/eth.svg'} className='img-fluid d-none d-lg-block'></img>
                            </Container>
                        </Container>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HeroSlider