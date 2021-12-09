import React from "react"

const ListTemplate = ({ data }) => {
    console.log(data);
    return(
        <div>
            {data}
        </div>
    );
};

export default ListTemplate;