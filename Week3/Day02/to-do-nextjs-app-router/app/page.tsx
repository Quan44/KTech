export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="p-6 sm:p-8 md:p-10 lg:p-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
            Home Page
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Welcome to the dashboard! Use the menu to navigate.
          </p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
