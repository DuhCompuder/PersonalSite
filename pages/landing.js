import Image from "next/image"

export default function Landing() {
    return (
        <div className="bg-gray-100">
    <div className="px-8 py-12">
      {/* <img className="h-10" src="/img/logo.svg" alt="Workcation" /> */}
      <img src="/logo.svg" alt="Workcation" className="h-10" />
      <img
        className="mt-6 rounded-lg shadow-xl"
        // src="/beach-work.jpg"
        src="https://cdn.pixabay.com/photo/2021/11/02/15/30/tealights-6763542_960_720.jpg"
        alt="Woman workcationing on the beach"
      />

      {/* <div className="relative w-24">
      <Image
        className="mt-6 rounded-lg shadow-xl"
        src="/beach-work.jpg"
    //   src="https://cdn.pixabay.com/photo/2021/11/02/15/30/tealights-6763542_960_720.jpg"
      alt="Woman workcationing on the beach"
      layout="fill"
    /> 
      </div> */}
    
      <h1 className="mt-6 text-2xl font-bold text-gray-900">
        You can work from anywhere.
        <span className="text-indigo-500">Take advantage of it.</span>
      </h1>
      <p className="mt-2 text-gray-600">
        Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some
        nice weather even when you're not on vacation.
      </p>
      <div className="mt-4">
        <a
          className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-white uppercase tracking-wider font-semibold text-sm"
          href="#"
        >
          Book your escape
        </a>
      </div>
    </div>
  </div>
    )
}