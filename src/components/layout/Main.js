import React from 'react'
import Aside from '../Aside'

const Main = () => {
  return (
    <main>
      <Aside />
      
      <section>
        <div>
          <img alt="Platillo" />
          {/* Card */}
          <div>
            <div>
              <h3>Pasteleria San Antonio</h3>
              <div>
                <i>Star</i>
                <p>4.8</p>
              </div>
            </div>
            <p>Postres Sandwiches</p>
            <p><i>Reloj</i>40 minutos - Envio S/ 12.2</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
