import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import './../styles/quill.scss';

function Quill() {
    const formats = ['header', 'image', 'underline', 'italic', 'bold', 'blockquote', 'code-block', 'list', 'bullet', 'direction', 'align', 'color', 'background'];
    const modules = {
        toolbar: [[{ header: [1, 2, 3, false] }, 'image', 'underline', 'italic', 'bold', 'blockquote', 'code-block', { list: 'ordered' }, { list: 'bullet' }, { direction: 'rtl' }, { align: ['right', '', 'center', 'justify'] }, { color: [] }, { background: [] }, 'clean']],
    };
    const { quillRef } = useQuill({ formats, modules });

    return (
        <>
            <div className="quill">
                <div ref={quillRef} />
            </div>
        </>
    );
}

export default Quill;
