import React from 'react';
import { info } from '../../lib/utils';

const Contact = () => {
  return (
    <section className="font-poppins light:bg-gray-900 bg-gray-100 py-16">
      <div className="mx-auto max-w-5xl flex-1 justify-center px-4 py-4 md:px-7 lg:py-10">
        <div className="mx-auto max-w-xl">
          <div className="text-center ">
            <div className="relative flex flex-col items-center">
              <div className="absolute -top-14 left-0 hidden text-[120px] font-bold text-gray-400 opacity-10 md:block">
                Contact
              </div>
              <h1 className="light:text-white text-5xl font-bold">
                {' '}
                Our <span className="text-red-500"> Contact</span>{' '}
              </h1>
              <div className="mb-10 mt-1 flex w-24 overflow-hidden rounded">
                <div className="h-2 flex-1 bg-red-200"></div>
                <div className="h-2 flex-1 bg-red-400"></div>
                <div className="h-2 flex-1 bg-red-600"></div>
              </div>
            </div>
            <p className="mb-16 text-center text-base text-gray-500">
              Have questions, suggestions, or just want to chat about books?
              We&apos;re here for you! Use the information below to reach out,
              and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
        <div className="-mx-4 mb-8 flex flex-wrap">
          <div className="mb-4 w-full px-4 lg:mb-0 lg:w-1/3">
            <div className="light:bg-gray-800 h-full rounded-lg bg-gray-50 py-12 text-center shadow transition-all hover:shadow-lg">
              <div className="light:bg-red-500 mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                </svg>
              </div>
              <h2 className="light:text-gray-400 mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl">
                Email
              </h2>
              <a
                href="dd"
                className="light:text-gray-400 text-base font-medium text-gray-500 md:text-lg"
              >
                {info.email}
              </a>
            </div>
          </div>
          <div className="mb-4 w-full px-4 lg:mb-0 lg:w-1/3">
            <div className="light:bg-gray-800 h-full rounded-lg bg-gray-50 py-12 text-center shadow transition-all hover:shadow-lg">
              <div className="light:bg-red-500 mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                </svg>
              </div>
              <h2 className="light:text-gray-400 mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl">
                Phone
              </h2>
              <a
                href="#"
                className="light:text-gray-400 text-base font-medium text-gray-500 md:text-lg"
              >
                {info.phone}
              </a>
            </div>
          </div>
          <div className="mb-4 w-full px-4 lg:mb-0 lg:w-1/3">
            <div className="light:bg-gray-800 h-full rounded-lg bg-gray-50 py-12 text-center shadow transition-all hover:shadow-lg">
              <div className="light:bg-red-500 mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-grid-3x3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z"></path>
                </svg>
              </div>
              <h2 className="light:text-gray-400 mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl">
                Social
              </h2>
              <a
                href="#"
                className="light:text-red-400 light:hover:text-red-300 mr-4 inline-block text-red-600 hover:text-red-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook h-6 w-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="light:text-red-400 light:hover:text-red-300 mr-4 inline-block text-red-600 hover:text-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitter h-6 w-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="light:text-red-400 light:hover:text-red-300 mr-4 inline-block text-red-500 hover:text-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin h-6 w-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="light:border-gray-800 light:bg-gray-800 rounded-md border bg-white px-8 py-8 shadow-md">
          <form action="">
            <div className="mb-6">
              <h2 className="text-gray-00 light:text-gray-400 text-xl font-bold">
                Please send message for futher information!{' '}
              </h2>
            </div>
            <div className="-mx-2 mb-4 flex flex-wrap">
              <div className="mb-4 w-full px-2 lg:mb-0 lg:w-1/2">
                <input
                  className="light:text-gray-400 light:bg-gray-700 light:border-gray-700 w-full rounded-md border bg-gray-50 px-3 py-2 leading-loose"
                  type="text"
                  placeholder="First Name.."
                  required={true}
                />
              </div>
              <div className="w-full px-2 lg:w-1/2">
                <input
                  className="light:text-gray-400 light:bg-gray-700 light:border-gray-700 w-full rounded-md border bg-gray-50 px-3 py-2 leading-loose"
                  type="text"
                  placeholder="Last Name.."
                  required={true}
                />
              </div>
            </div>
            <input
              className="light:text-gray-400 light:bg-gray-700 light:border-gray-700 mb-4 w-full rounded-md border bg-gray-50 px-3 py-2 leading-loose"
              type="email"
              placeholder="abc@gmail.com"
              required={true}
            />
            <textarea
              rows={4}
              //   type='message'
              placeholder="Write a message..."
              required={true}
              className="light:placeholder-gray-400 light:text-gray-400 light:border-gray-800 light:bg-gray-700 mb-4 block w-full rounded border bg-gray-50 px-4 py-7 leading-tight text-gray-700 "
            ></textarea>
            <button className="light:bg-red-500 light:hover:bg-red-600 w-full rounded-md bg-red-600 py-4 text-sm font-bold leading-normal text-white transition-all duration-300 hover:bg-red-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
