import { Button } from "react-bootstrap";

type Props = {
    className: string;
    text: string;
    click: () => void;
    disable?: boolean;
}

const CustomButton = ({className, text, click}: Props) => {
    return (
        <Button className={className} onClick={click}>
          {text}
        </Button>
    );
}

export default CustomButton;