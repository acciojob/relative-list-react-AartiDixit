import React from 'react'

const App = () => {
  const relativeList = ["tejas", "manjiri", "chinmay", "kajal", "shital", "rupali", "sachin"]

  return (
    <div id="main">
               {/* Do not remove the main div */}
<ol>
        {
          relativeList.map((relativeListItem,index)  => 
            <li key={relativeListItem}> {relativeListItem}</li>
          )
        }
      </ol>

    </div>
  )
}

export default App
