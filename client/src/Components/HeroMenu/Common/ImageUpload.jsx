import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Spinner from '../../Shared/Spinner';
import CloseIcon from '@mui/icons-material/Close';

const ImageUpload = ({ loading, hero, menuOpen, formik, selectedHero }) => {
  const [base64photos, setBase64photos] = useState([]);

  useEffect(() => {
    if (menuOpen && hero && selectedHero.editMode) {
      formik.setFieldValue({
        images: hero?.images || [],
      });
      
      setBase64photos(hero.images || []);
    }
  }, [menuOpen, hero, selectedHero.editMode]); 
  
  const handleOnChange = (event) => {
    const files = Array.from(event.currentTarget.files);
    const newBase64Photos = [];

    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newBase64Photos.push(reader.result);
        if (newBase64Photos.length === files.length) {
          setBase64photos(prev => [...prev, ...newBase64Photos]);
          formik.setFieldValue('images', [...formik.values.images, ...newBase64Photos]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImg = (index) => {
    const updatedPhotos = base64photos.filter((_, i) => i !== index);
    setBase64photos(updatedPhotos);
    formik.setFieldValue('images', updatedPhotos);
  };
  
  return (
    <div className="md:w-[250px] w-full md:h-[250px]  h-[300px] bg-[rgba(13,13,13,0.3)] overflow-auto scrollbar-thin items-center justify-center ">
      {base64photos.length > 0 && !loading ? (
        <div className="flex flex-wrap justify-center">
          {base64photos.map((photo, index) => (
            <div key={index} className="relative m-[7px]">
              <img
                src={photo}
                className="object-contain border-blue-500 border-[2px]"
                alt={`Photo ${index + 1}`}
              />
              <CloseIcon
                onClick={() => handleRemoveImg(index)} 
                className="text-gray-600 font-bold cursor-pointer text-xl absolute top-[3px] right-[3px]" 
              />
            </div>
          ))}
        </div>
      ) : (
        <Button
          disabled={loading}
          sx={{ width: '100%', height: '100%', borderRadius: '0', background: '#D3D3D3' }}
          variant="contained"
          component="label"
        >
          {loading ? <Spinner color="gray" height={30} width={30} /> : 'Upload image'}
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            onChange={handleOnChange}
            multiple
            hidden
          />
        </Button>
      )}
    </div>
  );
};

export default ImageUpload;
