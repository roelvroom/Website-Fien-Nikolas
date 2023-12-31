import BgFoto from '../assets/FotoResStoel.jpg'

const About = () => {
  return (
    <div
      id='About'
      className='pt-52 relative mt-56'
      style={{
        minHeight: '50vh',
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BgFoto}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      }}
    >
      <h1 className='text-7xl text-center text-white absolute top-10 left-1/2 transform -translate-x-1/2 '>
        <span className='text-TextDark '>About</span> <br /> us
      </h1>
      <div className='max-w-4xl mx-auto flex flex-col items-center pb-24 gap-24 mt-12'>
        <div className='bg-white opacity-80 shadow-xl border rounded-xl p-6 w-3/4 mb-4 mr-96'>
          <p>
            Hēdonē is de oud-Griekse godin waar het hedonisme zijn naam aan te danken heeft.
            Centraal staan: genot, plezier en Bourgondisch leven. Daar weten chef Davine Croughs en
            sommelier Nicholas Neve intussen alles van. Zij werkte vijf jaar bij ’t Zilte in de
            keuken, hij was restaurantmanager en had in bijberoep een wijnhandel onder de naam The
            Hedonist Experience. Hun restaurant moet in het voorjaar 2024 opengaan. “Het wordt
            kleinschalig,” vertelt Nicholas, “gewoon wij twee, eventueel aangevuld met een afwasser
            op drukke momenten. Uit onze ervaring in de zaken waar we gewerkt hebben, beseffen we
            dat personeel vinden een grote uitdaging is.
          </p>
        </div>
        <div className='bg-white opacity-80 shadow-xl border rounded-xl p-6 w-3/4 mb-4 ml-96'>
          <p id='test'>
            Met Hēdonē is voor Davine de cirkel rond want in het pand waar hun restaurant komt,
            begon ze ooit haar carrière in de horeca. Nicholas licht hun beslissing voor een eigen
            zaak toe: “Het principe van een restaurant runnen, deden we al, behalve dan de facturen
            betalen. We vroegen ons af ‘waarom doen we het niet voor onszelf?’.” Je eigen weg volgen
            is ook waar Davine van houdt in de keuken: “Chef zijn betekent mijn eigen ding kunnen
            doen, me kunnen uitleven, een stukje creativiteit kwijt kunnen. Iets klaarmaken waarvan
            je niet wist dat je het kon en dat dan waarmaken op een bord... dat vind ik een heel
            mooi aspect van koken.”
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
