import React, { FC, useState } from 'react';
import { SC } from '../../styles/theme';
import { Button, Container } from '../globals';
import { Table } from './style';
import { Link, useTranslation } from '../../../i18n';
import Modal from 'react-modal';
import UIDuck from '../../redux/ui/ui.duck';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import PostsService from '../../services/posts/posts.service';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '25%'
  }
};

export interface IPosts extends SC {
  allPosts: any;
  modalOpen: boolean;
  dispatch?: Dispatch;
  isLoading?: boolean;
}

const Posts: FC<IPosts> = ({ allPosts, modalOpen, dispatch, isLoading }) => {
  const [postId, setPostId] = useState(undefined);
  const { t } = useTranslation();

  const tableData = (allPosts: any[]) => {
    return allPosts.map((value, index) => (
      <tr key={index}>
        <td>{value.title}</td>
        <td>
          <Link href={`/post/[id]`} as={`post/${value.id}`}>
            <Button>{t('detail')}</Button>
          </Link>
          <Button
            onClick={() => {
              dispatch(UIDuck.openModal());
              setPostId(value.id);
            }}
          >
            {t('delete')}
          </Button>
        </td>
      </tr>
    ));
  };

  const deleteItem = async (id: number) => {
    dispatch(UIDuck.setLoading(1));
    await PostsService.deletePost(id)
      .then(({ status }) => status === 200 && dispatch(UIDuck.closeModal()))
      .catch((e) => console.log(e))
      .finally(() => dispatch(UIDuck.setLoading(-1)));
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>{t('title')}</th>
            <th>{t('actions')}</th>
          </tr>
        </thead>
        <tbody>{tableData(allPosts)}</tbody>
      </Table>
      <Modal isOpen={modalOpen} style={customStyles} ariaHideApp={false}>
        <div style={{ textAlign: 'center' }}>
          <h4>{t('deleteItem')}</h4>
          <hr />
          <Button onClick={() => dispatch(UIDuck.closeModal())}>{t('close')}</Button>
          <Button onClick={() => deleteItem(postId)}>{`${isLoading ? t('deleting') : t('delete')}`}</Button>
        </div>
      </Modal>
    </Container>
  );
};

const MapStateToProps = (state: any) => ({
  modalOpen: UIDuck.isModalOpen(state),
  isLoading: UIDuck.isLoading(state)
});

export default connect(MapStateToProps)(Posts);
