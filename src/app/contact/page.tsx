import Link from "next/link";
export default function Form() {
  return (
    <form className="space-y-6 px-4 max-w-sm mx-auto mb-5 mt-4 w-full">
      {/* Name Field */}
      <div className="flex items-center">
        <label className="text-slate-400 font-medium w-36 text-sm">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="px-2 py-2 w-full border-b-2 border-gray-200 focus:border-slate-900 outline-none text-sm bg-white"
        />
      </div>

      {/* Email Field */}
      <div className="flex items-center">
        <label className="text-slate-400 font-medium w-36 text-sm">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-2 py-2 w-full border-b-2 border-gray-200 focus:border-slate-900 outline-none text-sm bg-white"
        />
      </div>

      {/* Phone Number Field */}
      <div className="flex items-center">
        <label className="text-slate-400 font-medium w-36 text-sm">Phone No.</label>
        <input
          type="number"
          placeholder="Enter your phone no"
          className="px-2 py-2 w-full border-b-2 border-gray-200 focus:border-slate-900 outline-none text-sm bg-white"
        />
      </div>

      {/* State Field */}
      <div className="flex items-center">
        <label className="text-slate-400 font-medium w-36 text-sm">State</label>
        <input
          type="text"
          placeholder="Enter your state"
          className="px-2 py-2 w-full border-b-2 border-gray-200 focus:border-slate-900 outline-none text-sm bg-white"
        />
      </div>

      {/* Submit Button */}
     <Link href={"/"}> <button
        type="button"
        className="mt-10 px-6 py-2 w-full bg-slate-800 hover:bg-slate-900 text-sm font-medium text-white mx-auto block cursor-pointer"
      >
        Submit
      </button></Link>
    </form>
  );
}
