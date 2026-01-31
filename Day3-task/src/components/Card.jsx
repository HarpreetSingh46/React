
const Card = () => {
  const jobs = [
  {
    company: "Google",
    title: "Graphic Designer",
    jobType: "Part-Time",
    schedule: "Flexible Schedule",
    salary: "$150k–220k",
    location: "Mountain View, CA",
    applyText: "Apply now"
  },
  {
    company: "Meta",
    title: "UI Designer",
    jobType: "Full-Time",
    schedule: "Remote",
    salary: "$130k–180k",
    location: "Menlo Park, CA",
    applyText: "Apply now"
  },
  {
    company: "Amazon",
    title: "Visual Designer",
    jobType: "Contract",
    schedule: "Fixed Schedule",
    salary: "$90k–140k",
    location: "Seattle, WA",
    applyText: "Apply now"
  },
  {
    company: "Microsoft",
    title: "Product Designer",
    jobType: "Full-Time",
    schedule: "Hybrid",
    salary: "$120k–170k",
    location: "Redmond, WA",
    applyText: "Apply now"
  },
  {
    company: "Apple",
    title: "Creative Designer",
    jobType: "Part-Time",
    schedule: "On-site",
    salary: "$110k–160k",
    location: "Cupertino, CA",
    applyText: "Apply now"
  },
  {
    company: "Netflix",
    title: "Brand Designer",
    jobType: "Full-Time",
    schedule: "Flexible Schedule",
    salary: "$140k–200k",
    location: "Los Gatos, CA",
    applyText: "Apply now"
  },
  {
    company: "Adobe",
    title: "UX Designer",
    jobType: "Full-Time",
    schedule: "Remote",
    salary: "$125k–175k",
    location: "San Jose, CA",
    applyText: "Apply now"
  },
  {
    company: "Spotify",
    title: "Motion Designer",
    jobType: "Contract",
    schedule: "Remote",
    salary: "$100k–150k",
    location: "New York, NY",
    applyText: "Apply now"
  },
  {
    company: "Airbnb",
    title: "Interaction Designer",
    jobType: "Full-Time",
    schedule: "Hybrid",
    salary: "$135k–190k",
    location: "San Francisco, CA",
    applyText: "Apply now"
  },
  {
    company: "Tesla",
    title: "Graphic Designer",
    jobType: "Full-Time",
    schedule: "On-site",
    salary: "$115k–165k",
    location: "Austin, TX",
    applyText: "Apply now"
  }
];
  
  return (
    
    
   <div className="flexbox">
      {jobs.map((elem, index) => (
        <div className="card" key={index}>
          
          <div className="super">
            <div className="img">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/054/848/721/small/google-icon-logo-free-png.png"
                alt={elem.company}
              />
            </div>
          </div>

          <div className="hero">
            <h5>{elem.company}</h5>
            <h6>{elem.title}</h6>

            <div className="btn">
              <button>{elem.jobType}</button>
              <button>{elem.schedule}</button>
            </div>
          </div>

          <div className="footer">
            <div>
              <h1>{elem.salary}</h1>
              <p className="p">{elem.location}</p>
            </div>
            <button>{elem.applyText}</button>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Card
