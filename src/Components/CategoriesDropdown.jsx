import React, {useState, useEffect} from 'react'
import { Categories } from '../Services/CategoryApi/Categories'

const CategoriesDropdown = () => {

    const [categories, setCategories] = useState("")

    const getCategories = async () => {
        const data = await Categories()
        setCategories(data)
    }

    useEffect(() => {
        getCategories()
        console.log(categories);
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default CategoriesDropdown
