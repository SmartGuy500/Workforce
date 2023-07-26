import data from "../../job-data.json"
import { useState } from "react"

const Joblist = ()=>{
    const [value, setValue] = useState("")
    const handleChange = (e)=>{
        setValue(e.target.value)
    }
    return (
        <div>
            <input type="text" className="searchBar" onChange={handleChange}/>
            {
                data.filter((job)=>{
                    if(!value || job.title.toLowerCase().includes(value.toLowerCase()) || job.location.toLowerCase().includes(value.toLowerCase())){
                        return job
                    }
                }).map((job)=>{
                    return(
                        <div key={job.id}>
                            <h1>{job.title}</h1>
                            <h2>{job.location}</h2>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Joblist