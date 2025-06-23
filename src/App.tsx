import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <div className='text-gray-900 dark:text-white transition-colors duration-700'>
      {/* Header */}
      <header className='fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-4 z-10'>
        <h1 className='text-2xl font-bold'>caleb.beer</h1>
        <button
          onClick={toggleDarkMode}
          className='bg-white dark:bg-gray-800 border px-4 py-2 rounded-full shadow'>
            {darkMode ? '☀️' : '🌙'}
          </button>
      </header>

      {/* Begin Sections */}
      <section className='h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-100
      via-sky-200 to-white dark:from-gray-900 dark:via-purple-800 dark:to-gray-700 transition-all duration-700'>
        <h2 className='text-5xl font-bold mb-4'>Hi! I'm Caleb :)</h2>
        <p className='text-xl max-w-xl text-center'>
          A junior developer passionate about clean design, interactive interfaces, and building things that matter.
        </p>
      </section>

      <section className='h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-green-100
      via-emerald-200 to-white dark:from-green-900 dark:via-emerald-800 dark:to-gray-700 transition-all duration-700'>
        <h3 className='text-5xl font-semibold mb-4'>About Me</h3>
        <p className='text-xl max-w-xl text-center'>
          I am a junior developer, yearning to learn the most I can to become the best I can be. I have a hunger to create 
          meaningful solutions and intuitive applications. My mother always told me that "if you do something you love,
          you'll never work a day in your life". Like everyone, I wish to no longer work.
        </p>
      </section>

      <section className='h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-purple-100
      via-pink-200 to-white dark:from-purple-900 dark:via-pink-800 dark:to-gray-700 transition-all duration-700'>
        <h3 className='text-3xl font-semibold mb-4'>Projects</h3>
          <div className=" max-w-6xl px-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold mb-2">Placeholder Text</h4>
              <p className="text-sm">Placeholder Text</p>
            </div>
          </div>
      </section>

      <section className='h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-yellow-100
      via-orange-200 to-white dark:from-yellow-900 dark:via-orange-800 dark:to-gray-700 transition-all duration-700'>
        <h3 className='text-3xl font-semibold mb-4'>Contact Me!</h3>
        <p><a href='#' className='underline'>Email</a></p>
        <p><a href='#' className='underline'>LinkedIn</a></p>
      </section>

      <footer className='text-center py-4 text-sm opacity-70 dark:bg-gray-900'>
        Caleb - 2025
      </footer>
    </div>
  );

}

export default App;