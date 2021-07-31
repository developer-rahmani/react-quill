import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import './../styles/quill.scss';

function Quill() {
    const { quillRef } = useQuill();

    return (
        <>
            <div className="quill">
                <div ref={quillRef} />
            </div>
        </>
    );
}

export default Quill;
