import React, { useEffect, useState } from 'react'
import ky from 'ky'
import Marquee from 'react-marquee-master'
import '../styles/Lists.scss'

const Lists = () => {
  const [status, setStatus] = useState('idle')
  const [hasError, setErrors] = useState(false)
  const [responseData, setResponseData] = useState(null)

  const fetchData = async () => {
    setErrors(false)
    setStatus('fetching')
    await ky('https://api.rockwood.test/api/topplayerlist').json()
      .then((response) => {
        console.log(response?.length);
        if (response?.length) {
          setResponseData(response)
          console.log('setResponseData: ', response)
        }
        setStatus('fetched')
      })
      .catch((error) => {
        setStatus('failed')
        setErrors(error)
        console.error(error)
      })
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div height="300px" className="player-left">
        <p className="listHeading">Menu Heading</p>
        {responseData?.length ? (
          <Marquee  marqueeItems={responseData} />
        ) : (
          <div>loading...</div>
        )}
      </div>
      ,
      <div height="300px" className="player-right">
        <p className="listHeading">Menu Heading</p>
        {responseData?.length ? (
          <Marquee  marqueeItems={responseData} />
        ) : (
          <div>loading...</div>
        )}
      </div>
    </>
  )
}
export default Lists;