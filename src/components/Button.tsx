type ButtonProps = {
  children?: React.ReactNode
  // The ? means that the prop is an OPTIONAL prop. You can declare or not
  type?: "button" | "submit",
  onClick ?: () => void,
}

const Button = ({children, type, onClick} : ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className="bg-[#88BCD1] px-5 py-2 text-white rounded-full">{children}</button>
  )
}

export default Button