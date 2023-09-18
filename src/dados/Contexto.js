import React from "react";

export const data = {
    user: "Bernardo",
    number: 123456
}

const DataContext = React.createContext(data)
export default DataContext