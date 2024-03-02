import React, { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import environment from '../../../environemnt';

const NoteFile = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();

  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null); // Create a ref for the file input element

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
  
    const droppedFiles = Array.from(e.dataTransfer.files);
  
    // You can perform additional checks or processing on the dropped files if needed
  
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  
    // Ensure files are added to FormData
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });
    console.log("formData from handleDrop==>", formData);
  };

  const handleFileInputChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const postFormData = async () => {
    // try {
      // const formData = new FormData();
  
      // Get files directly from the input element
      // const inputFiles = fileInputRef.current.files;
      // console.log("inputFiles",inputFiles)
  
      // // Append each file to the FormData
      // for (let i = 0; i < inputFiles.length; i++) {
      //   formData.append(`file${i + 1}`, inputFiles[i]);
      // // }
      // const formData = new FormData();
      // for (let i = 0; i < files.length; i++) {
      // formData.append('documents', files[i]);
      // }
      // formData.append('propertyId ', 12);
      // console.log("formData",formData);
      // console.log("formData 22",formData);
      const formData = new FormData();

      for (const element of files) {
      formData.append('documents', element);
      }
      formData.append('propertyId', propertyId);

    fetch(`${environment.baseUrl}/v1/property/documents`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: 'Bearer '+localStorage.getItem('user-token'),
      },
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log(data);
        navigate(`/promissory/market-place`);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  }

  function kbToMb(sizeInKB) {
    const sizeInMB = (sizeInKB) / (1048576);
    return sizeInMB.toFixed(2);
  }

  return (
    <React.Fragment>
      <div className="files-upload-form form-container">
        <div className="loan-form px-2 px-sm-5 pt-3">
          <h6 className="title text-uppercase px-2 py-1 mt-2 mt-sm-4 mb-1 mb-sm-2">
            upload file
          </h6>
          <form action="">
            <div className="row">
              <div className="col-12">
                <div className="mb-2 mb-sm-3">
                  <div
                    className="promissory-upload-ele"
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                      >
                        <img
                          src={require('../../../assets/images/drag_drop.PNG')}
                          alt="..."
                          class="mb-1"
                        />
                        <div class="d-flex mb-1">
                          <p>Drag and Drop</p>
                          <span class="mx-1">or</span>
                    <label className="custom-file-upload">
                      <input
                        type="file"
                        className="form-control"
                        id="img_upld"
                        multiple
                        style={{ display: 'none' }}
                        onChange={handleFileInputChange}
                        ref={fileInputRef} 
                      />
                      Browse
                          </label>
                        </div>
                        <p class="supported-file-note">
                          (supported file types: .pdf/ .word/ .excel/ .jpg/
                          .png)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="uploaded-files">
                      {files.map((file, index) => (
                      <div className="file mb-2" key={index}>
                        <span class="file-name">
                        {file.name}
                        </span>
                        <span className="file-size"> {kbToMb(file?.size)} MB </span>
                        {/* <div class="document-title">
                          <label
                            for="doc3-title"
                            class="form-label sec-clr fs-10 fw-500 mb-0 text-uppercase"
                          >
                            document title
                          </label>
                          <input
                            type="text"
                            class="form-control black-clr promissory-input fs-12 fw-500"
                            value="Deed of trust and mortgage payment"
                            placeholder=""
                            id="doc3-title"
                          />
                        </div> */}
                        <div class="upload-status success-status">
                          <span class="status status-success-txt">
                            Uploaded
                          </span>
                          <i
                            class="fa fa-trash-o delete-icon"
                            aria-hidden="true" onClick={() => removeFile(index)}
                          ></i>
                        </div>
                      </div>
                      ))}
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="loan-footer mt-1 mt-sm-4 px-2 px-sm-3 pt-3 pb-0">
              <button
                class="btn text-uppercase pri-clr promissory-white-btn cancel-loan"
              >
                cancel
              </button>
              <div class="to-fro-btns">
                {/* <button
                  class="btn text-uppercase pri-clr promissory-white-btn files-back"
                >
                  back
                </button> */}
                <button
                  class="btn text-uppercase promissory-btn submit-loan-application next-step"
                  onClick={postFormData}
                >
                  submit
                </button>
              </div>
            </div>
          </div>
    </React.Fragment>
  );
};

export default NoteFile;
