import React from 'react';
import ufc from '../image/ufc.jpg';

function About() {
  return (
    <div>
      <h1 className="mt-10 text-center text-3xl md:text-4xl font-serif text-white font-semibold mb-4">About Us</h1>
      <p className="text-center text-fuchsia-400 text-light italic mb-10">Where fans become champions of trivia</p>

      <div className=" rounded-3xl border-red-800 border-2 p-5 w-220 flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="md:w-1/2 w-full text-fuchsia-300 font-mono text-center md:text-left">
          <p className="text-base md:text-lg leading-relaxed">
            Welcome to the ultimate UFC Quiz Game – the perfect destination for fight fans to test their knowledge of the world’s premier mixed martial arts organization! Whether you're a casual viewer or a hardcore UFC enthusiast, this game challenges you with a wide range of questions covering legendary fighters, iconic matches, championship histories, and unforgettable moments inside the Octagon. With each quiz, sharpen your memory, compete with friends, and climb the leaderboard to prove you're the true UFC trivia champion. Step into the virtual cage and show off your MMA knowledge today!
          </p>

          {/* Optional: CTA Button */}
          <button className="mt-6 px-6 py-2 bg-fuchsia-500 text-white rounded-full hover:bg-fuchsia-700 transition">
            Start Quiz
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 w-40 h-40 md:h-60 md:w-60">
          <img
            src={ufc}
            alt="UFC Logo"
            className="rounded-full w-full h-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
