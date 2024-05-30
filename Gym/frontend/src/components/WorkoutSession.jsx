import React from 'react'

const WorkoutSession = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Experience the best workout sessions designed by top trainers to help you achieve your fitness goals. Whether you're a beginner or a seasoned athlete, our sessions cater to all levels, ensuring a comprehensive and challenging workout every time.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Burn calories and build endurance with our HIIT sessions, designed to maximize your workout in the shortest time possible.
        </p>
        <div className="bootcamps">
          <div>
            <h4>High-Intensity Interval Training (HIIT)</h4>
            <p>
            Burn calories and build endurance with our HIIT sessions, designed to maximize your workout in the shortest time possible.
            </p>
          </div>
          <div>
            <h4>Strength and Conditioning</h4>
            <p>
            Focus on building muscle and increasing strength with our targeted strength and conditioning bootcamps, perfect for all fitness levels.
            </p>
          </div>
          <div>
            <h4>Yoga and flexibility</h4>
            <p>
            Enhance your flexibility and reduce stress with our yoga sessions, suitable for everyone from beginners to advanced practitioners.
            </p>
          </div>
          <div>
            <h4>Functional Training</h4>
            <p>
            Improve your everyday movements and overall fitness with our functional training bootcamps, designed to increase strength, agility, and balance.
            </p>
          </div>
          <div>
            <h4>Cardio Blast</h4>
            <p>
            Boost your cardiovascular health and stamina with our Cardio Blast bootcamps, featuring a variety of high-energy exercises to keep your heart pumping.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkoutSession