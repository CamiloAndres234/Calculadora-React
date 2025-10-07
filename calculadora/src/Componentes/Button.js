const Button = ({onClick,children, ...props})=>(
    <Button onClick={onClick}{...props}>
        {children}
    </Button>
);

export default Button;