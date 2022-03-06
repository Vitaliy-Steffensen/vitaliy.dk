export const fields = {
  1: [
    {
      name: "email",
      required: true,
      formatValidation: (values) => {
        const emailRegex =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!emailRegex.test(values.email)) return "Email not valid format";
        return;
      },
    },
    { name: "name" },
    { name: "organisation" },
  ],
  2: [
    {
      name: "subject",
      required: true,
    },
    {
      name: "message",
      required: true,
      textEditor: true,
    },
  ],
};
