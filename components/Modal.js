import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom";

function Modal() {
    const [open, setOpen] = useRecoilState(modalState);

    return (
        <div>
            <h1>modal</h1>
            {open && (
                <p>modal open</p>
            )}
        </div>
    )
}

export default Modal
