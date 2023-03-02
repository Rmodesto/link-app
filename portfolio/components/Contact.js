// contact form  email name  message  submit

const Contact = () => {
  return (
    // form email name  message  submit
    <div className="bg-black-500">
      <div className="flex justify-center ">
        <h1 className="text-4xl font-bold">Contact</h1>
      </div>
      <form className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-gray-500 rounded-lg p-2"
        />
        <input
          type="text"
          placeholder="Name"
          className="border-2 border-gray-500 rounded-lg p-2"
        />
        <textarea
          placeholder="Message"
          className="border-2 border-gray-500 rounded-lg p-2"
        />
        <button className="border-2 border-blue text-white rounded-lg p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
