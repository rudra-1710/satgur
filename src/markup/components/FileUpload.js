import React, { useEffect, useRef, useState } from 'react';

const FileUpload = ({ onStateChange }) => {

    const element = useRef(null);

    const [selectedFile, setSelectedFile] = useState(null);

    const onFileChange = (e) => {
        const file = e.target.files[0];
        const file_name_element = e.target.parentElement.querySelector('.file');

        file_name_element.innerHTML = file.name.slice(0, 9) + '...' + file.name.slice(file.name.length - 4, file.name.length);
        
        setSelectedFile(file);
        onStateChange(selectedFile);
    }

    useEffect(() => {
        const parent_element = element.current;

        parent_element.addEventListener('click', (e) => {
            const input = parent_element.querySelector('input');
            
            // open the file explorer
            input.click();
        });
    

    }, []);

    return (
        <div className="file-upload" ref={element}>
            <input type="file" onChange={onFileChange} />
            <span className="label">Attach Resume</span>
            <div className="select-wrapper">
                <span className="file">No file choosen</span>
                <div className="select">
                    <span>SELECT</span>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
