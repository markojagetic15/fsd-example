interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export const Input = ({ label, ...props }: Props) => {
    return (
        <div>
            <label>{label}</label>
            <input {...props} className="input" />
        </div>
    )
}
