import axios from 'axios'
import { useEffect, useState } from 'react'
import Loading from './Loading'
import { saveAs } from 'file-saver';
import { toast } from 'react-hot-toast'

// import { CiSaveDown1 } from "react-icons/ci";
const Home = () => {
  const API_KEY = 'PXbQVokloaFXtfcIQxLapzxdRqXi0CNwG8h6g2Qzd6ZEOXfZGsj6MYKN';
  const [allPhotos, setAllPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('Photography')
  const [dawnloding, setDawnloding] = useState(false)

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`,

          {
            headers: {
              Authorization: API_KEY
            }
          }
        )
        // console.log(response.data.photos);
        setAllPhotos(response.data.photos)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }

    }

    fetchApi()
  }, [search])

  const downloadImage = (imageUrl, photographer) => {
    setDawnloding(true)
    try {
      const filename = photographer + '.jpg';
      saveAs(imageUrl, filename)
      toast.success('Downloading image')

    } catch (error) {
      console.log(error);
    } finally {
      setDawnloding(false)
    }
  }
  return (
    <>
      <div className="search_container" >
        <h2>Pexels app</h2>
        <input type="text" placeholder='Search'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="category" id='top'>
        <button onClick={() => setSearch('Travel')}>Travel</button>
        <button onClick={() => setSearch('Nature')}>Nature</button>
        <button onClick={() => setSearch('Anime girl')}>Anime Girl</button>
        <button onClick={() => setSearch('Photography')}>Photography</button>
        <button onClick={() => setSearch('People')}>People</button>
        <button onClick={() => setSearch('Sports')}>Sports</button>
        <button onClick={() => setSearch('Animal')}>Animal</button>
        <button onClick={() => setSearch('Girl')}>Girl</button>
        <button onClick={() => setSearch('Love')}>Love</button>
        <button onClick={() => setSearch('relationship')}>Relationship</button>
        <button onClick={() => setSearch('Earth Hour')}>Earth Hour</button>
        <button onClick={() => setSearch('Cat')}>Cat</button>

      </div>

      {/* all images  */}
      <div className='home'>
        <div className="home_content">
          {
            loading ? (
              <Loading />

            ) : (

              allPhotos.map((data) => (
                <div key={data.is} className='allData_show'>
                  <div className="photos">
                    <img src={data.src.large} alt={data.photographer} />

                    <div>
                      <p>{data.alt}</p>
                      <button onClick={() => downloadImage(data.src.original, data.photographer)}>
                        {dawnloding ? <di>Dawnloding...</di> : "Dawnload"}
                      </button>

                      {/* <CiSaveDown1
                        onClick={() => downloadImage(data.src.original, data.photographer)}
                        className='dawnload'

                      /> */}
                    </div>
                  </div>

                </div>
              )
              ))
          }
        </div>
      </div>
      <div className="top_div">
        {
          allPhotos.length != 0 && (
            <button><a href="#top">GO TO TOP</a></button>

          )
        }

      </div>
    </>
  )
}

export default Home