import React from 'react'

const Collection = () => {
  return (
    <section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header class="text-center">
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Best Collection</h2>

      <p class="mx-auto mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
        dicta incidunt est ipsam, officia dolor fugit natus?
      </p>
    </header>

    <ul class="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-3">
      <li>
        <a href="#" class="group relative block">
          <img
            src="https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 class="md:text-xl font-medium text-white ">cloud-like scent</h3>

            <span
              class="mt-1.5 inline-block bg-black px-3 py-2 text-xs font-medium uppercase tracking-wide text-white"
            >
              Read more
            </span>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="group relative block">
          <img
            src="https://images.pexels.com/photos/18133215/pexels-photo-18133215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 class="md:text-xl font-medium text-white ">Your scent that delivers spring</h3>

            <span
              class="mt-1.5 inline-block bg-black px-3 py-2 text-xs font-medium uppercase tracking-wide text-white"
            >
              Read more
            </span>
          </div>
        </a>
      </li>

      <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <a href="#" class="group relative block">
          <img
            src="https://images.pexels.com/photos/11250972/pexels-photo-11250972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 class="md:text-xl font-medium text-white">wear flowers</h3>

            <span
              class="mt-1.5 inline-block bg-black px-3 py-2 text-xs font-medium uppercase tracking-wide text-white"
            >
              Read more
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>
  )
}

export default Collection
