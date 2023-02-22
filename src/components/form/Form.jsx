import React, { useState} from 'react'
import { BsSearch } from 'react-icons/bs'

const Form = () => {

    const [formData, setFormData] = useState (
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            
        
        }
    )

    function handleChange(event) {
        const {name,value,type,checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:type=== "checkbox" ? checked:value
            }
        })
    }

    function handleSubmit (event) {
        event.preventDefault()
    }
  return (
    <div className='flex flex-row flex-1 items-center'>
        <form onSubmit={handleSubmit} className='py-2 px-4'>

            <input 
                type="text"
                placeholder="Search"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                className='p-2 w-56 rounded-lg border border-none'

            />

        </form>

        <BsSearch className='text-white cursor-pointer' />

        
    </div>
  )
}

export default Form