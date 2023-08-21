import clsx from "clsx";

interface InputProps {
  isError?: boolean;
  messageError?: string;
  value: number | string;
  id: number | string;
  name: number | string;
}

const InputText: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ messageError = "wajib di isi", isError = false,id, name, value, ...props }) => {
  return (
    <section>
      <input
        id={id}
        name={name}
        value={value}
        className={clsx(`w-full h-8 border border-gray-700 rounded px-2`, {
            "border-gray-700": isError === false,
            'border-red-500': isError ===true,  
        })}
        {...props}
      />

      {isError === true ? (
        <p className="text-red-500 text-sm">{messageError}</p>
      ) : (
        <></>
      )}

      {/* {isError ? (
          <p className="text-red-500 font-bold">{messageError}</p>
        ) : (
          <></>
        )} */}
    </section>
  );
};

export default InputText;
