import React from 'react'

const App = () => {
  const relativeList = ["tejas", "manjiri", "chinmay", "kajal", "shital", "rupali", "sachin"]

  return (
    <div id="main">
               {/* Do not remove the main div */}
<ol>
        {
          relativeList.map((relativeListItem1,index)  => 
            <li key={relativeListItem1}>{relativeListItem1}</li>
          )
        }
      </ol>

    </div>
  )
}

export default App
