const Header = (props)=>{
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {

  return (

    <>
      <p>
        {props.parts} {props.exercises}
      </p>
    </>

  )

}


const Content = (props)=>{
  return (
    <>
     <Part parts = {props.content.parts[0].name} exercises =  {props.content.parts[0].exercises} />
     <Part parts = {props.content.parts[1].name} exercises =  {props.content.parts[1].exercises} />
     <Part parts = {props.content.parts[2].name} exercises =  {props.content.parts[2].exercises} />
    </>
  )
}


const Total = (props) => {
  console.log(props);
  
  return (
    <>
     <p>Number of exercises {props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}</p>
    </>
  )
}

const App = ()=>{

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course = {course.name} />
      <Content content = {course} />
      <Total total = {course} />
    </div>
  )
}

export default App;