const users = [
  {
    id: 1,
    userName: 'webferrol'
  },
  {
    id: 2,
    userName: 'wptavern'
  },
  {
    id: 3,
    userName: 'elementor'
  },
  {
    id: 4,
    userName: 'juan'
  }
]

const URL = 'https://unavatar.io/'

const nombre = "Xurxo"

export function TwitterApp () {
  return (
    <main>
      <h1>TwitterApp de {nombre}</h1>

      <div className='card-twitter'>
        <h2>Tal vez te guste</h2>

        <div className='max-w-md'>

         { 
          users.map(function (item) {
            return (
              <div className='bg-slate-300 hover:bg-slate-400 p-1 grid grid-cols-3 justify-center items-center gap-2' key={item.id}>
                <img
                  className="w-full rounded-full"
                  src={URL + item.userName}
                  alt={`@${item.userName}`}
                />
                <div className="flex flex-col">
                  <strong>{`@${item.userName}`}</strong>
                  <span>{`@${item.userName}`}</span>
                </div>
                <button>Seguir</button>
              </div>
            )
          })
         }


         


        </div>
      </div>

    </main>
  )
}
