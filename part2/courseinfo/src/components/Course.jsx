
const Header=({course})=> {
    return <h2>{course.name}</h2>
}

const Part=({part})=> {
    return <li>{part.name} {part.exercises}</li>
}

const Course= ({course})=>{
    const total= course.parts.reduce((sum,p)=> sum+p.exercises,0)

return(
    <div>
    <Header course={course}/> 
    <ul>
        {course.parts.map(part=>
            <Part key={part.id} part={part}/>
        )}
    </ul>
    <h3>Total of {total} exercises</h3>
    </div>
)
}

export default Course
