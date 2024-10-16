import { cva } from "class-variance-authority";
import { FC } from "react";

interface ButtonProps {}

const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:ouline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      default: 'bg-slate-900 text-white'
    }
  }
)

const Button: FC<ButtonProps> = ({}) => {
  return(
    <h1>hello</h1>
  )

}
export default Button