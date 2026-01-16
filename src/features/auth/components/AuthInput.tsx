
interface AuthInputProps {
    label: string;
    type: string;
    placeholder: string;
    name: string;
    register: any;
}

const AuthInput = ({
    label,
    type,
    placeholder,
    name,
    register,
}: AuthInputProps) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-xl font-medium">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                {...register(name)}
                className="input-auth"
            />
        </div>
    )
}

export default AuthInput;