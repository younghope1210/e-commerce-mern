// eslint-disable-next-line no-unused-vars
import React from 'react'
import Dropzone from 'react-dropzone'
import axiosInstance from '../utils/axios';


// npm install react-dropzone 설치
// eslint-disable-next-line react/prop-types
const FileUpload = ({ onImageChange, images }) => {

  const handleDrop = async (files) => {
    let formData = new FormData();

    const config = {
      header: { 'content-type': 'multipart/form-data' }
    }

    formData.append('file', files[0]);

    try {
      const response = await axiosInstance.post('/products/image', formData, config);
      onImageChange([...images, response.data.fileName]); //props로 부모 컨모넌트에 보내기

    } catch (error) {
      console.error(error);
    }

  }

// 상품 이미지 클릭시 삭제시키기
  const handleDelete = (image) => {
    // eslint-disable-next-line react/prop-types
    const currentIndex = images.indexOf(image); 
    let newImages = [...images];
    newImages.splice(currentIndex, 1);
    onImageChange(newImages);
  }


  return (
    <div className='flex gap-4'>

      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <section
            className='min-w-[300px] h-[300px] border flex items-center justify-center'
          >
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p className='text-3xl'>+</p>
            </div>
          </section>
        )}
      </Dropzone>

      <div className='flex-grow h-[300px] border flex  items-center justify-center overflow-x-scroll overflow-y-hidden'>
        {images.map((image,id) => (
          <div key={id} onClick={() =>handleDelete(image)}>
            <img
              className='min-w-[300px] h-[300px]'
            //   src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
              src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
              alt={image}
            />
          </div>
        ))}
      </div>

    </div>
  )
}

export default FileUpload