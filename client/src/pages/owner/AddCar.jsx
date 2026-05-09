import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../AppContext/AppContext'
import toast from 'react-hot-toast'

function AddCar() {
  const { axios, currency } = useAppContext()
  // const currency = import.meta.env.VITE_CURRENCY
  const [image, setImage] = useState(null)
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: 0,
    pricePerDay: 0,
    category: '',
    transmission: "",
    fuel_type: '',
    Seating_capacity: 0,
    location: '',
    description: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (isLoading) return null

    setIsLoading(true)
    try {
      const formData = new FormData()
      formData.append('image', image)
      formData.append('carData', JSON.stringify(car))
      const { data } = await axios.post("/api/owner/add-car", formData)
      if (data.success) {
        toast.success(data.message)
        setImage(null)
        setCar({
          brand: '',
          model: '',
          year: 0,
          pricePerDay: 0,
          category: '',
          transmission: "",
          feul_type: '',
          seating_capacity: 0,
          location: '',
          description: "",
        })
      }else{
        toast.error(data.message)
      }
    } catch (error) {
toast.error(error.message)
    }finally{
      setIsLoading(false)
    }
  }

  return (

    <div className='px-4 py-10 md:px-10 flex-1'>

      <Title title={'Add New Car '} subTitle={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ullam voluptate, dolorem excepturi ducimus, odio eius beatae '} />

      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>

        {/* car image */}
        <div className='flex items-center gap-2 w-full'>
          <label htmlFor="car-image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className=' h-14 rounded cursor-pointer' />
            <input type="file" id="car-image" accept='image/*' hidden onChange={e => setImage(e.target.files[0])} />
          </label>
          <p className=' text-sm text-gray-500'>Upload a picture of your car</p>
        </div>

        {/* card brand and model */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
            <label >Brand</label>
            <input type="text" placeholder='e.g. BMW Meredu.Audi..' required className='px-3 py-2 top-1 border border-gray-400 rounded-md outline-none' value={car.brand} onChange={e => setCar({ ...car, brand: e.target.value })} />
          </div>

          <div className='flex flex-col w-full'>
            <label >Model</label>
            <input type="text" placeholder='e.g. BMW Meredu.Amodel..' required className='px-3 py-2 top-1 border border-gray-400 rounded-md outline-none' value={car.model} onChange={e => setCar({ ...car, model: e.target.value })} />
          </div>
        </div>

        {/* car year price category */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label >Year</label>
            <input type="number" placeholder='2025' required className='px-3 py-2 top-1 border border-gray-400 rounded-md outline-none' value={car.year} onChange={e => setCar({ ...car, year: e.target.value })} />
          </div>

          <div className='flex flex-col w-full'>
            <label >Daily price ({currency})</label>
            <input type="number" placeholder='100' required className='px-3 py-2 top-1 border border-gray-400 rounded-md outline-none' value={car.pricePerDay} onChange={e => setCar({ ...car, pricePerDay: e.target.value })} />
          </div>

          <div className='flex flex-col w-full'>
            <label >Category </label>
            <select onChange={e => setCar({ ...car, category: e.target.value })} value={car.category} className='px-3 py-2 mt-1 border border-blue-400/10 rounded-md outline-none'>
              <option value="">Select a category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
            </select>
          </div>

        </div>

        {/* car transmission ,Fuel type seating capacity */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label >Transmission </label>
            <select onChange={e => setCar({ ...car, transmission: e.target.value })} value={car.transmission} className='px-3 py-2 mt-1 border border-blue-400/10 rounded-md outline-none'>
              <option value="">Select a Transmission</option>
              <option value="Transmission">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>

          <div className='flex flex-col w-full'>
            <label >Fuel_type </label>
            <select onChange={e => setCar({ ...car, feul_type: e.target.value })} value={car.feul_type} className='px-3 py-2 mt-1 border border-blue-400/10 rounded-md outline-none'>
              <option value="">Select a Fuel_type</option>
              <option value="Gas">Gas</option>
              <option value="Diesel">Diesel</option>
              <option value="Petrol">Petrol</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className='flex flex-col w-full'>
            <label >Seating_capacity</label>
            <input type="number" placeholder='4' required className='px-3 py-2 top-1 border border-gray-400 rounded-md outline-none' value={car.seating_capacity} onChange={e => setCar({ ...car, seating_capacity: e.target.value })} />
          </div>
        </div>

        {/* car location */}
        <div className='flex flex-col w-full'>
          <label >Location </label>
          <select onChange={e => setCar({ ...car, location: e.target.value })} value={car.location} className='px-3 py-2 mt-1 border border-blue-400/10 rounded-md outline-none'>
            <option value="">Select a Location</option>
            <option value="New Yourk">New Yourk</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Houston">Houston</option>
            <option value="Chicage">Chicage</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        {/* car Description */}
        <div className='flex flex-col w-full'>
          <label >Description({currency})</label>
          <textarea rows={5} placeholder='Write Description' required className='px-3 py-2 top-1 border border-gray-400 rounded-md outline-none' value={car.description} onChange={e => setCar({ ...car, description: e.target.value })}></textarea>
        </div>

        <button className='flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-md font-medium w-max cursor-pointer'>
          <img src={assets.tick_icon} alt="" />
        {isLoading?"Listing...":"List Your Car"}
        </button>
      </form>
    </div>
  )
}

export default AddCar
