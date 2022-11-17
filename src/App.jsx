const App = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className='px-6 py-8 mx-auto bg-white border-gray-200 rounded shadow w-96'>
      <h2 className='text-2xl font-semibold text-center'>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className='w-full form-control'>
          <label className='label'>Email</label>
          <input
            type='email'
            placeholder='Type here'
            className='w-full input input-bordered input-sm'
          />
        </div>
        <div className='w-full form-control'>
          <label className='label'>Password</label>
          <input
            type='password'
            placeholder='Type here'
            className='w-full input input-bordered input-sm'
          />
        </div>
        <div className='flex justify-center'>
          <button className='mt-5 btn btn-sm btn-primary'>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default App;
