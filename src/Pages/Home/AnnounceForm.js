import React from 'react';

const AnnounceForm = () => {
    return (
      <div className=' min-h-screen w-full mx-auto my-20'>
        <label for="my-modal-6" class="btn lg:w-1/3 w-2/3 bg-white border-gray-400 border-2 p-3 h-20">
        <div class="avatar flex items-center">
  <div className="w-12 me-8 rounded-full">
    <img className='' src="https://i.pinimg.com/736x/5a/6b/16/5a6b16956a2753892d9ee5714f6f112a.jpg" />
  </div>
  <p>Announce something to your class!!! </p>
</div>
        </label>
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box bg-indigo-300">
          <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="font-bold text-lg">
            Announce something to your class!!! 
            </h3>
            <textarea class="textarea textarea-bordered h-32 m-5 block mx-auto input w-full max-w-xl" placeholder="Announce your opinion!!!"></textarea>
            <div class="modal-action">
              <label for="my-modal-6" class="btn ">
                Submit
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AnnounceForm;