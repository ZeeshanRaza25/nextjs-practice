export default function About() {
  return (
    <section className="font-poppins light:bg-gray-800 flex items-center bg-stone-50 xl:h-screen ">
      <div className="mx-auto max-w-6xl flex-1 justify-center py-4 md:px-6 lg:py-6">
        <div className="flex flex-wrap items-center ">
          <div className="mb-10 w-full px-4 lg:mb-0 lg:w-1/2">
            <div className="lg:max-w-md">
              <span className="light:text-red-500 text-xl font-semibold uppercase text-red-600">
                About Us
              </span>
              <h2 className="light:text-gray-300 mb-6 mt-4 text-2xl font-bold">
                We are the large business expert in Europe and Asia
              </h2>
              <p className="light:text-gray-400 mb-10 text-gray-600 ">
                Welcome to Maktabah Hassan ul Hind , where books meet
                simplicity. We&apos;re passionate about connecting readers with
                their next favorite read. Explore our curated collection,
                discover book details, and place your order effortlessly through
                WhatsApp.
              </p>
            </div>
          </div>
          <div className="mb-10 w-full px-4 lg:mb-0 lg:w-1/2">
            <div className="mb-4 flex">
              <span className="light:bg-red-500 light:text-gray-100 mr-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded bg-red-500 text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="bi bi-file-earmark-code h-5 w-5"
                  viewBox="0 0 10 10"
                >
                  {/* <path d='M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z' />
                  <path d='M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z' /> */}
                </svg>
              </span>
              <div>
                <h2 className="light:text-gray-300 mb-4 text-xl font-bold leading-tight md:text-2xl">
                  Book Lovers&apos; Hub
                </h2>
                <p className="light:text-gray-400 text-base leading-loose text-gray-500">
                  The hub for book lovers. Our passion for books drives us to
                  create a space where you can find, explore, and indulge in the
                  joy of reading.
                </p>
              </div>
            </div>
            <div className="mb-4 flex">
              <span className="light:bg-red-500 light:text-gray-100 mr-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded bg-red-500 text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="bi bi-file-text h-5 w-5"
                  viewBox="0 0 10 10"
                >
                  {/* <path d='M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z' />
                  <path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z' /> */}
                </svg>
              </span>
              <div>
                <h2 className="light:text-gray-300 mb-4 text-xl font-bold leading-tight md:text-2xl">
                  Visionaries
                </h2>
                <p className="light:text-gray-400 text-base leading-loose text-gray-500">
                  Embark on a literary adventure with us, where our visionaries
                  curate diverse collections to ignite your imagination and feed
                  your passion for reading.
                </p>
              </div>
            </div>
            <div className="mb-4 flex">
              <span className="light:bg-red-500 light:text-gray-100 mr-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded bg-red-500 text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="bi bi-bank2 h-5 w-5"
                  viewBox="0 0 10 10"
                >
                  {/* <path d='M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z'></path> */}
                </svg>
              </span>
              <div>
                <h2 className="light:text-gray-300 mb-4 text-xl font-bold leading-tight md:text-2xl">
                  Beyond Pages
                </h2>
                <p className="light:text-gray-400 text-base leading-loose text-gray-500">
                  Experience the magic beyond pages with us. Our commitment
                  extends beyond selling books; we&apos;re here to connect with
                  you through the stories that resonate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
