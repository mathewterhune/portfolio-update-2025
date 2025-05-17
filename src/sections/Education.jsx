const Education = () => {
    return (
      <div className="w-full p-10">
        <h1 className="text-4xl text-gray-700 font-bold">Education</h1>

        <div className="bg-white shadow-lg rounded-2xl mt-5 p-5">
          <div className="pl-5">
            <div className="flex justify-between">
              <h1 className="text-xl">University of Victoria</h1>
              <p className="font-light">Victoria,BC</p>
            </div>
            <div className="flex justify-between">
              <h1 className="font-light">
                Bachelors of Science, Major in Computer Science
              </h1>
              <p className="font-light">2021-2025</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Education;