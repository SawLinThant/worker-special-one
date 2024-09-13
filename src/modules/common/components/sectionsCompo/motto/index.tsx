import React from 'react'

const Motto = () => {
  return (
    <div>
          <div className="w-full h-full">
        <div className="w-full h-full grid lg:grid-cols-2 md:grid-cols-1 gap-4">
          <div className="w-full lg:h-[50vh] md:h-[30vh] rounded-lg overflow-hidden">
            <img className="w-full h-full" src="images/vission.jpg" alt="" />
          </div>
          <div className="w-full lg:h-full md:min-h-[25vh] p-4 flex flex-col gap-3 bg-gray-200 rounded-lg">
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quibusdam ipsa corrupti excepturi voluptate eaque eveniet odit,
              distinctio est voluptatem! Tempore cum asperiores maiores neque
              quae, illo amet quis quasi!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Motto
