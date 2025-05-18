import React from 'react';

function Home() {
  return (
    <div className="bg-gray-950 text-white px-6 py-12 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl text-center space-y-6">

        <h1 className="text-4xl md:text-5xl font-bold text-fuchsia-500 mb-4">
          Test Your UFC Knowledge
        </h1>

        <p className="text-lg text-gray-300">
          Dive into various questions about the biggest MMA organization in the world.
          You'll find questions for all types of UFC fans — from the casual viewer to the hardcore fight aficionado.
        </p>

        <p className="text-lg text-gray-300">
          This quiz game brings you closer to the Octagon by challenging your knowledge on iconic fighters, title fights,
          historic events, and unforgettable moments that shaped the UFC legacy. Whether you're reminiscing about the glory
          days of Anderson Silva or staying sharp on current champions like Islam Makhachev, there’s something here for every fan.
        </p>

        <p className="text-lg text-gray-300">
          Our game features multiple difficulty levels, dynamic question sets, and a leaderboard to see how you rank against
          other fight fans. We update our questions regularly, so the challenge never ends.
        </p>

        <p className="text-lg text-gray-300">
          Ready to test your skills? Step into the virtual cage and start your journey toward becoming the undisputed UFC trivia champion.
        </p>
        
      </div>
    </div>
  );
}

export default Home;
