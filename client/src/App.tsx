import { useEffect, useState} from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import './App.css'


const QUERY_BOARDS = gql`
  query Query {
    boards {
      id
      title
      description
      path
    }
  } 
`

function Trial(): JSX.Element {
  const { loading, error, data } = 
  useQuery(QUERY_BOARDS)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return data.boards.map(({ id, title, description, path }: 
    {id: string, title: string, description: string, path: string}) => (
    <div key={id}>
      <p>{title}</p>
      <p>{description}</p>
      <p>{path}</p>
    </div>
  ));
}

function App(): JSX.Element {

  return (
    <div className="App">
      <p>Hello World</p>
      <Trial />
    </div>
  )
}

export default App
