import * as yup from 'yup';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { createHero, editHero } from '../redux/actions';

export const useHeroForm = ({ selectedHero, setOpenMenu, hero }) => {
  const dispatch = useDispatch();

  const currentPage = useSelector(state => state.mainReducer.page?.currentPage);

  useEffect(() => {
    formik.setValues({
      ...formik.values,
      ...hero,
    });

    if (!selectedHero.editMode) {
      formik.resetForm();
    }
    
  }, [hero, selectedHero]);

  const validationSchema = yup.object({
    nick_name: yup.string().required('Nick name is required').max(10, 'Nick name too long'),
    real_name: yup.string().max(15, 'Name too long').required('Real name is required'),
    origin_description: yup.string().min(30, 'Not enough characters').max(200, 'Description too long').required('Origin description is required'),
    superpowers: yup.string().max(150, 'Superpowers too long').required('Superpowers is required'),
    catch_phrase: yup.string().max(200, 'Carch phrase too long').required('Catch phrase is required'),
  });

  const formik = useFormik({
    initialValues: {
      nick_name: '',
      real_name: '',
      origin_description: '',
      superpowers: '',
      catch_phrase: '',
      images: []
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      selectedHero.editMode
        ? dispatch(editHero(currentPage, selectedHero.id, values, setOpenMenu))
        : dispatch(createHero(currentPage, values, setOpenMenu));
      resetForm();
    }
  });

  return formik;
};
