import { useState, useEffect } from "react"
import ContactUl from "./ContactUl"

function App() {
  const [contactsList, setContactsList] = useState([])

  const API_URL_USERS = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch(API_URL_USERS)
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const json = await response.json()
        setContactsList(json)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchDataFromAPI()
  }, [])

  return (
    <div>
      <div>
        <h1 className="header">Contact List</h1>
      </div>
      <div>
        <ContactUl contactsList={contactsList} />
      </div>
    </div>
  )
}

export default App
