import { useState } from "react";

const SignInPage = () => {
  const [formData, setFormData] = useState(false);

  const [formFields, setFormFields] = useState({
    username: "",
    mail: "",
    password: "",
  });

  // ---------signUp/signIn Logic-------------
  const handleSignUp = () => {
    if (formData == true) {
      setFormData(false);
    } else {
      setFormData(true);
    }
  };

  // ---------getting Field Data---------
  const handleFieldsData = (e) => {
    const { name, value } = e.target;

    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  // -------------Handle Form--------------
  const handleform = (e) => {
    e.preventDefault();
    {
      !formData && localStorage.setItem("formData", JSON.stringify(formFields));
    }
    {
      formData && localStorage.getItem("formData", JSON.parse(formFields));
    }
    // Clear form fields after storing data
    setFormFields({ username: "", mail: "", password: "" });
  };

  return (
    <div className="w-1/4 border-gray-300 border rounded-xl shadow-xl h-80 mx-auto my-[10%]">
      <form
        onSubmit={handleform}
        className="flex flex-col w-10/12 h-80 mx-auto space-y-3 p-4 mt-16"
      >
        {!formData ? (
          <input
            name="username"
            type="text"
            required
            placeholder="Username"
            value={formFields.username}
            onChange={handleFieldsData}
            className="p-2 border border-gray-400 rounded-2xl shadow-lg"
          />
        ) : null}
        <input
          name="mail"
          type="mail"
          required
          placeholder="enter your mail"
          value={formFields.mail}
          onChange={handleFieldsData}
          className="p-2 border border-gray-400 rounded-2xl shadow-lg"
        />
        <input
          name="password"
          type="password"
          required
          placeholder={formData ? "password" : "create Password"}
          value={formFields.password}
          onChange={handleFieldsData}
          className="p-2 border border-gray-400 rounded-2xl shadow-lg"
        />
        <button
          type="submit"
          className="bg-gray-800 hover:bg-black text-white font-semibold py-2 px-4 rounded-xl w-fit ml-44 shadow-xl"
        >
          {formData ? "signIn" : "signUp"}
        </button>
        <h2 className="text-xs text-gray-400 font-semibold text-center">
          Already have an account?{" "}
          <span
            className="hover:underline cursor-pointer hover:text-black"
            onClick={handleSignUp}
          >
            signIn
          </span>
        </h2>
      </form>
    </div>
  );
};

export default SignInPage;
