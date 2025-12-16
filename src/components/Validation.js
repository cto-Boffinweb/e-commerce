export const validate = (values, rules) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const value = values[field];
    const rule = rules[field];
    const fieldName = field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());

    // Required (supports function)
    if (rule.required) {
      const isRequired =
        typeof rule.required === "function"
          ? rule.required(values)
          : rule.required;

      if (isRequired) {
        if (
          value === null ||
          value === undefined ||
          (typeof value === "string" && value.trim() === "") ||
          (Array.isArray(value) && value.length === 0)
        ) {
          errors[field] = `${fieldName} is required`;
          return;
        }
      }
    }

    // Min Length
    if (rule.min && typeof value === "string" && value.trim().length < rule.min) {
      errors[field] = `${fieldName} must be at least ${rule.min} characters`;
    }

    // Email
    if (rule.type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errors[field] = "Invalid email format";
      }
    }

    // Image
    if (rule.type === "image" && value) {
      if (!(value instanceof File) || !value.type.startsWith("image/")) {
        errors[field] = "Only images allowed";
      }
    }
  });

  return errors;
};
