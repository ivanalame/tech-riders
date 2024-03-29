import React, { Component } from "react";

export default class ContactPage extends Component {
  render() {
    return (
      <>
        <section class="text-gray-600 body-font flex gap-12 flex-col mt-6">
          <div class="flex flex-wrap w-full mb-2 flex-col items-center text-center">
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Contacto
            </h2>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Nos podrás encontrar en la siguiente dirección
            </p>
          </div>

          <div class="text-gray-600 body-font min-w-screen relative shadow-sm shadow-[#00000050]">
            <div class="absolute inset-0 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.511772418684!2d-3.6546866111449883!3d40.397512100000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4225e8ff764297%3A0xe65b1da855dfafd4!2sColegio%20Tajamar!5e0!3m2!1ses!2ses!4v1703987089661!5m2!1ses!2ses"
                width="100%"
                height="100%"
                className=" opacity-90"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div class="container px-5 py-24 mx-auto flex">
              <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-sm shadow-[#00000050]">
                <h2 class="text-gray-900 text-2xl mb-1 font-medium title-font">
                  Contáctanos
                </h2>
                <p class="leading-relaxed mb-5 text-gray-600">
                  Queremos saber tu opinion
                </p>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Correo
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-white rounded border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-white rounded border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button class="text-white bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded text-lg">
                  Enviar
                </button>
              </div>
            </div>
          </div>
          <div class="bg-neutral-50 relative flex flex-wrap py-6 rounded shadow-sm shadow-[#00000050]">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-semibold text-gray-900  text-xs">
                Dirección
              </h2>
              <p class="mt-1">
                C. de Pío Felipe, 12, Puente de Vallecas, 28038 Madrid
              </p>
            </div>
            <div class="lg:w-1/2 px-6 lg:mt-0">
              <h2 class="title-font font-semibold text-gray-900  text-xs">
                Correo
              </h2>
              <a
                href="mailto:TechRiders@tajamar365.com"
                class="text-primary-500 leading-relaxed"
              >
                TechRiders@tajamar365.com
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
}
