import React, { FC } from 'react';
import { Formik, Field } from 'formik';
import { Button, Container, FlexCol, FlexRow } from '../globals';
import { StyledForm } from './style';
import * as Yup from 'yup';
import UIDuck from '../../redux/ui/ui.duck';
import PostsService from '../../services/posts/posts.service';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import PostsDuck from '../../redux/posts/posts.duck';
import { useTranslation } from '../../../i18n';

interface MyFormValues {
  title: string;
  body: string;
}

export type Permissions = 'edit' | 'create';

interface IMyForm {
  permission: Permissions;
  dispatch?: Dispatch;
  selectedPost?: any;
}

export const MyForm: FC<IMyForm> = ({ permission = 'read', dispatch, selectedPost }) => {
  const initialValues: MyFormValues = { title: '', body: '' };
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={permission === 'create' ? initialValues : selectedPost}
      validationSchema={Yup.object({
        title: Yup.string().required(),
        body: Yup.string().required()
      })}
      onSubmit={(values, { setSubmitting }) => {
        if (permission === 'create') {
          dispatch(UIDuck.setLoading(1));
          PostsService.createPost(values)
            .then(({ status }) => status === 201 && setSubmitting(false))
            .catch((e) => console.log(e))
            .finally(() => {
              dispatch(UIDuck.setLoading(-1));
              setSubmitting(false);
            });
        }
        if (permission === 'edit') {
          dispatch(UIDuck.setLoading(1));
          PostsService.editPost(selectedPost.id, values)
            .then(({ status }) => status === 200 && setSubmitting(false))
            .catch((e) => console.log(e))
            .finally(() => {
              dispatch(UIDuck.setLoading(-1));
              setSubmitting(false);
            });
        }
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Container>
          <StyledForm>
            <FlexCol>
              <label htmlFor="title">{t('title')}</label>
              <Field
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                className={touched.title && errors.title ? 'hasError' : ''}
              />
            </FlexCol>
            <FlexCol>
              <label htmlFor="body">{t('content')}</label>
              <Field
                name="body"
                id="body"
                as="textarea"
                placeholder="Content"
                rows="9"
                className={touched.body && errors.body ? 'hasError' : ''}
              />
            </FlexCol>
            <FlexRow style={{ justifyContent: 'flex-end' }}>
              <Button type="submit">{isSubmitting ? t('saving') : t('save')}</Button>
            </FlexRow>
          </StyledForm>
        </Container>
      )}
    </Formik>
  );
};

const MapStateToProps = (state: any) => ({
  isLoading: UIDuck.isLoading(state),
  selectedPost: PostsDuck.getSelectedPost(state)
});

export default connect(MapStateToProps)(MyForm);
