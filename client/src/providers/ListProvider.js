import React, { useState } from "react";
import axios from "axios";

export const ListContext = React.createContext();
export const ListConsumer = ListContext.Consumer;

const ListProvider = ({ children }) => {
    const [lists, setLists] = useState([]);

    const getAllLists = (userId) => {
        axios.get(`/api/users/${userId}/lists`)
            .then( res => setLists(res.data) )
            .catch( err => console.log(err) )
    }

    
}