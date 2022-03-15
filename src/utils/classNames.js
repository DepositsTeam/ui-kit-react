export default function classNames(obj, className) {
  let generatedClass;
  if (Array.isArray(obj)) {
    generatedClass = obj.join(" ");
  } else {
    generatedClass = Object.entries(obj)
      .filter((entry) => entry[1])
      .reduce(
        (carry, current) => carry + `${carry ? " " : ""}${current[0]}`,
        ""
      );
  }
  return (generatedClass + (className ? ` ${className}` : "")).trim();
}